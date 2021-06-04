import { World } from "./Types/World";
import fetch from "node-fetch";

export namespace Wizard101 {
    const baseURL = "https://wizard101-api.herokuapp.com/v1";

    async function RequestAPI<Res>(path: string): Promise<Res> {
        return fetch(baseURL + path)
            .then(res => res.json());
    }

    export async function GetWorlds() {
        return RequestAPI<{
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

    export async function GetWorld(worldName: string): Promise<World> {
        return RequestAPI<World>("worlds/" + encodeURIComponent(worldName));
    }
}