import fetch from "node-fetch";

export interface World {
    Name: string;
    Quests: number;
    LevelRange: {
        First: number;
        Second: number;
    };
    Abbreviation: string;
    Areas: string[];
}

export interface WorldList {
    wizardcity: World;
    krokotopia: World;
    marleybone: World;
    mooshu: World;
    dragonspyre: World;
    celestia: World;
    zafaria: World;
    avalon: World;
    azteca: World;
    khrysalis: World;
    polaris: World;
    mirage: World;
    empyrea: World;
    karamelle: World;
}

export class Wizard101 {
    private static readonly baseURL = "https://wizard101-api.herokuapp.com/";

    public static async RequestAPI<Res>(path: string): Promise<Res> {
        return fetch(this.baseURL + path)
            .then(res => res.json());
    }

    public static async GetWorlds() {
        return this.RequestAPI<WorldList>("worlds");
    }

    public static async GetWorld(worldName: string): Promise<World> {
        return this.RequestAPI<World>("worlds/" + encodeURIComponent(worldName));
    }
}