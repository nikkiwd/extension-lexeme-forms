import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('Novial noun', function () {
	const tests = [
		[["kate", "kates"], ""],
		[["kato", "katos"], ""],
		[["kata", "katas"], ""],
	];

	run_tests(gen.novial_noun, tests);
});

