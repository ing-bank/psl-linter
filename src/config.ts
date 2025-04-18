import * as fs from "fs-extra";
import * as minimatch from "minimatch";
import * as path from "node:path";

type ConfigBaseDir = string;
export const activeConfigs: Map<ConfigBaseDir, RegexConfig> = new Map();

export interface Config {
	include: ConfigSetting;
	exclude: ConfigSetting;
}
export interface RegexConfig {
	include: RegexConfigObj[];
	exclude: RegexConfigObj[];
}
interface ConfigSetting { [filePattern: string]: string[]; }

interface RegexConfigObj {
	pattern: RegExp;
	rules: string[];
}

export async function setConfig(configPath: string) {
	const configBaseDir: ConfigBaseDir = path.dirname(configPath);
	// TODO: (Mischa Reitsma) No validation of the loaded config.
	const config: Config = await fs.readFile(configPath)
		.then(b => JSON.parse(b.toString()) as Config);
	activeConfigs.set(configBaseDir, transform(config));
}

export function transform(config: Config): RegexConfig {
	const includes: RegexConfigObj[] = [];
	const excludes: RegexConfigObj[] = [];
	for (const pattern in config.include) {
		if (Object.prototype.hasOwnProperty.call(config.include, pattern)) {
			const rules = config.include[pattern];
			const regexpPattern = minimatch.makeRe(pattern);

			if (!regexpPattern) throw new Error(`Invalid regexp patter ${pattern}`);

			includes.push({ pattern: regexpPattern, rules });
		}
	}
	for (const pattern in config.exclude) {
		if (Object.prototype.hasOwnProperty.call(config.exclude, pattern)) {
			const rules = config.exclude[pattern];
			const regexpPattern = minimatch.makeRe(pattern);

			if (!regexpPattern) throw new Error(`Invalid regexp patter ${pattern}`);

			excludes.push({ pattern: regexpPattern, rules });
		}
	}
	return { include: includes, exclude: excludes };
}

export function removeConfig(configPath: string) {
	const configBaseDir: ConfigBaseDir = path.dirname(configPath);
	activeConfigs.delete(configBaseDir);
}

export function getConfig(fsPath: string): RegexConfig {
	for (const configBaseDir of activeConfigs.keys()) {
		const relative = path.relative(configBaseDir, fsPath);
		if (!!relative && !relative.startsWith("..") && !path.isAbsolute(relative)) {
			return activeConfigs.get(configBaseDir);
		}
	}
	return null;
}

export function matchConfig(fileName: string, ruleName: string, configObj: RegexConfig): boolean {
	let matches: boolean = false;
	const findMatch = (configSettings: RegexConfigObj[]) => {
		for (const configSetting of configSettings) {
			if (!fileName.match(configSetting.pattern)) continue;
			for (const rulePattern of configSetting.rules) {
				if (rulePattern === "*" || rulePattern === ruleName) return true;
			}
		}
		return false;
	};

	matches = findMatch(configObj.include);
	if (!matches) return false;
	return !findMatch(configObj.exclude);
}
