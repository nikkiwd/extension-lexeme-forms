import * as gen from "../form-generator.js";
import run_tests from "../includes/test.mjs";

describe('German noun', function () {
	describe('feminine, -en', function () {
		const tests = [
			[["Katze", "Katze", "Katze", "Katze", "Katzen", "Katzen", "Katzen", "Katzen"], "word ending in -e"],
			[["Person", "Person", "Person", "Person", "Personen", "Personen", "Personen", "Personen"], "word ending in a consonant"],
			[["Autorin", "Autorin", "Autorin", "Autorin", "Autorinnen", "Autorinnen", "Autorinnen", "Autorinnen"], "word ending in -in"],
		];

		run_tests(gen.german_noun_f_en, tests);
	});

	describe('feminine, -¨e', function () {
		const tests = [
			[["Not", "Not", "Not", "Not", "Nöte", "Nöte", "Nöten", "Nöte"], "umlauted vowel is followed by a single consonant"],
			[["Wand", "Wand", "Wand", "Wand", "Wände", "Wände", "Wänden", "Wände"], "umlauted vowel is followed by multiple consonants"],
			[["Axt", "Axt", "Axt", "Axt", "Äxte", "Äxte", "Äxten", "Äxte"], "umlauted vowel is a capital letter"],
			[["Maus", "Maus", "Maus", "Maus", "Mäuse", "Mäuse", "Mäusen", "Mäuse"], "umlauted vowel is au"],
			[["Kuh", "Kuh", "Kuh", "Kuh", "Kühe", "Kühe", "Kühen", "Kühe"], "umlauted vowel is followed by h"],
//			[["Sau", "Sau", "Sau", "Sau", "Säue", "Säue", "Säuen", "Säue"], "umlauted vowel is not followed by any letters"],
		];

		run_tests(gen.german_noun_f_e, tests);
	});

	describe('feminine, -s', function () {
		const tests = [
			[["Tram", "Tram", "Tram", "Tram", "Trams", "Trams", "Trams", "Trams"], "word ending in a consonant"],
			[["Oma", "Oma", "Oma", "Oma", "Omas", "Omas", "Omas", "Omas"], "word ending in a vowel"],
			[["Party", "Party", "Party", "Party", "Partys", "Partys", "Partys", "Partys"], "word ending in -y"],
			[["CD", "CD", "CD", "CD", "CDs", "CDs", "CDs", "CDs"], "word ending in a capital letter"],
		];

		run_tests(gen.german_noun_f_s, tests);
	});

	describe('masculine/neuter, -s/-', function () {
		const tests = [
			[["Kegel", "Kegels", "Kegel", "Kegel", "Kegel", "Kegel", "Kegeln", "Kegel"], "word ending in -el"],
			[["Kuchen", "Kuchens", "Kuchen", "Kuchen", "Kuchen", "Kuchen", "Kuchen", "Kuchen"], "word ending in -en"],
			[["Fenster", "Fensters", "Fenster", "Fenster", "Fenster", "Fenster", "Fenstern", "Fenster"], "word ending in -er"],
			[["Gehäuse", "Gehäuses", "Gehäuse", "Gehäuse", "Gehäuse", "Gehäuse", "Gehäusen", "Gehäuse"], "word ending in -e"],
			[["Knie", "Knies", "Knie", "Knie", "Knie", "Knie", "Knien", "Knie"], "word ending in -e preceded by another vowel"],
		];

		run_tests(gen.german_noun_mn_n, tests);
	});

	describe('masculine/neuter, -s/-s', function () {
		const tests = [
			[["Tee", "Tees", "Tee", "Tee", "Tees", "Tees", "Tees", "Tees"], ""],
			[["Kino", "Kinos", "Kino", "Kino", "Kinos", "Kinos", "Kinos", "Kinos"], ""],
			[["Baby", "Babys", "Baby", "Baby", "Babys", "Babys", "Babys", "Babys"], ""],
			[["Song", "Songs", "Song", "Song", "Songs", "Songs", "Songs", "Songs"], ""],
			[["Schach", "Schachs", "Schach", "Schach", "Schachs", "Schachs", "Schachs", "Schachs"], ""],
			[["Café", "Cafés", "Café", "Café", "Cafés", "Cafés", "Cafés", "Cafés"], ""],
		];

		run_tests(gen.german_noun_mn_s, tests);
	});


	describe('masculine/neuter, -¨er', function () {
		const tests = [
			[["Bad", "Bades/Bads", "Bad", "Bad", "Bäder", "Bäder", "Bädern", "Bäder"], ""],
			[["Glas", "Glases", "Glas", "Glas", "Gläser", "Gläser", "Gläsern", "Gläser"], ""],
			[["Blatt", "Blattes/Blatts", "Blatt", "Blatt", "Blätter", "Blätter", "Blättern", "Blätter"], ""],
			[["Holz", "Holzes", "Holz", "Holz", "Hölzer", "Hölzer", "Hölzern", "Hölzer"], ""],
			[["Haus", "Hauses", "Haus", "Haus", "Häuser", "Häuser", "Häusern", "Häuser"], ""],
			[["Bild", "Bildes/Bilds", "Bild", "Bild", "Bilder", "Bilder", "Bildern", "Bilder"], ""],
//			[["Ei", "Eies/Eis", "Ei", "Ei", "Eier", "Eier", "Eiern", "Eier"], ""],
			[["Amt", "Amtes/Amts", "Amt", "Amt", "Ämter", "Ämter", "Ämtern", "Ämter"], ""],
			[["Aas", "Aases", "Aas", "Aas", "Äser", "Äser", "Äsern", "Äser"], ""],
			[["Buch", "Buches/Buchs", "Buch", "Buch", "Bücher", "Bücher", "Büchern", "Bücher"], ""],
			[["Lied", "Liedes/Lieds", "Lied", "Lied", "Lieder", "Lieder", "Liedern", "Lieder"], ""],
			[["Kleid", "Kleides/Kleids", "Kleid", "Kleid", "Kleider", "Kleider", "Kleidern", "Kleider"], ""],
			// TODO: Find examples ending in x and ß
		];

		run_tests(gen.german_noun_mn_umlaut_er, tests);
	});


	describe('masculine, -¨e', function () {
		const tests = [
			// TODO: Is this used with neuter?
			[["Bach", "Baches/Bachs", "Bach", "Bach", "Bäche", "Bäche", "Bächen", "Bäche"], ""],
			[["Zug", "Zuges/Zugs", "Zug", "Zug", "Züge", "Züge", "Zügen", "Züge"], ""],
			[["Ast", "Astes/Asts", "Ast", "Ast", "Äste", "Äste", "Ästen", "Äste"], ""],
			[["Chor", "Chores/Chors", "Chor", "Chor", "Chöre", "Chöre", "Chören", "Chöre"], ""],
			[["Baum", "Baumes/Baums", "Baum", "Baum", "Bäume", "Bäume", "Bäumen", "Bäume"], ""],
			[["Kamm", "Kammes/Kamms", "Kamm", "Kamm", "Kämme", "Kämme", "Kämmen", "Kämme"], ""],
			[["Hut", "Hutes/Huts", "Hut", "Hut", "Hüte", "Hüte", "Hüten", "Hüte"], ""],
			[["Kopf", "Kopfes/Kopfs", "Kopf", "Kopf", "Köpfe", "Köpfe", "Köpfen", "Köpfe"], ""],
			[["Sohn", "Sohnes/Sohns", "Sohn", "Sohn", "Söhne", "Söhne", "Söhnen", "Söhne"], ""],
			[["Wunsch", "Wunsches/Wunschs", "Wunsch", "Wunsch", "Wünsche", "Wünsche", "Wünschen", "Wünsche"], ""],

			[["Saal", "Saales/Saals", "Saal", "Saal", "Säle", "Säle", "Sälen", "Säle"], ""],

			[["Fuß", "Fußes", "Fuß", "Fuß", "Füße", "Füße", "Füßen", "Füße"], ""],
			[["Fluss", "Flusses", "Fluss", "Fluss", "Flüsse", "Flüsse", "Flüssen", "Flüsse"], ""],

			[["Arzt", "Arztes", "Arzt", "Arzt", "Ärzte", "Ärzte", "Ärzten", "Ärzte"], ""],

			[["Tanz", "Tanzes", "Tanz", "Tanz", "Tänze", "Tänze", "Tänzen", "Tänze"], ""],
			[["Fuchs", "Fuchses", "Fuchs", "Fuchs", "Füchse", "Füchse", "Füchsen", "Füchse"], ""],
			[["Satz", "Satzes", "Satz", "Satz", "Sätze", "Sätze", "Sätzen", "Sätze"], ""],
			[["Kauz", "Kauzes", "Kauz", "Kauz", "Käuze", "Käuze", "Käuzen", "Käuze"], ""],

//			[["Kanal", "Kanals", "Kanal", "Kanal", "Kanäle", "Kanäle", "Kanälen", "Kanäle"], ""],
//			[["Kardinal", "Kardinals", "Kardinal", "Kardinal", "Kardinäle", "Kardinäle", "Kardinälen", "Kardinäle"], ""],
		];

		run_tests(gen.german_noun_m_umlaut_e, tests);
	});
});

describe('German verb', function () {
	describe('weak verb', function () {
		const tests = [
			[[
				"machen", "zu machen",
				"mache", "machst", "macht", "machen", "macht", "machen",
				"machte", "machtest", "machte", "machten", "machtet", "machten",
				"mache", "machest", "mache", "machen", "machet", "machen",
				"machte", "machtest", "machte", "machten", "machtet", "machten",
				"mach/mache", "macht",
				"machend", "gemacht"
			], "regular conjugation"],
			[[
				"funktionieren", "zu funktionieren",
				"funktioniere", "funktionierst", "funktioniert", "funktionieren", "funktioniert", "funktionieren",
				"funktionierte", "funktioniertest", "funktionierte", "funktionierten", "funktioniertet", "funktionierten",
				"funktioniere", "funktionierest", "funktioniere", "funktionieren", "funktionieret", "funktionieren",
				"funktionierte", "funktioniertest", "funktionierte", "funktionierten", "funktioniertet", "funktionierten",
				"funktionier/funktioniere", "funktioniert",
				"funktionierend", "funktioniert"
			], "-ieren verb"],
			[[
				"atmen", "zu atmen",
				"atme", "atmest", "atmet", "atmen", "atmet", "atmen",
				"atmete", "atmetest", "atmete", "atmeten", "atmetet", "atmeten",
				"atme", "atmest", "atme", "atmen", "atmet", "atmen",
				"atmete", "atmetest", "atmete", "atmeten", "atmetet", "atmeten",
				"atme", "atmet",
				"atmend", "geatmet"
			], "stem ending in two consonants"],
/*
			[[
				"ernten", "zu ernten",
				"ernte", "erntest", "erntet", "ernten", "erntet", "ernten",
				"erntete", "erntetest", "erntete", "ernteten", "erntetet", "ernteten",
				"ernte", "erntest", "ernte", "ernten", "erntet", "ernten",
				"erntete", "erntetest", "erntete", "ernteten", "erntetet", "ernteten",
				"ernt/ernte", "erntet",
				"erntend", "geerntet"
			], "stem ending in -t"],
*/
			[[
				"enden", "zu enden",
				"ende", "endest", "endet", "enden", "endet", "enden",
				"endete", "endetest", "endete", "endeten", "endetet", "endeten",
				"ende", "endest", "ende", "enden", "endet", "enden",
				"endete", "endetest", "endete", "endeten", "endetet", "endeten",
				"end/ende", "endet",
				"endend", "geendet"
			], "stem ending in -d"],
/*
			[[
				"bearbeiten", "zu bearbeiten",
				"bearbeite", "bearbeitest", "bearbeitet", "bearbeiten", "bearbeitet", "bearbeiten",
				"bearbeitete", "bearbeitetest", "bearbeitete", "bearbeiteten", "bearbeitetet", "bearbeiteten",
				"bearbeite", "bearbeitest", "bearbeite", "bearbeiten", "bearbeitet", "bearbeiten",
				"bearbeitete", "bearbeitetest", "bearbeitete", "bearbeiteten", "bearbeitetet", "bearbeiteten",
				"bearbeite", "bearbeitet",
				"bearbeitend", "bearbeitet"
			], ""],
*/
			[[
				"löschen", "zu löschen",
				"lösche", "löschst", "löscht", "löschen", "löscht", "löschen",
				"löschte", "löschtest", "löschte", "löschten", "löschtet", "löschten",
				"lösche", "löschest", "lösche", "löschen", "löschet", "löschen",
				"löschte", "löschtest", "löschte", "löschten", "löschtet", "löschten",
				"lösch/lösche", "löscht",
				"löschend", "gelöscht"
			], "stem ending in -sch"],
			[[
				"stürzen", "zu stürzen",
				"stürze", "stürzt", "stürzt", "stürzen", "stürzt", "stürzen",
				"stürzte", "stürztest", "stürzte", "stürzten", "stürztet", "stürzten",
				"stürze", "stürzest", "stürze", "stürzen", "stürzet", "stürzen",
				"stürzte", "stürztest", "stürzte", "stürzten", "stürztet", "stürzten",
				"stürz/stürze", "stürzt",
				"stürzend", "gestürzt"
			], ""],
			[[
				"tanzen", "zu tanzen",
				"tanze", "tanzt", "tanzt", "tanzen", "tanzt", "tanzen",
				"tanzte", "tanztest", "tanzte", "tanzten", "tanztet", "tanzten",
				"tanze", "tanzest", "tanze", "tanzen", "tanzet", "tanzen",
				"tanzte", "tanztest", "tanzte", "tanzten", "tanztet", "tanzten",
				"tanz/tanze", "tanzt",
				"tanzend", "getanzt"
			], ""],
			[[
				"ätzen", "zu ätzen",
				"ätze", "ätzt", "ätzt", "ätzen", "ätzt", "ätzen",
				"ätzte", "ätztest", "ätzte", "ätzten", "ätztet", "ätzten",
				"ätze", "ätzest", "ätze", "ätzen", "ätzet", "ätzen",
				"ätzte", "ätztest", "ätzte", "ätzten", "ätztet", "ätzten",
				"ätz/ätze", "ätzt",
				"ätzend", "geätzt"
			], ""],
		];

		run_tests(gen.german_verb, tests);
	});
});

