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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxvRUFBK0I7QUFFL0IsSUFBaUIsU0FBUyxDQThCekI7QUE5QkQsV0FBaUIsU0FBUztJQUN0QixNQUFNLE9BQU8sR0FBRyx3Q0FBd0MsQ0FBQztJQUV6RCxLQUFLLFVBQVUsVUFBVSxDQUFNLElBQVk7UUFDdkMsT0FBTyxvQkFBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssVUFBVSxTQUFTO1FBQzNCLE9BQU8sVUFBVSxDQWVkLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFqQnFCLG1CQUFTLFlBaUI5QixDQUFBO0lBRU0sS0FBSyxVQUFVLFFBQVEsQ0FBQyxTQUFpQjtRQUM1QyxPQUFPLFVBQVUsQ0FBUSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRnFCLGtCQUFRLFdBRTdCLENBQUE7QUFDTCxDQUFDLEVBOUJnQixTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQThCekIifQ==