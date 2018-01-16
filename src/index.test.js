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
	it("should work", function() {
		expect(true).to.be.true;
	});
});
