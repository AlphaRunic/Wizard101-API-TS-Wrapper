"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const Util_1 = require("../../Util");
class World {
    constructor(Name, Quests, LevelRange, Abbreviation, Areas) {
        this.Name = Name;
        this.Quests = Quests;
        this.LevelRange = LevelRange;
        this.Abbreviation = Abbreviation;
        this.Areas = Areas;
    }
    Progress(current) {
        current = Util_1.Clamp(current, 1, this.Quests);
        return (current / this.Quests * 100).toString().slice(0, 4);
    }
}
exports.World = World;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ybGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXlDO0FBR3pDLE1BQWEsS0FBSztJQUNkLFlBQ29CLElBQVksRUFDWixNQUFjLEVBQ2QsVUFBd0IsRUFDeEIsWUFBb0IsRUFDcEIsS0FBYTtRQUpiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQzlCLENBQUM7SUFFRyxRQUFRLENBQUMsT0FBZTtRQUMzQixPQUFPLEdBQUcsWUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQWJELHNCQWFDIn0=