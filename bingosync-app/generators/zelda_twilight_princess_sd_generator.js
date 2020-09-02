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
			name: "Get Forest Temple Map, Compass & Boss Key",
		},
		GMItemsGet: {
			name: "Get Goron Mines Map, Compass & Boss Key",
		},
		LBTItemsGet: {
			name: "Get Lakebed Temple Map, Compass & Boss Key",
		},
		AGItemsGet: {
			name: "Get Arbiter's Grounds Map, Compass & Boss Key",
		},
		SPRItemsGet: {
			name: "Get Snowpeak Ruins Map, Compass & Boss Key",
		},
		ToTItemsGet: {
			name: "Get Temple of Time Map, Compass & Boss Key",
		},
		CityItemsGet: {
			name: "Get City in the Sky Map, Compass & Boss Key",
		},
		PoTItemsGet: {
			name: "Get Palace of Twilight Map, Compass & Boss Key",
		},
		HCItemsGet: {
			name: "Get Forest Temple Map, Compass & Boss Key",
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

		// Common Enemy Goals

		AeralfosKill: {
			name: "Kill an Aeralfos",
		},
		ArmosKill: {
			name: "Kill an Armos",
		},
		ArmosClawshotKill: {
			name: "Kill an Armos with the Clawshot",
		},
		BeamosKill: {
			name: "Kill a Beamos",
		},
		BeamosBombKill: {
			name: "Kill a Beamos with Bombs",
		},
		BeamosBallChainKill: {
			name: "Kill a Beamos with the Ball & Chain",
		},
		BlueBokoblinKills: {
			name: "Kill 5 Blue Bokoblins",
		},
		RedBokoblinKills: {
			name: "Kill 5 Red Bokoblins",
		},
		ChuKills: {
			name: "Kill 1 of Each Type of Chu (excl. Green Chu)",
		},
		FireBubbleKills: {
			name: "Kill 5 Fire Bubbles",
		},
		IceBubbleKills: {
			name: "Kill 5 Ice Bubbles",
		},
		ChillfosKills: {
			name: "Kill 5 Chillfos",
		},
		FreezardKills: {
			name: "Kill 3 Freezards (and their Mini-Freezards)",
		},
		DarknutKills: {
			name: "Kill 4 Darknuts",
		},
		DekuLikeKills: {
			name: "Kill 3 Deku Likes",
		},
		DodongoKills: {
			name: "Kill 5 Dodongos",
		},
		DodongoKill: {
			name: "Kill a Dodongo with a Bomb",
		},
		GuayKill: {
			name: "Kill a Guay with the Slingshot",
		},
		AGPoeKill: {
			name: "Kill an Arbiter's Grounds Poe",
		},
		AGPoeKill2: {
			name: "Kill 2 Arbiter's Grounds Poes",
		},
		AGPoeKill3: {
			name: "Kill 3 Arbiter's Grounds Poes",
		},
		AGPoeKill4: {
			name: "Kill All 4 Arbiter's Grounds Poes",
		},
		PoeKills10: {
			name: "Kill 10 Poes",
		},
		PoeKills20: {
			name: "Kill 20 Poes",
		},
		PoeKills30: {
			name: "Kill 30 Poes",
			// TODO: Longer goal
		},
		PoeKills40: {
			name: "Kill 40 Poes",
			// TODO: Longer goal
		},
		PoeKills50: {
			name: "Kill 50 Poes",
			// TODO: Longer goal
		},
		PoeKills60: {
			name: "Kill 60 Poes",
			// TODO: Longer goal
		},
		LizalfosKills: {
			name: "Kill 5 Lizalfos",
		},
		DynalfosKills: {
			name: "Kill 2 Dynalfos",
		},
		ShellBladeKills: {
			name: "Kill 4 Shell Blades",
		},
		ShellBladeWBKills: {
			name: "Kill 2 Shell Blades with Water Bombs",
		},
		WolfosKills: {
			name: "Kill 5 White Wolfos",
		},
		ZantHeadKills: {
			name: "Kill 5 Zant Heads",
		},
		TorchSlugKills: {
			name: "Kill 5 Torch Slugs as Wolf",
		},
		StalfosKills: {
			name: "Kill 3 Stalfos with Ball & Chain",
		},
		TilewormKills: {
			name: "Kill 3 Tileworms",
		},
		MoldormKills: {
			name: "Kill 3 Moldorms",
		},
		GibdoKills: {
			name: "Kill 5 Gibdos (Redeads)",
		},
		ToadpoliKill: {
			name: "Kill a Toadpoli with Ball & Chain",
		},
		HelmasaurKills: {
			name: "Kill 5 Helmasaur",
		},
		HelmasaurKill: {
			name: "Kill a Helmasaur with its own Armor",
		},
		KeeseKill: {
			name: "Kill a Keese with Ball & Chain",
		},
		BigBabaKill: {
			name: "Kill a Big Baba",
		},
		BombskitKill: {
			name: "Kill a Bombskit with a Bombling",
		},
		EndingBlowKills: {
			name: "Kill 5 Enemies with Ending Blow",
		},
		BackSliceKills: {
			name: "Kill 5 Enemies with Back Slice",
		},
		HelmSplitterKills: {
			name: "Kill 5 Enemies with Helm Splitter",
		},
		MortalDrawKills: {
			name: "Kill 10 Enemies with Mortal Draw",
		},
		JumpStrikeKills: {
			name: "Kill 5 Enemies with Jump Strike",
		},
		GreatSpinKills: {
			name: "Kill 5 Enemies with Great Spin",
		},
		IronBootsKills: {
			name: "Kill 3 Enemies with Iron Boots",
		},
		SpinnerKills: {
			name: "Kill 5 Enemies with Spinner",
		},
		BallAndChainKills: {
			name: "Kill 10 Enemies with Ball & Chain",
		},
		ToTStatueKills: {
			name: "Kill 3 Enemies with the Temple of Time Statue",
		},
		BombKills: {
			name: "Kill 5 Enemies with Bombs",
		},
		SlingshotKills: {
			name: "Kill 5 Enemies with Slingshot",
		},
		BowKills: {
			name: "Kill 5 Enemies with Bow",
		},
		BoomerangStuns: {
			name: "Stun 5 Enemies with Boomerang",
		},
		WolfKills: {
			name: "Kill 10 Enemies as Wolf",
		},
		EnviromentKills: {
			name: "Kill an Enemy with Pots/Barrels/Boxes/etc.",
		},

		// Mini-Bosses

		Ook: {
			name: "Defeat Ook",
		},
		Daangoro: {
			name: "Defeat Dangoro",
		},
		DekuToad: {
			name: "Defeat Deku Toad",
		},
		DeathSword: {
			name: "Defeat Death Sword",
		},
		DarkHammer: {
			name: "Defeat DarkHammer",
		},
		ToTDarknut: {
			name: "Defeat Temple of Time Darknut",
		},
		CityAeralfos: {
			name: "Defeat City in the Sky Aeralfos",
		},
		PhantomZants: {
			name: "Defeat both Phantom Zants",
		},
		SkullKid: {
			name: "Defeat Skull Kid",
		},
		KingBulblin: {
			name: "Defeat King Bulblin",
		},

		// Bosses

		Diababa: {
			name: "Defeat Diababa",
		},
		Fyrus: {
			name: "Defeat Fyrus",
		},
		Morpheel: {
			name: "Defeat Morpheel",
		},
		Stallord: {
			name: "Defeat Stallord",
		},
		Blizzeta: {
			name: "Defeat Blizzeta",
		},
		Armogohma: {
			name: "Defeat Armogohma",
		},
		Argorok: {
			name: "Defeat Argorok",
		},
		Zant: {
			name: "Defeat Zant",
		},

		// Link



		// World



		// Checks



		// Misc



	};

	var types = {

		fishingRod: ["FishingRodGet", "EarringGet"], // TODO: Fishing goals
		bow: ["BowGet", "Quiver1Get", "Quiver2Get"],
		bomb: ["BombBagGet", "BombBag2Get", "BombBag3Get", "GiantBombBagGet"], // TODO: Bomb checks
		claws: ["ClawGet", "DoubleClawGet"], // TODO: claw checks
		rod: ["DRodGet", "DRod2Get"], // Sky char checks
		bottle: ["BottleGet", "Bottle2Get", "Bottle3Get", "Bottle4Get"], // TODO: Bottle uses
		questItem: ["MemoGet", "SketchGet", "LetterGet", "InvoiceGet", "StatueGet", "CharmGet", "HorseCallGet"],
		skybook: ["SkyBookGet", "SkyCharGet", "SkyChar2Get", "SkyChar3Get", "SkyChar4Get", "SkyChar5Get", "SkyChar6Get"],
		hiddenSkill: ["Skill1Get", "Skill2Get", "Skill3Get", "Skill4Get", "Skill5Get", "Skill6Get", "Skill7Get", "EndingBlowGet", "ShieldAttackGet", "BackSliceGet", "HelmSplitterGet", "MortalDrawGet", "JumpStrikeGet", "GreatSpinGet"],
		sword: ["WoodSwordGet", "OrdonSwordGet", "MasterSwordGet", "LightSwordGet"],
		shield: ["WoodShieldGet", "OrdonShieldGet", "HylianShieldGet"], // TODO: Burn wooden shield
		armor: ["ZoraArmorGet", "MagicArmorGet"], // TODO: Armor goals (eg. die wearing x armor)
		wallet: ["WalletGet", "Wallet2Get"], // TODO: Money goals
		bug: ["Bug4Get", "Bug8Get", "Bug12Get", "Bug16Get", "Bug20Get", "Bug24Get"], // TODO: Turn in bugs
		poe: ["Poe10Get", "Poe20Get", "Poe30Get", "Poe40Get", "Poe50Get", "Poe60Get"], // TODO: Jovanni/poe checks
		scent: ["YouthScentGet", "IliaScentGet", "PoeScentGet", "ReekfishScentGet", "MedicineScentGet"],
		heart: ["Hearts5", "Hearts10", "Hearts15", "Hearts20", "HeartContainerGet", "HeartContainer2Get", "HeartContainer3Get", "HeartContainer4Get", "HeartContainer5Get", "HeartContainer6Get", "HeartContainer7Get", "HeartContainer8Get"],
		rupee: ["ValidationRupee", "GreenRupee", "AllRupeeTypes", "OrangeRupees", "SilverRupees"],
		forestTemple: ["FTItemsGet", "FTKeysGet", "FTOoccooGet", "DiababaKill"],
		goronMines: ["GMItemsGet", "GMKeysGet", "GMOoccooGet", "FyrusKill"],
		lakebedTemple: ["LBTItemsGet", "LBTKeysGet", "LBTOoccooGet", "MorpheelKill"],
		arbitersGround: ["AGItemsGet", "AGKeysGet", "AGOoccooGet", "StallordKill"], // TO NOT DO: Poe checks
		snowpeakRuins: ["SPRItemsGet", "SPRKeysGet", "SPROoccooGet", "SPRPumpkinGet", "SPRCheeseGet", "BlizzetaKill"], // TODO: Poe checks
		templeOfTime: ["ToTItemsGet", "ToTKeysGet", "ToTOoccooGet", "ArmogohmaKill"], // TODO: Poe checks
		cityInTheSky: ["CityItemsGet", "CityKeysGet", "CityOoccooGet", "ArgorokKill"], // TODO: Poe checks
		palaceOfTwilight: ["PoTItemsGet", "PoTKeysGet", "ZantKill"],
		hyruleCastle: ["HCItemsGet", "HCKeysGet"],
		armosKills: ["ArmosKill", "ArmosClawshotKill"],
		beamosKills: ["BeamosKill", "BeamosBombKill", "BeamosBallChainKill"],
		bokoKills: ["RedBokoblinKills", "BlueBokoblinKills"],
		chus: ["ChuKills"], // TODO: Chu jelly scoops
		bubbleKills: ["FireBubbleKills", "IceBubbleKills"],
		iceKills: ["ChillfosKills", "FreezardKills"],
		dodongoKills: ["DodongoKill", "DodongoKills"],
		agPoeKills: ["AGPoeKill", "AGPoeKill2", "AGPoeKill3", "AGPoeKill4", "AGPoes"], // Added "AGPoes" in case I forget to not include that as a goal
		poeKills: ["PoeKills10", "PoeKills20", "PoeKills30", "PoeKills40", "PoeKills50", "PoeKills60"],
		lizalfosKills: ["LizalfosKills", "DynalfosKills"],
		helmaKills: ["HelmasaurKills", "HelmasaurKill"],
		skillKills: ["EndingBlowKills", "BackSliceKills", "HelmSplitterKills", "MortalDrawKills", "JumpStrikeKills", "GreatSpinKills"],
		shellBladeKills: ["ShellBladeKills", "ShellBladeWBKills"],

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