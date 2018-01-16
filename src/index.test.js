var expect = require("chai").expect;
var starWars = require("./index");

describe("starwars-names", function() {
	describe("all", function() {
		it("should be an array of strings", function() {
			expect(starWars.all).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === "string";
				});
			}
		});

		it("should contain 'Luke'", function() {
			expect(starWars.all).to.include("Luke Skywalker");
		});
	});

	it("should return an array of random items if passed a number", function() {
		var randomItems = starWars.random(3);
		expect(randomItems).to.have.length(3);
	});

	it("should return one item not passed a number", function() {
		var randomThing = starWars.random();
		expect(randomThing).to.be.a("string");
	});
});
