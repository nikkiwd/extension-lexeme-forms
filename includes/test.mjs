import assert from "assert";

function run_tests(func, tests) {
	for (let test of tests) {
		let forms = test[0];
		let comment = test[1];
		let label = forms[0] + (comment ? ` (${comment})` : "");

		it(label, function () {
			assert.deepStrictEqual(func(forms[0]), forms);
		});
	}
}

export default run_tests;
