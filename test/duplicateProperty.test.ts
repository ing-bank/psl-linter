import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import { PropertyIsDuplicate } from "../src/elementsConventionChecker";
import * as utils from "./ruleUtils";

describe("Duplicate property test", () => {

	let propertyisDuplicate: api.Diagnostic[] = [];

	before(() => {
		propertyisDuplicate = utils.getDiagnostics(
			"ZDuplicateProperty.PROC",
			PropertyIsDuplicate.name
		);
	});

	test("line 1", () => {
		const diagnostics = utils.diagnosticsOnLine(1, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 2", () => {
		const diagnostics = utils.diagnosticsOnLine(2, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 3", () => {
		const test1Message = 'Property "aCCount" is already declared with different case.';
		const diagnostics = utils.diagnosticsOnLine(3, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 4", () => {
		const test1Message = 'Property "accounT" is already declared with different case.';
		const diagnostics = utils.diagnosticsOnLine(4, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 5", () => {
		const diagnostics = utils.diagnosticsOnLine(5, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 6", () => {
		const test1Message = 'Property "customer" is already declared.';
		const diagnostics = utils.diagnosticsOnLine(6, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 7", () => {
		const test1Message = 'Property "array" is already declared.';
		const diagnostics = utils.diagnosticsOnLine(7, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 8", () => {
		const test1Message = 'Property "aRRay" is already declared with different case.';
		const diagnostics = utils.diagnosticsOnLine(8, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 9", () => {
		const test1Message = 'Property "array" is already declared.';
		const diagnostics = utils.diagnosticsOnLine(9, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 10", () => {
		const test1Message = 'Property "array" is already declared.';
		const diagnostics = utils.diagnosticsOnLine(10, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 11", () => {
		const diagnostics = utils.diagnosticsOnLine(11, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 12", () => {
		const test1Message = 'Property "customer" is already declared.';
		const diagnostics = utils.diagnosticsOnLine(12, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

	test("line 13", () => {
		const test1Message =
			'Property "inliteral" is already declared with different case.';
		const diagnostics = utils.diagnosticsOnLine(13, propertyisDuplicate);
		assert.strictEqual(diagnostics.length, 1);
		assert.strictEqual(diagnostics[0].message, test1Message);
	});

});
