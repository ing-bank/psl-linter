import { test } from "node:test";
import * as assert from "node:assert/strict";

import { Config, matchConfig, transform } from "../src/config";

const config: Config = {
	exclude: {
		"ZRPC.PROC": ["*"],
	},
	include: {
		"*": ["TodoInfo"],
		"*.psl": ["*"],
		"Z*": ["*"],
	},
};

test("does not match ZRPC.PROC", () => {
	assert.strictEqual(matchConfig("ZRPC.PROC", "arule", transform(config)), false);
});

test("does match x.psl", () => {
	assert.strictEqual(matchConfig("x.psl", "arule", transform(config)), true);
});

test("does match ZRPC1.PROC", () => {
	assert.strictEqual(matchConfig("ZRPC1.PROC", "arule", transform(config)), true);
});

test("TodoInfo match A.PROC", () => {
	assert.strictEqual(matchConfig("A.PROC", "TodoInfo", transform(config)), true);
});

test("arule match A.PROC", () => {
	assert.strictEqual(matchConfig("A.PROC", "arule", transform(config)), false);
});
