function english_adjective(lemma) {
	if (!lemma)
		return [];

	let stem = lemma;

	if (!stem.endsWith("e"))
		stem = stem + "e";

	return [
		lemma,
		stem + "r",
		stem + "st",
	];
}

function english_noun(lemma) {
	if (!lemma)
		return [];

	let stem = lemma;

	if (stem.match(/(s|z|ch|sh)$/))
		stem = stem + "e";

	return [
		lemma,
		stem + "s",
	];
}

/*****************************************************************************/

function esperanto_noun(lemma) {
	if (!lemma)
		return [];

	if (!lemma.endsWith("o"))
		return []; // Esperanto nouns should end with -o

	return [
		lemma,
		lemma + "n",
		lemma + "j",
		lemma + "jn",
	];
}

function esperanto_verb(lemma) {
	if (!lemma)
		return [];

	if (!lemma.endsWith("i"))
		return []; // Esperanto verbs should end with -i

	let stem = lemma.replace(/i$/, "");

	return [
		lemma,
		stem + "as",
		stem + "is",
		stem + "os",
		stem + "us",
		stem + "u",
	];
}

/*****************************************************************************/

function german_noun_f_en(lemma) {
	if (!lemma)
		return [];

	let pl = lemma.replace(/in$/, "innen");

	if (lemma === pl)
		pl = lemma.replace(/(e[lr])$/, "$1n");

	if (lemma === pl)
		pl = lemma.replace(/e?$/, "en");

	if (lemma === pl)
		return []; // failed to edit lemma

	return [
		lemma,
		lemma,
		lemma,
		lemma,
		pl,
		pl,
		pl,
		pl,
	];
}

function german_noun_f_e(lemma) {
	if (!lemma)
		return [];

	let pl = lemma
		.replace(/sal$/, "sale")
		.replace(/nis$/, "nisse")

		.replace(/([^aeiouäöü])a([^aeiouäöü]+)$/, "$1ä$2e")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+)$/, "$1ö$2e")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+)$/, "$1ü$2e")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+)$/, "$1äu$2e")
		.replace(/([^aeiouäöü](i|ei)[^aeiouäöü]+)$/, "$1e")

		.replace(/([^aeiouäöü])a([^aeiouäöü]+er)$/, "$1ä$2")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+er)$/, "$1ö$2")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+er)$/, "$1ü$2")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+er)$/, "$1äu$2")

		.replace(/^Aa?([^aeiouäöü]+er)$/, "Ä$1")
		.replace(/^O([^aeiouäöü]+er)$/, "Ö$1")
		.replace(/^U([^aeiouäöü]+er)$/, "Ü$1")

		.replace(/a$/, "en")
	;

	if (lemma === pl)
		return []; // failed to parse lemma

	let datpl = pl + (pl.endsWith("n") ? "" : "n");

	return [
		lemma,
		lemma,
		lemma,
		lemma,
		pl,
		pl,
		datpl,
		pl,
	];
}

function german_noun_f_s(lemma) {
	if (!lemma)
		return [];

	if (lemma.match(/[szß]$/))
		return []; // what should happen for lemmas ending in -s already?

	let pl = lemma + "s";

	return [
		lemma,
		lemma,
		lemma,
		lemma,
		pl,
		pl,
		pl,
		pl,
	];
}

/*****************************************************************************/

function german_noun_mn_n(lemma) {
	if (!lemma)
		return [];

	let gensg = lemma + "s";
	let datpl = lemma + (lemma.endsWith("n") ? "" : lemma.match(/e[lr]?$/) ? "n" : "en");

	return [
		lemma,
		gensg,
		lemma,
		lemma,
		lemma,
		lemma,
		datpl,
		lemma,
	];
}

function german_noun_mn_s(lemma) {
	if (!lemma)
		return [];

	if (lemma.match(/[szß]$/))
		return [];	// what should happen for lemmas ending in -s already?

	let pl = lemma + "s";

	return [
		lemma,
		pl,
		lemma,
		lemma,
		pl,
		pl,
		pl,
		pl,
	];
}

function german_noun_mn_umlaut_er(lemma) {
	if (!lemma)
		return [];

	let pl = lemma
		.replace(/([^aeiouäöü])a([^aeiouäöü]+)$/, "$1ä$2er")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+)$/, "$1ö$2er")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+)$/, "$1ü$2er")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+)$/, "$1äu$2er");

	let datpl = pl + (pl.endsWith("n") ? "" : "n");

	if (lemma === pl)
		return []; // failed to parse lemma

	let gen = [];
	if (!lemma.endsWith("e"))
		gen.push(lemma + "es");
	if (!lemma.match(/[szß]$/))
		gen.push(lemma + "s");
	let gensg = gen.join("/");

	return [
		lemma,
		gensg,
		lemma,
		lemma,
		pl,
		pl,
		datpl,
		pl,
	];
}

function german_noun_m_umlaut_e(lemma) {
	if (!lemma)
		return [];

	let pl = lemma
		.replace(/([^aeiouäöü])a([^aeiouäöü]+)$/, "$1ä$2e")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+)$/, "$1ö$2e")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+)$/, "$1ü$2e")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+)$/, "$1äu$2e")
		.replace(/([^aeiouäöü])(e|ea|i|ie)([^aeiouäöü]+)$/, "$1$2$3e");

	let datpl = pl + (pl.match(/[elr]n$/) ? "" : pl.endsWith("e") ? "n" : "en");

	if (lemma === pl)
		return []; // failed to parse lemma

	let gen = [];
	if (!lemma.endsWith("e"))
		gen.push(lemma + "es");
	if (!lemma.match(/([szß]|zt)$/))
		gen.push(lemma + "s");

	let gensg = gen.join("/");

	return [
		lemma,
		gensg,
		lemma,
		lemma,
		pl,
		pl,
		datpl,
		pl,
	];
}

function german_noun_n_e(lemma) {
	if (!lemma)
		return [];

	let pl = lemma.endsWith("e") ? "" : lemma + "e";

	let datpl = pl + "n";

	let gen = [];
	if (!lemma.endsWith("e"))
		gen.push(lemma + "es");
	if (!lemma.match(/([szß]|zt)$/))
		gen.push(lemma + "s");

	let gensg = gen.join("/");

	return [
		lemma,
		gensg,
		lemma,
		lemma,
		pl,
		pl,
		datpl,
		pl,
	];
}

function german_noun_n_um_en(lemma) {
	if (!lemma)
		return [];

	let pl = lemma.replace(/um$/, "en");
	let gensg = lemma + "s";

	if (lemma === pl)
		return []; // failed to parse lemma

	return [
		lemma,
		gensg,
		lemma,
		lemma,
		pl,
		pl,
		pl,
		pl,
	];
}

/***********************************************************************************/

function german_verb(lemma) {
	if (!lemma)
		return [];

	let inf = lemma;
	let stem = inf.replace(/e?n$/, "");

	let p2suffix = "st";
	let p3suffix = "t";

	if (stem.match(/[csxzß]$/)) {
		p2suffix = "t";
	} else if (
		stem.match(/[dt]$/)
		|| (
			stem.match(/[mn]$/)
			&& !stem.match(/([lr]|[aeiouäöü]h?)[mn]$/)
			&& !stem.match(/(mm|nn)$/)
		)
	) {
		p2suffix = "est";
		p3suffix = "et";
	}

	let pres = stem + "e";
	let past = stem + (stem.match(/[dt]$/) ? "ete" : "te");
	let con1 = pres;
	let con2 = past + (past.endsWith("e") ? "" : "e");

	let imp = pres;
	imp = imp.replace(/e$/, "/") + imp;

	return [
		inf,
		"zu " + inf,
		pres,
		stem + p2suffix,
		stem + p3suffix,
		inf,
		stem + p3suffix,
		inf,

		past,
		past + "st",
		past,
		past + (past.match(/(e[lr]|e)$/) ? "n" : "en"),
		past + (stem.match(/[dt]$/) ? "-et" : "t"),
		past + (past.match(/(e[lr]|e)$/) ? "n" : "en"),

		con1,
		con1 + "st",
		con1,
		con1 + "n",
		con1 + "t",
		con1 + "n",

		con2,
		con2 + "st",
		con2,
		con2 + "n",
		con2 + "t",
		con2 + "n",

		imp,
		stem + p3suffix,

		inf + "d",
		(stem.match(/^(be|emp|ent|er|ge|miss|ver|zer)/) ? "" : "ge") + stem + p3suffix,
	];

	// detect irregular forms and use -en here?
}

/***********************************************************************************/

if (typeof module === "undefined")
	module = {};

module.exports = {
	english_adjective,
	english_noun,
	esperanto_noun,
	esperanto_verb,
	german_noun_f_en,
	german_noun_f_e,
	german_noun_f_s,
	german_noun_mn_n,
	german_noun_mn_s,
	german_noun_mn_umlaut_er,
	german_noun_m_umlaut_e,
	german_noun_n_e,
	german_noun_n_um_en,
	german_verb,
};

