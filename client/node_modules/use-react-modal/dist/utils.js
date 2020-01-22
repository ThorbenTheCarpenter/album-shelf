"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseCSSText(cssText) {
    var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
    var style = {};
    var rule = (cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [])[2] || cssTxt;
    var cssToJs = function (s) { return s.replace(/\W+\w/g, function (match) { return match.slice(-1).toUpperCase(); }); };
    var properties = rule.split(";").map(function (o) { return o.split(":").map(function (x) { return x && x.trim(); }); });
    // eslint-disable-next-line no-restricted-syntax
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var _a = properties_1[_i], property = _a[0], value = _a[1];
        style[cssToJs(property)] = value;
    }
    return style;
}
exports.parseCSSText = parseCSSText;
//# sourceMappingURL=utils.js.map