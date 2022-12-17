import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('Interlingue noun', function () {
	const tests = [
		[["cat", "cats"], ""],
		[["cato", "catos"], ""],
		[["cata", "catas"], ""],
	];

	run_tests(gen.interlingue_noun, tests);
});

