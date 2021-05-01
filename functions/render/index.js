var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/katex/dist/katex.js
var require_katex = __commonJS((exports, module2) => {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module2 === "object")
      module2.exports = factory();
    else if (typeof define === "function" && define.amd)
      define([], factory);
    else if (typeof exports === "object")
      exports["katex"] = factory();
    else
      root["katex"] = factory();
  })(typeof self !== "undefined" ? self : exports, function() {
    return function() {
      "use strict";
      var __webpack_require__ = {};
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, {enumerable: true, get: definition[key]});
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      var __webpack_exports__ = {};
      __webpack_require__.d(__webpack_exports__, {
        default: function() {
          return katex_webpack;
        }
      });
      ;
      var ParseError = function ParseError2(message, token) {
        this.position = void 0;
        var error2 = "KaTeX parse error: " + message;
        var start;
        var loc = token && token.loc;
        if (loc && loc.start <= loc.end) {
          var input = loc.lexer.input;
          start = loc.start;
          var end = loc.end;
          if (start === input.length) {
            error2 += " at end of input: ";
          } else {
            error2 += " at position " + (start + 1) + ": ";
          }
          var underlined = input.slice(start, end).replace(/[^]/g, "$&\u0332");
          var left;
          if (start > 15) {
            left = "\u2026" + input.slice(start - 15, start);
          } else {
            left = input.slice(0, start);
          }
          var right;
          if (end + 15 < input.length) {
            right = input.slice(end, end + 15) + "\u2026";
          } else {
            right = input.slice(end);
          }
          error2 += left + underlined + right;
        }
        var self2 = new Error(error2);
        self2.name = "ParseError";
        self2.__proto__ = ParseError2.prototype;
        self2.position = start;
        return self2;
      };
      ParseError.prototype.__proto__ = Error.prototype;
      var src_ParseError = ParseError;
      ;
      var contains = function contains2(list, elem) {
        return list.indexOf(elem) !== -1;
      };
      var deflt = function deflt2(setting, defaultIfUndefined) {
        return setting === void 0 ? defaultIfUndefined : setting;
      };
      var uppercase = /([A-Z])/g;
      var hyphenate = function hyphenate2(str) {
        return str.replace(uppercase, "-$1").toLowerCase();
      };
      var ESCAPE_LOOKUP = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      };
      var ESCAPE_REGEX = /[&><"']/g;
      function utils_escape(text) {
        return String(text).replace(ESCAPE_REGEX, function(match) {
          return ESCAPE_LOOKUP[match];
        });
      }
      var getBaseElem = function getBaseElem2(group) {
        if (group.type === "ordgroup") {
          if (group.body.length === 1) {
            return getBaseElem2(group.body[0]);
          } else {
            return group;
          }
        } else if (group.type === "color") {
          if (group.body.length === 1) {
            return getBaseElem2(group.body[0]);
          } else {
            return group;
          }
        } else if (group.type === "font") {
          return getBaseElem2(group.body);
        } else {
          return group;
        }
      };
      var isCharacterBox = function isCharacterBox2(group) {
        var baseElem = getBaseElem(group);
        return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "atom";
      };
      var assert = function assert2(value) {
        if (!value) {
          throw new Error("Expected non-null, but got " + String(value));
        }
        return value;
      };
      var protocolFromUrl = function protocolFromUrl2(url) {
        var protocol = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(url);
        return protocol != null ? protocol[1] : "_relative";
      };
      var utils = {
        contains,
        deflt,
        escape: utils_escape,
        hyphenate,
        getBaseElem,
        isCharacterBox,
        protocolFromUrl
      };
      ;
      var Settings = /* @__PURE__ */ function() {
        function Settings2(options2) {
          this.displayMode = void 0;
          this.output = void 0;
          this.leqno = void 0;
          this.fleqn = void 0;
          this.throwOnError = void 0;
          this.errorColor = void 0;
          this.macros = void 0;
          this.minRuleThickness = void 0;
          this.colorIsTextColor = void 0;
          this.strict = void 0;
          this.trust = void 0;
          this.maxSize = void 0;
          this.maxExpand = void 0;
          this.globalGroup = void 0;
          options2 = options2 || {};
          this.displayMode = utils.deflt(options2.displayMode, false);
          this.output = utils.deflt(options2.output, "htmlAndMathml");
          this.leqno = utils.deflt(options2.leqno, false);
          this.fleqn = utils.deflt(options2.fleqn, false);
          this.throwOnError = utils.deflt(options2.throwOnError, true);
          this.errorColor = utils.deflt(options2.errorColor, "#cc0000");
          this.macros = options2.macros || {};
          this.minRuleThickness = Math.max(0, utils.deflt(options2.minRuleThickness, 0));
          this.colorIsTextColor = utils.deflt(options2.colorIsTextColor, false);
          this.strict = utils.deflt(options2.strict, "warn");
          this.trust = utils.deflt(options2.trust, false);
          this.maxSize = Math.max(0, utils.deflt(options2.maxSize, Infinity));
          this.maxExpand = Math.max(0, utils.deflt(options2.maxExpand, 1e3));
          this.globalGroup = utils.deflt(options2.globalGroup, false);
        }
        var _proto = Settings2.prototype;
        _proto.reportNonstrict = function reportNonstrict(errorCode, errorMsg, token) {
          var strict = this.strict;
          if (typeof strict === "function") {
            strict = strict(errorCode, errorMsg, token);
          }
          if (!strict || strict === "ignore") {
            return;
          } else if (strict === true || strict === "error") {
            throw new src_ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (errorMsg + " [" + errorCode + "]"), token);
          } else if (strict === "warn") {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
          } else {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
          }
        };
        _proto.useStrictBehavior = function useStrictBehavior(errorCode, errorMsg, token) {
          var strict = this.strict;
          if (typeof strict === "function") {
            try {
              strict = strict(errorCode, errorMsg, token);
            } catch (error2) {
              strict = "error";
            }
          }
          if (!strict || strict === "ignore") {
            return false;
          } else if (strict === true || strict === "error") {
            return true;
          } else if (strict === "warn") {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
            return false;
          } else {
            typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
            return false;
          }
        };
        _proto.isTrusted = function isTrusted(context) {
          if (context.url && !context.protocol) {
            context.protocol = utils.protocolFromUrl(context.url);
          }
          var trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
          return Boolean(trust);
        };
        return Settings2;
      }();
      ;
      var Style = /* @__PURE__ */ function() {
        function Style2(id, size, cramped) {
          this.id = void 0;
          this.size = void 0;
          this.cramped = void 0;
          this.id = id;
          this.size = size;
          this.cramped = cramped;
        }
        var _proto = Style2.prototype;
        _proto.sup = function sup() {
          return styles[_sup[this.id]];
        };
        _proto.sub = function sub() {
          return styles[_sub[this.id]];
        };
        _proto.fracNum = function fracNum() {
          return styles[_fracNum[this.id]];
        };
        _proto.fracDen = function fracDen() {
          return styles[_fracDen[this.id]];
        };
        _proto.cramp = function cramp() {
          return styles[_cramp[this.id]];
        };
        _proto.text = function text() {
          return styles[_text[this.id]];
        };
        _proto.isTight = function isTight() {
          return this.size >= 2;
        };
        return Style2;
      }();
      var D = 0;
      var Dc = 1;
      var T = 2;
      var Tc = 3;
      var S = 4;
      var Sc = 5;
      var SS = 6;
      var SSc = 7;
      var styles = [new Style(D, 0, false), new Style(Dc, 0, true), new Style(T, 1, false), new Style(Tc, 1, true), new Style(S, 2, false), new Style(Sc, 2, true), new Style(SS, 3, false), new Style(SSc, 3, true)];
      var _sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
      var _sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
      var _fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
      var _fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
      var _cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];
      var _text = [D, Dc, T, Tc, T, Tc, T, Tc];
      var src_Style = {
        DISPLAY: styles[D],
        TEXT: styles[T],
        SCRIPT: styles[S],
        SCRIPTSCRIPT: styles[SS]
      };
      ;
      var scriptData = [{
        name: "latin",
        blocks: [
          [256, 591],
          [768, 879]
        ]
      }, {
        name: "cyrillic",
        blocks: [[1024, 1279]]
      }, {
        name: "armenian",
        blocks: [[1328, 1423]]
      }, {
        name: "brahmic",
        blocks: [[2304, 4255]]
      }, {
        name: "georgian",
        blocks: [[4256, 4351]]
      }, {
        name: "cjk",
        blocks: [
          [12288, 12543],
          [19968, 40879],
          [65280, 65376]
        ]
      }, {
        name: "hangul",
        blocks: [[44032, 55215]]
      }];
      function scriptFromCodepoint(codepoint) {
        for (var i2 = 0; i2 < scriptData.length; i2++) {
          var script = scriptData[i2];
          for (var _i6 = 0; _i6 < script.blocks.length; _i6++) {
            var block = script.blocks[_i6];
            if (codepoint >= block[0] && codepoint <= block[1]) {
              return script.name;
            }
          }
        }
        return null;
      }
      var allBlocks = [];
      scriptData.forEach(function(s2) {
        return s2.blocks.forEach(function(b) {
          return allBlocks.push.apply(allBlocks, b);
        });
      });
      function supportedCodepoint(codepoint) {
        for (var i2 = 0; i2 < allBlocks.length; i2 += 2) {
          if (codepoint >= allBlocks[i2] && codepoint <= allBlocks[i2 + 1]) {
            return true;
          }
        }
        return false;
      }
      ;
      var hLinePad = 80;
      var sqrtMain = function sqrtMain2(extraViniculum, hLinePad2) {
        return "M95," + (622 + extraViniculum + hLinePad2) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + extraViniculum / 2.075 + " -" + extraViniculum + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + extraViniculum) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
      };
      var sqrtSize1 = function sqrtSize12(extraViniculum, hLinePad2) {
        return "M263," + (601 + extraViniculum + hLinePad2) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + extraViniculum / 2.084 + " -" + extraViniculum + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + extraViniculum) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
      };
      var sqrtSize2 = function sqrtSize22(extraViniculum, hLinePad2) {
        return "M983 " + (10 + extraViniculum + hLinePad2) + "\nl" + extraViniculum / 3.13 + " -" + extraViniculum + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + extraViniculum) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "h-400000z";
      };
      var sqrtSize3 = function sqrtSize32(extraViniculum, hLinePad2) {
        return "M424," + (2398 + extraViniculum + hLinePad2) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + extraViniculum / 4.223 + " -" + extraViniculum + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + extraViniculum) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + extraViniculum) + " " + hLinePad2 + "\nh400000v" + (40 + extraViniculum) + "h-400000z";
      };
      var sqrtSize4 = function sqrtSize42(extraViniculum, hLinePad2) {
        return "M473," + (2713 + extraViniculum + hLinePad2) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + extraViniculum / 5.298 + " -" + extraViniculum + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + extraViniculum) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + extraViniculum) + " " + hLinePad2 + "h400000v" + (40 + extraViniculum) + "H1017.7z";
      };
      var phasePath = function phasePath2(y) {
        var x = y / 2;
        return "M400000 " + y + " H0 L" + x + " 0 l65 45 L145 " + (y - 80) + " H400000z";
      };
      var sqrtTall = function sqrtTall2(extraViniculum, hLinePad2, viewBoxHeight) {
        var vertSegment = viewBoxHeight - 54 - hLinePad2 - extraViniculum;
        return "M702 " + (extraViniculum + hLinePad2) + "H400000" + (40 + extraViniculum) + "\nH742v" + vertSegment + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + hLinePad2 + "H400000v" + (40 + extraViniculum) + "H742z";
      };
      var sqrtPath = function sqrtPath2(size, extraViniculum, viewBoxHeight) {
        extraViniculum = 1e3 * extraViniculum;
        var path2 = "";
        switch (size) {
          case "sqrtMain":
            path2 = sqrtMain(extraViniculum, hLinePad);
            break;
          case "sqrtSize1":
            path2 = sqrtSize1(extraViniculum, hLinePad);
            break;
          case "sqrtSize2":
            path2 = sqrtSize2(extraViniculum, hLinePad);
            break;
          case "sqrtSize3":
            path2 = sqrtSize3(extraViniculum, hLinePad);
            break;
          case "sqrtSize4":
            path2 = sqrtSize4(extraViniculum, hLinePad);
            break;
          case "sqrtTall":
            path2 = sqrtTall(extraViniculum, hLinePad, viewBoxHeight);
        }
        return path2;
      };
      var innerPath = function innerPath2(name, height) {
        switch (name) {
          case "\u239C":
            return "M291 0 H417 V" + height + " H291z M291 0 H417 V" + height + " H291z";
          case "\u2223":
            return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z";
          case "\u2225":
            return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z" + ("M367 0 H410 V" + height + " H367z M367 0 H410 V" + height + " H367z");
          case "\u239F":
            return "M457 0 H583 V" + height + " H457z M457 0 H583 V" + height + " H457z";
          case "\u23A2":
            return "M319 0 H403 V" + height + " H319z M319 0 H403 V" + height + " H319z";
          case "\u23A5":
            return "M263 0 H347 V" + height + " H263z M263 0 H347 V" + height + " H263z";
          case "\u23AA":
            return "M384 0 H504 V" + height + " H384z M384 0 H504 V" + height + " H384z";
          case "\u23D0":
            return "M312 0 H355 V" + height + " H312z M312 0 H355 V" + height + " H312z";
          case "\u2016":
            return "M257 0 H300 V" + height + " H257z M257 0 H300 V" + height + " H257z" + ("M478 0 H521 V" + height + " H478z M478 0 H521 V" + height + " H478z");
          default:
            return "";
        }
      };
      var path = {
        doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
        doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
        leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
        leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
        leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
        leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
        leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
        leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
        leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
        leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
        leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
        lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
        leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
        leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
        leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
        longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
        midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
        midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
        oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
        oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
        oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
        oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
        rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
        rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
        rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
        rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
        rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
        rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
        rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
        rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
        rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
        righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
        rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
        rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
        twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
        twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
        tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
        tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
        tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
        tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
        vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
        widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
        widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
        widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
        widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
        baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
        rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
        baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
        rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
        shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
        shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
      };
      ;
      var DocumentFragment = /* @__PURE__ */ function() {
        function DocumentFragment2(children) {
          this.children = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          this.children = children;
          this.classes = [];
          this.height = 0;
          this.depth = 0;
          this.maxFontSize = 0;
          this.style = {};
        }
        var _proto = DocumentFragment2.prototype;
        _proto.hasClass = function hasClass(className) {
          return utils.contains(this.classes, className);
        };
        _proto.toNode = function toNode() {
          var frag = document.createDocumentFragment();
          for (var i2 = 0; i2 < this.children.length; i2++) {
            frag.appendChild(this.children[i2].toNode());
          }
          return frag;
        };
        _proto.toMarkup = function toMarkup() {
          var markup = "";
          for (var i2 = 0; i2 < this.children.length; i2++) {
            markup += this.children[i2].toMarkup();
          }
          return markup;
        };
        _proto.toText = function toText() {
          var toText2 = function toText3(child) {
            return child.toText();
          };
          return this.children.map(toText2).join("");
        };
        return DocumentFragment2;
      }();
      ;
      var createClass = function createClass2(classes) {
        return classes.filter(function(cls) {
          return cls;
        }).join(" ");
      };
      var initNode = function initNode2(classes, options2, style) {
        this.classes = classes || [];
        this.attributes = {};
        this.height = 0;
        this.depth = 0;
        this.maxFontSize = 0;
        this.style = style || {};
        if (options2) {
          if (options2.style.isTight()) {
            this.classes.push("mtight");
          }
          var color = options2.getColor();
          if (color) {
            this.style.color = color;
          }
        }
      };
      var _toNode = function toNode(tagName) {
        var node = document.createElement(tagName);
        node.className = createClass(this.classes);
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            node.style[style] = this.style[style];
          }
        }
        for (var attr in this.attributes) {
          if (this.attributes.hasOwnProperty(attr)) {
            node.setAttribute(attr, this.attributes[attr]);
          }
        }
        for (var i2 = 0; i2 < this.children.length; i2++) {
          node.appendChild(this.children[i2].toNode());
        }
        return node;
      };
      var _toMarkup = function toMarkup(tagName) {
        var markup = "<" + tagName;
        if (this.classes.length) {
          markup += ' class="' + utils.escape(createClass(this.classes)) + '"';
        }
        var styles2 = "";
        for (var style in this.style) {
          if (this.style.hasOwnProperty(style)) {
            styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
          }
        }
        if (styles2) {
          markup += ' style="' + utils.escape(styles2) + '"';
        }
        for (var attr in this.attributes) {
          if (this.attributes.hasOwnProperty(attr)) {
            markup += " " + attr + '="' + utils.escape(this.attributes[attr]) + '"';
          }
        }
        markup += ">";
        for (var i2 = 0; i2 < this.children.length; i2++) {
          markup += this.children[i2].toMarkup();
        }
        markup += "</" + tagName + ">";
        return markup;
      };
      var Span = /* @__PURE__ */ function() {
        function Span2(classes, children, options2, style) {
          this.children = void 0;
          this.attributes = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.width = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          initNode.call(this, classes, options2, style);
          this.children = children || [];
        }
        var _proto = Span2.prototype;
        _proto.setAttribute = function setAttribute(attribute, value) {
          this.attributes[attribute] = value;
        };
        _proto.hasClass = function hasClass(className) {
          return utils.contains(this.classes, className);
        };
        _proto.toNode = function toNode() {
          return _toNode.call(this, "span");
        };
        _proto.toMarkup = function toMarkup() {
          return _toMarkup.call(this, "span");
        };
        return Span2;
      }();
      var Anchor = /* @__PURE__ */ function() {
        function Anchor2(href, classes, children, options2) {
          this.children = void 0;
          this.attributes = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          initNode.call(this, classes, options2);
          this.children = children || [];
          this.setAttribute("href", href);
        }
        var _proto2 = Anchor2.prototype;
        _proto2.setAttribute = function setAttribute(attribute, value) {
          this.attributes[attribute] = value;
        };
        _proto2.hasClass = function hasClass(className) {
          return utils.contains(this.classes, className);
        };
        _proto2.toNode = function toNode() {
          return _toNode.call(this, "a");
        };
        _proto2.toMarkup = function toMarkup() {
          return _toMarkup.call(this, "a");
        };
        return Anchor2;
      }();
      var Img = /* @__PURE__ */ function() {
        function Img2(src2, alt, style) {
          this.src = void 0;
          this.alt = void 0;
          this.classes = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.maxFontSize = void 0;
          this.style = void 0;
          this.alt = alt;
          this.src = src2;
          this.classes = ["mord"];
          this.style = style;
        }
        var _proto3 = Img2.prototype;
        _proto3.hasClass = function hasClass(className) {
          return utils.contains(this.classes, className);
        };
        _proto3.toNode = function toNode() {
          var node = document.createElement("img");
          node.src = this.src;
          node.alt = this.alt;
          node.className = "mord";
          for (var style in this.style) {
            if (this.style.hasOwnProperty(style)) {
              node.style[style] = this.style[style];
            }
          }
          return node;
        };
        _proto3.toMarkup = function toMarkup() {
          var markup = "<img  src='" + this.src + " 'alt='" + this.alt + "' ";
          var styles2 = "";
          for (var style in this.style) {
            if (this.style.hasOwnProperty(style)) {
              styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
            }
          }
          if (styles2) {
            markup += ' style="' + utils.escape(styles2) + '"';
          }
          markup += "'/>";
          return markup;
        };
        return Img2;
      }();
      var iCombinations = {
        \u00EE: "\u0131\u0302",
        \u00EF: "\u0131\u0308",
        \u00ED: "\u0131\u0301",
        \u00EC: "\u0131\u0300"
      };
      var SymbolNode = /* @__PURE__ */ function() {
        function SymbolNode2(text, height, depth, italic, skew, width, classes, style) {
          this.text = void 0;
          this.height = void 0;
          this.depth = void 0;
          this.italic = void 0;
          this.skew = void 0;
          this.width = void 0;
          this.maxFontSize = void 0;
          this.classes = void 0;
          this.style = void 0;
          this.text = text;
          this.height = height || 0;
          this.depth = depth || 0;
          this.italic = italic || 0;
          this.skew = skew || 0;
          this.width = width || 0;
          this.classes = classes || [];
          this.style = style || {};
          this.maxFontSize = 0;
          var script = scriptFromCodepoint(this.text.charCodeAt(0));
          if (script) {
            this.classes.push(script + "_fallback");
          }
          if (/[îïíì]/.test(this.text)) {
            this.text = iCombinations[this.text];
          }
        }
        var _proto4 = SymbolNode2.prototype;
        _proto4.hasClass = function hasClass(className) {
          return utils.contains(this.classes, className);
        };
        _proto4.toNode = function toNode() {
          var node = document.createTextNode(this.text);
          var span = null;
          if (this.italic > 0) {
            span = document.createElement("span");
            span.style.marginRight = this.italic + "em";
          }
          if (this.classes.length > 0) {
            span = span || document.createElement("span");
            span.className = createClass(this.classes);
          }
          for (var style in this.style) {
            if (this.style.hasOwnProperty(style)) {
              span = span || document.createElement("span");
              span.style[style] = this.style[style];
            }
          }
          if (span) {
            span.appendChild(node);
            return span;
          } else {
            return node;
          }
        };
        _proto4.toMarkup = function toMarkup() {
          var needsSpan = false;
          var markup = "<span";
          if (this.classes.length) {
            needsSpan = true;
            markup += ' class="';
            markup += utils.escape(createClass(this.classes));
            markup += '"';
          }
          var styles2 = "";
          if (this.italic > 0) {
            styles2 += "margin-right:" + this.italic + "em;";
          }
          for (var style in this.style) {
            if (this.style.hasOwnProperty(style)) {
              styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
            }
          }
          if (styles2) {
            needsSpan = true;
            markup += ' style="' + utils.escape(styles2) + '"';
          }
          var escaped3 = utils.escape(this.text);
          if (needsSpan) {
            markup += ">";
            markup += escaped3;
            markup += "</span>";
            return markup;
          } else {
            return escaped3;
          }
        };
        return SymbolNode2;
      }();
      var SvgNode = /* @__PURE__ */ function() {
        function SvgNode2(children, attributes) {
          this.children = void 0;
          this.attributes = void 0;
          this.children = children || [];
          this.attributes = attributes || {};
        }
        var _proto5 = SvgNode2.prototype;
        _proto5.toNode = function toNode() {
          var svgNS = "http://www.w3.org/2000/svg";
          var node = document.createElementNS(svgNS, "svg");
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              node.setAttribute(attr, this.attributes[attr]);
            }
          }
          for (var i2 = 0; i2 < this.children.length; i2++) {
            node.appendChild(this.children[i2].toNode());
          }
          return node;
        };
        _proto5.toMarkup = function toMarkup() {
          var markup = "<svg";
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              markup += " " + attr + "='" + this.attributes[attr] + "'";
            }
          }
          markup += ">";
          for (var i2 = 0; i2 < this.children.length; i2++) {
            markup += this.children[i2].toMarkup();
          }
          markup += "</svg>";
          return markup;
        };
        return SvgNode2;
      }();
      var PathNode = /* @__PURE__ */ function() {
        function PathNode2(pathName, alternate) {
          this.pathName = void 0;
          this.alternate = void 0;
          this.pathName = pathName;
          this.alternate = alternate;
        }
        var _proto6 = PathNode2.prototype;
        _proto6.toNode = function toNode() {
          var svgNS = "http://www.w3.org/2000/svg";
          var node = document.createElementNS(svgNS, "path");
          if (this.alternate) {
            node.setAttribute("d", this.alternate);
          } else {
            node.setAttribute("d", path[this.pathName]);
          }
          return node;
        };
        _proto6.toMarkup = function toMarkup() {
          if (this.alternate) {
            return "<path d='" + this.alternate + "'/>";
          } else {
            return "<path d='" + path[this.pathName] + "'/>";
          }
        };
        return PathNode2;
      }();
      var LineNode = /* @__PURE__ */ function() {
        function LineNode2(attributes) {
          this.attributes = void 0;
          this.attributes = attributes || {};
        }
        var _proto7 = LineNode2.prototype;
        _proto7.toNode = function toNode() {
          var svgNS = "http://www.w3.org/2000/svg";
          var node = document.createElementNS(svgNS, "line");
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              node.setAttribute(attr, this.attributes[attr]);
            }
          }
          return node;
        };
        _proto7.toMarkup = function toMarkup() {
          var markup = "<line";
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              markup += " " + attr + "='" + this.attributes[attr] + "'";
            }
          }
          markup += "/>";
          return markup;
        };
        return LineNode2;
      }();
      function assertSymbolDomNode(group) {
        if (group instanceof SymbolNode) {
          return group;
        } else {
          throw new Error("Expected symbolNode but got " + String(group) + ".");
        }
      }
      function assertSpan(group) {
        if (group instanceof Span) {
          return group;
        } else {
          throw new Error("Expected span<HtmlDomNode> but got " + String(group) + ".");
        }
      }
      ;
      var fontMetricsData = {
        "AMS-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "65": [0, 0.68889, 0, 0, 0.72222],
          "66": [0, 0.68889, 0, 0, 0.66667],
          "67": [0, 0.68889, 0, 0, 0.72222],
          "68": [0, 0.68889, 0, 0, 0.72222],
          "69": [0, 0.68889, 0, 0, 0.66667],
          "70": [0, 0.68889, 0, 0, 0.61111],
          "71": [0, 0.68889, 0, 0, 0.77778],
          "72": [0, 0.68889, 0, 0, 0.77778],
          "73": [0, 0.68889, 0, 0, 0.38889],
          "74": [0.16667, 0.68889, 0, 0, 0.5],
          "75": [0, 0.68889, 0, 0, 0.77778],
          "76": [0, 0.68889, 0, 0, 0.66667],
          "77": [0, 0.68889, 0, 0, 0.94445],
          "78": [0, 0.68889, 0, 0, 0.72222],
          "79": [0.16667, 0.68889, 0, 0, 0.77778],
          "80": [0, 0.68889, 0, 0, 0.61111],
          "81": [0.16667, 0.68889, 0, 0, 0.77778],
          "82": [0, 0.68889, 0, 0, 0.72222],
          "83": [0, 0.68889, 0, 0, 0.55556],
          "84": [0, 0.68889, 0, 0, 0.66667],
          "85": [0, 0.68889, 0, 0, 0.72222],
          "86": [0, 0.68889, 0, 0, 0.72222],
          "87": [0, 0.68889, 0, 0, 1],
          "88": [0, 0.68889, 0, 0, 0.72222],
          "89": [0, 0.68889, 0, 0, 0.72222],
          "90": [0, 0.68889, 0, 0, 0.66667],
          "107": [0, 0.68889, 0, 0, 0.55556],
          "160": [0, 0, 0, 0, 0.25],
          "165": [0, 0.675, 0.025, 0, 0.75],
          "174": [0.15559, 0.69224, 0, 0, 0.94666],
          "240": [0, 0.68889, 0, 0, 0.55556],
          "295": [0, 0.68889, 0, 0, 0.54028],
          "710": [0, 0.825, 0, 0, 2.33334],
          "732": [0, 0.9, 0, 0, 2.33334],
          "770": [0, 0.825, 0, 0, 2.33334],
          "771": [0, 0.9, 0, 0, 2.33334],
          "989": [0.08167, 0.58167, 0, 0, 0.77778],
          "1008": [0, 0.43056, 0.04028, 0, 0.66667],
          "8245": [0, 0.54986, 0, 0, 0.275],
          "8463": [0, 0.68889, 0, 0, 0.54028],
          "8487": [0, 0.68889, 0, 0, 0.72222],
          "8498": [0, 0.68889, 0, 0, 0.55556],
          "8502": [0, 0.68889, 0, 0, 0.66667],
          "8503": [0, 0.68889, 0, 0, 0.44445],
          "8504": [0, 0.68889, 0, 0, 0.66667],
          "8513": [0, 0.68889, 0, 0, 0.63889],
          "8592": [-0.03598, 0.46402, 0, 0, 0.5],
          "8594": [-0.03598, 0.46402, 0, 0, 0.5],
          "8602": [-0.13313, 0.36687, 0, 0, 1],
          "8603": [-0.13313, 0.36687, 0, 0, 1],
          "8606": [0.01354, 0.52239, 0, 0, 1],
          "8608": [0.01354, 0.52239, 0, 0, 1],
          "8610": [0.01354, 0.52239, 0, 0, 1.11111],
          "8611": [0.01354, 0.52239, 0, 0, 1.11111],
          "8619": [0, 0.54986, 0, 0, 1],
          "8620": [0, 0.54986, 0, 0, 1],
          "8621": [-0.13313, 0.37788, 0, 0, 1.38889],
          "8622": [-0.13313, 0.36687, 0, 0, 1],
          "8624": [0, 0.69224, 0, 0, 0.5],
          "8625": [0, 0.69224, 0, 0, 0.5],
          "8630": [0, 0.43056, 0, 0, 1],
          "8631": [0, 0.43056, 0, 0, 1],
          "8634": [0.08198, 0.58198, 0, 0, 0.77778],
          "8635": [0.08198, 0.58198, 0, 0, 0.77778],
          "8638": [0.19444, 0.69224, 0, 0, 0.41667],
          "8639": [0.19444, 0.69224, 0, 0, 0.41667],
          "8642": [0.19444, 0.69224, 0, 0, 0.41667],
          "8643": [0.19444, 0.69224, 0, 0, 0.41667],
          "8644": [0.1808, 0.675, 0, 0, 1],
          "8646": [0.1808, 0.675, 0, 0, 1],
          "8647": [0.1808, 0.675, 0, 0, 1],
          "8648": [0.19444, 0.69224, 0, 0, 0.83334],
          "8649": [0.1808, 0.675, 0, 0, 1],
          "8650": [0.19444, 0.69224, 0, 0, 0.83334],
          "8651": [0.01354, 0.52239, 0, 0, 1],
          "8652": [0.01354, 0.52239, 0, 0, 1],
          "8653": [-0.13313, 0.36687, 0, 0, 1],
          "8654": [-0.13313, 0.36687, 0, 0, 1],
          "8655": [-0.13313, 0.36687, 0, 0, 1],
          "8666": [0.13667, 0.63667, 0, 0, 1],
          "8667": [0.13667, 0.63667, 0, 0, 1],
          "8669": [-0.13313, 0.37788, 0, 0, 1],
          "8672": [-0.064, 0.437, 0, 0, 1.334],
          "8674": [-0.064, 0.437, 0, 0, 1.334],
          "8705": [0, 0.825, 0, 0, 0.5],
          "8708": [0, 0.68889, 0, 0, 0.55556],
          "8709": [0.08167, 0.58167, 0, 0, 0.77778],
          "8717": [0, 0.43056, 0, 0, 0.42917],
          "8722": [-0.03598, 0.46402, 0, 0, 0.5],
          "8724": [0.08198, 0.69224, 0, 0, 0.77778],
          "8726": [0.08167, 0.58167, 0, 0, 0.77778],
          "8733": [0, 0.69224, 0, 0, 0.77778],
          "8736": [0, 0.69224, 0, 0, 0.72222],
          "8737": [0, 0.69224, 0, 0, 0.72222],
          "8738": [0.03517, 0.52239, 0, 0, 0.72222],
          "8739": [0.08167, 0.58167, 0, 0, 0.22222],
          "8740": [0.25142, 0.74111, 0, 0, 0.27778],
          "8741": [0.08167, 0.58167, 0, 0, 0.38889],
          "8742": [0.25142, 0.74111, 0, 0, 0.5],
          "8756": [0, 0.69224, 0, 0, 0.66667],
          "8757": [0, 0.69224, 0, 0, 0.66667],
          "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
          "8765": [-0.13313, 0.37788, 0, 0, 0.77778],
          "8769": [-0.13313, 0.36687, 0, 0, 0.77778],
          "8770": [-0.03625, 0.46375, 0, 0, 0.77778],
          "8774": [0.30274, 0.79383, 0, 0, 0.77778],
          "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
          "8778": [0.08167, 0.58167, 0, 0, 0.77778],
          "8782": [0.06062, 0.54986, 0, 0, 0.77778],
          "8783": [0.06062, 0.54986, 0, 0, 0.77778],
          "8785": [0.08198, 0.58198, 0, 0, 0.77778],
          "8786": [0.08198, 0.58198, 0, 0, 0.77778],
          "8787": [0.08198, 0.58198, 0, 0, 0.77778],
          "8790": [0, 0.69224, 0, 0, 0.77778],
          "8791": [0.22958, 0.72958, 0, 0, 0.77778],
          "8796": [0.08198, 0.91667, 0, 0, 0.77778],
          "8806": [0.25583, 0.75583, 0, 0, 0.77778],
          "8807": [0.25583, 0.75583, 0, 0, 0.77778],
          "8808": [0.25142, 0.75726, 0, 0, 0.77778],
          "8809": [0.25142, 0.75726, 0, 0, 0.77778],
          "8812": [0.25583, 0.75583, 0, 0, 0.5],
          "8814": [0.20576, 0.70576, 0, 0, 0.77778],
          "8815": [0.20576, 0.70576, 0, 0, 0.77778],
          "8816": [0.30274, 0.79383, 0, 0, 0.77778],
          "8817": [0.30274, 0.79383, 0, 0, 0.77778],
          "8818": [0.22958, 0.72958, 0, 0, 0.77778],
          "8819": [0.22958, 0.72958, 0, 0, 0.77778],
          "8822": [0.1808, 0.675, 0, 0, 0.77778],
          "8823": [0.1808, 0.675, 0, 0, 0.77778],
          "8828": [0.13667, 0.63667, 0, 0, 0.77778],
          "8829": [0.13667, 0.63667, 0, 0, 0.77778],
          "8830": [0.22958, 0.72958, 0, 0, 0.77778],
          "8831": [0.22958, 0.72958, 0, 0, 0.77778],
          "8832": [0.20576, 0.70576, 0, 0, 0.77778],
          "8833": [0.20576, 0.70576, 0, 0, 0.77778],
          "8840": [0.30274, 0.79383, 0, 0, 0.77778],
          "8841": [0.30274, 0.79383, 0, 0, 0.77778],
          "8842": [0.13597, 0.63597, 0, 0, 0.77778],
          "8843": [0.13597, 0.63597, 0, 0, 0.77778],
          "8847": [0.03517, 0.54986, 0, 0, 0.77778],
          "8848": [0.03517, 0.54986, 0, 0, 0.77778],
          "8858": [0.08198, 0.58198, 0, 0, 0.77778],
          "8859": [0.08198, 0.58198, 0, 0, 0.77778],
          "8861": [0.08198, 0.58198, 0, 0, 0.77778],
          "8862": [0, 0.675, 0, 0, 0.77778],
          "8863": [0, 0.675, 0, 0, 0.77778],
          "8864": [0, 0.675, 0, 0, 0.77778],
          "8865": [0, 0.675, 0, 0, 0.77778],
          "8872": [0, 0.69224, 0, 0, 0.61111],
          "8873": [0, 0.69224, 0, 0, 0.72222],
          "8874": [0, 0.69224, 0, 0, 0.88889],
          "8876": [0, 0.68889, 0, 0, 0.61111],
          "8877": [0, 0.68889, 0, 0, 0.61111],
          "8878": [0, 0.68889, 0, 0, 0.72222],
          "8879": [0, 0.68889, 0, 0, 0.72222],
          "8882": [0.03517, 0.54986, 0, 0, 0.77778],
          "8883": [0.03517, 0.54986, 0, 0, 0.77778],
          "8884": [0.13667, 0.63667, 0, 0, 0.77778],
          "8885": [0.13667, 0.63667, 0, 0, 0.77778],
          "8888": [0, 0.54986, 0, 0, 1.11111],
          "8890": [0.19444, 0.43056, 0, 0, 0.55556],
          "8891": [0.19444, 0.69224, 0, 0, 0.61111],
          "8892": [0.19444, 0.69224, 0, 0, 0.61111],
          "8901": [0, 0.54986, 0, 0, 0.27778],
          "8903": [0.08167, 0.58167, 0, 0, 0.77778],
          "8905": [0.08167, 0.58167, 0, 0, 0.77778],
          "8906": [0.08167, 0.58167, 0, 0, 0.77778],
          "8907": [0, 0.69224, 0, 0, 0.77778],
          "8908": [0, 0.69224, 0, 0, 0.77778],
          "8909": [-0.03598, 0.46402, 0, 0, 0.77778],
          "8910": [0, 0.54986, 0, 0, 0.76042],
          "8911": [0, 0.54986, 0, 0, 0.76042],
          "8912": [0.03517, 0.54986, 0, 0, 0.77778],
          "8913": [0.03517, 0.54986, 0, 0, 0.77778],
          "8914": [0, 0.54986, 0, 0, 0.66667],
          "8915": [0, 0.54986, 0, 0, 0.66667],
          "8916": [0, 0.69224, 0, 0, 0.66667],
          "8918": [0.0391, 0.5391, 0, 0, 0.77778],
          "8919": [0.0391, 0.5391, 0, 0, 0.77778],
          "8920": [0.03517, 0.54986, 0, 0, 1.33334],
          "8921": [0.03517, 0.54986, 0, 0, 1.33334],
          "8922": [0.38569, 0.88569, 0, 0, 0.77778],
          "8923": [0.38569, 0.88569, 0, 0, 0.77778],
          "8926": [0.13667, 0.63667, 0, 0, 0.77778],
          "8927": [0.13667, 0.63667, 0, 0, 0.77778],
          "8928": [0.30274, 0.79383, 0, 0, 0.77778],
          "8929": [0.30274, 0.79383, 0, 0, 0.77778],
          "8934": [0.23222, 0.74111, 0, 0, 0.77778],
          "8935": [0.23222, 0.74111, 0, 0, 0.77778],
          "8936": [0.23222, 0.74111, 0, 0, 0.77778],
          "8937": [0.23222, 0.74111, 0, 0, 0.77778],
          "8938": [0.20576, 0.70576, 0, 0, 0.77778],
          "8939": [0.20576, 0.70576, 0, 0, 0.77778],
          "8940": [0.30274, 0.79383, 0, 0, 0.77778],
          "8941": [0.30274, 0.79383, 0, 0, 0.77778],
          "8994": [0.19444, 0.69224, 0, 0, 0.77778],
          "8995": [0.19444, 0.69224, 0, 0, 0.77778],
          "9416": [0.15559, 0.69224, 0, 0, 0.90222],
          "9484": [0, 0.69224, 0, 0, 0.5],
          "9488": [0, 0.69224, 0, 0, 0.5],
          "9492": [0, 0.37788, 0, 0, 0.5],
          "9496": [0, 0.37788, 0, 0, 0.5],
          "9585": [0.19444, 0.68889, 0, 0, 0.88889],
          "9586": [0.19444, 0.74111, 0, 0, 0.88889],
          "9632": [0, 0.675, 0, 0, 0.77778],
          "9633": [0, 0.675, 0, 0, 0.77778],
          "9650": [0, 0.54986, 0, 0, 0.72222],
          "9651": [0, 0.54986, 0, 0, 0.72222],
          "9654": [0.03517, 0.54986, 0, 0, 0.77778],
          "9660": [0, 0.54986, 0, 0, 0.72222],
          "9661": [0, 0.54986, 0, 0, 0.72222],
          "9664": [0.03517, 0.54986, 0, 0, 0.77778],
          "9674": [0.11111, 0.69224, 0, 0, 0.66667],
          "9733": [0.19444, 0.69224, 0, 0, 0.94445],
          "10003": [0, 0.69224, 0, 0, 0.83334],
          "10016": [0, 0.69224, 0, 0, 0.83334],
          "10731": [0.11111, 0.69224, 0, 0, 0.66667],
          "10846": [0.19444, 0.75583, 0, 0, 0.61111],
          "10877": [0.13667, 0.63667, 0, 0, 0.77778],
          "10878": [0.13667, 0.63667, 0, 0, 0.77778],
          "10885": [0.25583, 0.75583, 0, 0, 0.77778],
          "10886": [0.25583, 0.75583, 0, 0, 0.77778],
          "10887": [0.13597, 0.63597, 0, 0, 0.77778],
          "10888": [0.13597, 0.63597, 0, 0, 0.77778],
          "10889": [0.26167, 0.75726, 0, 0, 0.77778],
          "10890": [0.26167, 0.75726, 0, 0, 0.77778],
          "10891": [0.48256, 0.98256, 0, 0, 0.77778],
          "10892": [0.48256, 0.98256, 0, 0, 0.77778],
          "10901": [0.13667, 0.63667, 0, 0, 0.77778],
          "10902": [0.13667, 0.63667, 0, 0, 0.77778],
          "10933": [0.25142, 0.75726, 0, 0, 0.77778],
          "10934": [0.25142, 0.75726, 0, 0, 0.77778],
          "10935": [0.26167, 0.75726, 0, 0, 0.77778],
          "10936": [0.26167, 0.75726, 0, 0, 0.77778],
          "10937": [0.26167, 0.75726, 0, 0, 0.77778],
          "10938": [0.26167, 0.75726, 0, 0, 0.77778],
          "10949": [0.25583, 0.75583, 0, 0, 0.77778],
          "10950": [0.25583, 0.75583, 0, 0, 0.77778],
          "10955": [0.28481, 0.79383, 0, 0, 0.77778],
          "10956": [0.28481, 0.79383, 0, 0, 0.77778],
          "57350": [0.08167, 0.58167, 0, 0, 0.22222],
          "57351": [0.08167, 0.58167, 0, 0, 0.38889],
          "57352": [0.08167, 0.58167, 0, 0, 0.77778],
          "57353": [0, 0.43056, 0.04028, 0, 0.66667],
          "57356": [0.25142, 0.75726, 0, 0, 0.77778],
          "57357": [0.25142, 0.75726, 0, 0, 0.77778],
          "57358": [0.41951, 0.91951, 0, 0, 0.77778],
          "57359": [0.30274, 0.79383, 0, 0, 0.77778],
          "57360": [0.30274, 0.79383, 0, 0, 0.77778],
          "57361": [0.41951, 0.91951, 0, 0, 0.77778],
          "57366": [0.25142, 0.75726, 0, 0, 0.77778],
          "57367": [0.25142, 0.75726, 0, 0, 0.77778],
          "57368": [0.25142, 0.75726, 0, 0, 0.77778],
          "57369": [0.25142, 0.75726, 0, 0, 0.77778],
          "57370": [0.13597, 0.63597, 0, 0, 0.77778],
          "57371": [0.13597, 0.63597, 0, 0, 0.77778]
        },
        "Caligraphic-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "65": [0, 0.68333, 0, 0.19445, 0.79847],
          "66": [0, 0.68333, 0.03041, 0.13889, 0.65681],
          "67": [0, 0.68333, 0.05834, 0.13889, 0.52653],
          "68": [0, 0.68333, 0.02778, 0.08334, 0.77139],
          "69": [0, 0.68333, 0.08944, 0.11111, 0.52778],
          "70": [0, 0.68333, 0.09931, 0.11111, 0.71875],
          "71": [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
          "72": [0, 0.68333, 965e-5, 0.11111, 0.84452],
          "73": [0, 0.68333, 0.07382, 0, 0.54452],
          "74": [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
          "75": [0, 0.68333, 0.01445, 0.05556, 0.76195],
          "76": [0, 0.68333, 0, 0.13889, 0.68972],
          "77": [0, 0.68333, 0, 0.13889, 1.2009],
          "78": [0, 0.68333, 0.14736, 0.08334, 0.82049],
          "79": [0, 0.68333, 0.02778, 0.11111, 0.79611],
          "80": [0, 0.68333, 0.08222, 0.08334, 0.69556],
          "81": [0.09722, 0.68333, 0, 0.11111, 0.81667],
          "82": [0, 0.68333, 0, 0.08334, 0.8475],
          "83": [0, 0.68333, 0.075, 0.13889, 0.60556],
          "84": [0, 0.68333, 0.25417, 0, 0.54464],
          "85": [0, 0.68333, 0.09931, 0.08334, 0.62583],
          "86": [0, 0.68333, 0.08222, 0, 0.61278],
          "87": [0, 0.68333, 0.08222, 0.08334, 0.98778],
          "88": [0, 0.68333, 0.14643, 0.13889, 0.7133],
          "89": [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
          "90": [0, 0.68333, 0.07944, 0.13889, 0.72473],
          "160": [0, 0, 0, 0, 0.25]
        },
        "Fraktur-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69141, 0, 0, 0.29574],
          "34": [0, 0.69141, 0, 0, 0.21471],
          "38": [0, 0.69141, 0, 0, 0.73786],
          "39": [0, 0.69141, 0, 0, 0.21201],
          "40": [0.24982, 0.74947, 0, 0, 0.38865],
          "41": [0.24982, 0.74947, 0, 0, 0.38865],
          "42": [0, 0.62119, 0, 0, 0.27764],
          "43": [0.08319, 0.58283, 0, 0, 0.75623],
          "44": [0, 0.10803, 0, 0, 0.27764],
          "45": [0.08319, 0.58283, 0, 0, 0.75623],
          "46": [0, 0.10803, 0, 0, 0.27764],
          "47": [0.24982, 0.74947, 0, 0, 0.50181],
          "48": [0, 0.47534, 0, 0, 0.50181],
          "49": [0, 0.47534, 0, 0, 0.50181],
          "50": [0, 0.47534, 0, 0, 0.50181],
          "51": [0.18906, 0.47534, 0, 0, 0.50181],
          "52": [0.18906, 0.47534, 0, 0, 0.50181],
          "53": [0.18906, 0.47534, 0, 0, 0.50181],
          "54": [0, 0.69141, 0, 0, 0.50181],
          "55": [0.18906, 0.47534, 0, 0, 0.50181],
          "56": [0, 0.69141, 0, 0, 0.50181],
          "57": [0.18906, 0.47534, 0, 0, 0.50181],
          "58": [0, 0.47534, 0, 0, 0.21606],
          "59": [0.12604, 0.47534, 0, 0, 0.21606],
          "61": [-0.13099, 0.36866, 0, 0, 0.75623],
          "63": [0, 0.69141, 0, 0, 0.36245],
          "65": [0, 0.69141, 0, 0, 0.7176],
          "66": [0, 0.69141, 0, 0, 0.88397],
          "67": [0, 0.69141, 0, 0, 0.61254],
          "68": [0, 0.69141, 0, 0, 0.83158],
          "69": [0, 0.69141, 0, 0, 0.66278],
          "70": [0.12604, 0.69141, 0, 0, 0.61119],
          "71": [0, 0.69141, 0, 0, 0.78539],
          "72": [0.06302, 0.69141, 0, 0, 0.7203],
          "73": [0, 0.69141, 0, 0, 0.55448],
          "74": [0.12604, 0.69141, 0, 0, 0.55231],
          "75": [0, 0.69141, 0, 0, 0.66845],
          "76": [0, 0.69141, 0, 0, 0.66602],
          "77": [0, 0.69141, 0, 0, 1.04953],
          "78": [0, 0.69141, 0, 0, 0.83212],
          "79": [0, 0.69141, 0, 0, 0.82699],
          "80": [0.18906, 0.69141, 0, 0, 0.82753],
          "81": [0.03781, 0.69141, 0, 0, 0.82699],
          "82": [0, 0.69141, 0, 0, 0.82807],
          "83": [0, 0.69141, 0, 0, 0.82861],
          "84": [0, 0.69141, 0, 0, 0.66899],
          "85": [0, 0.69141, 0, 0, 0.64576],
          "86": [0, 0.69141, 0, 0, 0.83131],
          "87": [0, 0.69141, 0, 0, 1.04602],
          "88": [0, 0.69141, 0, 0, 0.71922],
          "89": [0.18906, 0.69141, 0, 0, 0.83293],
          "90": [0.12604, 0.69141, 0, 0, 0.60201],
          "91": [0.24982, 0.74947, 0, 0, 0.27764],
          "93": [0.24982, 0.74947, 0, 0, 0.27764],
          "94": [0, 0.69141, 0, 0, 0.49965],
          "97": [0, 0.47534, 0, 0, 0.50046],
          "98": [0, 0.69141, 0, 0, 0.51315],
          "99": [0, 0.47534, 0, 0, 0.38946],
          "100": [0, 0.62119, 0, 0, 0.49857],
          "101": [0, 0.47534, 0, 0, 0.40053],
          "102": [0.18906, 0.69141, 0, 0, 0.32626],
          "103": [0.18906, 0.47534, 0, 0, 0.5037],
          "104": [0.18906, 0.69141, 0, 0, 0.52126],
          "105": [0, 0.69141, 0, 0, 0.27899],
          "106": [0, 0.69141, 0, 0, 0.28088],
          "107": [0, 0.69141, 0, 0, 0.38946],
          "108": [0, 0.69141, 0, 0, 0.27953],
          "109": [0, 0.47534, 0, 0, 0.76676],
          "110": [0, 0.47534, 0, 0, 0.52666],
          "111": [0, 0.47534, 0, 0, 0.48885],
          "112": [0.18906, 0.52396, 0, 0, 0.50046],
          "113": [0.18906, 0.47534, 0, 0, 0.48912],
          "114": [0, 0.47534, 0, 0, 0.38919],
          "115": [0, 0.47534, 0, 0, 0.44266],
          "116": [0, 0.62119, 0, 0, 0.33301],
          "117": [0, 0.47534, 0, 0, 0.5172],
          "118": [0, 0.52396, 0, 0, 0.5118],
          "119": [0, 0.52396, 0, 0, 0.77351],
          "120": [0.18906, 0.47534, 0, 0, 0.38865],
          "121": [0.18906, 0.47534, 0, 0, 0.49884],
          "122": [0.18906, 0.47534, 0, 0, 0.39054],
          "160": [0, 0, 0, 0, 0.25],
          "8216": [0, 0.69141, 0, 0, 0.21471],
          "8217": [0, 0.69141, 0, 0, 0.21471],
          "58112": [0, 0.62119, 0, 0, 0.49749],
          "58113": [0, 0.62119, 0, 0, 0.4983],
          "58114": [0.18906, 0.69141, 0, 0, 0.33328],
          "58115": [0.18906, 0.69141, 0, 0, 0.32923],
          "58116": [0.18906, 0.47534, 0, 0, 0.50343],
          "58117": [0, 0.69141, 0, 0, 0.33301],
          "58118": [0, 0.62119, 0, 0, 0.33409],
          "58119": [0, 0.47534, 0, 0, 0.50073]
        },
        "Main-Bold": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0, 0, 0.35],
          "34": [0, 0.69444, 0, 0, 0.60278],
          "35": [0.19444, 0.69444, 0, 0, 0.95833],
          "36": [0.05556, 0.75, 0, 0, 0.575],
          "37": [0.05556, 0.75, 0, 0, 0.95833],
          "38": [0, 0.69444, 0, 0, 0.89444],
          "39": [0, 0.69444, 0, 0, 0.31944],
          "40": [0.25, 0.75, 0, 0, 0.44722],
          "41": [0.25, 0.75, 0, 0, 0.44722],
          "42": [0, 0.75, 0, 0, 0.575],
          "43": [0.13333, 0.63333, 0, 0, 0.89444],
          "44": [0.19444, 0.15556, 0, 0, 0.31944],
          "45": [0, 0.44444, 0, 0, 0.38333],
          "46": [0, 0.15556, 0, 0, 0.31944],
          "47": [0.25, 0.75, 0, 0, 0.575],
          "48": [0, 0.64444, 0, 0, 0.575],
          "49": [0, 0.64444, 0, 0, 0.575],
          "50": [0, 0.64444, 0, 0, 0.575],
          "51": [0, 0.64444, 0, 0, 0.575],
          "52": [0, 0.64444, 0, 0, 0.575],
          "53": [0, 0.64444, 0, 0, 0.575],
          "54": [0, 0.64444, 0, 0, 0.575],
          "55": [0, 0.64444, 0, 0, 0.575],
          "56": [0, 0.64444, 0, 0, 0.575],
          "57": [0, 0.64444, 0, 0, 0.575],
          "58": [0, 0.44444, 0, 0, 0.31944],
          "59": [0.19444, 0.44444, 0, 0, 0.31944],
          "60": [0.08556, 0.58556, 0, 0, 0.89444],
          "61": [-0.10889, 0.39111, 0, 0, 0.89444],
          "62": [0.08556, 0.58556, 0, 0, 0.89444],
          "63": [0, 0.69444, 0, 0, 0.54305],
          "64": [0, 0.69444, 0, 0, 0.89444],
          "65": [0, 0.68611, 0, 0, 0.86944],
          "66": [0, 0.68611, 0, 0, 0.81805],
          "67": [0, 0.68611, 0, 0, 0.83055],
          "68": [0, 0.68611, 0, 0, 0.88194],
          "69": [0, 0.68611, 0, 0, 0.75555],
          "70": [0, 0.68611, 0, 0, 0.72361],
          "71": [0, 0.68611, 0, 0, 0.90416],
          "72": [0, 0.68611, 0, 0, 0.9],
          "73": [0, 0.68611, 0, 0, 0.43611],
          "74": [0, 0.68611, 0, 0, 0.59444],
          "75": [0, 0.68611, 0, 0, 0.90138],
          "76": [0, 0.68611, 0, 0, 0.69166],
          "77": [0, 0.68611, 0, 0, 1.09166],
          "78": [0, 0.68611, 0, 0, 0.9],
          "79": [0, 0.68611, 0, 0, 0.86388],
          "80": [0, 0.68611, 0, 0, 0.78611],
          "81": [0.19444, 0.68611, 0, 0, 0.86388],
          "82": [0, 0.68611, 0, 0, 0.8625],
          "83": [0, 0.68611, 0, 0, 0.63889],
          "84": [0, 0.68611, 0, 0, 0.8],
          "85": [0, 0.68611, 0, 0, 0.88472],
          "86": [0, 0.68611, 0.01597, 0, 0.86944],
          "87": [0, 0.68611, 0.01597, 0, 1.18888],
          "88": [0, 0.68611, 0, 0, 0.86944],
          "89": [0, 0.68611, 0.02875, 0, 0.86944],
          "90": [0, 0.68611, 0, 0, 0.70277],
          "91": [0.25, 0.75, 0, 0, 0.31944],
          "92": [0.25, 0.75, 0, 0, 0.575],
          "93": [0.25, 0.75, 0, 0, 0.31944],
          "94": [0, 0.69444, 0, 0, 0.575],
          "95": [0.31, 0.13444, 0.03194, 0, 0.575],
          "97": [0, 0.44444, 0, 0, 0.55902],
          "98": [0, 0.69444, 0, 0, 0.63889],
          "99": [0, 0.44444, 0, 0, 0.51111],
          "100": [0, 0.69444, 0, 0, 0.63889],
          "101": [0, 0.44444, 0, 0, 0.52708],
          "102": [0, 0.69444, 0.10903, 0, 0.35139],
          "103": [0.19444, 0.44444, 0.01597, 0, 0.575],
          "104": [0, 0.69444, 0, 0, 0.63889],
          "105": [0, 0.69444, 0, 0, 0.31944],
          "106": [0.19444, 0.69444, 0, 0, 0.35139],
          "107": [0, 0.69444, 0, 0, 0.60694],
          "108": [0, 0.69444, 0, 0, 0.31944],
          "109": [0, 0.44444, 0, 0, 0.95833],
          "110": [0, 0.44444, 0, 0, 0.63889],
          "111": [0, 0.44444, 0, 0, 0.575],
          "112": [0.19444, 0.44444, 0, 0, 0.63889],
          "113": [0.19444, 0.44444, 0, 0, 0.60694],
          "114": [0, 0.44444, 0, 0, 0.47361],
          "115": [0, 0.44444, 0, 0, 0.45361],
          "116": [0, 0.63492, 0, 0, 0.44722],
          "117": [0, 0.44444, 0, 0, 0.63889],
          "118": [0, 0.44444, 0.01597, 0, 0.60694],
          "119": [0, 0.44444, 0.01597, 0, 0.83055],
          "120": [0, 0.44444, 0, 0, 0.60694],
          "121": [0.19444, 0.44444, 0.01597, 0, 0.60694],
          "122": [0, 0.44444, 0, 0, 0.51111],
          "123": [0.25, 0.75, 0, 0, 0.575],
          "124": [0.25, 0.75, 0, 0, 0.31944],
          "125": [0.25, 0.75, 0, 0, 0.575],
          "126": [0.35, 0.34444, 0, 0, 0.575],
          "160": [0, 0, 0, 0, 0.25],
          "163": [0, 0.69444, 0, 0, 0.86853],
          "168": [0, 0.69444, 0, 0, 0.575],
          "172": [0, 0.44444, 0, 0, 0.76666],
          "176": [0, 0.69444, 0, 0, 0.86944],
          "177": [0.13333, 0.63333, 0, 0, 0.89444],
          "184": [0.17014, 0, 0, 0, 0.51111],
          "198": [0, 0.68611, 0, 0, 1.04166],
          "215": [0.13333, 0.63333, 0, 0, 0.89444],
          "216": [0.04861, 0.73472, 0, 0, 0.89444],
          "223": [0, 0.69444, 0, 0, 0.59722],
          "230": [0, 0.44444, 0, 0, 0.83055],
          "247": [0.13333, 0.63333, 0, 0, 0.89444],
          "248": [0.09722, 0.54167, 0, 0, 0.575],
          "305": [0, 0.44444, 0, 0, 0.31944],
          "338": [0, 0.68611, 0, 0, 1.16944],
          "339": [0, 0.44444, 0, 0, 0.89444],
          "567": [0.19444, 0.44444, 0, 0, 0.35139],
          "710": [0, 0.69444, 0, 0, 0.575],
          "711": [0, 0.63194, 0, 0, 0.575],
          "713": [0, 0.59611, 0, 0, 0.575],
          "714": [0, 0.69444, 0, 0, 0.575],
          "715": [0, 0.69444, 0, 0, 0.575],
          "728": [0, 0.69444, 0, 0, 0.575],
          "729": [0, 0.69444, 0, 0, 0.31944],
          "730": [0, 0.69444, 0, 0, 0.86944],
          "732": [0, 0.69444, 0, 0, 0.575],
          "733": [0, 0.69444, 0, 0, 0.575],
          "915": [0, 0.68611, 0, 0, 0.69166],
          "916": [0, 0.68611, 0, 0, 0.95833],
          "920": [0, 0.68611, 0, 0, 0.89444],
          "923": [0, 0.68611, 0, 0, 0.80555],
          "926": [0, 0.68611, 0, 0, 0.76666],
          "928": [0, 0.68611, 0, 0, 0.9],
          "931": [0, 0.68611, 0, 0, 0.83055],
          "933": [0, 0.68611, 0, 0, 0.89444],
          "934": [0, 0.68611, 0, 0, 0.83055],
          "936": [0, 0.68611, 0, 0, 0.89444],
          "937": [0, 0.68611, 0, 0, 0.83055],
          "8211": [0, 0.44444, 0.03194, 0, 0.575],
          "8212": [0, 0.44444, 0.03194, 0, 1.14999],
          "8216": [0, 0.69444, 0, 0, 0.31944],
          "8217": [0, 0.69444, 0, 0, 0.31944],
          "8220": [0, 0.69444, 0, 0, 0.60278],
          "8221": [0, 0.69444, 0, 0, 0.60278],
          "8224": [0.19444, 0.69444, 0, 0, 0.51111],
          "8225": [0.19444, 0.69444, 0, 0, 0.51111],
          "8242": [0, 0.55556, 0, 0, 0.34444],
          "8407": [0, 0.72444, 0.15486, 0, 0.575],
          "8463": [0, 0.69444, 0, 0, 0.66759],
          "8465": [0, 0.69444, 0, 0, 0.83055],
          "8467": [0, 0.69444, 0, 0, 0.47361],
          "8472": [0.19444, 0.44444, 0, 0, 0.74027],
          "8476": [0, 0.69444, 0, 0, 0.83055],
          "8501": [0, 0.69444, 0, 0, 0.70277],
          "8592": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8593": [0.19444, 0.69444, 0, 0, 0.575],
          "8594": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8595": [0.19444, 0.69444, 0, 0, 0.575],
          "8596": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8597": [0.25, 0.75, 0, 0, 0.575],
          "8598": [0.19444, 0.69444, 0, 0, 1.14999],
          "8599": [0.19444, 0.69444, 0, 0, 1.14999],
          "8600": [0.19444, 0.69444, 0, 0, 1.14999],
          "8601": [0.19444, 0.69444, 0, 0, 1.14999],
          "8636": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8637": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8640": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8641": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8656": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8657": [0.19444, 0.69444, 0, 0, 0.70277],
          "8658": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8659": [0.19444, 0.69444, 0, 0, 0.70277],
          "8660": [-0.10889, 0.39111, 0, 0, 1.14999],
          "8661": [0.25, 0.75, 0, 0, 0.70277],
          "8704": [0, 0.69444, 0, 0, 0.63889],
          "8706": [0, 0.69444, 0.06389, 0, 0.62847],
          "8707": [0, 0.69444, 0, 0, 0.63889],
          "8709": [0.05556, 0.75, 0, 0, 0.575],
          "8711": [0, 0.68611, 0, 0, 0.95833],
          "8712": [0.08556, 0.58556, 0, 0, 0.76666],
          "8715": [0.08556, 0.58556, 0, 0, 0.76666],
          "8722": [0.13333, 0.63333, 0, 0, 0.89444],
          "8723": [0.13333, 0.63333, 0, 0, 0.89444],
          "8725": [0.25, 0.75, 0, 0, 0.575],
          "8726": [0.25, 0.75, 0, 0, 0.575],
          "8727": [-0.02778, 0.47222, 0, 0, 0.575],
          "8728": [-0.02639, 0.47361, 0, 0, 0.575],
          "8729": [-0.02639, 0.47361, 0, 0, 0.575],
          "8730": [0.18, 0.82, 0, 0, 0.95833],
          "8733": [0, 0.44444, 0, 0, 0.89444],
          "8734": [0, 0.44444, 0, 0, 1.14999],
          "8736": [0, 0.69224, 0, 0, 0.72222],
          "8739": [0.25, 0.75, 0, 0, 0.31944],
          "8741": [0.25, 0.75, 0, 0, 0.575],
          "8743": [0, 0.55556, 0, 0, 0.76666],
          "8744": [0, 0.55556, 0, 0, 0.76666],
          "8745": [0, 0.55556, 0, 0, 0.76666],
          "8746": [0, 0.55556, 0, 0, 0.76666],
          "8747": [0.19444, 0.69444, 0.12778, 0, 0.56875],
          "8764": [-0.10889, 0.39111, 0, 0, 0.89444],
          "8768": [0.19444, 0.69444, 0, 0, 0.31944],
          "8771": [222e-5, 0.50222, 0, 0, 0.89444],
          "8776": [0.02444, 0.52444, 0, 0, 0.89444],
          "8781": [222e-5, 0.50222, 0, 0, 0.89444],
          "8801": [222e-5, 0.50222, 0, 0, 0.89444],
          "8804": [0.19667, 0.69667, 0, 0, 0.89444],
          "8805": [0.19667, 0.69667, 0, 0, 0.89444],
          "8810": [0.08556, 0.58556, 0, 0, 1.14999],
          "8811": [0.08556, 0.58556, 0, 0, 1.14999],
          "8826": [0.08556, 0.58556, 0, 0, 0.89444],
          "8827": [0.08556, 0.58556, 0, 0, 0.89444],
          "8834": [0.08556, 0.58556, 0, 0, 0.89444],
          "8835": [0.08556, 0.58556, 0, 0, 0.89444],
          "8838": [0.19667, 0.69667, 0, 0, 0.89444],
          "8839": [0.19667, 0.69667, 0, 0, 0.89444],
          "8846": [0, 0.55556, 0, 0, 0.76666],
          "8849": [0.19667, 0.69667, 0, 0, 0.89444],
          "8850": [0.19667, 0.69667, 0, 0, 0.89444],
          "8851": [0, 0.55556, 0, 0, 0.76666],
          "8852": [0, 0.55556, 0, 0, 0.76666],
          "8853": [0.13333, 0.63333, 0, 0, 0.89444],
          "8854": [0.13333, 0.63333, 0, 0, 0.89444],
          "8855": [0.13333, 0.63333, 0, 0, 0.89444],
          "8856": [0.13333, 0.63333, 0, 0, 0.89444],
          "8857": [0.13333, 0.63333, 0, 0, 0.89444],
          "8866": [0, 0.69444, 0, 0, 0.70277],
          "8867": [0, 0.69444, 0, 0, 0.70277],
          "8868": [0, 0.69444, 0, 0, 0.89444],
          "8869": [0, 0.69444, 0, 0, 0.89444],
          "8900": [-0.02639, 0.47361, 0, 0, 0.575],
          "8901": [-0.02639, 0.47361, 0, 0, 0.31944],
          "8902": [-0.02778, 0.47222, 0, 0, 0.575],
          "8968": [0.25, 0.75, 0, 0, 0.51111],
          "8969": [0.25, 0.75, 0, 0, 0.51111],
          "8970": [0.25, 0.75, 0, 0, 0.51111],
          "8971": [0.25, 0.75, 0, 0, 0.51111],
          "8994": [-0.13889, 0.36111, 0, 0, 1.14999],
          "8995": [-0.13889, 0.36111, 0, 0, 1.14999],
          "9651": [0.19444, 0.69444, 0, 0, 1.02222],
          "9657": [-0.02778, 0.47222, 0, 0, 0.575],
          "9661": [0.19444, 0.69444, 0, 0, 1.02222],
          "9667": [-0.02778, 0.47222, 0, 0, 0.575],
          "9711": [0.19444, 0.69444, 0, 0, 1.14999],
          "9824": [0.12963, 0.69444, 0, 0, 0.89444],
          "9825": [0.12963, 0.69444, 0, 0, 0.89444],
          "9826": [0.12963, 0.69444, 0, 0, 0.89444],
          "9827": [0.12963, 0.69444, 0, 0, 0.89444],
          "9837": [0, 0.75, 0, 0, 0.44722],
          "9838": [0.19444, 0.69444, 0, 0, 0.44722],
          "9839": [0.19444, 0.69444, 0, 0, 0.44722],
          "10216": [0.25, 0.75, 0, 0, 0.44722],
          "10217": [0.25, 0.75, 0, 0, 0.44722],
          "10815": [0, 0.68611, 0, 0, 0.9],
          "10927": [0.19667, 0.69667, 0, 0, 0.89444],
          "10928": [0.19667, 0.69667, 0, 0, 0.89444],
          "57376": [0.19444, 0.69444, 0, 0, 0]
        },
        "Main-BoldItalic": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0.11417, 0, 0.38611],
          "34": [0, 0.69444, 0.07939, 0, 0.62055],
          "35": [0.19444, 0.69444, 0.06833, 0, 0.94444],
          "37": [0.05556, 0.75, 0.12861, 0, 0.94444],
          "38": [0, 0.69444, 0.08528, 0, 0.88555],
          "39": [0, 0.69444, 0.12945, 0, 0.35555],
          "40": [0.25, 0.75, 0.15806, 0, 0.47333],
          "41": [0.25, 0.75, 0.03306, 0, 0.47333],
          "42": [0, 0.75, 0.14333, 0, 0.59111],
          "43": [0.10333, 0.60333, 0.03306, 0, 0.88555],
          "44": [0.19444, 0.14722, 0, 0, 0.35555],
          "45": [0, 0.44444, 0.02611, 0, 0.41444],
          "46": [0, 0.14722, 0, 0, 0.35555],
          "47": [0.25, 0.75, 0.15806, 0, 0.59111],
          "48": [0, 0.64444, 0.13167, 0, 0.59111],
          "49": [0, 0.64444, 0.13167, 0, 0.59111],
          "50": [0, 0.64444, 0.13167, 0, 0.59111],
          "51": [0, 0.64444, 0.13167, 0, 0.59111],
          "52": [0.19444, 0.64444, 0.13167, 0, 0.59111],
          "53": [0, 0.64444, 0.13167, 0, 0.59111],
          "54": [0, 0.64444, 0.13167, 0, 0.59111],
          "55": [0.19444, 0.64444, 0.13167, 0, 0.59111],
          "56": [0, 0.64444, 0.13167, 0, 0.59111],
          "57": [0, 0.64444, 0.13167, 0, 0.59111],
          "58": [0, 0.44444, 0.06695, 0, 0.35555],
          "59": [0.19444, 0.44444, 0.06695, 0, 0.35555],
          "61": [-0.10889, 0.39111, 0.06833, 0, 0.88555],
          "63": [0, 0.69444, 0.11472, 0, 0.59111],
          "64": [0, 0.69444, 0.09208, 0, 0.88555],
          "65": [0, 0.68611, 0, 0, 0.86555],
          "66": [0, 0.68611, 0.0992, 0, 0.81666],
          "67": [0, 0.68611, 0.14208, 0, 0.82666],
          "68": [0, 0.68611, 0.09062, 0, 0.87555],
          "69": [0, 0.68611, 0.11431, 0, 0.75666],
          "70": [0, 0.68611, 0.12903, 0, 0.72722],
          "71": [0, 0.68611, 0.07347, 0, 0.89527],
          "72": [0, 0.68611, 0.17208, 0, 0.8961],
          "73": [0, 0.68611, 0.15681, 0, 0.47166],
          "74": [0, 0.68611, 0.145, 0, 0.61055],
          "75": [0, 0.68611, 0.14208, 0, 0.89499],
          "76": [0, 0.68611, 0, 0, 0.69777],
          "77": [0, 0.68611, 0.17208, 0, 1.07277],
          "78": [0, 0.68611, 0.17208, 0, 0.8961],
          "79": [0, 0.68611, 0.09062, 0, 0.85499],
          "80": [0, 0.68611, 0.0992, 0, 0.78721],
          "81": [0.19444, 0.68611, 0.09062, 0, 0.85499],
          "82": [0, 0.68611, 0.02559, 0, 0.85944],
          "83": [0, 0.68611, 0.11264, 0, 0.64999],
          "84": [0, 0.68611, 0.12903, 0, 0.7961],
          "85": [0, 0.68611, 0.17208, 0, 0.88083],
          "86": [0, 0.68611, 0.18625, 0, 0.86555],
          "87": [0, 0.68611, 0.18625, 0, 1.15999],
          "88": [0, 0.68611, 0.15681, 0, 0.86555],
          "89": [0, 0.68611, 0.19803, 0, 0.86555],
          "90": [0, 0.68611, 0.14208, 0, 0.70888],
          "91": [0.25, 0.75, 0.1875, 0, 0.35611],
          "93": [0.25, 0.75, 0.09972, 0, 0.35611],
          "94": [0, 0.69444, 0.06709, 0, 0.59111],
          "95": [0.31, 0.13444, 0.09811, 0, 0.59111],
          "97": [0, 0.44444, 0.09426, 0, 0.59111],
          "98": [0, 0.69444, 0.07861, 0, 0.53222],
          "99": [0, 0.44444, 0.05222, 0, 0.53222],
          "100": [0, 0.69444, 0.10861, 0, 0.59111],
          "101": [0, 0.44444, 0.085, 0, 0.53222],
          "102": [0.19444, 0.69444, 0.21778, 0, 0.4],
          "103": [0.19444, 0.44444, 0.105, 0, 0.53222],
          "104": [0, 0.69444, 0.09426, 0, 0.59111],
          "105": [0, 0.69326, 0.11387, 0, 0.35555],
          "106": [0.19444, 0.69326, 0.1672, 0, 0.35555],
          "107": [0, 0.69444, 0.11111, 0, 0.53222],
          "108": [0, 0.69444, 0.10861, 0, 0.29666],
          "109": [0, 0.44444, 0.09426, 0, 0.94444],
          "110": [0, 0.44444, 0.09426, 0, 0.64999],
          "111": [0, 0.44444, 0.07861, 0, 0.59111],
          "112": [0.19444, 0.44444, 0.07861, 0, 0.59111],
          "113": [0.19444, 0.44444, 0.105, 0, 0.53222],
          "114": [0, 0.44444, 0.11111, 0, 0.50167],
          "115": [0, 0.44444, 0.08167, 0, 0.48694],
          "116": [0, 0.63492, 0.09639, 0, 0.385],
          "117": [0, 0.44444, 0.09426, 0, 0.62055],
          "118": [0, 0.44444, 0.11111, 0, 0.53222],
          "119": [0, 0.44444, 0.11111, 0, 0.76777],
          "120": [0, 0.44444, 0.12583, 0, 0.56055],
          "121": [0.19444, 0.44444, 0.105, 0, 0.56166],
          "122": [0, 0.44444, 0.13889, 0, 0.49055],
          "126": [0.35, 0.34444, 0.11472, 0, 0.59111],
          "160": [0, 0, 0, 0, 0.25],
          "168": [0, 0.69444, 0.11473, 0, 0.59111],
          "176": [0, 0.69444, 0, 0, 0.94888],
          "184": [0.17014, 0, 0, 0, 0.53222],
          "198": [0, 0.68611, 0.11431, 0, 1.02277],
          "216": [0.04861, 0.73472, 0.09062, 0, 0.88555],
          "223": [0.19444, 0.69444, 0.09736, 0, 0.665],
          "230": [0, 0.44444, 0.085, 0, 0.82666],
          "248": [0.09722, 0.54167, 0.09458, 0, 0.59111],
          "305": [0, 0.44444, 0.09426, 0, 0.35555],
          "338": [0, 0.68611, 0.11431, 0, 1.14054],
          "339": [0, 0.44444, 0.085, 0, 0.82666],
          "567": [0.19444, 0.44444, 0.04611, 0, 0.385],
          "710": [0, 0.69444, 0.06709, 0, 0.59111],
          "711": [0, 0.63194, 0.08271, 0, 0.59111],
          "713": [0, 0.59444, 0.10444, 0, 0.59111],
          "714": [0, 0.69444, 0.08528, 0, 0.59111],
          "715": [0, 0.69444, 0, 0, 0.59111],
          "728": [0, 0.69444, 0.10333, 0, 0.59111],
          "729": [0, 0.69444, 0.12945, 0, 0.35555],
          "730": [0, 0.69444, 0, 0, 0.94888],
          "732": [0, 0.69444, 0.11472, 0, 0.59111],
          "733": [0, 0.69444, 0.11472, 0, 0.59111],
          "915": [0, 0.68611, 0.12903, 0, 0.69777],
          "916": [0, 0.68611, 0, 0, 0.94444],
          "920": [0, 0.68611, 0.09062, 0, 0.88555],
          "923": [0, 0.68611, 0, 0, 0.80666],
          "926": [0, 0.68611, 0.15092, 0, 0.76777],
          "928": [0, 0.68611, 0.17208, 0, 0.8961],
          "931": [0, 0.68611, 0.11431, 0, 0.82666],
          "933": [0, 0.68611, 0.10778, 0, 0.88555],
          "934": [0, 0.68611, 0.05632, 0, 0.82666],
          "936": [0, 0.68611, 0.10778, 0, 0.88555],
          "937": [0, 0.68611, 0.0992, 0, 0.82666],
          "8211": [0, 0.44444, 0.09811, 0, 0.59111],
          "8212": [0, 0.44444, 0.09811, 0, 1.18221],
          "8216": [0, 0.69444, 0.12945, 0, 0.35555],
          "8217": [0, 0.69444, 0.12945, 0, 0.35555],
          "8220": [0, 0.69444, 0.16772, 0, 0.62055],
          "8221": [0, 0.69444, 0.07939, 0, 0.62055]
        },
        "Main-Italic": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0.12417, 0, 0.30667],
          "34": [0, 0.69444, 0.06961, 0, 0.51444],
          "35": [0.19444, 0.69444, 0.06616, 0, 0.81777],
          "37": [0.05556, 0.75, 0.13639, 0, 0.81777],
          "38": [0, 0.69444, 0.09694, 0, 0.76666],
          "39": [0, 0.69444, 0.12417, 0, 0.30667],
          "40": [0.25, 0.75, 0.16194, 0, 0.40889],
          "41": [0.25, 0.75, 0.03694, 0, 0.40889],
          "42": [0, 0.75, 0.14917, 0, 0.51111],
          "43": [0.05667, 0.56167, 0.03694, 0, 0.76666],
          "44": [0.19444, 0.10556, 0, 0, 0.30667],
          "45": [0, 0.43056, 0.02826, 0, 0.35778],
          "46": [0, 0.10556, 0, 0, 0.30667],
          "47": [0.25, 0.75, 0.16194, 0, 0.51111],
          "48": [0, 0.64444, 0.13556, 0, 0.51111],
          "49": [0, 0.64444, 0.13556, 0, 0.51111],
          "50": [0, 0.64444, 0.13556, 0, 0.51111],
          "51": [0, 0.64444, 0.13556, 0, 0.51111],
          "52": [0.19444, 0.64444, 0.13556, 0, 0.51111],
          "53": [0, 0.64444, 0.13556, 0, 0.51111],
          "54": [0, 0.64444, 0.13556, 0, 0.51111],
          "55": [0.19444, 0.64444, 0.13556, 0, 0.51111],
          "56": [0, 0.64444, 0.13556, 0, 0.51111],
          "57": [0, 0.64444, 0.13556, 0, 0.51111],
          "58": [0, 0.43056, 0.0582, 0, 0.30667],
          "59": [0.19444, 0.43056, 0.0582, 0, 0.30667],
          "61": [-0.13313, 0.36687, 0.06616, 0, 0.76666],
          "63": [0, 0.69444, 0.1225, 0, 0.51111],
          "64": [0, 0.69444, 0.09597, 0, 0.76666],
          "65": [0, 0.68333, 0, 0, 0.74333],
          "66": [0, 0.68333, 0.10257, 0, 0.70389],
          "67": [0, 0.68333, 0.14528, 0, 0.71555],
          "68": [0, 0.68333, 0.09403, 0, 0.755],
          "69": [0, 0.68333, 0.12028, 0, 0.67833],
          "70": [0, 0.68333, 0.13305, 0, 0.65277],
          "71": [0, 0.68333, 0.08722, 0, 0.77361],
          "72": [0, 0.68333, 0.16389, 0, 0.74333],
          "73": [0, 0.68333, 0.15806, 0, 0.38555],
          "74": [0, 0.68333, 0.14028, 0, 0.525],
          "75": [0, 0.68333, 0.14528, 0, 0.76888],
          "76": [0, 0.68333, 0, 0, 0.62722],
          "77": [0, 0.68333, 0.16389, 0, 0.89666],
          "78": [0, 0.68333, 0.16389, 0, 0.74333],
          "79": [0, 0.68333, 0.09403, 0, 0.76666],
          "80": [0, 0.68333, 0.10257, 0, 0.67833],
          "81": [0.19444, 0.68333, 0.09403, 0, 0.76666],
          "82": [0, 0.68333, 0.03868, 0, 0.72944],
          "83": [0, 0.68333, 0.11972, 0, 0.56222],
          "84": [0, 0.68333, 0.13305, 0, 0.71555],
          "85": [0, 0.68333, 0.16389, 0, 0.74333],
          "86": [0, 0.68333, 0.18361, 0, 0.74333],
          "87": [0, 0.68333, 0.18361, 0, 0.99888],
          "88": [0, 0.68333, 0.15806, 0, 0.74333],
          "89": [0, 0.68333, 0.19383, 0, 0.74333],
          "90": [0, 0.68333, 0.14528, 0, 0.61333],
          "91": [0.25, 0.75, 0.1875, 0, 0.30667],
          "93": [0.25, 0.75, 0.10528, 0, 0.30667],
          "94": [0, 0.69444, 0.06646, 0, 0.51111],
          "95": [0.31, 0.12056, 0.09208, 0, 0.51111],
          "97": [0, 0.43056, 0.07671, 0, 0.51111],
          "98": [0, 0.69444, 0.06312, 0, 0.46],
          "99": [0, 0.43056, 0.05653, 0, 0.46],
          "100": [0, 0.69444, 0.10333, 0, 0.51111],
          "101": [0, 0.43056, 0.07514, 0, 0.46],
          "102": [0.19444, 0.69444, 0.21194, 0, 0.30667],
          "103": [0.19444, 0.43056, 0.08847, 0, 0.46],
          "104": [0, 0.69444, 0.07671, 0, 0.51111],
          "105": [0, 0.65536, 0.1019, 0, 0.30667],
          "106": [0.19444, 0.65536, 0.14467, 0, 0.30667],
          "107": [0, 0.69444, 0.10764, 0, 0.46],
          "108": [0, 0.69444, 0.10333, 0, 0.25555],
          "109": [0, 0.43056, 0.07671, 0, 0.81777],
          "110": [0, 0.43056, 0.07671, 0, 0.56222],
          "111": [0, 0.43056, 0.06312, 0, 0.51111],
          "112": [0.19444, 0.43056, 0.06312, 0, 0.51111],
          "113": [0.19444, 0.43056, 0.08847, 0, 0.46],
          "114": [0, 0.43056, 0.10764, 0, 0.42166],
          "115": [0, 0.43056, 0.08208, 0, 0.40889],
          "116": [0, 0.61508, 0.09486, 0, 0.33222],
          "117": [0, 0.43056, 0.07671, 0, 0.53666],
          "118": [0, 0.43056, 0.10764, 0, 0.46],
          "119": [0, 0.43056, 0.10764, 0, 0.66444],
          "120": [0, 0.43056, 0.12042, 0, 0.46389],
          "121": [0.19444, 0.43056, 0.08847, 0, 0.48555],
          "122": [0, 0.43056, 0.12292, 0, 0.40889],
          "126": [0.35, 0.31786, 0.11585, 0, 0.51111],
          "160": [0, 0, 0, 0, 0.25],
          "168": [0, 0.66786, 0.10474, 0, 0.51111],
          "176": [0, 0.69444, 0, 0, 0.83129],
          "184": [0.17014, 0, 0, 0, 0.46],
          "198": [0, 0.68333, 0.12028, 0, 0.88277],
          "216": [0.04861, 0.73194, 0.09403, 0, 0.76666],
          "223": [0.19444, 0.69444, 0.10514, 0, 0.53666],
          "230": [0, 0.43056, 0.07514, 0, 0.71555],
          "248": [0.09722, 0.52778, 0.09194, 0, 0.51111],
          "338": [0, 0.68333, 0.12028, 0, 0.98499],
          "339": [0, 0.43056, 0.07514, 0, 0.71555],
          "710": [0, 0.69444, 0.06646, 0, 0.51111],
          "711": [0, 0.62847, 0.08295, 0, 0.51111],
          "713": [0, 0.56167, 0.10333, 0, 0.51111],
          "714": [0, 0.69444, 0.09694, 0, 0.51111],
          "715": [0, 0.69444, 0, 0, 0.51111],
          "728": [0, 0.69444, 0.10806, 0, 0.51111],
          "729": [0, 0.66786, 0.11752, 0, 0.30667],
          "730": [0, 0.69444, 0, 0, 0.83129],
          "732": [0, 0.66786, 0.11585, 0, 0.51111],
          "733": [0, 0.69444, 0.1225, 0, 0.51111],
          "915": [0, 0.68333, 0.13305, 0, 0.62722],
          "916": [0, 0.68333, 0, 0, 0.81777],
          "920": [0, 0.68333, 0.09403, 0, 0.76666],
          "923": [0, 0.68333, 0, 0, 0.69222],
          "926": [0, 0.68333, 0.15294, 0, 0.66444],
          "928": [0, 0.68333, 0.16389, 0, 0.74333],
          "931": [0, 0.68333, 0.12028, 0, 0.71555],
          "933": [0, 0.68333, 0.11111, 0, 0.76666],
          "934": [0, 0.68333, 0.05986, 0, 0.71555],
          "936": [0, 0.68333, 0.11111, 0, 0.76666],
          "937": [0, 0.68333, 0.10257, 0, 0.71555],
          "8211": [0, 0.43056, 0.09208, 0, 0.51111],
          "8212": [0, 0.43056, 0.09208, 0, 1.02222],
          "8216": [0, 0.69444, 0.12417, 0, 0.30667],
          "8217": [0, 0.69444, 0.12417, 0, 0.30667],
          "8220": [0, 0.69444, 0.1685, 0, 0.51444],
          "8221": [0, 0.69444, 0.06961, 0, 0.51444],
          "8463": [0, 0.68889, 0, 0, 0.54028]
        },
        "Main-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0, 0, 0.27778],
          "34": [0, 0.69444, 0, 0, 0.5],
          "35": [0.19444, 0.69444, 0, 0, 0.83334],
          "36": [0.05556, 0.75, 0, 0, 0.5],
          "37": [0.05556, 0.75, 0, 0, 0.83334],
          "38": [0, 0.69444, 0, 0, 0.77778],
          "39": [0, 0.69444, 0, 0, 0.27778],
          "40": [0.25, 0.75, 0, 0, 0.38889],
          "41": [0.25, 0.75, 0, 0, 0.38889],
          "42": [0, 0.75, 0, 0, 0.5],
          "43": [0.08333, 0.58333, 0, 0, 0.77778],
          "44": [0.19444, 0.10556, 0, 0, 0.27778],
          "45": [0, 0.43056, 0, 0, 0.33333],
          "46": [0, 0.10556, 0, 0, 0.27778],
          "47": [0.25, 0.75, 0, 0, 0.5],
          "48": [0, 0.64444, 0, 0, 0.5],
          "49": [0, 0.64444, 0, 0, 0.5],
          "50": [0, 0.64444, 0, 0, 0.5],
          "51": [0, 0.64444, 0, 0, 0.5],
          "52": [0, 0.64444, 0, 0, 0.5],
          "53": [0, 0.64444, 0, 0, 0.5],
          "54": [0, 0.64444, 0, 0, 0.5],
          "55": [0, 0.64444, 0, 0, 0.5],
          "56": [0, 0.64444, 0, 0, 0.5],
          "57": [0, 0.64444, 0, 0, 0.5],
          "58": [0, 0.43056, 0, 0, 0.27778],
          "59": [0.19444, 0.43056, 0, 0, 0.27778],
          "60": [0.0391, 0.5391, 0, 0, 0.77778],
          "61": [-0.13313, 0.36687, 0, 0, 0.77778],
          "62": [0.0391, 0.5391, 0, 0, 0.77778],
          "63": [0, 0.69444, 0, 0, 0.47222],
          "64": [0, 0.69444, 0, 0, 0.77778],
          "65": [0, 0.68333, 0, 0, 0.75],
          "66": [0, 0.68333, 0, 0, 0.70834],
          "67": [0, 0.68333, 0, 0, 0.72222],
          "68": [0, 0.68333, 0, 0, 0.76389],
          "69": [0, 0.68333, 0, 0, 0.68056],
          "70": [0, 0.68333, 0, 0, 0.65278],
          "71": [0, 0.68333, 0, 0, 0.78472],
          "72": [0, 0.68333, 0, 0, 0.75],
          "73": [0, 0.68333, 0, 0, 0.36111],
          "74": [0, 0.68333, 0, 0, 0.51389],
          "75": [0, 0.68333, 0, 0, 0.77778],
          "76": [0, 0.68333, 0, 0, 0.625],
          "77": [0, 0.68333, 0, 0, 0.91667],
          "78": [0, 0.68333, 0, 0, 0.75],
          "79": [0, 0.68333, 0, 0, 0.77778],
          "80": [0, 0.68333, 0, 0, 0.68056],
          "81": [0.19444, 0.68333, 0, 0, 0.77778],
          "82": [0, 0.68333, 0, 0, 0.73611],
          "83": [0, 0.68333, 0, 0, 0.55556],
          "84": [0, 0.68333, 0, 0, 0.72222],
          "85": [0, 0.68333, 0, 0, 0.75],
          "86": [0, 0.68333, 0.01389, 0, 0.75],
          "87": [0, 0.68333, 0.01389, 0, 1.02778],
          "88": [0, 0.68333, 0, 0, 0.75],
          "89": [0, 0.68333, 0.025, 0, 0.75],
          "90": [0, 0.68333, 0, 0, 0.61111],
          "91": [0.25, 0.75, 0, 0, 0.27778],
          "92": [0.25, 0.75, 0, 0, 0.5],
          "93": [0.25, 0.75, 0, 0, 0.27778],
          "94": [0, 0.69444, 0, 0, 0.5],
          "95": [0.31, 0.12056, 0.02778, 0, 0.5],
          "97": [0, 0.43056, 0, 0, 0.5],
          "98": [0, 0.69444, 0, 0, 0.55556],
          "99": [0, 0.43056, 0, 0, 0.44445],
          "100": [0, 0.69444, 0, 0, 0.55556],
          "101": [0, 0.43056, 0, 0, 0.44445],
          "102": [0, 0.69444, 0.07778, 0, 0.30556],
          "103": [0.19444, 0.43056, 0.01389, 0, 0.5],
          "104": [0, 0.69444, 0, 0, 0.55556],
          "105": [0, 0.66786, 0, 0, 0.27778],
          "106": [0.19444, 0.66786, 0, 0, 0.30556],
          "107": [0, 0.69444, 0, 0, 0.52778],
          "108": [0, 0.69444, 0, 0, 0.27778],
          "109": [0, 0.43056, 0, 0, 0.83334],
          "110": [0, 0.43056, 0, 0, 0.55556],
          "111": [0, 0.43056, 0, 0, 0.5],
          "112": [0.19444, 0.43056, 0, 0, 0.55556],
          "113": [0.19444, 0.43056, 0, 0, 0.52778],
          "114": [0, 0.43056, 0, 0, 0.39167],
          "115": [0, 0.43056, 0, 0, 0.39445],
          "116": [0, 0.61508, 0, 0, 0.38889],
          "117": [0, 0.43056, 0, 0, 0.55556],
          "118": [0, 0.43056, 0.01389, 0, 0.52778],
          "119": [0, 0.43056, 0.01389, 0, 0.72222],
          "120": [0, 0.43056, 0, 0, 0.52778],
          "121": [0.19444, 0.43056, 0.01389, 0, 0.52778],
          "122": [0, 0.43056, 0, 0, 0.44445],
          "123": [0.25, 0.75, 0, 0, 0.5],
          "124": [0.25, 0.75, 0, 0, 0.27778],
          "125": [0.25, 0.75, 0, 0, 0.5],
          "126": [0.35, 0.31786, 0, 0, 0.5],
          "160": [0, 0, 0, 0, 0.25],
          "163": [0, 0.69444, 0, 0, 0.76909],
          "167": [0.19444, 0.69444, 0, 0, 0.44445],
          "168": [0, 0.66786, 0, 0, 0.5],
          "172": [0, 0.43056, 0, 0, 0.66667],
          "176": [0, 0.69444, 0, 0, 0.75],
          "177": [0.08333, 0.58333, 0, 0, 0.77778],
          "182": [0.19444, 0.69444, 0, 0, 0.61111],
          "184": [0.17014, 0, 0, 0, 0.44445],
          "198": [0, 0.68333, 0, 0, 0.90278],
          "215": [0.08333, 0.58333, 0, 0, 0.77778],
          "216": [0.04861, 0.73194, 0, 0, 0.77778],
          "223": [0, 0.69444, 0, 0, 0.5],
          "230": [0, 0.43056, 0, 0, 0.72222],
          "247": [0.08333, 0.58333, 0, 0, 0.77778],
          "248": [0.09722, 0.52778, 0, 0, 0.5],
          "305": [0, 0.43056, 0, 0, 0.27778],
          "338": [0, 0.68333, 0, 0, 1.01389],
          "339": [0, 0.43056, 0, 0, 0.77778],
          "567": [0.19444, 0.43056, 0, 0, 0.30556],
          "710": [0, 0.69444, 0, 0, 0.5],
          "711": [0, 0.62847, 0, 0, 0.5],
          "713": [0, 0.56778, 0, 0, 0.5],
          "714": [0, 0.69444, 0, 0, 0.5],
          "715": [0, 0.69444, 0, 0, 0.5],
          "728": [0, 0.69444, 0, 0, 0.5],
          "729": [0, 0.66786, 0, 0, 0.27778],
          "730": [0, 0.69444, 0, 0, 0.75],
          "732": [0, 0.66786, 0, 0, 0.5],
          "733": [0, 0.69444, 0, 0, 0.5],
          "915": [0, 0.68333, 0, 0, 0.625],
          "916": [0, 0.68333, 0, 0, 0.83334],
          "920": [0, 0.68333, 0, 0, 0.77778],
          "923": [0, 0.68333, 0, 0, 0.69445],
          "926": [0, 0.68333, 0, 0, 0.66667],
          "928": [0, 0.68333, 0, 0, 0.75],
          "931": [0, 0.68333, 0, 0, 0.72222],
          "933": [0, 0.68333, 0, 0, 0.77778],
          "934": [0, 0.68333, 0, 0, 0.72222],
          "936": [0, 0.68333, 0, 0, 0.77778],
          "937": [0, 0.68333, 0, 0, 0.72222],
          "8211": [0, 0.43056, 0.02778, 0, 0.5],
          "8212": [0, 0.43056, 0.02778, 0, 1],
          "8216": [0, 0.69444, 0, 0, 0.27778],
          "8217": [0, 0.69444, 0, 0, 0.27778],
          "8220": [0, 0.69444, 0, 0, 0.5],
          "8221": [0, 0.69444, 0, 0, 0.5],
          "8224": [0.19444, 0.69444, 0, 0, 0.44445],
          "8225": [0.19444, 0.69444, 0, 0, 0.44445],
          "8230": [0, 0.12, 0, 0, 1.172],
          "8242": [0, 0.55556, 0, 0, 0.275],
          "8407": [0, 0.71444, 0.15382, 0, 0.5],
          "8463": [0, 0.68889, 0, 0, 0.54028],
          "8465": [0, 0.69444, 0, 0, 0.72222],
          "8467": [0, 0.69444, 0, 0.11111, 0.41667],
          "8472": [0.19444, 0.43056, 0, 0.11111, 0.63646],
          "8476": [0, 0.69444, 0, 0, 0.72222],
          "8501": [0, 0.69444, 0, 0, 0.61111],
          "8592": [-0.13313, 0.36687, 0, 0, 1],
          "8593": [0.19444, 0.69444, 0, 0, 0.5],
          "8594": [-0.13313, 0.36687, 0, 0, 1],
          "8595": [0.19444, 0.69444, 0, 0, 0.5],
          "8596": [-0.13313, 0.36687, 0, 0, 1],
          "8597": [0.25, 0.75, 0, 0, 0.5],
          "8598": [0.19444, 0.69444, 0, 0, 1],
          "8599": [0.19444, 0.69444, 0, 0, 1],
          "8600": [0.19444, 0.69444, 0, 0, 1],
          "8601": [0.19444, 0.69444, 0, 0, 1],
          "8614": [0.011, 0.511, 0, 0, 1],
          "8617": [0.011, 0.511, 0, 0, 1.126],
          "8618": [0.011, 0.511, 0, 0, 1.126],
          "8636": [-0.13313, 0.36687, 0, 0, 1],
          "8637": [-0.13313, 0.36687, 0, 0, 1],
          "8640": [-0.13313, 0.36687, 0, 0, 1],
          "8641": [-0.13313, 0.36687, 0, 0, 1],
          "8652": [0.011, 0.671, 0, 0, 1],
          "8656": [-0.13313, 0.36687, 0, 0, 1],
          "8657": [0.19444, 0.69444, 0, 0, 0.61111],
          "8658": [-0.13313, 0.36687, 0, 0, 1],
          "8659": [0.19444, 0.69444, 0, 0, 0.61111],
          "8660": [-0.13313, 0.36687, 0, 0, 1],
          "8661": [0.25, 0.75, 0, 0, 0.61111],
          "8704": [0, 0.69444, 0, 0, 0.55556],
          "8706": [0, 0.69444, 0.05556, 0.08334, 0.5309],
          "8707": [0, 0.69444, 0, 0, 0.55556],
          "8709": [0.05556, 0.75, 0, 0, 0.5],
          "8711": [0, 0.68333, 0, 0, 0.83334],
          "8712": [0.0391, 0.5391, 0, 0, 0.66667],
          "8715": [0.0391, 0.5391, 0, 0, 0.66667],
          "8722": [0.08333, 0.58333, 0, 0, 0.77778],
          "8723": [0.08333, 0.58333, 0, 0, 0.77778],
          "8725": [0.25, 0.75, 0, 0, 0.5],
          "8726": [0.25, 0.75, 0, 0, 0.5],
          "8727": [-0.03472, 0.46528, 0, 0, 0.5],
          "8728": [-0.05555, 0.44445, 0, 0, 0.5],
          "8729": [-0.05555, 0.44445, 0, 0, 0.5],
          "8730": [0.2, 0.8, 0, 0, 0.83334],
          "8733": [0, 0.43056, 0, 0, 0.77778],
          "8734": [0, 0.43056, 0, 0, 1],
          "8736": [0, 0.69224, 0, 0, 0.72222],
          "8739": [0.25, 0.75, 0, 0, 0.27778],
          "8741": [0.25, 0.75, 0, 0, 0.5],
          "8743": [0, 0.55556, 0, 0, 0.66667],
          "8744": [0, 0.55556, 0, 0, 0.66667],
          "8745": [0, 0.55556, 0, 0, 0.66667],
          "8746": [0, 0.55556, 0, 0, 0.66667],
          "8747": [0.19444, 0.69444, 0.11111, 0, 0.41667],
          "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
          "8768": [0.19444, 0.69444, 0, 0, 0.27778],
          "8771": [-0.03625, 0.46375, 0, 0, 0.77778],
          "8773": [-0.022, 0.589, 0, 0, 1],
          "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
          "8781": [-0.03625, 0.46375, 0, 0, 0.77778],
          "8784": [-0.133, 0.67, 0, 0, 0.778],
          "8801": [-0.03625, 0.46375, 0, 0, 0.77778],
          "8804": [0.13597, 0.63597, 0, 0, 0.77778],
          "8805": [0.13597, 0.63597, 0, 0, 0.77778],
          "8810": [0.0391, 0.5391, 0, 0, 1],
          "8811": [0.0391, 0.5391, 0, 0, 1],
          "8826": [0.0391, 0.5391, 0, 0, 0.77778],
          "8827": [0.0391, 0.5391, 0, 0, 0.77778],
          "8834": [0.0391, 0.5391, 0, 0, 0.77778],
          "8835": [0.0391, 0.5391, 0, 0, 0.77778],
          "8838": [0.13597, 0.63597, 0, 0, 0.77778],
          "8839": [0.13597, 0.63597, 0, 0, 0.77778],
          "8846": [0, 0.55556, 0, 0, 0.66667],
          "8849": [0.13597, 0.63597, 0, 0, 0.77778],
          "8850": [0.13597, 0.63597, 0, 0, 0.77778],
          "8851": [0, 0.55556, 0, 0, 0.66667],
          "8852": [0, 0.55556, 0, 0, 0.66667],
          "8853": [0.08333, 0.58333, 0, 0, 0.77778],
          "8854": [0.08333, 0.58333, 0, 0, 0.77778],
          "8855": [0.08333, 0.58333, 0, 0, 0.77778],
          "8856": [0.08333, 0.58333, 0, 0, 0.77778],
          "8857": [0.08333, 0.58333, 0, 0, 0.77778],
          "8866": [0, 0.69444, 0, 0, 0.61111],
          "8867": [0, 0.69444, 0, 0, 0.61111],
          "8868": [0, 0.69444, 0, 0, 0.77778],
          "8869": [0, 0.69444, 0, 0, 0.77778],
          "8872": [0.249, 0.75, 0, 0, 0.867],
          "8900": [-0.05555, 0.44445, 0, 0, 0.5],
          "8901": [-0.05555, 0.44445, 0, 0, 0.27778],
          "8902": [-0.03472, 0.46528, 0, 0, 0.5],
          "8904": [5e-3, 0.505, 0, 0, 0.9],
          "8942": [0.03, 0.9, 0, 0, 0.278],
          "8943": [-0.19, 0.31, 0, 0, 1.172],
          "8945": [-0.1, 0.82, 0, 0, 1.282],
          "8968": [0.25, 0.75, 0, 0, 0.44445],
          "8969": [0.25, 0.75, 0, 0, 0.44445],
          "8970": [0.25, 0.75, 0, 0, 0.44445],
          "8971": [0.25, 0.75, 0, 0, 0.44445],
          "8994": [-0.14236, 0.35764, 0, 0, 1],
          "8995": [-0.14236, 0.35764, 0, 0, 1],
          "9136": [0.244, 0.744, 0, 0, 0.412],
          "9137": [0.244, 0.744, 0, 0, 0.412],
          "9651": [0.19444, 0.69444, 0, 0, 0.88889],
          "9657": [-0.03472, 0.46528, 0, 0, 0.5],
          "9661": [0.19444, 0.69444, 0, 0, 0.88889],
          "9667": [-0.03472, 0.46528, 0, 0, 0.5],
          "9711": [0.19444, 0.69444, 0, 0, 1],
          "9824": [0.12963, 0.69444, 0, 0, 0.77778],
          "9825": [0.12963, 0.69444, 0, 0, 0.77778],
          "9826": [0.12963, 0.69444, 0, 0, 0.77778],
          "9827": [0.12963, 0.69444, 0, 0, 0.77778],
          "9837": [0, 0.75, 0, 0, 0.38889],
          "9838": [0.19444, 0.69444, 0, 0, 0.38889],
          "9839": [0.19444, 0.69444, 0, 0, 0.38889],
          "10216": [0.25, 0.75, 0, 0, 0.38889],
          "10217": [0.25, 0.75, 0, 0, 0.38889],
          "10222": [0.244, 0.744, 0, 0, 0.412],
          "10223": [0.244, 0.744, 0, 0, 0.412],
          "10229": [0.011, 0.511, 0, 0, 1.609],
          "10230": [0.011, 0.511, 0, 0, 1.638],
          "10231": [0.011, 0.511, 0, 0, 1.859],
          "10232": [0.024, 0.525, 0, 0, 1.609],
          "10233": [0.024, 0.525, 0, 0, 1.638],
          "10234": [0.024, 0.525, 0, 0, 1.858],
          "10236": [0.011, 0.511, 0, 0, 1.638],
          "10815": [0, 0.68333, 0, 0, 0.75],
          "10927": [0.13597, 0.63597, 0, 0, 0.77778],
          "10928": [0.13597, 0.63597, 0, 0, 0.77778],
          "57376": [0.19444, 0.69444, 0, 0, 0]
        },
        "Math-BoldItalic": {
          "32": [0, 0, 0, 0, 0.25],
          "48": [0, 0.44444, 0, 0, 0.575],
          "49": [0, 0.44444, 0, 0, 0.575],
          "50": [0, 0.44444, 0, 0, 0.575],
          "51": [0.19444, 0.44444, 0, 0, 0.575],
          "52": [0.19444, 0.44444, 0, 0, 0.575],
          "53": [0.19444, 0.44444, 0, 0, 0.575],
          "54": [0, 0.64444, 0, 0, 0.575],
          "55": [0.19444, 0.44444, 0, 0, 0.575],
          "56": [0, 0.64444, 0, 0, 0.575],
          "57": [0.19444, 0.44444, 0, 0, 0.575],
          "65": [0, 0.68611, 0, 0, 0.86944],
          "66": [0, 0.68611, 0.04835, 0, 0.8664],
          "67": [0, 0.68611, 0.06979, 0, 0.81694],
          "68": [0, 0.68611, 0.03194, 0, 0.93812],
          "69": [0, 0.68611, 0.05451, 0, 0.81007],
          "70": [0, 0.68611, 0.15972, 0, 0.68889],
          "71": [0, 0.68611, 0, 0, 0.88673],
          "72": [0, 0.68611, 0.08229, 0, 0.98229],
          "73": [0, 0.68611, 0.07778, 0, 0.51111],
          "74": [0, 0.68611, 0.10069, 0, 0.63125],
          "75": [0, 0.68611, 0.06979, 0, 0.97118],
          "76": [0, 0.68611, 0, 0, 0.75555],
          "77": [0, 0.68611, 0.11424, 0, 1.14201],
          "78": [0, 0.68611, 0.11424, 0, 0.95034],
          "79": [0, 0.68611, 0.03194, 0, 0.83666],
          "80": [0, 0.68611, 0.15972, 0, 0.72309],
          "81": [0.19444, 0.68611, 0, 0, 0.86861],
          "82": [0, 0.68611, 421e-5, 0, 0.87235],
          "83": [0, 0.68611, 0.05382, 0, 0.69271],
          "84": [0, 0.68611, 0.15972, 0, 0.63663],
          "85": [0, 0.68611, 0.11424, 0, 0.80027],
          "86": [0, 0.68611, 0.25555, 0, 0.67778],
          "87": [0, 0.68611, 0.15972, 0, 1.09305],
          "88": [0, 0.68611, 0.07778, 0, 0.94722],
          "89": [0, 0.68611, 0.25555, 0, 0.67458],
          "90": [0, 0.68611, 0.06979, 0, 0.77257],
          "97": [0, 0.44444, 0, 0, 0.63287],
          "98": [0, 0.69444, 0, 0, 0.52083],
          "99": [0, 0.44444, 0, 0, 0.51342],
          "100": [0, 0.69444, 0, 0, 0.60972],
          "101": [0, 0.44444, 0, 0, 0.55361],
          "102": [0.19444, 0.69444, 0.11042, 0, 0.56806],
          "103": [0.19444, 0.44444, 0.03704, 0, 0.5449],
          "104": [0, 0.69444, 0, 0, 0.66759],
          "105": [0, 0.69326, 0, 0, 0.4048],
          "106": [0.19444, 0.69326, 0.0622, 0, 0.47083],
          "107": [0, 0.69444, 0.01852, 0, 0.6037],
          "108": [0, 0.69444, 88e-4, 0, 0.34815],
          "109": [0, 0.44444, 0, 0, 1.0324],
          "110": [0, 0.44444, 0, 0, 0.71296],
          "111": [0, 0.44444, 0, 0, 0.58472],
          "112": [0.19444, 0.44444, 0, 0, 0.60092],
          "113": [0.19444, 0.44444, 0.03704, 0, 0.54213],
          "114": [0, 0.44444, 0.03194, 0, 0.5287],
          "115": [0, 0.44444, 0, 0, 0.53125],
          "116": [0, 0.63492, 0, 0, 0.41528],
          "117": [0, 0.44444, 0, 0, 0.68102],
          "118": [0, 0.44444, 0.03704, 0, 0.56666],
          "119": [0, 0.44444, 0.02778, 0, 0.83148],
          "120": [0, 0.44444, 0, 0, 0.65903],
          "121": [0.19444, 0.44444, 0.03704, 0, 0.59028],
          "122": [0, 0.44444, 0.04213, 0, 0.55509],
          "160": [0, 0, 0, 0, 0.25],
          "915": [0, 0.68611, 0.15972, 0, 0.65694],
          "916": [0, 0.68611, 0, 0, 0.95833],
          "920": [0, 0.68611, 0.03194, 0, 0.86722],
          "923": [0, 0.68611, 0, 0, 0.80555],
          "926": [0, 0.68611, 0.07458, 0, 0.84125],
          "928": [0, 0.68611, 0.08229, 0, 0.98229],
          "931": [0, 0.68611, 0.05451, 0, 0.88507],
          "933": [0, 0.68611, 0.15972, 0, 0.67083],
          "934": [0, 0.68611, 0, 0, 0.76666],
          "936": [0, 0.68611, 0.11653, 0, 0.71402],
          "937": [0, 0.68611, 0.04835, 0, 0.8789],
          "945": [0, 0.44444, 0, 0, 0.76064],
          "946": [0.19444, 0.69444, 0.03403, 0, 0.65972],
          "947": [0.19444, 0.44444, 0.06389, 0, 0.59003],
          "948": [0, 0.69444, 0.03819, 0, 0.52222],
          "949": [0, 0.44444, 0, 0, 0.52882],
          "950": [0.19444, 0.69444, 0.06215, 0, 0.50833],
          "951": [0.19444, 0.44444, 0.03704, 0, 0.6],
          "952": [0, 0.69444, 0.03194, 0, 0.5618],
          "953": [0, 0.44444, 0, 0, 0.41204],
          "954": [0, 0.44444, 0, 0, 0.66759],
          "955": [0, 0.69444, 0, 0, 0.67083],
          "956": [0.19444, 0.44444, 0, 0, 0.70787],
          "957": [0, 0.44444, 0.06898, 0, 0.57685],
          "958": [0.19444, 0.69444, 0.03021, 0, 0.50833],
          "959": [0, 0.44444, 0, 0, 0.58472],
          "960": [0, 0.44444, 0.03704, 0, 0.68241],
          "961": [0.19444, 0.44444, 0, 0, 0.6118],
          "962": [0.09722, 0.44444, 0.07917, 0, 0.42361],
          "963": [0, 0.44444, 0.03704, 0, 0.68588],
          "964": [0, 0.44444, 0.13472, 0, 0.52083],
          "965": [0, 0.44444, 0.03704, 0, 0.63055],
          "966": [0.19444, 0.44444, 0, 0, 0.74722],
          "967": [0.19444, 0.44444, 0, 0, 0.71805],
          "968": [0.19444, 0.69444, 0.03704, 0, 0.75833],
          "969": [0, 0.44444, 0.03704, 0, 0.71782],
          "977": [0, 0.69444, 0, 0, 0.69155],
          "981": [0.19444, 0.69444, 0, 0, 0.7125],
          "982": [0, 0.44444, 0.03194, 0, 0.975],
          "1009": [0.19444, 0.44444, 0, 0, 0.6118],
          "1013": [0, 0.44444, 0, 0, 0.48333],
          "57649": [0, 0.44444, 0, 0, 0.39352],
          "57911": [0.19444, 0.44444, 0, 0, 0.43889]
        },
        "Math-Italic": {
          "32": [0, 0, 0, 0, 0.25],
          "48": [0, 0.43056, 0, 0, 0.5],
          "49": [0, 0.43056, 0, 0, 0.5],
          "50": [0, 0.43056, 0, 0, 0.5],
          "51": [0.19444, 0.43056, 0, 0, 0.5],
          "52": [0.19444, 0.43056, 0, 0, 0.5],
          "53": [0.19444, 0.43056, 0, 0, 0.5],
          "54": [0, 0.64444, 0, 0, 0.5],
          "55": [0.19444, 0.43056, 0, 0, 0.5],
          "56": [0, 0.64444, 0, 0, 0.5],
          "57": [0.19444, 0.43056, 0, 0, 0.5],
          "65": [0, 0.68333, 0, 0.13889, 0.75],
          "66": [0, 0.68333, 0.05017, 0.08334, 0.75851],
          "67": [0, 0.68333, 0.07153, 0.08334, 0.71472],
          "68": [0, 0.68333, 0.02778, 0.05556, 0.82792],
          "69": [0, 0.68333, 0.05764, 0.08334, 0.7382],
          "70": [0, 0.68333, 0.13889, 0.08334, 0.64306],
          "71": [0, 0.68333, 0, 0.08334, 0.78625],
          "72": [0, 0.68333, 0.08125, 0.05556, 0.83125],
          "73": [0, 0.68333, 0.07847, 0.11111, 0.43958],
          "74": [0, 0.68333, 0.09618, 0.16667, 0.55451],
          "75": [0, 0.68333, 0.07153, 0.05556, 0.84931],
          "76": [0, 0.68333, 0, 0.02778, 0.68056],
          "77": [0, 0.68333, 0.10903, 0.08334, 0.97014],
          "78": [0, 0.68333, 0.10903, 0.08334, 0.80347],
          "79": [0, 0.68333, 0.02778, 0.08334, 0.76278],
          "80": [0, 0.68333, 0.13889, 0.08334, 0.64201],
          "81": [0.19444, 0.68333, 0, 0.08334, 0.79056],
          "82": [0, 0.68333, 773e-5, 0.08334, 0.75929],
          "83": [0, 0.68333, 0.05764, 0.08334, 0.6132],
          "84": [0, 0.68333, 0.13889, 0.08334, 0.58438],
          "85": [0, 0.68333, 0.10903, 0.02778, 0.68278],
          "86": [0, 0.68333, 0.22222, 0, 0.58333],
          "87": [0, 0.68333, 0.13889, 0, 0.94445],
          "88": [0, 0.68333, 0.07847, 0.08334, 0.82847],
          "89": [0, 0.68333, 0.22222, 0, 0.58056],
          "90": [0, 0.68333, 0.07153, 0.08334, 0.68264],
          "97": [0, 0.43056, 0, 0, 0.52859],
          "98": [0, 0.69444, 0, 0, 0.42917],
          "99": [0, 0.43056, 0, 0.05556, 0.43276],
          "100": [0, 0.69444, 0, 0.16667, 0.52049],
          "101": [0, 0.43056, 0, 0.05556, 0.46563],
          "102": [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
          "103": [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
          "104": [0, 0.69444, 0, 0, 0.57616],
          "105": [0, 0.65952, 0, 0, 0.34451],
          "106": [0.19444, 0.65952, 0.05724, 0, 0.41181],
          "107": [0, 0.69444, 0.03148, 0, 0.5206],
          "108": [0, 0.69444, 0.01968, 0.08334, 0.29838],
          "109": [0, 0.43056, 0, 0, 0.87801],
          "110": [0, 0.43056, 0, 0, 0.60023],
          "111": [0, 0.43056, 0, 0.05556, 0.48472],
          "112": [0.19444, 0.43056, 0, 0.08334, 0.50313],
          "113": [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
          "114": [0, 0.43056, 0.02778, 0.05556, 0.45116],
          "115": [0, 0.43056, 0, 0.05556, 0.46875],
          "116": [0, 0.61508, 0, 0.08334, 0.36111],
          "117": [0, 0.43056, 0, 0.02778, 0.57246],
          "118": [0, 0.43056, 0.03588, 0.02778, 0.48472],
          "119": [0, 0.43056, 0.02691, 0.08334, 0.71592],
          "120": [0, 0.43056, 0, 0.02778, 0.57153],
          "121": [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
          "122": [0, 0.43056, 0.04398, 0.05556, 0.46505],
          "160": [0, 0, 0, 0, 0.25],
          "915": [0, 0.68333, 0.13889, 0.08334, 0.61528],
          "916": [0, 0.68333, 0, 0.16667, 0.83334],
          "920": [0, 0.68333, 0.02778, 0.08334, 0.76278],
          "923": [0, 0.68333, 0, 0.16667, 0.69445],
          "926": [0, 0.68333, 0.07569, 0.08334, 0.74236],
          "928": [0, 0.68333, 0.08125, 0.05556, 0.83125],
          "931": [0, 0.68333, 0.05764, 0.08334, 0.77986],
          "933": [0, 0.68333, 0.13889, 0.05556, 0.58333],
          "934": [0, 0.68333, 0, 0.08334, 0.66667],
          "936": [0, 0.68333, 0.11, 0.05556, 0.61222],
          "937": [0, 0.68333, 0.05017, 0.08334, 0.7724],
          "945": [0, 0.43056, 37e-4, 0.02778, 0.6397],
          "946": [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
          "947": [0.19444, 0.43056, 0.05556, 0, 0.51773],
          "948": [0, 0.69444, 0.03785, 0.05556, 0.44444],
          "949": [0, 0.43056, 0, 0.08334, 0.46632],
          "950": [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
          "951": [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
          "952": [0, 0.69444, 0.02778, 0.08334, 0.46944],
          "953": [0, 0.43056, 0, 0.05556, 0.35394],
          "954": [0, 0.43056, 0, 0, 0.57616],
          "955": [0, 0.69444, 0, 0, 0.58334],
          "956": [0.19444, 0.43056, 0, 0.02778, 0.60255],
          "957": [0, 0.43056, 0.06366, 0.02778, 0.49398],
          "958": [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
          "959": [0, 0.43056, 0, 0.05556, 0.48472],
          "960": [0, 0.43056, 0.03588, 0, 0.57003],
          "961": [0.19444, 0.43056, 0, 0.08334, 0.51702],
          "962": [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
          "963": [0, 0.43056, 0.03588, 0, 0.57141],
          "964": [0, 0.43056, 0.1132, 0.02778, 0.43715],
          "965": [0, 0.43056, 0.03588, 0.02778, 0.54028],
          "966": [0.19444, 0.43056, 0, 0.08334, 0.65417],
          "967": [0.19444, 0.43056, 0, 0.05556, 0.62569],
          "968": [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
          "969": [0, 0.43056, 0.03588, 0, 0.62245],
          "977": [0, 0.69444, 0, 0.08334, 0.59144],
          "981": [0.19444, 0.69444, 0, 0.08334, 0.59583],
          "982": [0, 0.43056, 0.02778, 0, 0.82813],
          "1009": [0.19444, 0.43056, 0, 0.08334, 0.51702],
          "1013": [0, 0.43056, 0, 0.05556, 0.4059],
          "57649": [0, 0.43056, 0, 0.02778, 0.32246],
          "57911": [0.19444, 0.43056, 0, 0.08334, 0.38403]
        },
        "SansSerif-Bold": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0, 0, 0.36667],
          "34": [0, 0.69444, 0, 0, 0.55834],
          "35": [0.19444, 0.69444, 0, 0, 0.91667],
          "36": [0.05556, 0.75, 0, 0, 0.55],
          "37": [0.05556, 0.75, 0, 0, 1.02912],
          "38": [0, 0.69444, 0, 0, 0.83056],
          "39": [0, 0.69444, 0, 0, 0.30556],
          "40": [0.25, 0.75, 0, 0, 0.42778],
          "41": [0.25, 0.75, 0, 0, 0.42778],
          "42": [0, 0.75, 0, 0, 0.55],
          "43": [0.11667, 0.61667, 0, 0, 0.85556],
          "44": [0.10556, 0.13056, 0, 0, 0.30556],
          "45": [0, 0.45833, 0, 0, 0.36667],
          "46": [0, 0.13056, 0, 0, 0.30556],
          "47": [0.25, 0.75, 0, 0, 0.55],
          "48": [0, 0.69444, 0, 0, 0.55],
          "49": [0, 0.69444, 0, 0, 0.55],
          "50": [0, 0.69444, 0, 0, 0.55],
          "51": [0, 0.69444, 0, 0, 0.55],
          "52": [0, 0.69444, 0, 0, 0.55],
          "53": [0, 0.69444, 0, 0, 0.55],
          "54": [0, 0.69444, 0, 0, 0.55],
          "55": [0, 0.69444, 0, 0, 0.55],
          "56": [0, 0.69444, 0, 0, 0.55],
          "57": [0, 0.69444, 0, 0, 0.55],
          "58": [0, 0.45833, 0, 0, 0.30556],
          "59": [0.10556, 0.45833, 0, 0, 0.30556],
          "61": [-0.09375, 0.40625, 0, 0, 0.85556],
          "63": [0, 0.69444, 0, 0, 0.51945],
          "64": [0, 0.69444, 0, 0, 0.73334],
          "65": [0, 0.69444, 0, 0, 0.73334],
          "66": [0, 0.69444, 0, 0, 0.73334],
          "67": [0, 0.69444, 0, 0, 0.70278],
          "68": [0, 0.69444, 0, 0, 0.79445],
          "69": [0, 0.69444, 0, 0, 0.64167],
          "70": [0, 0.69444, 0, 0, 0.61111],
          "71": [0, 0.69444, 0, 0, 0.73334],
          "72": [0, 0.69444, 0, 0, 0.79445],
          "73": [0, 0.69444, 0, 0, 0.33056],
          "74": [0, 0.69444, 0, 0, 0.51945],
          "75": [0, 0.69444, 0, 0, 0.76389],
          "76": [0, 0.69444, 0, 0, 0.58056],
          "77": [0, 0.69444, 0, 0, 0.97778],
          "78": [0, 0.69444, 0, 0, 0.79445],
          "79": [0, 0.69444, 0, 0, 0.79445],
          "80": [0, 0.69444, 0, 0, 0.70278],
          "81": [0.10556, 0.69444, 0, 0, 0.79445],
          "82": [0, 0.69444, 0, 0, 0.70278],
          "83": [0, 0.69444, 0, 0, 0.61111],
          "84": [0, 0.69444, 0, 0, 0.73334],
          "85": [0, 0.69444, 0, 0, 0.76389],
          "86": [0, 0.69444, 0.01528, 0, 0.73334],
          "87": [0, 0.69444, 0.01528, 0, 1.03889],
          "88": [0, 0.69444, 0, 0, 0.73334],
          "89": [0, 0.69444, 0.0275, 0, 0.73334],
          "90": [0, 0.69444, 0, 0, 0.67223],
          "91": [0.25, 0.75, 0, 0, 0.34306],
          "93": [0.25, 0.75, 0, 0, 0.34306],
          "94": [0, 0.69444, 0, 0, 0.55],
          "95": [0.35, 0.10833, 0.03056, 0, 0.55],
          "97": [0, 0.45833, 0, 0, 0.525],
          "98": [0, 0.69444, 0, 0, 0.56111],
          "99": [0, 0.45833, 0, 0, 0.48889],
          "100": [0, 0.69444, 0, 0, 0.56111],
          "101": [0, 0.45833, 0, 0, 0.51111],
          "102": [0, 0.69444, 0.07639, 0, 0.33611],
          "103": [0.19444, 0.45833, 0.01528, 0, 0.55],
          "104": [0, 0.69444, 0, 0, 0.56111],
          "105": [0, 0.69444, 0, 0, 0.25556],
          "106": [0.19444, 0.69444, 0, 0, 0.28611],
          "107": [0, 0.69444, 0, 0, 0.53056],
          "108": [0, 0.69444, 0, 0, 0.25556],
          "109": [0, 0.45833, 0, 0, 0.86667],
          "110": [0, 0.45833, 0, 0, 0.56111],
          "111": [0, 0.45833, 0, 0, 0.55],
          "112": [0.19444, 0.45833, 0, 0, 0.56111],
          "113": [0.19444, 0.45833, 0, 0, 0.56111],
          "114": [0, 0.45833, 0.01528, 0, 0.37222],
          "115": [0, 0.45833, 0, 0, 0.42167],
          "116": [0, 0.58929, 0, 0, 0.40417],
          "117": [0, 0.45833, 0, 0, 0.56111],
          "118": [0, 0.45833, 0.01528, 0, 0.5],
          "119": [0, 0.45833, 0.01528, 0, 0.74445],
          "120": [0, 0.45833, 0, 0, 0.5],
          "121": [0.19444, 0.45833, 0.01528, 0, 0.5],
          "122": [0, 0.45833, 0, 0, 0.47639],
          "126": [0.35, 0.34444, 0, 0, 0.55],
          "160": [0, 0, 0, 0, 0.25],
          "168": [0, 0.69444, 0, 0, 0.55],
          "176": [0, 0.69444, 0, 0, 0.73334],
          "180": [0, 0.69444, 0, 0, 0.55],
          "184": [0.17014, 0, 0, 0, 0.48889],
          "305": [0, 0.45833, 0, 0, 0.25556],
          "567": [0.19444, 0.45833, 0, 0, 0.28611],
          "710": [0, 0.69444, 0, 0, 0.55],
          "711": [0, 0.63542, 0, 0, 0.55],
          "713": [0, 0.63778, 0, 0, 0.55],
          "728": [0, 0.69444, 0, 0, 0.55],
          "729": [0, 0.69444, 0, 0, 0.30556],
          "730": [0, 0.69444, 0, 0, 0.73334],
          "732": [0, 0.69444, 0, 0, 0.55],
          "733": [0, 0.69444, 0, 0, 0.55],
          "915": [0, 0.69444, 0, 0, 0.58056],
          "916": [0, 0.69444, 0, 0, 0.91667],
          "920": [0, 0.69444, 0, 0, 0.85556],
          "923": [0, 0.69444, 0, 0, 0.67223],
          "926": [0, 0.69444, 0, 0, 0.73334],
          "928": [0, 0.69444, 0, 0, 0.79445],
          "931": [0, 0.69444, 0, 0, 0.79445],
          "933": [0, 0.69444, 0, 0, 0.85556],
          "934": [0, 0.69444, 0, 0, 0.79445],
          "936": [0, 0.69444, 0, 0, 0.85556],
          "937": [0, 0.69444, 0, 0, 0.79445],
          "8211": [0, 0.45833, 0.03056, 0, 0.55],
          "8212": [0, 0.45833, 0.03056, 0, 1.10001],
          "8216": [0, 0.69444, 0, 0, 0.30556],
          "8217": [0, 0.69444, 0, 0, 0.30556],
          "8220": [0, 0.69444, 0, 0, 0.55834],
          "8221": [0, 0.69444, 0, 0, 0.55834]
        },
        "SansSerif-Italic": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0.05733, 0, 0.31945],
          "34": [0, 0.69444, 316e-5, 0, 0.5],
          "35": [0.19444, 0.69444, 0.05087, 0, 0.83334],
          "36": [0.05556, 0.75, 0.11156, 0, 0.5],
          "37": [0.05556, 0.75, 0.03126, 0, 0.83334],
          "38": [0, 0.69444, 0.03058, 0, 0.75834],
          "39": [0, 0.69444, 0.07816, 0, 0.27778],
          "40": [0.25, 0.75, 0.13164, 0, 0.38889],
          "41": [0.25, 0.75, 0.02536, 0, 0.38889],
          "42": [0, 0.75, 0.11775, 0, 0.5],
          "43": [0.08333, 0.58333, 0.02536, 0, 0.77778],
          "44": [0.125, 0.08333, 0, 0, 0.27778],
          "45": [0, 0.44444, 0.01946, 0, 0.33333],
          "46": [0, 0.08333, 0, 0, 0.27778],
          "47": [0.25, 0.75, 0.13164, 0, 0.5],
          "48": [0, 0.65556, 0.11156, 0, 0.5],
          "49": [0, 0.65556, 0.11156, 0, 0.5],
          "50": [0, 0.65556, 0.11156, 0, 0.5],
          "51": [0, 0.65556, 0.11156, 0, 0.5],
          "52": [0, 0.65556, 0.11156, 0, 0.5],
          "53": [0, 0.65556, 0.11156, 0, 0.5],
          "54": [0, 0.65556, 0.11156, 0, 0.5],
          "55": [0, 0.65556, 0.11156, 0, 0.5],
          "56": [0, 0.65556, 0.11156, 0, 0.5],
          "57": [0, 0.65556, 0.11156, 0, 0.5],
          "58": [0, 0.44444, 0.02502, 0, 0.27778],
          "59": [0.125, 0.44444, 0.02502, 0, 0.27778],
          "61": [-0.13, 0.37, 0.05087, 0, 0.77778],
          "63": [0, 0.69444, 0.11809, 0, 0.47222],
          "64": [0, 0.69444, 0.07555, 0, 0.66667],
          "65": [0, 0.69444, 0, 0, 0.66667],
          "66": [0, 0.69444, 0.08293, 0, 0.66667],
          "67": [0, 0.69444, 0.11983, 0, 0.63889],
          "68": [0, 0.69444, 0.07555, 0, 0.72223],
          "69": [0, 0.69444, 0.11983, 0, 0.59722],
          "70": [0, 0.69444, 0.13372, 0, 0.56945],
          "71": [0, 0.69444, 0.11983, 0, 0.66667],
          "72": [0, 0.69444, 0.08094, 0, 0.70834],
          "73": [0, 0.69444, 0.13372, 0, 0.27778],
          "74": [0, 0.69444, 0.08094, 0, 0.47222],
          "75": [0, 0.69444, 0.11983, 0, 0.69445],
          "76": [0, 0.69444, 0, 0, 0.54167],
          "77": [0, 0.69444, 0.08094, 0, 0.875],
          "78": [0, 0.69444, 0.08094, 0, 0.70834],
          "79": [0, 0.69444, 0.07555, 0, 0.73611],
          "80": [0, 0.69444, 0.08293, 0, 0.63889],
          "81": [0.125, 0.69444, 0.07555, 0, 0.73611],
          "82": [0, 0.69444, 0.08293, 0, 0.64584],
          "83": [0, 0.69444, 0.09205, 0, 0.55556],
          "84": [0, 0.69444, 0.13372, 0, 0.68056],
          "85": [0, 0.69444, 0.08094, 0, 0.6875],
          "86": [0, 0.69444, 0.1615, 0, 0.66667],
          "87": [0, 0.69444, 0.1615, 0, 0.94445],
          "88": [0, 0.69444, 0.13372, 0, 0.66667],
          "89": [0, 0.69444, 0.17261, 0, 0.66667],
          "90": [0, 0.69444, 0.11983, 0, 0.61111],
          "91": [0.25, 0.75, 0.15942, 0, 0.28889],
          "93": [0.25, 0.75, 0.08719, 0, 0.28889],
          "94": [0, 0.69444, 0.0799, 0, 0.5],
          "95": [0.35, 0.09444, 0.08616, 0, 0.5],
          "97": [0, 0.44444, 981e-5, 0, 0.48056],
          "98": [0, 0.69444, 0.03057, 0, 0.51667],
          "99": [0, 0.44444, 0.08336, 0, 0.44445],
          "100": [0, 0.69444, 0.09483, 0, 0.51667],
          "101": [0, 0.44444, 0.06778, 0, 0.44445],
          "102": [0, 0.69444, 0.21705, 0, 0.30556],
          "103": [0.19444, 0.44444, 0.10836, 0, 0.5],
          "104": [0, 0.69444, 0.01778, 0, 0.51667],
          "105": [0, 0.67937, 0.09718, 0, 0.23889],
          "106": [0.19444, 0.67937, 0.09162, 0, 0.26667],
          "107": [0, 0.69444, 0.08336, 0, 0.48889],
          "108": [0, 0.69444, 0.09483, 0, 0.23889],
          "109": [0, 0.44444, 0.01778, 0, 0.79445],
          "110": [0, 0.44444, 0.01778, 0, 0.51667],
          "111": [0, 0.44444, 0.06613, 0, 0.5],
          "112": [0.19444, 0.44444, 0.0389, 0, 0.51667],
          "113": [0.19444, 0.44444, 0.04169, 0, 0.51667],
          "114": [0, 0.44444, 0.10836, 0, 0.34167],
          "115": [0, 0.44444, 0.0778, 0, 0.38333],
          "116": [0, 0.57143, 0.07225, 0, 0.36111],
          "117": [0, 0.44444, 0.04169, 0, 0.51667],
          "118": [0, 0.44444, 0.10836, 0, 0.46111],
          "119": [0, 0.44444, 0.10836, 0, 0.68334],
          "120": [0, 0.44444, 0.09169, 0, 0.46111],
          "121": [0.19444, 0.44444, 0.10836, 0, 0.46111],
          "122": [0, 0.44444, 0.08752, 0, 0.43472],
          "126": [0.35, 0.32659, 0.08826, 0, 0.5],
          "160": [0, 0, 0, 0, 0.25],
          "168": [0, 0.67937, 0.06385, 0, 0.5],
          "176": [0, 0.69444, 0, 0, 0.73752],
          "184": [0.17014, 0, 0, 0, 0.44445],
          "305": [0, 0.44444, 0.04169, 0, 0.23889],
          "567": [0.19444, 0.44444, 0.04169, 0, 0.26667],
          "710": [0, 0.69444, 0.0799, 0, 0.5],
          "711": [0, 0.63194, 0.08432, 0, 0.5],
          "713": [0, 0.60889, 0.08776, 0, 0.5],
          "714": [0, 0.69444, 0.09205, 0, 0.5],
          "715": [0, 0.69444, 0, 0, 0.5],
          "728": [0, 0.69444, 0.09483, 0, 0.5],
          "729": [0, 0.67937, 0.07774, 0, 0.27778],
          "730": [0, 0.69444, 0, 0, 0.73752],
          "732": [0, 0.67659, 0.08826, 0, 0.5],
          "733": [0, 0.69444, 0.09205, 0, 0.5],
          "915": [0, 0.69444, 0.13372, 0, 0.54167],
          "916": [0, 0.69444, 0, 0, 0.83334],
          "920": [0, 0.69444, 0.07555, 0, 0.77778],
          "923": [0, 0.69444, 0, 0, 0.61111],
          "926": [0, 0.69444, 0.12816, 0, 0.66667],
          "928": [0, 0.69444, 0.08094, 0, 0.70834],
          "931": [0, 0.69444, 0.11983, 0, 0.72222],
          "933": [0, 0.69444, 0.09031, 0, 0.77778],
          "934": [0, 0.69444, 0.04603, 0, 0.72222],
          "936": [0, 0.69444, 0.09031, 0, 0.77778],
          "937": [0, 0.69444, 0.08293, 0, 0.72222],
          "8211": [0, 0.44444, 0.08616, 0, 0.5],
          "8212": [0, 0.44444, 0.08616, 0, 1],
          "8216": [0, 0.69444, 0.07816, 0, 0.27778],
          "8217": [0, 0.69444, 0.07816, 0, 0.27778],
          "8220": [0, 0.69444, 0.14205, 0, 0.5],
          "8221": [0, 0.69444, 316e-5, 0, 0.5]
        },
        "SansSerif-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "33": [0, 0.69444, 0, 0, 0.31945],
          "34": [0, 0.69444, 0, 0, 0.5],
          "35": [0.19444, 0.69444, 0, 0, 0.83334],
          "36": [0.05556, 0.75, 0, 0, 0.5],
          "37": [0.05556, 0.75, 0, 0, 0.83334],
          "38": [0, 0.69444, 0, 0, 0.75834],
          "39": [0, 0.69444, 0, 0, 0.27778],
          "40": [0.25, 0.75, 0, 0, 0.38889],
          "41": [0.25, 0.75, 0, 0, 0.38889],
          "42": [0, 0.75, 0, 0, 0.5],
          "43": [0.08333, 0.58333, 0, 0, 0.77778],
          "44": [0.125, 0.08333, 0, 0, 0.27778],
          "45": [0, 0.44444, 0, 0, 0.33333],
          "46": [0, 0.08333, 0, 0, 0.27778],
          "47": [0.25, 0.75, 0, 0, 0.5],
          "48": [0, 0.65556, 0, 0, 0.5],
          "49": [0, 0.65556, 0, 0, 0.5],
          "50": [0, 0.65556, 0, 0, 0.5],
          "51": [0, 0.65556, 0, 0, 0.5],
          "52": [0, 0.65556, 0, 0, 0.5],
          "53": [0, 0.65556, 0, 0, 0.5],
          "54": [0, 0.65556, 0, 0, 0.5],
          "55": [0, 0.65556, 0, 0, 0.5],
          "56": [0, 0.65556, 0, 0, 0.5],
          "57": [0, 0.65556, 0, 0, 0.5],
          "58": [0, 0.44444, 0, 0, 0.27778],
          "59": [0.125, 0.44444, 0, 0, 0.27778],
          "61": [-0.13, 0.37, 0, 0, 0.77778],
          "63": [0, 0.69444, 0, 0, 0.47222],
          "64": [0, 0.69444, 0, 0, 0.66667],
          "65": [0, 0.69444, 0, 0, 0.66667],
          "66": [0, 0.69444, 0, 0, 0.66667],
          "67": [0, 0.69444, 0, 0, 0.63889],
          "68": [0, 0.69444, 0, 0, 0.72223],
          "69": [0, 0.69444, 0, 0, 0.59722],
          "70": [0, 0.69444, 0, 0, 0.56945],
          "71": [0, 0.69444, 0, 0, 0.66667],
          "72": [0, 0.69444, 0, 0, 0.70834],
          "73": [0, 0.69444, 0, 0, 0.27778],
          "74": [0, 0.69444, 0, 0, 0.47222],
          "75": [0, 0.69444, 0, 0, 0.69445],
          "76": [0, 0.69444, 0, 0, 0.54167],
          "77": [0, 0.69444, 0, 0, 0.875],
          "78": [0, 0.69444, 0, 0, 0.70834],
          "79": [0, 0.69444, 0, 0, 0.73611],
          "80": [0, 0.69444, 0, 0, 0.63889],
          "81": [0.125, 0.69444, 0, 0, 0.73611],
          "82": [0, 0.69444, 0, 0, 0.64584],
          "83": [0, 0.69444, 0, 0, 0.55556],
          "84": [0, 0.69444, 0, 0, 0.68056],
          "85": [0, 0.69444, 0, 0, 0.6875],
          "86": [0, 0.69444, 0.01389, 0, 0.66667],
          "87": [0, 0.69444, 0.01389, 0, 0.94445],
          "88": [0, 0.69444, 0, 0, 0.66667],
          "89": [0, 0.69444, 0.025, 0, 0.66667],
          "90": [0, 0.69444, 0, 0, 0.61111],
          "91": [0.25, 0.75, 0, 0, 0.28889],
          "93": [0.25, 0.75, 0, 0, 0.28889],
          "94": [0, 0.69444, 0, 0, 0.5],
          "95": [0.35, 0.09444, 0.02778, 0, 0.5],
          "97": [0, 0.44444, 0, 0, 0.48056],
          "98": [0, 0.69444, 0, 0, 0.51667],
          "99": [0, 0.44444, 0, 0, 0.44445],
          "100": [0, 0.69444, 0, 0, 0.51667],
          "101": [0, 0.44444, 0, 0, 0.44445],
          "102": [0, 0.69444, 0.06944, 0, 0.30556],
          "103": [0.19444, 0.44444, 0.01389, 0, 0.5],
          "104": [0, 0.69444, 0, 0, 0.51667],
          "105": [0, 0.67937, 0, 0, 0.23889],
          "106": [0.19444, 0.67937, 0, 0, 0.26667],
          "107": [0, 0.69444, 0, 0, 0.48889],
          "108": [0, 0.69444, 0, 0, 0.23889],
          "109": [0, 0.44444, 0, 0, 0.79445],
          "110": [0, 0.44444, 0, 0, 0.51667],
          "111": [0, 0.44444, 0, 0, 0.5],
          "112": [0.19444, 0.44444, 0, 0, 0.51667],
          "113": [0.19444, 0.44444, 0, 0, 0.51667],
          "114": [0, 0.44444, 0.01389, 0, 0.34167],
          "115": [0, 0.44444, 0, 0, 0.38333],
          "116": [0, 0.57143, 0, 0, 0.36111],
          "117": [0, 0.44444, 0, 0, 0.51667],
          "118": [0, 0.44444, 0.01389, 0, 0.46111],
          "119": [0, 0.44444, 0.01389, 0, 0.68334],
          "120": [0, 0.44444, 0, 0, 0.46111],
          "121": [0.19444, 0.44444, 0.01389, 0, 0.46111],
          "122": [0, 0.44444, 0, 0, 0.43472],
          "126": [0.35, 0.32659, 0, 0, 0.5],
          "160": [0, 0, 0, 0, 0.25],
          "168": [0, 0.67937, 0, 0, 0.5],
          "176": [0, 0.69444, 0, 0, 0.66667],
          "184": [0.17014, 0, 0, 0, 0.44445],
          "305": [0, 0.44444, 0, 0, 0.23889],
          "567": [0.19444, 0.44444, 0, 0, 0.26667],
          "710": [0, 0.69444, 0, 0, 0.5],
          "711": [0, 0.63194, 0, 0, 0.5],
          "713": [0, 0.60889, 0, 0, 0.5],
          "714": [0, 0.69444, 0, 0, 0.5],
          "715": [0, 0.69444, 0, 0, 0.5],
          "728": [0, 0.69444, 0, 0, 0.5],
          "729": [0, 0.67937, 0, 0, 0.27778],
          "730": [0, 0.69444, 0, 0, 0.66667],
          "732": [0, 0.67659, 0, 0, 0.5],
          "733": [0, 0.69444, 0, 0, 0.5],
          "915": [0, 0.69444, 0, 0, 0.54167],
          "916": [0, 0.69444, 0, 0, 0.83334],
          "920": [0, 0.69444, 0, 0, 0.77778],
          "923": [0, 0.69444, 0, 0, 0.61111],
          "926": [0, 0.69444, 0, 0, 0.66667],
          "928": [0, 0.69444, 0, 0, 0.70834],
          "931": [0, 0.69444, 0, 0, 0.72222],
          "933": [0, 0.69444, 0, 0, 0.77778],
          "934": [0, 0.69444, 0, 0, 0.72222],
          "936": [0, 0.69444, 0, 0, 0.77778],
          "937": [0, 0.69444, 0, 0, 0.72222],
          "8211": [0, 0.44444, 0.02778, 0, 0.5],
          "8212": [0, 0.44444, 0.02778, 0, 1],
          "8216": [0, 0.69444, 0, 0, 0.27778],
          "8217": [0, 0.69444, 0, 0, 0.27778],
          "8220": [0, 0.69444, 0, 0, 0.5],
          "8221": [0, 0.69444, 0, 0, 0.5]
        },
        "Script-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "65": [0, 0.7, 0.22925, 0, 0.80253],
          "66": [0, 0.7, 0.04087, 0, 0.90757],
          "67": [0, 0.7, 0.1689, 0, 0.66619],
          "68": [0, 0.7, 0.09371, 0, 0.77443],
          "69": [0, 0.7, 0.18583, 0, 0.56162],
          "70": [0, 0.7, 0.13634, 0, 0.89544],
          "71": [0, 0.7, 0.17322, 0, 0.60961],
          "72": [0, 0.7, 0.29694, 0, 0.96919],
          "73": [0, 0.7, 0.19189, 0, 0.80907],
          "74": [0.27778, 0.7, 0.19189, 0, 1.05159],
          "75": [0, 0.7, 0.31259, 0, 0.91364],
          "76": [0, 0.7, 0.19189, 0, 0.87373],
          "77": [0, 0.7, 0.15981, 0, 1.08031],
          "78": [0, 0.7, 0.3525, 0, 0.9015],
          "79": [0, 0.7, 0.08078, 0, 0.73787],
          "80": [0, 0.7, 0.08078, 0, 1.01262],
          "81": [0, 0.7, 0.03305, 0, 0.88282],
          "82": [0, 0.7, 0.06259, 0, 0.85],
          "83": [0, 0.7, 0.19189, 0, 0.86767],
          "84": [0, 0.7, 0.29087, 0, 0.74697],
          "85": [0, 0.7, 0.25815, 0, 0.79996],
          "86": [0, 0.7, 0.27523, 0, 0.62204],
          "87": [0, 0.7, 0.27523, 0, 0.80532],
          "88": [0, 0.7, 0.26006, 0, 0.94445],
          "89": [0, 0.7, 0.2939, 0, 0.70961],
          "90": [0, 0.7, 0.24037, 0, 0.8212],
          "160": [0, 0, 0, 0, 0.25]
        },
        "Size1-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "40": [0.35001, 0.85, 0, 0, 0.45834],
          "41": [0.35001, 0.85, 0, 0, 0.45834],
          "47": [0.35001, 0.85, 0, 0, 0.57778],
          "91": [0.35001, 0.85, 0, 0, 0.41667],
          "92": [0.35001, 0.85, 0, 0, 0.57778],
          "93": [0.35001, 0.85, 0, 0, 0.41667],
          "123": [0.35001, 0.85, 0, 0, 0.58334],
          "125": [0.35001, 0.85, 0, 0, 0.58334],
          "160": [0, 0, 0, 0, 0.25],
          "710": [0, 0.72222, 0, 0, 0.55556],
          "732": [0, 0.72222, 0, 0, 0.55556],
          "770": [0, 0.72222, 0, 0, 0.55556],
          "771": [0, 0.72222, 0, 0, 0.55556],
          "8214": [-99e-5, 0.601, 0, 0, 0.77778],
          "8593": [1e-5, 0.6, 0, 0, 0.66667],
          "8595": [1e-5, 0.6, 0, 0, 0.66667],
          "8657": [1e-5, 0.6, 0, 0, 0.77778],
          "8659": [1e-5, 0.6, 0, 0, 0.77778],
          "8719": [0.25001, 0.75, 0, 0, 0.94445],
          "8720": [0.25001, 0.75, 0, 0, 0.94445],
          "8721": [0.25001, 0.75, 0, 0, 1.05556],
          "8730": [0.35001, 0.85, 0, 0, 1],
          "8739": [-599e-5, 0.606, 0, 0, 0.33333],
          "8741": [-599e-5, 0.606, 0, 0, 0.55556],
          "8747": [0.30612, 0.805, 0.19445, 0, 0.47222],
          "8748": [0.306, 0.805, 0.19445, 0, 0.47222],
          "8749": [0.306, 0.805, 0.19445, 0, 0.47222],
          "8750": [0.30612, 0.805, 0.19445, 0, 0.47222],
          "8896": [0.25001, 0.75, 0, 0, 0.83334],
          "8897": [0.25001, 0.75, 0, 0, 0.83334],
          "8898": [0.25001, 0.75, 0, 0, 0.83334],
          "8899": [0.25001, 0.75, 0, 0, 0.83334],
          "8968": [0.35001, 0.85, 0, 0, 0.47222],
          "8969": [0.35001, 0.85, 0, 0, 0.47222],
          "8970": [0.35001, 0.85, 0, 0, 0.47222],
          "8971": [0.35001, 0.85, 0, 0, 0.47222],
          "9168": [-99e-5, 0.601, 0, 0, 0.66667],
          "10216": [0.35001, 0.85, 0, 0, 0.47222],
          "10217": [0.35001, 0.85, 0, 0, 0.47222],
          "10752": [0.25001, 0.75, 0, 0, 1.11111],
          "10753": [0.25001, 0.75, 0, 0, 1.11111],
          "10754": [0.25001, 0.75, 0, 0, 1.11111],
          "10756": [0.25001, 0.75, 0, 0, 0.83334],
          "10758": [0.25001, 0.75, 0, 0, 0.83334]
        },
        "Size2-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "40": [0.65002, 1.15, 0, 0, 0.59722],
          "41": [0.65002, 1.15, 0, 0, 0.59722],
          "47": [0.65002, 1.15, 0, 0, 0.81111],
          "91": [0.65002, 1.15, 0, 0, 0.47222],
          "92": [0.65002, 1.15, 0, 0, 0.81111],
          "93": [0.65002, 1.15, 0, 0, 0.47222],
          "123": [0.65002, 1.15, 0, 0, 0.66667],
          "125": [0.65002, 1.15, 0, 0, 0.66667],
          "160": [0, 0, 0, 0, 0.25],
          "710": [0, 0.75, 0, 0, 1],
          "732": [0, 0.75, 0, 0, 1],
          "770": [0, 0.75, 0, 0, 1],
          "771": [0, 0.75, 0, 0, 1],
          "8719": [0.55001, 1.05, 0, 0, 1.27778],
          "8720": [0.55001, 1.05, 0, 0, 1.27778],
          "8721": [0.55001, 1.05, 0, 0, 1.44445],
          "8730": [0.65002, 1.15, 0, 0, 1],
          "8747": [0.86225, 1.36, 0.44445, 0, 0.55556],
          "8748": [0.862, 1.36, 0.44445, 0, 0.55556],
          "8749": [0.862, 1.36, 0.44445, 0, 0.55556],
          "8750": [0.86225, 1.36, 0.44445, 0, 0.55556],
          "8896": [0.55001, 1.05, 0, 0, 1.11111],
          "8897": [0.55001, 1.05, 0, 0, 1.11111],
          "8898": [0.55001, 1.05, 0, 0, 1.11111],
          "8899": [0.55001, 1.05, 0, 0, 1.11111],
          "8968": [0.65002, 1.15, 0, 0, 0.52778],
          "8969": [0.65002, 1.15, 0, 0, 0.52778],
          "8970": [0.65002, 1.15, 0, 0, 0.52778],
          "8971": [0.65002, 1.15, 0, 0, 0.52778],
          "10216": [0.65002, 1.15, 0, 0, 0.61111],
          "10217": [0.65002, 1.15, 0, 0, 0.61111],
          "10752": [0.55001, 1.05, 0, 0, 1.51112],
          "10753": [0.55001, 1.05, 0, 0, 1.51112],
          "10754": [0.55001, 1.05, 0, 0, 1.51112],
          "10756": [0.55001, 1.05, 0, 0, 1.11111],
          "10758": [0.55001, 1.05, 0, 0, 1.11111]
        },
        "Size3-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "40": [0.95003, 1.45, 0, 0, 0.73611],
          "41": [0.95003, 1.45, 0, 0, 0.73611],
          "47": [0.95003, 1.45, 0, 0, 1.04445],
          "91": [0.95003, 1.45, 0, 0, 0.52778],
          "92": [0.95003, 1.45, 0, 0, 1.04445],
          "93": [0.95003, 1.45, 0, 0, 0.52778],
          "123": [0.95003, 1.45, 0, 0, 0.75],
          "125": [0.95003, 1.45, 0, 0, 0.75],
          "160": [0, 0, 0, 0, 0.25],
          "710": [0, 0.75, 0, 0, 1.44445],
          "732": [0, 0.75, 0, 0, 1.44445],
          "770": [0, 0.75, 0, 0, 1.44445],
          "771": [0, 0.75, 0, 0, 1.44445],
          "8730": [0.95003, 1.45, 0, 0, 1],
          "8968": [0.95003, 1.45, 0, 0, 0.58334],
          "8969": [0.95003, 1.45, 0, 0, 0.58334],
          "8970": [0.95003, 1.45, 0, 0, 0.58334],
          "8971": [0.95003, 1.45, 0, 0, 0.58334],
          "10216": [0.95003, 1.45, 0, 0, 0.75],
          "10217": [0.95003, 1.45, 0, 0, 0.75]
        },
        "Size4-Regular": {
          "32": [0, 0, 0, 0, 0.25],
          "40": [1.25003, 1.75, 0, 0, 0.79167],
          "41": [1.25003, 1.75, 0, 0, 0.79167],
          "47": [1.25003, 1.75, 0, 0, 1.27778],
          "91": [1.25003, 1.75, 0, 0, 0.58334],
          "92": [1.25003, 1.75, 0, 0, 1.27778],
          "93": [1.25003, 1.75, 0, 0, 0.58334],
          "123": [1.25003, 1.75, 0, 0, 0.80556],
          "125": [1.25003, 1.75, 0, 0, 0.80556],
          "160": [0, 0, 0, 0, 0.25],
          "710": [0, 0.825, 0, 0, 1.8889],
          "732": [0, 0.825, 0, 0, 1.8889],
          "770": [0, 0.825, 0, 0, 1.8889],
          "771": [0, 0.825, 0, 0, 1.8889],
          "8730": [1.25003, 1.75, 0, 0, 1],
          "8968": [1.25003, 1.75, 0, 0, 0.63889],
          "8969": [1.25003, 1.75, 0, 0, 0.63889],
          "8970": [1.25003, 1.75, 0, 0, 0.63889],
          "8971": [1.25003, 1.75, 0, 0, 0.63889],
          "9115": [0.64502, 1.155, 0, 0, 0.875],
          "9116": [1e-5, 0.6, 0, 0, 0.875],
          "9117": [0.64502, 1.155, 0, 0, 0.875],
          "9118": [0.64502, 1.155, 0, 0, 0.875],
          "9119": [1e-5, 0.6, 0, 0, 0.875],
          "9120": [0.64502, 1.155, 0, 0, 0.875],
          "9121": [0.64502, 1.155, 0, 0, 0.66667],
          "9122": [-99e-5, 0.601, 0, 0, 0.66667],
          "9123": [0.64502, 1.155, 0, 0, 0.66667],
          "9124": [0.64502, 1.155, 0, 0, 0.66667],
          "9125": [-99e-5, 0.601, 0, 0, 0.66667],
          "9126": [0.64502, 1.155, 0, 0, 0.66667],
          "9127": [1e-5, 0.9, 0, 0, 0.88889],
          "9128": [0.65002, 1.15, 0, 0, 0.88889],
          "9129": [0.90001, 0, 0, 0, 0.88889],
          "9130": [0, 0.3, 0, 0, 0.88889],
          "9131": [1e-5, 0.9, 0, 0, 0.88889],
          "9132": [0.65002, 1.15, 0, 0, 0.88889],
          "9133": [0.90001, 0, 0, 0, 0.88889],
          "9143": [0.88502, 0.915, 0, 0, 1.05556],
          "10216": [1.25003, 1.75, 0, 0, 0.80556],
          "10217": [1.25003, 1.75, 0, 0, 0.80556],
          "57344": [-499e-5, 0.605, 0, 0, 1.05556],
          "57345": [-499e-5, 0.605, 0, 0, 1.05556],
          "57680": [0, 0.12, 0, 0, 0.45],
          "57681": [0, 0.12, 0, 0, 0.45],
          "57682": [0, 0.12, 0, 0, 0.45],
          "57683": [0, 0.12, 0, 0, 0.45]
        },
        "Typewriter-Regular": {
          "32": [0, 0, 0, 0, 0.525],
          "33": [0, 0.61111, 0, 0, 0.525],
          "34": [0, 0.61111, 0, 0, 0.525],
          "35": [0, 0.61111, 0, 0, 0.525],
          "36": [0.08333, 0.69444, 0, 0, 0.525],
          "37": [0.08333, 0.69444, 0, 0, 0.525],
          "38": [0, 0.61111, 0, 0, 0.525],
          "39": [0, 0.61111, 0, 0, 0.525],
          "40": [0.08333, 0.69444, 0, 0, 0.525],
          "41": [0.08333, 0.69444, 0, 0, 0.525],
          "42": [0, 0.52083, 0, 0, 0.525],
          "43": [-0.08056, 0.53055, 0, 0, 0.525],
          "44": [0.13889, 0.125, 0, 0, 0.525],
          "45": [-0.08056, 0.53055, 0, 0, 0.525],
          "46": [0, 0.125, 0, 0, 0.525],
          "47": [0.08333, 0.69444, 0, 0, 0.525],
          "48": [0, 0.61111, 0, 0, 0.525],
          "49": [0, 0.61111, 0, 0, 0.525],
          "50": [0, 0.61111, 0, 0, 0.525],
          "51": [0, 0.61111, 0, 0, 0.525],
          "52": [0, 0.61111, 0, 0, 0.525],
          "53": [0, 0.61111, 0, 0, 0.525],
          "54": [0, 0.61111, 0, 0, 0.525],
          "55": [0, 0.61111, 0, 0, 0.525],
          "56": [0, 0.61111, 0, 0, 0.525],
          "57": [0, 0.61111, 0, 0, 0.525],
          "58": [0, 0.43056, 0, 0, 0.525],
          "59": [0.13889, 0.43056, 0, 0, 0.525],
          "60": [-0.05556, 0.55556, 0, 0, 0.525],
          "61": [-0.19549, 0.41562, 0, 0, 0.525],
          "62": [-0.05556, 0.55556, 0, 0, 0.525],
          "63": [0, 0.61111, 0, 0, 0.525],
          "64": [0, 0.61111, 0, 0, 0.525],
          "65": [0, 0.61111, 0, 0, 0.525],
          "66": [0, 0.61111, 0, 0, 0.525],
          "67": [0, 0.61111, 0, 0, 0.525],
          "68": [0, 0.61111, 0, 0, 0.525],
          "69": [0, 0.61111, 0, 0, 0.525],
          "70": [0, 0.61111, 0, 0, 0.525],
          "71": [0, 0.61111, 0, 0, 0.525],
          "72": [0, 0.61111, 0, 0, 0.525],
          "73": [0, 0.61111, 0, 0, 0.525],
          "74": [0, 0.61111, 0, 0, 0.525],
          "75": [0, 0.61111, 0, 0, 0.525],
          "76": [0, 0.61111, 0, 0, 0.525],
          "77": [0, 0.61111, 0, 0, 0.525],
          "78": [0, 0.61111, 0, 0, 0.525],
          "79": [0, 0.61111, 0, 0, 0.525],
          "80": [0, 0.61111, 0, 0, 0.525],
          "81": [0.13889, 0.61111, 0, 0, 0.525],
          "82": [0, 0.61111, 0, 0, 0.525],
          "83": [0, 0.61111, 0, 0, 0.525],
          "84": [0, 0.61111, 0, 0, 0.525],
          "85": [0, 0.61111, 0, 0, 0.525],
          "86": [0, 0.61111, 0, 0, 0.525],
          "87": [0, 0.61111, 0, 0, 0.525],
          "88": [0, 0.61111, 0, 0, 0.525],
          "89": [0, 0.61111, 0, 0, 0.525],
          "90": [0, 0.61111, 0, 0, 0.525],
          "91": [0.08333, 0.69444, 0, 0, 0.525],
          "92": [0.08333, 0.69444, 0, 0, 0.525],
          "93": [0.08333, 0.69444, 0, 0, 0.525],
          "94": [0, 0.61111, 0, 0, 0.525],
          "95": [0.09514, 0, 0, 0, 0.525],
          "96": [0, 0.61111, 0, 0, 0.525],
          "97": [0, 0.43056, 0, 0, 0.525],
          "98": [0, 0.61111, 0, 0, 0.525],
          "99": [0, 0.43056, 0, 0, 0.525],
          "100": [0, 0.61111, 0, 0, 0.525],
          "101": [0, 0.43056, 0, 0, 0.525],
          "102": [0, 0.61111, 0, 0, 0.525],
          "103": [0.22222, 0.43056, 0, 0, 0.525],
          "104": [0, 0.61111, 0, 0, 0.525],
          "105": [0, 0.61111, 0, 0, 0.525],
          "106": [0.22222, 0.61111, 0, 0, 0.525],
          "107": [0, 0.61111, 0, 0, 0.525],
          "108": [0, 0.61111, 0, 0, 0.525],
          "109": [0, 0.43056, 0, 0, 0.525],
          "110": [0, 0.43056, 0, 0, 0.525],
          "111": [0, 0.43056, 0, 0, 0.525],
          "112": [0.22222, 0.43056, 0, 0, 0.525],
          "113": [0.22222, 0.43056, 0, 0, 0.525],
          "114": [0, 0.43056, 0, 0, 0.525],
          "115": [0, 0.43056, 0, 0, 0.525],
          "116": [0, 0.55358, 0, 0, 0.525],
          "117": [0, 0.43056, 0, 0, 0.525],
          "118": [0, 0.43056, 0, 0, 0.525],
          "119": [0, 0.43056, 0, 0, 0.525],
          "120": [0, 0.43056, 0, 0, 0.525],
          "121": [0.22222, 0.43056, 0, 0, 0.525],
          "122": [0, 0.43056, 0, 0, 0.525],
          "123": [0.08333, 0.69444, 0, 0, 0.525],
          "124": [0.08333, 0.69444, 0, 0, 0.525],
          "125": [0.08333, 0.69444, 0, 0, 0.525],
          "126": [0, 0.61111, 0, 0, 0.525],
          "127": [0, 0.61111, 0, 0, 0.525],
          "160": [0, 0, 0, 0, 0.525],
          "176": [0, 0.61111, 0, 0, 0.525],
          "184": [0.19445, 0, 0, 0, 0.525],
          "305": [0, 0.43056, 0, 0, 0.525],
          "567": [0.22222, 0.43056, 0, 0, 0.525],
          "711": [0, 0.56597, 0, 0, 0.525],
          "713": [0, 0.56555, 0, 0, 0.525],
          "714": [0, 0.61111, 0, 0, 0.525],
          "715": [0, 0.61111, 0, 0, 0.525],
          "728": [0, 0.61111, 0, 0, 0.525],
          "730": [0, 0.61111, 0, 0, 0.525],
          "770": [0, 0.61111, 0, 0, 0.525],
          "771": [0, 0.61111, 0, 0, 0.525],
          "776": [0, 0.61111, 0, 0, 0.525],
          "915": [0, 0.61111, 0, 0, 0.525],
          "916": [0, 0.61111, 0, 0, 0.525],
          "920": [0, 0.61111, 0, 0, 0.525],
          "923": [0, 0.61111, 0, 0, 0.525],
          "926": [0, 0.61111, 0, 0, 0.525],
          "928": [0, 0.61111, 0, 0, 0.525],
          "931": [0, 0.61111, 0, 0, 0.525],
          "933": [0, 0.61111, 0, 0, 0.525],
          "934": [0, 0.61111, 0, 0, 0.525],
          "936": [0, 0.61111, 0, 0, 0.525],
          "937": [0, 0.61111, 0, 0, 0.525],
          "8216": [0, 0.61111, 0, 0, 0.525],
          "8217": [0, 0.61111, 0, 0, 0.525],
          "8242": [0, 0.61111, 0, 0, 0.525],
          "9251": [0.11111, 0.21944, 0, 0, 0.525]
        }
      };
      ;
      var sigmasAndXis = {
        slant: [0.25, 0.25, 0.25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [0.431, 0.431, 0.431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [0.677, 0.732, 0.925],
        num2: [0.394, 0.384, 0.387],
        num3: [0.444, 0.471, 0.504],
        denom1: [0.686, 0.752, 1.025],
        denom2: [0.345, 0.344, 0.532],
        sup1: [0.413, 0.503, 0.504],
        sup2: [0.363, 0.431, 0.404],
        sup3: [0.289, 0.286, 0.294],
        sub1: [0.15, 0.143, 0.2],
        sub2: [0.247, 0.286, 0.4],
        supDrop: [0.386, 0.353, 0.494],
        subDrop: [0.05, 0.071, 0.1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [0.25, 0.25, 0.25],
        defaultRuleThickness: [0.04, 0.049, 0.049],
        bigOpSpacing1: [0.111, 0.111, 0.111],
        bigOpSpacing2: [0.166, 0.166, 0.166],
        bigOpSpacing3: [0.2, 0.2, 0.2],
        bigOpSpacing4: [0.6, 0.611, 0.611],
        bigOpSpacing5: [0.1, 0.143, 0.143],
        sqrtRuleThickness: [0.04, 0.04, 0.04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [0.2, 0.2, 0.2],
        arrayRuleWidth: [0.04, 0.04, 0.04],
        fboxsep: [0.3, 0.3, 0.3],
        fboxrule: [0.04, 0.04, 0.04]
      };
      var extraCharacterMap = {
        \u00C5: "A",
        \u00C7: "C",
        \u00D0: "D",
        \u00DE: "o",
        \u00E5: "a",
        \u00E7: "c",
        \u00F0: "d",
        \u00FE: "o",
        \u0410: "A",
        \u0411: "B",
        \u0412: "B",
        \u0413: "F",
        \u0414: "A",
        \u0415: "E",
        \u0416: "K",
        \u0417: "3",
        \u0418: "N",
        \u0419: "N",
        \u041A: "K",
        \u041B: "N",
        \u041C: "M",
        \u041D: "H",
        \u041E: "O",
        \u041F: "N",
        \u0420: "P",
        \u0421: "C",
        \u0422: "T",
        \u0423: "y",
        \u0424: "O",
        \u0425: "X",
        \u0426: "U",
        \u0427: "h",
        \u0428: "W",
        \u0429: "W",
        \u042A: "B",
        \u042B: "X",
        \u042C: "B",
        \u042D: "3",
        \u042E: "X",
        \u042F: "R",
        \u0430: "a",
        \u0431: "b",
        \u0432: "a",
        \u0433: "r",
        \u0434: "y",
        \u0435: "e",
        \u0436: "m",
        \u0437: "e",
        \u0438: "n",
        \u0439: "n",
        \u043A: "n",
        \u043B: "n",
        \u043C: "m",
        \u043D: "n",
        \u043E: "o",
        \u043F: "n",
        \u0440: "p",
        \u0441: "c",
        \u0442: "o",
        \u0443: "y",
        \u0444: "b",
        \u0445: "x",
        \u0446: "n",
        \u0447: "n",
        \u0448: "w",
        \u0449: "w",
        \u044A: "a",
        \u044B: "m",
        \u044C: "a",
        \u044D: "e",
        \u044E: "m",
        \u044F: "r"
      };
      function setFontMetrics(fontName, metrics) {
        fontMetricsData[fontName] = metrics;
      }
      function getCharacterMetrics(character, font, mode) {
        if (!fontMetricsData[font]) {
          throw new Error("Font metrics not found for font: " + font + ".");
        }
        var ch2 = character.charCodeAt(0);
        var metrics = fontMetricsData[font][ch2];
        if (!metrics && character[0] in extraCharacterMap) {
          ch2 = extraCharacterMap[character[0]].charCodeAt(0);
          metrics = fontMetricsData[font][ch2];
        }
        if (!metrics && mode === "text") {
          if (supportedCodepoint(ch2)) {
            metrics = fontMetricsData[font][77];
          }
        }
        if (metrics) {
          return {
            depth: metrics[0],
            height: metrics[1],
            italic: metrics[2],
            skew: metrics[3],
            width: metrics[4]
          };
        }
      }
      var fontMetricsBySizeIndex = {};
      function getGlobalMetrics(size) {
        var sizeIndex;
        if (size >= 5) {
          sizeIndex = 0;
        } else if (size >= 3) {
          sizeIndex = 1;
        } else {
          sizeIndex = 2;
        }
        if (!fontMetricsBySizeIndex[sizeIndex]) {
          var metrics = fontMetricsBySizeIndex[sizeIndex] = {
            cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18
          };
          for (var key in sigmasAndXis) {
            if (sigmasAndXis.hasOwnProperty(key)) {
              metrics[key] = sigmasAndXis[key][sizeIndex];
            }
          }
        }
        return fontMetricsBySizeIndex[sizeIndex];
      }
      ;
      var ATOMS = {
        bin: 1,
        close: 1,
        inner: 1,
        open: 1,
        punct: 1,
        rel: 1
      };
      var NON_ATOMS = {
        "accent-token": 1,
        mathord: 1,
        "op-token": 1,
        spacing: 1,
        textord: 1
      };
      var symbols = {
        math: {},
        text: {}
      };
      var src_symbols = symbols;
      function defineSymbol(mode, font, group, replace, name, acceptUnicodeChar) {
        symbols[mode][name] = {
          font,
          group,
          replace
        };
        if (acceptUnicodeChar && replace) {
          symbols[mode][replace] = symbols[mode][name];
        }
      }
      var math = "math";
      var symbols_text = "text";
      var main = "main";
      var ams = "ams";
      var accent = "accent-token";
      var bin = "bin";
      var symbols_close = "close";
      var inner = "inner";
      var mathord = "mathord";
      var op = "op-token";
      var symbols_open = "open";
      var punct = "punct";
      var rel = "rel";
      var spacing = "spacing";
      var textord = "textord";
      defineSymbol(math, main, rel, "\u2261", "\\equiv", true);
      defineSymbol(math, main, rel, "\u227A", "\\prec", true);
      defineSymbol(math, main, rel, "\u227B", "\\succ", true);
      defineSymbol(math, main, rel, "\u223C", "\\sim", true);
      defineSymbol(math, main, rel, "\u22A5", "\\perp");
      defineSymbol(math, main, rel, "\u2AAF", "\\preceq", true);
      defineSymbol(math, main, rel, "\u2AB0", "\\succeq", true);
      defineSymbol(math, main, rel, "\u2243", "\\simeq", true);
      defineSymbol(math, main, rel, "\u2223", "\\mid", true);
      defineSymbol(math, main, rel, "\u226A", "\\ll", true);
      defineSymbol(math, main, rel, "\u226B", "\\gg", true);
      defineSymbol(math, main, rel, "\u224D", "\\asymp", true);
      defineSymbol(math, main, rel, "\u2225", "\\parallel");
      defineSymbol(math, main, rel, "\u22C8", "\\bowtie", true);
      defineSymbol(math, main, rel, "\u2323", "\\smile", true);
      defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq", true);
      defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq", true);
      defineSymbol(math, main, rel, "\u2250", "\\doteq", true);
      defineSymbol(math, main, rel, "\u2322", "\\frown", true);
      defineSymbol(math, main, rel, "\u220B", "\\ni", true);
      defineSymbol(math, main, rel, "\u221D", "\\propto", true);
      defineSymbol(math, main, rel, "\u22A2", "\\vdash", true);
      defineSymbol(math, main, rel, "\u22A3", "\\dashv", true);
      defineSymbol(math, main, rel, "\u220B", "\\owns");
      defineSymbol(math, main, punct, ".", "\\ldotp");
      defineSymbol(math, main, punct, "\u22C5", "\\cdotp");
      defineSymbol(math, main, textord, "#", "\\#");
      defineSymbol(symbols_text, main, textord, "#", "\\#");
      defineSymbol(math, main, textord, "&", "\\&");
      defineSymbol(symbols_text, main, textord, "&", "\\&");
      defineSymbol(math, main, textord, "\u2135", "\\aleph", true);
      defineSymbol(math, main, textord, "\u2200", "\\forall", true);
      defineSymbol(math, main, textord, "\u210F", "\\hbar", true);
      defineSymbol(math, main, textord, "\u2203", "\\exists", true);
      defineSymbol(math, main, textord, "\u2207", "\\nabla", true);
      defineSymbol(math, main, textord, "\u266D", "\\flat", true);
      defineSymbol(math, main, textord, "\u2113", "\\ell", true);
      defineSymbol(math, main, textord, "\u266E", "\\natural", true);
      defineSymbol(math, main, textord, "\u2663", "\\clubsuit", true);
      defineSymbol(math, main, textord, "\u2118", "\\wp", true);
      defineSymbol(math, main, textord, "\u266F", "\\sharp", true);
      defineSymbol(math, main, textord, "\u2662", "\\diamondsuit", true);
      defineSymbol(math, main, textord, "\u211C", "\\Re", true);
      defineSymbol(math, main, textord, "\u2661", "\\heartsuit", true);
      defineSymbol(math, main, textord, "\u2111", "\\Im", true);
      defineSymbol(math, main, textord, "\u2660", "\\spadesuit", true);
      defineSymbol(symbols_text, main, textord, "\xA7", "\\S", true);
      defineSymbol(symbols_text, main, textord, "\xB6", "\\P", true);
      defineSymbol(math, main, textord, "\u2020", "\\dag");
      defineSymbol(symbols_text, main, textord, "\u2020", "\\dag");
      defineSymbol(symbols_text, main, textord, "\u2020", "\\textdagger");
      defineSymbol(math, main, textord, "\u2021", "\\ddag");
      defineSymbol(symbols_text, main, textord, "\u2021", "\\ddag");
      defineSymbol(symbols_text, main, textord, "\u2021", "\\textdaggerdbl");
      defineSymbol(math, main, symbols_close, "\u23B1", "\\rmoustache", true);
      defineSymbol(math, main, symbols_open, "\u23B0", "\\lmoustache", true);
      defineSymbol(math, main, symbols_close, "\u27EF", "\\rgroup", true);
      defineSymbol(math, main, symbols_open, "\u27EE", "\\lgroup", true);
      defineSymbol(math, main, bin, "\u2213", "\\mp", true);
      defineSymbol(math, main, bin, "\u2296", "\\ominus", true);
      defineSymbol(math, main, bin, "\u228E", "\\uplus", true);
      defineSymbol(math, main, bin, "\u2293", "\\sqcap", true);
      defineSymbol(math, main, bin, "\u2217", "\\ast");
      defineSymbol(math, main, bin, "\u2294", "\\sqcup", true);
      defineSymbol(math, main, bin, "\u25EF", "\\bigcirc", true);
      defineSymbol(math, main, bin, "\u2219", "\\bullet");
      defineSymbol(math, main, bin, "\u2021", "\\ddagger");
      defineSymbol(math, main, bin, "\u2240", "\\wr", true);
      defineSymbol(math, main, bin, "\u2A3F", "\\amalg");
      defineSymbol(math, main, bin, "&", "\\And");
      defineSymbol(math, main, rel, "\u27F5", "\\longleftarrow", true);
      defineSymbol(math, main, rel, "\u21D0", "\\Leftarrow", true);
      defineSymbol(math, main, rel, "\u27F8", "\\Longleftarrow", true);
      defineSymbol(math, main, rel, "\u27F6", "\\longrightarrow", true);
      defineSymbol(math, main, rel, "\u21D2", "\\Rightarrow", true);
      defineSymbol(math, main, rel, "\u27F9", "\\Longrightarrow", true);
      defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow", true);
      defineSymbol(math, main, rel, "\u27F7", "\\longleftrightarrow", true);
      defineSymbol(math, main, rel, "\u21D4", "\\Leftrightarrow", true);
      defineSymbol(math, main, rel, "\u27FA", "\\Longleftrightarrow", true);
      defineSymbol(math, main, rel, "\u21A6", "\\mapsto", true);
      defineSymbol(math, main, rel, "\u27FC", "\\longmapsto", true);
      defineSymbol(math, main, rel, "\u2197", "\\nearrow", true);
      defineSymbol(math, main, rel, "\u21A9", "\\hookleftarrow", true);
      defineSymbol(math, main, rel, "\u21AA", "\\hookrightarrow", true);
      defineSymbol(math, main, rel, "\u2198", "\\searrow", true);
      defineSymbol(math, main, rel, "\u21BC", "\\leftharpoonup", true);
      defineSymbol(math, main, rel, "\u21C0", "\\rightharpoonup", true);
      defineSymbol(math, main, rel, "\u2199", "\\swarrow", true);
      defineSymbol(math, main, rel, "\u21BD", "\\leftharpoondown", true);
      defineSymbol(math, main, rel, "\u21C1", "\\rightharpoondown", true);
      defineSymbol(math, main, rel, "\u2196", "\\nwarrow", true);
      defineSymbol(math, main, rel, "\u21CC", "\\rightleftharpoons", true);
      defineSymbol(math, ams, rel, "\u226E", "\\nless", true);
      defineSymbol(math, ams, rel, "\uE010", "\\@nleqslant");
      defineSymbol(math, ams, rel, "\uE011", "\\@nleqq");
      defineSymbol(math, ams, rel, "\u2A87", "\\lneq", true);
      defineSymbol(math, ams, rel, "\u2268", "\\lneqq", true);
      defineSymbol(math, ams, rel, "\uE00C", "\\@lvertneqq");
      defineSymbol(math, ams, rel, "\u22E6", "\\lnsim", true);
      defineSymbol(math, ams, rel, "\u2A89", "\\lnapprox", true);
      defineSymbol(math, ams, rel, "\u2280", "\\nprec", true);
      defineSymbol(math, ams, rel, "\u22E0", "\\npreceq", true);
      defineSymbol(math, ams, rel, "\u22E8", "\\precnsim", true);
      defineSymbol(math, ams, rel, "\u2AB9", "\\precnapprox", true);
      defineSymbol(math, ams, rel, "\u2241", "\\nsim", true);
      defineSymbol(math, ams, rel, "\uE006", "\\@nshortmid");
      defineSymbol(math, ams, rel, "\u2224", "\\nmid", true);
      defineSymbol(math, ams, rel, "\u22AC", "\\nvdash", true);
      defineSymbol(math, ams, rel, "\u22AD", "\\nvDash", true);
      defineSymbol(math, ams, rel, "\u22EA", "\\ntriangleleft");
      defineSymbol(math, ams, rel, "\u22EC", "\\ntrianglelefteq", true);
      defineSymbol(math, ams, rel, "\u228A", "\\subsetneq", true);
      defineSymbol(math, ams, rel, "\uE01A", "\\@varsubsetneq");
      defineSymbol(math, ams, rel, "\u2ACB", "\\subsetneqq", true);
      defineSymbol(math, ams, rel, "\uE017", "\\@varsubsetneqq");
      defineSymbol(math, ams, rel, "\u226F", "\\ngtr", true);
      defineSymbol(math, ams, rel, "\uE00F", "\\@ngeqslant");
      defineSymbol(math, ams, rel, "\uE00E", "\\@ngeqq");
      defineSymbol(math, ams, rel, "\u2A88", "\\gneq", true);
      defineSymbol(math, ams, rel, "\u2269", "\\gneqq", true);
      defineSymbol(math, ams, rel, "\uE00D", "\\@gvertneqq");
      defineSymbol(math, ams, rel, "\u22E7", "\\gnsim", true);
      defineSymbol(math, ams, rel, "\u2A8A", "\\gnapprox", true);
      defineSymbol(math, ams, rel, "\u2281", "\\nsucc", true);
      defineSymbol(math, ams, rel, "\u22E1", "\\nsucceq", true);
      defineSymbol(math, ams, rel, "\u22E9", "\\succnsim", true);
      defineSymbol(math, ams, rel, "\u2ABA", "\\succnapprox", true);
      defineSymbol(math, ams, rel, "\u2246", "\\ncong", true);
      defineSymbol(math, ams, rel, "\uE007", "\\@nshortparallel");
      defineSymbol(math, ams, rel, "\u2226", "\\nparallel", true);
      defineSymbol(math, ams, rel, "\u22AF", "\\nVDash", true);
      defineSymbol(math, ams, rel, "\u22EB", "\\ntriangleright");
      defineSymbol(math, ams, rel, "\u22ED", "\\ntrianglerighteq", true);
      defineSymbol(math, ams, rel, "\uE018", "\\@nsupseteqq");
      defineSymbol(math, ams, rel, "\u228B", "\\supsetneq", true);
      defineSymbol(math, ams, rel, "\uE01B", "\\@varsupsetneq");
      defineSymbol(math, ams, rel, "\u2ACC", "\\supsetneqq", true);
      defineSymbol(math, ams, rel, "\uE019", "\\@varsupsetneqq");
      defineSymbol(math, ams, rel, "\u22AE", "\\nVdash", true);
      defineSymbol(math, ams, rel, "\u2AB5", "\\precneqq", true);
      defineSymbol(math, ams, rel, "\u2AB6", "\\succneqq", true);
      defineSymbol(math, ams, rel, "\uE016", "\\@nsubseteqq");
      defineSymbol(math, ams, bin, "\u22B4", "\\unlhd");
      defineSymbol(math, ams, bin, "\u22B5", "\\unrhd");
      defineSymbol(math, ams, rel, "\u219A", "\\nleftarrow", true);
      defineSymbol(math, ams, rel, "\u219B", "\\nrightarrow", true);
      defineSymbol(math, ams, rel, "\u21CD", "\\nLeftarrow", true);
      defineSymbol(math, ams, rel, "\u21CF", "\\nRightarrow", true);
      defineSymbol(math, ams, rel, "\u21AE", "\\nleftrightarrow", true);
      defineSymbol(math, ams, rel, "\u21CE", "\\nLeftrightarrow", true);
      defineSymbol(math, ams, rel, "\u25B3", "\\vartriangle");
      defineSymbol(math, ams, textord, "\u210F", "\\hslash");
      defineSymbol(math, ams, textord, "\u25BD", "\\triangledown");
      defineSymbol(math, ams, textord, "\u25CA", "\\lozenge");
      defineSymbol(math, ams, textord, "\u24C8", "\\circledS");
      defineSymbol(math, ams, textord, "\xAE", "\\circledR");
      defineSymbol(symbols_text, ams, textord, "\xAE", "\\circledR");
      defineSymbol(math, ams, textord, "\u2221", "\\measuredangle", true);
      defineSymbol(math, ams, textord, "\u2204", "\\nexists");
      defineSymbol(math, ams, textord, "\u2127", "\\mho");
      defineSymbol(math, ams, textord, "\u2132", "\\Finv", true);
      defineSymbol(math, ams, textord, "\u2141", "\\Game", true);
      defineSymbol(math, ams, textord, "\u2035", "\\backprime");
      defineSymbol(math, ams, textord, "\u25B2", "\\blacktriangle");
      defineSymbol(math, ams, textord, "\u25BC", "\\blacktriangledown");
      defineSymbol(math, ams, textord, "\u25A0", "\\blacksquare");
      defineSymbol(math, ams, textord, "\u29EB", "\\blacklozenge");
      defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
      defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle", true);
      defineSymbol(math, ams, textord, "\u2201", "\\complement", true);
      defineSymbol(math, ams, textord, "\xF0", "\\eth", true);
      defineSymbol(symbols_text, main, textord, "\xF0", "\xF0");
      defineSymbol(math, ams, textord, "\u2571", "\\diagup");
      defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
      defineSymbol(math, ams, textord, "\u25A1", "\\square");
      defineSymbol(math, ams, textord, "\u25A1", "\\Box");
      defineSymbol(math, ams, textord, "\u25CA", "\\Diamond");
      defineSymbol(math, ams, textord, "\xA5", "\\yen", true);
      defineSymbol(symbols_text, ams, textord, "\xA5", "\\yen", true);
      defineSymbol(math, ams, textord, "\u2713", "\\checkmark", true);
      defineSymbol(symbols_text, ams, textord, "\u2713", "\\checkmark");
      defineSymbol(math, ams, textord, "\u2136", "\\beth", true);
      defineSymbol(math, ams, textord, "\u2138", "\\daleth", true);
      defineSymbol(math, ams, textord, "\u2137", "\\gimel", true);
      defineSymbol(math, ams, textord, "\u03DD", "\\digamma", true);
      defineSymbol(math, ams, textord, "\u03F0", "\\varkappa");
      defineSymbol(math, ams, symbols_open, "\u250C", "\\@ulcorner", true);
      defineSymbol(math, ams, symbols_close, "\u2510", "\\@urcorner", true);
      defineSymbol(math, ams, symbols_open, "\u2514", "\\@llcorner", true);
      defineSymbol(math, ams, symbols_close, "\u2518", "\\@lrcorner", true);
      defineSymbol(math, ams, rel, "\u2266", "\\leqq", true);
      defineSymbol(math, ams, rel, "\u2A7D", "\\leqslant", true);
      defineSymbol(math, ams, rel, "\u2A95", "\\eqslantless", true);
      defineSymbol(math, ams, rel, "\u2272", "\\lesssim", true);
      defineSymbol(math, ams, rel, "\u2A85", "\\lessapprox", true);
      defineSymbol(math, ams, rel, "\u224A", "\\approxeq", true);
      defineSymbol(math, ams, bin, "\u22D6", "\\lessdot");
      defineSymbol(math, ams, rel, "\u22D8", "\\lll", true);
      defineSymbol(math, ams, rel, "\u2276", "\\lessgtr", true);
      defineSymbol(math, ams, rel, "\u22DA", "\\lesseqgtr", true);
      defineSymbol(math, ams, rel, "\u2A8B", "\\lesseqqgtr", true);
      defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
      defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq", true);
      defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq", true);
      defineSymbol(math, ams, rel, "\u223D", "\\backsim", true);
      defineSymbol(math, ams, rel, "\u22CD", "\\backsimeq", true);
      defineSymbol(math, ams, rel, "\u2AC5", "\\subseteqq", true);
      defineSymbol(math, ams, rel, "\u22D0", "\\Subset", true);
      defineSymbol(math, ams, rel, "\u228F", "\\sqsubset", true);
      defineSymbol(math, ams, rel, "\u227C", "\\preccurlyeq", true);
      defineSymbol(math, ams, rel, "\u22DE", "\\curlyeqprec", true);
      defineSymbol(math, ams, rel, "\u227E", "\\precsim", true);
      defineSymbol(math, ams, rel, "\u2AB7", "\\precapprox", true);
      defineSymbol(math, ams, rel, "\u22B2", "\\vartriangleleft");
      defineSymbol(math, ams, rel, "\u22B4", "\\trianglelefteq");
      defineSymbol(math, ams, rel, "\u22A8", "\\vDash", true);
      defineSymbol(math, ams, rel, "\u22AA", "\\Vvdash", true);
      defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
      defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
      defineSymbol(math, ams, rel, "\u224F", "\\bumpeq", true);
      defineSymbol(math, ams, rel, "\u224E", "\\Bumpeq", true);
      defineSymbol(math, ams, rel, "\u2267", "\\geqq", true);
      defineSymbol(math, ams, rel, "\u2A7E", "\\geqslant", true);
      defineSymbol(math, ams, rel, "\u2A96", "\\eqslantgtr", true);
      defineSymbol(math, ams, rel, "\u2273", "\\gtrsim", true);
      defineSymbol(math, ams, rel, "\u2A86", "\\gtrapprox", true);
      defineSymbol(math, ams, bin, "\u22D7", "\\gtrdot");
      defineSymbol(math, ams, rel, "\u22D9", "\\ggg", true);
      defineSymbol(math, ams, rel, "\u2277", "\\gtrless", true);
      defineSymbol(math, ams, rel, "\u22DB", "\\gtreqless", true);
      defineSymbol(math, ams, rel, "\u2A8C", "\\gtreqqless", true);
      defineSymbol(math, ams, rel, "\u2256", "\\eqcirc", true);
      defineSymbol(math, ams, rel, "\u2257", "\\circeq", true);
      defineSymbol(math, ams, rel, "\u225C", "\\triangleq", true);
      defineSymbol(math, ams, rel, "\u223C", "\\thicksim");
      defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
      defineSymbol(math, ams, rel, "\u2AC6", "\\supseteqq", true);
      defineSymbol(math, ams, rel, "\u22D1", "\\Supset", true);
      defineSymbol(math, ams, rel, "\u2290", "\\sqsupset", true);
      defineSymbol(math, ams, rel, "\u227D", "\\succcurlyeq", true);
      defineSymbol(math, ams, rel, "\u22DF", "\\curlyeqsucc", true);
      defineSymbol(math, ams, rel, "\u227F", "\\succsim", true);
      defineSymbol(math, ams, rel, "\u2AB8", "\\succapprox", true);
      defineSymbol(math, ams, rel, "\u22B3", "\\vartriangleright");
      defineSymbol(math, ams, rel, "\u22B5", "\\trianglerighteq");
      defineSymbol(math, ams, rel, "\u22A9", "\\Vdash", true);
      defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
      defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
      defineSymbol(math, ams, rel, "\u226C", "\\between", true);
      defineSymbol(math, ams, rel, "\u22D4", "\\pitchfork", true);
      defineSymbol(math, ams, rel, "\u221D", "\\varpropto");
      defineSymbol(math, ams, rel, "\u25C0", "\\blacktriangleleft");
      defineSymbol(math, ams, rel, "\u2234", "\\therefore", true);
      defineSymbol(math, ams, rel, "\u220D", "\\backepsilon");
      defineSymbol(math, ams, rel, "\u25B6", "\\blacktriangleright");
      defineSymbol(math, ams, rel, "\u2235", "\\because", true);
      defineSymbol(math, ams, rel, "\u22D8", "\\llless");
      defineSymbol(math, ams, rel, "\u22D9", "\\gggtr");
      defineSymbol(math, ams, bin, "\u22B2", "\\lhd");
      defineSymbol(math, ams, bin, "\u22B3", "\\rhd");
      defineSymbol(math, ams, rel, "\u2242", "\\eqsim", true);
      defineSymbol(math, main, rel, "\u22C8", "\\Join");
      defineSymbol(math, ams, rel, "\u2251", "\\Doteq", true);
      defineSymbol(math, ams, bin, "\u2214", "\\dotplus", true);
      defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
      defineSymbol(math, ams, bin, "\u22D2", "\\Cap", true);
      defineSymbol(math, ams, bin, "\u22D3", "\\Cup", true);
      defineSymbol(math, ams, bin, "\u2A5E", "\\doublebarwedge", true);
      defineSymbol(math, ams, bin, "\u229F", "\\boxminus", true);
      defineSymbol(math, ams, bin, "\u229E", "\\boxplus", true);
      defineSymbol(math, ams, bin, "\u22C7", "\\divideontimes", true);
      defineSymbol(math, ams, bin, "\u22C9", "\\ltimes", true);
      defineSymbol(math, ams, bin, "\u22CA", "\\rtimes", true);
      defineSymbol(math, ams, bin, "\u22CB", "\\leftthreetimes", true);
      defineSymbol(math, ams, bin, "\u22CC", "\\rightthreetimes", true);
      defineSymbol(math, ams, bin, "\u22CF", "\\curlywedge", true);
      defineSymbol(math, ams, bin, "\u22CE", "\\curlyvee", true);
      defineSymbol(math, ams, bin, "\u229D", "\\circleddash", true);
      defineSymbol(math, ams, bin, "\u229B", "\\circledast", true);
      defineSymbol(math, ams, bin, "\u22C5", "\\centerdot");
      defineSymbol(math, ams, bin, "\u22BA", "\\intercal", true);
      defineSymbol(math, ams, bin, "\u22D2", "\\doublecap");
      defineSymbol(math, ams, bin, "\u22D3", "\\doublecup");
      defineSymbol(math, ams, bin, "\u22A0", "\\boxtimes", true);
      defineSymbol(math, ams, rel, "\u21E2", "\\dashrightarrow", true);
      defineSymbol(math, ams, rel, "\u21E0", "\\dashleftarrow", true);
      defineSymbol(math, ams, rel, "\u21C7", "\\leftleftarrows", true);
      defineSymbol(math, ams, rel, "\u21C6", "\\leftrightarrows", true);
      defineSymbol(math, ams, rel, "\u21DA", "\\Lleftarrow", true);
      defineSymbol(math, ams, rel, "\u219E", "\\twoheadleftarrow", true);
      defineSymbol(math, ams, rel, "\u21A2", "\\leftarrowtail", true);
      defineSymbol(math, ams, rel, "\u21AB", "\\looparrowleft", true);
      defineSymbol(math, ams, rel, "\u21CB", "\\leftrightharpoons", true);
      defineSymbol(math, ams, rel, "\u21B6", "\\curvearrowleft", true);
      defineSymbol(math, ams, rel, "\u21BA", "\\circlearrowleft", true);
      defineSymbol(math, ams, rel, "\u21B0", "\\Lsh", true);
      defineSymbol(math, ams, rel, "\u21C8", "\\upuparrows", true);
      defineSymbol(math, ams, rel, "\u21BF", "\\upharpoonleft", true);
      defineSymbol(math, ams, rel, "\u21C3", "\\downharpoonleft", true);
      defineSymbol(math, main, rel, "\u22B6", "\\origof", true);
      defineSymbol(math, main, rel, "\u22B7", "\\imageof", true);
      defineSymbol(math, ams, rel, "\u22B8", "\\multimap", true);
      defineSymbol(math, ams, rel, "\u21AD", "\\leftrightsquigarrow", true);
      defineSymbol(math, ams, rel, "\u21C9", "\\rightrightarrows", true);
      defineSymbol(math, ams, rel, "\u21C4", "\\rightleftarrows", true);
      defineSymbol(math, ams, rel, "\u21A0", "\\twoheadrightarrow", true);
      defineSymbol(math, ams, rel, "\u21A3", "\\rightarrowtail", true);
      defineSymbol(math, ams, rel, "\u21AC", "\\looparrowright", true);
      defineSymbol(math, ams, rel, "\u21B7", "\\curvearrowright", true);
      defineSymbol(math, ams, rel, "\u21BB", "\\circlearrowright", true);
      defineSymbol(math, ams, rel, "\u21B1", "\\Rsh", true);
      defineSymbol(math, ams, rel, "\u21CA", "\\downdownarrows", true);
      defineSymbol(math, ams, rel, "\u21BE", "\\upharpoonright", true);
      defineSymbol(math, ams, rel, "\u21C2", "\\downharpoonright", true);
      defineSymbol(math, ams, rel, "\u21DD", "\\rightsquigarrow", true);
      defineSymbol(math, ams, rel, "\u21DD", "\\leadsto");
      defineSymbol(math, ams, rel, "\u21DB", "\\Rrightarrow", true);
      defineSymbol(math, ams, rel, "\u21BE", "\\restriction");
      defineSymbol(math, main, textord, "\u2018", "`");
      defineSymbol(math, main, textord, "$", "\\$");
      defineSymbol(symbols_text, main, textord, "$", "\\$");
      defineSymbol(symbols_text, main, textord, "$", "\\textdollar");
      defineSymbol(math, main, textord, "%", "\\%");
      defineSymbol(symbols_text, main, textord, "%", "\\%");
      defineSymbol(math, main, textord, "_", "\\_");
      defineSymbol(symbols_text, main, textord, "_", "\\_");
      defineSymbol(symbols_text, main, textord, "_", "\\textunderscore");
      defineSymbol(math, main, textord, "\u2220", "\\angle", true);
      defineSymbol(math, main, textord, "\u221E", "\\infty", true);
      defineSymbol(math, main, textord, "\u2032", "\\prime");
      defineSymbol(math, main, textord, "\u25B3", "\\triangle");
      defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
      defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
      defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
      defineSymbol(math, main, textord, "\u039B", "\\Lambda", true);
      defineSymbol(math, main, textord, "\u039E", "\\Xi", true);
      defineSymbol(math, main, textord, "\u03A0", "\\Pi", true);
      defineSymbol(math, main, textord, "\u03A3", "\\Sigma", true);
      defineSymbol(math, main, textord, "\u03A5", "\\Upsilon", true);
      defineSymbol(math, main, textord, "\u03A6", "\\Phi", true);
      defineSymbol(math, main, textord, "\u03A8", "\\Psi", true);
      defineSymbol(math, main, textord, "\u03A9", "\\Omega", true);
      defineSymbol(math, main, textord, "A", "\u0391");
      defineSymbol(math, main, textord, "B", "\u0392");
      defineSymbol(math, main, textord, "E", "\u0395");
      defineSymbol(math, main, textord, "Z", "\u0396");
      defineSymbol(math, main, textord, "H", "\u0397");
      defineSymbol(math, main, textord, "I", "\u0399");
      defineSymbol(math, main, textord, "K", "\u039A");
      defineSymbol(math, main, textord, "M", "\u039C");
      defineSymbol(math, main, textord, "N", "\u039D");
      defineSymbol(math, main, textord, "O", "\u039F");
      defineSymbol(math, main, textord, "P", "\u03A1");
      defineSymbol(math, main, textord, "T", "\u03A4");
      defineSymbol(math, main, textord, "X", "\u03A7");
      defineSymbol(math, main, textord, "\xAC", "\\neg", true);
      defineSymbol(math, main, textord, "\xAC", "\\lnot");
      defineSymbol(math, main, textord, "\u22A4", "\\top");
      defineSymbol(math, main, textord, "\u22A5", "\\bot");
      defineSymbol(math, main, textord, "\u2205", "\\emptyset");
      defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
      defineSymbol(math, main, mathord, "\u03B1", "\\alpha", true);
      defineSymbol(math, main, mathord, "\u03B2", "\\beta", true);
      defineSymbol(math, main, mathord, "\u03B3", "\\gamma", true);
      defineSymbol(math, main, mathord, "\u03B4", "\\delta", true);
      defineSymbol(math, main, mathord, "\u03F5", "\\epsilon", true);
      defineSymbol(math, main, mathord, "\u03B6", "\\zeta", true);
      defineSymbol(math, main, mathord, "\u03B7", "\\eta", true);
      defineSymbol(math, main, mathord, "\u03B8", "\\theta", true);
      defineSymbol(math, main, mathord, "\u03B9", "\\iota", true);
      defineSymbol(math, main, mathord, "\u03BA", "\\kappa", true);
      defineSymbol(math, main, mathord, "\u03BB", "\\lambda", true);
      defineSymbol(math, main, mathord, "\u03BC", "\\mu", true);
      defineSymbol(math, main, mathord, "\u03BD", "\\nu", true);
      defineSymbol(math, main, mathord, "\u03BE", "\\xi", true);
      defineSymbol(math, main, mathord, "\u03BF", "\\omicron", true);
      defineSymbol(math, main, mathord, "\u03C0", "\\pi", true);
      defineSymbol(math, main, mathord, "\u03C1", "\\rho", true);
      defineSymbol(math, main, mathord, "\u03C3", "\\sigma", true);
      defineSymbol(math, main, mathord, "\u03C4", "\\tau", true);
      defineSymbol(math, main, mathord, "\u03C5", "\\upsilon", true);
      defineSymbol(math, main, mathord, "\u03D5", "\\phi", true);
      defineSymbol(math, main, mathord, "\u03C7", "\\chi", true);
      defineSymbol(math, main, mathord, "\u03C8", "\\psi", true);
      defineSymbol(math, main, mathord, "\u03C9", "\\omega", true);
      defineSymbol(math, main, mathord, "\u03B5", "\\varepsilon", true);
      defineSymbol(math, main, mathord, "\u03D1", "\\vartheta", true);
      defineSymbol(math, main, mathord, "\u03D6", "\\varpi", true);
      defineSymbol(math, main, mathord, "\u03F1", "\\varrho", true);
      defineSymbol(math, main, mathord, "\u03C2", "\\varsigma", true);
      defineSymbol(math, main, mathord, "\u03C6", "\\varphi", true);
      defineSymbol(math, main, bin, "\u2217", "*");
      defineSymbol(math, main, bin, "+", "+");
      defineSymbol(math, main, bin, "\u2212", "-");
      defineSymbol(math, main, bin, "\u22C5", "\\cdot", true);
      defineSymbol(math, main, bin, "\u2218", "\\circ");
      defineSymbol(math, main, bin, "\xF7", "\\div", true);
      defineSymbol(math, main, bin, "\xB1", "\\pm", true);
      defineSymbol(math, main, bin, "\xD7", "\\times", true);
      defineSymbol(math, main, bin, "\u2229", "\\cap", true);
      defineSymbol(math, main, bin, "\u222A", "\\cup", true);
      defineSymbol(math, main, bin, "\u2216", "\\setminus");
      defineSymbol(math, main, bin, "\u2227", "\\land");
      defineSymbol(math, main, bin, "\u2228", "\\lor");
      defineSymbol(math, main, bin, "\u2227", "\\wedge", true);
      defineSymbol(math, main, bin, "\u2228", "\\vee", true);
      defineSymbol(math, main, textord, "\u221A", "\\surd");
      defineSymbol(math, main, symbols_open, "\u27E8", "\\langle", true);
      defineSymbol(math, main, symbols_open, "\u2223", "\\lvert");
      defineSymbol(math, main, symbols_open, "\u2225", "\\lVert");
      defineSymbol(math, main, symbols_close, "?", "?");
      defineSymbol(math, main, symbols_close, "!", "!");
      defineSymbol(math, main, symbols_close, "\u27E9", "\\rangle", true);
      defineSymbol(math, main, symbols_close, "\u2223", "\\rvert");
      defineSymbol(math, main, symbols_close, "\u2225", "\\rVert");
      defineSymbol(math, main, rel, "=", "=");
      defineSymbol(math, main, rel, ":", ":");
      defineSymbol(math, main, rel, "\u2248", "\\approx", true);
      defineSymbol(math, main, rel, "\u2245", "\\cong", true);
      defineSymbol(math, main, rel, "\u2265", "\\ge");
      defineSymbol(math, main, rel, "\u2265", "\\geq", true);
      defineSymbol(math, main, rel, "\u2190", "\\gets");
      defineSymbol(math, main, rel, ">", "\\gt", true);
      defineSymbol(math, main, rel, "\u2208", "\\in", true);
      defineSymbol(math, main, rel, "\uE020", "\\@not");
      defineSymbol(math, main, rel, "\u2282", "\\subset", true);
      defineSymbol(math, main, rel, "\u2283", "\\supset", true);
      defineSymbol(math, main, rel, "\u2286", "\\subseteq", true);
      defineSymbol(math, main, rel, "\u2287", "\\supseteq", true);
      defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq", true);
      defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq", true);
      defineSymbol(math, main, rel, "\u22A8", "\\models");
      defineSymbol(math, main, rel, "\u2190", "\\leftarrow", true);
      defineSymbol(math, main, rel, "\u2264", "\\le");
      defineSymbol(math, main, rel, "\u2264", "\\leq", true);
      defineSymbol(math, main, rel, "<", "\\lt", true);
      defineSymbol(math, main, rel, "\u2192", "\\rightarrow", true);
      defineSymbol(math, main, rel, "\u2192", "\\to");
      defineSymbol(math, ams, rel, "\u2271", "\\ngeq", true);
      defineSymbol(math, ams, rel, "\u2270", "\\nleq", true);
      defineSymbol(math, main, spacing, "\xA0", "\\ ");
      defineSymbol(math, main, spacing, "\xA0", "\\space");
      defineSymbol(math, main, spacing, "\xA0", "\\nobreakspace");
      defineSymbol(symbols_text, main, spacing, "\xA0", "\\ ");
      defineSymbol(symbols_text, main, spacing, "\xA0", " ");
      defineSymbol(symbols_text, main, spacing, "\xA0", "\\space");
      defineSymbol(symbols_text, main, spacing, "\xA0", "\\nobreakspace");
      defineSymbol(math, main, spacing, null, "\\nobreak");
      defineSymbol(math, main, spacing, null, "\\allowbreak");
      defineSymbol(math, main, punct, ",", ",");
      defineSymbol(math, main, punct, ";", ";");
      defineSymbol(math, ams, bin, "\u22BC", "\\barwedge", true);
      defineSymbol(math, ams, bin, "\u22BB", "\\veebar", true);
      defineSymbol(math, main, bin, "\u2299", "\\odot", true);
      defineSymbol(math, main, bin, "\u2295", "\\oplus", true);
      defineSymbol(math, main, bin, "\u2297", "\\otimes", true);
      defineSymbol(math, main, textord, "\u2202", "\\partial", true);
      defineSymbol(math, main, bin, "\u2298", "\\oslash", true);
      defineSymbol(math, ams, bin, "\u229A", "\\circledcirc", true);
      defineSymbol(math, ams, bin, "\u22A1", "\\boxdot", true);
      defineSymbol(math, main, bin, "\u25B3", "\\bigtriangleup");
      defineSymbol(math, main, bin, "\u25BD", "\\bigtriangledown");
      defineSymbol(math, main, bin, "\u2020", "\\dagger");
      defineSymbol(math, main, bin, "\u22C4", "\\diamond");
      defineSymbol(math, main, bin, "\u22C6", "\\star");
      defineSymbol(math, main, bin, "\u25C3", "\\triangleleft");
      defineSymbol(math, main, bin, "\u25B9", "\\triangleright");
      defineSymbol(math, main, symbols_open, "{", "\\{");
      defineSymbol(symbols_text, main, textord, "{", "\\{");
      defineSymbol(symbols_text, main, textord, "{", "\\textbraceleft");
      defineSymbol(math, main, symbols_close, "}", "\\}");
      defineSymbol(symbols_text, main, textord, "}", "\\}");
      defineSymbol(symbols_text, main, textord, "}", "\\textbraceright");
      defineSymbol(math, main, symbols_open, "{", "\\lbrace");
      defineSymbol(math, main, symbols_close, "}", "\\rbrace");
      defineSymbol(math, main, symbols_open, "[", "\\lbrack", true);
      defineSymbol(symbols_text, main, textord, "[", "\\lbrack", true);
      defineSymbol(math, main, symbols_close, "]", "\\rbrack", true);
      defineSymbol(symbols_text, main, textord, "]", "\\rbrack", true);
      defineSymbol(math, main, symbols_open, "(", "\\lparen", true);
      defineSymbol(math, main, symbols_close, ")", "\\rparen", true);
      defineSymbol(symbols_text, main, textord, "<", "\\textless", true);
      defineSymbol(symbols_text, main, textord, ">", "\\textgreater", true);
      defineSymbol(math, main, symbols_open, "\u230A", "\\lfloor", true);
      defineSymbol(math, main, symbols_close, "\u230B", "\\rfloor", true);
      defineSymbol(math, main, symbols_open, "\u2308", "\\lceil", true);
      defineSymbol(math, main, symbols_close, "\u2309", "\\rceil", true);
      defineSymbol(math, main, textord, "\\", "\\backslash");
      defineSymbol(math, main, textord, "\u2223", "|");
      defineSymbol(math, main, textord, "\u2223", "\\vert");
      defineSymbol(symbols_text, main, textord, "|", "\\textbar", true);
      defineSymbol(math, main, textord, "\u2225", "\\|");
      defineSymbol(math, main, textord, "\u2225", "\\Vert");
      defineSymbol(symbols_text, main, textord, "\u2225", "\\textbardbl");
      defineSymbol(symbols_text, main, textord, "~", "\\textasciitilde");
      defineSymbol(symbols_text, main, textord, "\\", "\\textbackslash");
      defineSymbol(symbols_text, main, textord, "^", "\\textasciicircum");
      defineSymbol(math, main, rel, "\u2191", "\\uparrow", true);
      defineSymbol(math, main, rel, "\u21D1", "\\Uparrow", true);
      defineSymbol(math, main, rel, "\u2193", "\\downarrow", true);
      defineSymbol(math, main, rel, "\u21D3", "\\Downarrow", true);
      defineSymbol(math, main, rel, "\u2195", "\\updownarrow", true);
      defineSymbol(math, main, rel, "\u21D5", "\\Updownarrow", true);
      defineSymbol(math, main, op, "\u2210", "\\coprod");
      defineSymbol(math, main, op, "\u22C1", "\\bigvee");
      defineSymbol(math, main, op, "\u22C0", "\\bigwedge");
      defineSymbol(math, main, op, "\u2A04", "\\biguplus");
      defineSymbol(math, main, op, "\u22C2", "\\bigcap");
      defineSymbol(math, main, op, "\u22C3", "\\bigcup");
      defineSymbol(math, main, op, "\u222B", "\\int");
      defineSymbol(math, main, op, "\u222B", "\\intop");
      defineSymbol(math, main, op, "\u222C", "\\iint");
      defineSymbol(math, main, op, "\u222D", "\\iiint");
      defineSymbol(math, main, op, "\u220F", "\\prod");
      defineSymbol(math, main, op, "\u2211", "\\sum");
      defineSymbol(math, main, op, "\u2A02", "\\bigotimes");
      defineSymbol(math, main, op, "\u2A01", "\\bigoplus");
      defineSymbol(math, main, op, "\u2A00", "\\bigodot");
      defineSymbol(math, main, op, "\u222E", "\\oint");
      defineSymbol(math, main, op, "\u222F", "\\oiint");
      defineSymbol(math, main, op, "\u2230", "\\oiiint");
      defineSymbol(math, main, op, "\u2A06", "\\bigsqcup");
      defineSymbol(math, main, op, "\u222B", "\\smallint");
      defineSymbol(symbols_text, main, inner, "\u2026", "\\textellipsis");
      defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
      defineSymbol(symbols_text, main, inner, "\u2026", "\\ldots", true);
      defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
      defineSymbol(math, main, inner, "\u22EF", "\\@cdots", true);
      defineSymbol(math, main, inner, "\u22F1", "\\ddots", true);
      defineSymbol(math, main, textord, "\u22EE", "\\varvdots");
      defineSymbol(math, main, accent, "\u02CA", "\\acute");
      defineSymbol(math, main, accent, "\u02CB", "\\grave");
      defineSymbol(math, main, accent, "\xA8", "\\ddot");
      defineSymbol(math, main, accent, "~", "\\tilde");
      defineSymbol(math, main, accent, "\u02C9", "\\bar");
      defineSymbol(math, main, accent, "\u02D8", "\\breve");
      defineSymbol(math, main, accent, "\u02C7", "\\check");
      defineSymbol(math, main, accent, "^", "\\hat");
      defineSymbol(math, main, accent, "\u20D7", "\\vec");
      defineSymbol(math, main, accent, "\u02D9", "\\dot");
      defineSymbol(math, main, accent, "\u02DA", "\\mathring");
      defineSymbol(math, main, mathord, "\uE131", "\\@imath");
      defineSymbol(math, main, mathord, "\uE237", "\\@jmath");
      defineSymbol(math, main, textord, "\u0131", "\u0131");
      defineSymbol(math, main, textord, "\u0237", "\u0237");
      defineSymbol(symbols_text, main, textord, "\u0131", "\\i", true);
      defineSymbol(symbols_text, main, textord, "\u0237", "\\j", true);
      defineSymbol(symbols_text, main, textord, "\xDF", "\\ss", true);
      defineSymbol(symbols_text, main, textord, "\xE6", "\\ae", true);
      defineSymbol(symbols_text, main, textord, "\u0153", "\\oe", true);
      defineSymbol(symbols_text, main, textord, "\xF8", "\\o", true);
      defineSymbol(symbols_text, main, textord, "\xC6", "\\AE", true);
      defineSymbol(symbols_text, main, textord, "\u0152", "\\OE", true);
      defineSymbol(symbols_text, main, textord, "\xD8", "\\O", true);
      defineSymbol(symbols_text, main, accent, "\u02CA", "\\'");
      defineSymbol(symbols_text, main, accent, "\u02CB", "\\`");
      defineSymbol(symbols_text, main, accent, "\u02C6", "\\^");
      defineSymbol(symbols_text, main, accent, "\u02DC", "\\~");
      defineSymbol(symbols_text, main, accent, "\u02C9", "\\=");
      defineSymbol(symbols_text, main, accent, "\u02D8", "\\u");
      defineSymbol(symbols_text, main, accent, "\u02D9", "\\.");
      defineSymbol(symbols_text, main, accent, "\u02DA", "\\r");
      defineSymbol(symbols_text, main, accent, "\u02C7", "\\v");
      defineSymbol(symbols_text, main, accent, "\xA8", '\\"');
      defineSymbol(symbols_text, main, accent, "\u02DD", "\\H");
      defineSymbol(symbols_text, main, accent, "\u25EF", "\\textcircled");
      var ligatures = {
        "--": true,
        "---": true,
        "``": true,
        "''": true
      };
      defineSymbol(symbols_text, main, textord, "\u2013", "--", true);
      defineSymbol(symbols_text, main, textord, "\u2013", "\\textendash");
      defineSymbol(symbols_text, main, textord, "\u2014", "---", true);
      defineSymbol(symbols_text, main, textord, "\u2014", "\\textemdash");
      defineSymbol(symbols_text, main, textord, "\u2018", "`", true);
      defineSymbol(symbols_text, main, textord, "\u2018", "\\textquoteleft");
      defineSymbol(symbols_text, main, textord, "\u2019", "'", true);
      defineSymbol(symbols_text, main, textord, "\u2019", "\\textquoteright");
      defineSymbol(symbols_text, main, textord, "\u201C", "``", true);
      defineSymbol(symbols_text, main, textord, "\u201C", "\\textquotedblleft");
      defineSymbol(symbols_text, main, textord, "\u201D", "''", true);
      defineSymbol(symbols_text, main, textord, "\u201D", "\\textquotedblright");
      defineSymbol(math, main, textord, "\xB0", "\\degree", true);
      defineSymbol(symbols_text, main, textord, "\xB0", "\\degree");
      defineSymbol(symbols_text, main, textord, "\xB0", "\\textdegree", true);
      defineSymbol(math, main, textord, "\xA3", "\\pounds");
      defineSymbol(math, main, textord, "\xA3", "\\mathsterling", true);
      defineSymbol(symbols_text, main, textord, "\xA3", "\\pounds");
      defineSymbol(symbols_text, main, textord, "\xA3", "\\textsterling", true);
      defineSymbol(math, ams, textord, "\u2720", "\\maltese");
      defineSymbol(symbols_text, ams, textord, "\u2720", "\\maltese");
      var mathTextSymbols = '0123456789/@."';
      for (var i = 0; i < mathTextSymbols.length; i++) {
        var ch = mathTextSymbols.charAt(i);
        defineSymbol(math, main, textord, ch, ch);
      }
      var textSymbols = '0123456789!@*()-=+";:?/.,';
      for (var _i = 0; _i < textSymbols.length; _i++) {
        var _ch = textSymbols.charAt(_i);
        defineSymbol(symbols_text, main, textord, _ch, _ch);
      }
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var _i2 = 0; _i2 < letters.length; _i2++) {
        var _ch2 = letters.charAt(_i2);
        defineSymbol(math, main, mathord, _ch2, _ch2);
        defineSymbol(symbols_text, main, textord, _ch2, _ch2);
      }
      defineSymbol(math, ams, textord, "C", "\u2102");
      defineSymbol(symbols_text, ams, textord, "C", "\u2102");
      defineSymbol(math, ams, textord, "H", "\u210D");
      defineSymbol(symbols_text, ams, textord, "H", "\u210D");
      defineSymbol(math, ams, textord, "N", "\u2115");
      defineSymbol(symbols_text, ams, textord, "N", "\u2115");
      defineSymbol(math, ams, textord, "P", "\u2119");
      defineSymbol(symbols_text, ams, textord, "P", "\u2119");
      defineSymbol(math, ams, textord, "Q", "\u211A");
      defineSymbol(symbols_text, ams, textord, "Q", "\u211A");
      defineSymbol(math, ams, textord, "R", "\u211D");
      defineSymbol(symbols_text, ams, textord, "R", "\u211D");
      defineSymbol(math, ams, textord, "Z", "\u2124");
      defineSymbol(symbols_text, ams, textord, "Z", "\u2124");
      defineSymbol(math, main, mathord, "h", "\u210E");
      defineSymbol(symbols_text, main, mathord, "h", "\u210E");
      var wideChar = "";
      for (var _i3 = 0; _i3 < letters.length; _i3++) {
        var _ch3 = letters.charAt(_i3);
        wideChar = String.fromCharCode(55349, 56320 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56372 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56424 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56580 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56736 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56788 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56840 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        wideChar = String.fromCharCode(55349, 56944 + _i3);
        defineSymbol(math, main, mathord, _ch3, wideChar);
        defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        if (_i3 < 26) {
          wideChar = String.fromCharCode(55349, 56632 + _i3);
          defineSymbol(math, main, mathord, _ch3, wideChar);
          defineSymbol(symbols_text, main, textord, _ch3, wideChar);
          wideChar = String.fromCharCode(55349, 56476 + _i3);
          defineSymbol(math, main, mathord, _ch3, wideChar);
          defineSymbol(symbols_text, main, textord, _ch3, wideChar);
        }
      }
      wideChar = String.fromCharCode(55349, 56668);
      defineSymbol(math, main, mathord, "k", wideChar);
      defineSymbol(symbols_text, main, textord, "k", wideChar);
      for (var _i4 = 0; _i4 < 10; _i4++) {
        var _ch4 = _i4.toString();
        wideChar = String.fromCharCode(55349, 57294 + _i4);
        defineSymbol(math, main, mathord, _ch4, wideChar);
        defineSymbol(symbols_text, main, textord, _ch4, wideChar);
        wideChar = String.fromCharCode(55349, 57314 + _i4);
        defineSymbol(math, main, mathord, _ch4, wideChar);
        defineSymbol(symbols_text, main, textord, _ch4, wideChar);
        wideChar = String.fromCharCode(55349, 57324 + _i4);
        defineSymbol(math, main, mathord, _ch4, wideChar);
        defineSymbol(symbols_text, main, textord, _ch4, wideChar);
        wideChar = String.fromCharCode(55349, 57334 + _i4);
        defineSymbol(math, main, mathord, _ch4, wideChar);
        defineSymbol(symbols_text, main, textord, _ch4, wideChar);
      }
      var extraLatin = "\xC7\xD0\xDE\xE7\xFE";
      for (var _i5 = 0; _i5 < extraLatin.length; _i5++) {
        var _ch5 = extraLatin.charAt(_i5);
        defineSymbol(math, main, mathord, _ch5, _ch5);
        defineSymbol(symbols_text, main, textord, _ch5, _ch5);
      }
      ;
      var wideLatinLetterData = [
        ["mathbf", "textbf", "Main-Bold"],
        ["mathbf", "textbf", "Main-Bold"],
        ["mathnormal", "textit", "Math-Italic"],
        ["mathnormal", "textit", "Math-Italic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["mathscr", "textscr", "Script-Regular"],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["", "", ""],
        ["", "", ""],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["", "", ""],
        ["", "", ""],
        ["mathtt", "texttt", "Typewriter-Regular"],
        ["mathtt", "texttt", "Typewriter-Regular"]
      ];
      var wideNumeralData = [
        ["mathbf", "textbf", "Main-Bold"],
        ["", "", ""],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathtt", "texttt", "Typewriter-Regular"]
      ];
      var wideCharacterFont = function wideCharacterFont2(wideChar2, mode) {
        var H = wideChar2.charCodeAt(0);
        var L = wideChar2.charCodeAt(1);
        var codePoint = (H - 55296) * 1024 + (L - 56320) + 65536;
        var j = mode === "math" ? 0 : 1;
        if (119808 <= codePoint && codePoint < 120484) {
          var i2 = Math.floor((codePoint - 119808) / 26);
          return [wideLatinLetterData[i2][2], wideLatinLetterData[i2][j]];
        } else if (120782 <= codePoint && codePoint <= 120831) {
          var _i6 = Math.floor((codePoint - 120782) / 10);
          return [wideNumeralData[_i6][2], wideNumeralData[_i6][j]];
        } else if (codePoint === 120485 || codePoint === 120486) {
          return [wideLatinLetterData[0][2], wideLatinLetterData[0][j]];
        } else if (120486 < codePoint && codePoint < 120782) {
          return ["", ""];
        } else {
          throw new src_ParseError("Unsupported character: " + wideChar2);
        }
      };
      ;
      var sizeStyleMap = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9]
      ];
      var sizeMultipliers = [
        0.5,
        0.6,
        0.7,
        0.8,
        0.9,
        1,
        1.2,
        1.44,
        1.728,
        2.074,
        2.488
      ];
      var sizeAtStyle = function sizeAtStyle2(size, style) {
        return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
      };
      var Options = /* @__PURE__ */ function() {
        function Options2(data) {
          this.style = void 0;
          this.color = void 0;
          this.size = void 0;
          this.textSize = void 0;
          this.phantom = void 0;
          this.font = void 0;
          this.fontFamily = void 0;
          this.fontWeight = void 0;
          this.fontShape = void 0;
          this.sizeMultiplier = void 0;
          this.maxSize = void 0;
          this.minRuleThickness = void 0;
          this._fontMetrics = void 0;
          this.style = data.style;
          this.color = data.color;
          this.size = data.size || Options2.BASESIZE;
          this.textSize = data.textSize || this.size;
          this.phantom = !!data.phantom;
          this.font = data.font || "";
          this.fontFamily = data.fontFamily || "";
          this.fontWeight = data.fontWeight || "";
          this.fontShape = data.fontShape || "";
          this.sizeMultiplier = sizeMultipliers[this.size - 1];
          this.maxSize = data.maxSize;
          this.minRuleThickness = data.minRuleThickness;
          this._fontMetrics = void 0;
        }
        var _proto = Options2.prototype;
        _proto.extend = function extend(extension) {
          var data = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness
          };
          for (var key in extension) {
            if (extension.hasOwnProperty(key)) {
              data[key] = extension[key];
            }
          }
          return new Options2(data);
        };
        _proto.havingStyle = function havingStyle(style) {
          if (this.style === style) {
            return this;
          } else {
            return this.extend({
              style,
              size: sizeAtStyle(this.textSize, style)
            });
          }
        };
        _proto.havingCrampedStyle = function havingCrampedStyle() {
          return this.havingStyle(this.style.cramp());
        };
        _proto.havingSize = function havingSize(size) {
          if (this.size === size && this.textSize === size) {
            return this;
          } else {
            return this.extend({
              style: this.style.text(),
              size,
              textSize: size,
              sizeMultiplier: sizeMultipliers[size - 1]
            });
          }
        };
        _proto.havingBaseStyle = function havingBaseStyle(style) {
          style = style || this.style.text();
          var wantSize = sizeAtStyle(Options2.BASESIZE, style);
          if (this.size === wantSize && this.textSize === Options2.BASESIZE && this.style === style) {
            return this;
          } else {
            return this.extend({
              style,
              size: wantSize
            });
          }
        };
        _proto.havingBaseSizing = function havingBaseSizing() {
          var size;
          switch (this.style.id) {
            case 4:
            case 5:
              size = 3;
              break;
            case 6:
            case 7:
              size = 1;
              break;
            default:
              size = 6;
          }
          return this.extend({
            style: this.style.text(),
            size
          });
        };
        _proto.withColor = function withColor(color) {
          return this.extend({
            color
          });
        };
        _proto.withPhantom = function withPhantom() {
          return this.extend({
            phantom: true
          });
        };
        _proto.withFont = function withFont(font) {
          return this.extend({
            font
          });
        };
        _proto.withTextFontFamily = function withTextFontFamily(fontFamily) {
          return this.extend({
            fontFamily,
            font: ""
          });
        };
        _proto.withTextFontWeight = function withTextFontWeight(fontWeight) {
          return this.extend({
            fontWeight,
            font: ""
          });
        };
        _proto.withTextFontShape = function withTextFontShape(fontShape) {
          return this.extend({
            fontShape,
            font: ""
          });
        };
        _proto.sizingClasses = function sizingClasses(oldOptions) {
          if (oldOptions.size !== this.size) {
            return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
          } else {
            return [];
          }
        };
        _proto.baseSizingClasses = function baseSizingClasses() {
          if (this.size !== Options2.BASESIZE) {
            return ["sizing", "reset-size" + this.size, "size" + Options2.BASESIZE];
          } else {
            return [];
          }
        };
        _proto.fontMetrics = function fontMetrics() {
          if (!this._fontMetrics) {
            this._fontMetrics = getGlobalMetrics(this.size);
          }
          return this._fontMetrics;
        };
        _proto.getColor = function getColor() {
          if (this.phantom) {
            return "transparent";
          } else {
            return this.color;
          }
        };
        return Options2;
      }();
      Options.BASESIZE = 6;
      var src_Options = Options;
      ;
      var ptPerUnit = {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        in: 72.27,
        bp: 803 / 800,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 803 / 800
      };
      var relativeUnit = {
        ex: true,
        em: true,
        mu: true
      };
      var validUnit = function validUnit2(unit) {
        if (typeof unit !== "string") {
          unit = unit.unit;
        }
        return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
      };
      var calculateSize = function calculateSize2(sizeValue, options2) {
        var scale;
        if (sizeValue.unit in ptPerUnit) {
          scale = ptPerUnit[sizeValue.unit] / options2.fontMetrics().ptPerEm / options2.sizeMultiplier;
        } else if (sizeValue.unit === "mu") {
          scale = options2.fontMetrics().cssEmPerMu;
        } else {
          var unitOptions;
          if (options2.style.isTight()) {
            unitOptions = options2.havingStyle(options2.style.text());
          } else {
            unitOptions = options2;
          }
          if (sizeValue.unit === "ex") {
            scale = unitOptions.fontMetrics().xHeight;
          } else if (sizeValue.unit === "em") {
            scale = unitOptions.fontMetrics().quad;
          } else {
            throw new src_ParseError("Invalid unit: '" + sizeValue.unit + "'");
          }
          if (unitOptions !== options2) {
            scale *= unitOptions.sizeMultiplier / options2.sizeMultiplier;
          }
        }
        return Math.min(sizeValue.number * scale, options2.maxSize);
      };
      ;
      var lookupSymbol = function lookupSymbol2(value, fontName, mode) {
        if (src_symbols[mode][value] && src_symbols[mode][value].replace) {
          value = src_symbols[mode][value].replace;
        }
        return {
          value,
          metrics: getCharacterMetrics(value, fontName, mode)
        };
      };
      var makeSymbol = function makeSymbol2(value, fontName, mode, options2, classes) {
        var lookup = lookupSymbol(value, fontName, mode);
        var metrics = lookup.metrics;
        value = lookup.value;
        var symbolNode;
        if (metrics) {
          var italic = metrics.italic;
          if (mode === "text" || options2 && options2.font === "mathit") {
            italic = 0;
          }
          symbolNode = new SymbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, metrics.width, classes);
        } else {
          typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + value + "' in style '" + fontName + "' and mode '" + mode + "'"));
          symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
        }
        if (options2) {
          symbolNode.maxFontSize = options2.sizeMultiplier;
          if (options2.style.isTight()) {
            symbolNode.classes.push("mtight");
          }
          var color = options2.getColor();
          if (color) {
            symbolNode.style.color = color;
          }
        }
        return symbolNode;
      };
      var mathsym = function mathsym2(value, mode, options2, classes) {
        if (classes === void 0) {
          classes = [];
        }
        if (options2.font === "boldsymbol" && lookupSymbol(value, "Main-Bold", mode).metrics) {
          return makeSymbol(value, "Main-Bold", mode, options2, classes.concat(["mathbf"]));
        } else if (value === "\\" || src_symbols[mode][value].font === "main") {
          return makeSymbol(value, "Main-Regular", mode, options2, classes);
        } else {
          return makeSymbol(value, "AMS-Regular", mode, options2, classes.concat(["amsrm"]));
        }
      };
      var boldsymbol = function boldsymbol2(value, mode, options2, classes, type) {
        if (type !== "textord" && lookupSymbol(value, "Math-BoldItalic", mode).metrics) {
          return {
            fontName: "Math-BoldItalic",
            fontClass: "boldsymbol"
          };
        } else {
          return {
            fontName: "Main-Bold",
            fontClass: "mathbf"
          };
        }
      };
      var makeOrd = function makeOrd2(group, options2, type) {
        var mode = group.mode;
        var text = group.text;
        var classes = ["mord"];
        var isFont = mode === "math" || mode === "text" && options2.font;
        var fontOrFamily = isFont ? options2.font : options2.fontFamily;
        if (text.charCodeAt(0) === 55349) {
          var _wideCharacterFont = wideCharacterFont(text, mode), wideFontName = _wideCharacterFont[0], wideFontClass = _wideCharacterFont[1];
          return makeSymbol(text, wideFontName, mode, options2, classes.concat(wideFontClass));
        } else if (fontOrFamily) {
          var fontName;
          var fontClasses;
          if (fontOrFamily === "boldsymbol") {
            var fontData = boldsymbol(text, mode, options2, classes, type);
            fontName = fontData.fontName;
            fontClasses = [fontData.fontClass];
          } else if (isFont) {
            fontName = fontMap[fontOrFamily].fontName;
            fontClasses = [fontOrFamily];
          } else {
            fontName = retrieveTextFontName(fontOrFamily, options2.fontWeight, options2.fontShape);
            fontClasses = [fontOrFamily, options2.fontWeight, options2.fontShape];
          }
          if (lookupSymbol(text, fontName, mode).metrics) {
            return makeSymbol(text, fontName, mode, options2, classes.concat(fontClasses));
          } else if (ligatures.hasOwnProperty(text) && fontName.substr(0, 10) === "Typewriter") {
            var parts = [];
            for (var i2 = 0; i2 < text.length; i2++) {
              parts.push(makeSymbol(text[i2], fontName, mode, options2, classes.concat(fontClasses)));
            }
            return makeFragment(parts);
          }
        }
        if (type === "mathord") {
          return makeSymbol(text, "Math-Italic", mode, options2, classes.concat(["mathnormal"]));
        } else if (type === "textord") {
          var font = src_symbols[mode][text] && src_symbols[mode][text].font;
          if (font === "ams") {
            var _fontName = retrieveTextFontName("amsrm", options2.fontWeight, options2.fontShape);
            return makeSymbol(text, _fontName, mode, options2, classes.concat("amsrm", options2.fontWeight, options2.fontShape));
          } else if (font === "main" || !font) {
            var _fontName2 = retrieveTextFontName("textrm", options2.fontWeight, options2.fontShape);
            return makeSymbol(text, _fontName2, mode, options2, classes.concat(options2.fontWeight, options2.fontShape));
          } else {
            var _fontName3 = retrieveTextFontName(font, options2.fontWeight, options2.fontShape);
            return makeSymbol(text, _fontName3, mode, options2, classes.concat(_fontName3, options2.fontWeight, options2.fontShape));
          }
        } else {
          throw new Error("unexpected type: " + type + " in makeOrd");
        }
      };
      var canCombine = function canCombine2(prev, next) {
        if (createClass(prev.classes) !== createClass(next.classes) || prev.skew !== next.skew || prev.maxFontSize !== next.maxFontSize) {
          return false;
        }
        if (prev.classes.length === 1) {
          var cls = prev.classes[0];
          if (cls === "mbin" || cls === "mord") {
            return false;
          }
        }
        for (var style in prev.style) {
          if (prev.style.hasOwnProperty(style) && prev.style[style] !== next.style[style]) {
            return false;
          }
        }
        for (var _style in next.style) {
          if (next.style.hasOwnProperty(_style) && prev.style[_style] !== next.style[_style]) {
            return false;
          }
        }
        return true;
      };
      var tryCombineChars = function tryCombineChars2(chars2) {
        for (var i2 = 0; i2 < chars2.length - 1; i2++) {
          var prev = chars2[i2];
          var next = chars2[i2 + 1];
          if (prev instanceof SymbolNode && next instanceof SymbolNode && canCombine(prev, next)) {
            prev.text += next.text;
            prev.height = Math.max(prev.height, next.height);
            prev.depth = Math.max(prev.depth, next.depth);
            prev.italic = next.italic;
            chars2.splice(i2 + 1, 1);
            i2--;
          }
        }
        return chars2;
      };
      var sizeElementFromChildren = function sizeElementFromChildren2(elem) {
        var height = 0;
        var depth = 0;
        var maxFontSize = 0;
        for (var i2 = 0; i2 < elem.children.length; i2++) {
          var child = elem.children[i2];
          if (child.height > height) {
            height = child.height;
          }
          if (child.depth > depth) {
            depth = child.depth;
          }
          if (child.maxFontSize > maxFontSize) {
            maxFontSize = child.maxFontSize;
          }
        }
        elem.height = height;
        elem.depth = depth;
        elem.maxFontSize = maxFontSize;
      };
      var makeSpan = function makeSpan2(classes, children, options2, style) {
        var span = new Span(classes, children, options2, style);
        sizeElementFromChildren(span);
        return span;
      };
      var makeSvgSpan = function makeSvgSpan2(classes, children, options2, style) {
        return new Span(classes, children, options2, style);
      };
      var makeLineSpan = function makeLineSpan2(className, options2, thickness) {
        var line = makeSpan([className], [], options2);
        line.height = Math.max(thickness || options2.fontMetrics().defaultRuleThickness, options2.minRuleThickness);
        line.style.borderBottomWidth = line.height + "em";
        line.maxFontSize = 1;
        return line;
      };
      var makeAnchor = function makeAnchor2(href, classes, children, options2) {
        var anchor = new Anchor(href, classes, children, options2);
        sizeElementFromChildren(anchor);
        return anchor;
      };
      var makeFragment = function makeFragment2(children) {
        var fragment = new DocumentFragment(children);
        sizeElementFromChildren(fragment);
        return fragment;
      };
      var wrapFragment = function wrapFragment2(group, options2) {
        if (group instanceof DocumentFragment) {
          return makeSpan([], [group], options2);
        }
        return group;
      };
      var getVListChildrenAndDepth = function getVListChildrenAndDepth2(params) {
        if (params.positionType === "individualShift") {
          var oldChildren = params.children;
          var children = [oldChildren[0]];
          var _depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
          var currPos = _depth;
          for (var i2 = 1; i2 < oldChildren.length; i2++) {
            var diff = -oldChildren[i2].shift - currPos - oldChildren[i2].elem.depth;
            var size = diff - (oldChildren[i2 - 1].elem.height + oldChildren[i2 - 1].elem.depth);
            currPos = currPos + diff;
            children.push({
              type: "kern",
              size
            });
            children.push(oldChildren[i2]);
          }
          return {
            children,
            depth: _depth
          };
        }
        var depth;
        if (params.positionType === "top") {
          var bottom = params.positionData;
          for (var _i6 = 0; _i6 < params.children.length; _i6++) {
            var child = params.children[_i6];
            bottom -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
          }
          depth = bottom;
        } else if (params.positionType === "bottom") {
          depth = -params.positionData;
        } else {
          var firstChild = params.children[0];
          if (firstChild.type !== "elem") {
            throw new Error('First child must have type "elem".');
          }
          if (params.positionType === "shift") {
            depth = -firstChild.elem.depth - params.positionData;
          } else if (params.positionType === "firstBaseline") {
            depth = -firstChild.elem.depth;
          } else {
            throw new Error("Invalid positionType " + params.positionType + ".");
          }
        }
        return {
          children: params.children,
          depth
        };
      };
      var makeVList = function makeVList2(params, options2) {
        var _getVListChildrenAndD = getVListChildrenAndDepth(params), children = _getVListChildrenAndD.children, depth = _getVListChildrenAndD.depth;
        var pstrutSize = 0;
        for (var i2 = 0; i2 < children.length; i2++) {
          var child = children[i2];
          if (child.type === "elem") {
            var elem = child.elem;
            pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
          }
        }
        pstrutSize += 2;
        var pstrut = makeSpan(["pstrut"], []);
        pstrut.style.height = pstrutSize + "em";
        var realChildren = [];
        var minPos = depth;
        var maxPos = depth;
        var currPos = depth;
        for (var _i22 = 0; _i22 < children.length; _i22++) {
          var _child = children[_i22];
          if (_child.type === "kern") {
            currPos += _child.size;
          } else {
            var _elem = _child.elem;
            var classes = _child.wrapperClasses || [];
            var style = _child.wrapperStyle || {};
            var childWrap = makeSpan(classes, [pstrut, _elem], void 0, style);
            childWrap.style.top = -pstrutSize - currPos - _elem.depth + "em";
            if (_child.marginLeft) {
              childWrap.style.marginLeft = _child.marginLeft;
            }
            if (_child.marginRight) {
              childWrap.style.marginRight = _child.marginRight;
            }
            realChildren.push(childWrap);
            currPos += _elem.height + _elem.depth;
          }
          minPos = Math.min(minPos, currPos);
          maxPos = Math.max(maxPos, currPos);
        }
        var vlist = makeSpan(["vlist"], realChildren);
        vlist.style.height = maxPos + "em";
        var rows;
        if (minPos < 0) {
          var emptySpan = makeSpan([], []);
          var depthStrut = makeSpan(["vlist"], [emptySpan]);
          depthStrut.style.height = -minPos + "em";
          var topStrut = makeSpan(["vlist-s"], [new SymbolNode("\u200B")]);
          rows = [makeSpan(["vlist-r"], [vlist, topStrut]), makeSpan(["vlist-r"], [depthStrut])];
        } else {
          rows = [makeSpan(["vlist-r"], [vlist])];
        }
        var vtable = makeSpan(["vlist-t"], rows);
        if (rows.length === 2) {
          vtable.classes.push("vlist-t2");
        }
        vtable.height = maxPos;
        vtable.depth = -minPos;
        return vtable;
      };
      var makeGlue = function makeGlue2(measurement, options2) {
        var rule = makeSpan(["mspace"], [], options2);
        var size = calculateSize(measurement, options2);
        rule.style.marginRight = size + "em";
        return rule;
      };
      var retrieveTextFontName = function retrieveTextFontName2(fontFamily, fontWeight, fontShape) {
        var baseFontName = "";
        switch (fontFamily) {
          case "amsrm":
            baseFontName = "AMS";
            break;
          case "textrm":
            baseFontName = "Main";
            break;
          case "textsf":
            baseFontName = "SansSerif";
            break;
          case "texttt":
            baseFontName = "Typewriter";
            break;
          default:
            baseFontName = fontFamily;
        }
        var fontStylesName;
        if (fontWeight === "textbf" && fontShape === "textit") {
          fontStylesName = "BoldItalic";
        } else if (fontWeight === "textbf") {
          fontStylesName = "Bold";
        } else if (fontWeight === "textit") {
          fontStylesName = "Italic";
        } else {
          fontStylesName = "Regular";
        }
        return baseFontName + "-" + fontStylesName;
      };
      var fontMap = {
        mathbf: {
          variant: "bold",
          fontName: "Main-Bold"
        },
        mathrm: {
          variant: "normal",
          fontName: "Main-Regular"
        },
        textit: {
          variant: "italic",
          fontName: "Main-Italic"
        },
        mathit: {
          variant: "italic",
          fontName: "Main-Italic"
        },
        mathnormal: {
          variant: "italic",
          fontName: "Math-Italic"
        },
        mathbb: {
          variant: "double-struck",
          fontName: "AMS-Regular"
        },
        mathcal: {
          variant: "script",
          fontName: "Caligraphic-Regular"
        },
        mathfrak: {
          variant: "fraktur",
          fontName: "Fraktur-Regular"
        },
        mathscr: {
          variant: "script",
          fontName: "Script-Regular"
        },
        mathsf: {
          variant: "sans-serif",
          fontName: "SansSerif-Regular"
        },
        mathtt: {
          variant: "monospace",
          fontName: "Typewriter-Regular"
        }
      };
      var svgData = {
        vec: ["vec", 0.471, 0.714],
        oiintSize1: ["oiintSize1", 0.957, 0.499],
        oiintSize2: ["oiintSize2", 1.472, 0.659],
        oiiintSize1: ["oiiintSize1", 1.304, 0.499],
        oiiintSize2: ["oiiintSize2", 1.98, 0.659]
      };
      var staticSvg = function staticSvg2(value, options2) {
        var _svgData$value = svgData[value], pathName = _svgData$value[0], width = _svgData$value[1], height = _svgData$value[2];
        var path2 = new PathNode(pathName);
        var svgNode = new SvgNode([path2], {
          width: width + "em",
          height: height + "em",
          style: "width:" + width + "em",
          viewBox: "0 0 " + 1e3 * width + " " + 1e3 * height,
          preserveAspectRatio: "xMinYMin"
        });
        var span = makeSvgSpan(["overlay"], [svgNode], options2);
        span.height = height;
        span.style.height = height + "em";
        span.style.width = width + "em";
        return span;
      };
      var buildCommon = {
        fontMap,
        makeSymbol,
        mathsym,
        makeSpan,
        makeSvgSpan,
        makeLineSpan,
        makeAnchor,
        makeFragment,
        wrapFragment,
        makeVList,
        makeOrd,
        makeGlue,
        staticSvg,
        svgData,
        tryCombineChars
      };
      ;
      var thinspace = {
        number: 3,
        unit: "mu"
      };
      var mediumspace = {
        number: 4,
        unit: "mu"
      };
      var thickspace = {
        number: 5,
        unit: "mu"
      };
      var spacings = {
        mord: {
          mop: thinspace,
          mbin: mediumspace,
          mrel: thickspace,
          minner: thinspace
        },
        mop: {
          mord: thinspace,
          mop: thinspace,
          mrel: thickspace,
          minner: thinspace
        },
        mbin: {
          mord: mediumspace,
          mop: mediumspace,
          mopen: mediumspace,
          minner: mediumspace
        },
        mrel: {
          mord: thickspace,
          mop: thickspace,
          mopen: thickspace,
          minner: thickspace
        },
        mopen: {},
        mclose: {
          mop: thinspace,
          mbin: mediumspace,
          mrel: thickspace,
          minner: thinspace
        },
        mpunct: {
          mord: thinspace,
          mop: thinspace,
          mrel: thickspace,
          mopen: thinspace,
          mclose: thinspace,
          mpunct: thinspace,
          minner: thinspace
        },
        minner: {
          mord: thinspace,
          mop: thinspace,
          mbin: mediumspace,
          mrel: thickspace,
          mopen: thinspace,
          mpunct: thinspace,
          minner: thinspace
        }
      };
      var tightSpacings = {
        mord: {
          mop: thinspace
        },
        mop: {
          mord: thinspace,
          mop: thinspace
        },
        mbin: {},
        mrel: {},
        mopen: {},
        mclose: {
          mop: thinspace
        },
        mpunct: {},
        minner: {
          mop: thinspace
        }
      };
      ;
      var _functions = {};
      var _htmlGroupBuilders = {};
      var _mathmlGroupBuilders = {};
      function defineFunction(_ref) {
        var type = _ref.type, names = _ref.names, props = _ref.props, handler2 = _ref.handler, htmlBuilder2 = _ref.htmlBuilder, mathmlBuilder2 = _ref.mathmlBuilder;
        var data = {
          type,
          numArgs: props.numArgs,
          argTypes: props.argTypes,
          allowedInArgument: !!props.allowedInArgument,
          allowedInText: !!props.allowedInText,
          allowedInMath: props.allowedInMath === void 0 ? true : props.allowedInMath,
          numOptionalArgs: props.numOptionalArgs || 0,
          infix: !!props.infix,
          primitive: !!props.primitive,
          handler: handler2
        };
        for (var i2 = 0; i2 < names.length; ++i2) {
          _functions[names[i2]] = data;
        }
        if (type) {
          if (htmlBuilder2) {
            _htmlGroupBuilders[type] = htmlBuilder2;
          }
          if (mathmlBuilder2) {
            _mathmlGroupBuilders[type] = mathmlBuilder2;
          }
        }
      }
      function defineFunctionBuilders(_ref2) {
        var type = _ref2.type, htmlBuilder2 = _ref2.htmlBuilder, mathmlBuilder2 = _ref2.mathmlBuilder;
        defineFunction({
          type,
          names: [],
          props: {
            numArgs: 0
          },
          handler: function handler2() {
            throw new Error("Should never be called.");
          },
          htmlBuilder: htmlBuilder2,
          mathmlBuilder: mathmlBuilder2
        });
      }
      var normalizeArgument = function normalizeArgument2(arg) {
        return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
      };
      var ordargument = function ordargument2(arg) {
        return arg.type === "ordgroup" ? arg.body : [arg];
      };
      ;
      var buildHTML_makeSpan = buildCommon.makeSpan;
      var binLeftCanceller = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"];
      var binRightCanceller = ["rightmost", "mrel", "mclose", "mpunct"];
      var styleMap = {
        display: src_Style.DISPLAY,
        text: src_Style.TEXT,
        script: src_Style.SCRIPT,
        scriptscript: src_Style.SCRIPTSCRIPT
      };
      var DomEnum = {
        mord: "mord",
        mop: "mop",
        mbin: "mbin",
        mrel: "mrel",
        mopen: "mopen",
        mclose: "mclose",
        mpunct: "mpunct",
        minner: "minner"
      };
      var buildExpression = function buildExpression2(expression, options2, isRealGroup, surrounding) {
        if (surrounding === void 0) {
          surrounding = [null, null];
        }
        var groups = [];
        for (var i2 = 0; i2 < expression.length; i2++) {
          var output = buildGroup(expression[i2], options2);
          if (output instanceof DocumentFragment) {
            var children = output.children;
            groups.push.apply(groups, children);
          } else {
            groups.push(output);
          }
        }
        buildCommon.tryCombineChars(groups);
        if (!isRealGroup) {
          return groups;
        }
        var glueOptions = options2;
        if (expression.length === 1) {
          var node = expression[0];
          if (node.type === "sizing") {
            glueOptions = options2.havingSize(node.size);
          } else if (node.type === "styling") {
            glueOptions = options2.havingStyle(styleMap[node.style]);
          }
        }
        var dummyPrev = buildHTML_makeSpan([surrounding[0] || "leftmost"], [], options2);
        var dummyNext = buildHTML_makeSpan([surrounding[1] || "rightmost"], [], options2);
        var isRoot = isRealGroup === "root";
        traverseNonSpaceNodes(groups, function(node2, prev) {
          var prevType = prev.classes[0];
          var type = node2.classes[0];
          if (prevType === "mbin" && utils.contains(binRightCanceller, type)) {
            prev.classes[0] = "mord";
          } else if (type === "mbin" && utils.contains(binLeftCanceller, prevType)) {
            node2.classes[0] = "mord";
          }
        }, {
          node: dummyPrev
        }, dummyNext, isRoot);
        traverseNonSpaceNodes(groups, function(node2, prev) {
          var prevType = getTypeOfDomTree(prev);
          var type = getTypeOfDomTree(node2);
          var space = prevType && type ? node2.hasClass("mtight") ? tightSpacings[prevType][type] : spacings[prevType][type] : null;
          if (space) {
            return buildCommon.makeGlue(space, glueOptions);
          }
        }, {
          node: dummyPrev
        }, dummyNext, isRoot);
        return groups;
      };
      var traverseNonSpaceNodes = function traverseNonSpaceNodes2(nodes, callback, prev, next, isRoot) {
        if (next) {
          nodes.push(next);
        }
        var i2 = 0;
        for (; i2 < nodes.length; i2++) {
          var node = nodes[i2];
          var partialGroup = checkPartialGroup(node);
          if (partialGroup) {
            traverseNonSpaceNodes2(partialGroup.children, callback, prev, null, isRoot);
            continue;
          }
          var nonspace = !node.hasClass("mspace");
          if (nonspace) {
            var result = callback(node, prev.node);
            if (result) {
              if (prev.insertAfter) {
                prev.insertAfter(result);
              } else {
                nodes.unshift(result);
                i2++;
              }
            }
          }
          if (nonspace) {
            prev.node = node;
          } else if (isRoot && node.hasClass("newline")) {
            prev.node = buildHTML_makeSpan(["leftmost"]);
          }
          prev.insertAfter = function(index2) {
            return function(n) {
              nodes.splice(index2 + 1, 0, n);
              i2++;
            };
          }(i2);
        }
        if (next) {
          nodes.pop();
        }
      };
      var checkPartialGroup = function checkPartialGroup2(node) {
        if (node instanceof DocumentFragment || node instanceof Anchor || node instanceof Span && node.hasClass("enclosing")) {
          return node;
        }
        return null;
      };
      var getOutermostNode = function getOutermostNode2(node, side) {
        var partialGroup = checkPartialGroup(node);
        if (partialGroup) {
          var children = partialGroup.children;
          if (children.length) {
            if (side === "right") {
              return getOutermostNode2(children[children.length - 1], "right");
            } else if (side === "left") {
              return getOutermostNode2(children[0], "left");
            }
          }
        }
        return node;
      };
      var getTypeOfDomTree = function getTypeOfDomTree2(node, side) {
        if (!node) {
          return null;
        }
        if (side) {
          node = getOutermostNode(node, side);
        }
        return DomEnum[node.classes[0]] || null;
      };
      var makeNullDelimiter = function makeNullDelimiter2(options2, classes) {
        var moreClasses = ["nulldelimiter"].concat(options2.baseSizingClasses());
        return buildHTML_makeSpan(classes.concat(moreClasses));
      };
      var buildGroup = function buildGroup2(group, options2, baseOptions) {
        if (!group) {
          return buildHTML_makeSpan();
        }
        if (_htmlGroupBuilders[group.type]) {
          var groupNode = _htmlGroupBuilders[group.type](group, options2);
          if (baseOptions && options2.size !== baseOptions.size) {
            groupNode = buildHTML_makeSpan(options2.sizingClasses(baseOptions), [groupNode], options2);
            var multiplier = options2.sizeMultiplier / baseOptions.sizeMultiplier;
            groupNode.height *= multiplier;
            groupNode.depth *= multiplier;
          }
          return groupNode;
        } else {
          throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
        }
      };
      function buildHTMLUnbreakable(children, options2) {
        var body = buildHTML_makeSpan(["base"], children, options2);
        var strut = buildHTML_makeSpan(["strut"]);
        strut.style.height = body.height + body.depth + "em";
        strut.style.verticalAlign = -body.depth + "em";
        body.children.unshift(strut);
        return body;
      }
      function buildHTML(tree, options2) {
        var tag = null;
        if (tree.length === 1 && tree[0].type === "tag") {
          tag = tree[0].tag;
          tree = tree[0].body;
        }
        var expression = buildExpression(tree, options2, "root");
        var eqnNum;
        if (expression.length === 2 && expression[1].hasClass("tag")) {
          eqnNum = expression.pop();
        }
        var children = [];
        var parts = [];
        for (var i2 = 0; i2 < expression.length; i2++) {
          parts.push(expression[i2]);
          if (expression[i2].hasClass("mbin") || expression[i2].hasClass("mrel") || expression[i2].hasClass("allowbreak")) {
            var nobreak = false;
            while (i2 < expression.length - 1 && expression[i2 + 1].hasClass("mspace") && !expression[i2 + 1].hasClass("newline")) {
              i2++;
              parts.push(expression[i2]);
              if (expression[i2].hasClass("nobreak")) {
                nobreak = true;
              }
            }
            if (!nobreak) {
              children.push(buildHTMLUnbreakable(parts, options2));
              parts = [];
            }
          } else if (expression[i2].hasClass("newline")) {
            parts.pop();
            if (parts.length > 0) {
              children.push(buildHTMLUnbreakable(parts, options2));
              parts = [];
            }
            children.push(expression[i2]);
          }
        }
        if (parts.length > 0) {
          children.push(buildHTMLUnbreakable(parts, options2));
        }
        var tagChild;
        if (tag) {
          tagChild = buildHTMLUnbreakable(buildExpression(tag, options2, true));
          tagChild.classes = ["tag"];
          children.push(tagChild);
        } else if (eqnNum) {
          children.push(eqnNum);
        }
        var htmlNode = buildHTML_makeSpan(["katex-html"], children);
        htmlNode.setAttribute("aria-hidden", "true");
        if (tagChild) {
          var strut = tagChild.children[0];
          strut.style.height = htmlNode.height + htmlNode.depth + "em";
          strut.style.verticalAlign = -htmlNode.depth + "em";
        }
        return htmlNode;
      }
      ;
      function newDocumentFragment(children) {
        return new DocumentFragment(children);
      }
      var MathNode = /* @__PURE__ */ function() {
        function MathNode2(type, children, classes) {
          this.type = void 0;
          this.attributes = void 0;
          this.children = void 0;
          this.classes = void 0;
          this.type = type;
          this.attributes = {};
          this.children = children || [];
          this.classes = classes || [];
        }
        var _proto = MathNode2.prototype;
        _proto.setAttribute = function setAttribute(name, value) {
          this.attributes[name] = value;
        };
        _proto.getAttribute = function getAttribute(name) {
          return this.attributes[name];
        };
        _proto.toNode = function toNode() {
          var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              node.setAttribute(attr, this.attributes[attr]);
            }
          }
          if (this.classes.length > 0) {
            node.className = createClass(this.classes);
          }
          for (var i2 = 0; i2 < this.children.length; i2++) {
            node.appendChild(this.children[i2].toNode());
          }
          return node;
        };
        _proto.toMarkup = function toMarkup() {
          var markup = "<" + this.type;
          for (var attr in this.attributes) {
            if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
              markup += " " + attr + '="';
              markup += utils.escape(this.attributes[attr]);
              markup += '"';
            }
          }
          if (this.classes.length > 0) {
            markup += ' class ="' + utils.escape(createClass(this.classes)) + '"';
          }
          markup += ">";
          for (var i2 = 0; i2 < this.children.length; i2++) {
            markup += this.children[i2].toMarkup();
          }
          markup += "</" + this.type + ">";
          return markup;
        };
        _proto.toText = function toText() {
          return this.children.map(function(child) {
            return child.toText();
          }).join("");
        };
        return MathNode2;
      }();
      var TextNode = /* @__PURE__ */ function() {
        function TextNode2(text) {
          this.text = void 0;
          this.text = text;
        }
        var _proto2 = TextNode2.prototype;
        _proto2.toNode = function toNode() {
          return document.createTextNode(this.text);
        };
        _proto2.toMarkup = function toMarkup() {
          return utils.escape(this.toText());
        };
        _proto2.toText = function toText() {
          return this.text;
        };
        return TextNode2;
      }();
      var SpaceNode = /* @__PURE__ */ function() {
        function SpaceNode2(width) {
          this.width = void 0;
          this.character = void 0;
          this.width = width;
          if (width >= 0.05555 && width <= 0.05556) {
            this.character = "\u200A";
          } else if (width >= 0.1666 && width <= 0.1667) {
            this.character = "\u2009";
          } else if (width >= 0.2222 && width <= 0.2223) {
            this.character = "\u2005";
          } else if (width >= 0.2777 && width <= 0.2778) {
            this.character = "\u2005\u200A";
          } else if (width >= -0.05556 && width <= -0.05555) {
            this.character = "\u200A\u2063";
          } else if (width >= -0.1667 && width <= -0.1666) {
            this.character = "\u2009\u2063";
          } else if (width >= -0.2223 && width <= -0.2222) {
            this.character = "\u205F\u2063";
          } else if (width >= -0.2778 && width <= -0.2777) {
            this.character = "\u2005\u2063";
          } else {
            this.character = null;
          }
        }
        var _proto3 = SpaceNode2.prototype;
        _proto3.toNode = function toNode() {
          if (this.character) {
            return document.createTextNode(this.character);
          } else {
            var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
            node.setAttribute("width", this.width + "em");
            return node;
          }
        };
        _proto3.toMarkup = function toMarkup() {
          if (this.character) {
            return "<mtext>" + this.character + "</mtext>";
          } else {
            return '<mspace width="' + this.width + 'em"/>';
          }
        };
        _proto3.toText = function toText() {
          if (this.character) {
            return this.character;
          } else {
            return " ";
          }
        };
        return SpaceNode2;
      }();
      var mathMLTree = {
        MathNode,
        TextNode,
        SpaceNode,
        newDocumentFragment
      };
      ;
      var makeText = function makeText2(text, mode, options2) {
        if (src_symbols[mode][text] && src_symbols[mode][text].replace && text.charCodeAt(0) !== 55349 && !(ligatures.hasOwnProperty(text) && options2 && (options2.fontFamily && options2.fontFamily.substr(4, 2) === "tt" || options2.font && options2.font.substr(4, 2) === "tt"))) {
          text = src_symbols[mode][text].replace;
        }
        return new mathMLTree.TextNode(text);
      };
      var makeRow = function makeRow2(body) {
        if (body.length === 1) {
          return body[0];
        } else {
          return new mathMLTree.MathNode("mrow", body);
        }
      };
      var getVariant = function getVariant2(group, options2) {
        if (options2.fontFamily === "texttt") {
          return "monospace";
        } else if (options2.fontFamily === "textsf") {
          if (options2.fontShape === "textit" && options2.fontWeight === "textbf") {
            return "sans-serif-bold-italic";
          } else if (options2.fontShape === "textit") {
            return "sans-serif-italic";
          } else if (options2.fontWeight === "textbf") {
            return "bold-sans-serif";
          } else {
            return "sans-serif";
          }
        } else if (options2.fontShape === "textit" && options2.fontWeight === "textbf") {
          return "bold-italic";
        } else if (options2.fontShape === "textit") {
          return "italic";
        } else if (options2.fontWeight === "textbf") {
          return "bold";
        }
        var font = options2.font;
        if (!font || font === "mathnormal") {
          return null;
        }
        var mode = group.mode;
        if (font === "mathit") {
          return "italic";
        } else if (font === "boldsymbol") {
          return group.type === "textord" ? "bold" : "bold-italic";
        } else if (font === "mathbf") {
          return "bold";
        } else if (font === "mathbb") {
          return "double-struck";
        } else if (font === "mathfrak") {
          return "fraktur";
        } else if (font === "mathscr" || font === "mathcal") {
          return "script";
        } else if (font === "mathsf") {
          return "sans-serif";
        } else if (font === "mathtt") {
          return "monospace";
        }
        var text = group.text;
        if (utils.contains(["\\imath", "\\jmath"], text)) {
          return null;
        }
        if (src_symbols[mode][text] && src_symbols[mode][text].replace) {
          text = src_symbols[mode][text].replace;
        }
        var fontName = buildCommon.fontMap[font].fontName;
        if (getCharacterMetrics(text, fontName, mode)) {
          return buildCommon.fontMap[font].variant;
        }
        return null;
      };
      var buildMathML_buildExpression = function buildExpression2(expression, options2, isOrdgroup) {
        if (expression.length === 1) {
          var group = buildMathML_buildGroup(expression[0], options2);
          if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
            group.setAttribute("lspace", "0em");
            group.setAttribute("rspace", "0em");
          }
          return [group];
        }
        var groups = [];
        var lastGroup;
        for (var i2 = 0; i2 < expression.length; i2++) {
          var _group = buildMathML_buildGroup(expression[i2], options2);
          if (_group instanceof MathNode && lastGroup instanceof MathNode) {
            if (_group.type === "mtext" && lastGroup.type === "mtext" && _group.getAttribute("mathvariant") === lastGroup.getAttribute("mathvariant")) {
              var _lastGroup$children;
              (_lastGroup$children = lastGroup.children).push.apply(_lastGroup$children, _group.children);
              continue;
            } else if (_group.type === "mn" && lastGroup.type === "mn") {
              var _lastGroup$children2;
              (_lastGroup$children2 = lastGroup.children).push.apply(_lastGroup$children2, _group.children);
              continue;
            } else if (_group.type === "mi" && _group.children.length === 1 && lastGroup.type === "mn") {
              var child = _group.children[0];
              if (child instanceof TextNode && child.text === ".") {
                var _lastGroup$children3;
                (_lastGroup$children3 = lastGroup.children).push.apply(_lastGroup$children3, _group.children);
                continue;
              }
            } else if (lastGroup.type === "mi" && lastGroup.children.length === 1) {
              var lastChild = lastGroup.children[0];
              if (lastChild instanceof TextNode && lastChild.text === "\u0338" && (_group.type === "mo" || _group.type === "mi" || _group.type === "mn")) {
                var _child = _group.children[0];
                if (_child instanceof TextNode && _child.text.length > 0) {
                  _child.text = _child.text.slice(0, 1) + "\u0338" + _child.text.slice(1);
                  groups.pop();
                }
              }
            }
          }
          groups.push(_group);
          lastGroup = _group;
        }
        return groups;
      };
      var buildExpressionRow = function buildExpressionRow2(expression, options2, isOrdgroup) {
        return makeRow(buildMathML_buildExpression(expression, options2, isOrdgroup));
      };
      var buildMathML_buildGroup = function buildGroup2(group, options2) {
        if (!group) {
          return new mathMLTree.MathNode("mrow");
        }
        if (_mathmlGroupBuilders[group.type]) {
          var result = _mathmlGroupBuilders[group.type](group, options2);
          return result;
        } else {
          throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
        }
      };
      function buildMathML(tree, texExpression, options2, isDisplayMode, forMathmlOnly) {
        var expression = buildMathML_buildExpression(tree, options2);
        var wrapper;
        if (expression.length === 1 && expression[0] instanceof MathNode && utils.contains(["mrow", "mtable"], expression[0].type)) {
          wrapper = expression[0];
        } else {
          wrapper = new mathMLTree.MathNode("mrow", expression);
        }
        var annotation = new mathMLTree.MathNode("annotation", [new mathMLTree.TextNode(texExpression)]);
        annotation.setAttribute("encoding", "application/x-tex");
        var semantics = new mathMLTree.MathNode("semantics", [wrapper, annotation]);
        var math2 = new mathMLTree.MathNode("math", [semantics]);
        math2.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
        if (isDisplayMode) {
          math2.setAttribute("display", "block");
        }
        var wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
        return buildCommon.makeSpan([wrapperClass], [math2]);
      }
      ;
      var optionsFromSettings = function optionsFromSettings2(settings) {
        return new src_Options({
          style: settings.displayMode ? src_Style.DISPLAY : src_Style.TEXT,
          maxSize: settings.maxSize,
          minRuleThickness: settings.minRuleThickness
        });
      };
      var displayWrap = function displayWrap2(node, settings) {
        if (settings.displayMode) {
          var classes = ["katex-display"];
          if (settings.leqno) {
            classes.push("leqno");
          }
          if (settings.fleqn) {
            classes.push("fleqn");
          }
          node = buildCommon.makeSpan(classes, [node]);
        }
        return node;
      };
      var buildTree = function buildTree2(tree, expression, settings) {
        var options2 = optionsFromSettings(settings);
        var katexNode;
        if (settings.output === "mathml") {
          return buildMathML(tree, expression, options2, settings.displayMode, true);
        } else if (settings.output === "html") {
          var htmlNode = buildHTML(tree, options2);
          katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
        } else {
          var mathMLNode = buildMathML(tree, expression, options2, settings.displayMode, false);
          var _htmlNode = buildHTML(tree, options2);
          katexNode = buildCommon.makeSpan(["katex"], [mathMLNode, _htmlNode]);
        }
        return displayWrap(katexNode, settings);
      };
      var buildHTMLTree = function buildHTMLTree2(tree, expression, settings) {
        var options2 = optionsFromSettings(settings);
        var htmlNode = buildHTML(tree, options2);
        var katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
        return displayWrap(katexNode, settings);
      };
      var src_buildTree = null;
      ;
      var stretchyCodePoint = {
        widehat: "^",
        widecheck: "\u02C7",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "\u2190",
        underleftarrow: "\u2190",
        xleftarrow: "\u2190",
        overrightarrow: "\u2192",
        underrightarrow: "\u2192",
        xrightarrow: "\u2192",
        underbrace: "\u23DF",
        overbrace: "\u23DE",
        overgroup: "\u23E0",
        undergroup: "\u23E1",
        overleftrightarrow: "\u2194",
        underleftrightarrow: "\u2194",
        xleftrightarrow: "\u2194",
        Overrightarrow: "\u21D2",
        xRightarrow: "\u21D2",
        overleftharpoon: "\u21BC",
        xleftharpoonup: "\u21BC",
        overrightharpoon: "\u21C0",
        xrightharpoonup: "\u21C0",
        xLeftarrow: "\u21D0",
        xLeftrightarrow: "\u21D4",
        xhookleftarrow: "\u21A9",
        xhookrightarrow: "\u21AA",
        xmapsto: "\u21A6",
        xrightharpoondown: "\u21C1",
        xleftharpoondown: "\u21BD",
        xrightleftharpoons: "\u21CC",
        xleftrightharpoons: "\u21CB",
        xtwoheadleftarrow: "\u219E",
        xtwoheadrightarrow: "\u21A0",
        xlongequal: "=",
        xtofrom: "\u21C4",
        xrightleftarrows: "\u21C4",
        xrightequilibrium: "\u21CC",
        xleftequilibrium: "\u21CB",
        "\\\\cdrightarrow": "\u2192",
        "\\\\cdleftarrow": "\u2190",
        "\\\\cdlongequal": "="
      };
      var mathMLnode = function mathMLnode2(label) {
        var node = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(stretchyCodePoint[label])]);
        node.setAttribute("stretchy", "true");
        return node;
      };
      var katexImagesData = {
        overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
        "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
        xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
        "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
        Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
        xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
        xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
        overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
        overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
        xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
        "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
        xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
        xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
        overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
        underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
        underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
        xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
        xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
        xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
        xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
        xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
        overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
        undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
        xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
        xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
        xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
        xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
        xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
      };
      var groupLength = function groupLength2(arg) {
        if (arg.type === "ordgroup") {
          return arg.body.length;
        } else {
          return 1;
        }
      };
      var svgSpan = function svgSpan2(group, options2) {
        function buildSvgSpan_() {
          var viewBoxWidth = 4e5;
          var label = group.label.substr(1);
          if (utils.contains(["widehat", "widecheck", "widetilde", "utilde"], label)) {
            var grp = group;
            var numChars = groupLength(grp.base);
            var viewBoxHeight;
            var pathName;
            var _height;
            if (numChars > 5) {
              if (label === "widehat" || label === "widecheck") {
                viewBoxHeight = 420;
                viewBoxWidth = 2364;
                _height = 0.42;
                pathName = label + "4";
              } else {
                viewBoxHeight = 312;
                viewBoxWidth = 2340;
                _height = 0.34;
                pathName = "tilde4";
              }
            } else {
              var imgIndex = [1, 1, 2, 2, 3, 3][numChars];
              if (label === "widehat" || label === "widecheck") {
                viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
                viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
                _height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
                pathName = label + imgIndex;
              } else {
                viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
                viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
                _height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
                pathName = "tilde" + imgIndex;
              }
            }
            var path2 = new PathNode(pathName);
            var svgNode = new SvgNode([path2], {
              width: "100%",
              height: _height + "em",
              viewBox: "0 0 " + viewBoxWidth + " " + viewBoxHeight,
              preserveAspectRatio: "none"
            });
            return {
              span: buildCommon.makeSvgSpan([], [svgNode], options2),
              minWidth: 0,
              height: _height
            };
          } else {
            var spans = [];
            var data = katexImagesData[label];
            var paths = data[0], _minWidth = data[1], _viewBoxHeight = data[2];
            var _height2 = _viewBoxHeight / 1e3;
            var numSvgChildren = paths.length;
            var widthClasses;
            var aligns;
            if (numSvgChildren === 1) {
              var align1 = data[3];
              widthClasses = ["hide-tail"];
              aligns = [align1];
            } else if (numSvgChildren === 2) {
              widthClasses = ["halfarrow-left", "halfarrow-right"];
              aligns = ["xMinYMin", "xMaxYMin"];
            } else if (numSvgChildren === 3) {
              widthClasses = ["brace-left", "brace-center", "brace-right"];
              aligns = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            } else {
              throw new Error("Correct katexImagesData or update code here to support\n                    " + numSvgChildren + " children.");
            }
            for (var i2 = 0; i2 < numSvgChildren; i2++) {
              var _path = new PathNode(paths[i2]);
              var _svgNode = new SvgNode([_path], {
                width: "400em",
                height: _height2 + "em",
                viewBox: "0 0 " + viewBoxWidth + " " + _viewBoxHeight,
                preserveAspectRatio: aligns[i2] + " slice"
              });
              var _span = buildCommon.makeSvgSpan([widthClasses[i2]], [_svgNode], options2);
              if (numSvgChildren === 1) {
                return {
                  span: _span,
                  minWidth: _minWidth,
                  height: _height2
                };
              } else {
                _span.style.height = _height2 + "em";
                spans.push(_span);
              }
            }
            return {
              span: buildCommon.makeSpan(["stretchy"], spans, options2),
              minWidth: _minWidth,
              height: _height2
            };
          }
        }
        var _buildSvgSpan_ = buildSvgSpan_(), span = _buildSvgSpan_.span, minWidth = _buildSvgSpan_.minWidth, height = _buildSvgSpan_.height;
        span.height = height;
        span.style.height = height + "em";
        if (minWidth > 0) {
          span.style.minWidth = minWidth + "em";
        }
        return span;
      };
      var encloseSpan = function encloseSpan2(inner2, label, topPad, bottomPad, options2) {
        var img;
        var totalHeight = inner2.height + inner2.depth + topPad + bottomPad;
        if (/fbox|color|angl/.test(label)) {
          img = buildCommon.makeSpan(["stretchy", label], [], options2);
          if (label === "fbox") {
            var color = options2.color && options2.getColor();
            if (color) {
              img.style.borderColor = color;
            }
          }
        } else {
          var lines = [];
          if (/^[bx]cancel$/.test(label)) {
            lines.push(new LineNode({
              x1: "0",
              y1: "0",
              x2: "100%",
              y2: "100%",
              "stroke-width": "0.046em"
            }));
          }
          if (/^x?cancel$/.test(label)) {
            lines.push(new LineNode({
              x1: "0",
              y1: "100%",
              x2: "100%",
              y2: "0",
              "stroke-width": "0.046em"
            }));
          }
          var svgNode = new SvgNode(lines, {
            width: "100%",
            height: totalHeight + "em"
          });
          img = buildCommon.makeSvgSpan([], [svgNode], options2);
        }
        img.height = totalHeight;
        img.style.height = totalHeight + "em";
        return img;
      };
      var stretchy = {
        encloseSpan,
        mathMLnode,
        svgSpan
      };
      ;
      function assertNodeType(node, type) {
        if (!node || node.type !== type) {
          throw new Error("Expected node of type " + type + ", but got " + (node ? "node of type " + node.type : String(node)));
        }
        return node;
      }
      function assertSymbolNodeType(node) {
        var typedNode = checkSymbolNodeType(node);
        if (!typedNode) {
          throw new Error("Expected node of symbol group type, but got " + (node ? "node of type " + node.type : String(node)));
        }
        return typedNode;
      }
      function checkSymbolNodeType(node) {
        if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) {
          return node;
        }
        return null;
      }
      ;
      var htmlBuilder = function htmlBuilder2(grp, options2) {
        var base;
        var group;
        var supSubGroup;
        if (grp && grp.type === "supsub") {
          group = assertNodeType(grp.base, "accent");
          base = group.base;
          grp.base = base;
          supSubGroup = assertSpan(buildGroup(grp, options2));
          grp.base = group;
        } else {
          group = assertNodeType(grp, "accent");
          base = group.base;
        }
        var body = buildGroup(base, options2.havingCrampedStyle());
        var mustShift = group.isShifty && utils.isCharacterBox(base);
        var skew = 0;
        if (mustShift) {
          var baseChar = utils.getBaseElem(base);
          var baseGroup = buildGroup(baseChar, options2.havingCrampedStyle());
          skew = assertSymbolDomNode(baseGroup).skew;
        }
        var clearance = Math.min(body.height, options2.fontMetrics().xHeight);
        var accentBody;
        if (!group.isStretchy) {
          var accent2;
          var width;
          if (group.label === "\\vec") {
            accent2 = buildCommon.staticSvg("vec", options2);
            width = buildCommon.svgData.vec[1];
          } else {
            accent2 = buildCommon.makeOrd({
              mode: group.mode,
              text: group.label
            }, options2, "textord");
            accent2 = assertSymbolDomNode(accent2);
            accent2.italic = 0;
            width = accent2.width;
          }
          accentBody = buildCommon.makeSpan(["accent-body"], [accent2]);
          var accentFull = group.label === "\\textcircled";
          if (accentFull) {
            accentBody.classes.push("accent-full");
            clearance = body.height;
          }
          var left = skew;
          if (!accentFull) {
            left -= width / 2;
          }
          accentBody.style.left = left + "em";
          if (group.label === "\\textcircled") {
            accentBody.style.top = ".2em";
          }
          accentBody = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: body
            }, {
              type: "kern",
              size: -clearance
            }, {
              type: "elem",
              elem: accentBody
            }]
          }, options2);
        } else {
          accentBody = stretchy.svgSpan(group, options2);
          accentBody = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: body
            }, {
              type: "elem",
              elem: accentBody,
              wrapperClasses: ["svg-align"],
              wrapperStyle: skew > 0 ? {
                width: "calc(100% - " + 2 * skew + "em)",
                marginLeft: 2 * skew + "em"
              } : void 0
            }]
          }, options2);
        }
        var accentWrap = buildCommon.makeSpan(["mord", "accent"], [accentBody], options2);
        if (supSubGroup) {
          supSubGroup.children[0] = accentWrap;
          supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);
          supSubGroup.classes[0] = "mord";
          return supSubGroup;
        } else {
          return accentWrap;
        }
      };
      var mathmlBuilder = function mathmlBuilder2(group, options2) {
        var accentNode = group.isStretchy ? stretchy.mathMLnode(group.label) : new mathMLTree.MathNode("mo", [makeText(group.label, group.mode)]);
        var node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.base, options2), accentNode]);
        node.setAttribute("accent", "true");
        return node;
      };
      var NON_STRETCHY_ACCENT_REGEX = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(accent2) {
        return "\\" + accent2;
      }).join("|"));
      defineFunction({
        type: "accent",
        names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
        props: {
          numArgs: 1
        },
        handler: function handler2(context, args) {
          var base = normalizeArgument(args[0]);
          var isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
          var isShifty = !isStretchy || context.funcName === "\\widehat" || context.funcName === "\\widetilde" || context.funcName === "\\widecheck";
          return {
            type: "accent",
            mode: context.parser.mode,
            label: context.funcName,
            isStretchy,
            isShifty,
            base
          };
        },
        htmlBuilder,
        mathmlBuilder
      });
      defineFunction({
        type: "accent",
        names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
        props: {
          numArgs: 1,
          allowedInText: true,
          allowedInMath: false,
          argTypes: ["primitive"]
        },
        handler: function handler2(context, args) {
          var base = args[0];
          return {
            type: "accent",
            mode: context.parser.mode,
            label: context.funcName,
            isStretchy: false,
            isShifty: true,
            base
          };
        },
        htmlBuilder,
        mathmlBuilder
      });
      ;
      defineFunction({
        type: "accentUnder",
        names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var base = args[0];
          return {
            type: "accentUnder",
            mode: parser.mode,
            label: funcName,
            base
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var innerGroup = buildGroup(group.base, options2);
          var accentBody = stretchy.svgSpan(group, options2);
          var kern = group.label === "\\utilde" ? 0.12 : 0;
          var vlist = buildCommon.makeVList({
            positionType: "top",
            positionData: innerGroup.height,
            children: [{
              type: "elem",
              elem: accentBody,
              wrapperClasses: ["svg-align"]
            }, {
              type: "kern",
              size: kern
            }, {
              type: "elem",
              elem: innerGroup
            }]
          }, options2);
          return buildCommon.makeSpan(["mord", "accentunder"], [vlist], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var accentNode = stretchy.mathMLnode(group.label);
          var node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.base, options2), accentNode]);
          node.setAttribute("accentunder", "true");
          return node;
        }
      });
      ;
      var paddedNode = function paddedNode2(group) {
        var node = new mathMLTree.MathNode("mpadded", group ? [group] : []);
        node.setAttribute("width", "+0.6em");
        node.setAttribute("lspace", "0.3em");
        return node;
      };
      defineFunction({
        type: "xArrow",
        names: [
          "\\xleftarrow",
          "\\xrightarrow",
          "\\xLeftarrow",
          "\\xRightarrow",
          "\\xleftrightarrow",
          "\\xLeftrightarrow",
          "\\xhookleftarrow",
          "\\xhookrightarrow",
          "\\xmapsto",
          "\\xrightharpoondown",
          "\\xrightharpoonup",
          "\\xleftharpoondown",
          "\\xleftharpoonup",
          "\\xrightleftharpoons",
          "\\xleftrightharpoons",
          "\\xlongequal",
          "\\xtwoheadrightarrow",
          "\\xtwoheadleftarrow",
          "\\xtofrom",
          "\\xrightleftarrows",
          "\\xrightequilibrium",
          "\\xleftequilibrium",
          "\\\\cdrightarrow",
          "\\\\cdleftarrow",
          "\\\\cdlongequal"
        ],
        props: {
          numArgs: 1,
          numOptionalArgs: 1
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser, funcName = _ref.funcName;
          return {
            type: "xArrow",
            mode: parser.mode,
            label: funcName,
            body: args[0],
            below: optArgs[0]
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var style = options2.style;
          var newOptions = options2.havingStyle(style.sup());
          var upperGroup = buildCommon.wrapFragment(buildGroup(group.body, newOptions, options2), options2);
          var arrowPrefix = group.label.slice(0, 2) === "\\x" ? "x" : "cd";
          upperGroup.classes.push(arrowPrefix + "-arrow-pad");
          var lowerGroup;
          if (group.below) {
            newOptions = options2.havingStyle(style.sub());
            lowerGroup = buildCommon.wrapFragment(buildGroup(group.below, newOptions, options2), options2);
            lowerGroup.classes.push(arrowPrefix + "-arrow-pad");
          }
          var arrowBody = stretchy.svgSpan(group, options2);
          var arrowShift = -options2.fontMetrics().axisHeight + 0.5 * arrowBody.height;
          var upperShift = -options2.fontMetrics().axisHeight - 0.5 * arrowBody.height - 0.111;
          if (upperGroup.depth > 0.25 || group.label === "\\xleftequilibrium") {
            upperShift -= upperGroup.depth;
          }
          var vlist;
          if (lowerGroup) {
            var lowerShift = -options2.fontMetrics().axisHeight + lowerGroup.height + 0.5 * arrowBody.height + 0.111;
            vlist = buildCommon.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: upperGroup,
                shift: upperShift
              }, {
                type: "elem",
                elem: arrowBody,
                shift: arrowShift
              }, {
                type: "elem",
                elem: lowerGroup,
                shift: lowerShift
              }]
            }, options2);
          } else {
            vlist = buildCommon.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: upperGroup,
                shift: upperShift
              }, {
                type: "elem",
                elem: arrowBody,
                shift: arrowShift
              }]
            }, options2);
          }
          vlist.children[0].children[0].children[1].classes.push("svg-align");
          return buildCommon.makeSpan(["mrel", "x-arrow"], [vlist], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var arrowNode = stretchy.mathMLnode(group.label);
          arrowNode.setAttribute("minsize", group.label.charAt(0) === "x" ? "1.75em" : "3.0em");
          var node;
          if (group.body) {
            var upperNode = paddedNode(buildMathML_buildGroup(group.body, options2));
            if (group.below) {
              var lowerNode = paddedNode(buildMathML_buildGroup(group.below, options2));
              node = new mathMLTree.MathNode("munderover", [arrowNode, lowerNode, upperNode]);
            } else {
              node = new mathMLTree.MathNode("mover", [arrowNode, upperNode]);
            }
          } else if (group.below) {
            var _lowerNode = paddedNode(buildMathML_buildGroup(group.below, options2));
            node = new mathMLTree.MathNode("munder", [arrowNode, _lowerNode]);
          } else {
            node = paddedNode();
            node = new mathMLTree.MathNode("mover", [arrowNode, node]);
          }
          return node;
        }
      });
      ;
      var cdArrowFunctionName = {
        ">": "\\\\cdrightarrow",
        "<": "\\\\cdleftarrow",
        "=": "\\\\cdlongequal",
        A: "\\uparrow",
        V: "\\downarrow",
        "|": "\\Vert",
        ".": "no arrow"
      };
      var newCell = function newCell2() {
        return {
          type: "styling",
          body: [],
          mode: "math",
          style: "display"
        };
      };
      var isStartOfArrow = function isStartOfArrow2(node) {
        return node.type === "textord" && node.text === "@";
      };
      var isLabelEnd = function isLabelEnd2(node, endChar) {
        return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
      };
      function cdArrow(arrowChar, labels, parser) {
        var funcName = cdArrowFunctionName[arrowChar];
        switch (funcName) {
          case "\\\\cdrightarrow":
          case "\\\\cdleftarrow":
            return parser.callFunction(funcName, [labels[0]], [labels[1]]);
          case "\\uparrow":
          case "\\downarrow": {
            var leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
            var bareArrow = {
              type: "atom",
              text: funcName,
              mode: "math",
              family: "rel"
            };
            var sizedArrow = parser.callFunction("\\Big", [bareArrow], []);
            var rightLabel = parser.callFunction("\\\\cdright", [labels[1]], []);
            var arrowGroup = {
              type: "ordgroup",
              mode: "math",
              body: [leftLabel, sizedArrow, rightLabel]
            };
            return parser.callFunction("\\\\cdparent", [arrowGroup], []);
          }
          case "\\\\cdlongequal":
            return parser.callFunction("\\\\cdlongequal", [], []);
          case "\\Vert": {
            var arrow = {
              type: "textord",
              text: "\\Vert",
              mode: "math"
            };
            return parser.callFunction("\\Big", [arrow], []);
          }
          default:
            return {
              type: "textord",
              text: " ",
              mode: "math"
            };
        }
      }
      function parseCD(parser) {
        var parsedRows = [];
        parser.gullet.beginGroup();
        parser.gullet.macros.set("\\cr", "\\\\\\relax");
        parser.gullet.beginGroup();
        while (true) {
          parsedRows.push(parser.parseExpression(false, "\\\\"));
          parser.gullet.endGroup();
          parser.gullet.beginGroup();
          var next = parser.fetch().text;
          if (next === "&" || next === "\\\\") {
            parser.consume();
          } else if (next === "\\end") {
            if (parsedRows[parsedRows.length - 1].length === 0) {
              parsedRows.pop();
            }
            break;
          } else {
            throw new src_ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
          }
        }
        var row = [];
        var body = [row];
        for (var i2 = 0; i2 < parsedRows.length; i2++) {
          var rowNodes = parsedRows[i2];
          var cell = newCell();
          for (var j = 0; j < rowNodes.length; j++) {
            if (!isStartOfArrow(rowNodes[j])) {
              cell.body.push(rowNodes[j]);
            } else {
              row.push(cell);
              j += 1;
              var arrowChar = assertSymbolNodeType(rowNodes[j]).text;
              var labels = new Array(2);
              labels[0] = {
                type: "ordgroup",
                mode: "math",
                body: []
              };
              labels[1] = {
                type: "ordgroup",
                mode: "math",
                body: []
              };
              if ("=|.".indexOf(arrowChar) > -1) {
              } else if ("<>AV".indexOf(arrowChar) > -1) {
                for (var labelNum = 0; labelNum < 2; labelNum++) {
                  var inLabel = true;
                  for (var k = j + 1; k < rowNodes.length; k++) {
                    if (isLabelEnd(rowNodes[k], arrowChar)) {
                      inLabel = false;
                      j = k;
                      break;
                    }
                    if (isStartOfArrow(rowNodes[k])) {
                      throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
                    }
                    labels[labelNum].body.push(rowNodes[k]);
                  }
                  if (inLabel) {
                    throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j]);
                  }
                }
              } else {
                throw new src_ParseError('Expected one of "<>AV=|." after @', rowNodes[j]);
              }
              var arrow = cdArrow(arrowChar, labels, parser);
              var wrappedArrow = {
                type: "styling",
                body: [arrow],
                mode: "math",
                style: "display"
              };
              row.push(wrappedArrow);
              cell = newCell();
            }
          }
          if (i2 % 2 === 0) {
            row.push(cell);
          } else {
            row.shift();
          }
          row = [];
          body.push(row);
        }
        parser.gullet.endGroup();
        parser.gullet.endGroup();
        var cols = new Array(body[0].length).fill({
          type: "align",
          align: "c",
          pregap: 0.25,
          postgap: 0.25
        });
        return {
          type: "array",
          mode: "math",
          body,
          arraystretch: 1,
          addJot: true,
          rowGaps: [null],
          cols,
          colSeparationType: "CD",
          hLinesBeforeRow: new Array(body.length + 1).fill([])
        };
      }
      defineFunction({
        type: "cdlabel",
        names: ["\\\\cdleft", "\\\\cdright"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          return {
            type: "cdlabel",
            mode: parser.mode,
            side: funcName.slice(4),
            label: args[0]
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var newOptions = options2.havingStyle(options2.style.sup());
          var label = buildCommon.wrapFragment(buildGroup(group.label, newOptions, options2), options2);
          label.classes.push("cd-label-" + group.side);
          label.style.bottom = 0.8 - label.depth + "em";
          label.height = 0;
          label.depth = 0;
          return label;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var label = new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.label, options2)]);
          label = new mathMLTree.MathNode("mpadded", [label]);
          label.setAttribute("width", "0");
          if (group.side === "left") {
            label.setAttribute("lspace", "-1width");
          }
          label.setAttribute("voffset", "0.7em");
          label = new mathMLTree.MathNode("mstyle", [label]);
          label.setAttribute("displaystyle", "false");
          label.setAttribute("scriptlevel", "1");
          return label;
        }
      });
      defineFunction({
        type: "cdlabelparent",
        names: ["\\\\cdparent"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          return {
            type: "cdlabelparent",
            mode: parser.mode,
            fragment: args[0]
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var parent = buildCommon.wrapFragment(buildGroup(group.fragment, options2), options2);
          parent.classes.push("cd-vert-arrow");
          return parent;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.fragment, options2)]);
        }
      });
      ;
      defineFunction({
        type: "textord",
        names: ["\\@char"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var arg = assertNodeType(args[0], "ordgroup");
          var group = arg.body;
          var number = "";
          for (var i2 = 0; i2 < group.length; i2++) {
            var node = assertNodeType(group[i2], "textord");
            number += node.text;
          }
          var code = parseInt(number);
          if (isNaN(code)) {
            throw new src_ParseError("\\@char has non-numeric argument " + number);
          }
          return {
            type: "textord",
            mode: parser.mode,
            text: String.fromCharCode(code)
          };
        }
      });
      ;
      var color_htmlBuilder = function htmlBuilder2(group, options2) {
        var elements = buildExpression(group.body, options2.withColor(group.color), false);
        return buildCommon.makeFragment(elements);
      };
      var color_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var inner2 = buildMathML_buildExpression(group.body, options2.withColor(group.color));
        var node = new mathMLTree.MathNode("mstyle", inner2);
        node.setAttribute("mathcolor", group.color);
        return node;
      };
      defineFunction({
        type: "color",
        names: ["\\textcolor"],
        props: {
          numArgs: 2,
          allowedInText: true,
          argTypes: ["color", "original"]
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var color = assertNodeType(args[0], "color-token").color;
          var body = args[1];
          return {
            type: "color",
            mode: parser.mode,
            color,
            body: ordargument(body)
          };
        },
        htmlBuilder: color_htmlBuilder,
        mathmlBuilder: color_mathmlBuilder
      });
      defineFunction({
        type: "color",
        names: ["\\color"],
        props: {
          numArgs: 1,
          allowedInText: true,
          argTypes: ["color"]
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser, breakOnTokenText = _ref2.breakOnTokenText;
          var color = assertNodeType(args[0], "color-token").color;
          parser.gullet.macros.set("\\current@color", color);
          var body = parser.parseExpression(true, breakOnTokenText);
          return {
            type: "color",
            mode: parser.mode,
            color,
            body
          };
        },
        htmlBuilder: color_htmlBuilder,
        mathmlBuilder: color_mathmlBuilder
      });
      ;
      defineFunction({
        type: "cr",
        names: ["\\\\"],
        props: {
          numArgs: 0,
          numOptionalArgs: 1,
          argTypes: ["size"],
          allowedInText: true
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser;
          var size = optArgs[0];
          var newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
          return {
            type: "cr",
            mode: parser.mode,
            newLine,
            size: size && assertNodeType(size, "size").value
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var span = buildCommon.makeSpan(["mspace"], [], options2);
          if (group.newLine) {
            span.classes.push("newline");
            if (group.size) {
              span.style.marginTop = calculateSize(group.size, options2) + "em";
            }
          }
          return span;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mspace");
          if (group.newLine) {
            node.setAttribute("linebreak", "newline");
            if (group.size) {
              node.setAttribute("height", calculateSize(group.size, options2) + "em");
            }
          }
          return node;
        }
      });
      ;
      var globalMap = {
        "\\global": "\\global",
        "\\long": "\\\\globallong",
        "\\\\globallong": "\\\\globallong",
        "\\def": "\\gdef",
        "\\gdef": "\\gdef",
        "\\edef": "\\xdef",
        "\\xdef": "\\xdef",
        "\\let": "\\\\globallet",
        "\\futurelet": "\\\\globalfuture"
      };
      var checkControlSequence = function checkControlSequence2(tok) {
        var name = tok.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
          throw new src_ParseError("Expected a control sequence", tok);
        }
        return name;
      };
      var getRHS = function getRHS2(parser) {
        var tok = parser.gullet.popToken();
        if (tok.text === "=") {
          tok = parser.gullet.popToken();
          if (tok.text === " ") {
            tok = parser.gullet.popToken();
          }
        }
        return tok;
      };
      var letCommand = function letCommand2(parser, name, tok, global2) {
        var macro = parser.gullet.macros.get(tok.text);
        if (macro == null) {
          tok.noexpand = true;
          macro = {
            tokens: [tok],
            numArgs: 0,
            unexpandable: !parser.gullet.isExpandable(tok.text)
          };
        }
        parser.gullet.macros.set(name, macro, global2);
      };
      defineFunction({
        type: "internal",
        names: [
          "\\global",
          "\\long",
          "\\\\globallong"
        ],
        props: {
          numArgs: 0,
          allowedInText: true
        },
        handler: function handler2(_ref) {
          var parser = _ref.parser, funcName = _ref.funcName;
          parser.consumeSpaces();
          var token = parser.fetch();
          if (globalMap[token.text]) {
            if (funcName === "\\global" || funcName === "\\\\globallong") {
              token.text = globalMap[token.text];
            }
            return assertNodeType(parser.parseFunction(), "internal");
          }
          throw new src_ParseError("Invalid token after macro prefix", token);
        }
      });
      defineFunction({
        type: "internal",
        names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
        props: {
          numArgs: 0,
          allowedInText: true,
          primitive: true
        },
        handler: function handler2(_ref2) {
          var parser = _ref2.parser, funcName = _ref2.funcName;
          var tok = parser.gullet.popToken();
          var name = tok.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
            throw new src_ParseError("Expected a control sequence", tok);
          }
          var numArgs = 0;
          var insert;
          var delimiters2 = [[]];
          while (parser.gullet.future().text !== "{") {
            tok = parser.gullet.popToken();
            if (tok.text === "#") {
              if (parser.gullet.future().text === "{") {
                insert = parser.gullet.future();
                delimiters2[numArgs].push("{");
                break;
              }
              tok = parser.gullet.popToken();
              if (!/^[1-9]$/.test(tok.text)) {
                throw new src_ParseError('Invalid argument number "' + tok.text + '"');
              }
              if (parseInt(tok.text) !== numArgs + 1) {
                throw new src_ParseError('Argument number "' + tok.text + '" out of order');
              }
              numArgs++;
              delimiters2.push([]);
            } else if (tok.text === "EOF") {
              throw new src_ParseError("Expected a macro definition");
            } else {
              delimiters2[numArgs].push(tok.text);
            }
          }
          var _parser$gullet$consum = parser.gullet.consumeArg(), tokens = _parser$gullet$consum.tokens;
          if (insert) {
            tokens.unshift(insert);
          }
          if (funcName === "\\edef" || funcName === "\\xdef") {
            tokens = parser.gullet.expandTokens(tokens);
            tokens.reverse();
          }
          parser.gullet.macros.set(name, {
            tokens,
            numArgs,
            delimiters: delimiters2
          }, funcName === globalMap[funcName]);
          return {
            type: "internal",
            mode: parser.mode
          };
        }
      });
      defineFunction({
        type: "internal",
        names: [
          "\\let",
          "\\\\globallet"
        ],
        props: {
          numArgs: 0,
          allowedInText: true,
          primitive: true
        },
        handler: function handler2(_ref3) {
          var parser = _ref3.parser, funcName = _ref3.funcName;
          var name = checkControlSequence(parser.gullet.popToken());
          parser.gullet.consumeSpaces();
          var tok = getRHS(parser);
          letCommand(parser, name, tok, funcName === "\\\\globallet");
          return {
            type: "internal",
            mode: parser.mode
          };
        }
      });
      defineFunction({
        type: "internal",
        names: [
          "\\futurelet",
          "\\\\globalfuture"
        ],
        props: {
          numArgs: 0,
          allowedInText: true,
          primitive: true
        },
        handler: function handler2(_ref4) {
          var parser = _ref4.parser, funcName = _ref4.funcName;
          var name = checkControlSequence(parser.gullet.popToken());
          var middle = parser.gullet.popToken();
          var tok = parser.gullet.popToken();
          letCommand(parser, name, tok, funcName === "\\\\globalfuture");
          parser.gullet.pushToken(tok);
          parser.gullet.pushToken(middle);
          return {
            type: "internal",
            mode: parser.mode
          };
        }
      });
      ;
      var getMetrics = function getMetrics2(symbol, font, mode) {
        var replace = src_symbols.math[symbol] && src_symbols.math[symbol].replace;
        var metrics = getCharacterMetrics(replace || symbol, font, mode);
        if (!metrics) {
          throw new Error("Unsupported symbol " + symbol + " and font size " + font + ".");
        }
        return metrics;
      };
      var styleWrap = function styleWrap2(delim, toStyle, options2, classes) {
        var newOptions = options2.havingBaseStyle(toStyle);
        var span = buildCommon.makeSpan(classes.concat(newOptions.sizingClasses(options2)), [delim], options2);
        var delimSizeMultiplier = newOptions.sizeMultiplier / options2.sizeMultiplier;
        span.height *= delimSizeMultiplier;
        span.depth *= delimSizeMultiplier;
        span.maxFontSize = newOptions.sizeMultiplier;
        return span;
      };
      var centerSpan = function centerSpan2(span, options2, style) {
        var newOptions = options2.havingBaseStyle(style);
        var shift = (1 - options2.sizeMultiplier / newOptions.sizeMultiplier) * options2.fontMetrics().axisHeight;
        span.classes.push("delimcenter");
        span.style.top = shift + "em";
        span.height -= shift;
        span.depth += shift;
      };
      var makeSmallDelim = function makeSmallDelim2(delim, style, center, options2, mode, classes) {
        var text = buildCommon.makeSymbol(delim, "Main-Regular", mode, options2);
        var span = styleWrap(text, style, options2, classes);
        if (center) {
          centerSpan(span, options2, style);
        }
        return span;
      };
      var mathrmSize = function mathrmSize2(value, size, mode, options2) {
        return buildCommon.makeSymbol(value, "Size" + size + "-Regular", mode, options2);
      };
      var makeLargeDelim = function makeLargeDelim2(delim, size, center, options2, mode, classes) {
        var inner2 = mathrmSize(delim, size, mode, options2);
        var span = styleWrap(buildCommon.makeSpan(["delimsizing", "size" + size], [inner2], options2), src_Style.TEXT, options2, classes);
        if (center) {
          centerSpan(span, options2, src_Style.TEXT);
        }
        return span;
      };
      var makeGlyphSpan = function makeGlyphSpan2(symbol, font, mode) {
        var sizeClass;
        if (font === "Size1-Regular") {
          sizeClass = "delim-size1";
        } else {
          sizeClass = "delim-size4";
        }
        var corner = buildCommon.makeSpan(["delimsizinginner", sizeClass], [buildCommon.makeSpan([], [buildCommon.makeSymbol(symbol, font, mode)])]);
        return {
          type: "elem",
          elem: corner
        };
      };
      var makeInner = function makeInner2(ch2, height, options2) {
        var width = fontMetricsData["Size4-Regular"][ch2.charCodeAt(0)] ? fontMetricsData["Size4-Regular"][ch2.charCodeAt(0)][4].toFixed(3) : fontMetricsData["Size1-Regular"][ch2.charCodeAt(0)][4].toFixed(3);
        var path2 = new PathNode("inner", innerPath(ch2, Math.round(1e3 * height)));
        var svgNode = new SvgNode([path2], {
          width: width + "em",
          height: height + "em",
          style: "width:" + width + "em",
          viewBox: "0 0 " + 1e3 * width + " " + Math.round(1e3 * height),
          preserveAspectRatio: "xMinYMin"
        });
        var span = buildCommon.makeSvgSpan([], [svgNode], options2);
        span.height = height;
        span.style.height = height + "em";
        span.style.width = width + "em";
        return {
          type: "elem",
          elem: span
        };
      };
      var lapInEms = 8e-3;
      var lap = {
        type: "kern",
        size: -1 * lapInEms
      };
      var verts = ["|", "\\lvert", "\\rvert", "\\vert"];
      var doubleVerts = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
      var makeStackedDelim = function makeStackedDelim2(delim, heightTotal, center, options2, mode, classes) {
        var top;
        var middle;
        var repeat;
        var bottom;
        top = repeat = bottom = delim;
        middle = null;
        var font = "Size1-Regular";
        if (delim === "\\uparrow") {
          repeat = bottom = "\u23D0";
        } else if (delim === "\\Uparrow") {
          repeat = bottom = "\u2016";
        } else if (delim === "\\downarrow") {
          top = repeat = "\u23D0";
        } else if (delim === "\\Downarrow") {
          top = repeat = "\u2016";
        } else if (delim === "\\updownarrow") {
          top = "\\uparrow";
          repeat = "\u23D0";
          bottom = "\\downarrow";
        } else if (delim === "\\Updownarrow") {
          top = "\\Uparrow";
          repeat = "\u2016";
          bottom = "\\Downarrow";
        } else if (utils.contains(verts, delim)) {
          repeat = "\u2223";
        } else if (utils.contains(doubleVerts, delim)) {
          repeat = "\u2225";
        } else if (delim === "[" || delim === "\\lbrack") {
          top = "\u23A1";
          repeat = "\u23A2";
          bottom = "\u23A3";
          font = "Size4-Regular";
        } else if (delim === "]" || delim === "\\rbrack") {
          top = "\u23A4";
          repeat = "\u23A5";
          bottom = "\u23A6";
          font = "Size4-Regular";
        } else if (delim === "\\lfloor" || delim === "\u230A") {
          repeat = top = "\u23A2";
          bottom = "\u23A3";
          font = "Size4-Regular";
        } else if (delim === "\\lceil" || delim === "\u2308") {
          top = "\u23A1";
          repeat = bottom = "\u23A2";
          font = "Size4-Regular";
        } else if (delim === "\\rfloor" || delim === "\u230B") {
          repeat = top = "\u23A5";
          bottom = "\u23A6";
          font = "Size4-Regular";
        } else if (delim === "\\rceil" || delim === "\u2309") {
          top = "\u23A4";
          repeat = bottom = "\u23A5";
          font = "Size4-Regular";
        } else if (delim === "(" || delim === "\\lparen") {
          top = "\u239B";
          repeat = "\u239C";
          bottom = "\u239D";
          font = "Size4-Regular";
        } else if (delim === ")" || delim === "\\rparen") {
          top = "\u239E";
          repeat = "\u239F";
          bottom = "\u23A0";
          font = "Size4-Regular";
        } else if (delim === "\\{" || delim === "\\lbrace") {
          top = "\u23A7";
          middle = "\u23A8";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\}" || delim === "\\rbrace") {
          top = "\u23AB";
          middle = "\u23AC";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\lgroup" || delim === "\u27EE") {
          top = "\u23A7";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\rgroup" || delim === "\u27EF") {
          top = "\u23AB";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\lmoustache" || delim === "\u23B0") {
          top = "\u23A7";
          bottom = "\u23AD";
          repeat = "\u23AA";
          font = "Size4-Regular";
        } else if (delim === "\\rmoustache" || delim === "\u23B1") {
          top = "\u23AB";
          bottom = "\u23A9";
          repeat = "\u23AA";
          font = "Size4-Regular";
        }
        var topMetrics = getMetrics(top, font, mode);
        var topHeightTotal = topMetrics.height + topMetrics.depth;
        var repeatMetrics = getMetrics(repeat, font, mode);
        var repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
        var bottomMetrics = getMetrics(bottom, font, mode);
        var bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
        var middleHeightTotal = 0;
        var middleFactor = 1;
        if (middle !== null) {
          var middleMetrics = getMetrics(middle, font, mode);
          middleHeightTotal = middleMetrics.height + middleMetrics.depth;
          middleFactor = 2;
        }
        var minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;
        var repeatCount = Math.max(0, Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal)));
        var realHeightTotal = minHeight + repeatCount * middleFactor * repeatHeightTotal;
        var axisHeight = options2.fontMetrics().axisHeight;
        if (center) {
          axisHeight *= options2.sizeMultiplier;
        }
        var depth = realHeightTotal / 2 - axisHeight;
        var stack = [];
        stack.push(makeGlyphSpan(bottom, font, mode));
        stack.push(lap);
        if (middle === null) {
          var innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal + 2 * lapInEms;
          stack.push(makeInner(repeat, innerHeight, options2));
        } else {
          var _innerHeight = (realHeightTotal - topHeightTotal - bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
          stack.push(makeInner(repeat, _innerHeight, options2));
          stack.push(lap);
          stack.push(makeGlyphSpan(middle, font, mode));
          stack.push(lap);
          stack.push(makeInner(repeat, _innerHeight, options2));
        }
        stack.push(lap);
        stack.push(makeGlyphSpan(top, font, mode));
        var newOptions = options2.havingBaseStyle(src_Style.TEXT);
        var inner2 = buildCommon.makeVList({
          positionType: "bottom",
          positionData: depth,
          children: stack
        }, newOptions);
        return styleWrap(buildCommon.makeSpan(["delimsizing", "mult"], [inner2], newOptions), src_Style.TEXT, options2, classes);
      };
      var vbPad = 80;
      var emPad = 0.08;
      var sqrtSvg = function sqrtSvg2(sqrtName, height, viewBoxHeight, extraViniculum, options2) {
        var path2 = sqrtPath(sqrtName, extraViniculum, viewBoxHeight);
        var pathNode = new PathNode(sqrtName, path2);
        var svg = new SvgNode([pathNode], {
          width: "400em",
          height: height + "em",
          viewBox: "0 0 400000 " + viewBoxHeight,
          preserveAspectRatio: "xMinYMin slice"
        });
        return buildCommon.makeSvgSpan(["hide-tail"], [svg], options2);
      };
      var makeSqrtImage = function makeSqrtImage2(height, options2) {
        var newOptions = options2.havingBaseSizing();
        var delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier, stackLargeDelimiterSequence, newOptions);
        var sizeMultiplier = newOptions.sizeMultiplier;
        var extraViniculum = Math.max(0, options2.minRuleThickness - options2.fontMetrics().sqrtRuleThickness);
        var span;
        var spanHeight = 0;
        var texHeight = 0;
        var viewBoxHeight = 0;
        var advanceWidth;
        if (delim.type === "small") {
          viewBoxHeight = 1e3 + 1e3 * extraViniculum + vbPad;
          if (height < 1) {
            sizeMultiplier = 1;
          } else if (height < 1.4) {
            sizeMultiplier = 0.7;
          }
          spanHeight = (1 + extraViniculum + emPad) / sizeMultiplier;
          texHeight = (1 + extraViniculum) / sizeMultiplier;
          span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraViniculum, options2);
          span.style.minWidth = "0.853em";
          advanceWidth = 0.833 / sizeMultiplier;
        } else if (delim.type === "large") {
          viewBoxHeight = (1e3 + vbPad) * sizeToMaxHeight[delim.size];
          texHeight = (sizeToMaxHeight[delim.size] + extraViniculum) / sizeMultiplier;
          spanHeight = (sizeToMaxHeight[delim.size] + extraViniculum + emPad) / sizeMultiplier;
          span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, extraViniculum, options2);
          span.style.minWidth = "1.02em";
          advanceWidth = 1 / sizeMultiplier;
        } else {
          spanHeight = height + extraViniculum + emPad;
          texHeight = height + extraViniculum;
          viewBoxHeight = Math.floor(1e3 * height + extraViniculum) + vbPad;
          span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraViniculum, options2);
          span.style.minWidth = "0.742em";
          advanceWidth = 1.056;
        }
        span.height = texHeight;
        span.style.height = spanHeight + "em";
        return {
          span,
          advanceWidth,
          ruleWidth: (options2.fontMetrics().sqrtRuleThickness + extraViniculum) * sizeMultiplier
        };
      };
      var stackLargeDelimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"];
      var stackAlwaysDelimiters = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"];
      var stackNeverDelimiters = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
      var sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3];
      var makeSizedDelim = function makeSizedDelim2(delim, size, options2, mode, classes) {
        if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
          delim = "\\langle";
        } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
          delim = "\\rangle";
        }
        if (utils.contains(stackLargeDelimiters, delim) || utils.contains(stackNeverDelimiters, delim)) {
          return makeLargeDelim(delim, size, false, options2, mode, classes);
        } else if (utils.contains(stackAlwaysDelimiters, delim)) {
          return makeStackedDelim(delim, sizeToMaxHeight[size], false, options2, mode, classes);
        } else {
          throw new src_ParseError("Illegal delimiter: '" + delim + "'");
        }
      };
      var stackNeverDelimiterSequence = [{
        type: "small",
        style: src_Style.SCRIPTSCRIPT
      }, {
        type: "small",
        style: src_Style.SCRIPT
      }, {
        type: "small",
        style: src_Style.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }];
      var stackAlwaysDelimiterSequence = [{
        type: "small",
        style: src_Style.SCRIPTSCRIPT
      }, {
        type: "small",
        style: src_Style.SCRIPT
      }, {
        type: "small",
        style: src_Style.TEXT
      }, {
        type: "stack"
      }];
      var stackLargeDelimiterSequence = [{
        type: "small",
        style: src_Style.SCRIPTSCRIPT
      }, {
        type: "small",
        style: src_Style.SCRIPT
      }, {
        type: "small",
        style: src_Style.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }];
      var delimTypeToFont = function delimTypeToFont2(type) {
        if (type.type === "small") {
          return "Main-Regular";
        } else if (type.type === "large") {
          return "Size" + type.size + "-Regular";
        } else if (type.type === "stack") {
          return "Size4-Regular";
        } else {
          throw new Error("Add support for delim type '" + type.type + "' here.");
        }
      };
      var traverseSequence = function traverseSequence2(delim, height, sequence, options2) {
        var start = Math.min(2, 3 - options2.style.size);
        for (var i2 = start; i2 < sequence.length; i2++) {
          if (sequence[i2].type === "stack") {
            break;
          }
          var metrics = getMetrics(delim, delimTypeToFont(sequence[i2]), "math");
          var heightDepth = metrics.height + metrics.depth;
          if (sequence[i2].type === "small") {
            var newOptions = options2.havingBaseStyle(sequence[i2].style);
            heightDepth *= newOptions.sizeMultiplier;
          }
          if (heightDepth > height) {
            return sequence[i2];
          }
        }
        return sequence[sequence.length - 1];
      };
      var makeCustomSizedDelim = function makeCustomSizedDelim2(delim, height, center, options2, mode, classes) {
        if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
          delim = "\\langle";
        } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
          delim = "\\rangle";
        }
        var sequence;
        if (utils.contains(stackNeverDelimiters, delim)) {
          sequence = stackNeverDelimiterSequence;
        } else if (utils.contains(stackLargeDelimiters, delim)) {
          sequence = stackLargeDelimiterSequence;
        } else {
          sequence = stackAlwaysDelimiterSequence;
        }
        var delimType = traverseSequence(delim, height, sequence, options2);
        if (delimType.type === "small") {
          return makeSmallDelim(delim, delimType.style, center, options2, mode, classes);
        } else if (delimType.type === "large") {
          return makeLargeDelim(delim, delimType.size, center, options2, mode, classes);
        } else {
          return makeStackedDelim(delim, height, center, options2, mode, classes);
        }
      };
      var makeLeftRightDelim = function makeLeftRightDelim2(delim, height, depth, options2, mode, classes) {
        var axisHeight = options2.fontMetrics().axisHeight * options2.sizeMultiplier;
        var delimiterFactor = 901;
        var delimiterExtend = 5 / options2.fontMetrics().ptPerEm;
        var maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
        var totalHeight = Math.max(maxDistFromAxis / 500 * delimiterFactor, 2 * maxDistFromAxis - delimiterExtend);
        return makeCustomSizedDelim(delim, totalHeight, true, options2, mode, classes);
      };
      var delimiter = {
        sqrtImage: makeSqrtImage,
        sizedDelim: makeSizedDelim,
        sizeToMaxHeight,
        customSizedDelim: makeCustomSizedDelim,
        leftRightDelim: makeLeftRightDelim
      };
      ;
      var delimiterSizes = {
        "\\bigl": {
          mclass: "mopen",
          size: 1
        },
        "\\Bigl": {
          mclass: "mopen",
          size: 2
        },
        "\\biggl": {
          mclass: "mopen",
          size: 3
        },
        "\\Biggl": {
          mclass: "mopen",
          size: 4
        },
        "\\bigr": {
          mclass: "mclose",
          size: 1
        },
        "\\Bigr": {
          mclass: "mclose",
          size: 2
        },
        "\\biggr": {
          mclass: "mclose",
          size: 3
        },
        "\\Biggr": {
          mclass: "mclose",
          size: 4
        },
        "\\bigm": {
          mclass: "mrel",
          size: 1
        },
        "\\Bigm": {
          mclass: "mrel",
          size: 2
        },
        "\\biggm": {
          mclass: "mrel",
          size: 3
        },
        "\\Biggm": {
          mclass: "mrel",
          size: 4
        },
        "\\big": {
          mclass: "mord",
          size: 1
        },
        "\\Big": {
          mclass: "mord",
          size: 2
        },
        "\\bigg": {
          mclass: "mord",
          size: 3
        },
        "\\Bigg": {
          mclass: "mord",
          size: 4
        }
      };
      var delimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
      function checkDelimiter(delim, context) {
        var symDelim = checkSymbolNodeType(delim);
        if (symDelim && utils.contains(delimiters, symDelim.text)) {
          return symDelim;
        } else if (symDelim) {
          throw new src_ParseError("Invalid delimiter '" + symDelim.text + "' after '" + context.funcName + "'", delim);
        } else {
          throw new src_ParseError("Invalid delimiter type '" + delim.type + "'", delim);
        }
      }
      defineFunction({
        type: "delimsizing",
        names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
        props: {
          numArgs: 1,
          argTypes: ["primitive"]
        },
        handler: function handler2(context, args) {
          var delim = checkDelimiter(args[0], context);
          return {
            type: "delimsizing",
            mode: context.parser.mode,
            size: delimiterSizes[context.funcName].size,
            mclass: delimiterSizes[context.funcName].mclass,
            delim: delim.text
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          if (group.delim === ".") {
            return buildCommon.makeSpan([group.mclass]);
          }
          return delimiter.sizedDelim(group.delim, group.size, options2, group.mode, [group.mclass]);
        },
        mathmlBuilder: function mathmlBuilder2(group) {
          var children = [];
          if (group.delim !== ".") {
            children.push(makeText(group.delim, group.mode));
          }
          var node = new mathMLTree.MathNode("mo", children);
          if (group.mclass === "mopen" || group.mclass === "mclose") {
            node.setAttribute("fence", "true");
          } else {
            node.setAttribute("fence", "false");
          }
          node.setAttribute("stretchy", "true");
          node.setAttribute("minsize", delimiter.sizeToMaxHeight[group.size] + "em");
          node.setAttribute("maxsize", delimiter.sizeToMaxHeight[group.size] + "em");
          return node;
        }
      });
      function assertParsed(group) {
        if (!group.body) {
          throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
        }
      }
      defineFunction({
        type: "leftright-right",
        names: ["\\right"],
        props: {
          numArgs: 1,
          primitive: true
        },
        handler: function handler2(context, args) {
          var color = context.parser.gullet.macros.get("\\current@color");
          if (color && typeof color !== "string") {
            throw new src_ParseError("\\current@color set to non-string in \\right");
          }
          return {
            type: "leftright-right",
            mode: context.parser.mode,
            delim: checkDelimiter(args[0], context).text,
            color
          };
        }
      });
      defineFunction({
        type: "leftright",
        names: ["\\left"],
        props: {
          numArgs: 1,
          primitive: true
        },
        handler: function handler2(context, args) {
          var delim = checkDelimiter(args[0], context);
          var parser = context.parser;
          ++parser.leftrightDepth;
          var body = parser.parseExpression(false);
          --parser.leftrightDepth;
          parser.expect("\\right", false);
          var right = assertNodeType(parser.parseFunction(), "leftright-right");
          return {
            type: "leftright",
            mode: parser.mode,
            body,
            left: delim.text,
            right: right.delim,
            rightColor: right.color
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          assertParsed(group);
          var inner2 = buildExpression(group.body, options2, true, ["mopen", "mclose"]);
          var innerHeight = 0;
          var innerDepth = 0;
          var hadMiddle = false;
          for (var i2 = 0; i2 < inner2.length; i2++) {
            if (inner2[i2].isMiddle) {
              hadMiddle = true;
            } else {
              innerHeight = Math.max(inner2[i2].height, innerHeight);
              innerDepth = Math.max(inner2[i2].depth, innerDepth);
            }
          }
          innerHeight *= options2.sizeMultiplier;
          innerDepth *= options2.sizeMultiplier;
          var leftDelim;
          if (group.left === ".") {
            leftDelim = makeNullDelimiter(options2, ["mopen"]);
          } else {
            leftDelim = delimiter.leftRightDelim(group.left, innerHeight, innerDepth, options2, group.mode, ["mopen"]);
          }
          inner2.unshift(leftDelim);
          if (hadMiddle) {
            for (var _i6 = 1; _i6 < inner2.length; _i6++) {
              var middleDelim = inner2[_i6];
              var isMiddle = middleDelim.isMiddle;
              if (isMiddle) {
                inner2[_i6] = delimiter.leftRightDelim(isMiddle.delim, innerHeight, innerDepth, isMiddle.options, group.mode, []);
              }
            }
          }
          var rightDelim;
          if (group.right === ".") {
            rightDelim = makeNullDelimiter(options2, ["mclose"]);
          } else {
            var colorOptions = group.rightColor ? options2.withColor(group.rightColor) : options2;
            rightDelim = delimiter.leftRightDelim(group.right, innerHeight, innerDepth, colorOptions, group.mode, ["mclose"]);
          }
          inner2.push(rightDelim);
          return buildCommon.makeSpan(["minner"], inner2, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          assertParsed(group);
          var inner2 = buildMathML_buildExpression(group.body, options2);
          if (group.left !== ".") {
            var leftNode = new mathMLTree.MathNode("mo", [makeText(group.left, group.mode)]);
            leftNode.setAttribute("fence", "true");
            inner2.unshift(leftNode);
          }
          if (group.right !== ".") {
            var rightNode = new mathMLTree.MathNode("mo", [makeText(group.right, group.mode)]);
            rightNode.setAttribute("fence", "true");
            if (group.rightColor) {
              rightNode.setAttribute("mathcolor", group.rightColor);
            }
            inner2.push(rightNode);
          }
          return makeRow(inner2);
        }
      });
      defineFunction({
        type: "middle",
        names: ["\\middle"],
        props: {
          numArgs: 1,
          primitive: true
        },
        handler: function handler2(context, args) {
          var delim = checkDelimiter(args[0], context);
          if (!context.parser.leftrightDepth) {
            throw new src_ParseError("\\middle without preceding \\left", delim);
          }
          return {
            type: "middle",
            mode: context.parser.mode,
            delim: delim.text
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var middleDelim;
          if (group.delim === ".") {
            middleDelim = makeNullDelimiter(options2, []);
          } else {
            middleDelim = delimiter.sizedDelim(group.delim, 1, options2, group.mode, []);
            var isMiddle = {
              delim: group.delim,
              options: options2
            };
            middleDelim.isMiddle = isMiddle;
          }
          return middleDelim;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var textNode = group.delim === "\\vert" || group.delim === "|" ? makeText("|", "text") : makeText(group.delim, group.mode);
          var middleNode = new mathMLTree.MathNode("mo", [textNode]);
          middleNode.setAttribute("fence", "true");
          middleNode.setAttribute("lspace", "0.05em");
          middleNode.setAttribute("rspace", "0.05em");
          return middleNode;
        }
      });
      ;
      var enclose_htmlBuilder = function htmlBuilder2(group, options2) {
        var inner2 = buildCommon.wrapFragment(buildGroup(group.body, options2), options2);
        var label = group.label.substr(1);
        var scale = options2.sizeMultiplier;
        var img;
        var imgShift = 0;
        var isSingleChar = utils.isCharacterBox(group.body);
        if (label === "sout") {
          img = buildCommon.makeSpan(["stretchy", "sout"]);
          img.height = options2.fontMetrics().defaultRuleThickness / scale;
          imgShift = -0.5 * options2.fontMetrics().xHeight;
        } else if (label === "phase") {
          var lineWeight = calculateSize({
            number: 0.6,
            unit: "pt"
          }, options2);
          var clearance = calculateSize({
            number: 0.35,
            unit: "ex"
          }, options2);
          var newOptions = options2.havingBaseSizing();
          scale = scale / newOptions.sizeMultiplier;
          var angleHeight = inner2.height + inner2.depth + lineWeight + clearance;
          inner2.style.paddingLeft = angleHeight / 2 + lineWeight + "em";
          var viewBoxHeight = Math.floor(1e3 * angleHeight * scale);
          var path2 = phasePath(viewBoxHeight);
          var svgNode = new SvgNode([new PathNode("phase", path2)], {
            width: "400em",
            height: viewBoxHeight / 1e3 + "em",
            viewBox: "0 0 400000 " + viewBoxHeight,
            preserveAspectRatio: "xMinYMin slice"
          });
          img = buildCommon.makeSvgSpan(["hide-tail"], [svgNode], options2);
          img.style.height = angleHeight + "em";
          imgShift = inner2.depth + lineWeight + clearance;
        } else {
          if (/cancel/.test(label)) {
            if (!isSingleChar) {
              inner2.classes.push("cancel-pad");
            }
          } else if (label === "angl") {
            inner2.classes.push("anglpad");
          } else {
            inner2.classes.push("boxpad");
          }
          var topPad = 0;
          var bottomPad = 0;
          var ruleThickness = 0;
          if (/box/.test(label)) {
            ruleThickness = Math.max(options2.fontMetrics().fboxrule, options2.minRuleThickness);
            topPad = options2.fontMetrics().fboxsep + (label === "colorbox" ? 0 : ruleThickness);
            bottomPad = topPad;
          } else if (label === "angl") {
            ruleThickness = Math.max(options2.fontMetrics().defaultRuleThickness, options2.minRuleThickness);
            topPad = 4 * ruleThickness;
            bottomPad = Math.max(0, 0.25 - inner2.depth);
          } else {
            topPad = isSingleChar ? 0.2 : 0;
            bottomPad = topPad;
          }
          img = stretchy.encloseSpan(inner2, label, topPad, bottomPad, options2);
          if (/fbox|boxed|fcolorbox/.test(label)) {
            img.style.borderStyle = "solid";
            img.style.borderWidth = ruleThickness + "em";
          } else if (label === "angl" && ruleThickness !== 0.049) {
            img.style.borderTopWidth = ruleThickness + "em";
            img.style.borderRightWidth = ruleThickness + "em";
          }
          imgShift = inner2.depth + bottomPad;
          if (group.backgroundColor) {
            img.style.backgroundColor = group.backgroundColor;
            if (group.borderColor) {
              img.style.borderColor = group.borderColor;
            }
          }
        }
        var vlist;
        if (group.backgroundColor) {
          vlist = buildCommon.makeVList({
            positionType: "individualShift",
            children: [
              {
                type: "elem",
                elem: img,
                shift: imgShift
              },
              {
                type: "elem",
                elem: inner2,
                shift: 0
              }
            ]
          }, options2);
        } else {
          var classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
          vlist = buildCommon.makeVList({
            positionType: "individualShift",
            children: [
              {
                type: "elem",
                elem: inner2,
                shift: 0
              },
              {
                type: "elem",
                elem: img,
                shift: imgShift,
                wrapperClasses: classes
              }
            ]
          }, options2);
        }
        if (/cancel/.test(label)) {
          vlist.height = inner2.height;
          vlist.depth = inner2.depth;
        }
        if (/cancel/.test(label) && !isSingleChar) {
          return buildCommon.makeSpan(["mord", "cancel-lap"], [vlist], options2);
        } else {
          return buildCommon.makeSpan(["mord"], [vlist], options2);
        }
      };
      var enclose_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var fboxsep = 0;
        var node = new mathMLTree.MathNode(group.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [buildMathML_buildGroup(group.body, options2)]);
        switch (group.label) {
          case "\\cancel":
            node.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            node.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\phase":
            node.setAttribute("notation", "phasorangle");
            break;
          case "\\sout":
            node.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            node.setAttribute("notation", "box");
            break;
          case "\\angl":
            node.setAttribute("notation", "actuarial");
            break;
          case "\\fcolorbox":
          case "\\colorbox":
            fboxsep = options2.fontMetrics().fboxsep * options2.fontMetrics().ptPerEm;
            node.setAttribute("width", "+" + 2 * fboxsep + "pt");
            node.setAttribute("height", "+" + 2 * fboxsep + "pt");
            node.setAttribute("lspace", fboxsep + "pt");
            node.setAttribute("voffset", fboxsep + "pt");
            if (group.label === "\\fcolorbox") {
              var thk = Math.max(options2.fontMetrics().fboxrule, options2.minRuleThickness);
              node.setAttribute("style", "border: " + thk + "em solid " + String(group.borderColor));
            }
            break;
          case "\\xcancel":
            node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            break;
        }
        if (group.backgroundColor) {
          node.setAttribute("mathbackground", group.backgroundColor);
        }
        return node;
      };
      defineFunction({
        type: "enclose",
        names: ["\\colorbox"],
        props: {
          numArgs: 2,
          allowedInText: true,
          argTypes: ["color", "text"]
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var color = assertNodeType(args[0], "color-token").color;
          var body = args[1];
          return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor: color,
            body
          };
        },
        htmlBuilder: enclose_htmlBuilder,
        mathmlBuilder: enclose_mathmlBuilder
      });
      defineFunction({
        type: "enclose",
        names: ["\\fcolorbox"],
        props: {
          numArgs: 3,
          allowedInText: true,
          argTypes: ["color", "color", "text"]
        },
        handler: function handler2(_ref2, args, optArgs) {
          var parser = _ref2.parser, funcName = _ref2.funcName;
          var borderColor = assertNodeType(args[0], "color-token").color;
          var backgroundColor = assertNodeType(args[1], "color-token").color;
          var body = args[2];
          return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            backgroundColor,
            borderColor,
            body
          };
        },
        htmlBuilder: enclose_htmlBuilder,
        mathmlBuilder: enclose_mathmlBuilder
      });
      defineFunction({
        type: "enclose",
        names: ["\\fbox"],
        props: {
          numArgs: 1,
          argTypes: ["hbox"],
          allowedInText: true
        },
        handler: function handler2(_ref3, args) {
          var parser = _ref3.parser;
          return {
            type: "enclose",
            mode: parser.mode,
            label: "\\fbox",
            body: args[0]
          };
        }
      });
      defineFunction({
        type: "enclose",
        names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref4, args) {
          var parser = _ref4.parser, funcName = _ref4.funcName;
          var body = args[0];
          return {
            type: "enclose",
            mode: parser.mode,
            label: funcName,
            body
          };
        },
        htmlBuilder: enclose_htmlBuilder,
        mathmlBuilder: enclose_mathmlBuilder
      });
      defineFunction({
        type: "enclose",
        names: ["\\angl"],
        props: {
          numArgs: 1,
          argTypes: ["hbox"],
          allowedInText: false
        },
        handler: function handler2(_ref5, args) {
          var parser = _ref5.parser;
          return {
            type: "enclose",
            mode: parser.mode,
            label: "\\angl",
            body: args[0]
          };
        }
      });
      ;
      var _environments = {};
      function defineEnvironment(_ref) {
        var type = _ref.type, names = _ref.names, props = _ref.props, handler2 = _ref.handler, htmlBuilder2 = _ref.htmlBuilder, mathmlBuilder2 = _ref.mathmlBuilder;
        var data = {
          type,
          numArgs: props.numArgs || 0,
          allowedInText: false,
          numOptionalArgs: 0,
          handler: handler2
        };
        for (var i2 = 0; i2 < names.length; ++i2) {
          _environments[names[i2]] = data;
        }
        if (htmlBuilder2) {
          _htmlGroupBuilders[type] = htmlBuilder2;
        }
        if (mathmlBuilder2) {
          _mathmlGroupBuilders[type] = mathmlBuilder2;
        }
      }
      ;
      function getHLines(parser) {
        var hlineInfo = [];
        parser.consumeSpaces();
        var nxt = parser.fetch().text;
        while (nxt === "\\hline" || nxt === "\\hdashline") {
          parser.consume();
          hlineInfo.push(nxt === "\\hdashline");
          parser.consumeSpaces();
          nxt = parser.fetch().text;
        }
        return hlineInfo;
      }
      var validateAmsEnvironmentContext = function validateAmsEnvironmentContext2(context) {
        var settings = context.parser.settings;
        if (!settings.displayMode) {
          throw new src_ParseError("{" + context.envName + "} can be used only in display mode.");
        }
      };
      function parseArray(parser, _ref, style) {
        var hskipBeforeAndAfter = _ref.hskipBeforeAndAfter, addJot = _ref.addJot, cols = _ref.cols, arraystretch = _ref.arraystretch, colSeparationType = _ref.colSeparationType, addEqnNum = _ref.addEqnNum, singleRow = _ref.singleRow, emptySingleRow = _ref.emptySingleRow, maxNumCols = _ref.maxNumCols, leqno = _ref.leqno;
        parser.gullet.beginGroup();
        if (!singleRow) {
          parser.gullet.macros.set("\\cr", "\\\\\\relax");
        }
        if (!arraystretch) {
          var stretch = parser.gullet.expandMacroAsText("\\arraystretch");
          if (stretch == null) {
            arraystretch = 1;
          } else {
            arraystretch = parseFloat(stretch);
            if (!arraystretch || arraystretch < 0) {
              throw new src_ParseError("Invalid \\arraystretch: " + stretch);
            }
          }
        }
        parser.gullet.beginGroup();
        var row = [];
        var body = [row];
        var rowGaps = [];
        var hLinesBeforeRow = [];
        hLinesBeforeRow.push(getHLines(parser));
        while (true) {
          var cell = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
          parser.gullet.endGroup();
          parser.gullet.beginGroup();
          cell = {
            type: "ordgroup",
            mode: parser.mode,
            body: cell
          };
          if (style) {
            cell = {
              type: "styling",
              mode: parser.mode,
              style,
              body: [cell]
            };
          }
          row.push(cell);
          var next = parser.fetch().text;
          if (next === "&") {
            if (maxNumCols && row.length === maxNumCols) {
              if (singleRow || colSeparationType) {
                throw new src_ParseError("Too many tab characters: &", parser.nextToken);
              } else {
                parser.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
              }
            }
            parser.consume();
          } else if (next === "\\end") {
            if (row.length === 1 && cell.type === "styling" && cell.body[0].body.length === 0 && (body.length > 1 || !emptySingleRow)) {
              body.pop();
            }
            if (hLinesBeforeRow.length < body.length + 1) {
              hLinesBeforeRow.push([]);
            }
            break;
          } else if (next === "\\\\") {
            parser.consume();
            var size = void 0;
            if (parser.gullet.future().text !== " ") {
              size = parser.parseSizeGroup(true);
            }
            rowGaps.push(size ? size.value : null);
            hLinesBeforeRow.push(getHLines(parser));
            row = [];
            body.push(row);
          } else {
            throw new src_ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
          }
        }
        parser.gullet.endGroup();
        parser.gullet.endGroup();
        return {
          type: "array",
          mode: parser.mode,
          addJot,
          arraystretch,
          body,
          cols,
          rowGaps,
          hskipBeforeAndAfter,
          hLinesBeforeRow,
          colSeparationType,
          addEqnNum,
          leqno
        };
      }
      function dCellStyle(envName) {
        if (envName.substr(0, 1) === "d") {
          return "display";
        } else {
          return "text";
        }
      }
      var array_htmlBuilder = function htmlBuilder2(group, options2) {
        var r;
        var c;
        var nr = group.body.length;
        var hLinesBeforeRow = group.hLinesBeforeRow;
        var nc = 0;
        var body = new Array(nr);
        var hlines = [];
        var ruleThickness = Math.max(options2.fontMetrics().arrayRuleWidth, options2.minRuleThickness);
        var pt = 1 / options2.fontMetrics().ptPerEm;
        var arraycolsep = 5 * pt;
        if (group.colSeparationType && group.colSeparationType === "small") {
          var localMultiplier = options2.havingStyle(src_Style.SCRIPT).sizeMultiplier;
          arraycolsep = 0.2778 * (localMultiplier / options2.sizeMultiplier);
        }
        var baselineskip = group.colSeparationType === "CD" ? calculateSize({
          number: 3,
          unit: "ex"
        }, options2) : 12 * pt;
        var jot = 3 * pt;
        var arrayskip = group.arraystretch * baselineskip;
        var arstrutHeight = 0.7 * arrayskip;
        var arstrutDepth = 0.3 * arrayskip;
        var totalHeight = 0;
        function setHLinePos(hlinesInGap) {
          for (var i2 = 0; i2 < hlinesInGap.length; ++i2) {
            if (i2 > 0) {
              totalHeight += 0.25;
            }
            hlines.push({
              pos: totalHeight,
              isDashed: hlinesInGap[i2]
            });
          }
        }
        setHLinePos(hLinesBeforeRow[0]);
        for (r = 0; r < group.body.length; ++r) {
          var inrow = group.body[r];
          var height = arstrutHeight;
          var depth = arstrutDepth;
          if (nc < inrow.length) {
            nc = inrow.length;
          }
          var outrow = new Array(inrow.length);
          for (c = 0; c < inrow.length; ++c) {
            var elt = buildGroup(inrow[c], options2);
            if (depth < elt.depth) {
              depth = elt.depth;
            }
            if (height < elt.height) {
              height = elt.height;
            }
            outrow[c] = elt;
          }
          var rowGap = group.rowGaps[r];
          var gap = 0;
          if (rowGap) {
            gap = calculateSize(rowGap, options2);
            if (gap > 0) {
              gap += arstrutDepth;
              if (depth < gap) {
                depth = gap;
              }
              gap = 0;
            }
          }
          if (group.addJot) {
            depth += jot;
          }
          outrow.height = height;
          outrow.depth = depth;
          totalHeight += height;
          outrow.pos = totalHeight;
          totalHeight += depth + gap;
          body[r] = outrow;
          setHLinePos(hLinesBeforeRow[r + 1]);
        }
        var offset = totalHeight / 2 + options2.fontMetrics().axisHeight;
        var colDescriptions = group.cols || [];
        var cols = [];
        var colSep;
        var colDescrNum;
        var eqnNumSpans = [];
        if (group.addEqnNum) {
          for (r = 0; r < nr; ++r) {
            var rw = body[r];
            var shift = rw.pos - offset;
            var eqnTag = buildCommon.makeSpan(["eqn-num"], [], options2);
            eqnTag.depth = rw.depth;
            eqnTag.height = rw.height;
            eqnNumSpans.push({
              type: "elem",
              elem: eqnTag,
              shift
            });
          }
        }
        for (c = 0, colDescrNum = 0; c < nc || colDescrNum < colDescriptions.length; ++c, ++colDescrNum) {
          var colDescr = colDescriptions[colDescrNum] || {};
          var firstSeparator = true;
          while (colDescr.type === "separator") {
            if (!firstSeparator) {
              colSep = buildCommon.makeSpan(["arraycolsep"], []);
              colSep.style.width = options2.fontMetrics().doubleRuleSep + "em";
              cols.push(colSep);
            }
            if (colDescr.separator === "|" || colDescr.separator === ":") {
              var lineType = colDescr.separator === "|" ? "solid" : "dashed";
              var separator = buildCommon.makeSpan(["vertical-separator"], [], options2);
              separator.style.height = totalHeight + "em";
              separator.style.borderRightWidth = ruleThickness + "em";
              separator.style.borderRightStyle = lineType;
              separator.style.margin = "0 -" + ruleThickness / 2 + "em";
              separator.style.verticalAlign = -(totalHeight - offset) + "em";
              cols.push(separator);
            } else {
              throw new src_ParseError("Invalid separator type: " + colDescr.separator);
            }
            colDescrNum++;
            colDescr = colDescriptions[colDescrNum] || {};
            firstSeparator = false;
          }
          if (c >= nc) {
            continue;
          }
          var sepwidth = void 0;
          if (c > 0 || group.hskipBeforeAndAfter) {
            sepwidth = utils.deflt(colDescr.pregap, arraycolsep);
            if (sepwidth !== 0) {
              colSep = buildCommon.makeSpan(["arraycolsep"], []);
              colSep.style.width = sepwidth + "em";
              cols.push(colSep);
            }
          }
          var col = [];
          for (r = 0; r < nr; ++r) {
            var row = body[r];
            var elem = row[c];
            if (!elem) {
              continue;
            }
            var _shift = row.pos - offset;
            elem.depth = row.depth;
            elem.height = row.height;
            col.push({
              type: "elem",
              elem,
              shift: _shift
            });
          }
          col = buildCommon.makeVList({
            positionType: "individualShift",
            children: col
          }, options2);
          col = buildCommon.makeSpan(["col-align-" + (colDescr.align || "c")], [col]);
          cols.push(col);
          if (c < nc - 1 || group.hskipBeforeAndAfter) {
            sepwidth = utils.deflt(colDescr.postgap, arraycolsep);
            if (sepwidth !== 0) {
              colSep = buildCommon.makeSpan(["arraycolsep"], []);
              colSep.style.width = sepwidth + "em";
              cols.push(colSep);
            }
          }
        }
        body = buildCommon.makeSpan(["mtable"], cols);
        if (hlines.length > 0) {
          var line = buildCommon.makeLineSpan("hline", options2, ruleThickness);
          var dashes2 = buildCommon.makeLineSpan("hdashline", options2, ruleThickness);
          var vListElems = [{
            type: "elem",
            elem: body,
            shift: 0
          }];
          while (hlines.length > 0) {
            var hline = hlines.pop();
            var lineShift = hline.pos - offset;
            if (hline.isDashed) {
              vListElems.push({
                type: "elem",
                elem: dashes2,
                shift: lineShift
              });
            } else {
              vListElems.push({
                type: "elem",
                elem: line,
                shift: lineShift
              });
            }
          }
          body = buildCommon.makeVList({
            positionType: "individualShift",
            children: vListElems
          }, options2);
        }
        if (!group.addEqnNum) {
          return buildCommon.makeSpan(["mord"], [body], options2);
        } else {
          var eqnNumCol = buildCommon.makeVList({
            positionType: "individualShift",
            children: eqnNumSpans
          }, options2);
          eqnNumCol = buildCommon.makeSpan(["tag"], [eqnNumCol], options2);
          return buildCommon.makeFragment([body, eqnNumCol]);
        }
      };
      var alignMap = {
        c: "center ",
        l: "left ",
        r: "right "
      };
      var array_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var tbl = [];
        var glue = new mathMLTree.MathNode("mtd", [], ["mtr-glue"]);
        var tag = new mathMLTree.MathNode("mtd", [], ["mml-eqn-num"]);
        for (var i2 = 0; i2 < group.body.length; i2++) {
          var rw = group.body[i2];
          var row = [];
          for (var j = 0; j < rw.length; j++) {
            row.push(new mathMLTree.MathNode("mtd", [buildMathML_buildGroup(rw[j], options2)]));
          }
          if (group.addEqnNum) {
            row.unshift(glue);
            row.push(glue);
            if (group.leqno) {
              row.unshift(tag);
            } else {
              row.push(tag);
            }
          }
          tbl.push(new mathMLTree.MathNode("mtr", row));
        }
        var table = new mathMLTree.MathNode("mtable", tbl);
        var gap = group.arraystretch === 0.5 ? 0.1 : 0.16 + group.arraystretch - 1 + (group.addJot ? 0.09 : 0);
        table.setAttribute("rowspacing", gap.toFixed(4) + "em");
        var menclose = "";
        var align = "";
        if (group.cols && group.cols.length > 0) {
          var cols = group.cols;
          var columnLines = "";
          var prevTypeWasAlign = false;
          var iStart = 0;
          var iEnd = cols.length;
          if (cols[0].type === "separator") {
            menclose += "top ";
            iStart = 1;
          }
          if (cols[cols.length - 1].type === "separator") {
            menclose += "bottom ";
            iEnd -= 1;
          }
          for (var _i6 = iStart; _i6 < iEnd; _i6++) {
            if (cols[_i6].type === "align") {
              align += alignMap[cols[_i6].align];
              if (prevTypeWasAlign) {
                columnLines += "none ";
              }
              prevTypeWasAlign = true;
            } else if (cols[_i6].type === "separator") {
              if (prevTypeWasAlign) {
                columnLines += cols[_i6].separator === "|" ? "solid " : "dashed ";
                prevTypeWasAlign = false;
              }
            }
          }
          table.setAttribute("columnalign", align.trim());
          if (/[sd]/.test(columnLines)) {
            table.setAttribute("columnlines", columnLines.trim());
          }
        }
        if (group.colSeparationType === "align") {
          var _cols = group.cols || [];
          var spacing2 = "";
          for (var _i22 = 1; _i22 < _cols.length; _i22++) {
            spacing2 += _i22 % 2 ? "0em " : "1em ";
          }
          table.setAttribute("columnspacing", spacing2.trim());
        } else if (group.colSeparationType === "alignat" || group.colSeparationType === "gather") {
          table.setAttribute("columnspacing", "0em");
        } else if (group.colSeparationType === "small") {
          table.setAttribute("columnspacing", "0.2778em");
        } else if (group.colSeparationType === "CD") {
          table.setAttribute("columnspacing", "0.5em");
        } else {
          table.setAttribute("columnspacing", "1em");
        }
        var rowLines = "";
        var hlines = group.hLinesBeforeRow;
        menclose += hlines[0].length > 0 ? "left " : "";
        menclose += hlines[hlines.length - 1].length > 0 ? "right " : "";
        for (var _i32 = 1; _i32 < hlines.length - 1; _i32++) {
          rowLines += hlines[_i32].length === 0 ? "none " : hlines[_i32][0] ? "dashed " : "solid ";
        }
        if (/[sd]/.test(rowLines)) {
          table.setAttribute("rowlines", rowLines.trim());
        }
        if (menclose !== "") {
          table = new mathMLTree.MathNode("menclose", [table]);
          table.setAttribute("notation", menclose.trim());
        }
        if (group.arraystretch && group.arraystretch < 1) {
          table = new mathMLTree.MathNode("mstyle", [table]);
          table.setAttribute("scriptlevel", "1");
        }
        return table;
      };
      var alignedHandler = function alignedHandler2(context, args) {
        if (context.envName.indexOf("ed") === -1) {
          validateAmsEnvironmentContext(context);
        }
        var cols = [];
        var separationType = context.envName.indexOf("at") > -1 ? "alignat" : "align";
        var res = parseArray(context.parser, {
          cols,
          addJot: true,
          addEqnNum: context.envName === "align" || context.envName === "alignat",
          emptySingleRow: true,
          colSeparationType: separationType,
          maxNumCols: context.envName === "split" ? 2 : void 0,
          leqno: context.parser.settings.leqno
        }, "display");
        var numMaths;
        var numCols = 0;
        var emptyGroup = {
          type: "ordgroup",
          mode: context.mode,
          body: []
        };
        if (args[0] && args[0].type === "ordgroup") {
          var arg0 = "";
          for (var i2 = 0; i2 < args[0].body.length; i2++) {
            var textord2 = assertNodeType(args[0].body[i2], "textord");
            arg0 += textord2.text;
          }
          numMaths = Number(arg0);
          numCols = numMaths * 2;
        }
        var isAligned = !numCols;
        res.body.forEach(function(row) {
          for (var _i42 = 1; _i42 < row.length; _i42 += 2) {
            var styling = assertNodeType(row[_i42], "styling");
            var ordgroup = assertNodeType(styling.body[0], "ordgroup");
            ordgroup.body.unshift(emptyGroup);
          }
          if (!isAligned) {
            var curMaths = row.length / 2;
            if (numMaths < curMaths) {
              throw new src_ParseError("Too many math in a row: " + ("expected " + numMaths + ", but got " + curMaths), row[0]);
            }
          } else if (numCols < row.length) {
            numCols = row.length;
          }
        });
        for (var _i52 = 0; _i52 < numCols; ++_i52) {
          var align = "r";
          var pregap = 0;
          if (_i52 % 2 === 1) {
            align = "l";
          } else if (_i52 > 0 && isAligned) {
            pregap = 1;
          }
          cols[_i52] = {
            type: "align",
            align,
            pregap,
            postgap: 0
          };
        }
        res.colSeparationType = isAligned ? "align" : "alignat";
        return res;
      };
      defineEnvironment({
        type: "array",
        names: ["array", "darray"],
        props: {
          numArgs: 1
        },
        handler: function handler2(context, args) {
          var symNode = checkSymbolNodeType(args[0]);
          var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
          var cols = colalign.map(function(nde) {
            var node = assertSymbolNodeType(nde);
            var ca = node.text;
            if ("lcr".indexOf(ca) !== -1) {
              return {
                type: "align",
                align: ca
              };
            } else if (ca === "|") {
              return {
                type: "separator",
                separator: "|"
              };
            } else if (ca === ":") {
              return {
                type: "separator",
                separator: ":"
              };
            }
            throw new src_ParseError("Unknown column alignment: " + ca, nde);
          });
          var res = {
            cols,
            hskipBeforeAndAfter: true,
            maxNumCols: cols.length
          };
          return parseArray(context.parser, res, dCellStyle(context.envName));
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          var delimiters2 = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
          }[context.envName.replace("*", "")];
          var colAlign = "c";
          var payload = {
            hskipBeforeAndAfter: false,
            cols: [{
              type: "align",
              align: colAlign
            }]
          };
          if (context.envName.charAt(context.envName.length - 1) === "*") {
            var parser = context.parser;
            parser.consumeSpaces();
            if (parser.fetch().text === "[") {
              parser.consume();
              parser.consumeSpaces();
              colAlign = parser.fetch().text;
              if ("lcr".indexOf(colAlign) === -1) {
                throw new src_ParseError("Expected l or c or r", parser.nextToken);
              }
              parser.consume();
              parser.consumeSpaces();
              parser.expect("]");
              parser.consume();
              payload.cols = [{
                type: "align",
                align: colAlign
              }];
            }
          }
          var res = parseArray(context.parser, payload, dCellStyle(context.envName));
          res.cols = new Array(res.body[0].length).fill({
            type: "align",
            align: colAlign
          });
          return delimiters2 ? {
            type: "leftright",
            mode: context.mode,
            body: [res],
            left: delimiters2[0],
            right: delimiters2[1],
            rightColor: void 0
          } : res;
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["smallmatrix"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          var payload = {
            arraystretch: 0.5
          };
          var res = parseArray(context.parser, payload, "script");
          res.colSeparationType = "small";
          return res;
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["subarray"],
        props: {
          numArgs: 1
        },
        handler: function handler2(context, args) {
          var symNode = checkSymbolNodeType(args[0]);
          var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
          var cols = colalign.map(function(nde) {
            var node = assertSymbolNodeType(nde);
            var ca = node.text;
            if ("lc".indexOf(ca) !== -1) {
              return {
                type: "align",
                align: ca
              };
            }
            throw new src_ParseError("Unknown column alignment: " + ca, nde);
          });
          if (cols.length > 1) {
            throw new src_ParseError("{subarray} can contain only one column");
          }
          var res = {
            cols,
            hskipBeforeAndAfter: false,
            arraystretch: 0.5
          };
          res = parseArray(context.parser, res, "script");
          if (res.body.length > 0 && res.body[0].length > 1) {
            throw new src_ParseError("{subarray} can contain only one column");
          }
          return res;
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["cases", "dcases", "rcases", "drcases"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          var payload = {
            arraystretch: 1.2,
            cols: [{
              type: "align",
              align: "l",
              pregap: 0,
              postgap: 1
            }, {
              type: "align",
              align: "l",
              pregap: 0,
              postgap: 0
            }]
          };
          var res = parseArray(context.parser, payload, dCellStyle(context.envName));
          return {
            type: "leftright",
            mode: context.mode,
            body: [res],
            left: context.envName.indexOf("r") > -1 ? "." : "\\{",
            right: context.envName.indexOf("r") > -1 ? "\\}" : ".",
            rightColor: void 0
          };
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["align", "align*", "aligned", "split"],
        props: {
          numArgs: 0
        },
        handler: alignedHandler,
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["gathered", "gather", "gather*"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          if (utils.contains(["gather", "gather*"], context.envName)) {
            validateAmsEnvironmentContext(context);
          }
          var res = {
            cols: [{
              type: "align",
              align: "c"
            }],
            addJot: true,
            colSeparationType: "gather",
            addEqnNum: context.envName === "gather",
            emptySingleRow: true,
            leqno: context.parser.settings.leqno
          };
          return parseArray(context.parser, res, "display");
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["alignat", "alignat*", "alignedat"],
        props: {
          numArgs: 1
        },
        handler: alignedHandler,
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["equation", "equation*"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          validateAmsEnvironmentContext(context);
          var res = {
            addEqnNum: context.envName === "equation",
            emptySingleRow: true,
            singleRow: true,
            maxNumCols: 1,
            leqno: context.parser.settings.leqno
          };
          return parseArray(context.parser, res, "display");
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineEnvironment({
        type: "array",
        names: ["CD"],
        props: {
          numArgs: 0
        },
        handler: function handler2(context) {
          validateAmsEnvironmentContext(context);
          return parseCD(context.parser);
        },
        htmlBuilder: array_htmlBuilder,
        mathmlBuilder: array_mathmlBuilder
      });
      defineFunction({
        type: "text",
        names: ["\\hline", "\\hdashline"],
        props: {
          numArgs: 0,
          allowedInText: true,
          allowedInMath: true
        },
        handler: function handler2(context, args) {
          throw new src_ParseError(context.funcName + " valid only within array environment");
        }
      });
      ;
      var environments = _environments;
      var src_environments = environments;
      ;
      defineFunction({
        type: "environment",
        names: ["\\begin", "\\end"],
        props: {
          numArgs: 1,
          argTypes: ["text"]
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var nameGroup = args[0];
          if (nameGroup.type !== "ordgroup") {
            throw new src_ParseError("Invalid environment name", nameGroup);
          }
          var envName = "";
          for (var i2 = 0; i2 < nameGroup.body.length; ++i2) {
            envName += assertNodeType(nameGroup.body[i2], "textord").text;
          }
          if (funcName === "\\begin") {
            if (!src_environments.hasOwnProperty(envName)) {
              throw new src_ParseError("No such environment: " + envName, nameGroup);
            }
            var env = src_environments[envName];
            var _parser$parseArgument = parser.parseArguments("\\begin{" + envName + "}", env), _args = _parser$parseArgument.args, optArgs = _parser$parseArgument.optArgs;
            var context = {
              mode: parser.mode,
              envName,
              parser
            };
            var result = env.handler(context, _args, optArgs);
            parser.expect("\\end", false);
            var endNameToken = parser.nextToken;
            var end = assertNodeType(parser.parseFunction(), "environment");
            if (end.name !== envName) {
              throw new src_ParseError("Mismatch: \\begin{" + envName + "} matched by \\end{" + end.name + "}", endNameToken);
            }
            return result;
          }
          return {
            type: "environment",
            mode: parser.mode,
            name: envName,
            nameGroup
          };
        }
      });
      ;
      var mclass_makeSpan = buildCommon.makeSpan;
      function mclass_htmlBuilder(group, options2) {
        var elements = buildExpression(group.body, options2, true);
        return mclass_makeSpan([group.mclass], elements, options2);
      }
      function mclass_mathmlBuilder(group, options2) {
        var node;
        var inner2 = buildMathML_buildExpression(group.body, options2);
        if (group.mclass === "minner") {
          return mathMLTree.newDocumentFragment(inner2);
        } else if (group.mclass === "mord") {
          if (group.isCharacterBox) {
            node = inner2[0];
            node.type = "mi";
          } else {
            node = new mathMLTree.MathNode("mi", inner2);
          }
        } else {
          if (group.isCharacterBox) {
            node = inner2[0];
            node.type = "mo";
          } else {
            node = new mathMLTree.MathNode("mo", inner2);
          }
          if (group.mclass === "mbin") {
            node.attributes.lspace = "0.22em";
            node.attributes.rspace = "0.22em";
          } else if (group.mclass === "mpunct") {
            node.attributes.lspace = "0em";
            node.attributes.rspace = "0.17em";
          } else if (group.mclass === "mopen" || group.mclass === "mclose") {
            node.attributes.lspace = "0em";
            node.attributes.rspace = "0em";
          }
        }
        return node;
      }
      defineFunction({
        type: "mclass",
        names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
        props: {
          numArgs: 1,
          primitive: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var body = args[0];
          return {
            type: "mclass",
            mode: parser.mode,
            mclass: "m" + funcName.substr(5),
            body: ordargument(body),
            isCharacterBox: utils.isCharacterBox(body)
          };
        },
        htmlBuilder: mclass_htmlBuilder,
        mathmlBuilder: mclass_mathmlBuilder
      });
      var binrelClass = function binrelClass2(arg) {
        var atom = arg.type === "ordgroup" && arg.body.length ? arg.body[0] : arg;
        if (atom.type === "atom" && (atom.family === "bin" || atom.family === "rel")) {
          return "m" + atom.family;
        } else {
          return "mord";
        }
      };
      defineFunction({
        type: "mclass",
        names: ["\\@binrel"],
        props: {
          numArgs: 2
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          return {
            type: "mclass",
            mode: parser.mode,
            mclass: binrelClass(args[0]),
            body: ordargument(args[1]),
            isCharacterBox: utils.isCharacterBox(args[1])
          };
        }
      });
      defineFunction({
        type: "mclass",
        names: ["\\stackrel", "\\overset", "\\underset"],
        props: {
          numArgs: 2
        },
        handler: function handler2(_ref3, args) {
          var parser = _ref3.parser, funcName = _ref3.funcName;
          var baseArg = args[1];
          var shiftedArg = args[0];
          var mclass;
          if (funcName !== "\\stackrel") {
            mclass = binrelClass(baseArg);
          } else {
            mclass = "mrel";
          }
          var baseOp = {
            type: "op",
            mode: baseArg.mode,
            limits: true,
            alwaysHandleSupSub: true,
            parentIsSupSub: false,
            symbol: false,
            suppressBaseShift: funcName !== "\\stackrel",
            body: ordargument(baseArg)
          };
          var supsub = {
            type: "supsub",
            mode: shiftedArg.mode,
            base: baseOp,
            sup: funcName === "\\underset" ? null : shiftedArg,
            sub: funcName === "\\underset" ? shiftedArg : null
          };
          return {
            type: "mclass",
            mode: parser.mode,
            mclass,
            body: [supsub],
            isCharacterBox: utils.isCharacterBox(supsub)
          };
        },
        htmlBuilder: mclass_htmlBuilder,
        mathmlBuilder: mclass_mathmlBuilder
      });
      ;
      var font_htmlBuilder = function htmlBuilder2(group, options2) {
        var font = group.font;
        var newOptions = options2.withFont(font);
        return buildGroup(group.body, newOptions);
      };
      var font_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var font = group.font;
        var newOptions = options2.withFont(font);
        return buildMathML_buildGroup(group.body, newOptions);
      };
      var fontAliases = {
        "\\Bbb": "\\mathbb",
        "\\bold": "\\mathbf",
        "\\frak": "\\mathfrak",
        "\\bm": "\\boldsymbol"
      };
      defineFunction({
        type: "font",
        names: [
          "\\mathrm",
          "\\mathit",
          "\\mathbf",
          "\\mathnormal",
          "\\mathbb",
          "\\mathcal",
          "\\mathfrak",
          "\\mathscr",
          "\\mathsf",
          "\\mathtt",
          "\\Bbb",
          "\\bold",
          "\\frak"
        ],
        props: {
          numArgs: 1,
          allowedInArgument: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var body = normalizeArgument(args[0]);
          var func = funcName;
          if (func in fontAliases) {
            func = fontAliases[func];
          }
          return {
            type: "font",
            mode: parser.mode,
            font: func.slice(1),
            body
          };
        },
        htmlBuilder: font_htmlBuilder,
        mathmlBuilder: font_mathmlBuilder
      });
      defineFunction({
        type: "mclass",
        names: ["\\boldsymbol", "\\bm"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          var body = args[0];
          var isCharacterBox2 = utils.isCharacterBox(body);
          return {
            type: "mclass",
            mode: parser.mode,
            mclass: binrelClass(body),
            body: [{
              type: "font",
              mode: parser.mode,
              font: "boldsymbol",
              body
            }],
            isCharacterBox: isCharacterBox2
          };
        }
      });
      defineFunction({
        type: "font",
        names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
        props: {
          numArgs: 0,
          allowedInText: true
        },
        handler: function handler2(_ref3, args) {
          var parser = _ref3.parser, funcName = _ref3.funcName, breakOnTokenText = _ref3.breakOnTokenText;
          var mode = parser.mode;
          var body = parser.parseExpression(true, breakOnTokenText);
          var style = "math" + funcName.slice(1);
          return {
            type: "font",
            mode,
            font: style,
            body: {
              type: "ordgroup",
              mode: parser.mode,
              body
            }
          };
        },
        htmlBuilder: font_htmlBuilder,
        mathmlBuilder: font_mathmlBuilder
      });
      ;
      var adjustStyle = function adjustStyle2(size, originalStyle) {
        var style = originalStyle;
        if (size === "display") {
          style = style.id >= src_Style.SCRIPT.id ? style.text() : src_Style.DISPLAY;
        } else if (size === "text" && style.size === src_Style.DISPLAY.size) {
          style = src_Style.TEXT;
        } else if (size === "script") {
          style = src_Style.SCRIPT;
        } else if (size === "scriptscript") {
          style = src_Style.SCRIPTSCRIPT;
        }
        return style;
      };
      var genfrac_htmlBuilder = function htmlBuilder2(group, options2) {
        var style = adjustStyle(group.size, options2.style);
        var nstyle = style.fracNum();
        var dstyle = style.fracDen();
        var newOptions;
        newOptions = options2.havingStyle(nstyle);
        var numerm = buildGroup(group.numer, newOptions, options2);
        if (group.continued) {
          var hStrut = 8.5 / options2.fontMetrics().ptPerEm;
          var dStrut = 3.5 / options2.fontMetrics().ptPerEm;
          numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
          numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
        }
        newOptions = options2.havingStyle(dstyle);
        var denomm = buildGroup(group.denom, newOptions, options2);
        var rule;
        var ruleWidth;
        var ruleSpacing;
        if (group.hasBarLine) {
          if (group.barSize) {
            ruleWidth = calculateSize(group.barSize, options2);
            rule = buildCommon.makeLineSpan("frac-line", options2, ruleWidth);
          } else {
            rule = buildCommon.makeLineSpan("frac-line", options2);
          }
          ruleWidth = rule.height;
          ruleSpacing = rule.height;
        } else {
          rule = null;
          ruleWidth = 0;
          ruleSpacing = options2.fontMetrics().defaultRuleThickness;
        }
        var numShift;
        var clearance;
        var denomShift;
        if (style.size === src_Style.DISPLAY.size || group.size === "display") {
          numShift = options2.fontMetrics().num1;
          if (ruleWidth > 0) {
            clearance = 3 * ruleSpacing;
          } else {
            clearance = 7 * ruleSpacing;
          }
          denomShift = options2.fontMetrics().denom1;
        } else {
          if (ruleWidth > 0) {
            numShift = options2.fontMetrics().num2;
            clearance = ruleSpacing;
          } else {
            numShift = options2.fontMetrics().num3;
            clearance = 3 * ruleSpacing;
          }
          denomShift = options2.fontMetrics().denom2;
        }
        var frac;
        if (!rule) {
          var candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);
          if (candidateClearance < clearance) {
            numShift += 0.5 * (clearance - candidateClearance);
            denomShift += 0.5 * (clearance - candidateClearance);
          }
          frac = buildCommon.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: denomm,
              shift: denomShift
            }, {
              type: "elem",
              elem: numerm,
              shift: -numShift
            }]
          }, options2);
        } else {
          var axisHeight = options2.fontMetrics().axisHeight;
          if (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth) < clearance) {
            numShift += clearance - (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth));
          }
          if (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift) < clearance) {
            denomShift += clearance - (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift));
          }
          var midShift = -(axisHeight - 0.5 * ruleWidth);
          frac = buildCommon.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: denomm,
              shift: denomShift
            }, {
              type: "elem",
              elem: rule,
              shift: midShift
            }, {
              type: "elem",
              elem: numerm,
              shift: -numShift
            }]
          }, options2);
        }
        newOptions = options2.havingStyle(style);
        frac.height *= newOptions.sizeMultiplier / options2.sizeMultiplier;
        frac.depth *= newOptions.sizeMultiplier / options2.sizeMultiplier;
        var delimSize;
        if (style.size === src_Style.DISPLAY.size) {
          delimSize = options2.fontMetrics().delim1;
        } else {
          delimSize = options2.fontMetrics().delim2;
        }
        var leftDelim;
        var rightDelim;
        if (group.leftDelim == null) {
          leftDelim = makeNullDelimiter(options2, ["mopen"]);
        } else {
          leftDelim = delimiter.customSizedDelim(group.leftDelim, delimSize, true, options2.havingStyle(style), group.mode, ["mopen"]);
        }
        if (group.continued) {
          rightDelim = buildCommon.makeSpan([]);
        } else if (group.rightDelim == null) {
          rightDelim = makeNullDelimiter(options2, ["mclose"]);
        } else {
          rightDelim = delimiter.customSizedDelim(group.rightDelim, delimSize, true, options2.havingStyle(style), group.mode, ["mclose"]);
        }
        return buildCommon.makeSpan(["mord"].concat(newOptions.sizingClasses(options2)), [leftDelim, buildCommon.makeSpan(["mfrac"], [frac]), rightDelim], options2);
      };
      var genfrac_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var node = new mathMLTree.MathNode("mfrac", [buildMathML_buildGroup(group.numer, options2), buildMathML_buildGroup(group.denom, options2)]);
        if (!group.hasBarLine) {
          node.setAttribute("linethickness", "0px");
        } else if (group.barSize) {
          var ruleWidth = calculateSize(group.barSize, options2);
          node.setAttribute("linethickness", ruleWidth + "em");
        }
        var style = adjustStyle(group.size, options2.style);
        if (style.size !== options2.style.size) {
          node = new mathMLTree.MathNode("mstyle", [node]);
          var isDisplay = style.size === src_Style.DISPLAY.size ? "true" : "false";
          node.setAttribute("displaystyle", isDisplay);
          node.setAttribute("scriptlevel", "0");
        }
        if (group.leftDelim != null || group.rightDelim != null) {
          var withDelims = [];
          if (group.leftDelim != null) {
            var leftOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.leftDelim.replace("\\", ""))]);
            leftOp.setAttribute("fence", "true");
            withDelims.push(leftOp);
          }
          withDelims.push(node);
          if (group.rightDelim != null) {
            var rightOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.rightDelim.replace("\\", ""))]);
            rightOp.setAttribute("fence", "true");
            withDelims.push(rightOp);
          }
          return makeRow(withDelims);
        }
        return node;
      };
      defineFunction({
        type: "genfrac",
        names: [
          "\\dfrac",
          "\\frac",
          "\\tfrac",
          "\\dbinom",
          "\\binom",
          "\\tbinom",
          "\\\\atopfrac",
          "\\\\bracefrac",
          "\\\\brackfrac"
        ],
        props: {
          numArgs: 2,
          allowedInArgument: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var numer = args[0];
          var denom = args[1];
          var hasBarLine;
          var leftDelim = null;
          var rightDelim = null;
          var size = "auto";
          switch (funcName) {
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
              hasBarLine = true;
              break;
            case "\\\\atopfrac":
              hasBarLine = false;
              break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
              hasBarLine = false;
              leftDelim = "(";
              rightDelim = ")";
              break;
            case "\\\\bracefrac":
              hasBarLine = false;
              leftDelim = "\\{";
              rightDelim = "\\}";
              break;
            case "\\\\brackfrac":
              hasBarLine = false;
              leftDelim = "[";
              rightDelim = "]";
              break;
            default:
              throw new Error("Unrecognized genfrac command");
          }
          switch (funcName) {
            case "\\dfrac":
            case "\\dbinom":
              size = "display";
              break;
            case "\\tfrac":
            case "\\tbinom":
              size = "text";
              break;
          }
          return {
            type: "genfrac",
            mode: parser.mode,
            continued: false,
            numer,
            denom,
            hasBarLine,
            leftDelim,
            rightDelim,
            size,
            barSize: null
          };
        },
        htmlBuilder: genfrac_htmlBuilder,
        mathmlBuilder: genfrac_mathmlBuilder
      });
      defineFunction({
        type: "genfrac",
        names: ["\\cfrac"],
        props: {
          numArgs: 2
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser, funcName = _ref2.funcName;
          var numer = args[0];
          var denom = args[1];
          return {
            type: "genfrac",
            mode: parser.mode,
            continued: true,
            numer,
            denom,
            hasBarLine: true,
            leftDelim: null,
            rightDelim: null,
            size: "display",
            barSize: null
          };
        }
      });
      defineFunction({
        type: "infix",
        names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
        props: {
          numArgs: 0,
          infix: true
        },
        handler: function handler2(_ref3) {
          var parser = _ref3.parser, funcName = _ref3.funcName, token = _ref3.token;
          var replaceWith;
          switch (funcName) {
            case "\\over":
              replaceWith = "\\frac";
              break;
            case "\\choose":
              replaceWith = "\\binom";
              break;
            case "\\atop":
              replaceWith = "\\\\atopfrac";
              break;
            case "\\brace":
              replaceWith = "\\\\bracefrac";
              break;
            case "\\brack":
              replaceWith = "\\\\brackfrac";
              break;
            default:
              throw new Error("Unrecognized infix genfrac command");
          }
          return {
            type: "infix",
            mode: parser.mode,
            replaceWith,
            token
          };
        }
      });
      var stylArray = ["display", "text", "script", "scriptscript"];
      var delimFromValue = function delimFromValue2(delimString) {
        var delim = null;
        if (delimString.length > 0) {
          delim = delimString;
          delim = delim === "." ? null : delim;
        }
        return delim;
      };
      defineFunction({
        type: "genfrac",
        names: ["\\genfrac"],
        props: {
          numArgs: 6,
          allowedInArgument: true,
          argTypes: ["math", "math", "size", "text", "math", "math"]
        },
        handler: function handler2(_ref4, args) {
          var parser = _ref4.parser;
          var numer = args[4];
          var denom = args[5];
          var leftNode = normalizeArgument(args[0]);
          var leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
          var rightNode = normalizeArgument(args[1]);
          var rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
          var barNode = assertNodeType(args[2], "size");
          var hasBarLine;
          var barSize = null;
          if (barNode.isBlank) {
            hasBarLine = true;
          } else {
            barSize = barNode.value;
            hasBarLine = barSize.number > 0;
          }
          var size = "auto";
          var styl = args[3];
          if (styl.type === "ordgroup") {
            if (styl.body.length > 0) {
              var textOrd = assertNodeType(styl.body[0], "textord");
              size = stylArray[Number(textOrd.text)];
            }
          } else {
            styl = assertNodeType(styl, "textord");
            size = stylArray[Number(styl.text)];
          }
          return {
            type: "genfrac",
            mode: parser.mode,
            numer,
            denom,
            continued: false,
            hasBarLine,
            barSize,
            leftDelim,
            rightDelim,
            size
          };
        },
        htmlBuilder: genfrac_htmlBuilder,
        mathmlBuilder: genfrac_mathmlBuilder
      });
      defineFunction({
        type: "infix",
        names: ["\\above"],
        props: {
          numArgs: 1,
          argTypes: ["size"],
          infix: true
        },
        handler: function handler2(_ref5, args) {
          var parser = _ref5.parser, funcName = _ref5.funcName, token = _ref5.token;
          return {
            type: "infix",
            mode: parser.mode,
            replaceWith: "\\\\abovefrac",
            size: assertNodeType(args[0], "size").value,
            token
          };
        }
      });
      defineFunction({
        type: "genfrac",
        names: ["\\\\abovefrac"],
        props: {
          numArgs: 3,
          argTypes: ["math", "size", "math"]
        },
        handler: function handler2(_ref6, args) {
          var parser = _ref6.parser, funcName = _ref6.funcName;
          var numer = args[0];
          var barSize = assert(assertNodeType(args[1], "infix").size);
          var denom = args[2];
          var hasBarLine = barSize.number > 0;
          return {
            type: "genfrac",
            mode: parser.mode,
            numer,
            denom,
            continued: false,
            hasBarLine,
            barSize,
            leftDelim: null,
            rightDelim: null,
            size: "auto"
          };
        },
        htmlBuilder: genfrac_htmlBuilder,
        mathmlBuilder: genfrac_mathmlBuilder
      });
      ;
      var horizBrace_htmlBuilder = function htmlBuilder2(grp, options2) {
        var style = options2.style;
        var supSubGroup;
        var group;
        if (grp.type === "supsub") {
          supSubGroup = grp.sup ? buildGroup(grp.sup, options2.havingStyle(style.sup()), options2) : buildGroup(grp.sub, options2.havingStyle(style.sub()), options2);
          group = assertNodeType(grp.base, "horizBrace");
        } else {
          group = assertNodeType(grp, "horizBrace");
        }
        var body = buildGroup(group.base, options2.havingBaseStyle(src_Style.DISPLAY));
        var braceBody = stretchy.svgSpan(group, options2);
        var vlist;
        if (group.isOver) {
          vlist = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: body
            }, {
              type: "kern",
              size: 0.1
            }, {
              type: "elem",
              elem: braceBody
            }]
          }, options2);
          vlist.children[0].children[0].children[1].classes.push("svg-align");
        } else {
          vlist = buildCommon.makeVList({
            positionType: "bottom",
            positionData: body.depth + 0.1 + braceBody.height,
            children: [{
              type: "elem",
              elem: braceBody
            }, {
              type: "kern",
              size: 0.1
            }, {
              type: "elem",
              elem: body
            }]
          }, options2);
          vlist.children[0].children[0].children[0].classes.push("svg-align");
        }
        if (supSubGroup) {
          var vSpan = buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options2);
          if (group.isOver) {
            vlist = buildCommon.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: vSpan
              }, {
                type: "kern",
                size: 0.2
              }, {
                type: "elem",
                elem: supSubGroup
              }]
            }, options2);
          } else {
            vlist = buildCommon.makeVList({
              positionType: "bottom",
              positionData: vSpan.depth + 0.2 + supSubGroup.height + supSubGroup.depth,
              children: [{
                type: "elem",
                elem: supSubGroup
              }, {
                type: "kern",
                size: 0.2
              }, {
                type: "elem",
                elem: vSpan
              }]
            }, options2);
          }
        }
        return buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options2);
      };
      var horizBrace_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var accentNode = stretchy.mathMLnode(group.label);
        return new mathMLTree.MathNode(group.isOver ? "mover" : "munder", [buildMathML_buildGroup(group.base, options2), accentNode]);
      };
      defineFunction({
        type: "horizBrace",
        names: ["\\overbrace", "\\underbrace"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          return {
            type: "horizBrace",
            mode: parser.mode,
            label: funcName,
            isOver: /^\\over/.test(funcName),
            base: args[0]
          };
        },
        htmlBuilder: horizBrace_htmlBuilder,
        mathmlBuilder: horizBrace_mathmlBuilder
      });
      ;
      defineFunction({
        type: "href",
        names: ["\\href"],
        props: {
          numArgs: 2,
          argTypes: ["url", "original"],
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var body = args[1];
          var href = assertNodeType(args[0], "url").url;
          if (!parser.settings.isTrusted({
            command: "\\href",
            url: href
          })) {
            return parser.formatUnsupportedCmd("\\href");
          }
          return {
            type: "href",
            mode: parser.mode,
            href,
            body: ordargument(body)
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var elements = buildExpression(group.body, options2, false);
          return buildCommon.makeAnchor(group.href, [], elements, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var math2 = buildExpressionRow(group.body, options2);
          if (!(math2 instanceof MathNode)) {
            math2 = new MathNode("mrow", [math2]);
          }
          math2.setAttribute("href", group.href);
          return math2;
        }
      });
      defineFunction({
        type: "href",
        names: ["\\url"],
        props: {
          numArgs: 1,
          argTypes: ["url"],
          allowedInText: true
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          var href = assertNodeType(args[0], "url").url;
          if (!parser.settings.isTrusted({
            command: "\\url",
            url: href
          })) {
            return parser.formatUnsupportedCmd("\\url");
          }
          var chars2 = [];
          for (var i2 = 0; i2 < href.length; i2++) {
            var c = href[i2];
            if (c === "~") {
              c = "\\textasciitilde";
            }
            chars2.push({
              type: "textord",
              mode: "text",
              text: c
            });
          }
          var body = {
            type: "text",
            mode: parser.mode,
            font: "\\texttt",
            body: chars2
          };
          return {
            type: "href",
            mode: parser.mode,
            href,
            body: ordargument(body)
          };
        }
      });
      ;
      defineFunction({
        type: "hbox",
        names: ["\\hbox"],
        props: {
          numArgs: 1,
          argTypes: ["text"],
          allowedInText: true,
          primitive: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          return {
            type: "hbox",
            mode: parser.mode,
            body: ordargument(args[0])
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var elements = buildExpression(group.body, options2, false);
          return buildCommon.makeFragment(elements);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return new mathMLTree.MathNode("mrow", buildMathML_buildExpression(group.body, options2));
        }
      });
      ;
      defineFunction({
        type: "html",
        names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
        props: {
          numArgs: 2,
          argTypes: ["raw", "original"],
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName, token = _ref.token;
          var value = assertNodeType(args[0], "raw").string;
          var body = args[1];
          if (parser.settings.strict) {
            parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
          }
          var trustContext;
          var attributes = {};
          switch (funcName) {
            case "\\htmlClass":
              attributes.class = value;
              trustContext = {
                command: "\\htmlClass",
                class: value
              };
              break;
            case "\\htmlId":
              attributes.id = value;
              trustContext = {
                command: "\\htmlId",
                id: value
              };
              break;
            case "\\htmlStyle":
              attributes.style = value;
              trustContext = {
                command: "\\htmlStyle",
                style: value
              };
              break;
            case "\\htmlData": {
              var data = value.split(",");
              for (var i2 = 0; i2 < data.length; i2++) {
                var keyVal = data[i2].split("=");
                if (keyVal.length !== 2) {
                  throw new src_ParseError("Error parsing key-value for \\htmlData");
                }
                attributes["data-" + keyVal[0].trim()] = keyVal[1].trim();
              }
              trustContext = {
                command: "\\htmlData",
                attributes
              };
              break;
            }
            default:
              throw new Error("Unrecognized html command");
          }
          if (!parser.settings.isTrusted(trustContext)) {
            return parser.formatUnsupportedCmd(funcName);
          }
          return {
            type: "html",
            mode: parser.mode,
            attributes,
            body: ordargument(body)
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var elements = buildExpression(group.body, options2, false);
          var classes = ["enclosing"];
          if (group.attributes.class) {
            classes.push.apply(classes, group.attributes.class.trim().split(/\s+/));
          }
          var span = buildCommon.makeSpan(classes, elements, options2);
          for (var attr in group.attributes) {
            if (attr !== "class" && group.attributes.hasOwnProperty(attr)) {
              span.setAttribute(attr, group.attributes[attr]);
            }
          }
          return span;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return buildExpressionRow(group.body, options2);
        }
      });
      ;
      defineFunction({
        type: "htmlmathml",
        names: ["\\html@mathml"],
        props: {
          numArgs: 2,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          return {
            type: "htmlmathml",
            mode: parser.mode,
            html: ordargument(args[0]),
            mathml: ordargument(args[1])
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var elements = buildExpression(group.html, options2, false);
          return buildCommon.makeFragment(elements);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return buildExpressionRow(group.mathml, options2);
        }
      });
      ;
      var sizeData = function sizeData2(str) {
        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) {
          return {
            number: +str,
            unit: "bp"
          };
        } else {
          var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
          if (!match) {
            throw new src_ParseError("Invalid size: '" + str + "' in \\includegraphics");
          }
          var data = {
            number: +(match[1] + match[2]),
            unit: match[3]
          };
          if (!validUnit(data)) {
            throw new src_ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
          }
          return data;
        }
      };
      defineFunction({
        type: "includegraphics",
        names: ["\\includegraphics"],
        props: {
          numArgs: 1,
          numOptionalArgs: 1,
          argTypes: ["raw", "url"],
          allowedInText: false
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser;
          var width = {
            number: 0,
            unit: "em"
          };
          var height = {
            number: 0.9,
            unit: "em"
          };
          var totalheight = {
            number: 0,
            unit: "em"
          };
          var alt = "";
          if (optArgs[0]) {
            var attributeStr = assertNodeType(optArgs[0], "raw").string;
            var attributes = attributeStr.split(",");
            for (var i2 = 0; i2 < attributes.length; i2++) {
              var keyVal = attributes[i2].split("=");
              if (keyVal.length === 2) {
                var str = keyVal[1].trim();
                switch (keyVal[0].trim()) {
                  case "alt":
                    alt = str;
                    break;
                  case "width":
                    width = sizeData(str);
                    break;
                  case "height":
                    height = sizeData(str);
                    break;
                  case "totalheight":
                    totalheight = sizeData(str);
                    break;
                  default:
                    throw new src_ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
                }
              }
            }
          }
          var src2 = assertNodeType(args[0], "url").url;
          if (alt === "") {
            alt = src2;
            alt = alt.replace(/^.*[\\/]/, "");
            alt = alt.substring(0, alt.lastIndexOf("."));
          }
          if (!parser.settings.isTrusted({
            command: "\\includegraphics",
            url: src2
          })) {
            return parser.formatUnsupportedCmd("\\includegraphics");
          }
          return {
            type: "includegraphics",
            mode: parser.mode,
            alt,
            width,
            height,
            totalheight,
            src: src2
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var height = calculateSize(group.height, options2);
          var depth = 0;
          if (group.totalheight.number > 0) {
            depth = calculateSize(group.totalheight, options2) - height;
            depth = Number(depth.toFixed(2));
          }
          var width = 0;
          if (group.width.number > 0) {
            width = calculateSize(group.width, options2);
          }
          var style = {
            height: height + depth + "em"
          };
          if (width > 0) {
            style.width = width + "em";
          }
          if (depth > 0) {
            style.verticalAlign = -depth + "em";
          }
          var node = new Img(group.src, group.alt, style);
          node.height = height;
          node.depth = depth;
          return node;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mglyph", []);
          node.setAttribute("alt", group.alt);
          var height = calculateSize(group.height, options2);
          var depth = 0;
          if (group.totalheight.number > 0) {
            depth = calculateSize(group.totalheight, options2) - height;
            depth = depth.toFixed(2);
            node.setAttribute("valign", "-" + depth + "em");
          }
          node.setAttribute("height", height + depth + "em");
          if (group.width.number > 0) {
            var width = calculateSize(group.width, options2);
            node.setAttribute("width", width + "em");
          }
          node.setAttribute("src", group.src);
          return node;
        }
      });
      ;
      defineFunction({
        type: "kern",
        names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
        props: {
          numArgs: 1,
          argTypes: ["size"],
          primitive: true,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var size = assertNodeType(args[0], "size");
          if (parser.settings.strict) {
            var mathFunction = funcName[1] === "m";
            var muUnit = size.value.unit === "mu";
            if (mathFunction) {
              if (!muUnit) {
                parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " supports only mu units, " + ("not " + size.value.unit + " units"));
              }
              if (parser.mode !== "math") {
                parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " works only in math mode");
              }
            } else {
              if (muUnit) {
                parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " doesn't support mu units");
              }
            }
          }
          return {
            type: "kern",
            mode: parser.mode,
            dimension: size.value
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          return buildCommon.makeGlue(group.dimension, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var dimension = calculateSize(group.dimension, options2);
          return new mathMLTree.SpaceNode(dimension);
        }
      });
      ;
      defineFunction({
        type: "lap",
        names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var body = args[0];
          return {
            type: "lap",
            mode: parser.mode,
            alignment: funcName.slice(5),
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var inner2;
          if (group.alignment === "clap") {
            inner2 = buildCommon.makeSpan([], [buildGroup(group.body, options2)]);
            inner2 = buildCommon.makeSpan(["inner"], [inner2], options2);
          } else {
            inner2 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options2)]);
          }
          var fix = buildCommon.makeSpan(["fix"], []);
          var node = buildCommon.makeSpan([group.alignment], [inner2, fix], options2);
          var strut = buildCommon.makeSpan(["strut"]);
          strut.style.height = node.height + node.depth + "em";
          strut.style.verticalAlign = -node.depth + "em";
          node.children.unshift(strut);
          node = buildCommon.makeSpan(["thinbox"], [node], options2);
          return buildCommon.makeSpan(["mord", "vbox"], [node], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options2)]);
          if (group.alignment !== "rlap") {
            var offset = group.alignment === "llap" ? "-1" : "-0.5";
            node.setAttribute("lspace", offset + "width");
          }
          node.setAttribute("width", "0px");
          return node;
        }
      });
      ;
      defineFunction({
        type: "styling",
        names: ["\\(", "$"],
        props: {
          numArgs: 0,
          allowedInText: true,
          allowedInMath: false
        },
        handler: function handler2(_ref, args) {
          var funcName = _ref.funcName, parser = _ref.parser;
          var outerMode = parser.mode;
          parser.switchMode("math");
          var close = funcName === "\\(" ? "\\)" : "$";
          var body = parser.parseExpression(false, close);
          parser.expect(close);
          parser.switchMode(outerMode);
          return {
            type: "styling",
            mode: parser.mode,
            style: "text",
            body
          };
        }
      });
      defineFunction({
        type: "text",
        names: ["\\)", "\\]"],
        props: {
          numArgs: 0,
          allowedInText: true,
          allowedInMath: false
        },
        handler: function handler2(context, args) {
          throw new src_ParseError("Mismatched " + context.funcName);
        }
      });
      ;
      var chooseMathStyle = function chooseMathStyle2(group, options2) {
        switch (options2.style.size) {
          case src_Style.DISPLAY.size:
            return group.display;
          case src_Style.TEXT.size:
            return group.text;
          case src_Style.SCRIPT.size:
            return group.script;
          case src_Style.SCRIPTSCRIPT.size:
            return group.scriptscript;
          default:
            return group.text;
        }
      };
      defineFunction({
        type: "mathchoice",
        names: ["\\mathchoice"],
        props: {
          numArgs: 4,
          primitive: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          return {
            type: "mathchoice",
            mode: parser.mode,
            display: ordargument(args[0]),
            text: ordargument(args[1]),
            script: ordargument(args[2]),
            scriptscript: ordargument(args[3])
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var body = chooseMathStyle(group, options2);
          var elements = buildExpression(body, options2, false);
          return buildCommon.makeFragment(elements);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var body = chooseMathStyle(group, options2);
          return buildExpressionRow(body, options2);
        }
      });
      ;
      var assembleSupSub = function assembleSupSub2(base, supGroup, subGroup, options2, style, slant, baseShift) {
        base = buildCommon.makeSpan([], [base]);
        var sub;
        var sup;
        if (supGroup) {
          var elem = buildGroup(supGroup, options2.havingStyle(style.sup()), options2);
          sup = {
            elem,
            kern: Math.max(options2.fontMetrics().bigOpSpacing1, options2.fontMetrics().bigOpSpacing3 - elem.depth)
          };
        }
        if (subGroup) {
          var _elem = buildGroup(subGroup, options2.havingStyle(style.sub()), options2);
          sub = {
            elem: _elem,
            kern: Math.max(options2.fontMetrics().bigOpSpacing2, options2.fontMetrics().bigOpSpacing4 - _elem.height)
          };
        }
        var finalGroup;
        if (sup && sub) {
          var bottom = options2.fontMetrics().bigOpSpacing5 + sub.elem.height + sub.elem.depth + sub.kern + base.depth + baseShift;
          finalGroup = buildCommon.makeVList({
            positionType: "bottom",
            positionData: bottom,
            children: [{
              type: "kern",
              size: options2.fontMetrics().bigOpSpacing5
            }, {
              type: "elem",
              elem: sub.elem,
              marginLeft: -slant + "em"
            }, {
              type: "kern",
              size: sub.kern
            }, {
              type: "elem",
              elem: base
            }, {
              type: "kern",
              size: sup.kern
            }, {
              type: "elem",
              elem: sup.elem,
              marginLeft: slant + "em"
            }, {
              type: "kern",
              size: options2.fontMetrics().bigOpSpacing5
            }]
          }, options2);
        } else if (sub) {
          var top = base.height - baseShift;
          finalGroup = buildCommon.makeVList({
            positionType: "top",
            positionData: top,
            children: [{
              type: "kern",
              size: options2.fontMetrics().bigOpSpacing5
            }, {
              type: "elem",
              elem: sub.elem,
              marginLeft: -slant + "em"
            }, {
              type: "kern",
              size: sub.kern
            }, {
              type: "elem",
              elem: base
            }]
          }, options2);
        } else if (sup) {
          var _bottom = base.depth + baseShift;
          finalGroup = buildCommon.makeVList({
            positionType: "bottom",
            positionData: _bottom,
            children: [{
              type: "elem",
              elem: base
            }, {
              type: "kern",
              size: sup.kern
            }, {
              type: "elem",
              elem: sup.elem,
              marginLeft: slant + "em"
            }, {
              type: "kern",
              size: options2.fontMetrics().bigOpSpacing5
            }]
          }, options2);
        } else {
          return base;
        }
        return buildCommon.makeSpan(["mop", "op-limits"], [finalGroup], options2);
      };
      ;
      var noSuccessor = ["\\smallint"];
      var op_htmlBuilder = function htmlBuilder2(grp, options2) {
        var supGroup;
        var subGroup;
        var hasLimits = false;
        var group;
        if (grp.type === "supsub") {
          supGroup = grp.sup;
          subGroup = grp.sub;
          group = assertNodeType(grp.base, "op");
          hasLimits = true;
        } else {
          group = assertNodeType(grp, "op");
        }
        var style = options2.style;
        var large = false;
        if (style.size === src_Style.DISPLAY.size && group.symbol && !utils.contains(noSuccessor, group.name)) {
          large = true;
        }
        var base;
        if (group.symbol) {
          var fontName = large ? "Size2-Regular" : "Size1-Regular";
          var stash = "";
          if (group.name === "\\oiint" || group.name === "\\oiiint") {
            stash = group.name.substr(1);
            group.name = stash === "oiint" ? "\\iint" : "\\iiint";
          }
          base = buildCommon.makeSymbol(group.name, fontName, "math", options2, ["mop", "op-symbol", large ? "large-op" : "small-op"]);
          if (stash.length > 0) {
            var italic = base.italic;
            var oval = buildCommon.staticSvg(stash + "Size" + (large ? "2" : "1"), options2);
            base = buildCommon.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: base,
                shift: 0
              }, {
                type: "elem",
                elem: oval,
                shift: large ? 0.08 : 0
              }]
            }, options2);
            group.name = "\\" + stash;
            base.classes.unshift("mop");
            base.italic = italic;
          }
        } else if (group.body) {
          var inner2 = buildExpression(group.body, options2, true);
          if (inner2.length === 1 && inner2[0] instanceof SymbolNode) {
            base = inner2[0];
            base.classes[0] = "mop";
          } else {
            base = buildCommon.makeSpan(["mop"], inner2, options2);
          }
        } else {
          var output = [];
          for (var i2 = 1; i2 < group.name.length; i2++) {
            output.push(buildCommon.mathsym(group.name[i2], group.mode, options2));
          }
          base = buildCommon.makeSpan(["mop"], output, options2);
        }
        var baseShift = 0;
        var slant = 0;
        if ((base instanceof SymbolNode || group.name === "\\oiint" || group.name === "\\oiiint") && !group.suppressBaseShift) {
          baseShift = (base.height - base.depth) / 2 - options2.fontMetrics().axisHeight;
          slant = base.italic;
        }
        if (hasLimits) {
          return assembleSupSub(base, supGroup, subGroup, options2, style, slant, baseShift);
        } else {
          if (baseShift) {
            base.style.position = "relative";
            base.style.top = baseShift + "em";
          }
          return base;
        }
      };
      var op_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var node;
        if (group.symbol) {
          node = new MathNode("mo", [makeText(group.name, group.mode)]);
          if (utils.contains(noSuccessor, group.name)) {
            node.setAttribute("largeop", "false");
          }
        } else if (group.body) {
          node = new MathNode("mo", buildMathML_buildExpression(group.body, options2));
        } else {
          node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
          var operator = new MathNode("mo", [makeText("\u2061", "text")]);
          if (group.parentIsSupSub) {
            node = new MathNode("mrow", [node, operator]);
          } else {
            node = newDocumentFragment([node, operator]);
          }
        }
        return node;
      };
      var singleCharBigOps = {
        "\u220F": "\\prod",
        "\u2210": "\\coprod",
        "\u2211": "\\sum",
        "\u22C0": "\\bigwedge",
        "\u22C1": "\\bigvee",
        "\u22C2": "\\bigcap",
        "\u22C3": "\\bigcup",
        "\u2A00": "\\bigodot",
        "\u2A01": "\\bigoplus",
        "\u2A02": "\\bigotimes",
        "\u2A04": "\\biguplus",
        "\u2A06": "\\bigsqcup"
      };
      defineFunction({
        type: "op",
        names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"],
        props: {
          numArgs: 0
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var fName = funcName;
          if (fName.length === 1) {
            fName = singleCharBigOps[fName];
          }
          return {
            type: "op",
            mode: parser.mode,
            limits: true,
            parentIsSupSub: false,
            symbol: true,
            name: fName
          };
        },
        htmlBuilder: op_htmlBuilder,
        mathmlBuilder: op_mathmlBuilder
      });
      defineFunction({
        type: "op",
        names: ["\\mathop"],
        props: {
          numArgs: 1,
          primitive: true
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          var body = args[0];
          return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: false,
            body: ordargument(body)
          };
        },
        htmlBuilder: op_htmlBuilder,
        mathmlBuilder: op_mathmlBuilder
      });
      var singleCharIntegrals = {
        "\u222B": "\\int",
        "\u222C": "\\iint",
        "\u222D": "\\iiint",
        "\u222E": "\\oint",
        "\u222F": "\\oiint",
        "\u2230": "\\oiiint"
      };
      defineFunction({
        type: "op",
        names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
        props: {
          numArgs: 0
        },
        handler: function handler2(_ref3) {
          var parser = _ref3.parser, funcName = _ref3.funcName;
          return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: false,
            name: funcName
          };
        },
        htmlBuilder: op_htmlBuilder,
        mathmlBuilder: op_mathmlBuilder
      });
      defineFunction({
        type: "op",
        names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
        props: {
          numArgs: 0
        },
        handler: function handler2(_ref4) {
          var parser = _ref4.parser, funcName = _ref4.funcName;
          return {
            type: "op",
            mode: parser.mode,
            limits: true,
            parentIsSupSub: false,
            symbol: false,
            name: funcName
          };
        },
        htmlBuilder: op_htmlBuilder,
        mathmlBuilder: op_mathmlBuilder
      });
      defineFunction({
        type: "op",
        names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"],
        props: {
          numArgs: 0
        },
        handler: function handler2(_ref5) {
          var parser = _ref5.parser, funcName = _ref5.funcName;
          var fName = funcName;
          if (fName.length === 1) {
            fName = singleCharIntegrals[fName];
          }
          return {
            type: "op",
            mode: parser.mode,
            limits: false,
            parentIsSupSub: false,
            symbol: true,
            name: fName
          };
        },
        htmlBuilder: op_htmlBuilder,
        mathmlBuilder: op_mathmlBuilder
      });
      ;
      var operatorname_htmlBuilder = function htmlBuilder2(grp, options2) {
        var supGroup;
        var subGroup;
        var hasLimits = false;
        var group;
        if (grp.type === "supsub") {
          supGroup = grp.sup;
          subGroup = grp.sub;
          group = assertNodeType(grp.base, "operatorname");
          hasLimits = true;
        } else {
          group = assertNodeType(grp, "operatorname");
        }
        var base;
        if (group.body.length > 0) {
          var body = group.body.map(function(child2) {
            var childText = child2.text;
            if (typeof childText === "string") {
              return {
                type: "textord",
                mode: child2.mode,
                text: childText
              };
            } else {
              return child2;
            }
          });
          var expression = buildExpression(body, options2.withFont("mathrm"), true);
          for (var i2 = 0; i2 < expression.length; i2++) {
            var child = expression[i2];
            if (child instanceof SymbolNode) {
              child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
            }
          }
          base = buildCommon.makeSpan(["mop"], expression, options2);
        } else {
          base = buildCommon.makeSpan(["mop"], [], options2);
        }
        if (hasLimits) {
          return assembleSupSub(base, supGroup, subGroup, options2, options2.style, 0, 0);
        } else {
          return base;
        }
      };
      var operatorname_mathmlBuilder = function mathmlBuilder2(group, options2) {
        var expression = buildMathML_buildExpression(group.body, options2.withFont("mathrm"));
        var isAllString = true;
        for (var i2 = 0; i2 < expression.length; i2++) {
          var node = expression[i2];
          if (node instanceof mathMLTree.SpaceNode) {
          } else if (node instanceof mathMLTree.MathNode) {
            switch (node.type) {
              case "mi":
              case "mn":
              case "ms":
              case "mspace":
              case "mtext":
                break;
              case "mo": {
                var child = node.children[0];
                if (node.children.length === 1 && child instanceof mathMLTree.TextNode) {
                  child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
                } else {
                  isAllString = false;
                }
                break;
              }
              default:
                isAllString = false;
            }
          } else {
            isAllString = false;
          }
        }
        if (isAllString) {
          var word = expression.map(function(node2) {
            return node2.toText();
          }).join("");
          expression = [new mathMLTree.TextNode(word)];
        }
        var identifier = new mathMLTree.MathNode("mi", expression);
        identifier.setAttribute("mathvariant", "normal");
        var operator = new mathMLTree.MathNode("mo", [makeText("\u2061", "text")]);
        if (group.parentIsSupSub) {
          return new mathMLTree.MathNode("mrow", [identifier, operator]);
        } else {
          return mathMLTree.newDocumentFragment([identifier, operator]);
        }
      };
      defineFunction({
        type: "operatorname",
        names: ["\\operatorname", "\\operatorname*"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var body = args[0];
          return {
            type: "operatorname",
            mode: parser.mode,
            body: ordargument(body),
            alwaysHandleSupSub: funcName === "\\operatorname*",
            limits: false,
            parentIsSupSub: false
          };
        },
        htmlBuilder: operatorname_htmlBuilder,
        mathmlBuilder: operatorname_mathmlBuilder
      });
      ;
      defineFunctionBuilders({
        type: "ordgroup",
        htmlBuilder: function htmlBuilder2(group, options2) {
          if (group.semisimple) {
            return buildCommon.makeFragment(buildExpression(group.body, options2, false));
          }
          return buildCommon.makeSpan(["mord"], buildExpression(group.body, options2, true), options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return buildExpressionRow(group.body, options2, true);
        }
      });
      ;
      defineFunction({
        type: "overline",
        names: ["\\overline"],
        props: {
          numArgs: 1
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var body = args[0];
          return {
            type: "overline",
            mode: parser.mode,
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var innerGroup = buildGroup(group.body, options2.havingCrampedStyle());
          var line = buildCommon.makeLineSpan("overline-line", options2);
          var defaultRuleThickness = options2.fontMetrics().defaultRuleThickness;
          var vlist = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: innerGroup
            }, {
              type: "kern",
              size: 3 * defaultRuleThickness
            }, {
              type: "elem",
              elem: line
            }, {
              type: "kern",
              size: defaultRuleThickness
            }]
          }, options2);
          return buildCommon.makeSpan(["mord", "overline"], [vlist], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
          operator.setAttribute("stretchy", "true");
          var node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.body, options2), operator]);
          node.setAttribute("accent", "true");
          return node;
        }
      });
      ;
      defineFunction({
        type: "phantom",
        names: ["\\phantom"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var body = args[0];
          return {
            type: "phantom",
            mode: parser.mode,
            body: ordargument(body)
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var elements = buildExpression(group.body, options2.withPhantom(), false);
          return buildCommon.makeFragment(elements);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var inner2 = buildMathML_buildExpression(group.body, options2);
          return new mathMLTree.MathNode("mphantom", inner2);
        }
      });
      defineFunction({
        type: "hphantom",
        names: ["\\hphantom"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref2, args) {
          var parser = _ref2.parser;
          var body = args[0];
          return {
            type: "hphantom",
            mode: parser.mode,
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var node = buildCommon.makeSpan([], [buildGroup(group.body, options2.withPhantom())]);
          node.height = 0;
          node.depth = 0;
          if (node.children) {
            for (var i2 = 0; i2 < node.children.length; i2++) {
              node.children[i2].height = 0;
              node.children[i2].depth = 0;
            }
          }
          node = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: node
            }]
          }, options2);
          return buildCommon.makeSpan(["mord"], [node], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var inner2 = buildMathML_buildExpression(ordargument(group.body), options2);
          var phantom = new mathMLTree.MathNode("mphantom", inner2);
          var node = new mathMLTree.MathNode("mpadded", [phantom]);
          node.setAttribute("height", "0px");
          node.setAttribute("depth", "0px");
          return node;
        }
      });
      defineFunction({
        type: "vphantom",
        names: ["\\vphantom"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref3, args) {
          var parser = _ref3.parser;
          var body = args[0];
          return {
            type: "vphantom",
            mode: parser.mode,
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var inner2 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options2.withPhantom())]);
          var fix = buildCommon.makeSpan(["fix"], []);
          return buildCommon.makeSpan(["mord", "rlap"], [inner2, fix], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var inner2 = buildMathML_buildExpression(ordargument(group.body), options2);
          var phantom = new mathMLTree.MathNode("mphantom", inner2);
          var node = new mathMLTree.MathNode("mpadded", [phantom]);
          node.setAttribute("width", "0px");
          return node;
        }
      });
      ;
      defineFunction({
        type: "raisebox",
        names: ["\\raisebox"],
        props: {
          numArgs: 2,
          argTypes: ["size", "hbox"],
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          var amount = assertNodeType(args[0], "size").value;
          var body = args[1];
          return {
            type: "raisebox",
            mode: parser.mode,
            dy: amount,
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var body = buildGroup(group.body, options2);
          var dy = calculateSize(group.dy, options2);
          return buildCommon.makeVList({
            positionType: "shift",
            positionData: -dy,
            children: [{
              type: "elem",
              elem: body
            }]
          }, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options2)]);
          var dy = group.dy.number + group.dy.unit;
          node.setAttribute("voffset", dy);
          return node;
        }
      });
      ;
      defineFunction({
        type: "rule",
        names: ["\\rule"],
        props: {
          numArgs: 2,
          numOptionalArgs: 1,
          argTypes: ["size", "size", "size"]
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser;
          var shift = optArgs[0];
          var width = assertNodeType(args[0], "size");
          var height = assertNodeType(args[1], "size");
          return {
            type: "rule",
            mode: parser.mode,
            shift: shift && assertNodeType(shift, "size").value,
            width: width.value,
            height: height.value
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var rule = buildCommon.makeSpan(["mord", "rule"], [], options2);
          var width = calculateSize(group.width, options2);
          var height = calculateSize(group.height, options2);
          var shift = group.shift ? calculateSize(group.shift, options2) : 0;
          rule.style.borderRightWidth = width + "em";
          rule.style.borderTopWidth = height + "em";
          rule.style.bottom = shift + "em";
          rule.width = width;
          rule.height = height + shift;
          rule.depth = -shift;
          rule.maxFontSize = height * 1.125 * options2.sizeMultiplier;
          return rule;
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var width = calculateSize(group.width, options2);
          var height = calculateSize(group.height, options2);
          var shift = group.shift ? calculateSize(group.shift, options2) : 0;
          var color = options2.color && options2.getColor() || "black";
          var rule = new mathMLTree.MathNode("mspace");
          rule.setAttribute("mathbackground", color);
          rule.setAttribute("width", width + "em");
          rule.setAttribute("height", height + "em");
          var wrapper = new mathMLTree.MathNode("mpadded", [rule]);
          if (shift >= 0) {
            wrapper.setAttribute("height", "+" + shift + "em");
          } else {
            wrapper.setAttribute("height", shift + "em");
            wrapper.setAttribute("depth", "+" + -shift + "em");
          }
          wrapper.setAttribute("voffset", shift + "em");
          return wrapper;
        }
      });
      ;
      function sizingGroup(value, options2, baseOptions) {
        var inner2 = buildExpression(value, options2, false);
        var multiplier = options2.sizeMultiplier / baseOptions.sizeMultiplier;
        for (var i2 = 0; i2 < inner2.length; i2++) {
          var pos = inner2[i2].classes.indexOf("sizing");
          if (pos < 0) {
            Array.prototype.push.apply(inner2[i2].classes, options2.sizingClasses(baseOptions));
          } else if (inner2[i2].classes[pos + 1] === "reset-size" + options2.size) {
            inner2[i2].classes[pos + 1] = "reset-size" + baseOptions.size;
          }
          inner2[i2].height *= multiplier;
          inner2[i2].depth *= multiplier;
        }
        return buildCommon.makeFragment(inner2);
      }
      var sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
      var sizing_htmlBuilder = function htmlBuilder2(group, options2) {
        var newOptions = options2.havingSize(group.size);
        return sizingGroup(group.body, newOptions, options2);
      };
      defineFunction({
        type: "sizing",
        names: sizeFuncs,
        props: {
          numArgs: 0,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var breakOnTokenText = _ref.breakOnTokenText, funcName = _ref.funcName, parser = _ref.parser;
          var body = parser.parseExpression(false, breakOnTokenText);
          return {
            type: "sizing",
            mode: parser.mode,
            size: sizeFuncs.indexOf(funcName) + 1,
            body
          };
        },
        htmlBuilder: sizing_htmlBuilder,
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var newOptions = options2.havingSize(group.size);
          var inner2 = buildMathML_buildExpression(group.body, newOptions);
          var node = new mathMLTree.MathNode("mstyle", inner2);
          node.setAttribute("mathsize", newOptions.sizeMultiplier + "em");
          return node;
        }
      });
      ;
      defineFunction({
        type: "smash",
        names: ["\\smash"],
        props: {
          numArgs: 1,
          numOptionalArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser;
          var smashHeight = false;
          var smashDepth = false;
          var tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
          if (tbArg) {
            var letter = "";
            for (var i2 = 0; i2 < tbArg.body.length; ++i2) {
              var node = tbArg.body[i2];
              letter = node.text;
              if (letter === "t") {
                smashHeight = true;
              } else if (letter === "b") {
                smashDepth = true;
              } else {
                smashHeight = false;
                smashDepth = false;
                break;
              }
            }
          } else {
            smashHeight = true;
            smashDepth = true;
          }
          var body = args[0];
          return {
            type: "smash",
            mode: parser.mode,
            body,
            smashHeight,
            smashDepth
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var node = buildCommon.makeSpan([], [buildGroup(group.body, options2)]);
          if (!group.smashHeight && !group.smashDepth) {
            return node;
          }
          if (group.smashHeight) {
            node.height = 0;
            if (node.children) {
              for (var i2 = 0; i2 < node.children.length; i2++) {
                node.children[i2].height = 0;
              }
            }
          }
          if (group.smashDepth) {
            node.depth = 0;
            if (node.children) {
              for (var _i6 = 0; _i6 < node.children.length; _i6++) {
                node.children[_i6].depth = 0;
              }
            }
          }
          var smashedNode = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: node
            }]
          }, options2);
          return buildCommon.makeSpan(["mord"], [smashedNode], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options2)]);
          if (group.smashHeight) {
            node.setAttribute("height", "0px");
          }
          if (group.smashDepth) {
            node.setAttribute("depth", "0px");
          }
          return node;
        }
      });
      ;
      defineFunction({
        type: "sqrt",
        names: ["\\sqrt"],
        props: {
          numArgs: 1,
          numOptionalArgs: 1
        },
        handler: function handler2(_ref, args, optArgs) {
          var parser = _ref.parser;
          var index2 = optArgs[0];
          var body = args[0];
          return {
            type: "sqrt",
            mode: parser.mode,
            body,
            index: index2
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var inner2 = buildGroup(group.body, options2.havingCrampedStyle());
          if (inner2.height === 0) {
            inner2.height = options2.fontMetrics().xHeight;
          }
          inner2 = buildCommon.wrapFragment(inner2, options2);
          var metrics = options2.fontMetrics();
          var theta = metrics.defaultRuleThickness;
          var phi = theta;
          if (options2.style.id < src_Style.TEXT.id) {
            phi = options2.fontMetrics().xHeight;
          }
          var lineClearance = theta + phi / 4;
          var minDelimiterHeight = inner2.height + inner2.depth + lineClearance + theta;
          var _delimiter$sqrtImage = delimiter.sqrtImage(minDelimiterHeight, options2), img = _delimiter$sqrtImage.span, ruleWidth = _delimiter$sqrtImage.ruleWidth, advanceWidth = _delimiter$sqrtImage.advanceWidth;
          var delimDepth = img.height - ruleWidth;
          if (delimDepth > inner2.height + inner2.depth + lineClearance) {
            lineClearance = (lineClearance + delimDepth - inner2.height - inner2.depth) / 2;
          }
          var imgShift = img.height - inner2.height - lineClearance - ruleWidth;
          inner2.style.paddingLeft = advanceWidth + "em";
          var body = buildCommon.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: inner2,
              wrapperClasses: ["svg-align"]
            }, {
              type: "kern",
              size: -(inner2.height + imgShift)
            }, {
              type: "elem",
              elem: img
            }, {
              type: "kern",
              size: ruleWidth
            }]
          }, options2);
          if (!group.index) {
            return buildCommon.makeSpan(["mord", "sqrt"], [body], options2);
          } else {
            var newOptions = options2.havingStyle(src_Style.SCRIPTSCRIPT);
            var rootm = buildGroup(group.index, newOptions, options2);
            var toShift = 0.6 * (body.height - body.depth);
            var rootVList = buildCommon.makeVList({
              positionType: "shift",
              positionData: -toShift,
              children: [{
                type: "elem",
                elem: rootm
              }]
            }, options2);
            var rootVListWrap = buildCommon.makeSpan(["root"], [rootVList]);
            return buildCommon.makeSpan(["mord", "sqrt"], [rootVListWrap, body], options2);
          }
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var body = group.body, index2 = group.index;
          return index2 ? new mathMLTree.MathNode("mroot", [buildMathML_buildGroup(body, options2), buildMathML_buildGroup(index2, options2)]) : new mathMLTree.MathNode("msqrt", [buildMathML_buildGroup(body, options2)]);
        }
      });
      ;
      var styling_styleMap = {
        display: src_Style.DISPLAY,
        text: src_Style.TEXT,
        script: src_Style.SCRIPT,
        scriptscript: src_Style.SCRIPTSCRIPT
      };
      defineFunction({
        type: "styling",
        names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
        props: {
          numArgs: 0,
          allowedInText: true,
          primitive: true
        },
        handler: function handler2(_ref, args) {
          var breakOnTokenText = _ref.breakOnTokenText, funcName = _ref.funcName, parser = _ref.parser;
          var body = parser.parseExpression(true, breakOnTokenText);
          var style = funcName.slice(1, funcName.length - 5);
          return {
            type: "styling",
            mode: parser.mode,
            style,
            body
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var newStyle = styling_styleMap[group.style];
          var newOptions = options2.havingStyle(newStyle).withFont("");
          return sizingGroup(group.body, newOptions, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var newStyle = styling_styleMap[group.style];
          var newOptions = options2.havingStyle(newStyle);
          var inner2 = buildMathML_buildExpression(group.body, newOptions);
          var node = new mathMLTree.MathNode("mstyle", inner2);
          var styleAttributes = {
            display: ["0", "true"],
            text: ["0", "false"],
            script: ["1", "false"],
            scriptscript: ["2", "false"]
          };
          var attr = styleAttributes[group.style];
          node.setAttribute("scriptlevel", attr[0]);
          node.setAttribute("displaystyle", attr[1]);
          return node;
        }
      });
      ;
      var htmlBuilderDelegate = function htmlBuilderDelegate2(group, options2) {
        var base = group.base;
        if (!base) {
          return null;
        } else if (base.type === "op") {
          var delegate = base.limits && (options2.style.size === src_Style.DISPLAY.size || base.alwaysHandleSupSub);
          return delegate ? op_htmlBuilder : null;
        } else if (base.type === "operatorname") {
          var _delegate = base.alwaysHandleSupSub && (options2.style.size === src_Style.DISPLAY.size || base.limits);
          return _delegate ? operatorname_htmlBuilder : null;
        } else if (base.type === "accent") {
          return utils.isCharacterBox(base.base) ? htmlBuilder : null;
        } else if (base.type === "horizBrace") {
          var isSup = !group.sub;
          return isSup === base.isOver ? horizBrace_htmlBuilder : null;
        } else {
          return null;
        }
      };
      defineFunctionBuilders({
        type: "supsub",
        htmlBuilder: function htmlBuilder2(group, options2) {
          var builderDelegate = htmlBuilderDelegate(group, options2);
          if (builderDelegate) {
            return builderDelegate(group, options2);
          }
          var valueBase = group.base, valueSup = group.sup, valueSub = group.sub;
          var base = buildGroup(valueBase, options2);
          var supm;
          var subm;
          var metrics = options2.fontMetrics();
          var supShift = 0;
          var subShift = 0;
          var isCharacterBox2 = valueBase && utils.isCharacterBox(valueBase);
          if (valueSup) {
            var newOptions = options2.havingStyle(options2.style.sup());
            supm = buildGroup(valueSup, newOptions, options2);
            if (!isCharacterBox2) {
              supShift = base.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options2.sizeMultiplier;
            }
          }
          if (valueSub) {
            var _newOptions = options2.havingStyle(options2.style.sub());
            subm = buildGroup(valueSub, _newOptions, options2);
            if (!isCharacterBox2) {
              subShift = base.depth + _newOptions.fontMetrics().subDrop * _newOptions.sizeMultiplier / options2.sizeMultiplier;
            }
          }
          var minSupShift;
          if (options2.style === src_Style.DISPLAY) {
            minSupShift = metrics.sup1;
          } else if (options2.style.cramped) {
            minSupShift = metrics.sup3;
          } else {
            minSupShift = metrics.sup2;
          }
          var multiplier = options2.sizeMultiplier;
          var marginRight = 0.5 / metrics.ptPerEm / multiplier + "em";
          var marginLeft = null;
          if (subm) {
            var isOiint = group.base && group.base.type === "op" && group.base.name && (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
            if (base instanceof SymbolNode || isOiint) {
              marginLeft = -base.italic + "em";
            }
          }
          var supsub;
          if (supm && subm) {
            supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
            subShift = Math.max(subShift, metrics.sub2);
            var ruleWidth = metrics.defaultRuleThickness;
            var maxWidth = 4 * ruleWidth;
            if (supShift - supm.depth - (subm.height - subShift) < maxWidth) {
              subShift = maxWidth - (supShift - supm.depth) + subm.height;
              var psi = 0.8 * metrics.xHeight - (supShift - supm.depth);
              if (psi > 0) {
                supShift += psi;
                subShift -= psi;
              }
            }
            var vlistElem = [{
              type: "elem",
              elem: subm,
              shift: subShift,
              marginRight,
              marginLeft
            }, {
              type: "elem",
              elem: supm,
              shift: -supShift,
              marginRight
            }];
            supsub = buildCommon.makeVList({
              positionType: "individualShift",
              children: vlistElem
            }, options2);
          } else if (subm) {
            subShift = Math.max(subShift, metrics.sub1, subm.height - 0.8 * metrics.xHeight);
            var _vlistElem = [{
              type: "elem",
              elem: subm,
              marginLeft,
              marginRight
            }];
            supsub = buildCommon.makeVList({
              positionType: "shift",
              positionData: subShift,
              children: _vlistElem
            }, options2);
          } else if (supm) {
            supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
            supsub = buildCommon.makeVList({
              positionType: "shift",
              positionData: -supShift,
              children: [{
                type: "elem",
                elem: supm,
                marginRight
              }]
            }, options2);
          } else {
            throw new Error("supsub must have either sup or sub.");
          }
          var mclass = getTypeOfDomTree(base, "right") || "mord";
          return buildCommon.makeSpan([mclass], [base, buildCommon.makeSpan(["msupsub"], [supsub])], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var isBrace = false;
          var isOver;
          var isSup;
          if (group.base && group.base.type === "horizBrace") {
            isSup = !!group.sup;
            if (isSup === group.base.isOver) {
              isBrace = true;
              isOver = group.base.isOver;
            }
          }
          if (group.base && (group.base.type === "op" || group.base.type === "operatorname")) {
            group.base.parentIsSupSub = true;
          }
          var children = [buildMathML_buildGroup(group.base, options2)];
          if (group.sub) {
            children.push(buildMathML_buildGroup(group.sub, options2));
          }
          if (group.sup) {
            children.push(buildMathML_buildGroup(group.sup, options2));
          }
          var nodeType;
          if (isBrace) {
            nodeType = isOver ? "mover" : "munder";
          } else if (!group.sub) {
            var base = group.base;
            if (base && base.type === "op" && base.limits && (options2.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) {
              nodeType = "mover";
            } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options2.style === src_Style.DISPLAY)) {
              nodeType = "mover";
            } else {
              nodeType = "msup";
            }
          } else if (!group.sup) {
            var _base = group.base;
            if (_base && _base.type === "op" && _base.limits && (options2.style === src_Style.DISPLAY || _base.alwaysHandleSupSub)) {
              nodeType = "munder";
            } else if (_base && _base.type === "operatorname" && _base.alwaysHandleSupSub && (_base.limits || options2.style === src_Style.DISPLAY)) {
              nodeType = "munder";
            } else {
              nodeType = "msub";
            }
          } else {
            var _base2 = group.base;
            if (_base2 && _base2.type === "op" && _base2.limits && options2.style === src_Style.DISPLAY) {
              nodeType = "munderover";
            } else if (_base2 && _base2.type === "operatorname" && _base2.alwaysHandleSupSub && (options2.style === src_Style.DISPLAY || _base2.limits)) {
              nodeType = "munderover";
            } else {
              nodeType = "msubsup";
            }
          }
          return new mathMLTree.MathNode(nodeType, children);
        }
      });
      ;
      defineFunctionBuilders({
        type: "atom",
        htmlBuilder: function htmlBuilder2(group, options2) {
          return buildCommon.mathsym(group.text, group.mode, options2, ["m" + group.family]);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mo", [makeText(group.text, group.mode)]);
          if (group.family === "bin") {
            var variant = getVariant(group, options2);
            if (variant === "bold-italic") {
              node.setAttribute("mathvariant", variant);
            }
          } else if (group.family === "punct") {
            node.setAttribute("separator", "true");
          } else if (group.family === "open" || group.family === "close") {
            node.setAttribute("stretchy", "false");
          }
          return node;
        }
      });
      ;
      var defaultVariant = {
        mi: "italic",
        mn: "normal",
        mtext: "normal"
      };
      defineFunctionBuilders({
        type: "mathord",
        htmlBuilder: function htmlBuilder2(group, options2) {
          return buildCommon.makeOrd(group, options2, "mathord");
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node = new mathMLTree.MathNode("mi", [makeText(group.text, group.mode, options2)]);
          var variant = getVariant(group, options2) || "italic";
          if (variant !== defaultVariant[node.type]) {
            node.setAttribute("mathvariant", variant);
          }
          return node;
        }
      });
      defineFunctionBuilders({
        type: "textord",
        htmlBuilder: function htmlBuilder2(group, options2) {
          return buildCommon.makeOrd(group, options2, "textord");
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var text = makeText(group.text, group.mode, options2);
          var variant = getVariant(group, options2) || "normal";
          var node;
          if (group.mode === "text") {
            node = new mathMLTree.MathNode("mtext", [text]);
          } else if (/[0-9]/.test(group.text)) {
            node = new mathMLTree.MathNode("mn", [text]);
          } else if (group.text === "\\prime") {
            node = new mathMLTree.MathNode("mo", [text]);
          } else {
            node = new mathMLTree.MathNode("mi", [text]);
          }
          if (variant !== defaultVariant[node.type]) {
            node.setAttribute("mathvariant", variant);
          }
          return node;
        }
      });
      ;
      var cssSpace = {
        "\\nobreak": "nobreak",
        "\\allowbreak": "allowbreak"
      };
      var regularSpace = {
        " ": {},
        "\\ ": {},
        "~": {
          className: "nobreak"
        },
        "\\space": {},
        "\\nobreakspace": {
          className: "nobreak"
        }
      };
      defineFunctionBuilders({
        type: "spacing",
        htmlBuilder: function htmlBuilder2(group, options2) {
          if (regularSpace.hasOwnProperty(group.text)) {
            var className = regularSpace[group.text].className || "";
            if (group.mode === "text") {
              var ord = buildCommon.makeOrd(group, options2, "textord");
              ord.classes.push(className);
              return ord;
            } else {
              return buildCommon.makeSpan(["mspace", className], [buildCommon.mathsym(group.text, group.mode, options2)], options2);
            }
          } else if (cssSpace.hasOwnProperty(group.text)) {
            return buildCommon.makeSpan(["mspace", cssSpace[group.text]], [], options2);
          } else {
            throw new src_ParseError('Unknown type of space "' + group.text + '"');
          }
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var node;
          if (regularSpace.hasOwnProperty(group.text)) {
            node = new mathMLTree.MathNode("mtext", [new mathMLTree.TextNode("\xA0")]);
          } else if (cssSpace.hasOwnProperty(group.text)) {
            return new mathMLTree.MathNode("mspace");
          } else {
            throw new src_ParseError('Unknown type of space "' + group.text + '"');
          }
          return node;
        }
      });
      ;
      var pad = function pad2() {
        var padNode = new mathMLTree.MathNode("mtd", []);
        padNode.setAttribute("width", "50%");
        return padNode;
      };
      defineFunctionBuilders({
        type: "tag",
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var table = new mathMLTree.MathNode("mtable", [new mathMLTree.MathNode("mtr", [pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.body, options2)]), pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.tag, options2)])])]);
          table.setAttribute("width", "100%");
          return table;
        }
      });
      ;
      var textFontFamilies = {
        "\\text": void 0,
        "\\textrm": "textrm",
        "\\textsf": "textsf",
        "\\texttt": "texttt",
        "\\textnormal": "textrm"
      };
      var textFontWeights = {
        "\\textbf": "textbf",
        "\\textmd": "textmd"
      };
      var textFontShapes = {
        "\\textit": "textit",
        "\\textup": "textup"
      };
      var optionsWithFont = function optionsWithFont2(group, options2) {
        var font = group.font;
        if (!font) {
          return options2;
        } else if (textFontFamilies[font]) {
          return options2.withTextFontFamily(textFontFamilies[font]);
        } else if (textFontWeights[font]) {
          return options2.withTextFontWeight(textFontWeights[font]);
        } else {
          return options2.withTextFontShape(textFontShapes[font]);
        }
      };
      defineFunction({
        type: "text",
        names: [
          "\\text",
          "\\textrm",
          "\\textsf",
          "\\texttt",
          "\\textnormal",
          "\\textbf",
          "\\textmd",
          "\\textit",
          "\\textup"
        ],
        props: {
          numArgs: 1,
          argTypes: ["text"],
          allowedInArgument: true,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser, funcName = _ref.funcName;
          var body = args[0];
          return {
            type: "text",
            mode: parser.mode,
            body: ordargument(body),
            font: funcName
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var newOptions = optionsWithFont(group, options2);
          var inner2 = buildExpression(group.body, newOptions, true);
          return buildCommon.makeSpan(["mord", "text"], inner2, newOptions);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var newOptions = optionsWithFont(group, options2);
          return buildExpressionRow(group.body, newOptions);
        }
      });
      ;
      defineFunction({
        type: "underline",
        names: ["\\underline"],
        props: {
          numArgs: 1,
          allowedInText: true
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          return {
            type: "underline",
            mode: parser.mode,
            body: args[0]
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var innerGroup = buildGroup(group.body, options2);
          var line = buildCommon.makeLineSpan("underline-line", options2);
          var defaultRuleThickness = options2.fontMetrics().defaultRuleThickness;
          var vlist = buildCommon.makeVList({
            positionType: "top",
            positionData: innerGroup.height,
            children: [{
              type: "kern",
              size: defaultRuleThickness
            }, {
              type: "elem",
              elem: line
            }, {
              type: "kern",
              size: 3 * defaultRuleThickness
            }, {
              type: "elem",
              elem: innerGroup
            }]
          }, options2);
          return buildCommon.makeSpan(["mord", "underline"], [vlist], options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
          operator.setAttribute("stretchy", "true");
          var node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.body, options2), operator]);
          node.setAttribute("accentunder", "true");
          return node;
        }
      });
      ;
      defineFunction({
        type: "vcenter",
        names: ["\\vcenter"],
        props: {
          numArgs: 1,
          argTypes: ["original"],
          allowedInText: false
        },
        handler: function handler2(_ref, args) {
          var parser = _ref.parser;
          return {
            type: "vcenter",
            mode: parser.mode,
            body: args[0]
          };
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var body = buildGroup(group.body, options2);
          var axisHeight = options2.fontMetrics().axisHeight;
          var dy = 0.5 * (body.height - axisHeight - (body.depth + axisHeight));
          return buildCommon.makeVList({
            positionType: "shift",
            positionData: dy,
            children: [{
              type: "elem",
              elem: body
            }]
          }, options2);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          return new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options2)], ["vcenter"]);
        }
      });
      ;
      defineFunction({
        type: "verb",
        names: ["\\verb"],
        props: {
          numArgs: 0,
          allowedInText: true
        },
        handler: function handler2(context, args, optArgs) {
          throw new src_ParseError("\\verb ended by end of line instead of matching delimiter");
        },
        htmlBuilder: function htmlBuilder2(group, options2) {
          var text = makeVerb(group);
          var body = [];
          var newOptions = options2.havingStyle(options2.style.text());
          for (var i2 = 0; i2 < text.length; i2++) {
            var c = text[i2];
            if (c === "~") {
              c = "\\textasciitilde";
            }
            body.push(buildCommon.makeSymbol(c, "Typewriter-Regular", group.mode, newOptions, ["mord", "texttt"]));
          }
          return buildCommon.makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options2)), buildCommon.tryCombineChars(body), newOptions);
        },
        mathmlBuilder: function mathmlBuilder2(group, options2) {
          var text = new mathMLTree.TextNode(makeVerb(group));
          var node = new mathMLTree.MathNode("mtext", [text]);
          node.setAttribute("mathvariant", "monospace");
          return node;
        }
      });
      var makeVerb = function makeVerb2(group) {
        return group.body.replace(/ /g, group.star ? "\u2423" : "\xA0");
      };
      ;
      var functions = _functions;
      var src_functions = functions;
      ;
      var SourceLocation = /* @__PURE__ */ function() {
        function SourceLocation2(lexer, start, end) {
          this.lexer = void 0;
          this.start = void 0;
          this.end = void 0;
          this.lexer = lexer;
          this.start = start;
          this.end = end;
        }
        SourceLocation2.range = function range(first, second) {
          if (!second) {
            return first && first.loc;
          } else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) {
            return null;
          } else {
            return new SourceLocation2(first.loc.lexer, first.loc.start, second.loc.end);
          }
        };
        return SourceLocation2;
      }();
      ;
      var Token = /* @__PURE__ */ function() {
        function Token2(text, loc) {
          this.text = void 0;
          this.loc = void 0;
          this.noexpand = void 0;
          this.treatAsRelax = void 0;
          this.text = text;
          this.loc = loc;
        }
        var _proto = Token2.prototype;
        _proto.range = function range(endToken, text) {
          return new Token2(text, SourceLocation.range(this, endToken));
        };
        return Token2;
      }();
      ;
      var spaceRegexString = "[ \r\n	]";
      var controlWordRegexString = "\\\\[a-zA-Z@]+";
      var controlSymbolRegexString = "\\\\[^\uD800-\uDFFF]";
      var controlWordWhitespaceRegexString = "" + controlWordRegexString + spaceRegexString + "*";
      var controlWordWhitespaceRegex = new RegExp("^(" + controlWordRegexString + ")" + spaceRegexString + "*$");
      var combiningDiacriticalMarkString = "[\u0300-\u036F]";
      var combiningDiacriticalMarksEndRegex = new RegExp(combiningDiacriticalMarkString + "+$");
      var tokenRegexString = "(" + spaceRegexString + "+)|([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (combiningDiacriticalMarkString + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (combiningDiacriticalMarkString + "*") + "|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*" + ("|" + controlWordWhitespaceRegexString) + ("|" + controlSymbolRegexString + ")");
      var Lexer = /* @__PURE__ */ function() {
        function Lexer2(input, settings) {
          this.input = void 0;
          this.settings = void 0;
          this.tokenRegex = void 0;
          this.catcodes = void 0;
          this.input = input;
          this.settings = settings;
          this.tokenRegex = new RegExp(tokenRegexString, "g");
          this.catcodes = {
            "%": 14,
            "~": 13
          };
        }
        var _proto = Lexer2.prototype;
        _proto.setCatcode = function setCatcode(char, code) {
          this.catcodes[char] = code;
        };
        _proto.lex = function lex() {
          var input = this.input;
          var pos = this.tokenRegex.lastIndex;
          if (pos === input.length) {
            return new Token("EOF", new SourceLocation(this, pos, pos));
          }
          var match = this.tokenRegex.exec(input);
          if (match === null || match.index !== pos) {
            throw new src_ParseError("Unexpected character: '" + input[pos] + "'", new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
          }
          var text = match[2] || " ";
          if (this.catcodes[text] === 14) {
            var nlIndex = input.indexOf("\n", this.tokenRegex.lastIndex);
            if (nlIndex === -1) {
              this.tokenRegex.lastIndex = input.length;
              this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)");
            } else {
              this.tokenRegex.lastIndex = nlIndex + 1;
            }
            return this.lex();
          }
          var controlMatch = text.match(controlWordWhitespaceRegex);
          if (controlMatch) {
            text = controlMatch[1];
          }
          return new Token(text, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
        };
        return Lexer2;
      }();
      ;
      var Namespace = /* @__PURE__ */ function() {
        function Namespace2(builtins, globalMacros) {
          if (builtins === void 0) {
            builtins = {};
          }
          if (globalMacros === void 0) {
            globalMacros = {};
          }
          this.current = void 0;
          this.builtins = void 0;
          this.undefStack = void 0;
          this.current = globalMacros;
          this.builtins = builtins;
          this.undefStack = [];
        }
        var _proto = Namespace2.prototype;
        _proto.beginGroup = function beginGroup() {
          this.undefStack.push({});
        };
        _proto.endGroup = function endGroup() {
          if (this.undefStack.length === 0) {
            throw new src_ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
          }
          var undefs = this.undefStack.pop();
          for (var undef in undefs) {
            if (undefs.hasOwnProperty(undef)) {
              if (undefs[undef] === void 0) {
                delete this.current[undef];
              } else {
                this.current[undef] = undefs[undef];
              }
            }
          }
        };
        _proto.has = function has(name) {
          return this.current.hasOwnProperty(name) || this.builtins.hasOwnProperty(name);
        };
        _proto.get = function get(name) {
          if (this.current.hasOwnProperty(name)) {
            return this.current[name];
          } else {
            return this.builtins[name];
          }
        };
        _proto.set = function set(name, value, global2) {
          if (global2 === void 0) {
            global2 = false;
          }
          if (global2) {
            for (var i2 = 0; i2 < this.undefStack.length; i2++) {
              delete this.undefStack[i2][name];
            }
            if (this.undefStack.length > 0) {
              this.undefStack[this.undefStack.length - 1][name] = value;
            }
          } else {
            var top = this.undefStack[this.undefStack.length - 1];
            if (top && !top.hasOwnProperty(name)) {
              top[name] = this.current[name];
            }
          }
          this.current[name] = value;
        };
        return Namespace2;
      }();
      ;
      var builtinMacros = {};
      var macros = builtinMacros;
      function defineMacro(name, body) {
        builtinMacros[name] = body;
      }
      defineMacro("\\noexpand", function(context) {
        var t = context.popToken();
        if (context.isExpandable(t.text)) {
          t.noexpand = true;
          t.treatAsRelax = true;
        }
        return {
          tokens: [t],
          numArgs: 0
        };
      });
      defineMacro("\\expandafter", function(context) {
        var t = context.popToken();
        context.expandOnce(true);
        return {
          tokens: [t],
          numArgs: 0
        };
      });
      defineMacro("\\@firstoftwo", function(context) {
        var args = context.consumeArgs(2);
        return {
          tokens: args[0],
          numArgs: 0
        };
      });
      defineMacro("\\@secondoftwo", function(context) {
        var args = context.consumeArgs(2);
        return {
          tokens: args[1],
          numArgs: 0
        };
      });
      defineMacro("\\@ifnextchar", function(context) {
        var args = context.consumeArgs(3);
        context.consumeSpaces();
        var nextToken = context.future();
        if (args[0].length === 1 && args[0][0].text === nextToken.text) {
          return {
            tokens: args[1],
            numArgs: 0
          };
        } else {
          return {
            tokens: args[2],
            numArgs: 0
          };
        }
      });
      defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
      defineMacro("\\TextOrMath", function(context) {
        var args = context.consumeArgs(2);
        if (context.mode === "text") {
          return {
            tokens: args[0],
            numArgs: 0
          };
        } else {
          return {
            tokens: args[1],
            numArgs: 0
          };
        }
      });
      var digitToNumber = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        a: 10,
        A: 10,
        b: 11,
        B: 11,
        c: 12,
        C: 12,
        d: 13,
        D: 13,
        e: 14,
        E: 14,
        f: 15,
        F: 15
      };
      defineMacro("\\char", function(context) {
        var token = context.popToken();
        var base;
        var number = "";
        if (token.text === "'") {
          base = 8;
          token = context.popToken();
        } else if (token.text === '"') {
          base = 16;
          token = context.popToken();
        } else if (token.text === "`") {
          token = context.popToken();
          if (token.text[0] === "\\") {
            number = token.text.charCodeAt(1);
          } else if (token.text === "EOF") {
            throw new src_ParseError("\\char` missing argument");
          } else {
            number = token.text.charCodeAt(0);
          }
        } else {
          base = 10;
        }
        if (base) {
          number = digitToNumber[token.text];
          if (number == null || number >= base) {
            throw new src_ParseError("Invalid base-" + base + " digit " + token.text);
          }
          var digit;
          while ((digit = digitToNumber[context.future().text]) != null && digit < base) {
            number *= base;
            number += digit;
            context.popToken();
          }
        }
        return "\\@char{" + number + "}";
      });
      var newcommand = function newcommand2(context, existsOK, nonexistsOK) {
        var arg = context.consumeArg().tokens;
        if (arg.length !== 1) {
          throw new src_ParseError("\\newcommand's first argument must be a macro name");
        }
        var name = arg[0].text;
        var exists = context.isDefined(name);
        if (exists && !existsOK) {
          throw new src_ParseError("\\newcommand{" + name + "} attempting to redefine " + (name + "; use \\renewcommand"));
        }
        if (!exists && !nonexistsOK) {
          throw new src_ParseError("\\renewcommand{" + name + "} when command " + name + " does not yet exist; use \\newcommand");
        }
        var numArgs = 0;
        arg = context.consumeArg().tokens;
        if (arg.length === 1 && arg[0].text === "[") {
          var argText = "";
          var token = context.expandNextToken();
          while (token.text !== "]" && token.text !== "EOF") {
            argText += token.text;
            token = context.expandNextToken();
          }
          if (!argText.match(/^\s*[0-9]+\s*$/)) {
            throw new src_ParseError("Invalid number of arguments: " + argText);
          }
          numArgs = parseInt(argText);
          arg = context.consumeArg().tokens;
        }
        context.macros.set(name, {
          tokens: arg,
          numArgs
        });
        return "";
      };
      defineMacro("\\newcommand", function(context) {
        return newcommand(context, false, true);
      });
      defineMacro("\\renewcommand", function(context) {
        return newcommand(context, true, false);
      });
      defineMacro("\\providecommand", function(context) {
        return newcommand(context, true, true);
      });
      defineMacro("\\message", function(context) {
        var arg = context.consumeArgs(1)[0];
        console.log(arg.reverse().map(function(token) {
          return token.text;
        }).join(""));
        return "";
      });
      defineMacro("\\errmessage", function(context) {
        var arg = context.consumeArgs(1)[0];
        console.error(arg.reverse().map(function(token) {
          return token.text;
        }).join(""));
        return "";
      });
      defineMacro("\\show", function(context) {
        var tok = context.popToken();
        var name = tok.text;
        console.log(tok, context.macros.get(name), src_functions[name], src_symbols.math[name], src_symbols.text[name]);
        return "";
      });
      defineMacro("\\bgroup", "{");
      defineMacro("\\egroup", "}");
      defineMacro("~", "\\nobreakspace");
      defineMacro("\\lq", "`");
      defineMacro("\\rq", "'");
      defineMacro("\\aa", "\\r a");
      defineMacro("\\AA", "\\r A");
      defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
      defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
      defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
      defineMacro("\u212C", "\\mathscr{B}");
      defineMacro("\u2130", "\\mathscr{E}");
      defineMacro("\u2131", "\\mathscr{F}");
      defineMacro("\u210B", "\\mathscr{H}");
      defineMacro("\u2110", "\\mathscr{I}");
      defineMacro("\u2112", "\\mathscr{L}");
      defineMacro("\u2133", "\\mathscr{M}");
      defineMacro("\u211B", "\\mathscr{R}");
      defineMacro("\u212D", "\\mathfrak{C}");
      defineMacro("\u210C", "\\mathfrak{H}");
      defineMacro("\u2128", "\\mathfrak{Z}");
      defineMacro("\\Bbbk", "\\Bbb{k}");
      defineMacro("\xB7", "\\cdotp");
      defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
      defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
      defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");
      defineMacro("\\mathstrut", "\\vphantom{(}");
      defineMacro("\\underbar", "\\underline{\\text{#1}}");
      defineMacro("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
      defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
      defineMacro("\\ne", "\\neq");
      defineMacro("\u2260", "\\neq");
      defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
      defineMacro("\u2209", "\\notin");
      defineMacro("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
      defineMacro("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
      defineMacro("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
      defineMacro("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
      defineMacro("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
      defineMacro("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
      defineMacro("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
      defineMacro("\u27C2", "\\perp");
      defineMacro("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
      defineMacro("\u220C", "\\notni");
      defineMacro("\u231C", "\\ulcorner");
      defineMacro("\u231D", "\\urcorner");
      defineMacro("\u231E", "\\llcorner");
      defineMacro("\u231F", "\\lrcorner");
      defineMacro("\xA9", "\\copyright");
      defineMacro("\xAE", "\\textregistered");
      defineMacro("\uFE0F", "\\textregistered");
      defineMacro("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
      defineMacro("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
      defineMacro("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
      defineMacro("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
      defineMacro("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
      defineMacro("\u22EE", "\\vdots");
      defineMacro("\\varGamma", "\\mathit{\\Gamma}");
      defineMacro("\\varDelta", "\\mathit{\\Delta}");
      defineMacro("\\varTheta", "\\mathit{\\Theta}");
      defineMacro("\\varLambda", "\\mathit{\\Lambda}");
      defineMacro("\\varXi", "\\mathit{\\Xi}");
      defineMacro("\\varPi", "\\mathit{\\Pi}");
      defineMacro("\\varSigma", "\\mathit{\\Sigma}");
      defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
      defineMacro("\\varPhi", "\\mathit{\\Phi}");
      defineMacro("\\varPsi", "\\mathit{\\Psi}");
      defineMacro("\\varOmega", "\\mathit{\\Omega}");
      defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
      defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu");
      defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
      defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
      defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
      defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
      var dotsByToken = {
        ",": "\\dotsc",
        "\\not": "\\dotsb",
        "+": "\\dotsb",
        "=": "\\dotsb",
        "<": "\\dotsb",
        ">": "\\dotsb",
        "-": "\\dotsb",
        "*": "\\dotsb",
        ":": "\\dotsb",
        "\\DOTSB": "\\dotsb",
        "\\coprod": "\\dotsb",
        "\\bigvee": "\\dotsb",
        "\\bigwedge": "\\dotsb",
        "\\biguplus": "\\dotsb",
        "\\bigcap": "\\dotsb",
        "\\bigcup": "\\dotsb",
        "\\prod": "\\dotsb",
        "\\sum": "\\dotsb",
        "\\bigotimes": "\\dotsb",
        "\\bigoplus": "\\dotsb",
        "\\bigodot": "\\dotsb",
        "\\bigsqcup": "\\dotsb",
        "\\And": "\\dotsb",
        "\\longrightarrow": "\\dotsb",
        "\\Longrightarrow": "\\dotsb",
        "\\longleftarrow": "\\dotsb",
        "\\Longleftarrow": "\\dotsb",
        "\\longleftrightarrow": "\\dotsb",
        "\\Longleftrightarrow": "\\dotsb",
        "\\mapsto": "\\dotsb",
        "\\longmapsto": "\\dotsb",
        "\\hookrightarrow": "\\dotsb",
        "\\doteq": "\\dotsb",
        "\\mathbin": "\\dotsb",
        "\\mathrel": "\\dotsb",
        "\\relbar": "\\dotsb",
        "\\Relbar": "\\dotsb",
        "\\xrightarrow": "\\dotsb",
        "\\xleftarrow": "\\dotsb",
        "\\DOTSI": "\\dotsi",
        "\\int": "\\dotsi",
        "\\oint": "\\dotsi",
        "\\iint": "\\dotsi",
        "\\iiint": "\\dotsi",
        "\\iiiint": "\\dotsi",
        "\\idotsint": "\\dotsi",
        "\\DOTSX": "\\dotsx"
      };
      defineMacro("\\dots", function(context) {
        var thedots = "\\dotso";
        var next = context.expandAfterFuture().text;
        if (next in dotsByToken) {
          thedots = dotsByToken[next];
        } else if (next.substr(0, 4) === "\\not") {
          thedots = "\\dotsb";
        } else if (next in src_symbols.math) {
          if (utils.contains(["bin", "rel"], src_symbols.math[next].group)) {
            thedots = "\\dotsb";
          }
        }
        return thedots;
      });
      var spaceAfterDots = {
        ")": true,
        "]": true,
        "\\rbrack": true,
        "\\}": true,
        "\\rbrace": true,
        "\\rangle": true,
        "\\rceil": true,
        "\\rfloor": true,
        "\\rgroup": true,
        "\\rmoustache": true,
        "\\right": true,
        "\\bigr": true,
        "\\biggr": true,
        "\\Bigr": true,
        "\\Biggr": true,
        $: true,
        ";": true,
        ".": true,
        ",": true
      };
      defineMacro("\\dotso", function(context) {
        var next = context.future().text;
        if (next in spaceAfterDots) {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      defineMacro("\\dotsc", function(context) {
        var next = context.future().text;
        if (next in spaceAfterDots && next !== ",") {
          return "\\ldots\\,";
        } else {
          return "\\ldots";
        }
      });
      defineMacro("\\cdots", function(context) {
        var next = context.future().text;
        if (next in spaceAfterDots) {
          return "\\@cdots\\,";
        } else {
          return "\\@cdots";
        }
      });
      defineMacro("\\dotsb", "\\cdots");
      defineMacro("\\dotsm", "\\cdots");
      defineMacro("\\dotsi", "\\!\\cdots");
      defineMacro("\\dotsx", "\\ldots\\,");
      defineMacro("\\DOTSI", "\\relax");
      defineMacro("\\DOTSB", "\\relax");
      defineMacro("\\DOTSX", "\\relax");
      defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
      defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
      defineMacro("\\thinspace", "\\,");
      defineMacro("\\>", "\\mskip{4mu}");
      defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
      defineMacro("\\medspace", "\\:");
      defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
      defineMacro("\\thickspace", "\\;");
      defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
      defineMacro("\\negthinspace", "\\!");
      defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
      defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
      defineMacro("\\enspace", "\\kern.5em ");
      defineMacro("\\enskip", "\\hskip.5em\\relax");
      defineMacro("\\quad", "\\hskip1em\\relax");
      defineMacro("\\qquad", "\\hskip2em\\relax");
      defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
      defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
      defineMacro("\\tag@literal", function(context) {
        if (context.macros.get("\\df@tag")) {
          throw new src_ParseError("Multiple \\tag");
        }
        return "\\gdef\\df@tag{\\text{#1}}";
      });
      defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
      defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
      defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
      defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
      defineMacro("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}");
      defineMacro("\\newline", "\\\\\\relax");
      defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
      var latexRaiseA = fontMetricsData["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * fontMetricsData["Main-Regular"]["A".charCodeAt(0)][1] + "em";
      defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
      defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
      defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
      defineMacro("\\@hspace", "\\hskip #1\\relax");
      defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
      defineMacro("\\ordinarycolon", ":");
      defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
      defineMacro("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
      defineMacro("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
      defineMacro("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
      defineMacro("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
      defineMacro("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
      defineMacro("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
      defineMacro("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
      defineMacro("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
      defineMacro("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
      defineMacro("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
      defineMacro("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
      defineMacro("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
      defineMacro("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
      defineMacro("\u2237", "\\dblcolon");
      defineMacro("\u2239", "\\eqcolon");
      defineMacro("\u2254", "\\coloneqq");
      defineMacro("\u2255", "\\eqqcolon");
      defineMacro("\u2A74", "\\Coloneqq");
      defineMacro("\\ratio", "\\vcentcolon");
      defineMacro("\\coloncolon", "\\dblcolon");
      defineMacro("\\colonequals", "\\coloneqq");
      defineMacro("\\coloncolonequals", "\\Coloneqq");
      defineMacro("\\equalscolon", "\\eqqcolon");
      defineMacro("\\equalscoloncolon", "\\Eqqcolon");
      defineMacro("\\colonminus", "\\coloneq");
      defineMacro("\\coloncolonminus", "\\Coloneq");
      defineMacro("\\minuscolon", "\\eqcolon");
      defineMacro("\\minuscoloncolon", "\\Eqcolon");
      defineMacro("\\coloncolonapprox", "\\Colonapprox");
      defineMacro("\\coloncolonsim", "\\Colonsim");
      defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
      defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
      defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
      defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
      defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
      defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
      defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
      defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
      defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
      defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
      defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
      defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
      defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
      defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
      defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
      defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
      defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
      defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
      defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
      defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
      defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
      defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
      defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
      defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
      defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
      defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
      defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
      defineMacro("\\imath", "\\html@mathml{\\@imath}{\u0131}");
      defineMacro("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
      defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
      defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
      defineMacro("\u27E6", "\\llbracket");
      defineMacro("\u27E7", "\\rrbracket");
      defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
      defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
      defineMacro("\u2983", "\\lBrace");
      defineMacro("\u2984", "\\rBrace");
      defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
      defineMacro("\u29B5", "\\minuso");
      defineMacro("\\darr", "\\downarrow");
      defineMacro("\\dArr", "\\Downarrow");
      defineMacro("\\Darr", "\\Downarrow");
      defineMacro("\\lang", "\\langle");
      defineMacro("\\rang", "\\rangle");
      defineMacro("\\uarr", "\\uparrow");
      defineMacro("\\uArr", "\\Uparrow");
      defineMacro("\\Uarr", "\\Uparrow");
      defineMacro("\\N", "\\mathbb{N}");
      defineMacro("\\R", "\\mathbb{R}");
      defineMacro("\\Z", "\\mathbb{Z}");
      defineMacro("\\alef", "\\aleph");
      defineMacro("\\alefsym", "\\aleph");
      defineMacro("\\Alpha", "\\mathrm{A}");
      defineMacro("\\Beta", "\\mathrm{B}");
      defineMacro("\\bull", "\\bullet");
      defineMacro("\\Chi", "\\mathrm{X}");
      defineMacro("\\clubs", "\\clubsuit");
      defineMacro("\\cnums", "\\mathbb{C}");
      defineMacro("\\Complex", "\\mathbb{C}");
      defineMacro("\\Dagger", "\\ddagger");
      defineMacro("\\diamonds", "\\diamondsuit");
      defineMacro("\\empty", "\\emptyset");
      defineMacro("\\Epsilon", "\\mathrm{E}");
      defineMacro("\\Eta", "\\mathrm{H}");
      defineMacro("\\exist", "\\exists");
      defineMacro("\\harr", "\\leftrightarrow");
      defineMacro("\\hArr", "\\Leftrightarrow");
      defineMacro("\\Harr", "\\Leftrightarrow");
      defineMacro("\\hearts", "\\heartsuit");
      defineMacro("\\image", "\\Im");
      defineMacro("\\infin", "\\infty");
      defineMacro("\\Iota", "\\mathrm{I}");
      defineMacro("\\isin", "\\in");
      defineMacro("\\Kappa", "\\mathrm{K}");
      defineMacro("\\larr", "\\leftarrow");
      defineMacro("\\lArr", "\\Leftarrow");
      defineMacro("\\Larr", "\\Leftarrow");
      defineMacro("\\lrarr", "\\leftrightarrow");
      defineMacro("\\lrArr", "\\Leftrightarrow");
      defineMacro("\\Lrarr", "\\Leftrightarrow");
      defineMacro("\\Mu", "\\mathrm{M}");
      defineMacro("\\natnums", "\\mathbb{N}");
      defineMacro("\\Nu", "\\mathrm{N}");
      defineMacro("\\Omicron", "\\mathrm{O}");
      defineMacro("\\plusmn", "\\pm");
      defineMacro("\\rarr", "\\rightarrow");
      defineMacro("\\rArr", "\\Rightarrow");
      defineMacro("\\Rarr", "\\Rightarrow");
      defineMacro("\\real", "\\Re");
      defineMacro("\\reals", "\\mathbb{R}");
      defineMacro("\\Reals", "\\mathbb{R}");
      defineMacro("\\Rho", "\\mathrm{P}");
      defineMacro("\\sdot", "\\cdot");
      defineMacro("\\sect", "\\S");
      defineMacro("\\spades", "\\spadesuit");
      defineMacro("\\sub", "\\subset");
      defineMacro("\\sube", "\\subseteq");
      defineMacro("\\supe", "\\supseteq");
      defineMacro("\\Tau", "\\mathrm{T}");
      defineMacro("\\thetasym", "\\vartheta");
      defineMacro("\\weierp", "\\wp");
      defineMacro("\\Zeta", "\\mathrm{Z}");
      defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
      defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
      defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
      defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
      defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
      defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
      defineMacro("\\Bra", "\\left\\langle#1\\right|");
      defineMacro("\\Ket", "\\left|#1\\right\\rangle");
      defineMacro("\\angln", "{\\angl n}");
      defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
      defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
      defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
      defineMacro("\\red", "\\textcolor{##df0030}{#1}");
      defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
      defineMacro("\\gray", "\\textcolor{gray}{#1}");
      defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
      defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
      defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
      defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
      defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
      defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
      defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
      defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
      defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
      defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
      defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
      defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
      defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
      defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
      defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
      defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
      defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
      defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
      defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
      defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
      defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
      defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
      defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
      defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
      defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
      defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
      defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
      defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
      defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
      defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
      defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
      defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
      defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
      defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
      defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
      defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
      defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
      defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
      defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
      defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
      defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
      defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
      defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
      defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
      defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
      defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
      defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
      defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
      defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
      defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
      ;
      var implicitCommands = {
        "\\relax": true,
        "^": true,
        _: true,
        "\\limits": true,
        "\\nolimits": true
      };
      var MacroExpander = /* @__PURE__ */ function() {
        function MacroExpander2(input, settings, mode) {
          this.settings = void 0;
          this.expansionCount = void 0;
          this.lexer = void 0;
          this.macros = void 0;
          this.stack = void 0;
          this.mode = void 0;
          this.settings = settings;
          this.expansionCount = 0;
          this.feed(input);
          this.macros = new Namespace(macros, settings.macros);
          this.mode = mode;
          this.stack = [];
        }
        var _proto = MacroExpander2.prototype;
        _proto.feed = function feed(input) {
          this.lexer = new Lexer(input, this.settings);
        };
        _proto.switchMode = function switchMode(newMode) {
          this.mode = newMode;
        };
        _proto.beginGroup = function beginGroup() {
          this.macros.beginGroup();
        };
        _proto.endGroup = function endGroup() {
          this.macros.endGroup();
        };
        _proto.future = function future() {
          if (this.stack.length === 0) {
            this.pushToken(this.lexer.lex());
          }
          return this.stack[this.stack.length - 1];
        };
        _proto.popToken = function popToken() {
          this.future();
          return this.stack.pop();
        };
        _proto.pushToken = function pushToken(token) {
          this.stack.push(token);
        };
        _proto.pushTokens = function pushTokens(tokens) {
          var _this$stack;
          (_this$stack = this.stack).push.apply(_this$stack, tokens);
        };
        _proto.scanArgument = function scanArgument(isOptional) {
          var start;
          var end;
          var tokens;
          if (isOptional) {
            this.consumeSpaces();
            if (this.future().text !== "[") {
              return null;
            }
            start = this.popToken();
            var _this$consumeArg = this.consumeArg(["]"]);
            tokens = _this$consumeArg.tokens;
            end = _this$consumeArg.end;
          } else {
            var _this$consumeArg2 = this.consumeArg();
            tokens = _this$consumeArg2.tokens;
            start = _this$consumeArg2.start;
            end = _this$consumeArg2.end;
          }
          this.pushToken(new Token("EOF", end.loc));
          this.pushTokens(tokens);
          return start.range(end, "");
        };
        _proto.consumeSpaces = function consumeSpaces() {
          for (; ; ) {
            var token = this.future();
            if (token.text === " ") {
              this.stack.pop();
            } else {
              break;
            }
          }
        };
        _proto.consumeArg = function consumeArg(delims) {
          var tokens = [];
          var isDelimited = delims && delims.length > 0;
          if (!isDelimited) {
            this.consumeSpaces();
          }
          var start = this.future();
          var tok;
          var depth = 0;
          var match = 0;
          do {
            tok = this.popToken();
            tokens.push(tok);
            if (tok.text === "{") {
              ++depth;
            } else if (tok.text === "}") {
              --depth;
              if (depth === -1) {
                throw new src_ParseError("Extra }", tok);
              }
            } else if (tok.text === "EOF") {
              throw new src_ParseError("Unexpected end of input in a macro argument, expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
            }
            if (delims && isDelimited) {
              if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
                ++match;
                if (match === delims.length) {
                  tokens.splice(-match, match);
                  break;
                }
              } else {
                match = 0;
              }
            }
          } while (depth !== 0 || isDelimited);
          if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
            tokens.pop();
            tokens.shift();
          }
          tokens.reverse();
          return {
            tokens,
            start,
            end: tok
          };
        };
        _proto.consumeArgs = function consumeArgs(numArgs, delimiters2) {
          if (delimiters2) {
            if (delimiters2.length !== numArgs + 1) {
              throw new src_ParseError("The length of delimiters doesn't match the number of args!");
            }
            var delims = delimiters2[0];
            for (var i2 = 0; i2 < delims.length; i2++) {
              var tok = this.popToken();
              if (delims[i2] !== tok.text) {
                throw new src_ParseError("Use of the macro doesn't match its definition", tok);
              }
            }
          }
          var args = [];
          for (var _i6 = 0; _i6 < numArgs; _i6++) {
            args.push(this.consumeArg(delimiters2 && delimiters2[_i6 + 1]).tokens);
          }
          return args;
        };
        _proto.expandOnce = function expandOnce(expandableOnly) {
          var topToken = this.popToken();
          var name = topToken.text;
          var expansion = !topToken.noexpand ? this._getExpansion(name) : null;
          if (expansion == null || expandableOnly && expansion.unexpandable) {
            if (expandableOnly && expansion == null && name[0] === "\\" && !this.isDefined(name)) {
              throw new src_ParseError("Undefined control sequence: " + name);
            }
            this.pushToken(topToken);
            return topToken;
          }
          this.expansionCount++;
          if (this.expansionCount > this.settings.maxExpand) {
            throw new src_ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
          }
          var tokens = expansion.tokens;
          var args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
          if (expansion.numArgs) {
            tokens = tokens.slice();
            for (var i2 = tokens.length - 1; i2 >= 0; --i2) {
              var tok = tokens[i2];
              if (tok.text === "#") {
                if (i2 === 0) {
                  throw new src_ParseError("Incomplete placeholder at end of macro body", tok);
                }
                tok = tokens[--i2];
                if (tok.text === "#") {
                  tokens.splice(i2 + 1, 1);
                } else if (/^[1-9]$/.test(tok.text)) {
                  var _tokens;
                  (_tokens = tokens).splice.apply(_tokens, [i2, 2].concat(args[+tok.text - 1]));
                } else {
                  throw new src_ParseError("Not a valid argument number", tok);
                }
              }
            }
          }
          this.pushTokens(tokens);
          return tokens;
        };
        _proto.expandAfterFuture = function expandAfterFuture() {
          this.expandOnce();
          return this.future();
        };
        _proto.expandNextToken = function expandNextToken() {
          for (; ; ) {
            var expanded = this.expandOnce();
            if (expanded instanceof Token) {
              if (expanded.text === "\\relax" || expanded.treatAsRelax) {
                this.stack.pop();
              } else {
                return this.stack.pop();
              }
            }
          }
          throw new Error();
        };
        _proto.expandMacro = function expandMacro(name) {
          return this.macros.has(name) ? this.expandTokens([new Token(name)]) : void 0;
        };
        _proto.expandTokens = function expandTokens(tokens) {
          var output = [];
          var oldStackLength = this.stack.length;
          this.pushTokens(tokens);
          while (this.stack.length > oldStackLength) {
            var expanded = this.expandOnce(true);
            if (expanded instanceof Token) {
              if (expanded.treatAsRelax) {
                expanded.noexpand = false;
                expanded.treatAsRelax = false;
              }
              output.push(this.stack.pop());
            }
          }
          return output;
        };
        _proto.expandMacroAsText = function expandMacroAsText(name) {
          var tokens = this.expandMacro(name);
          if (tokens) {
            return tokens.map(function(token) {
              return token.text;
            }).join("");
          } else {
            return tokens;
          }
        };
        _proto._getExpansion = function _getExpansion(name) {
          var definition = this.macros.get(name);
          if (definition == null) {
            return definition;
          }
          if (name.length === 1) {
            var catcode = this.lexer.catcodes[name];
            if (catcode != null && catcode !== 13) {
              return;
            }
          }
          var expansion = typeof definition === "function" ? definition(this) : definition;
          if (typeof expansion === "string") {
            var numArgs = 0;
            if (expansion.indexOf("#") !== -1) {
              var stripped = expansion.replace(/##/g, "");
              while (stripped.indexOf("#" + (numArgs + 1)) !== -1) {
                ++numArgs;
              }
            }
            var bodyLexer = new Lexer(expansion, this.settings);
            var tokens = [];
            var tok = bodyLexer.lex();
            while (tok.text !== "EOF") {
              tokens.push(tok);
              tok = bodyLexer.lex();
            }
            tokens.reverse();
            var expanded = {
              tokens,
              numArgs
            };
            return expanded;
          }
          return expansion;
        };
        _proto.isDefined = function isDefined(name) {
          return this.macros.has(name) || src_functions.hasOwnProperty(name) || src_symbols.math.hasOwnProperty(name) || src_symbols.text.hasOwnProperty(name) || implicitCommands.hasOwnProperty(name);
        };
        _proto.isExpandable = function isExpandable(name) {
          var macro = this.macros.get(name);
          return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : src_functions.hasOwnProperty(name) && !src_functions[name].primitive;
        };
        return MacroExpander2;
      }();
      ;
      var unicodeAccents = {
        "\u0301": {
          text: "\\'",
          math: "\\acute"
        },
        "\u0300": {
          text: "\\`",
          math: "\\grave"
        },
        "\u0308": {
          text: '\\"',
          math: "\\ddot"
        },
        "\u0303": {
          text: "\\~",
          math: "\\tilde"
        },
        "\u0304": {
          text: "\\=",
          math: "\\bar"
        },
        "\u0306": {
          text: "\\u",
          math: "\\breve"
        },
        "\u030C": {
          text: "\\v",
          math: "\\check"
        },
        "\u0302": {
          text: "\\^",
          math: "\\hat"
        },
        "\u0307": {
          text: "\\.",
          math: "\\dot"
        },
        "\u030A": {
          text: "\\r",
          math: "\\mathring"
        },
        "\u030B": {
          text: "\\H"
        }
      };
      var unicodeSymbols = {
        \u00E1: "a\u0301",
        \u00E0: "a\u0300",
        \u00E4: "a\u0308",
        \u01DF: "a\u0308\u0304",
        \u00E3: "a\u0303",
        \u0101: "a\u0304",
        \u0103: "a\u0306",
        \u1EAF: "a\u0306\u0301",
        \u1EB1: "a\u0306\u0300",
        \u1EB5: "a\u0306\u0303",
        \u01CE: "a\u030C",
        \u00E2: "a\u0302",
        \u1EA5: "a\u0302\u0301",
        \u1EA7: "a\u0302\u0300",
        \u1EAB: "a\u0302\u0303",
        \u0227: "a\u0307",
        \u01E1: "a\u0307\u0304",
        \u00E5: "a\u030A",
        \u01FB: "a\u030A\u0301",
        \u1E03: "b\u0307",
        \u0107: "c\u0301",
        \u010D: "c\u030C",
        \u0109: "c\u0302",
        \u010B: "c\u0307",
        \u010F: "d\u030C",
        \u1E0B: "d\u0307",
        \u00E9: "e\u0301",
        \u00E8: "e\u0300",
        \u00EB: "e\u0308",
        \u1EBD: "e\u0303",
        \u0113: "e\u0304",
        \u1E17: "e\u0304\u0301",
        \u1E15: "e\u0304\u0300",
        \u0115: "e\u0306",
        \u011B: "e\u030C",
        \u00EA: "e\u0302",
        \u1EBF: "e\u0302\u0301",
        \u1EC1: "e\u0302\u0300",
        \u1EC5: "e\u0302\u0303",
        \u0117: "e\u0307",
        \u1E1F: "f\u0307",
        \u01F5: "g\u0301",
        \u1E21: "g\u0304",
        \u011F: "g\u0306",
        \u01E7: "g\u030C",
        \u011D: "g\u0302",
        \u0121: "g\u0307",
        \u1E27: "h\u0308",
        \u021F: "h\u030C",
        \u0125: "h\u0302",
        \u1E23: "h\u0307",
        \u00ED: "i\u0301",
        \u00EC: "i\u0300",
        \u00EF: "i\u0308",
        \u1E2F: "i\u0308\u0301",
        \u0129: "i\u0303",
        \u012B: "i\u0304",
        \u012D: "i\u0306",
        \u01D0: "i\u030C",
        \u00EE: "i\u0302",
        \u01F0: "j\u030C",
        \u0135: "j\u0302",
        \u1E31: "k\u0301",
        \u01E9: "k\u030C",
        \u013A: "l\u0301",
        \u013E: "l\u030C",
        \u1E3F: "m\u0301",
        \u1E41: "m\u0307",
        \u0144: "n\u0301",
        \u01F9: "n\u0300",
        \u00F1: "n\u0303",
        \u0148: "n\u030C",
        \u1E45: "n\u0307",
        \u00F3: "o\u0301",
        \u00F2: "o\u0300",
        \u00F6: "o\u0308",
        \u022B: "o\u0308\u0304",
        \u00F5: "o\u0303",
        \u1E4D: "o\u0303\u0301",
        \u1E4F: "o\u0303\u0308",
        \u022D: "o\u0303\u0304",
        \u014D: "o\u0304",
        \u1E53: "o\u0304\u0301",
        \u1E51: "o\u0304\u0300",
        \u014F: "o\u0306",
        \u01D2: "o\u030C",
        \u00F4: "o\u0302",
        \u1ED1: "o\u0302\u0301",
        \u1ED3: "o\u0302\u0300",
        \u1ED7: "o\u0302\u0303",
        \u022F: "o\u0307",
        \u0231: "o\u0307\u0304",
        \u0151: "o\u030B",
        \u1E55: "p\u0301",
        \u1E57: "p\u0307",
        \u0155: "r\u0301",
        \u0159: "r\u030C",
        \u1E59: "r\u0307",
        \u015B: "s\u0301",
        \u1E65: "s\u0301\u0307",
        \u0161: "s\u030C",
        \u1E67: "s\u030C\u0307",
        \u015D: "s\u0302",
        \u1E61: "s\u0307",
        \u1E97: "t\u0308",
        \u0165: "t\u030C",
        \u1E6B: "t\u0307",
        \u00FA: "u\u0301",
        \u00F9: "u\u0300",
        \u00FC: "u\u0308",
        \u01D8: "u\u0308\u0301",
        \u01DC: "u\u0308\u0300",
        \u01D6: "u\u0308\u0304",
        \u01DA: "u\u0308\u030C",
        \u0169: "u\u0303",
        \u1E79: "u\u0303\u0301",
        \u016B: "u\u0304",
        \u1E7B: "u\u0304\u0308",
        \u016D: "u\u0306",
        \u01D4: "u\u030C",
        \u00FB: "u\u0302",
        \u016F: "u\u030A",
        \u0171: "u\u030B",
        \u1E7D: "v\u0303",
        \u1E83: "w\u0301",
        \u1E81: "w\u0300",
        \u1E85: "w\u0308",
        \u0175: "w\u0302",
        \u1E87: "w\u0307",
        \u1E98: "w\u030A",
        \u1E8D: "x\u0308",
        \u1E8B: "x\u0307",
        \u00FD: "y\u0301",
        \u1EF3: "y\u0300",
        \u00FF: "y\u0308",
        \u1EF9: "y\u0303",
        \u0233: "y\u0304",
        \u0177: "y\u0302",
        \u1E8F: "y\u0307",
        \u1E99: "y\u030A",
        \u017A: "z\u0301",
        \u017E: "z\u030C",
        \u1E91: "z\u0302",
        \u017C: "z\u0307",
        \u00C1: "A\u0301",
        \u00C0: "A\u0300",
        \u00C4: "A\u0308",
        \u01DE: "A\u0308\u0304",
        \u00C3: "A\u0303",
        \u0100: "A\u0304",
        \u0102: "A\u0306",
        \u1EAE: "A\u0306\u0301",
        \u1EB0: "A\u0306\u0300",
        \u1EB4: "A\u0306\u0303",
        \u01CD: "A\u030C",
        \u00C2: "A\u0302",
        \u1EA4: "A\u0302\u0301",
        \u1EA6: "A\u0302\u0300",
        \u1EAA: "A\u0302\u0303",
        \u0226: "A\u0307",
        \u01E0: "A\u0307\u0304",
        \u00C5: "A\u030A",
        \u01FA: "A\u030A\u0301",
        \u1E02: "B\u0307",
        \u0106: "C\u0301",
        \u010C: "C\u030C",
        \u0108: "C\u0302",
        \u010A: "C\u0307",
        \u010E: "D\u030C",
        \u1E0A: "D\u0307",
        \u00C9: "E\u0301",
        \u00C8: "E\u0300",
        \u00CB: "E\u0308",
        \u1EBC: "E\u0303",
        \u0112: "E\u0304",
        \u1E16: "E\u0304\u0301",
        \u1E14: "E\u0304\u0300",
        \u0114: "E\u0306",
        \u011A: "E\u030C",
        \u00CA: "E\u0302",
        \u1EBE: "E\u0302\u0301",
        \u1EC0: "E\u0302\u0300",
        \u1EC4: "E\u0302\u0303",
        \u0116: "E\u0307",
        \u1E1E: "F\u0307",
        \u01F4: "G\u0301",
        \u1E20: "G\u0304",
        \u011E: "G\u0306",
        \u01E6: "G\u030C",
        \u011C: "G\u0302",
        \u0120: "G\u0307",
        \u1E26: "H\u0308",
        \u021E: "H\u030C",
        \u0124: "H\u0302",
        \u1E22: "H\u0307",
        \u00CD: "I\u0301",
        \u00CC: "I\u0300",
        \u00CF: "I\u0308",
        \u1E2E: "I\u0308\u0301",
        \u0128: "I\u0303",
        \u012A: "I\u0304",
        \u012C: "I\u0306",
        \u01CF: "I\u030C",
        \u00CE: "I\u0302",
        \u0130: "I\u0307",
        \u0134: "J\u0302",
        \u1E30: "K\u0301",
        \u01E8: "K\u030C",
        \u0139: "L\u0301",
        \u013D: "L\u030C",
        \u1E3E: "M\u0301",
        \u1E40: "M\u0307",
        \u0143: "N\u0301",
        \u01F8: "N\u0300",
        \u00D1: "N\u0303",
        \u0147: "N\u030C",
        \u1E44: "N\u0307",
        \u00D3: "O\u0301",
        \u00D2: "O\u0300",
        \u00D6: "O\u0308",
        \u022A: "O\u0308\u0304",
        \u00D5: "O\u0303",
        \u1E4C: "O\u0303\u0301",
        \u1E4E: "O\u0303\u0308",
        \u022C: "O\u0303\u0304",
        \u014C: "O\u0304",
        \u1E52: "O\u0304\u0301",
        \u1E50: "O\u0304\u0300",
        \u014E: "O\u0306",
        \u01D1: "O\u030C",
        \u00D4: "O\u0302",
        \u1ED0: "O\u0302\u0301",
        \u1ED2: "O\u0302\u0300",
        \u1ED6: "O\u0302\u0303",
        \u022E: "O\u0307",
        \u0230: "O\u0307\u0304",
        \u0150: "O\u030B",
        \u1E54: "P\u0301",
        \u1E56: "P\u0307",
        \u0154: "R\u0301",
        \u0158: "R\u030C",
        \u1E58: "R\u0307",
        \u015A: "S\u0301",
        \u1E64: "S\u0301\u0307",
        \u0160: "S\u030C",
        \u1E66: "S\u030C\u0307",
        \u015C: "S\u0302",
        \u1E60: "S\u0307",
        \u0164: "T\u030C",
        \u1E6A: "T\u0307",
        \u00DA: "U\u0301",
        \u00D9: "U\u0300",
        \u00DC: "U\u0308",
        \u01D7: "U\u0308\u0301",
        \u01DB: "U\u0308\u0300",
        \u01D5: "U\u0308\u0304",
        \u01D9: "U\u0308\u030C",
        \u0168: "U\u0303",
        \u1E78: "U\u0303\u0301",
        \u016A: "U\u0304",
        \u1E7A: "U\u0304\u0308",
        \u016C: "U\u0306",
        \u01D3: "U\u030C",
        \u00DB: "U\u0302",
        \u016E: "U\u030A",
        \u0170: "U\u030B",
        \u1E7C: "V\u0303",
        \u1E82: "W\u0301",
        \u1E80: "W\u0300",
        \u1E84: "W\u0308",
        \u0174: "W\u0302",
        \u1E86: "W\u0307",
        \u1E8C: "X\u0308",
        \u1E8A: "X\u0307",
        \u00DD: "Y\u0301",
        \u1EF2: "Y\u0300",
        \u0178: "Y\u0308",
        \u1EF8: "Y\u0303",
        \u0232: "Y\u0304",
        \u0176: "Y\u0302",
        \u1E8E: "Y\u0307",
        \u0179: "Z\u0301",
        \u017D: "Z\u030C",
        \u1E90: "Z\u0302",
        \u017B: "Z\u0307",
        \u03AC: "\u03B1\u0301",
        \u1F70: "\u03B1\u0300",
        \u1FB1: "\u03B1\u0304",
        \u1FB0: "\u03B1\u0306",
        \u03AD: "\u03B5\u0301",
        \u1F72: "\u03B5\u0300",
        \u03AE: "\u03B7\u0301",
        \u1F74: "\u03B7\u0300",
        \u03AF: "\u03B9\u0301",
        \u1F76: "\u03B9\u0300",
        \u03CA: "\u03B9\u0308",
        \u0390: "\u03B9\u0308\u0301",
        \u1FD2: "\u03B9\u0308\u0300",
        \u1FD1: "\u03B9\u0304",
        \u1FD0: "\u03B9\u0306",
        \u03CC: "\u03BF\u0301",
        \u1F78: "\u03BF\u0300",
        \u03CD: "\u03C5\u0301",
        \u1F7A: "\u03C5\u0300",
        \u03CB: "\u03C5\u0308",
        \u03B0: "\u03C5\u0308\u0301",
        \u1FE2: "\u03C5\u0308\u0300",
        \u1FE1: "\u03C5\u0304",
        \u1FE0: "\u03C5\u0306",
        \u03CE: "\u03C9\u0301",
        \u1F7C: "\u03C9\u0300",
        \u038E: "\u03A5\u0301",
        \u1FEA: "\u03A5\u0300",
        \u03AB: "\u03A5\u0308",
        \u1FE9: "\u03A5\u0304",
        \u1FE8: "\u03A5\u0306",
        \u038F: "\u03A9\u0301",
        \u1FFA: "\u03A9\u0300"
      };
      var Parser = /* @__PURE__ */ function() {
        function Parser2(input, settings) {
          this.mode = void 0;
          this.gullet = void 0;
          this.settings = void 0;
          this.leftrightDepth = void 0;
          this.nextToken = void 0;
          this.mode = "math";
          this.gullet = new MacroExpander(input, settings, this.mode);
          this.settings = settings;
          this.leftrightDepth = 0;
        }
        var _proto = Parser2.prototype;
        _proto.expect = function expect(text, consume) {
          if (consume === void 0) {
            consume = true;
          }
          if (this.fetch().text !== text) {
            throw new src_ParseError("Expected '" + text + "', got '" + this.fetch().text + "'", this.fetch());
          }
          if (consume) {
            this.consume();
          }
        };
        _proto.consume = function consume() {
          this.nextToken = null;
        };
        _proto.fetch = function fetch3() {
          if (this.nextToken == null) {
            this.nextToken = this.gullet.expandNextToken();
          }
          return this.nextToken;
        };
        _proto.switchMode = function switchMode(newMode) {
          this.mode = newMode;
          this.gullet.switchMode(newMode);
        };
        _proto.parse = function parse() {
          if (!this.settings.globalGroup) {
            this.gullet.beginGroup();
          }
          if (this.settings.colorIsTextColor) {
            this.gullet.macros.set("\\color", "\\textcolor");
          }
          var parse2 = this.parseExpression(false);
          this.expect("EOF");
          if (!this.settings.globalGroup) {
            this.gullet.endGroup();
          }
          return parse2;
        };
        _proto.parseExpression = function parseExpression(breakOnInfix, breakOnTokenText) {
          var body = [];
          while (true) {
            if (this.mode === "math") {
              this.consumeSpaces();
            }
            var lex = this.fetch();
            if (Parser2.endOfExpression.indexOf(lex.text) !== -1) {
              break;
            }
            if (breakOnTokenText && lex.text === breakOnTokenText) {
              break;
            }
            if (breakOnInfix && src_functions[lex.text] && src_functions[lex.text].infix) {
              break;
            }
            var atom = this.parseAtom(breakOnTokenText);
            if (!atom) {
              break;
            } else if (atom.type === "internal") {
              continue;
            }
            body.push(atom);
          }
          if (this.mode === "text") {
            this.formLigatures(body);
          }
          return this.handleInfixNodes(body);
        };
        _proto.handleInfixNodes = function handleInfixNodes(body) {
          var overIndex = -1;
          var funcName;
          for (var i2 = 0; i2 < body.length; i2++) {
            if (body[i2].type === "infix") {
              if (overIndex !== -1) {
                throw new src_ParseError("only one infix operator per group", body[i2].token);
              }
              overIndex = i2;
              funcName = body[i2].replaceWith;
            }
          }
          if (overIndex !== -1 && funcName) {
            var numerNode;
            var denomNode;
            var numerBody = body.slice(0, overIndex);
            var denomBody = body.slice(overIndex + 1);
            if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
              numerNode = numerBody[0];
            } else {
              numerNode = {
                type: "ordgroup",
                mode: this.mode,
                body: numerBody
              };
            }
            if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
              denomNode = denomBody[0];
            } else {
              denomNode = {
                type: "ordgroup",
                mode: this.mode,
                body: denomBody
              };
            }
            var node;
            if (funcName === "\\\\abovefrac") {
              node = this.callFunction(funcName, [numerNode, body[overIndex], denomNode], []);
            } else {
              node = this.callFunction(funcName, [numerNode, denomNode], []);
            }
            return [node];
          } else {
            return body;
          }
        };
        _proto.handleSupSubscript = function handleSupSubscript(name) {
          var symbolToken = this.fetch();
          var symbol = symbolToken.text;
          this.consume();
          this.consumeSpaces();
          var group = this.parseGroup(name);
          if (!group) {
            throw new src_ParseError("Expected group after '" + symbol + "'", symbolToken);
          }
          return group;
        };
        _proto.formatUnsupportedCmd = function formatUnsupportedCmd(text) {
          var textordArray = [];
          for (var i2 = 0; i2 < text.length; i2++) {
            textordArray.push({
              type: "textord",
              mode: "text",
              text: text[i2]
            });
          }
          var textNode = {
            type: "text",
            mode: this.mode,
            body: textordArray
          };
          var colorNode = {
            type: "color",
            mode: this.mode,
            color: this.settings.errorColor,
            body: [textNode]
          };
          return colorNode;
        };
        _proto.parseAtom = function parseAtom(breakOnTokenText) {
          var base = this.parseGroup("atom", breakOnTokenText);
          if (this.mode === "text") {
            return base;
          }
          var superscript;
          var subscript;
          while (true) {
            this.consumeSpaces();
            var lex = this.fetch();
            if (lex.text === "\\limits" || lex.text === "\\nolimits") {
              if (base && base.type === "op") {
                var limits = lex.text === "\\limits";
                base.limits = limits;
                base.alwaysHandleSupSub = true;
              } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub) {
                var _limits = lex.text === "\\limits";
                base.limits = _limits;
              } else {
                throw new src_ParseError("Limit controls must follow a math operator", lex);
              }
              this.consume();
            } else if (lex.text === "^") {
              if (superscript) {
                throw new src_ParseError("Double superscript", lex);
              }
              superscript = this.handleSupSubscript("superscript");
            } else if (lex.text === "_") {
              if (subscript) {
                throw new src_ParseError("Double subscript", lex);
              }
              subscript = this.handleSupSubscript("subscript");
            } else if (lex.text === "'") {
              if (superscript) {
                throw new src_ParseError("Double superscript", lex);
              }
              var prime = {
                type: "textord",
                mode: this.mode,
                text: "\\prime"
              };
              var primes = [prime];
              this.consume();
              while (this.fetch().text === "'") {
                primes.push(prime);
                this.consume();
              }
              if (this.fetch().text === "^") {
                primes.push(this.handleSupSubscript("superscript"));
              }
              superscript = {
                type: "ordgroup",
                mode: this.mode,
                body: primes
              };
            } else {
              break;
            }
          }
          if (superscript || subscript) {
            return {
              type: "supsub",
              mode: this.mode,
              base,
              sup: superscript,
              sub: subscript
            };
          } else {
            return base;
          }
        };
        _proto.parseFunction = function parseFunction(breakOnTokenText, name) {
          var token = this.fetch();
          var func = token.text;
          var funcData = src_functions[func];
          if (!funcData) {
            return null;
          }
          this.consume();
          if (name && name !== "atom" && !funcData.allowedInArgument) {
            throw new src_ParseError("Got function '" + func + "' with no arguments" + (name ? " as " + name : ""), token);
          } else if (this.mode === "text" && !funcData.allowedInText) {
            throw new src_ParseError("Can't use function '" + func + "' in text mode", token);
          } else if (this.mode === "math" && funcData.allowedInMath === false) {
            throw new src_ParseError("Can't use function '" + func + "' in math mode", token);
          }
          var _this$parseArguments = this.parseArguments(func, funcData), args = _this$parseArguments.args, optArgs = _this$parseArguments.optArgs;
          return this.callFunction(func, args, optArgs, token, breakOnTokenText);
        };
        _proto.callFunction = function callFunction(name, args, optArgs, token, breakOnTokenText) {
          var context = {
            funcName: name,
            parser: this,
            token,
            breakOnTokenText
          };
          var func = src_functions[name];
          if (func && func.handler) {
            return func.handler(context, args, optArgs);
          } else {
            throw new src_ParseError("No function handler for " + name);
          }
        };
        _proto.parseArguments = function parseArguments(func, funcData) {
          var totalArgs = funcData.numArgs + funcData.numOptionalArgs;
          if (totalArgs === 0) {
            return {
              args: [],
              optArgs: []
            };
          }
          var args = [];
          var optArgs = [];
          for (var i2 = 0; i2 < totalArgs; i2++) {
            var argType = funcData.argTypes && funcData.argTypes[i2];
            var isOptional = i2 < funcData.numOptionalArgs;
            if (funcData.primitive && argType == null || funcData.type === "sqrt" && i2 === 1 && optArgs[0] == null) {
              argType = "primitive";
            }
            var arg = this.parseGroupOfType("argument to '" + func + "'", argType, isOptional);
            if (isOptional) {
              optArgs.push(arg);
            } else if (arg != null) {
              args.push(arg);
            } else {
              throw new src_ParseError("Null argument, please report this as a bug");
            }
          }
          return {
            args,
            optArgs
          };
        };
        _proto.parseGroupOfType = function parseGroupOfType(name, type, optional) {
          switch (type) {
            case "color":
              return this.parseColorGroup(optional);
            case "size":
              return this.parseSizeGroup(optional);
            case "url":
              return this.parseUrlGroup(optional);
            case "math":
            case "text":
              return this.parseArgumentGroup(optional, type);
            case "hbox": {
              var group = this.parseArgumentGroup(optional, "text");
              return group != null ? {
                type: "styling",
                mode: group.mode,
                body: [group],
                style: "text"
              } : null;
            }
            case "raw": {
              var token = this.parseStringGroup("raw", optional);
              return token != null ? {
                type: "raw",
                mode: "text",
                string: token.text
              } : null;
            }
            case "primitive": {
              if (optional) {
                throw new src_ParseError("A primitive argument cannot be optional");
              }
              var _group = this.parseGroup(name);
              if (_group == null) {
                throw new src_ParseError("Expected group as " + name, this.fetch());
              }
              return _group;
            }
            case "original":
            case null:
            case void 0:
              return this.parseArgumentGroup(optional);
            default:
              throw new src_ParseError("Unknown group type as " + name, this.fetch());
          }
        };
        _proto.consumeSpaces = function consumeSpaces() {
          while (this.fetch().text === " ") {
            this.consume();
          }
        };
        _proto.parseStringGroup = function parseStringGroup(modeName, optional) {
          var argToken = this.gullet.scanArgument(optional);
          if (argToken == null) {
            return null;
          }
          var str = "";
          var nextToken;
          while ((nextToken = this.fetch()).text !== "EOF") {
            str += nextToken.text;
            this.consume();
          }
          this.consume();
          argToken.text = str;
          return argToken;
        };
        _proto.parseRegexGroup = function parseRegexGroup(regex, modeName) {
          var firstToken = this.fetch();
          var lastToken = firstToken;
          var str = "";
          var nextToken;
          while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
            lastToken = nextToken;
            str += lastToken.text;
            this.consume();
          }
          if (str === "") {
            throw new src_ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
          }
          return firstToken.range(lastToken, str);
        };
        _proto.parseColorGroup = function parseColorGroup(optional) {
          var res = this.parseStringGroup("color", optional);
          if (res == null) {
            return null;
          }
          var match = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);
          if (!match) {
            throw new src_ParseError("Invalid color: '" + res.text + "'", res);
          }
          var color = match[0];
          if (/^[0-9a-f]{6}$/i.test(color)) {
            color = "#" + color;
          }
          return {
            type: "color-token",
            mode: this.mode,
            color
          };
        };
        _proto.parseSizeGroup = function parseSizeGroup(optional) {
          var res;
          var isBlank = false;
          this.gullet.consumeSpaces();
          if (!optional && this.gullet.future().text !== "{") {
            res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
          } else {
            res = this.parseStringGroup("size", optional);
          }
          if (!res) {
            return null;
          }
          if (!optional && res.text.length === 0) {
            res.text = "0pt";
            isBlank = true;
          }
          var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);
          if (!match) {
            throw new src_ParseError("Invalid size: '" + res.text + "'", res);
          }
          var data = {
            number: +(match[1] + match[2]),
            unit: match[3]
          };
          if (!validUnit(data)) {
            throw new src_ParseError("Invalid unit: '" + data.unit + "'", res);
          }
          return {
            type: "size",
            mode: this.mode,
            value: data,
            isBlank
          };
        };
        _proto.parseUrlGroup = function parseUrlGroup(optional) {
          this.gullet.lexer.setCatcode("%", 13);
          this.gullet.lexer.setCatcode("~", 12);
          var res = this.parseStringGroup("url", optional);
          this.gullet.lexer.setCatcode("%", 14);
          this.gullet.lexer.setCatcode("~", 13);
          if (res == null) {
            return null;
          }
          var url = res.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return {
            type: "url",
            mode: this.mode,
            url
          };
        };
        _proto.parseArgumentGroup = function parseArgumentGroup(optional, mode) {
          var argToken = this.gullet.scanArgument(optional);
          if (argToken == null) {
            return null;
          }
          var outerMode = this.mode;
          if (mode) {
            this.switchMode(mode);
          }
          this.gullet.beginGroup();
          var expression = this.parseExpression(false, "EOF");
          this.expect("EOF");
          this.gullet.endGroup();
          var result = {
            type: "ordgroup",
            mode: this.mode,
            loc: argToken.loc,
            body: expression
          };
          if (mode) {
            this.switchMode(outerMode);
          }
          return result;
        };
        _proto.parseGroup = function parseGroup(name, breakOnTokenText) {
          var firstToken = this.fetch();
          var text = firstToken.text;
          var result;
          if (text === "{" || text === "\\begingroup") {
            this.consume();
            var groupEnd = text === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var expression = this.parseExpression(false, groupEnd);
            var lastToken = this.fetch();
            this.expect(groupEnd);
            this.gullet.endGroup();
            result = {
              type: "ordgroup",
              mode: this.mode,
              loc: SourceLocation.range(firstToken, lastToken),
              body: expression,
              semisimple: text === "\\begingroup" || void 0
            };
          } else {
            result = this.parseFunction(breakOnTokenText, name) || this.parseSymbol();
            if (result == null && text[0] === "\\" && !implicitCommands.hasOwnProperty(text)) {
              if (this.settings.throwOnError) {
                throw new src_ParseError("Undefined control sequence: " + text, firstToken);
              }
              result = this.formatUnsupportedCmd(text);
              this.consume();
            }
          }
          return result;
        };
        _proto.formLigatures = function formLigatures(group) {
          var n = group.length - 1;
          for (var i2 = 0; i2 < n; ++i2) {
            var a = group[i2];
            var v = a.text;
            if (v === "-" && group[i2 + 1].text === "-") {
              if (i2 + 1 < n && group[i2 + 2].text === "-") {
                group.splice(i2, 3, {
                  type: "textord",
                  mode: "text",
                  loc: SourceLocation.range(a, group[i2 + 2]),
                  text: "---"
                });
                n -= 2;
              } else {
                group.splice(i2, 2, {
                  type: "textord",
                  mode: "text",
                  loc: SourceLocation.range(a, group[i2 + 1]),
                  text: "--"
                });
                n -= 1;
              }
            }
            if ((v === "'" || v === "`") && group[i2 + 1].text === v) {
              group.splice(i2, 2, {
                type: "textord",
                mode: "text",
                loc: SourceLocation.range(a, group[i2 + 1]),
                text: v + v
              });
              n -= 1;
            }
          }
        };
        _proto.parseSymbol = function parseSymbol() {
          var nucleus = this.fetch();
          var text = nucleus.text;
          if (/^\\verb[^a-zA-Z]/.test(text)) {
            this.consume();
            var arg = text.slice(5);
            var star = arg.charAt(0) === "*";
            if (star) {
              arg = arg.slice(1);
            }
            if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) {
              throw new src_ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
            }
            arg = arg.slice(1, -1);
            return {
              type: "verb",
              mode: "text",
              body: arg,
              star
            };
          }
          if (unicodeSymbols.hasOwnProperty(text[0]) && !src_symbols[this.mode][text[0]]) {
            if (this.settings.strict && this.mode === "math") {
              this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + text[0] + '" used in math mode', nucleus);
            }
            text = unicodeSymbols[text[0]] + text.substr(1);
          }
          var match = combiningDiacriticalMarksEndRegex.exec(text);
          if (match) {
            text = text.substring(0, match.index);
            if (text === "i") {
              text = "\u0131";
            } else if (text === "j") {
              text = "\u0237";
            }
          }
          var symbol;
          if (src_symbols[this.mode][text]) {
            if (this.settings.strict && this.mode === "math" && extraLatin.indexOf(text) >= 0) {
              this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + text[0] + '" used in math mode', nucleus);
            }
            var group = src_symbols[this.mode][text].group;
            var loc = SourceLocation.range(nucleus);
            var s2;
            if (ATOMS.hasOwnProperty(group)) {
              var family = group;
              s2 = {
                type: "atom",
                mode: this.mode,
                family,
                loc,
                text
              };
            } else {
              s2 = {
                type: group,
                mode: this.mode,
                loc,
                text
              };
            }
            symbol = s2;
          } else if (text.charCodeAt(0) >= 128) {
            if (this.settings.strict) {
              if (!supportedCodepoint(text.charCodeAt(0))) {
                this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + text[0] + '"' + (" (" + text.charCodeAt(0) + ")"), nucleus);
              } else if (this.mode === "math") {
                this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + text[0] + '" used in math mode', nucleus);
              }
            }
            symbol = {
              type: "textord",
              mode: "text",
              loc: SourceLocation.range(nucleus),
              text
            };
          } else {
            return null;
          }
          this.consume();
          if (match) {
            for (var i2 = 0; i2 < match[0].length; i2++) {
              var accent2 = match[0][i2];
              if (!unicodeAccents[accent2]) {
                throw new src_ParseError("Unknown accent ' " + accent2 + "'", nucleus);
              }
              var command = unicodeAccents[accent2][this.mode];
              if (!command) {
                throw new src_ParseError("Accent " + accent2 + " unsupported in " + this.mode + " mode", nucleus);
              }
              symbol = {
                type: "accent",
                mode: this.mode,
                loc: SourceLocation.range(nucleus),
                label: command,
                isStretchy: false,
                isShifty: true,
                base: symbol
              };
            }
          }
          return symbol;
        };
        return Parser2;
      }();
      Parser.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
      ;
      var parseTree = function parseTree2(toParse, settings) {
        if (!(typeof toParse === "string" || toParse instanceof String)) {
          throw new TypeError("KaTeX can only parse string typed expression");
        }
        var parser = new Parser(toParse, settings);
        delete parser.gullet.macros.current["\\df@tag"];
        var tree = parser.parse();
        delete parser.gullet.macros.current["\\current@color"];
        delete parser.gullet.macros.current["\\color"];
        if (parser.gullet.macros.get("\\df@tag")) {
          if (!settings.displayMode) {
            throw new src_ParseError("\\tag works only in display equations");
          }
          parser.gullet.feed("\\df@tag");
          tree = [{
            type: "tag",
            mode: "text",
            body: tree,
            tag: parser.parse()
          }];
        }
        return tree;
      };
      var src_parseTree = parseTree;
      ;
      var render2 = function render3(expression, baseNode, options2) {
        baseNode.textContent = "";
        var node = renderToDomTree(expression, options2).toNode();
        baseNode.appendChild(node);
      };
      if (typeof document !== "undefined") {
        if (document.compatMode !== "CSS1Compat") {
          typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
          render2 = function render3() {
            throw new src_ParseError("KaTeX doesn't work in quirks mode.");
          };
        }
      }
      var renderToString = function renderToString2(expression, options2) {
        var markup = renderToDomTree(expression, options2).toMarkup();
        return markup;
      };
      var generateParseTree = function generateParseTree2(expression, options2) {
        var settings = new Settings(options2);
        return src_parseTree(expression, settings);
      };
      var renderError = function renderError2(error2, expression, options2) {
        if (options2.throwOnError || !(error2 instanceof src_ParseError)) {
          throw error2;
        }
        var node = buildCommon.makeSpan(["katex-error"], [new SymbolNode(expression)]);
        node.setAttribute("title", error2.toString());
        node.setAttribute("style", "color:" + options2.errorColor);
        return node;
      };
      var renderToDomTree = function renderToDomTree2(expression, options2) {
        var settings = new Settings(options2);
        try {
          var tree = src_parseTree(expression, settings);
          return buildTree(tree, expression, settings);
        } catch (error2) {
          return renderError(error2, expression, settings);
        }
      };
      var renderToHTMLTree = function renderToHTMLTree2(expression, options2) {
        var settings = new Settings(options2);
        try {
          var tree = src_parseTree(expression, settings);
          return buildHTMLTree(tree, expression, settings);
        } catch (error2) {
          return renderError(error2, expression, settings);
        }
      };
      var katex2 = {
        version: "0.13.3",
        render: render2,
        renderToString,
        ParseError: src_ParseError,
        __parse: generateParseTree,
        __renderToDomTree: renderToDomTree,
        __renderToHTMLTree: renderToHTMLTree,
        __setFontMetrics: setFontMetrics,
        __defineSymbol: defineSymbol,
        __defineMacro: defineMacro,
        __domTree: {
          Span,
          Anchor,
          SymbolNode,
          SvgNode,
          PathNode,
          LineNode
        }
      };
      ;
      var katex_webpack = katex2;
      __webpack_exports__ = __webpack_exports__.default;
      return __webpack_exports__;
    }();
  });
});

// node_modules/prismjs/prism.js
var require_prism = __commonJS((exports, module2) => {
  var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
  var Prism2 = function(_self2) {
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;
    var _ = {
      manual: _self2.Prism && _self2.Prism.manual,
      disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function(obj) {
          if (!obj["__id"]) {
            Object.defineProperty(obj, "__id", {value: ++uniqueId});
          }
          return obj["__id"];
        },
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone2, id;
          switch (_.util.type(o)) {
            case "Object":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone2 = {};
              visited[id] = clone2;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone2[key] = deepClone(o[key], visited);
                }
              }
              return clone2;
            case "Array":
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone2 = [];
              visited[id] = clone2;
              o.forEach(function(v, i) {
                clone2[i] = deepClone(v, visited);
              });
              return clone2;
            default:
              return o;
          }
        },
        getLanguage: function(element) {
          while (element && !lang.test(element.className)) {
            element = element.parentElement;
          }
          if (element) {
            return (element.className.match(lang) || [, "none"])[1].toLowerCase();
          }
          return "none";
        },
        currentScript: function() {
          if (typeof document === "undefined") {
            return null;
          }
          if ("currentScript" in document && 1 < 2) {
            return document.currentScript;
          }
          try {
            throw new Error();
          } catch (err) {
            var src2 = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
            if (src2) {
              var scripts = document.getElementsByTagName("script");
              for (var i in scripts) {
                if (scripts[i].src == src2) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        isActive: function(element, className, defaultActivation) {
          var no = "no-" + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      languages: {
        extend: function(id, redef) {
          var lang2 = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang2[key] = redef[key];
          }
          return lang2;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;
          _.languages.DFS(_.languages, function(key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i], propertyType = _.util.type(property);
              if (propertyType === "Object" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === "Array" && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function(container, async, callback) {
        var env = {
          callback,
          container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run("before-all-elements-highlight", env);
        for (var i = 0, element; element = env.elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];
        element.className = element.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === "pre") {
          parent.className = parent.className.replace(lang, "").replace(/\s+/g, " ") + " language-" + language;
        }
        var code = element.textContent;
        var env = {
          element,
          language,
          grammar,
          code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run("before-insert", env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run("after-highlight", env);
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
        }
        _.hooks.run("before-sanity-check", env);
        if (!env.code) {
          _.hooks.run("complete", env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run("before-highlight", env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self2.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function(text, grammar, language) {
        var env = {
          code: text,
          grammar,
          language
        };
        _.hooks.run("before-tokenize", env);
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run("after-tokenize", env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      tokenize: function(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      },
      Token
    };
    _self2.Prism = _;
    function Token(type, content, alias, matchedStr) {
      this.type = type;
      this.content = content;
      this.alias = alias;
      this.length = (matchedStr || "").length | 0;
    }
    Token.stringify = function stringify(o, language) {
      if (typeof o == "string") {
        return o;
      }
      if (Array.isArray(o)) {
        var s2 = "";
        o.forEach(function(e) {
          s2 += stringify(e, language);
        });
        return s2;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: "span",
        classes: ["token", o.type],
        attributes: {},
        language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run("wrap", env);
      var attributes = "";
      for (var name in env.attributes) {
        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
      }
      return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
    };
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + "," + j) {
            return;
          }
          var patternObj = patterns[j], inside = patternObj.inside, lookbehind = !!patternObj.lookbehind, greedy = !!patternObj.greedy, alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
          }
          var pattern = patternObj.pattern || patternObj;
          for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1;
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              p -= currentNode.value.length;
              pos = p;
              if (currentNode.value instanceof Token) {
                continue;
              }
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }
            var from = match.index, matchStr = match[0], before = str.slice(0, from), after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
                cause: token + "," + j,
                reach
              });
            }
          }
        }
      }
    }
    function LinkedList() {
      var head = {value: null, prev: null, next: null};
      var tail = {value: null, prev: head, next: null};
      head.next = tail;
      this.head = head;
      this.tail = tail;
      this.length = 0;
    }
    function addAfter(list, node, value) {
      var next = node.next;
      var newNode = {value, prev: node, next};
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self2.document) {
      if (!_self2.addEventListener) {
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        _self2.addEventListener("message", function(evt) {
          var message = JSON.parse(evt.data), lang2 = message.language, code = message.code, immediateClose = message.immediateClose;
          _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
          if (immediateClose) {
            _self2.close();
          }
        }, false);
      }
      return _;
    }
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute("data-manual")) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      var readyState = document.readyState;
      if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (typeof module2 !== "undefined" && module2.exports) {
    module2.exports = Prism2;
  }
  if (typeof global !== "undefined") {
    global.Prism = Prism2;
  }
  Prism2.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/,
        name: /[^\s<>'"]+/
      }
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  };
  Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
  Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
  Prism2.hooks.add("wrap", function(env) {
    if (env.type === "entity") {
      env.attributes["title"] = env.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside["language-" + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism2.languages[lang]
      };
      includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside["language-" + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism2.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return tagName;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside
      };
      Prism2.languages.insertBefore("markup", "cdata", def);
    }
  });
  Prism2.languages.html = Prism2.languages.markup;
  Prism2.languages.mathml = Prism2.languages.markup;
  Prism2.languages.svg = Prism2.languages.markup;
  Prism2.languages.xml = Prism2.languages.extend("markup", {});
  Prism2.languages.ssml = Prism2.languages.xml;
  Prism2.languages.atom = Prism2.languages.xml;
  Prism2.languages.rss = Prism2.languages.xml;
  (function(Prism3) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    Prism3.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + string.source + "$"),
            alias: "url"
          }
        }
      },
      selector: RegExp(`[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      string: {
        pattern: string,
        greedy: true
      },
      property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    };
    Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
    var markup = Prism3.languages.markup;
    if (markup) {
      markup.tag.addInlined("style", "css");
      Prism3.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
          pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
          lookbehind: true,
          inside: {
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                style: {
                  pattern: /(["'])[\s\S]+(?=["']$)/,
                  lookbehind: true,
                  alias: "language-css",
                  inside: Prism3.languages.css
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            },
            "attr-name": /^style/i
          }
        }
      }, markup.tag);
    }
  })(Prism2);
  Prism2.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
  Prism2.languages.javascript = Prism2.languages.extend("clike", {
    "class-name": [
      Prism2.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  Prism2.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: Prism2.languages.regex
        },
        "regex-flags": /[a-z]+$/,
        "regex-delimiter": /^\/|\/$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism2.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism2.languages.insertBefore("javascript", "string", {
    "template-string": {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\${|}$/,
              alias: "punctuation"
            },
            rest: Prism2.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  });
  if (Prism2.languages.markup) {
    Prism2.languages.markup.tag.addInlined("script", "javascript");
  }
  Prism2.languages.js = Prism2.languages.javascript;
  (function() {
    if (typeof self === "undefined" || !self.Prism || !self.document) {
      return;
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var Prism3 = window.Prism;
    var LOADING_MESSAGE = "Loading\u2026";
    var FAILURE_MESSAGE = function(status, message) {
      return "\u2716 Error " + status + " while fetching file: " + message;
    };
    var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
    var EXTENSIONS = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    };
    var STATUS_ATTR = "data-src-status";
    var STATUS_LOADING = "loading";
    var STATUS_LOADED = "loaded";
    var STATUS_FAILED = "failed";
    var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    function setLanguageClass(element, language) {
      var className = element.className;
      className = className.replace(lang, " ") + " language-" + language;
      element.className = className.replace(/\s+/g, " ").trim();
    }
    Prism3.hooks.add("before-highlightall", function(env) {
      env.selector += ", " + SELECTOR;
    });
    Prism3.hooks.add("before-sanity-check", function(env) {
      var pre = env.element;
      if (pre.matches(SELECTOR)) {
        env.code = "";
        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
        var code = pre.appendChild(document.createElement("CODE"));
        code.textContent = LOADING_MESSAGE;
        var src2 = pre.getAttribute("data-src");
        var language = env.language;
        if (language === "none") {
          var extension = (/\.(\w+)$/.exec(src2) || [, "none"])[1];
          language = EXTENSIONS[extension] || extension;
        }
        setLanguageClass(code, language);
        setLanguageClass(pre, language);
        var autoloader = Prism3.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src2, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              code.textContent = xhr.responseText;
              Prism3.highlightElement(code);
            } else {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              if (xhr.status >= 400) {
                code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
              } else {
                code.textContent = FAILURE_EMPTY_MESSAGE;
              }
            }
          }
        };
        xhr.send(null);
      }
    });
    Prism3.plugins.fileHighlight = {
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element; element = elements[i++]; ) {
          Prism3.highlightElement(element);
        }
      }
    };
    var logged = false;
    Prism3.fileHighlight = function() {
      if (!logged) {
        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
        logged = true;
      }
      Prism3.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
});

// .svelte/netlify/entry.js
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {type: ""}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
        reject(error2);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  branch,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: page2,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: ""};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 ? `<style amp-custom>${Array.from(styles).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, json}) => `<script type="svelte-data" url="${url}">${json}</script>`).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const {name, message, stack} = error2;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error2};
    }
    return {status, error: error2};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                fetched.push({
                  url,
                  json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                });
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error2}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page: page2
    });
  } catch (error3) {
    options2.handle_error(error3);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error3) {
    options2.handle_error(error3);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error2;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error2} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error2 = e;
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error2,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error3) {
    options2.handle_error(error3);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession({context: request.context});
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler2) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler2({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return {
          status: 500,
          body: `Invalid response from route ${request.path}; 
						 expected an object, got ${typeof response}`,
          headers: {}
        };
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      if (typeof body === "object" && !("content-type" in headers) || headers["content-type"] === "application/json") {
        headers = {...headers, "content-type": "application/json"};
        body = JSON.stringify(body);
      }
      return {status, body, headers};
    }
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path.endsWith("/") && incoming.path !== "/") {
    const q = incoming.query.toString();
    return {
      status: 301,
      headers: {
        location: encodeURI(incoming.path.slice(0, -1) + (q ? `?${q}` : ""))
      }
    };
  }
  const incoming_with_body = {
    ...incoming,
    body: parse_body(incoming)
  };
  const context = await options2.hooks.getContext(incoming_with_body) || {};
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming_with_body,
        params: null,
        context
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession({context}),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function hash(str) {
  let hash2 = 5381, i = str.length;
  while (i)
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  return (hash2 >>> 0).toString(36);
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
var tasks = new Set();
var nodes_to_detach = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte/output/server/app.js
var import_katex = __toModule(require_katex());
var import_prismjs = __toModule(require_prism());
var css$c = {
  code: "#svelte-announcer.svelte-u7bl1d{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  clip: rect(0 0 0 0);\\n  clip-path: inset(50%);\\n  overflow: hidden;\\n  white-space: nowrap;\\n  width: 1px;\\n  height: 1px;\\n}</style>"],"names":[],"mappings":"AAqDO,iBAAiB,cAAC,CAAC,AACxB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACb,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$c);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-u7bl1d"}">${navigated ? `Navigated to ${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<link rel="icon" href="/favicon.svg" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	<link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet">\n	<link rel="stylesheet" href="/global.css">\n	' + head + '\n</head>\n\n<body>\n	<div id="svelte">' + body + "</div>\n</body>\n\n</html>";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-faa40d03.js",
      css: ["/./_app/assets/start-25a78b07.css", "/./_app/assets/vendor-025bd988.css"],
      js: ["/./_app/start-faa40d03.js", "/./_app/chunks/vendor-499072eb.js", "/./_app/chunks/singletons-6b53f818.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{file: "favicon.svg", size: 924, type: "image/svg+xml"}, {file: "global.css", size: 40, type: "text/css"}, {file: "icons/hamburger.svg", size: 267, type: "image/svg+xml"}, {file: "icons/instagram.svg", size: 1423, type: "image/svg+xml"}, {file: "images/flex.png", size: 442861, type: "image/png"}, {file: "images/header.png", size: 321942, type: "image/png"}, {file: "images/plant-1.png", size: 315400, type: "image/png"}, {file: "images/plant-2.png", size: 410562, type: "image/png"}, {file: "images/plant-3.png", size: 156393, type: "image/png"}, {file: "images/weed.png", size: 513121, type: "image/png"}, {file: "logo-192.png", size: 4760, type: "image/png"}, {file: "logo-512.png", size: 13928, type: "image/png"}, {file: "logo.svg", size: 922, type: "image/svg+xml"}, {file: "manifest.json", size: 324, type: "application/json"}],
  layout: "src/routes/$layout.svelte",
  error: ".svelte/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/oldindex\/?$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/oldindex.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/portrait\/?$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/portrait.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/contact\/?$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/contact.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/work\/?$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/work/index.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/work\/([^/]+?)\/?$/,
      params: (m) => ({workGroup: d(m[1])}),
      a: ["src/routes/$layout.svelte", "src/routes/work/[workGroup]/index.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/work\/([^/]+?)\/([^/]+?)\/?$/,
      params: (m) => ({workGroup: d(m[1]), work: d(m[2])}),
      a: ["src/routes/$layout.svelte", "src/routes/work/[workGroup]/[work].svelte"],
      b: [".svelte/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getContext: hooks.getContext || (() => ({})),
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/$layout.svelte": () => Promise.resolve().then(function() {
    return $layout$1;
  }),
  ".svelte/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$2;
  }),
  "src/routes/oldindex.svelte": () => Promise.resolve().then(function() {
    return oldindex;
  }),
  "src/routes/portrait.svelte": () => Promise.resolve().then(function() {
    return portrait;
  }),
  "src/routes/contact.svelte": () => Promise.resolve().then(function() {
    return contact;
  }),
  "src/routes/work/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/work/[workGroup]/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/work/[workGroup]/[work].svelte": () => Promise.resolve().then(function() {
    return _work_;
  })
};
var metadata_lookup = {"src/routes/$layout.svelte": {entry: "/./_app/pages/$layout.svelte-edde3fee.js", css: ["/./_app/assets/pages/$layout.svelte-b040365a.css", "/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/$layout.svelte-edde3fee.js", "/./_app/chunks/vendor-499072eb.js"], styles: null}, ".svelte/build/components/error.svelte": {entry: "/./_app/error.svelte-ab25880d.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/error.svelte-ab25880d.js", "/./_app/chunks/vendor-499072eb.js"], styles: null}, "src/routes/index.svelte": {entry: "/./_app/pages/index.svelte-18aea9fb.js", css: ["/./_app/assets/pages/index.svelte-1fb08a4b.css", "/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/index.svelte-18aea9fb.js", "/./_app/chunks/vendor-499072eb.js"], styles: null}, "src/routes/oldindex.svelte": {entry: "/./_app/pages/oldindex.svelte-bd206c41.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/oldindex.svelte-bd206c41.js", "/./_app/chunks/vendor-499072eb.js", "/./_app/chunks/pageFade-a3c22aee.js"], styles: null}, "src/routes/portrait.svelte": {entry: "/./_app/pages/portrait.svelte-aa0cabab.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/portrait.svelte-aa0cabab.js", "/./_app/chunks/vendor-499072eb.js"], styles: null}, "src/routes/contact.svelte": {entry: "/./_app/pages/contact.svelte-b7a991a4.js", css: ["/./_app/assets/pages/contact.svelte-07cb140d.css", "/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/contact.svelte-b7a991a4.js", "/./_app/chunks/vendor-499072eb.js", "/./_app/chunks/Page-c9a1afca.js", "/./_app/chunks/pageFade-a3c22aee.js"], styles: null}, "src/routes/work/index.svelte": {entry: "/./_app/pages/work/index.svelte-d7cab62b.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/work/index.svelte-d7cab62b.js", "/./_app/chunks/vendor-499072eb.js", "/./_app/chunks/navigation-9e49acea.js", "/./_app/chunks/singletons-6b53f818.js", "/./_app/chunks/Page-c9a1afca.js", "/./_app/chunks/pageFade-a3c22aee.js"], styles: null}, "src/routes/work/[workGroup]/index.svelte": {entry: "/./_app/pages/work/[workGroup]/index.svelte-2183e036.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/work/[workGroup]/index.svelte-2183e036.js", "/./_app/chunks/vendor-499072eb.js", "/./_app/chunks/navigation-9e49acea.js", "/./_app/chunks/singletons-6b53f818.js", "/./_app/chunks/Page-c9a1afca.js", "/./_app/chunks/pageFade-a3c22aee.js"], styles: null}, "src/routes/work/[workGroup]/[work].svelte": {entry: "/./_app/pages/work/[workGroup]/[work].svelte-17e692d0.js", css: ["/./_app/assets/vendor-025bd988.css"], js: ["/./_app/pages/work/[workGroup]/[work].svelte-17e692d0.js", "/./_app/chunks/vendor-499072eb.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "", assets: "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
function createBlocksFromJson(json) {
  const objectArray = Object.values(json);
  const rawBlocks = objectArray.map(({value}) => {
    if (!value)
      return {};
    return value;
  });
  const blocks = [];
  for (let i = 0; i < objectArray.length; i++) {
    const object = rawBlocks[i];
    if (!object)
      continue;
    switch (object.type) {
      case "column_list": {
        nestContents(object, rawBlocks);
        break;
      }
      case "numbered_list":
      case "bulleted_list": {
        groupListItems(i, rawBlocks);
        break;
      }
    }
    blocks.push(object);
  }
  return blocks;
}
function groupListItems(index2, rawBlocks) {
  var _a;
  const firstListItem = rawBlocks[index2];
  const firstListItemClone = {};
  Object.assign(firstListItemClone, firstListItem);
  firstListItem.type = "list";
  firstListItem.content = [];
  firstListItem.content.push(firstListItemClone);
  while (((_a = rawBlocks[index2 + 1]) === null || _a === void 0 ? void 0 : _a.type) === firstListItemClone.type) {
    firstListItem.content.push(rawBlocks[index2 + 1]);
    rawBlocks[index2 + 1] = null;
    index2++;
  }
}
function nestContents(object, rawBlocks) {
  object.content = object.content.reduce((prev, id) => {
    const referencedObject = rawBlocks.find((object2, i) => {
      if ((object2 === null || object2 === void 0 ? void 0 : object2.id) === id) {
        if (object2.content) {
          nestContents(object2, rawBlocks);
        }
        if (object2.type === "numbered_list" || object2.type === "bulleted_list") {
          groupListItems(i, rawBlocks);
        }
        rawBlocks[i] = null;
        return true;
      }
    });
    if (referencedObject)
      prev.push(referencedObject);
    return prev;
  }, []);
}
function blockToImageUrl(block) {
  const url = block.properties.source[0][0];
  if (!url)
    return "";
  const imageUrl = new URL(url.startsWith("https://www.notion.so") ? url : `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`);
  imageUrl.searchParams.set("table", block.parent_table);
  imageUrl.searchParams.set("id", block.id);
  imageUrl.searchParams.set("cache", "v2");
  return imageUrl;
}
function getPageCoverUrl(url) {
  if (!url)
    return "";
  let imageUrl = "";
  if (url.startsWith("/images")) {
    imageUrl = `https://notion.so${url}`;
  } else {
    imageUrl = url;
  }
  return imageUrl;
}
function getPageIconImageUrl(block) {
  const url = block.format.page_icon;
  if (!url)
    return "";
  const imageUrl = new URL(url.startsWith("https://www.notion.so") ? url : `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`);
  imageUrl.searchParams.set("table", "block");
  imageUrl.searchParams.set("id", block.id);
  imageUrl.searchParams.set("cache", "v2");
  return imageUrl;
}
var apiUrl = "https://notion-api.splitbee.io/v1/";
var fetcher;
if (typeof fetch !== "undefined")
  fetcher = fetch;
function throwIfNoFetcherSet() {
  if (!fetcher) {
    throw "Sotion: Since you are in SRS mode, set a fetch function with: `notion.setFetch`";
  }
}
var Sotion$1 = class {
  constructor() {
    this._scopeId = "";
    this.scope = [];
  }
  get scopeId() {
    return this._scopeId;
  }
  get isScopeUpdated() {
    return this.scope.includes(this._scopeId);
  }
  async getScope() {
    if (this.isScopeUpdated)
      return this.scope;
    throwIfNoFetcherSet();
    const res = await fetcher(`${apiUrl}table/${this._scopeId}`);
    this.scope = await res.json();
    return this.scope;
  }
  async fetchPage(id) {
    throwIfNoFetcherSet();
    const res = await fetcher(`${apiUrl}page/${id}`);
    const rawBlocks = await res.json();
    const blocks = createBlocksFromJson(rawBlocks);
    return JSON.stringify(blocks);
  }
  async slugPage(slug) {
    await this.getScope();
    const id = await this.getIdFromSlug(slug);
    const res = await fetcher(`${apiUrl}page/${id}`);
    const rawBlocks = await res.json();
    const blocks = JSON.stringify(createBlocksFromJson(rawBlocks));
    const meta = this.scope.find((col) => col.id === id);
    return {blocks, meta};
  }
  async slugTable(slug) {
    await this.getScope();
    const id = await this.getIdFromSlug(slug);
    const res = await fetcher(`${apiUrl}table/${id}`);
    const json = await res.json();
    return json;
  }
  setScope(id) {
    this._scopeId = id;
    return this;
  }
  setFetch(fetch22) {
    fetcher = fetch22;
    return this;
  }
  async getIdFromSlug(slug) {
    let id;
    try {
      id = this.scope.filter((col) => col.slug === slug)[0].id;
    } catch (e) {
      throw "Sotion: slug '" + slug + "' not found in scope '" + this._scopeId + "'";
    }
    return id;
  }
};
var sotion = new Sotion$1();
var KatexEquation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let katexString;
  let {maths} = $$props;
  let {displayMode = true} = $$props;
  if ($$props.maths === void 0 && $$bindings.maths && maths !== void 0)
    $$bindings.maths(maths);
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  katexString = import_katex.default.renderToString(maths, {displayMode, throwOnError: false});
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"}" integrity="${"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"}" crossorigin="${"anonymous"}" data-svelte="svelte-bnfb8z">`, ""}

${katexString}`;
});
var Equation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let {block} = $$props;
  const maths = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title[0][0]) !== null && _b !== void 0 ? _b : "";
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `${validate_component(KatexEquation, "KatexEquation").$$render($$result, {maths, displayMode: true}, {}, {})}`;
});
var Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let {block} = $$props;
  const code = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title[0][0]) !== null && _b !== void 0 ? _b : "";
  const lang = (_d = (_c = block.properties) === null || _c === void 0 ? void 0 : _c.language[0][0].toLowerCase()) !== null && _d !== void 0 ? _d : "";
  const html = import_prismjs.default.highlight(code, import_prismjs.default.languages[lang], lang);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<pre class="${"language-" + escape2(lang)}"><code class="${"language-" + escape2(lang)}">${html}</code></pre>`;
});
var Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
var css$b = {
  code: ".sotion-column.svelte-xi6r5y{padding:0 var(--sotion-column-gap);flex-basis:auto;height:100%;flex-grow:1;flex-shrink:1}",
  map: '{"version":3,"file":"Column.svelte","sources":["Column.svelte"],"sourcesContent":["<script>;\\nexport let block;\\nconst smallestColumnSize = 250;\\nlet clientWidth;\\nlet minWidth = \\"min-content\\";\\n$: if (clientWidth <= smallestColumnSize) {\\n    minWidth = smallestColumnSize + \\"px\\";\\n}\\n$: columnWidthPercentage = block.format.column_ratio * 100;\\n</script>\\n\\n<div\\n  class=\\"sotion-column\\"\\n  style=\\"width: {columnWidthPercentage}%; min-width: {minWidth}\\"\\n  bind:clientWidth\\n>\\n  <slot />\\n</div>\\n\\n<style>.sotion-column {\\n  padding: 0 var(--sotion-column-gap);\\n  flex-basis: auto;\\n  height: 100%;\\n  flex-grow: 1;\\n  flex-shrink: 1;\\n}</style>\\n"],"names":[],"mappings":"AAmBO,cAAc,cAAC,CAAC,AACrB,OAAO,CAAE,CAAC,CAAC,IAAI,mBAAmB,CAAC,CACnC,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,CAAC,CACZ,WAAW,CAAE,CAAC,AAChB,CAAC"}'
};
var Column = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let columnWidthPercentage;
  let {block} = $$props;
  let minWidth = "min-content";
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$b);
  columnWidthPercentage = block.format.column_ratio * 100;
  return `<div class="${"sotion-column svelte-xi6r5y"}" style="${"width: " + escape2(columnWidthPercentage) + "%; min-width: " + escape2(minWidth)}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var css$a = {
  code: "span.svelte-1q42dpy{white-space:pre-line}.bold.svelte-1q42dpy{font-weight:bold}.italic.svelte-1q42dpy{font-style:italic}.underline.svelte-1q42dpy{text-decoration:underline}.strikethrough.svelte-1q42dpy{text-decoration:line-through}.underline.strikethrough.svelte-1q42dpy{text-decoration:underline line-through}.code.svelte-1q42dpy{background-color:rgb(63, 63, 63);padding:5px 8px;border-radius:5px;color:white}",
  map: '{"version":3,"file":"FormattedText.svelte","sources":["FormattedText.svelte"],"sourcesContent":["<script>import KatexEquation from \\"./KatexEquation.svelte\\";\\nexport let text;\\nfunction isLink(segment) {\\n    return (segment[1] && Array.isArray(segment[1]) && segment[1].flat().includes(\\"a\\"));\\n}\\nfunction getLink(segment) {\\n    return segment[1].find((link) => link[0] === \\"a\\")[1];\\n}\\nfunction classForSegment(segment) {\\n    var _a;\\n    return (_a = segment[1]) === null || _a === void 0 ? void 0 : _a.reduce((prev, [curr]) => {\\n        switch (curr) {\\n            case \\"b\\": {\\n                prev += \\"bold \\";\\n                break;\\n            }\\n            case \\"i\\": {\\n                prev += \\"italic \\";\\n                break;\\n            }\\n            case \\"c\\": {\\n                prev += \\"code \\";\\n                break;\\n            }\\n            case \\"_\\": {\\n                prev += \\"underline \\";\\n                break;\\n            }\\n            case \\"s\\": {\\n                prev += \\"strikethrough \\";\\n            }\\n        }\\n        return prev;\\n    }, \\"\\");\\n}\\n</script>\\n\\n{#each text as segment}\\n  {#if isLink(segment)}\\n    <a class={classForSegment(segment)} href={getLink(segment)}>{segment[0]}</a>\\n  {:else if segment[1] && segment[1][0][0] === \\"e\\"}\\n    <KatexEquation displayMode={false} maths={segment[1][0][1]} />\\n  {:else}\\n    <span class={classForSegment(segment)}>{segment[0]}</span>\\n  {/if}\\n{/each}\\n{#if !text}\\n  <br />\\n{/if}\\n\\n<style>span {\\n  white-space: pre-line;\\n}\\n.bold {\\n  font-weight: bold;\\n}\\n.italic {\\n  font-style: italic;\\n}\\n.underline {\\n  text-decoration: underline;\\n}\\n.strikethrough {\\n  text-decoration: line-through;\\n}\\n.underline.strikethrough {\\n  text-decoration: underline line-through;\\n}\\n.code {\\n  background-color: rgb(63, 63, 63);\\n  padding: 5px 8px;\\n  border-radius: 5px;\\n  color: white;\\n}</style>\\n"],"names":[],"mappings":"AAkDO,IAAI,eAAC,CAAC,AACX,WAAW,CAAE,QAAQ,AACvB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,OAAO,eAAC,CAAC,AACP,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,UAAU,eAAC,CAAC,AACV,eAAe,CAAE,SAAS,AAC5B,CAAC,AACD,cAAc,eAAC,CAAC,AACd,eAAe,CAAE,YAAY,AAC/B,CAAC,AACD,UAAU,cAAc,eAAC,CAAC,AACxB,eAAe,CAAE,SAAS,CAAC,YAAY,AACzC,CAAC,AACD,KAAK,eAAC,CAAC,AACL,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,KAAK,AACd,CAAC"}'
};
function isLink(segment) {
  return segment[1] && Array.isArray(segment[1]) && segment[1].flat().includes("a");
}
function getLink(segment) {
  return segment[1].find((link) => link[0] === "a")[1];
}
function classForSegment(segment) {
  var _a;
  return (_a = segment[1]) === null || _a === void 0 ? void 0 : _a.reduce((prev, [curr]) => {
    switch (curr) {
      case "b": {
        prev += "bold ";
        break;
      }
      case "i": {
        prev += "italic ";
        break;
      }
      case "c": {
        prev += "code ";
        break;
      }
      case "_": {
        prev += "underline ";
        break;
      }
      case "s": {
        prev += "strikethrough ";
      }
    }
    return prev;
  }, "");
}
var FormattedText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {text} = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$a);
  return `${each(text, (segment) => `${isLink(segment) ? `<a class="${escape2(null_to_empty(classForSegment(segment))) + " svelte-1q42dpy"}"${add_attribute("href", getLink(segment), 0)}>${escape2(segment[0])}</a>` : `${segment[1] && segment[1][0][0] === "e" ? `${validate_component(KatexEquation, "KatexEquation").$$render($$result, {
    displayMode: false,
    maths: segment[1][0][1]
  }, {}, {})}` : `<span class="${escape2(null_to_empty(classForSegment(segment))) + " svelte-1q42dpy"}">${escape2(segment[0])}</span>`}`}`)}
${!text ? `<br>` : ``}`;
});
var css$9 = {
  code: ".sotion-numbered-list.svelte-59yb7f,.sotion-bulleted-list.svelte-59yb7f{margin:0;padding-left:20px}",
  map: '{"version":3,"file":"List.svelte","sources":["List.svelte"],"sourcesContent":["<script>;\\nimport FormattedText from \\"./components/FormattedText.svelte\\";\\nexport let block;\\nconst isNumbered = block.content[0].type === \\"numbered_list\\";\\nfunction getTitle(block) {\\n    var _a, _b;\\n    return (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : \\"\\";\\n}\\n</script>\\n\\n{#if isNumbered}\\n  <ol class=\\"sotion-numbered-list\\">\\n    {#each block.content as listItem}\\n      <li><FormattedText text={getTitle(listItem)} /></li>\\n    {/each}\\n  </ol>\\n{:else}\\n  <ul class=\\"sotion-bulleted-list\\">\\n    {#each block.content as listItem}\\n      <li><FormattedText text={getTitle(listItem)} /></li>\\n    {/each}\\n  </ul>\\n{/if}\\n\\n<style>.sotion-numbered-list, .sotion-bulleted-list {\\n  margin: 0;\\n  padding-left: 20px;\\n}</style>\\n"],"names":[],"mappings":"AAwBO,mCAAqB,CAAE,qBAAqB,cAAC,CAAC,AACnD,MAAM,CAAE,CAAC,CACT,YAAY,CAAE,IAAI,AACpB,CAAC"}'
};
function getTitle(block) {
  var _a, _b;
  return (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "";
}
var List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {block} = $$props;
  const isNumbered = block.content[0].type === "numbered_list";
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$9);
  return `${isNumbered ? `<ol class="${"sotion-numbered-list svelte-59yb7f"}">${each(block.content, (listItem) => `<li>${validate_component(FormattedText, "FormattedText").$$render($$result, {text: getTitle(listItem)}, {}, {})}</li>`)}</ol>` : `<ul class="${"sotion-bulleted-list svelte-59yb7f"}">${each(block.content, (listItem) => `<li>${validate_component(FormattedText, "FormattedText").$$render($$result, {text: getTitle(listItem)}, {}, {})}</li>`)}</ul>`}`;
});
var css$8 = {
  code: ".sotion-column-list.svelte-qhwz2j{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 calc(var(--sotion-column-gap) * -1)}",
  map: '{"version":3,"file":"ColumnList.svelte","sources":["ColumnList.svelte"],"sourcesContent":["<section class=\\"sotion-column-list\\">\\n  <slot />\\n</section>\\n\\n<style>.sotion-column-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  margin: 0 calc(var(--sotion-column-gap) * -1);\\n}</style>\\n"],"names":[],"mappings":"AAIO,mBAAmB,cAAC,CAAC,AAC1B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,aAAa,CAC9B,MAAM,CAAE,CAAC,CAAC,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,AAC/C,CAAC"}'
};
var ColumnList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section class="${"sotion-column-list svelte-qhwz2j"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
var CollectionViewPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {block} = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return ``;
});
var css$7 = {
  code: ".sotion-quote.svelte-1ghmfb1{margin:0;box-sizing:border-box;margin-left:0;border-left:3px solid black;padding:5px 20px;background:whitesmoke;border-top-right-radius:5px;border-bottom-right-radius:5px;display:flex;align-items:center}",
  map: '{"version":3,"file":"Quote.svelte","sources":["Quote.svelte"],"sourcesContent":["<script>var _a, _b;\\n;\\nimport FormattedText from \\"./components/FormattedText.svelte\\";\\nexport let block;\\nconst title = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : \\"\\";\\n</script>\\n\\n<blockquote class=\\"sotion-quote\\"><FormattedText text={title} /></blockquote>\\n\\n<style>.sotion-quote {\\n  margin: 0;\\n  box-sizing: border-box;\\n  margin-left: 0;\\n  border-left: 3px solid black;\\n  padding: 5px 20px;\\n  background: whitesmoke;\\n  border-top-right-radius: 5px;\\n  border-bottom-right-radius: 5px;\\n  display: flex;\\n  align-items: center;\\n}</style>\\n"],"names":[],"mappings":"AASO,aAAa,eAAC,CAAC,AACpB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,UAAU,CACtB,WAAW,CAAE,CAAC,CACd,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAC5B,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,UAAU,CACtB,uBAAuB,CAAE,GAAG,CAC5B,0BAA0B,CAAE,GAAG,CAC/B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACrB,CAAC"}'
};
var Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let {block} = $$props;
  const title = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "";
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$7);
  return `<blockquote class="${"sotion-quote svelte-1ghmfb1"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</blockquote>`;
});
var css$6 = {
  code: "img.svelte-1gmwisl.svelte-1gmwisl{max-width:100%}.sotion-figure.svelte-1gmwisl.svelte-1gmwisl{margin:0;margin-bottom:20px}.full-width.svelte-1gmwisl img.svelte-1gmwisl{width:100%}.page-width.svelte-1gmwisl.svelte-1gmwisl{width:100%}.sotion-figure-caption.svelte-1gmwisl.svelte-1gmwisl{font-style:italic}.svelte-1gmwisl:not(.sotion-figure) .sotion-image.svelte-1gmwisl{margin-bottom:20px}.full-width.svelte-1gmwisl.svelte-1gmwisl{max-width:100%;width:100vw !important;position:absolute;left:0}",
  map: '{"version":3,"file":"Image.svelte","sources":["Image.svelte"],"sourcesContent":["<script>var _a;\\n;\\nimport { blockToImageUrl } from \\"../../utils\\";\\nimport FormattedText from \\"./components/FormattedText.svelte\\";\\nexport let block;\\nconst imageUrl = blockToImageUrl(block);\\nconst caption = (_a = block === null || block === void 0 ? void 0 : block.properties) === null || _a === void 0 ? void 0 : _a.caption;\\n// To adjust fullWidth cases where the image/figure is given the whole width (100vw)\\nlet fullWidthImageHeight;\\n</script>\\n\\n<slot />\\n{#if caption}\\n  <figure\\n    class=\\"sotion-figure\\"\\n    class:full-width={block.format.block_full_width}\\n    class:page-width={block.format.block_page_width}\\n    bind:clientHeight={fullWidthImageHeight}\\n  >\\n    <img\\n      src={imageUrl.toString()}\\n      class=\\"sotion-image\\"\\n      alt=\\"sotion\\"\\n      width=\\"{block.format.block_width}px\\"\\n    />\\n    <figcaption class=\\"sotion-figure-caption\\">\\n      <FormattedText text={caption} />\\n    </figcaption>\\n  </figure>\\n  {#if block.format.block_full_width}\\n    <div\\n      class=\\"sotion-figure-placeholder\\"\\n      style=\\"height: {fullWidthImageHeight}px\\"\\n    />\\n  {/if}\\n{:else}\\n  <div\\n    bind:clientHeight={fullWidthImageHeight}\\n    class:full-width={block.format.block_full_width}\\n  >\\n    <img\\n      src={imageUrl.toString()}\\n      class=\\"sotion-image\\"\\n      width=\\"{block.format.block_width}px\\"\\n      class:page-width={block.format.block_page_width}\\n      alt=\\"sotion\\"\\n    />\\n  </div>\\n  {#if block.format.block_full_width}\\n    <div\\n      class=\\"sotion-image-placeholder\\"\\n      style=\\"height: {fullWidthImageHeight}px\\"\\n    />\\n  {/if}\\n{/if}\\n\\n<style>img {\\n  max-width: 100%;\\n}\\n.sotion-figure {\\n  margin: 0;\\n  margin-bottom: 20px;\\n}\\n.full-width img {\\n  width: 100%;\\n}\\n.page-width {\\n  width: 100%;\\n}\\n.sotion-figure-caption {\\n  font-style: italic;\\n}\\n:not(.sotion-figure) .sotion-image {\\n  margin-bottom: 20px;\\n}\\n.full-width {\\n  max-width: 100%;\\n  width: 100vw !important;\\n  position: absolute;\\n  left: 0;\\n}</style>\\n"],"names":[],"mappings":"AAwDO,GAAG,8BAAC,CAAC,AACV,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,cAAc,8BAAC,CAAC,AACd,MAAM,CAAE,CAAC,CACT,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,0BAAW,CAAC,GAAG,eAAC,CAAC,AACf,KAAK,CAAE,IAAI,AACb,CAAC,AACD,WAAW,8BAAC,CAAC,AACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,sBAAsB,8BAAC,CAAC,AACtB,UAAU,CAAE,MAAM,AACpB,CAAC,eACD,KAAK,cAAc,CAAC,CAAC,aAAa,eAAC,CAAC,AAClC,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,WAAW,8BAAC,CAAC,AACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,CAAC,UAAU,CACvB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,AACT,CAAC"}'
};
var Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let {block} = $$props;
  const imageUrl = blockToImageUrl(block);
  const caption = (_a = block === null || block === void 0 ? void 0 : block.properties) === null || _a === void 0 ? void 0 : _a.caption;
  let fullWidthImageHeight;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$6);
  return `${slots.default ? slots.default({}) : ``}
${caption ? `<figure class="${[
    "sotion-figure svelte-1gmwisl",
    (block.format.block_full_width ? "full-width" : "") + " " + (block.format.block_page_width ? "page-width" : "")
  ].join(" ").trim()}"><img${add_attribute("src", imageUrl.toString(), 0)} class="${"sotion-image svelte-1gmwisl"}" alt="${"sotion"}" width="${escape2(block.format.block_width) + "px"}">
    <figcaption class="${"sotion-figure-caption svelte-1gmwisl"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: caption}, {}, {})}</figcaption></figure>
  ${block.format.block_full_width ? `<div class="${"sotion-figure-placeholder"}" style="${"height: " + escape2(fullWidthImageHeight) + "px"}"></div>` : ``}` : `<div class="${["svelte-1gmwisl", block.format.block_full_width ? "full-width" : ""].join(" ").trim()}"><img${add_attribute("src", imageUrl.toString(), 0)} class="${[
    "sotion-image svelte-1gmwisl",
    block.format.block_page_width ? "page-width" : ""
  ].join(" ").trim()}" width="${escape2(block.format.block_width) + "px"}" alt="${"sotion"}"></div>
  ${block.format.block_full_width ? `<div class="${"sotion-image-placeholder"}" style="${"height: " + escape2(fullWidthImageHeight) + "px"}"></div>` : ``}`}`;
});
var ToDo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let {block} = $$props;
  const title = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "";
  const checked = !!((_c = block.properties) === null || _c === void 0 ? void 0 : _c.checked);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<div><input type="${"checkbox"}" ${checked ? "checked" : ""}>
  ${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</div>`;
});
var SubSubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let {block} = $$props;
  const title = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<h3 class="${"sotion-subsubheader"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</h3>`;
});
var SubHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let {block} = $$props;
  const title = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<h2 class="${"sotion-subheader"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</h2>`;
});
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let {block} = $$props;
  const title = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<h1 class="${"sotion-header"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</h1>`;
});
var Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let {block} = $$props;
  const title = (_b = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "";
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `<p class="${"text"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: title}, {}, {})}</p>`;
});
var css$5 = {
  code: "div.svelte-1oe4d41{width:100%;background:whitesmoke;padding:10px;margin:10px 0}.json.svelte-1oe4d41{white-space:pre-wrap;max-width:100%;word-wrap:break-word}span.svelte-1oe4d41{color:red}",
  map: '{"version":3,"file":"Error.svelte","sources":["Error.svelte"],"sourcesContent":["<script>;\\nexport let block;\\n</script>\\n\\n<div>\\n  Block type: <span>{block.type}</span> unknown<br />\\n\\n  <div class=\\"json\\">\\n    {JSON.stringify(block)}\\n  </div>\\n</div>\\n\\n<style>div {\\n  width: 100%;\\n  background: whitesmoke;\\n  padding: 10px;\\n  margin: 10px 0;\\n}\\n.json {\\n  white-space: pre-wrap;\\n  max-width: 100%;\\n  word-wrap: break-word;\\n}\\nspan {\\n  color: red;\\n}</style>\\n"],"names":[],"mappings":"AAYO,GAAG,eAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,WAAW,CAAE,QAAQ,CACrB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,UAAU,AACvB,CAAC,AACD,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,GAAG,AACZ,CAAC"}'
};
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {block} = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$5);
  return `<div class="${"svelte-1oe4d41"}">Block type: <span class="${"svelte-1oe4d41"}">${escape2(block.type)}</span> unknown<br>

  <div class="${"json svelte-1oe4d41"}">${escape2(JSON.stringify(block))}</div>
</div>`;
});
var css$4 = {
  code: ".page-icon.svelte-73humg{position:relative;font-size:70px}.page-icon.image.svelte-73humg{height:90px;margin-bottom:30px}.page-cover.svelte-73humg{position:absolute;left:50%;transform:translateX(-50%);width:100vw;max-width:100%;height:300px;background-size:cover;background-position:center}.page-cover-placeholder.svelte-73humg{height:250px}.no-page-cover-spacer.svelte-73humg{height:50px}",
  map: '{"version":3,"file":"Page.svelte","sources":["Page.svelte"],"sourcesContent":["<script>var _a, _b, _c, _d;\\n;\\nimport { getPageCoverUrl, getPageIconImageUrl } from \\"../../utils\\";\\nimport FormattedText from \\"./components/FormattedText.svelte\\";\\nexport let block;\\nconst pageTitle = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title;\\nconst pageIcon = (_b = block.format) === null || _b === void 0 ? void 0 : _b.page_icon;\\nconst pageCover = (_c = block.format) === null || _c === void 0 ? void 0 : _c.page_cover;\\nconst pageCoverPosition = ((_d = block.format) === null || _d === void 0 ? void 0 : _d.page_cover_position) * 100;\\nconst pageIconImage = (pageIcon === null || pageIcon === void 0 ? void 0 : pageIcon.startsWith(\\"http\\")) ? getPageIconImageUrl(block)\\n    : null;\\n</script>\\n\\n<div class=\\"page-header\\">\\n  {#if pageCover}\\n    <div\\n      class=\\"page-cover\\"\\n      style=\\"background-image: \\n      url({getPageCoverUrl(\\n        pageCover\\n      )});\\n       background-position-y: calc(100% - {pageCoverPosition}%)\\"\\n    />\\n    <div class=\\"page-cover-placeholder\\" />\\n  {:else}\\n    <div class=\\"no-page-cover-spacer\\" />\\n  {/if}\\n  {#if pageIcon}\\n    {#if pageIconImage}\\n      <img\\n        src={getPageIconImageUrl(block).toString()}\\n        class=\\"page-icon image\\"\\n        alt=\\"test\\"\\n      />\\n    {:else}\\n      <span class=\\"page-icon\\">\\n        {pageIcon}\\n      </span>\\n    {/if}\\n  {/if}\\n\\n  {#if pageTitle}\\n    <h1 class=\\"page-title\\">\\n      <FormattedText text={pageTitle} />\\n    </h1>\\n  {/if}\\n</div>\\n\\n<style>.page-icon {\\n  position: relative;\\n  font-size: 70px;\\n}\\n.page-icon.image {\\n  height: 90px;\\n  margin-bottom: 30px;\\n}\\n.page-cover {\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 100vw;\\n  max-width: 100%;\\n  height: 300px;\\n  background-size: cover;\\n  background-position: center;\\n}\\n.page-cover-placeholder {\\n  height: 250px;\\n}\\n.no-page-cover-spacer {\\n  height: 50px;\\n}</style>\\n"],"names":[],"mappings":"AAgDO,UAAU,cAAC,CAAC,AACjB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,UAAU,MAAM,cAAC,CAAC,AAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,WAAW,cAAC,CAAC,AACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KAAK,CACb,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,AAC7B,CAAC,AACD,uBAAuB,cAAC,CAAC,AACvB,MAAM,CAAE,KAAK,AACf,CAAC,AACD,qBAAqB,cAAC,CAAC,AACrB,MAAM,CAAE,IAAI,AACd,CAAC"}'
};
var Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let {block} = $$props;
  const pageTitle = (_a = block.properties) === null || _a === void 0 ? void 0 : _a.title;
  const pageIcon = (_b = block.format) === null || _b === void 0 ? void 0 : _b.page_icon;
  const pageCover = (_c = block.format) === null || _c === void 0 ? void 0 : _c.page_cover;
  const pageCoverPosition = ((_d = block.format) === null || _d === void 0 ? void 0 : _d.page_cover_position) * 100;
  const pageIconImage = (pageIcon === null || pageIcon === void 0 ? void 0 : pageIcon.startsWith("http")) ? getPageIconImageUrl(block) : null;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  $$result.css.add(css$4);
  return `<div class="${"page-header"}">${pageCover ? `<div class="${"page-cover svelte-73humg"}" style="${"background-image: \n      url(" + escape2(getPageCoverUrl(pageCover)) + ");\n       background-position-y: calc(100% - " + escape2(pageCoverPosition) + "%)"}"></div>
    <div class="${"page-cover-placeholder svelte-73humg"}"></div>` : `<div class="${"no-page-cover-spacer svelte-73humg"}"></div>`}
  ${pageIcon ? `${pageIconImage ? `<img${add_attribute("src", getPageIconImageUrl(block).toString(), 0)} class="${"page-icon image svelte-73humg"}" alt="${"test"}">` : `<span class="${"page-icon svelte-73humg"}">${escape2(pageIcon)}</span>`}` : ``}

  ${pageTitle ? `<h1 class="${"page-title"}">${validate_component(FormattedText, "FormattedText").$$render($$result, {text: pageTitle}, {}, {})}</h1>` : ``}
</div>`;
});
var blockTypeComponentMap = {
  page: Page$1,
  error: Error$1,
  text: Text,
  header: Header,
  sub_header: SubHeader,
  sub_sub_header: SubSubHeader,
  to_do: ToDo,
  image: Image,
  quote: Quote,
  collection_view_page: CollectionViewPage,
  list: List,
  column_list: ColumnList,
  column: Column,
  divider: Divider,
  code: Code,
  equation: Equation
};
function mapNotionComponent(block) {
  const componentBlock = blockTypeComponentMap[block.type];
  return componentBlock !== null && componentBlock !== void 0 ? componentBlock : Error$1;
}
var BlockRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {block} = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  return `${block.type === "column_list" ? `${validate_component(ColumnList, "ColumnList").$$render($$result, {}, {}, {
    default: () => `${each(block.content, (column) => `${validate_component(Column, "Column").$$render($$result, {block: column}, {}, {
      default: () => `${each(column.content, (columnContent) => `${validate_component(BlockRenderer, "svelte:self").$$render($$result, {block: columnContent}, {}, {})}`)}
      `
    })}`)}`
  })}` : `${validate_component(mapNotionComponent(block) || missing_component, "svelte:component").$$render($$result, {block}, {}, {})}`}`;
});
var css$3 = {
  code: "section.sotion *{box-sizing:border-box}:root{--sotion-column-gap:20px}.error.svelte-1xy2vh3{color:red}",
  map: '{"version":3,"file":"Sotion.svelte","sources":["Sotion.svelte"],"sourcesContent":["<script>;\\nimport BlockRenderer from \\"./BlockRenderer.svelte\\";\\n/** This needs to be the output of sotion.fetchPage() or sotion.slugPage() */\\nexport let blocks;\\nlet parsedBlocks;\\n$: if (blocks) {\\n    // Parses the json string into a object\\n    const rawParsedBlocks = JSON.parse(blocks);\\n    // Nested pages also inlcude the pages above them, this removes them.\\n    const duplicatePageIds = [];\\n    rawParsedBlocks.forEach((block, index) => {\\n        if (index && block.type === \\"page\\") {\\n            duplicatePageIds.push(index);\\n        }\\n    });\\n    duplicatePageIds\\n        .reverse()\\n        .forEach((index) => rawParsedBlocks.splice(index, 1));\\n    parsedBlocks = rawParsedBlocks;\\n}\\n</script>\\n\\n{#if parsedBlocks}\\n  <section class=\\"sotion\\">\\n    {#each parsedBlocks as block}\\n      <BlockRenderer {block} />\\n    {/each}\\n  </section>\\n{:else}\\n  <div class=\\"error\\">The given blocks are not valid</div>\\n{/if}\\n\\n<style>:global(section.sotion *) {\\n  box-sizing: border-box;\\n}\\n:root {\\n  --sotion-column-gap: 20px;\\n}\\n.error {\\n  color: red;\\n}</style>\\n"],"names":[],"mappings":"AAgCe,gBAAgB,AAAE,CAAC,AAChC,UAAU,CAAE,UAAU,AACxB,CAAC,AACD,KAAK,AAAC,CAAC,AACL,mBAAmB,CAAE,IAAI,AAC3B,CAAC,AACD,MAAM,eAAC,CAAC,AACN,KAAK,CAAE,GAAG,AACZ,CAAC"}'
};
var Sotion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {blocks} = $$props;
  let parsedBlocks;
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  $$result.css.add(css$3);
  {
    if (blocks) {
      const rawParsedBlocks = JSON.parse(blocks);
      const duplicatePageIds = [];
      rawParsedBlocks.forEach((block, index2) => {
        if (index2 && block.type === "page") {
          duplicatePageIds.push(index2);
        }
      });
      duplicatePageIds.reverse().forEach((index2) => rawParsedBlocks.splice(index2, 1));
      parsedBlocks = rawParsedBlocks;
    }
  }
  return `${parsedBlocks ? `<section class="${"sotion svelte-1xy2vh3"}">${each(parsedBlocks, (block) => `${validate_component(BlockRenderer, "BlockRenderer").$$render($$result, {block}, {}, {})}`)}</section>` : `<div class="${"error svelte-1xy2vh3"}">The given blocks are not valid</div>`}`;
});
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var NavigationLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let {path} = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  isActive = path === "/" ? $page.path === path : $page.path.startsWith(path);
  $$unsubscribe_page();
  return `<a${add_attribute("href", path, 0)} class="${"text-lg  hover:text-black " + escape2(isActive ? "underline text-black" : "text-gray")}">${slots.default ? slots.default({}) : ``}</a>`;
});
var NavigationBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"h-24 p-6 flex justify-between items-center w-full max-w-7xl mx-auto"}"><a href="${"/"}" class="${"flex items-end space-x-4 h-full"}"><img src="${"/logo.svg"}" alt="${"Logo"}" class="${"h-full max-h-full rounded-lg hover:text-opacity-25 transition-all"}">
    <h1 class="${"text-3xl font-thin hidden sm:block"}">Kai Art &amp; Design</h1></a>

  <ul class="${"flex space-x-5 items-end h-full"}"><li>${validate_component(NavigationLink, "NavigationLink").$$render($$result, {path: "/"}, {}, {default: () => `Home`})}</li>
    <li>${validate_component(NavigationLink, "NavigationLink").$$render($$result, {path: "/work"}, {}, {default: () => `Werke`})}</li>
    <li>${validate_component(NavigationLink, "NavigationLink").$$render($$result, {path: "/portrait"}, {}, {default: () => `Portrait`})}</li>
    <li>${validate_component(NavigationLink, "NavigationLink").$$render($$result, {path: "/contact"}, {}, {default: () => `Kontakt`})}</li></ul></nav>`;
});
var css$2 = {
  code: ".white-border{box-shadow:0 0 0 0.6em #655}",
  map: `{"version":3,"file":"$layout.svelte","sources":["$layout.svelte"],"sourcesContent":["<script context=\\"module\\">\\n  import \\"virtual:windi.css\\";\\n  import { sotion } from \\"sotion\\";\\n\\n  export function load({ fetch }) {\\n    sotion.setFetch(fetch);\\n    return {};\\n  }\\n</script>\\n\\n<script lang=\\"ts\\">import NavigationBar from \\"../lib/navigationBar/NavigationBar.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nconst { path } = $page;\\nlet navigationBarHeight;\\n</script>\\n\\n<!-- Using flex with flex-grow on the slot doesn't work on safari, that's why we do it programatically \u{1F972} -->\\n<div class=\\"w-full h-full bg-gray rounded-xl p-2\\">\\n  <div class=\\"h-full bg-white min-h-full rounded-xl overflow-hidden\\">\\n    {#if path !== \\"/\\"}\\n      <div bind:clientHeight={navigationBarHeight}>\\n        <NavigationBar />\\n      </div>\\n    {/if}\\n    <div\\n      class=\\"overflow-auto\\"\\n      style=\\"height: calc(100% - {navigationBarHeight ?? 0}px);\\"\\n    >\\n      <slot />\\n    </div>\\n  </div>\\n</div>\\n\\n<style global>:global(.white-border) {\\n  box-shadow: 0 0 0 0.6em #655;\\n}</style>\\n"],"names":[],"mappings":"AAiCsB,aAAa,AAAE,CAAC,AACpC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,IAAI,AAC9B,CAAC"}`
};
function load$4({fetch: fetch22}) {
  sotion.setFetch(fetch22);
  return {};
}
var $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const {path} = $page;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `
<div class="${"w-full h-full bg-gray rounded-xl p-2"}"><div class="${"h-full bg-white min-h-full rounded-xl overflow-hidden"}">${path !== "/" ? `<div>${validate_component(NavigationBar, "NavigationBar").$$render($$result, {}, {}, {})}</div>` : ``}
    <div class="${"overflow-auto"}" style="${"height: calc(100% - " + escape2(0) + "px);"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout,
  load: load$4
});
function load$3({error: error2, status}) {
  return {props: {error: error2, status}};
}
var Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error2.message)}</p>


${error2.stack ? `<pre>${escape2(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error2,
  load: load$3
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img src="${"icons/hamburger.svg"}" alt="${"Menu"}">`;
});
var css$1 = {
  code: 'nav{position:relative}nav::after{content:"";position:absolute;width:100%;height:100%;background:inherit;top:0;z-index:-1;transform-origin:bottom left;transform:skewY(-8deg)}body{--tw-bg-opacity:1 !important;background-color:rgba(28, 28, 28, var(--tw-bg-opacity)) !important}strike{text-decoration-thickness:3px}.w-menu{width:500px}',
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n  import Hambuger from \\"$lib/landing/Hambuger.svelte\\";\\n\\n  let mainHeight;\\n</script>\\n\\n<main class=\\"h-full min-h-150 flex relative\\" bind:clientHeight={mainHeight}>\\n  <!-- Mobile aslant top -->\\n  <nav\\n    class=\\"w-130 h-full bg-primary -md:w-full -md:absolute -md:bottom-0 -md:h-auto -md:z-10\\"\\n  >\\n    <!-- Mobile Nav -->\\n    <nav class=\\"md:hidden\\">\\n      <img\\n        class=\\"ml-auto mr-10 mb-5 w-12\\"\\n        src=\\"icons/hamburger.svg\\"\\n        alt=\\"Menu\\"\\n      />\\n    </nav>\\n\\n    <div class=\\"m-10\\" />\\n\\n    <div\\n      class=\\"flex justify-center items-center space-x-4 text-2xl sm:text-3xl md:text-lg\\"\\n    >\\n      <a class=\\"text-smoke\\">Email</a>\\n      <div class=\\"bg-smoke rounded-full w-1 h-1\\" />\\n      <a class=\\"text-smoke\\">Tel</a>\\n      <div class=\\"bg-smoke rounded-full w-1 h-1\\" />\\n      <a class=\\"text-smoke\\">Instagram</a>\\n    </div>\\n\\n    <div class=\\"m-10 md:m-52\\" />\\n\\n    <ul class=\\"flex flex-col items-center space-y-8 -md:hidden\\">\\n      <li>\\n        <a class=\\"text-smoke text-5xl font-light\\" href=\\"work\\"\\n          ><strike>Werke</strike></a\\n        >\\n      </li>\\n      <li>\\n        <a class=\\"text-smoke text-5xl\\" href=\\"portrait\\"\\n          ><strike>Portrait</strike></a\\n        >\\n      </li>\\n      <li>\\n        <a class=\\"text-smoke text-5xl\\" href=\\"contact\\"\\n          ><strike>Kontakt</strike></a\\n        >\\n      </li>\\n    </ul>\\n  </nav>\\n\\n  <section\\n    class=\\"h-full flex-grow bg-gray relative\\"\\n    style=\\"height: {mainHeight}px;\\"\\n  >\\n    <img\\n      src=\\"images/flex.png\\"\\n      alt=\\"Kai\\"\\n      class=\\"absolute h-full w-full object-cover\\"\\n    />\\n    <h1\\n      class=\\"z-20 absolute bottom-48 w-full text-center md:w-auto md:bottom-7 md:text-8xl md:right-0 text-4xl  lg:text-9xl whitespace-nowrap text-smoke\\"\\n    >\\n      Kai Art & Design\\n    </h1>\\n  </section>\\n</main>\\n\\n<style global>:global(nav) {\\n  position: relative;\\n}\\n:global(nav::after) {\\n  content: \\"\\";\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background: inherit;\\n  top: 0;\\n  z-index: -1;\\n  transform-origin: bottom left;\\n  transform: skewY(-8deg);\\n}\\n:global(body) {\\n  --tw-bg-opacity: 1 !important;\\n  background-color: rgba(28, 28, 28, var(--tw-bg-opacity)) !important;\\n}\\n:global(strike) {\\n  text-decoration-thickness: 3px;\\n}\\n:global(.w-menu) {\\n  width: 500px;\\n}</style>\\n"],"names":[],"mappings":"AAsEsB,GAAG,AAAE,CAAC,AAC1B,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACO,UAAU,AAAE,CAAC,AACnB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EAAE,CACX,gBAAgB,CAAE,MAAM,CAAC,IAAI,CAC7B,SAAS,CAAE,MAAM,KAAK,CAAC,AACzB,CAAC,AACO,IAAI,AAAE,CAAC,AACb,eAAe,CAAE,EAAE,UAAU,CAC7B,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,UAAU,AACrE,CAAC,AACO,MAAM,AAAE,CAAC,AACf,yBAAyB,CAAE,GAAG,AAChC,CAAC,AACO,OAAO,AAAE,CAAC,AAChB,KAAK,CAAE,KAAK,AACd,CAAC"}'
};
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainHeight;
  $$result.css.add(css$1);
  return `<main class="${"h-full min-h-150 flex relative"}">
  <nav class="${"w-130 h-full bg-primary -md:w-full -md:absolute -md:bottom-0 -md:h-auto -md:z-10"}">
    <nav class="${"md:hidden"}"><img class="${"ml-auto mr-10 mb-5 w-12"}" src="${"icons/hamburger.svg"}" alt="${"Menu"}"></nav>

    <div class="${"m-10"}"></div>

    <div class="${"flex justify-center items-center space-x-4 text-2xl sm:text-3xl md:text-lg"}"><a class="${"text-smoke"}">Email</a>
      <div class="${"bg-smoke rounded-full w-1 h-1"}"></div>
      <a class="${"text-smoke"}">Tel</a>
      <div class="${"bg-smoke rounded-full w-1 h-1"}"></div>
      <a class="${"text-smoke"}">Instagram</a></div>

    <div class="${"m-10 md:m-52"}"></div>

    <ul class="${"flex flex-col items-center space-y-8 -md:hidden"}"><li><a class="${"text-smoke text-5xl font-light"}" href="${"work"}"><strike>Werke</strike></a></li>
      <li><a class="${"text-smoke text-5xl"}" href="${"portrait"}"><strike>Portrait</strike></a></li>
      <li><a class="${"text-smoke text-5xl"}" href="${"contact"}"><strike>Kontakt</strike></a></li></ul></nav>

  <section class="${"h-full flex-grow bg-gray relative"}" style="${"height: " + escape2(mainHeight) + "px;"}"><img src="${"images/flex.png"}" alt="${"Kai"}" class="${"absolute h-full w-full object-cover"}">
    <h1 class="${"z-20 absolute bottom-48 w-full text-center md:w-auto md:bottom-7 md:text-8xl md:right-0 text-4xl  lg:text-9xl whitespace-nowrap text-smoke"}">Kai Art &amp; Design
    </h1></section>
</main>`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
function isEven(number) {
  return number % 2 === 0;
}
var Oldindex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    {
      title: "Kakteen",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
		  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
		  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
		  amet.`,
      image: "/images/plant-2.png",
      path: "/plant-2"
    },
    {
      title: "Ringe",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
		  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
		  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
		  amet.`,
      image: "/images/plant-3.png",
      path: "/rings"
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>Kai Art &amp; Design</title>`, ""}`, ""}

<main class="${"bg-white rounded-tl-3xl rounded-tr-3xl"}"><section class="${"max-w-7xl mx-auto p-5 sm:p-20 space-y-10"}"><div class="${"relative"}"><img src="${"/images/header.png"}" alt="${"Header"}" class="${"w-full h-72 object-cover object-top"}">
			<a href="${"/portrait"}" class="${"absolute bottom-0 right-0 py-2 px-3 rounded-tl bg-white"}">About Me
			</a></div>

		${each(items, (item, index2) => `<article class="${"flex flex-col-reverse sm:" + escape2(isEven(index2) ? "flex-row" : "flex-row-reverse")}"><a${add_attribute("href", item.path, 0)} class="${"secondary mt-5 sm:m-0 w-full sm:hidden sm:w-44 mx-auto"}">Mehr Ansehen</a>

				<section class="${"flex-1 flex max-h-60 mt-5 sm:m-0 sm:max-h-96 bg-gray rounded-md overflow-hidden"}"><img${add_attribute("src", item.image, 0)} alt="${"Plant 1"}" class="${"w-full max-h-full object-cover object-bottom"}"></section>

				<div class="${"sm:m-5"}"></div>

				<section class="${"flex-1 flex flex-col"}"><h1 class="${"font-semibold text-3xl"}">${escape2(item.title)}</h1>
					<p class="${""}">${escape2(item.description)}</p>

					<div class="${"sm:m-3"}"></div>

					<a${add_attribute("href", item.path, 0)} class="${"secondary mt-auto w-full hidden sm:block sm:w-44 mx-auto"}">Mehr Ansehen</a></section>
			</article>`)}</section></main>

<footer class="${"h-56 bg-accent"}"><div class="${"max-w-7xl mx-auto h-full p-5 sm:px-20"}"><div class="${"flex flex-col h-full"}"><h1 class="${"text-2xl text-white"}">Interessiert an meinen Werken?</h1>
			<h2 class="${"text-xl text-gray"}">Kontaktiere mich per Email</h2>
			<div class="${"mt-auto text-white"}">\xA9 2021 Kai M\xE4der</div></div></div></footer>`;
});
var oldindex = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Oldindex
});
var Portrait = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Portrait</title>`, ""}`, ""}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});
var portrait = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Portrait
});
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"max-w-7xl mx-auto px-5 sm:px-20 min-h-full"}">${slots.default ? slots.default({}) : ``}</main>`;
});
var css = {
  code: ".sotion .no-page-cover-spacer{height:0px}.sotion .page-title{font-size:1.5rem;line-height:2rem}.sotion .text{--tw-text-opacity:1;color:rgba(128, 128, 128, var(--tw-text-opacity))}",
  map: `{"version":3,"file":"contact.svelte","sources":["contact.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport async function load() {\\n\\t\\treturn {\\n\\t\\t\\tprops: {\\n\\t\\t\\t\\tblocks: await sotion.fetchPage('7cbab3af4d124ebb8e373ff153943a76')\\n\\t\\t\\t}\\n\\t\\t};\\n\\t}\\n</script>\\n\\n<script>\\n\\timport { sotion, Sotion } from 'sotion';\\n\\timport Page from '../lib/Page.svelte';\\n\\n\\texport let blocks;\\n</script>\\n\\n<Page>\\n\\t<div class=\\"bg-white rounded-lg flex flex-col md:flex-row p-10 h-full justify-between\\">\\n\\t\\t<div class=\\"flex flex-col\\">\\n\\t\\t\\t<Sotion {blocks} />\\n\\t\\t\\t<a href=\\"kai@m\xE4der.ch\\" class=\\"secondary mt-5 md:mt-auto \\">Email verfassen</a>\\n\\t\\t</div>\\n\\t\\t<div class=\\"mt-5\\">\\n\\t\\t\\t<img src=\\"images/weed.png\\" alt=\\"Kai\\" class=\\"w-full md:w-auto\\" />\\n\\t\\t</div>\\n\\t</div>\\n</Page>\\n\\n<style global>:global(.sotion) :global(.no-page-cover-spacer) {\\n  height: 0px;\\n}\\n:global(.sotion) :global(.page-title) {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n:global(.sotion) :global(.text) {\\n  --tw-text-opacity: 1;\\n  color: rgba(128, 128, 128, var(--tw-text-opacity));\\n}</style>\\n"],"names":[],"mappings":"AA6BsB,OAAO,AAAC,CAAC,AAAQ,qBAAqB,AAAE,CAAC,AAC7D,MAAM,CAAE,GAAG,AACb,CAAC,AACO,OAAO,AAAC,CAAC,AAAQ,WAAW,AAAE,CAAC,AACrC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,AACnB,CAAC,AACO,OAAO,AAAC,CAAC,AAAQ,KAAK,AAAE,CAAC,AAC/B,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC,AACpD,CAAC"}`
};
async function load$2() {
  return {
    props: {
      blocks: await sotion.fetchPage("7cbab3af4d124ebb8e373ff153943a76")
    }
  };
}
var Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {blocks} = $$props;
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  $$result.css.add(css);
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => `<div class="${"bg-white rounded-lg flex flex-col md:flex-row p-10 h-full justify-between"}"><div class="${"flex flex-col"}">${validate_component(Sotion, "Sotion").$$render($$result, {blocks}, {}, {})}
			<a href="${"kai@m\xE4der.ch"}" class="${"secondary mt-5 md:mt-auto "}">Email verfassen</a></div>
		<div class="${"mt-5"}"><img src="${"images/weed.png"}" alt="${"Kai"}" class="${"w-full md:w-auto"}"></div></div>`
  })}`;
});
var contact = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Contact,
  load: load$2
});
async function load$1() {
  sotion.setScope("fb38e374eb2c4048a443bdd52e95502d");
  return {props: {meta: await sotion.getScope()}};
}
var Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {meta} = $$props;
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  return `${$$result.head += `${$$result.title = `<title>Werke</title>`, ""}`, ""}

${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => `<a href="${"/work"}">Werke</a>

	<div class="${"m-5"}"></div>

	<section class="${" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"}">${each(meta, (workGroup) => `<article class="${"flex flex-col cursor-pointer"}"><div class="${"bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"}"><img class="${"h-96 w-full object-cover"}"${add_attribute("src", workGroup.image && workGroup.image[0].url, 0)}${add_attribute("alt", workGroup.Name, 0)}></div>
				<h1 class="${"text-xl"}">${escape2(workGroup.Name)}</h1>
			</article>`)}</section>`
  })}`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Work,
  load: load$1
});
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load({page: page2}) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    sotion.setScope("fb38e374eb2c4048a443bdd52e95502d");
    const {blocks, meta: workGroupMeta} = yield sotion.slugPage(page2.params.workGroup);
    const parsedBlocks = JSON.parse(blocks);
    const tableId = (_a = parsedBlocks.find((block) => block.type === "collection_view")) === null || _a === void 0 ? void 0 : _a.id;
    sotion.setScope(tableId);
    let meta = yield sotion.getScope();
    return {
      props: {
        meta,
        workGroupMeta,
        slug: page2.params.work
      }
    };
  });
}
var U5BworkGroupu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {meta} = $$props;
  let {workGroupMeta} = $$props;
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  if ($$props.workGroupMeta === void 0 && $$bindings.workGroupMeta && workGroupMeta !== void 0)
    $$bindings.workGroupMeta(workGroupMeta);
  return `${$$result.head += `${$$result.title = `<title>${escape2(workGroupMeta.Name)}</title>`, ""}`, ""}

${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => `<a href="${"/work"}">Werke</a> / <span>${escape2(workGroupMeta.Name)}</span>

  <div class="${"m-5"}"></div>

  <section class="${" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10"}">${each(meta, (work) => `<article class="${"flex flex-col cursor-pointer"}"><div class="${"bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"}"><img class="${"h-96 w-full object-cover"}"${add_attribute("src", work.image && work.image[0].url, 0)}${add_attribute("alt", work.Name, 0)}></div>
        <h1 class="${"text-xl"}">${escape2(work.Name)}</h1>
      </article>`)}</section>`
  })}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: U5BworkGroupu5D,
  load
});
var U5Bworku5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
var _work_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: U5Bworku5D
});

// .svelte/netlify/entry.js
async function handler(event) {
  const {path, httpMethod, headers, queryStringParameters, body, isBase64Encoded} = event;
  const query = new URLSearchParams();
  for (const k in queryStringParameters) {
    const value = queryStringParameters[k];
    value.split(", ").forEach((v) => {
      query.append(k, v);
    });
  }
  const rawBody = headers["content-type"] === "application/octet-stream" ? new TextEncoder("base64").encode(body).buffer : isBase64Encoded ? Buffer.from(body, "base64").toString() : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      headers: rendered.headers,
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
