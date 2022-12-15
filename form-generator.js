let container;

function create_button(func, text, title="") {
	if (!container)
		create_container();

	let button = document.createElement("button");
	button.setAttribute("type", "button");
	button.setAttribute("title", title);
	button.className = "btn btn-outline-info";
	button.style.marginLeft = "5px";
	button.textContent = text;

	container.insertAdjacentElement("beforeend", button);

	button.addEventListener("click", func);
}

function create_container() {
	container = document.createElement("div");
	container.className = "generate";
	container.style.float = "right";
	document.getElementsByTagName("main")[0].insertAdjacentElement("afterbegin", container);
}

function get_fields() {
	let fields = document.querySelectorAll("main form input[name='form_representation']");
	let word = fields[0].value;

	// If the first form is empty, get the word from the lemma
	// Only applies to the edit page
	if (!word && document.querySelector("h2 span"))
		word = document.querySelector("h2 span").textContent;

	return [fields, word];
}

/*****************************************************************************/

function english_adjective() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	let e = word.endsWith("e") ? "" : "e";

	fields[0].value = fields[0]?.value || word;
	fields[1].value = fields[1]?.value || word + e + "r";
	fields[2].value = fields[2]?.value || word + e + "st";
}

function english_noun() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	let pl = word.match(/(s|z|ch|sh)$/) ? "es" : "s";

	fields[0].value = fields[0]?.value || word;
	fields[1].value = fields[1]?.value || word + pl;
}

/*****************************************************************************/

function esperanto_noun() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	if (!word.endsWith("o"))
		return; // Esperanto nouns should end with -o

	fields[0].value = fields[0]?.value || word;
	fields[1].value = fields[1]?.value || word + "n";
	fields[2].value = fields[2]?.value || word + "j";
	fields[3].value = fields[3]?.value || word + "jn";
}

function esperanto_verb() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	if (!word.endsWith("i"))
		return; // Esperanto verbs should end with -i

	let stem = word.replace(/i$/, "");

	fields[0].value = fields[0]?.value || word;
	fields[1].value = fields[1]?.value || stem + "as";
	fields[2].value = fields[2]?.value || stem + "is";
	fields[3].value = fields[3]?.value || stem + "os";
	fields[4].value = fields[4]?.value || stem + "us";
	fields[5].value = fields[5]?.value || stem + "u";
}

/*****************************************************************************/

function german_noun_f_en() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	for (const k of [0, 1, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	let pl = word.replace(/in$/, "innen");

	if (word === pl)
		pl = word.replace(/(e[lr])$/, "$1n");

	if (word === pl)
		pl = word.replace(/e?$/, "en");

	if (word === pl)
		return; // failed to edit word

	for (const k of [4, 5, 6, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}
}

function german_noun_f_e() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	for (const k of [0, 1, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	let pl = word
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

		.replace(/a$/, "en")
	;

	if (word === pl)
		return; // failed to parse word

	for (const k of [4, 5, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}

	if (!fields[6].value)
		fields[6].value = pl + (pl.endsWith("n") ? "" : "n");
}

function german_noun_f_s() {
	let [fields, word] = get_fields();

	if (!word)
		return;

	if (word.match(/[szß]$/))
		return; // what should happen for words ending in -s already?

	for (const k of [0, 1, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	for (const k of [4, 5, 6, 7]) {
		fields[k].value = fields[k]?.value || word + "s";
	}
}

/*****************************************************************************/

function german_noun_mn_n() {
	let [fields, word] = get_fields();

	for (const k of [0, 2, 3, 4, 5, 7]) {
		fields[k].value = fields[k]?.value || word;
	}

	fields[1].value = fields[1]?.value || word + "s";

	if (!fields[6].value)
		fields[6].value = word + (word.endsWith("n") ? "" : word.match(/e[lr]?$/) ? "n" : "en");
}

function german_noun_mn_s() {
	let [fields, word] = get_fields();

	if (word.match(/[szß]$/))
		return;	// what should happen for words ending in -s already?

	fields[1].value = fields[1]?.value || word + "s";

	for (const k of [0, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	for (const k of [4, 5, 6, 7]) {
		fields[k].value = fields[k]?.value || word + "s";
	}
}

function german_noun_mn_umlaut_er() {
	let [fields, word] = get_fields();

	let pl = word
		.replace(/([^aeiouäöü])a([^aeiouäöü]+)$/, "$1ä$2er")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+)$/, "$1ö$2er")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+)$/, "$1ü$2er")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+)$/, "$1äu$2er");

	for (const k of [0, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	if (word === pl)
		return; // failed to parse word

	for (const k of [4, 5, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}

	if (!fields[1].value) {
		let gen = [];
		if (!word.endsWith("e")) gen.push(word + "es");
		if (!word.match(/[szß]$/)) gen.push(word + "s");
		fields[1].value = gen.join("/");
	}

	if (!fields[6].value)
		fields[6].value = pl + (pl.endsWith("n") ? "" : "n");
}

function german_noun_m_umlaut_e() {
	let [fields, word] = get_fields();

	let pl = word
		.replace(/([^aeiouäöü])a([^aeiouäöü]+)$/, "$1ä$2e")
		.replace(/([^aeiouäöü])o([^aeiouäöü]+)$/, "$1ö$2e")
		.replace(/([^aeiouäöü])u([^aeiouäöü]+)$/, "$1ü$2e")
		.replace(/([^aeiouäöü])au([^aeiouäöü]+)$/, "$1äu$2e")
		.replace(/([^aeiouäöü])(e|ea|i|ie)([^aeiouäöü]+)$/, "$1$2$3e");

	for (const k of [0, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	if (word === pl)
		return; // failed to parse word

	for (const k of [4, 5, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}

	if (!fields[1].value) {
		let gen = [];
		if (!word.endsWith("e")) gen.push(word + "es");
		if (!word.match(/[szß]$/)) gen.push(word + "s");
		fields[1].value = gen.join("/");
	}

	if (!fields[6].value)
		fields[6].value = pl + (pl.match(/[elr]n$/) ? "" : pl.endsWith("e") ? "n" : "en");
}

function german_noun_n_e() {
	let [fields, word] = get_fields();

	let pl = word.endsWith("e") ? "" : word + "e";

	if (!fields[1].value) {
		let gen = [];
		if (!word.endsWith("e")) gen.push(word + "es");
		if (!word.match(/[szß]$/)) gen.push(word + "s");
		fields[1].value = gen.join("/");
	}

	for (const k of [0, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	for (const k of [4, 5, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}

	fields[6].value = fields[6]?.value || pl + "n";
}

function german_noun_n_um_en() {
	let [fields, word] = get_fields();

	let pl = word.replace(/um$/, "en");

	fields[1].value = fields[1]?.value || word + "s";

	for (const k of [0, 2, 3]) {
		fields[k].value = fields[k]?.value || word;
	}

	if (word === pl)
		return; // failed to parse word

	for (const k of [4, 5, 6, 7]) {
		fields[k].value = fields[k]?.value || pl;
	}
}

/***********************************************************************************/

function german_verb() {
	let [fields, inf] = get_fields();

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

	fields[0].value = fields[0]?.value || inf;
	fields[1].value = fields[1]?.value || stem + "e";
	let pres = fields[1].value;
	fields[2].value = fields[2]?.value || stem + p2suffix;
	fields[3].value = fields[3]?.value || stem + p3suffix;
	fields[4].value = fields[4]?.value || inf;
	fields[5].value = fields[5]?.value || stem + p3suffix;
	fields[6].value = fields[6]?.value || inf;

	fields[7].value = fields[7]?.value || stem + (stem.match(/[dt]$/) ? "ete" : "te");
	let past = fields[7].value;
	fields[8].value = fields[8]?.value || past +"st";
	fields[9].value = fields[9]?.value || past;
	fields[10].value = fields[10]?.value || past + (past.match(/(e[lr]|e)$/) ? "n" : "en");
	fields[11].value = fields[11]?.value || past + (stem.match(/[dt]$/) ? "et" : "t");
	fields[12].value = fields[12]?.value || past + (past.match(/(e[lr]|e)$/) ? "n" : "en");

	fields[13].value = fields[13]?.value || pres;
	let con1 = fields[13].value;
	fields[14].value = fields[14]?.value || con1 + "st";
	fields[15].value = fields[15]?.value || con1;
	fields[16].value = fields[16]?.value || con1 + "n";
	fields[17].value = fields[17]?.value || con1 + "t";
	fields[18].value = fields[18]?.value || con1 + "n";

	fields[19].value = fields[19]?.value || past + (past.endsWith("e") ? "" : "e");
	let con2 = fields[19].value;
	fields[20].value = fields[20]?.value || con2 + "st";
	fields[21].value = fields[21]?.value || con2;
	fields[22].value = fields[22]?.value || con2 + "n";
	fields[23].value = fields[23]?.value || con2 + "t";
	fields[24].value = fields[24]?.value || con2 + "n";

	fields[25].value = fields[25]?.value || pres.replace(/e$/, "/") + pres;
	fields[26].value = fields[26]?.value || stem + p3suffix;

	fields[27].value = fields[27]?.value || (stem.match(/^(be|emp|ent|er|ge|miss|ver|zer)/) ? "" : "ge") + stem + p3suffix;
	// detect irregular forms and use -en here?
}

/***********************************************************************************/

if (document.location.pathname.endsWith("/english-adjective/") || document.location.pathname.match("/english-adjective/edit/")) {
	create_button(english_adjective, "guess forms");
}

if (document.location.pathname.endsWith("/english-noun/") || document.location.pathname.match("/english-noun/edit/")) {
	create_button(english_noun, "guess forms");
}

if (document.location.pathname.endsWith("/esperanto-noun/") || document.location.pathname.match("/esperanto-noun/edit/")) {
	create_button(esperanto_noun, "generate forms");
}

if (document.location.pathname.endsWith("/esperanto-verb/") || document.location.pathname.match("/esperanto-verb/edit/")) {
	create_button(esperanto_verb, "generate forms");
}

if (document.location.pathname.endsWith("/german-noun-feminine/") || document.location.pathname.match("/german-noun-feminine/edit/")) {
	create_button(german_noun_f_en, "-en");
	create_button(german_noun_f_e, "-¨e", "-/-¨e, -e, -er/-¨er, -sal/-sale, -nis/-nisse, -a/-en");
	create_button(german_noun_f_s, "-s");
}

if (document.location.pathname.endsWith("/german-noun-masculine/") || document.location.pathname.match("/german-noun-masculine/edit/")) {
	create_button(german_noun_mn_n, "-s/-n");
	create_button(german_noun_mn_s, "-s/-s");
	create_button(german_noun_mn_umlaut_er, "-(e)s-/¨er");
	create_button(german_noun_m_umlaut_e, "-(e)s/-¨e");
}

if (document.location.pathname.endsWith("/german-noun-neuter/") || document.location.pathname.match("/german-noun-neuter/edit/")) {
	create_button(german_noun_mn_umlaut_er, "-(e)s-/¨er")
	create_button(german_noun_n_e, "-s/-e");
	create_button(german_noun_mn_s, "-s/-s");
	create_button(german_noun_mn_n, "-s/-n");
	create_button(german_noun_n_um_en, "-um/-en");
}

if (document.location.pathname.endsWith("/german-verb/") || document.location.pathname.match("/german-verb/edit/")) {
	create_button(german_verb, "guess forms");
}

