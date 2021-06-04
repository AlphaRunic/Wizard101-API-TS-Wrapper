"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard101 = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
var Wizard101;
(function (Wizard101) {
    const baseURL = "https://wizard101-api.herokuapp.com/v1";
    async function RequestAPI(path) {
        return node_fetch_1.default(baseURL + path)
            .then(res => res.json());
    }
    async function GetWorlds() {
        return RequestAPI("worlds");
    }
    Wizard101.GetWorlds = GetWorlds;
    async function GetWorld(worldName) {
        return RequestAPI("worlds/" + encodeURIComponent(worldName));
    }
    Wizard101.GetWorld = GetWorld;
})(Wizard101 = exports.Wizard101 || (exports.Wizard101 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG9FQUErQjtBQUUvQixJQUFpQixTQUFTLENBOEJ6QjtBQTlCRCxXQUFpQixTQUFTO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLHdDQUF3QyxDQUFDO0lBRXpELEtBQUssVUFBVSxVQUFVLENBQU0sSUFBWTtRQUN2QyxPQUFPLG9CQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxVQUFVLFNBQVM7UUFDM0IsT0FBTyxVQUFVLENBZWQsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQWpCcUIsbUJBQVMsWUFpQjlCLENBQUE7SUFFTSxLQUFLLFVBQVUsUUFBUSxDQUFDLFNBQWlCO1FBQzVDLE9BQU8sVUFBVSxDQUFRLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFGcUIsa0JBQVEsV0FFN0IsQ0FBQTtBQUNMLENBQUMsRUE5QmdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBOEJ6QiJ9