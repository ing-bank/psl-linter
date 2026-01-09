import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import { MultiLineDeclare } from "../src/multiLineDeclare";
import * as utils from "./ruleUtils";

describe("Multiline declaration tests", () => {

	let multiLineDiagnostics: api.Diagnostic[] = [];

	before(() => {
		multiLineDiagnostics = utils.getDiagnostics(
			"ZMultiLineDeclare.PROC",
			MultiLineDeclare.name
		);
	});

	test("line 2", () => {
		const test1Message = "Declaration test1 should be initialized on a new line.";
		const test2Message = "Declaration test2 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(1, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, test1Message);
		assert.strictEqual(diagnostics[1].message, test2Message);
	});

	test("line 3", () => {
		const number1Message = "Declaration number1 should be initialized on a new line.";
		const number2Message = "Declaration number2 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(2, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, number1Message);
		assert.strictEqual(diagnostics[1].message, number2Message);
	});

	test("line 4", () => {
		const rs1Message = "Declaration rs1 should be initialized on a new line.";
		const rs2Message = "Declaration rs2 should be initialized on a new line.";
		const rs3Message = "Declaration rs3 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(3, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 3);
		assert.strictEqual(diagnostics[0].message, rs1Message);
		assert.strictEqual(diagnostics[1].message, rs2Message);
		assert.strictEqual(diagnostics[2].message, rs3Message);
	});

	test("line 5", () => {
		const diagnostics = utils.diagnosticsOnLine(4, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 6", () => {
		const number11Message = "Declaration number11 should be initialized on a new line.";
		const number13Message = "Declaration number13 should be initialized on a new line.";
		const number15Message = "Declaration number15 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(5, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 3);
		assert.strictEqual(diagnostics[0].message, number11Message);
		assert.strictEqual(diagnostics[1].message, number13Message);
		assert.strictEqual(diagnostics[2].message, number15Message);
	});

	test("line 7", () => {
		const number19Message = "Declaration number19 should be initialized on a new line.";
		const number20Message = "Declaration number20 should be initialized on a new line.";
		const number21Message = "Declaration number21 should be initialized on a new line.";
		const number22Message = "Declaration number22 should be initialized on a new line.";
		const number23Message = "Declaration number23 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(6, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 5);
		assert.strictEqual(diagnostics[0].message, number19Message);
		assert.strictEqual(diagnostics[1].message, number20Message);
		assert.strictEqual(diagnostics[2].message, number21Message);
		assert.strictEqual(diagnostics[3].message, number22Message);
		assert.strictEqual(diagnostics[4].message, number23Message);
	});

	test("line 8", () => {
		const diagnostics = utils.diagnosticsOnLine(7, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 0);
	});

	test("line 9", () => {
		const number32Message = "Declaration number32 should be initialized on a new line.";
		const number34Message = "Declaration number34 should be initialized on a new line.";
		const number36Message = "Declaration number36 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(8, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 3);
		assert.strictEqual(diagnostics[0].message, number32Message);
		assert.strictEqual(diagnostics[1].message, number34Message);
		assert.strictEqual(diagnostics[2].message, number36Message);
	});

	test("line 10", () => {
		const number37Message = "Declaration number37 should be initialized on a new line.";
		const number38Message = "Declaration number38 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(9, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, number37Message);
		assert.strictEqual(diagnostics[1].message, number38Message);
	});

	test("line 11", () => {
		const rs4Message = "Declaration rs4 should be initialized on a new line.";
		const rs5Message = "Declaration rs5 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(10, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, rs4Message);
		assert.strictEqual(diagnostics[1].message, rs5Message);
	});

	test("line 12", () => {
		const number38Message = "Declaration number38 should be initialized on a new line.";
		const number39Message = "Declaration number39 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(11, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, number38Message);
		assert.strictEqual(diagnostics[1].message, number39Message);
	});

	test("line 13", () => {
		const number40Message = "Declaration number40 should be initialized on a new line.";
		const number41Message = "Declaration number41 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(12, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 2);
		assert.strictEqual(diagnostics[0].message, number40Message);
		assert.strictEqual(diagnostics[1].message, number41Message);
	});

	test("line 14", () => {
		const number42Message = "Declaration number42 should be initialized on a new line.";
		const number41Message = "Declaration number41 should be initialized on a new line.";
		const number43Message = "Declaration number43 should be initialized on a new line.";
		const diagnostics = utils.diagnosticsOnLine(13, multiLineDiagnostics);
		assert.strictEqual(diagnostics.length, 3);
		assert.strictEqual(diagnostics[0].message, number42Message);
		assert.strictEqual(diagnostics[1].message, number41Message);
		assert.strictEqual(diagnostics[2].message, number43Message);
	});

});
