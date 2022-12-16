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

	button.addEventListener("click", function () {
		let fields = document.querySelectorAll("main form input[name='form_representation']");

		// The tool uses the first field as the lemma, so we do the same.
		let lemma = fields[0].value;

		// In edit mode, the lemma is in a <h2>, so we may be able to get the
		// lemma from there if there are no forms.
		if (!lemma) {
			let nodes = document.querySelectorAll("h2 span");
			if (nodes.length)
				lemma = nodes[0].textContent;
		}

		// The generator functions expect a lemma, so if we didn't find
		// anything to use as the lemma, we can't try to generate forms.
		if (!lemma)
			return;

		// Call the generator function
		let values = func(lemma);

		// If the number of forms we generated doesn't match the number we were
		// expecting, it probably means the template has changed and the
		// generator function needs to be updated.
		if (fields.length !== values.length) {
			console.log(`Error: Unexpected number of forms. Expected ${fields.length}, got ${values.length}`);
			return;
		}

		for (let i in fields) {
			if (!fields[i].value) // don't overwrite existing forms
				fields[i].value = values[i];
		}
	});
}

function create_container() {
	container = document.createElement("div");
	container.className = "generate";
	container.style.float = "right";
	document.getElementsByTagName("main")[0].insertAdjacentElement("afterbegin", container);
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

if (document.location.pathname.endsWith("/interlingua-noun/") || document.location.pathname.match("/interlingua-noun/edit/")) {
	create_button(interlingua_noun, "generate forms");
}

if (document.location.pathname.endsWith("/interlingue-noun/") || document.location.pathname.match("/interlingue-noun/edit/")) {
	create_button(interlingue_noun, "generate forms");
}

if (document.location.pathname.endsWith("/ido-noun/") || document.location.pathname.match("/ido-noun/edit/")) {
	create_button(ido_noun, "generate forms");
}

if (document.location.pathname.endsWith("/novial-noun/") || document.location.pathname.match("/novial-noun/edit/")) {
	create_button(novial_noun, "generate forms");
}

