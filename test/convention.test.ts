import { before, describe, test } from "node:test";
import * as assert from "node:assert/strict";

import * as api from "../src/api";
import {
	MemberCamelCase, MemberLength, MemberLiteralCase, MemberStartsWithV, PropertyIsDummy
} from "../src/elementsConventionChecker";
import * as utils from "./ruleUtils";

describe("Members tests", () => {
	let literalDiagnostics: api.Diagnostic[] = [];
	let camelCaseDiagnostics: api.Diagnostic[] = [];
	let lengthDiagnostics: api.Diagnostic[] = [];
	let vDiagnostics: api.Diagnostic[] = [];
	let withoutDummyDiagnostics: api.Diagnostic[] = [];
	let withDummyDiagnostics: api.Diagnostic[] = [];

	before(() => {
		literalDiagnostics = utils.getDiagnostics(
			"ZTestConvention.PROC",
			MemberLiteralCase.name
		);
		camelCaseDiagnostics = utils.getDiagnostics(
			"ZTestConvention.PROC",
			MemberCamelCase.name
		);
		lengthDiagnostics = utils.getDiagnostics(
			"ZTestConvention.PROC",
			MemberLength.name
		);
		vDiagnostics = utils.getDiagnostics(
			"ZTestConvention.PROC",
			MemberStartsWithV.name
		);
		withoutDummyDiagnostics = utils.getDiagnostics(
			"ZTestConvention.PROC",
			PropertyIsDummy.name
		);
		withDummyDiagnostics = utils.getDiagnostics(
			"ZParent.PROC",
			PropertyIsDummy.name
		);
	});

	test("Upper case literal report", () => {
		assert.strictEqual(utils.diagnosticsOnLine(5, literalDiagnostics).length, 1);
	});

	test("Camel case literal report", () => {
		assert.strictEqual(utils.diagnosticsOnLine(4, camelCaseDiagnostics).length, 1);
	});

	test("More than 25 characters", () => {
		assert.strictEqual(utils.diagnosticsOnLine(14, lengthDiagnostics).length, 1);
	});

	test("Starts with v", () => {
		const diagnosticsOnLine = utils.diagnosticsOnLine(23, vDiagnostics);
		assert.strictEqual(diagnosticsOnLine.length,1);
		assert.strictEqual(
			diagnosticsOnLine[0].message,
			'Declaration "vString" starts with \'v\'.'
		);
		assert.strictEqual(diagnosticsOnLine[0].severity, api.DiagnosticSeverity.Warning);
	});
	test("Public starts with v", () => {
		const diagnosticsOnLine = utils.diagnosticsOnLine(24, vDiagnostics);
		assert.strictEqual(diagnosticsOnLine.length, 1);
		assert.strictEqual(
			diagnosticsOnLine[0].message,
			'Declaration "vNumber" is public and starts with \'v\'.'
		);
		assert.strictEqual(
			diagnosticsOnLine[0].severity,
			api.DiagnosticSeverity.Information
		);
	});

	test("Property was not called 'dummy'", () => {
		assert.strictEqual(withoutDummyDiagnostics.length, 0);
	});

	test("Property was called 'dummy'", () => {
		assert.strictEqual(utils.diagnosticsOnLine(2, withDummyDiagnostics).length, 1);
	});

});
