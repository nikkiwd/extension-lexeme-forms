import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('Ido noun', function () {
	run_tests(gen.ido_noun, [[["kato", "kati"], ""]]);
});

