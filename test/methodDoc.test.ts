import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import { MethodDocumentation, MethodSeparator, TwoEmptyLines } from "../src/methodDoc";
import * as utils from "./ruleUtils";

function messageOnLine(lineNumber: number, allDiagnostics: api.Diagnostic[]): string {
	const diagnosticsOnLine = utils.diagnosticsOnLine(lineNumber, allDiagnostics);
	if (!diagnosticsOnLine.length) return "";
	return diagnosticsOnLine[0].message;
}

describe("Method documentation tests", () => {
	const procName = "ZMethodDoc.PROC";
	let docDiagnostics: api.Diagnostic[] = [];
	let emptyLineDiagnostics: api.Diagnostic[] = [];
	let separatorDiagnostics: api.Diagnostic[] = [];

	before(() => {
		docDiagnostics = utils.getDiagnostics(procName, MethodDocumentation.name);
		emptyLineDiagnostics = utils.getDiagnostics(procName, TwoEmptyLines.name);
		separatorDiagnostics = utils.getDiagnostics(procName, MethodSeparator.name);
	});

	test("allProblemsNoLineAbove", () => {
		assert.strictEqual(
			messageOnLine(0, docDiagnostics),
			'Documentation missing for label "allProblemsNoLineAbove".'
		);
		assert.strictEqual(
			messageOnLine(0, separatorDiagnostics),
			'Separator missing for label "allProblemsNoLineAbove".'
		);
		assert.strictEqual(
			messageOnLine(0, emptyLineDiagnostics),
			'There should be two empty lines above label "allProblemsNoLineAbove".'
		);
	});
	test("allProblems", () => {
		assert.strictEqual(
			messageOnLine(2, docDiagnostics),
			'Documentation missing for label "allProblems".'
		);
		assert.strictEqual(
			messageOnLine(2, separatorDiagnostics),
			'Separator missing for label "allProblems".'
		);
		assert.strictEqual(
			messageOnLine(2, emptyLineDiagnostics),
			'There should be two empty lines above label "allProblems".'
		);
	});
	test("onlySeparator", () => {
		assert.strictEqual(
			messageOnLine(5, docDiagnostics),
			'Documentation missing for label "onlySeparator".'
		);
		assert.strictEqual(messageOnLine(5, separatorDiagnostics), "");
		assert.strictEqual(
			messageOnLine(5, emptyLineDiagnostics),
			'There should be two empty lines above label "onlySeparator".'
		);
	});
	test("twoLineSeparator", () => {
		assert.strictEqual(
			messageOnLine(14, docDiagnostics),
			'Documentation missing for label "twoLineSeparator".'
		);
		assert.strictEqual(messageOnLine(14, separatorDiagnostics), "");
		assert.strictEqual(messageOnLine(14, emptyLineDiagnostics), "");
	});
	test("onlyDoc", () => {
		assert.strictEqual(messageOnLine(16, docDiagnostics), "");
		assert.strictEqual(
			messageOnLine(16, separatorDiagnostics),
			'Separator missing for label "onlyDoc".'
		);
		assert.strictEqual(
			messageOnLine(16, emptyLineDiagnostics),
			'There should be two empty lines above label "onlyDoc".'
		);
	});
	test("oneLineDoc", () => {
		assert.strictEqual(messageOnLine(20, docDiagnostics), "");
		assert.strictEqual(
			messageOnLine(20, separatorDiagnostics),
			'Separator missing for label "oneLineDoc".'
		);
		assert.strictEqual(
			messageOnLine(20, emptyLineDiagnostics)
			, 'There should be two empty lines above label "oneLineDoc".'
		);
	});
	test("twoLineDoc", () => {
		assert.strictEqual(messageOnLine(25, docDiagnostics), "");
		assert.strictEqual(
			messageOnLine(25, separatorDiagnostics)
			, 'Separator missing for label "twoLineDoc".'
		);
		assert.strictEqual(messageOnLine(25, emptyLineDiagnostics), "");
	});
	test("withEverything", () => {
		assert.strictEqual(messageOnLine(31, docDiagnostics), "");
		assert.strictEqual(messageOnLine(31, separatorDiagnostics), "");
		assert.strictEqual(messageOnLine(31, emptyLineDiagnostics), "");
	});
});
