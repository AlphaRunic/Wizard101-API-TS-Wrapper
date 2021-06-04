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
Wizard101.baseURL = "https://wizard101-api.herokuapp.com/v1";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG9FQUErQjtBQUUvQixNQUFhLFNBQVM7SUFHWCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBTSxJQUFZO1FBQzVDLE9BQU8sb0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FlbkIsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWlCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBUSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOztBQTdCTCw4QkE4QkM7QUE3QjJCLGlCQUFPLEdBQUcsd0NBQXdDLENBQUMifQ==