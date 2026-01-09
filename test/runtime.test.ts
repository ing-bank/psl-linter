import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import { RuntimeStart } from "../src/runtime";
import * as utils from "./ruleUtils";
import { fail } from "node:assert";

describe("Runtime start tests", () => {

	let runtimeDiagnostics: api.Diagnostic[] = [];

	before(() => {
		runtimeDiagnostics = utils.getDiagnostics("ZRuntime.PROC", RuntimeStart.name);
	});

	test("Diagnostic count", () => {
		assert.strictEqual(runtimeDiagnostics.length, 5);
	});

	test("No diagnostic first start", () => {
		assert.deepStrictEqual(utils.diagnosticsOnLine(9, runtimeDiagnostics), []);
	});

	test("One diagnostic second start", () => {
		const reports = utils.diagnosticsOnLine(13, runtimeDiagnostics);
		assert.strictEqual(reports.length,1);
		assert.strictEqual(
			reports[0].message,
			'Declaration "flagged" referenced inside Runtime.start but not in ' +
			"variable list."
		);
	});

	test("One diagnostic third start", () => {
		const reports = utils.diagnosticsOnLine(18, runtimeDiagnostics);
		assert.strictEqual(reports.length,1);
		assert.strictEqual(
			reports[0].message,
			'Declaration "flagged" referenced inside Runtime.start but not in ' +
			"variable list."
		);
	});

	test("No diagnostic with comment", () => {
		assert.deepStrictEqual(utils.diagnosticsOnLine(24, runtimeDiagnostics), []);
	});

	test("No diagnostic fifth start", () => {
		assert.deepStrictEqual(utils.diagnosticsOnLine(29, runtimeDiagnostics), []);
	});

	test("Method in middle with new variable", () => {
		const reports = utils.diagnosticsOnLine(35, runtimeDiagnostics);
		assert.strictEqual(reports.length, 1);
		assert.strictEqual(
			reports[0].message, 
			'Parameter "flaggedParam" referenced inside Runtime.start but not in ' +
			"variable list."
		);
	});

	test("Method in middle with new variable", () => {
		const reports = utils.diagnosticsOnLine(42, runtimeDiagnostics);
		const diagnostic = reports[0];
		const relatedArray = diagnostic.relatedInformation;

		if (!relatedArray)
			fail("No diagnostics generated");

		const source = relatedArray[0];
		const reference = relatedArray[1];
		assert.strictEqual(reports.length, 1);
		assert.strictEqual(
			diagnostic.message,
			'Declaration "notFlaggedTwice" referenced inside Runtime.start but not ' +
			"in variable list."
		);
		assert.strictEqual(relatedArray.length, 2);
		assert.strictEqual(source.message, 'Source of "notFlaggedTwice"');
		assert.strictEqual(reference.message, 'Reference to "notFlaggedTwice"');
	});

	test("No literal", () => {
		const reports = utils.diagnosticsOnLine(49, runtimeDiagnostics);
		assert.strictEqual(reports.length, 1);
		assert.strictEqual(
			reports[0].message,
			'Declaration "flagged" referenced inside Runtime.start but not in ' +
			"variable list."
		);
	});
});
