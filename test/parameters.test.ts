import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import { MethodParametersOnNewLine } from "../src/parameters";
import * as api from "../src/api";
import * as utils from "./ruleUtils";

describe("Parameter tests", () => {

	let parametersReport: api.Diagnostic[] = [];

	before(() => {
		parametersReport = utils.getDiagnostics(
			"ZTestParams.PROC",
			MethodParametersOnNewLine.name
		);
	});

	test("No report for no params", () => {
		assert.strictEqual(utils.diagnosticsOnLine(2, parametersReport).length, 0);
	});

	test("No report for one param on same line", () => {
		assert.strictEqual(utils.diagnosticsOnLine(7, parametersReport).length, 0);
	});

	test("Two reports for two params", () => {
		assert.strictEqual(utils.diagnosticsOnLine(12, parametersReport).length, 2);
	});

	test("Catch label", () => {
		assert.strictEqual(utils.diagnosticsOnLine(17, parametersReport).length, 3);
	});

	test("Catch no types on params", () => {
		assert.strictEqual(utils.diagnosticsOnLine(22, parametersReport).length, 4);
	});

	test("Catch tree", () => {
		assert.strictEqual(utils.diagnosticsOnLine(27, parametersReport).length, 2);
	});

	test("Catch tree with empty parens", () => {
		assert.strictEqual(utils.diagnosticsOnLine(32, parametersReport).length, 2);
	});

	test("Catch tree with empty parens and commas", () => {
		assert.strictEqual(utils.diagnosticsOnLine(37, parametersReport).length, 2);
	});
});
