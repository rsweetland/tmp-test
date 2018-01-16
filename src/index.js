var starWarsNames = require("./starwars-names.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: starWarsNames,
	random: random
};

function random(number) {
	if (!number) return uniqueRandomArray(starWarsNames)();
	var items = [];
	for (var i = 0; i < number; i++) {
		items.push(uniqueRandomArray(starWarsNames));
	}
	return items;
}
