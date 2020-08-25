"use strict";
(function () {
	// Adds seedrandom function to Math. Might also update Math.random"s behavior.
	// prettier-ignore
	!function (j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; for (a.S = [], a.c = [], c || (b = [c++]); g > d;)a.S[d] = d++; for (d = 0; g > d; d++)e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function (b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h, c[f] = e; for (var i = c[e + h & g - 1]; --b;)d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; return a.i = d, a.j = f, i }, a.g(g) } function p(b, e, f, a, c) { if (f = [], c = typeof b, e && "object" == c) for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) { } return f.length ? f : b + ("string" != c ? "\x00" : "") } function l(b, e, f, a) { for (b += "", a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= 19 * e[a & g - 1]) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function (b, e) { var a, f = []; return b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f), a = new q(f), l(a.S, j), i.random = function () { for (var c = a.g(m), d = o, b = 0; k > c;)c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;)c /= 2, d /= 2, b >>>= 1; return (c + b) / d }, b }, o = i.pow(g, m), k = i.pow(2, k), n = 2 * k, l(i.random(), j) }([], Math, 256, 6, 52);

	// Returns a random key of an object.
	function randomKey(obj) {
		var keys = Object.keys(obj);
		return keys[Math.floor(Math.random() * keys.length)];
	}

	var defaultOptions = {
		// string: Seed for random number generator.
		seed: String(Math.ceil(999999 * Math.random())),
		// number: Indicates how many bingo options to generate. May generate a list of
		// fewer than "length" elements based on constraints.
		length: 25,
	};

	/**
	 * Generates bingo list.
	 *
	 * @param {object} bingoOptions Contains all available options and
	 * constraints.
	 * @param {object} optsIn Options. See defaultOptions for shape.
	 */
	function generateBingoList(bingoOptions, optsIn) {
		var options = Object.assign({}, defaultOptions, optsIn);

		Math.seedrandom(options.seed);

		var selectedGoals = [];
		var availableGoals = bingoOptions;

		for (
			var i = 0;
			i < options.length && Object.keys(availableGoals).length > 0;
			i++
		) {
			var goalKey = randomKey(availableGoals);
			var goal = availableGoals[goalKey];
			selectedGoals.push({ name: goal.name });

			availableGoals = Object.keys(availableGoals).reduce(function (acc, key) {
				if (key === goalKey) {
					return acc;
				}
				var item = availableGoals[key];
				if (goal.types && item.types) {
					var keys = Object.keys(goal.types);
					for (var i = 0; i < keys.length; i++) {
						if (item.types[keys[i]]) {
							return acc;
						}
					}
				}
				acc[key] = item;
				return acc;
			}, {});
		}

		return selectedGoals;
	}

	var types = {
		fishingRod: ["FishingRodGet", "EarringGet"],
		bow: ["BowGet", "Quiver1Get", "Quiver2Get"],
		bomb: ["BombBagGet", "BombBag2Get", "BombBag3Get", "GiantBombBagGet"],
	};

	var bingoList = {
		// Item gets
		FishingRodGet: {
			name: "Get Fishing Rod",
		},
		EarringGet: {
			name: "Get Coral Earring",
		},
		SlingshotGet: {
			name: "Get Slingshot",
		},
		LanternGet: {
			name: "Get Lantern",
		},
		BoomerangGet: {
			name: "Get Gale Boomerang",
		},
		BootsGet: {
			name: "Get Iron Boots",
		},
		BowGet: {
			name: "Get Hero's Bow",
		},
		Quiver1Get: {
			name: "Get Large Quiver",
		},
		Quiver2Get: {
			name: "Get Giant Quiver",
		},
		BombBagGet: {
			name: "Get a Bomb Bag",
		},
		BombBag2Get: {
			name: "Get 2 Bomb Bags",
		},
		BombBag3Get: {
			name: "Get 3 Bomb Bags",
		},
		GiantBombBagGet: {
			name: "Get Giant Bomb Bags",
		},
	};

	var typesObj = Object.keys(types).reduce(function (acc, type) {
		types[type].forEach(function (item) {
			if (!acc[item]) {
				acc[item] = {};
			}
			acc[item][type] = true;
		});
		return acc;
	}, {});

	var bingoOptions = Object.keys(bingoList).reduce(function (acc, key) {
		var obj = Object.assign({}, bingoList[key]);
		if (typesObj[key]) {
			obj.types = Object.assign({}, typesObj[key]);
		}
		acc[key] = obj;
		return acc;
	}, {});

	// BEGIN TEST CODE
	//var result = generateBingoList(bingoOptions, { seed: "1", length: 3 });
	var result = generateBingoList(bingoOptions);
	console.log("Generated " + result.length + " goals!");
	console.log(JSON.stringify(result));
	// END TEST CODE

	if (typeof window !== "undefined" && window) {
		window.bingoGenerator = function (options) {
			return generateBingoList(bingoOptions, options);
		};
	}
})();
