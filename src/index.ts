import { World } from "./Types/World";
import fetch from "node-fetch";

export class Wizard101 {
    private static readonly baseURL = "https://wizard101-api.herokuapp.com/v1";

    public static async RequestAPI<Res>(path: string): Promise<Res> {
        return fetch(this.baseURL + path)
            .then(res => res.json());
    }

    public static async GetWorlds() {
        return this.RequestAPI<{
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
        }>("worlds");
    }

    public static async GetWorld(worldName: string): Promise<World> {
        return this.RequestAPI<World>("worlds/" + encodeURIComponent(worldName));
    }
}