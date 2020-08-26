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
		HawkeyeGet: {
			name: "Get Hawkeye",
		},
		ClawGet: {
			name: "Get a Clawshot",
		},
		DoubleClawGet: {
			name: "Get Double Clawshots",
		},
		SpinnerGet: {
			name: "Get Spinner",
		},
		BallChainGet: {
			name: "Get Ball & Chain",
		},
		DRodGet: {
			name: "Get Dominion Rod",
		},
		Drod2Get: {
			name: "Get Powered Dominion Rod",
		},
		BottleGet: {
			name: "Get a Bottle",
		},
		Bottle2Get: {
			name: "Get 2 Bottles",
		},
		Bottle3Get: {
			name: "Get 3 Bottles",
		},
		Bottle4Get: {
			name: "Get 4 Bottles",
		},
		MemoGet: {
			name: "Get Auru's Memo",
		},
		SketchGet: {
			name: "Get Ashei's Sketch",
		},
		SkyBookGet: {
			name: "Get Sky Book",
		},
		SkyCharGet: {
			name: "Get a Sky Character",
		},
		SkyChar2Get: {
			name: "Get 2 Sky Characters",
		},
		SkyChar3Get: {
			name: "Get 3 Sky Characters",
		},
		SkyChar4Get: {
			name: "Get 4 Sky Characters",
		},
		SkyChar5Get: {
			name: "Get 5 Sky Characters",
		},
		SkyChar6Get: {
			name: "Get All 6 Sky Characters",
		},
		LetterGet: {
			name: "Get Renado's Letter",
		},
		InvoiceGet: {
			name: "Get Doctor's Invoice",
		},
		StatueGet: {
			name: "Get Wooden Statue",
		},
		CharmGet: {
			name: "Get Ilia's Charm",
		},
		HorseCallGet: {
			name: "Get Horse Call",
		},
		Skill1Get: {
			name: "Learn a Hidden Skill",
		},
		Skill2Get: {
			name: "Learn 2 Hidden Skills",
		},
		Skill3Get: {
			name: "Learn 3 Hidden Skills",
		},
		Skill4Get: {
			name: "Learn 4 Hidden Skills",
		},
		Skill5Get: {
			name: "Learn 5 Hidden Skills",
		},
		Skill6Get: {
			name: "Learn 6 Hidden Skills",
		},
		Skill7Get: {
			name: "Learn All 7 Hidden Skills",
		},
		EndingBlowGet: {
			name: "Learn Ending Blow",
		},
		ShieldAttackGet: {
			name: "Learn Shield Attack",
		},
		BackSliceGet: {
			name: "Learn Back Slice",
		},
		HelmSplitterGet: {
			name: "Learn Helm Splitter",
		},
		MortalDrawGet: {
			name: "Learn Mortal Draw",
		},
		JumpStrikeGet: {
			name: "Learn Jump Strike",
		},
		GreatSpinGet: {
			name: "Learn Great Spin",
		},
		WoodSwordGet: {
			name: "Get Wooden Sword",
		},
		OrdonSwordGet: {
			name: "Get Ordon Sword",
		},
		MasterSwordGet: {
			name: "Get Master Sword",
		},
		LightSwordGet: {
			name: "Get Light Sword",
		},
		WoodShieldGet: {
			name: "Get Wooden Shield",
		},
		OrdonShieldGet: {
			name: "Get Ordon Shield",
		},
		HylianShieldGet: {
			name: "Get Hylian Shield",
		},
		ZoraArmorGet: {
			name: "Get & Equip Zora Armor",
		},
		MagicArmorGet: {
			name: "Get & Equip Magic Armor",
		},
		WalletGet: {
			name: "Get Big Wallet",
		},
		Wallet2Get: {
			name: "Get Giant Wallet",
		},
		Bug4Get: {
			name: "Get 4 Golden Bugs",
		},
		Bug8Get: {
			name: "Get 8 Golden Bugs",
		},
		Bug12Get: {
			name: "Get 12 Golden Bugs",
		},
		Bug16Get: {
			name: "Get 16 Golden Bugs",
		},
		Bug20Get: {
			name: "Get 20 Golden Bugs",
			// TODO: Longer goal
		},
		Bug24Get: {
			name: "Get 24 Golden Bugs",
			// TODO: Longer goal
		},
		Poe10Get: {
			name: "Get 10 Poe Souls",
		},
		Poe20Get: {
			name: "Get 20 Poe Souls",
		},
		Poe30Get: {
			name: "Get 30 Poe Souls",
		},
		Poe40Get: {
			name: "Get 40 Poe Souls",
			// TODO: Longer goal
		},
		Poe50Get: {
			name: "Get 50 Poe Souls",
			// TODO: Longer goal
		},
		Poe60Get: {
			name: "Get 60 Poe Souls",
			// TODO: Longer goal
		},
		CrystalGet: {
			name: "Get Shadow Crystal",
			// TODO: Rando only
		},
		YouthScentGet: {
			name: "Get Youth's Scent",
		},
		IliaScentGet: {
			name: "Get Scent of Ilia",
		},
		PoeScentGet: {
			name: "Get Poe Scent",
		},
		ReekfishScentGet: {
			name: "Get Reekfish Scent",
		},
		MedicineScentGet: {
			name: "Get Medicine Scent",
		},
		Hearts5: {
			name: "Have 5 Hearts Total",
		},
		Hearts10: {
			name: "Have 10 Hearts Total",
		},
		Hearts15: {
			name: "Have 15 Hearts Total",
			// TODO: Longer goal
		},
		Hearts20: {
			name: "Have All 20 Hearts",
			// TODO: Longer goal
		},
		HeartContainerGet: {
			name: "Get a Heart Container",
		},
		HeartContainer2Get: {
			name: "Get 2 Heart Containers",
		},
		HeartContainer3Get: {
			name: "Get 3 Heart Containers",
		},
		HeartContainer4Get: {
			name: "Get 4 Heart Containers",
		},
		HeartContainer5Get: {
			name: "Get 5 Heart Containers",
			// TODO: Longer goal
		},
		HeartContainer6Get: {
			name: "Get 6 Heart Containers",
			// TODO: Longer goal
		},
		HeartContainer7Get: {
			name: "Get 7 Heart Containers",
			// TODO: Longer goal
		},
		HeartContainer8Get: {
			name: "Get All 8 Heart Containers",
			// TODO: Longer goal
		},
		ValidationRupee: {
			name: "Get Validation Rupee",
		},
		GreenRupee: {
			name: "Get a Green Rupee",
		},
		AllRupeeTypes: {
			name: "Get 2 of Every Rupee Type",
		},
		OrangeRupees: {
			name: "Get 5 Orange Rupees",
		},
		SilverRupees: {
			name: "Get 2 Silver Rupees From Chests",
		},
		FTItemsGet: {
			name: "Get Forest Temple Map, Gompass & Boss Key",
		},
		GMItemsGet: {
			name: "Get Goron Mines Map, Gompass & Boss Key",
		},
		LBTItemsGet: {
			name: "Get Lakebed Temple Map, Gompass & Boss Key",
		},
		AGItemsGet: {
			name: "Get Arbiter's Grounds Map, Gompass & Boss Key",
		},
		SPRItemsGet: {
			name: "Get Snowpeak Ruins Map, Gompass & Boss Key",
		},
		ToTItemsGet: {
			name: "Get Temple of Time Map, Gompass & Boss Key",
		},
		CityItemsGet: {
			name: "Get City in the Sky Map, Gompass & Boss Key",
		},
		PoTItemsGet: {
			name: "Get Palace of Twilight Map, Gompass & Boss Key",
		},
		HCItemsGet: {
			name: "Get Forest Temple Map, Gompass & Boss Key",
		},
		FTKeysGet: {
			name: "Get All 4 Forest Temple Small Keys",
		},
		GMKeysGet: {
			name: "Get All 3 Goron Mines Small Keys",
		},
		LBTKeysGet: {
			name: "Get All 3 Lakebed Temple Small Keys",
		},
		AGKeysGet: {
			name: "Get All 4 Arbiter's Grounds Small Keys",
		},
		SPRKeysGet: {
			name: "Get All 4 Snowpeak Ruins Small Keys",
		},
		ToTKeysGet: {
			name: "Get All 3 Temple of Time Small Keys",
		},
		CityKeyGet: {
			name: "Get the City in the Sky Small Key",
		},
		PoTKeysGet: {
			name: "Get All 7 Palace of Twilight Small Keys",
		},
		HCKeysGet: {
			name: "Get All 3 Hyrule Castle Small Keys",
		},
		FTOoccooGet: {
			name: "Get Forest Temple Ooccoo",
		},
		GMOoccooGet: {
			name: "Get Goron Mines Ooccoo",
		},
		LBTOoccooGet: {
			name: "Get Lakebed Temple Ooccoo",
		},
		AGOoccooGet: {
			name: "Get Arbiter's Grounds Ooccoo",
		},
		SPROoccooGet: {
			name: "Get Snowpeak Ruins Ooccoo",
		},
		ToTOoccooGet: {
			name: "Get Temple of Time Ooccoo",
		},
		CityOoccooGet: {
			name: "Get City in the Sky Ooccoo",
		},
		SPRPumpkinGet: {
			name: "Get Snowpeak Ruins Ordon Pumpkin",
		},
		SPRCheeseGet: {
			name: "Get Snowpeak Ruins Ordon Goat Cheese",
		},
		FusedShadowGet: {
			name: "Get a Fused Shadow",
		},
		FusedShadow2Get: {
			name: "Get 2 Fused Shadows",
		},
		FusedShadow3Get: {
			name: "Get All 3 Fused Shadows",
		},
		MirrorShardGet: {
			name: "Get a Mirror Shard (from bosses)",
		},
		MirrorShard2Get: {
			name: "Get 2 Mirror Shards (from bosses)",
		},
		MirrorShard3Get: {
			name: "Get 3 Mirror Shards (from bosses)",
		},

	};

	var types = {

		fishingRod: ["FishingRodGet", "EarringGet"], // TODO: Fishing goals
		bow: ["BowGet", "Quiver1Get", "Quiver2Get"], // TODO: Armogohma, Fyrus
		bomb: ["BombBagGet", "BombBag2Get", "BombBag3Get", "GiantBombBagGet"], // TODO: Bomb checks
		claws: ["ClawGet", "DoubleClawGet"], // TODO: Argorok, claw checks (if any)
		rod: ["DRodGet", "DRod2Get"], // TODO: Hurt enemy/self with statue, armogohma
		bottle: ["BottleGet", "Bottle2Get", "Bottle3Get", "Bottle4Get"], // TODO: Bottle uses
		questItem: ["MemoGet", "SketchGet", "LetterGet", "InvoiceGet", "StatueGet", "CharmGet", "HorseCallGet"],
		skybook: ["SkyBookGet", "SkyCharGet", "SkyChar2Get", "SkyChar3Get", "SkyChar4Get", "SkyChar5Get", "SkyChar6Get"],
		hiddenSkill: ["Skill1Get", "Skill2Get", "Skill3Get", "Skill4Get", "Skill5Get", "Skill6Get", "Skill7Get", "EndingBlowGet", "ShieldAttackGet", "BackSliceGet", "HelmSplitterGet", "MortalDrawGet", "JumpStrikeGet", "GreatSpinGet"], // TODO:  Kill enemy with x skill
		sword: ["WoodSwordGet", "OrdonSwordGet", "MasterSwordGet", "LightSwordGet"],
		shield: ["WoodShieldGet", "OrdonShieldGet", "HylianShieldGet"], // TODO: Burn wooden shield
		armor: ["ZoraArmorGet", "MagicArmorGet"], // TODO: Armor goals (eg. die wearing x armor)
		wallet: ["WalletGet", "Wallet2Get"], // TODO: Money goals
		bug: ["Bug4Get", "Bug8Get", "Bug12Get", "Bug16Get", "Bug20Get", "Bug24Get"], // TODO: Turn in bugs
		poe: ["Poe10Get", "Poe20Get", "Poe30Get", "Poe40Get", "Poe50Get", "Poe60Get"], // TODO: Jovanni/poe checks
		scent: ["YouthScentGet", "IliaScentGet", "PoeScentGet", "ReekfishScentGet", "MedicineScentGet"],
		heart: ["Hearts5", "Hearts10", "Hearts15", "Hearts20", "HeartContainerGet", "HeartContainer2Get", "HeartContainer3Get", "HeartContainer4Get", "HeartContainer5Get", "HeartContainer6Get", "HeartContainer7Get", "HeartContainer8Get"], // TODO: Bosses
		rupee: ["ValidationRupee", "GreenRupee", "AllRupeeTypes", "OrangeRupees", "SilverRupees"],
		forestTemple: ["FTItemsGet", "FTKeysGet", "FTOoccooGet", "DiababaKill"],
		goronMines: ["GMItemsGet", "GMKeysGet", "GMOoccooGet", "FyrusKill"],
		lakebedTemple: ["LBTItemsGet", "LBTKeysGet", "LBTOoccooGet", "MorpheelKill"],
		arbitersGround: ["AGItemsGet", "AGKeysGet", "AGOoccooGet", "StallordKill"],
		snowpeakRuins: ["SPRItemsGet", "SPRKeysGet", "SPROoccooGet", "SPRPumpkinGet", "SPRCheeseGet", "BlizzetaKill"],
		templeOfTime: ["ToTItemsGet", "ToTKeysGet", "ToTOoccooGet", "ArmogohmaKill"],
		cityInTheSky: ["CityItemsGet", "CityKeysGet", "CityOoccooGet", "ArgorokKill"],
		palaceOfTwilight: ["PoTItemsGet", "PoTKeysGet", "ZantKill"],
		hyruleCastle: ["HCItemsGet", "HCKeysGet"],

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
	//var result = generateBingoList(bingoOptions, { seed: "1", length: 5 });
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