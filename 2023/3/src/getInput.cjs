"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInputTo3dArray = void 0;
var promises_1 = require("fs/promises");
function readInputTo3dArray(filename) {
    return __awaiter(this, void 0, void 0, function () {
        var res, lines, numLines, numSymbols, arr, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, promises_1.readFile)(filename, 'utf-8')];
                case 1:
                    res = _a.sent();
                    lines = res.split('\n');
                    numLines = lines.length;
                    numSymbols = lines[0].length;
                    arr = lines.map(function (line) { return line.split(''); });
                    return [2 /*return*/, arr];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error reading file', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.readInputTo3dArray = readInputTo3dArray;
function isAdjacentToSymbol(startXIndex, endXIndex, yIndex, arr) {
    var adjacentSymbols = [];
    if (yIndex !== 0) {
        adjacentSymbols.push.apply(adjacentSymbols, arr[yIndex - 1].slice(Math.max(0, startXIndex - 1), Math.min(arr[yIndex].length, endXIndex + 2)));
    }
    if (startXIndex !== 0) {
        adjacentSymbols.push(arr[yIndex][startXIndex - 1]);
    }
    if (endXIndex !== arr[yIndex].length - 1) {
        adjacentSymbols.push(arr[yIndex][endXIndex + 1]);
    }
    if (yIndex !== arr.length - 1) {
        adjacentSymbols.push.apply(adjacentSymbols, arr[yIndex + 1].slice(Math.max(0, startXIndex - 1), Math.min(arr[yIndex].length, endXIndex + 2)));
    }
    console.log(adjacentSymbols);
    return !adjacentSymbols.every(function (symbol) { return symbol === '.' || isNumeric(symbol); });
}
function isAdjacentToStar(startXIndex, endXIndex, yIndex, arr) {
    var adjacentSymbols = [];
    if (yIndex !== 0) {
        adjacentSymbols.push.apply(adjacentSymbols, arr[yIndex - 1].slice(Math.max(0, startXIndex - 1), Math.min(arr[yIndex].length, endXIndex + 2)));
    }
    if (startXIndex !== 0) {
        adjacentSymbols.push(arr[yIndex][startXIndex - 1]);
    }
    if (endXIndex !== arr[yIndex].length - 1) {
        adjacentSymbols.push(arr[yIndex][endXIndex + 1]);
    }
    if (yIndex !== arr.length - 1) {
        adjacentSymbols.push.apply(adjacentSymbols, arr[yIndex + 1].slice(Math.max(0, startXIndex - 1), Math.min(arr[yIndex].length, endXIndex + 2)));
    }
    if (adjacentSymbols.find(function (char) { return char === "*"; })) {
        return true;
    }
    else
        return false;
}
function taskOne() {
    return __awaiter(this, void 0, void 0, function () {
        var schematic, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readInputTo3dArray("src/input.txt")];
                case 1:
                    schematic = _a.sent();
                    total = 0;
                    schematic.forEach(function (line, yIndex) {
                        var endXIndex = 0;
                        line.forEach(function (character, xIndex) {
                            if (xIndex > 0 && xIndex <= endXIndex) {
                                return;
                            }
                            if (isNumeric(character)) {
                                var num = character;
                                endXIndex = xIndex + 1;
                                while (endXIndex < line.length) {
                                    if (isNumeric(line[endXIndex])) {
                                        num += line[endXIndex];
                                        endXIndex += 1;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                endXIndex -= 1;
                                console.log(parseInt(num), " start: ", xIndex, "end: ", endXIndex);
                                if (isAdjacentToSymbol(xIndex, endXIndex, yIndex, schematic)) {
                                    console.log(true);
                                    total += parseInt(num);
                                }
                            }
                        });
                    });
                    console.log("Total: ", total);
                    return [2 /*return*/];
            }
        });
    });
}
function taskTwo() {
    return __awaiter(this, void 0, void 0, function () {
        var schematic, total, adjacentToStars, starIndexes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readInputTo3dArray("src/input.txt")];
                case 1:
                    schematic = _a.sent();
                    total = 0;
                    adjacentToStars = new Array;
                    starIndexes = new Array;
                    schematic.forEach(function (line, yIndex) {
                        var endXIndex = 0;
                        line.forEach(function (character, xIndex) {
                            if (xIndex > 0 && xIndex <= endXIndex) {
                                return;
                            }
                            if (character === "*") {
                                starIndexes.push({ x: xIndex, y: yIndex });
                            }
                            if (isNumeric(character)) {
                                var num = character;
                                endXIndex = xIndex + 1;
                                while (endXIndex < line.length) {
                                    if (isNumeric(line[endXIndex])) {
                                        num += line[endXIndex];
                                        endXIndex += 1;
                                    }
                                    else {
                                        break;
                                    }
                                }
                                endXIndex -= 1;
                                console.log(parseInt(num), " start: ", xIndex, "end: ", endXIndex);
                                if (isAdjacentToStar(xIndex, endXIndex, yIndex, schematic)) {
                                    console.log(true);
                                    adjacentToStars.push({
                                        num: parseInt(num),
                                        startX: xIndex,
                                        endX: endXIndex,
                                        y: yIndex
                                    });
                                    //total += parseInt(num);
                                }
                            }
                        });
                    });
                    starIndexes.forEach(function (coordinate) {
                        var matches = adjacentToStars.filter(function (entry) {
                            return ((entry.y >= coordinate.y - 1 && entry.y <= coordinate.y + 1)
                                &&
                                    (coordinate.x >= entry.startX - 1 && coordinate.x <= entry.endX + 1));
                        });
                        if (matches.length === 2) {
                            total += matches[0].num * matches[1].num;
                        }
                    });
                    console.log("Total: ", total);
                    return [2 /*return*/];
            }
        });
    });
}
function isNumeric(char) {
    return !isNaN(parseInt(char));
}
//taskOne();
taskTwo();
