import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('Interlingua noun', function () {
	const tests = [
		[["catto", "cattos"], ""],
		[["catta", "cattas"], ""],
	];

	run_tests(gen.interlingua_noun, tests);
});

