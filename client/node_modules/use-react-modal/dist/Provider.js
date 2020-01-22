"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var UseModalContext_1 = __importDefault(require("./UseModalContext"));
exports.Provider = function (_a) {
    var background = _a.background, 
    // animations, // in the future 😘
    children = _a.children;
    var defaults = react_1.useMemo(function () { return ({
        background: background || '',
    }); }, [background]);
    return (react_1.default.createElement(UseModalContext_1.default.Provider, { value: defaults }, children));
};
//# sourceMappingURL=Provider.js.map