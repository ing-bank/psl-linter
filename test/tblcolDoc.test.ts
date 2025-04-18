import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import { TblColDocumentation } from "../src/tblcolDoc";
import * as utils from "./ruleUtils";

function messageOnLine(lineNumber: number, allDiagnostics: api.Diagnostic[]): string {
	const diagnosticsOnLine = utils.diagnosticsOnLine(lineNumber, allDiagnostics);
	if (!diagnosticsOnLine.length) return "";
	return diagnosticsOnLine[0].message;
}

describe("Table and Column Documentation tests", () => {

	let bracesInColDocDiagnostics: api.Diagnostic[] = [];
	let withColDocDiagnostics: api.Diagnostic[] = [];
	let withoutColDocDiagnostics: api.Diagnostic[] = [];
	let withSpaceColDocDiagnostics: api.Diagnostic[] = [];
	let bracesInsideColDefDiagnostics: api.Diagnostic[] = [];
	let withoutClosedBracesColDiagnostics: api.Diagnostic[] = [];

	let bracesInTblDocDiagnostics: api.Diagnostic[] = [];
	let withTblDocDiagnostics: api.Diagnostic[] = [];
	let withoutTblDocDiagnostics: api.Diagnostic[] = [];
	let withSpaceTblDocDiagnostics: api.Diagnostic[] = [];
	let bracesInsideTblDefDiagnostics: api.Diagnostic[] = [];
	let withoutClosedBracesTblDiagnostics: api.Diagnostic[] = [];

	before(() => {
		bracesInColDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col1.COL",
			TblColDocumentation.name
		);
		withColDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col2.COL",
			TblColDocumentation.name
		);
		withoutColDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col3.COL",
			TblColDocumentation.name
		);
		withSpaceColDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col4.COL",
			TblColDocumentation.name
		);
		bracesInsideColDefDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col5.COL",
			TblColDocumentation.name
		);
		withoutClosedBracesColDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst-Col6.COL",
			TblColDocumentation.name
		);

		bracesInTblDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst1.TBL",
			TblColDocumentation.name
		);
		withTblDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst2.TBL",
			TblColDocumentation.name
		);
		withoutTblDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst3.TBL",
			TblColDocumentation.name
		);
		withSpaceTblDocDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst4.TBL",
			TblColDocumentation.name
		);
		bracesInsideTblDefDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst5.TBL",
			TblColDocumentation.name
		);
		withoutClosedBracesTblDiagnostics = utils.getDiagnostics(
			"ZTblColDocTst6.TBL",
			TblColDocumentation.name
		);
	});

	test("Column documentation", () => {
		// Column documentation exists with '{' '}' braces
		assert.strictEqual(bracesInColDocDiagnostics.length, 0);
		// Column documentation exists
		assert.strictEqual(withColDocDiagnostics.length, 0);
		// Without } in the column definition. This should be ignored as the compiler
		// should handle it
		assert.strictEqual(withoutClosedBracesColDiagnostics.length, 0);
		// Without Column documentation and '{' '}' inside the definition
		assert.strictEqual(bracesInsideColDefDiagnostics.length, 0);
		// Without Column documentation
		assert.strictEqual(
			messageOnLine(36, withoutColDocDiagnostics),
			'Documentation missing for data item "ZTblColDocTst-Col3.COL".'
		);
		// Without Column documentation but only space exists after '}' braces
		assert.strictEqual(
			messageOnLine(36, withSpaceColDocDiagnostics),
			'Documentation missing for data item "ZTblColDocTst-Col4.COL".'
		);
	});

	test("Table documentation", () => {
		// Table documentation exists with '{' '}' braces
		assert.strictEqual(bracesInTblDocDiagnostics.length, 0);
		// Table documentation exists
		assert.strictEqual(withTblDocDiagnostics.length, 0);
		// Without } in the table definition. This should be ignored as the compiler
		// should handle it
		assert.strictEqual(withoutClosedBracesTblDiagnostics.length, 0);
		// Without Table documentation and '{' '}' inside the definition
		assert.strictEqual(bracesInsideTblDefDiagnostics.length, 0);
		// Without Table documentation
		assert.strictEqual(
			messageOnLine(41, withoutTblDocDiagnostics),
			'Documentation missing for table definition "ZTblColDocTst3.TBL".'
		);
		// Without Table documentation but only space exists after '}' braces
		assert.strictEqual(messageOnLine(41, withSpaceTblDocDiagnostics),
			'Documentation missing for table definition "ZTblColDocTst4.TBL".'
		);
	});
});
