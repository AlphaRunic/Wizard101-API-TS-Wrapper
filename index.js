"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard101 = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
class Wizard101 {
    static async RequestAPI(path) {
        return node_fetch_1.default(this.baseURL + path)
            .then(res => res.json());
    }
    static async GetWorlds() {
        return this.RequestAPI("worlds");
    }
    static async GetWorld(worldName) {
        return this.RequestAPI("worlds/" + encodeURIComponent(worldName));
    }
}
exports.Wizard101 = Wizard101;
Wizard101.baseURL = "https://wizard101-api.herokuapp.com/";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9FQUErQjtBQThCL0IsTUFBYSxTQUFTO0lBR1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQU0sSUFBWTtRQUM1QyxPQUFPLG9CQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUztRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQVksUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBUSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOztBQWRMLDhCQWVDO0FBZDJCLGlCQUFPLEdBQUcsc0NBQXNDLENBQUMifQ==