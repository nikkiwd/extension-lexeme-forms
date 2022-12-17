import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('Esperanto noun', function () {
	run_tests(gen.esperanto_noun, [[["kato", "katon", "katoj", "katojn"], ""]]);
});

describe('Esperanto verb', function () {
	run_tests(gen.esperanto_verb, [[["dormi", "dormas", "dormis", "dormos", "dormus", "dormu"], ""]]);
});

