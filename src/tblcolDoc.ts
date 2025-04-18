import * as path from "path";
import { tokenizer } from "@mischareitsma/psl-parser";
import { Diagnostic, DiagnosticSeverity, FileDefinitionRule } from "./api";

/**
 * Checks whether table and columns are created with documentation.
 */
export class TblColDocumentation extends FileDefinitionRule {

	report(): Diagnostic[] {
		const baseName = path.basename(this.profileComponent.fsPath);

		const diagnostics: Diagnostic[] = [];
		const bracketMatch = this.profileComponent.textDocument.match(/^}/m);
		// Exit if no match found
		if (!bracketMatch) return [];

		const characterOffset = bracketMatch.index;
		const endPos = this.profileComponent.textDocument.length;
		const tblColDoc = this.profileComponent.textDocument.substring(
			characterOffset + 1,
			endPos
		).trim();

		if (!tblColDoc) {
			const message = (
				"Documentation missing for " +
				(baseName.endsWith("TBL") ? "table definition" : "data item") +
				` "${baseName}".`
			);

			const position = this.profileComponent.positionAt(characterOffset);
			const range = new tokenizer.Range(position, position);
			diagnostics.push(addDiagnostic(range, message, this.ruleName));
		}

		return diagnostics;
	}

}

function addDiagnostic(range: tokenizer.Range, message: string, ruleName: string): Diagnostic {
	const diagnostic = new Diagnostic(range, message, ruleName, DiagnosticSeverity.Information);
	diagnostic.source = "lint";
	return diagnostic;
}
