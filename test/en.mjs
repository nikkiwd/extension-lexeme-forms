import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('English noun', function () {
	const tests = [
		[["cat", "cats"], "regular plural form"],
		[["beach", "beaches"], "word ending in -ch"],
		[["gloss", "glosses"], "word ending in -s"],
		[["marsh", "marshes"], "word ending in -sh"],
		[["mix", "mixes"], "word ending in -x"],
		[["quiz", "quizes"], "word ending in -z"],
		[["sky", "skies"], "word ending in -y preceded by a consonant"],
		[["key", "keys"], "word ending in -y preceded by a vowel"],
	];

	run_tests(gen.english_noun, tests);
});

describe('English adjective', function () {
	const tests = [
		[["black", "blacker", "blackest"], "word ending in a consonant"],
		[["blue", "bluer", "bluest"], "word ending in -e"],
		[["shiny", "shinier", "shiniest"], "word ending in -y preceded by a consonant"],
		[["grey", "greyer", "greyest"], "word ending in -y preceded by a vowel"],
	];

	run_tests(gen.english_adjective, tests);
});

