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

interface APIError {
    Code: number;
    Message: string;
}

interface Response<Result = World & WorldList & string> {
    Success: boolean;
    Results: Result
}

export class Wizard101 {
    private static readonly baseURL = "https://wizard101-api.herokuapp.com/";

    public static async GetWorlds<T = Response<WorldList & APIError>>(): Promise<T> {
        return await this.RequestAPI<T>("worlds");
    }

    public static async GetWorld<T = Response<World & APIError>>(worldName: string): Promise<T> {
        return this.RequestAPI<T>("worlds/" + encodeURIComponent(worldName));
    }
    
    private static async RequestAPI<Res>(path: string): Promise<Res> {
        return fetch(this.baseURL + path)
            .then(res => res.json());
    }
}