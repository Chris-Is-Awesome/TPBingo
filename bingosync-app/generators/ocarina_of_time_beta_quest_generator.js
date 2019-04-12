bingoGenerator = require("./generators/generator_bases/srl_generator_v5_blackout.js");

var bingoList = [];
bingoList[1] = [
{ name: "Both Gerudo Valley HPs", types: [] },
{ name: "Kokiri Sword", types: ["SoloSword"] },
{ name: "Map & Compass in Deku Tree", types: [] },
{ name: "Silver Scale", types: ["Scale"] },
{ name: "Bolero of Fire", types: ["SongBolero","SongFast"] },
{ name: "Exactly 20 Deku Sticks", types: ["CapacitySticks"] },
{ name: "Minuet of Forest", types: ["SongMinuet","SongFast"] },
{ name: "Zora Tunic", types: ["SoloTunics"] },
{ name: "2 Skulltulas in Lon Lon Ranch", types: ["SkullRanch"] },
];

bingoList[2] = [
{ name: "3 Lake Hylia Skulltulas", types: ["SkullHylia"] },
{ name: "Blue Fire", types: ["BottleContent"] },
{ name: "Defeat a Skull Kid", types: [] },
{ name: "Goron Tunic", types: ["SoloTunics"] },
{ name: "Plant bean in Death Mountain Crater", types: ["Beans"] },
{ name: "Ruto's Letter", types: ["Scale"] },
{ name: "Bottled Poe", types: ["BottleContent"] },
{ name: "Red Potion", types: ["BottleContent"] },
{ name: "Adult's Wallet", types: ["SkullCount","Wallet"] },
];

bingoList[3] = [
{ name: "Bottled Fairy", types: ["BottleContent"] },
{ name: "Defeat Nabooru-Knuckle", types: ["BeatSpirit"] },
{ name: "Fairy Slingshot", types: ["Slingshot","ContentDeku"] },
{ name: "Lon Lon Ranch HP", types: [] },
{ name: "Mirror Shield", types: [] },
{ name: "Requiem of Spirit", types: ["SongRequiem"] },
{ name: "Fairy Ocarina", types: [] },
{ name: "Black Gauntlets", types: ["Strength"] },
{ name: "3 Skulls in deku tree", types: ["SkullDeku"] },
{ name: "Open Mido's green rupee chest", types: [] },
];

bingoList[4] = [
{ name: "5 Hearts", types: ["HP","BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
{ name: "5 Magic Beans", types: ["Beans"] },
{ name: "Defeat Bongo-Bongo", types: ["BeatShadow"] },
{ name: "Defeat Queen Gohma", types: ["BeatDeku"] },
{ name: "Ganon's Castle Boss Key", types: [] },
{ name: "Giant's Knife", types: ["SoloSword"] },
{ name: "3 Maps", types: ["Maps"] },
{ name: "3 Tunics", types: ["Tunics"] },
];

bingoList[5] = [
{ name: "3 Songs", types: ["Songs","SongSaria","SongEpona","SongMinuet","SongBolero","SongSerenade","SongRequiem","SongPrelude"] },
{ name: "37th Heart Piece (Child Fortress)", types: [] },
{ name: "Beat the Deku Tree", types: ["BeatDeku"] },
{ name: "Beat the Shadow Temple", types: ["BeatShadow"] },
{ name: "Bullet Bag (50)", types: ["Slingshot"] },
{ name: "Golden Scale", types: ["Scale"] },
{ name: "3 Compasses", types: ["Compasses"] },
{ name: "Beat 2 dungeons", types: ["BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
{ name: "3 Skulltulas in Dodongo's Cavern", types: ["SkullDC"] },
];

bingoList[6] = [
{ name: "3 Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "4 Songs", types: ["Songs","SongSaria","SongEpona","SongMinuet","SongBolero","SongSerenade","SongRequiem","SongPrelude"] },
{ name: "30 Deku Nuts", types: ["CapacityNuts"] },
{ name: "All 3 Kokiri Forest area Skulltulas", types: [] },
{ name: "Ice Arrows", types: ["ContentGTG","ArrowsIce"] },
{ name: "Map & Compass in Bottom of the Well", types: ["ContentBOTW"] },
{ name: "Map & Compass in Dodongo's Cavern", types: ["ContentDC"] },
{ name: "Map & Compass in Water Temple", types: ["ContentWater"] },
{ name: "Plant 3 Magic Beans", types: ["Beans"] },
];

bingoList[7] = [
{ name: "4 Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "6 Hearts", types: ["HP","BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
{ name: "Boomerang", types: ["ContentJabu"] },
{ name: "Defeat a White Wolfos", types: ["WhiteWolfos"] },
{ name: "Defeat all Lizalfos in Dodongo's Cavern", types: [] },
{ name: "Get Bombchu chest in Spirit Temple", types: ["ContentSpirit"] },
{ name: "Map & Compass in Shadow Temple", types: ["ContentShadow"] },
{ name: "Clear 4 Silver Rupee Rooms", types: ["RupeesRoom"] },
{ name: "Desert Colossus HP", types: [] },
{ name: "7 Kakariko area Skulltulas", types: ["SkullKakariko"] },
];

bingoList[8] = [
{ name: "15 Different Skulltulas", types: ["SkullCount"] },
{ name: "3 Shields", types: ["Shields"] },
{ name: "Bomb Bag (30)", types: ["BombBag"] },
{ name: "Bullet Bag (40)", types: ["Slingshot"] },
{ name: "Defeat Big Octo", types: ["ContentJabu"] },
{ name: "Defeat King Dodongo", types: ["BeatDC"] },
{ name: "Ice Cavern HP", types: ["ContentIC"] },
{ name: "Map & Compass in Ice Cavern", types: ["ContentIC"] },
{ name: "Map & Compass in Jabu-Jabu", types: ["ContentJabu"] },
{ name: "Silver Gauntlets", types: ["Strength"] },
{ name: "Goron City HP", types: ["ContentGC"] },
{ name: "Kill all Tentacles in Jabu Jabu", types: ["ContentJabu"] },
{ name: "5 Songs", types: ["Songs","SongSaria","SongEpona","SongMinuet","SongBolero","SongSerenade","SongRequiem","SongPrelude"] },
{ name: "Din's Fire", types: [] },
{ name: "Farore's Wind", types: [] },
{ name: "Keaton Mask", types: ["TradeChild"] },
];

bingoList[9] = [
{ name: "2 Boss Keys", types: ["BossKeys"] },
{ name: "4 Maps", types: ["Maps"] },
{ name: "All 4 Lost Woods area Skulltulas", types: [] },
{ name: "Beat Dodongo's Cavern", types: ["BeatDC"] },
{ name: "Both HPs in Death Mountain Crater", types: [] },
{ name: "Defeat Morpha", types: ["BeatWater"] },
{ name: "Iron Boots", types: ["ContentIC"] },
{ name: "Lens of Truth", types: ["ContentBOTW"] },
{ name: "Cojiro", types: ["TradeAdult"] },
{ name: "3 Swords & 3 Tunics", types: ["Tunics","Swords"] },
{ name: "Nayru's Love", types: [] },
{ name: "Beat 3 dungeons", types: ["BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
{ name: "Plant 4 Magic Beans", types: ["Beans"] },
];

bingoList[10] = [
{ name: "4 Compasses", types: ["Compasses"] },
{ name: "All 4 Skulltulas in Deku Tree", types: ["SkullDeku"] },
{ name: "All 8 Kakariko area Skulltulas", types: ["SkullKakariko"] },
{ name: "Beat the Water Temple", types: ["BeatWater"] },
{ name: "Both Gerudo's Fortress area Skulltulas", types: [] },
{ name: "Fill all 4 Bottle Slots", types: [] },
{ name: "Saria's Song", types: ["SongSaria"] },
{ name: "Serenade of Water", types: ["SongSerenade","SongRBA","ContentIC"] },
{ name: "4 Lake Hylia Skulltulas", types: ["SkullHylia"] },
{ name: "All 4 Skulltulas in Jabu-Jabu", types: [] },
{ name: "Double Magic", types: [] },
{ name: "Get to the end of Light Trial", types: [] },
{ name: "4 Death Mountain area Skulltulas", types: ["SkullDMT"] },
];

bingoList[11] = [
{ name: "5 Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "6 Songs", types: ["Songs","SongSaria","SongEpona","SongMinuet","SongBolero","SongSerenade","SongRequiem","SongPrelude"] },
{ name: "Blue Gauntlets", types: ["Strength"] },
{ name: "Defeat Phantom Ganon", types: ["BeatForest"] },
{ name: "Double Defense", types: [] },
{ name: "Fire Temple Boss Key", types: [] },
{ name: "Shadow Temple Boss Key", types: ["ContentShadow"] },
{ name: "Spirit Temple Boss Key", types: ["ContentSpirit"] },
{ name: "Skull Mask", types: ["SongSaria","TradeChild"] },
{ name: "Lower Final Platform in Spirit Temple", types: ["ContentSpirit"] },
];

bingoList[12] = [
{ name: "1 Skulltula from each Child Dungeon", types: [] },
{ name: "3 Boots", types: ["Boots"] },
{ name: "5 Maps", types: ["Maps"] },
{ name: "7 Hearts", types: ["HP","BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
{ name: "All 3 Skulltulas in Ice Cavern", types: [] },
{ name: "Beat the Forest Temple", types: ["BeatForest"] },
{ name: "Epona's Song", types: ["SongEpona"] },
{ name: "Water Temple Boss Key", types: ["ContentWater"] },
{ name: "All 4 Child Skulltulas in Zora's Domain", types: ["SkullDomain"] },
{ name: "Golden Rupee Chest in Fire Temple", types: ["ContentFire"] },
{ name: "Two Fairy Spells", types: [] },
];

bingoList[13] = [
{ name: "3 Shields & 3 Tunics", types: ["Shields","Tunics"] },
{ name: "6 Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "All 4 Lon-Lon Ranch area Skulltulas", types: ["SkullRanch"] },
{ name: "Defeat Amy (Green poe)", types: ["ContentForest"] },
{ name: "Defeat Twinrova", types: ["BeatSpirit"] },
{ name: "Giant's Wallet", types: ["SkullCount","Wallet"] },
{ name: "Map & Compass in Fire Temple", types: ["ContentFire"] },
{ name: "Win Bombchu Bowling Prize", types: ["BeatDC"] },
{ name: "Defeat both Dead-Hands", types: [] },
{ name: "Exactly 30 Deku Sticks", types: ["CapacitySticks"] },
{ name: "4 Unused Keys in Forest Temple", types: ["ContentForest"] },
{ name: "6 Magic Beans", types: ["Beans"] },
{ name: "6 Death Mountain area Skulltulas", types: ["SkullDMT"] },
];

bingoList[14] = [
{ name: "3 Boss Keys", types: ["BossKeys"] },
{ name: "20 Different Skulltulas", types: ["SkullCount"] },
{ name: "All 3 Skulltulas in Bottom of the Well", types: [] },
{ name: "All 4 Gerudo Valley area Skulltulas", types: [] },
{ name: "Fairy Bow", types: ["ContentForest","Bow"] },
{ name: "Forest Temple Boss Key", types: ["ContentForest"] },
{ name: "Gerudo's Card", types: [] },
{ name: "Milk", types: ["BottleContent","SongEpona"] },
{ name: "Get to the end of Fire Trial", types: [] },
{ name: "Map & Compass in Forest Temple", types: ["ContentForest"] },
{ name: "Beat Sky Temple", types: ["CountIK"] },
{ name: "Defeat 3 different White Wolfos", types: ["WhiteWolfos"] },
{ name: "Defeat Joelle (Red poe) & Beth (Blue poe)", types: ["ContentForest"] },
];

bingoList[15] = [
{ name: "3 Swords & 3 Shields", types: ["Swords","Shields"] },
{ name: "5 Compasses", types: ["Compasses"] },
{ name: "All 4 Wasteland/ Colossus area Skulltulas", types: [] },
{ name: "All 5 Skulltulas in Dodongo's Cavern", types: ["SkullDC"] },
{ name: "Beat the Spirit Temple", types: ["BeatSpirit"] },
{ name: "Get to the end of Spirit Trial", types: [] },
{ name: "Open 3 Gold Rupee Chests", types: [] },
{ name: "Bottled Big Poe", types: ["BottleContent","Bow"] },
{ name: "Prelude of Light", types: ["SongPrelude","SongRBA"] },
{ name: "All 4 Adult Skulltulas in Zora's Domain", types: ["SkullDomain"] },
{ name: "Defeat 4 Different Iron Knuckles", types: ["CountIK"] },
{ name: "6 Zora's Domain area Skulltulas", types: ["SkullDomain"] },
];

bingoList[16] = [
{ name: "3 Tunics & 3 Boots", types: ["Tunics","Boots"] },
{ name: "500 Rupees", types: ["Wallet"] },
{ name: "7 Magic Beans", types: ["Beans"] },
{ name: "7 Songs", types: ["Songs"] },
{ name: "Cow in House", types: [] },
{ name: "Defeat Barinade", types: ["BeatJabu"] },
{ name: "Fire Arrows", types: ["ArrowsFire"] },
{ name: "Obtain all 5 Small Keys in Forest Temple", types: ["ContentForest"] },
{ name: "Quiver (40)", types: ["Bow"] },
{ name: "5 Child Death Mountain area Skulltulas", types: ["SkullDMT"] },
];

bingoList[17] = [
{ name: "3 Swords & 3 Boots", types: ["Swords","Boots"] },
{ name: "4 Skulltulas in Shadow Temple", types: [] },
{ name: "6 Maps", types: ["Maps"] },
{ name: "8 Hearts", types: ["HP"] },
{ name: "All 5 Skulltulas in Forest Temple", types: [] },
{ name: "Beat Jabu-Jabu's Belly", types: ["BeatJabu"] },
{ name: "Stone of Agony", types: ["SkullCount"] },
{ name: "Unlock Phantom Ganon's Boss Door", types: ["ContentForest"] },
{ name: "Beat 4 dungeons", types: ["BeatDeku","BeatDC","BeatJabu","BeatForest","BeatFire","BeatWater","BeatShadow","BeatSpirit"] },
];

bingoList[18] = [
{ name: "3 Shields & 3 Boots", types: ["Shields","Boots"] },
{ name: "All 5 Skulltulas in Fire Temple", types: [] },
{ name: "Defeat Dark Link", types: ["ContentWater"] },
{ name: "Get to the end of Forest Trial", types: [] },
{ name: "Goron Bracelet", types: ["Strength","SongSaria"] },
{ name: "Longshot", types: ["ContentWater"] },
{ name: "Open 50 Rupee chest in Wasteland", types: [] },
{ name: "All 8 Death Mountain area Skulltulas", types: ["SkullDMT"] },
];

bingoList[19] = [
{ name: "6 Compasses", types: ["Compasses"] },
{ name: "7 Different Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "8 Songs", types: ["Songs"] },
{ name: "Both HPs in Lost Woods", types: ["SongSaria"] },
{ name: "Defeat both Flare Dancers", types: ["ContentFire"] },
{ name: "Map & Compass in Spirit Temple", types: ["ContentSpirit"] },
{ name: "Megaton Hammer", types: ["ContentFire"] },
{ name: "Obtain all 8 Small Keys in Fire Temple", types: ["ContentFire"] },
{ name: "Open 4 Small Key chests in Spirit Temple", types: ["ContentSpirit"] },
];

bingoList[20] = [
{ name: "3 Skulltulas in Water Temple", types: ["SkullWater"] },
{ name: "5 Zora area HPs", types: ["HPZora"] },
{ name: "All 8 Zora's Domain area Skulltulas", types: ["SkullDomain"] },
{ name: "Free all 9 Gorons in Fire Temple", types: ["ContentFire"] },
{ name: "Frog's HP", types: [] },
{ name: "Clear 8 Silver Rupee Rooms", types: ["RupeesRoom"] },
{ name: "4 Boss Keys", types: ["BossKeys"] },
{ name: "Golden Gauntlets", types: ["Strength"] },
{ name: "3 Small Key in Water Temple", types: ["ContentWater"] },
];

bingoList[21] = [
{ name: "3 Swords, Tunics, Boots, and Shields", types: ["Swords","Tunics","Boots","Shields"] },
{ name: "7 Maps", types: ["Maps"] },
{ name: "9 Hearts", types: ["HP"] },
{ name: "Green Gauntlets", types: ["Strength"] },
{ name: "All 5 Skulltulas in Spirit Temple", types: [] },
{ name: "Get to the end of Water Trial", types: [] },
{ name: "Defeat 5 different Iron knuckles", types: ["CountIK"] },
];

bingoList[22] = [
{ name: "1 Skulltula from each Adult Dungeon", types: [] },
{ name: "8 Different Unused Keys in Gerudo Training Grounds", types: ["ContentGTG"] },
{ name: "Defeat Meg (Purple Poe)", types: ["ContentForest"] },
{ name: "Open all 5 Small Key chests in Spirit Temple", types: ["ContentSpirit"] },
{ name: "Light Arrows", types: ["ArrowsLight"] },
{ name: "Beat 5 dungeons", types: ["BeatDeku","BeatDC","BeatForest","BeatWater","BeatShadow"] },
{ name: "Obtain all 3 Spiritual Stones", types: ["BeatDeku","BeatDC","BeatJabu"] },
];

bingoList[23] = [
{ name: "1 Unused Small Key in each Adult Dungeon", types: [] },
{ name: "7 Compasses", types: ["Compasses"] },
{ name: "9 Songs", types: ["Songs"] },
{ name: "All 5 Lake Hylia Skulltulas", types: ["SkullHylia"] },
{ name: "Defeat Volvagia", types: ["BeatFire"] },
{ name: "25 Different Skulltulas", types: ["SkullCount"] },
];

bingoList[24] = [
{ name: "All 3 Elemental Arrows", types: ["ArrowsFire","ArrowsIce","ArrowsLight"] },
{ name: "All 5 Skulltulas in Shadow Temple", types: [] },
{ name: "Beat the Fire Temple", types: ["BeatFire"] },
{ name: "Both Hyrule Field area Skulltulas", types: [] },
{ name: "Obtain all 5 Small Keys in Shadow Temple", types: ["ContentShadow"] },
{ name: "All 9 soft soil Skulltulas", types: [] },
];

bingoList[25] = [
{ name: "10 Songs", types: ["Songs"] },
{ name: "All 4 Market area Skulltulas", types: [] },
{ name: "Blue Potion", types: ["BottleContent","TradeAdult"] },
{ name: "Get to the end of Shadow Trial", types: [] },
{ name: "Both Rusty Switches in Spirit Temple", types: ["ContentSpirit"] },
{ name: "All 5 Skulltulas in Water Temple", types: ["SkullWater"] },
{ name: "30 Different Skulltulas", types: ["SkullCount"] },
{ name: "6 Zora area HP", types: ["HPZora"] },
];
