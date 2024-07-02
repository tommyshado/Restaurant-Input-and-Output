"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
const restaurantsFile = fs_1.default.readFileSync("./restaurants.yaml", "utf8");
const restaurants = yaml_1.default.parse(restaurantsFile);
exports.default = restaurants.restaurants_items;
