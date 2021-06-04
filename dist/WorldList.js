"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worlds = void 0;
const Util_1 = require("../../Util");
const Area_1 = require("./Area");
const World_1 = require("./World");
exports.Worlds = {
    WizardCity: new World_1.World("Wizard City", 39, new Util_1.Pair(0, 5), "wc", [
        new Area_1.Area("Unicorn Way"),
        new Area_1.Area("Cyclops Lane"),
        new Area_1.Area("Firecat Alley"),
        new Area_1.Area("Triton Avenue"),
    ]),
    Krokotopia: new World_1.World("Krokotopia", 65, new Util_1.Pair(5, 15), "kt", [
        new Area_1.Area("Royal Hall"),
        new Area_1.Area("Chamber of Fire"),
        new Area_1.Area("Palace of Fire"),
        new Area_1.Area("Hall of Champions"),
        new Area_1.Area("Grand Arena"),
        new Area_1.Area("Entrance Hall"),
        new Area_1.Area("Tomb of Storms")
    ]),
    Marleybone: new World_1.World("Marleybone", 50, new Util_1.Pair(15, 20), "mb", [
        new Area_1.Area("Hyde Park"),
        new Area_1.Area("Chelsea Court"),
        new Area_1.Area("Ironworks"),
        new Area_1.Area("Newgate Prison"),
        new Area_1.Area("Knight's Court"),
        new Area_1.Area("Katzenstein's Lab"),
        new Area_1.Area("Royal Museum")
    ]),
    MooShu: new World_1.World("MooShu", 88, new Util_1.Pair(20, 30), "ms", [
        new Area_1.Area("Jade Palace"),
        new Area_1.Area("Hametsu Village"),
        new Area_1.Area("Tatakai Outpost"),
        new Area_1.Area("Crimson Fields"),
        new Area_1.Area("Cave of Solitude"),
        new Area_1.Area("Kishibe Village"),
        new Area_1.Area("Shirataki Temple"),
        new Area_1.Area("Ancient Burial Grounds"),
        new Area_1.Area("Village of Sorrow"),
        new Area_1.Area("Yoshihito Temple"),
        new Area_1.Area("Emperor's Throne Room")
    ]),
    Dragonspyre: new World_1.World("Dragonspyre", 106, new Util_1.Pair(30, 40), "ds", [
        new Area_1.Area("The Tower Archives"),
        new Area_1.Area("Plaza of Conquests"),
        new Area_1.Area("The Drake Hatchery"),
        new Area_1.Area("The Crucible"),
        new Area_1.Area("The Labyrinth"),
        new Area_1.Area("Dragonspyre Academy"),
        new Area_1.Area("Crystal Grove"),
        new Area_1.Area("The Forum"),
        new Area_1.Area("Dragon's Roost")
    ]),
    Celestia: new World_1.World("Celestia", 95, new Util_1.Pair(40, 50), "cl", [
        new Area_1.Area("Survey Camp"),
        new Area_1.Area("The Grotto"),
        new Area_1.Area("District of the Stars"),
        new Area_1.Area("The Floating Land"),
        new Area_1.Area("Stormriven"),
        new Area_1.Area("Science Center"),
        new Area_1.Area("Crustacean Empire"),
        new Area_1.Area("The Chancel"),
        new Area_1.Area("Sanctum of the Sun")
    ]),
    Zafaria: new World_1.World("Zafaria", 148, new Util_1.Pair(50, 60), "zf", [
        new Area_1.Area("Baobab Crossroads"),
        new Area_1.Area("Baobab Crown"),
        new Area_1.Area("Savannah"),
        new Area_1.Area("Zamunda Outskirts"),
        new Area_1.Area("Zamunda"),
        new Area_1.Area("Stone Town"),
        new Area_1.Area("Waterfront"),
        new Area_1.Area("Drum Jungle"),
        new Area_1.Area("Elephant Graveyard"),
        new Area_1.Area("Mirror Lake")
    ]),
    Avalon: new World_1.World("Avalon", 161, new Util_1.Pair(60, 70), "av", [
        new Area_1.Area("High Road"),
        new Area_1.Area("Caer Lyon"),
        new Area_1.Area("The Wild"),
        new Area_1.Area("The Wyrd"),
        new Area_1.Area("Dun Dara"),
        new Area_1.Area("Outer Yard"),
        new Area_1.Area("Lake Shore"),
        new Area_1.Area("Deepwater"),
        new Area_1.Area("The Catacombs"),
        new Area_1.Area("Crystal Caves")
    ]),
    Azteca: new World_1.World("Azteca", 197, new Util_1.Pair(70, 80), "at", [
        new Area_1.Area("The Zocalo"),
        new Area_1.Area("Three Points"),
        new Area_1.Area("Cenote"),
        new Area_1.Area("Mangrove Marsh"),
        new Area_1.Area("Saltmeadow Swamp"),
        new Area_1.Area("Zultun Dock"),
        new Area_1.Area("Cloudburst Forest"),
        new Area_1.Area("Alto Alto"),
        new Area_1.Area("Tierra de Brea"),
        new Area_1.Area("Pitch Black Lake"),
        new Area_1.Area("Floating Mountains"),
        new Area_1.Area("Twin Giants"),
        new Area_1.Area("Xibalba")
    ]),
    Khrysalis: new World_1.World("Khrysalis", 277, new Util_1.Pair(80, 100), "kr", [
        new Area_1.Area("Bastion"),
        new Area_1.Area("Silent Market"),
        new Area_1.Area("Moon Cliffs"),
        new Area_1.Area("Last Wood"),
        new Area_1.Area("Tyrian Gorge"),
        new Area_1.Area("Fort Rachias"),
        new Area_1.Area("Crescent Beach"),
        new Area_1.Area("Ruined Alcazar"),
        new Area_1.Area("Radiance Reborn"),
        new Area_1.Area("Sardonyx"),
        new Area_1.Area("Kondha Desert"),
        new Area_1.Area("Solar Arc"),
        new Area_1.Area("The Hive"),
        new Area_1.Area("Shadow Palace")
    ]),
    Polaris: new World_1.World("Polaris", 99, new Util_1.Pair(100, 110), "pl", [
        new Area_1.Area("Walruskberg"),
        new Area_1.Area("Walruskberg Harbor"),
        new Area_1.Area("Forlorn Tayg"),
        new Area_1.Area("River of Frozen Tears"),
        new Area_1.Area("Urville Station"),
        new Area_1.Area("Frigid Maw"),
        new Area_1.Area("The Arcanum"),
        new Area_1.Area("Kataba IceBlock"),
        new Area_1.Area("Borealis Peaks"),
        new Area_1.Area("Horizon Hold")
    ]),
    Mirage: new World_1.World("Mirage", 115, new Util_1.Pair(110, 120), "mr", [
        new Area_1.Area("Caravan"),
        new Area_1.Area("Alkali Barrows"),
        new Area_1.Area("Aggrobah"),
        new Area_1.Area("Caterwaul Canyons"),
        new Area_1.Area("Rubal Wastes"),
        new Area_1.Area("Istanboa"),
        new Area_1.Area("Yakhal Mountain"),
        new Area_1.Area("Thieve's Den"),
        new Area_1.Area("Eerem Palace"),
        new Area_1.Area("Chronoverge")
    ]),
    Empyrea: new World_1.World("Empyrea", 149, new Util_1.Pair(120, 130), "em", [
        new Area_1.Area("Aerial Shores"),
        new Area_1.Area("Aerial Jungle"),
        new Area_1.Area("Zanadu"),
        new Area_1.Area("Zanadu Sewers"),
        new Area_1.Area("Outer Athanor"),
        new Area_1.Area("Inner Athanor"),
        new Area_1.Area("Sepidious"),
        new Area_1.Area("Samsara Village"),
        new Area_1.Area("Mandalla"),
        new Area_1.Area("Nexus (Reverie)"),
        new Area_1.Area("Nimbus Citadel"),
        new Area_1.Area("Port Aero"),
        new Area_1.Area("Southwest Aeroplains"),
        new Area_1.Area("Velo City"),
        new Area_1.Area("Northeast Aeroplains"),
        new Area_1.Area("Chaos Jungle"),
        new Area_1.Area("Husk"),
        new Area_1.Area("Storm Titan's Wake"),
    ]),
    Karamelle: new World_1.World("Karamelle", 80, new Util_1.Pair(130, 140), "ka", [
        new Area_1.Area("Karamelle City"),
        new Area_1.Area("Rock Candy Mountains"),
        new Area_1.Area("Gumdrop Forest"),
        new Area_1.Area("Sweetzburg"),
        new Area_1.Area("Nibbleheim"),
        new Area_1.Area("Gutenstadt"),
        new Area_1.Area("Gobblerton"),
        new Area_1.Area("Licorice Forest"),
        new Area_1.Area("Cavity Chamber")
    ]),
    Grizzleheim: new World_1.World('Grizzleheim', 68, new Util_1.Pair(20, 45), 'gh', []),
    Wintertusk: new World_1.World('Wintertusk', 51, new Util_1.Pair(45, 55), 'wt', [])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ybGRMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1dvcmxkTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0M7QUFDbEMsaUNBQThCO0FBQzlCLG1DQUFnQztBQUVuQixRQUFBLE1BQU0sR0FBRztJQUNsQixVQUFVLEVBQUUsSUFBSSxhQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxJQUFJLFdBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFO1FBQzNELElBQUksV0FBSSxDQUFDLGFBQWEsQ0FBQztRQUN2QixJQUFJLFdBQUksQ0FBQyxjQUFjLENBQUM7UUFDeEIsSUFBSSxXQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3pCLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQztLQUM1QixDQUFDO0lBQ0YsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsSUFBSSxXQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtRQUMzRCxJQUFJLFdBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEIsSUFBSSxXQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDM0IsSUFBSSxXQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDMUIsSUFBSSxXQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDN0IsSUFBSSxXQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZCLElBQUksV0FBSSxDQUFDLGVBQWUsQ0FBQztRQUN6QixJQUFJLFdBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM3QixDQUFDO0lBQ0YsVUFBVSxFQUFFLElBQUksYUFBSyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtRQUM1RCxJQUFJLFdBQUksQ0FBQyxXQUFXLENBQUM7UUFDckIsSUFBSSxXQUFJLENBQUMsZUFBZSxD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