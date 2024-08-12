/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
* {
  margin: 0;
  font-family: "Patrick Hand SC", cursive;
  font-weight: 400;
  font-style: normal;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

.cont {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
}
h1 {
  grid-column: 1/3;
  font-size: 50px;
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
  text-shadow: -3px 3px 0px black;
  color: whitesmoke;
}
form {
  grid-row: 1;
  grid-column: 4/6;
  display: flex;
  width: 50%;
}
.sun {
  height: 180px;
  width: 400px;
  grid-row: 2/4;
  grid-column: 1/3;
  color: whitesmoke;

  /* box-shadow:
    rgb(149, 156, 161) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
  border-radius: 200px;
}
.curr {
  height: 180px;
  width: 890px;
  grid-row: 2/4;
  grid-column: 3 / 7;

  color: white;
  /* box-shadow:
    rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px; */
  /* border-radius: 15px; */
  border-left: solid whitesmoke 1px;

  display: flex;
  align-items: end;
  justify-items: center;
}
.week {
  height: 300px;
  width: 98%;
  grid-row: 4/-1;
  grid-column: 1/-1;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  gap: 40px;
}
.week > div {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: 100px;
  width: 30%;
  border-radius: 50px;
  color: white;

  display: flex;
}
.search {
  height: 25px;
  width: 25px;
  fill: whitesmoke;
}
.search:hover {
  cursor: pointer;
}
button {
  border: none;
  background: none;
}
.icon-box {
  height: 100%;
  flex: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;
}
.curr-icon {
  height: 60%;
}
.curr > p {
  height: 50%;
  flex: 1.5;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}
.temp-box {
  height: 100%;
  flex: 0.5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.temp {
  font-size: 2.8rem;
}
.feelslike {
  font-size: 1.5rem;
}
.weekday > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.weekday > div > img {
  width: 40%;
}
.sun,
.sun > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sun > div {
  flex: 1;
  flex-direction: column;
}
#search {
  appearance: none;
  border: none;
  padding: 5px;
  width: 100%;
  border-bottom: solid 2px whitesmoke;
  font-size: 20px;
  background-color: #403f4c;
  color: whitesmoke;

  transition: all ease-in-out 400ms;
}
#search:focus {
  outline: none;
}
#search:focus:valid {
  border-bottom: solid 2px rgb(37, 202, 37);
}
#search:focus:invalid {
  border-bottom: solid 2px rgb(214, 40, 40);
}
#search::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
body {
  background-color: #403f4c;
}
.sunrise > .img,
.sunset > .img {
  fill: whitesmoke;
  width: 45%;
}
.sunset > p,
.sunrise > p {
  font-size: 1.3rem;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  background-color: #403f4c;
  border-radius: 50%;
  z-index: 10;
  width: 130px;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.loading.active {
  animation: loading 2s linear infinite;
}
@keyframes loading {
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(-360deg);
  }
}
.overlay {
  position: fixed;
  opacity: 0;
  transition: 200ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
.overlay.active {
  pointer-events: all;
  opacity: 1;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;CAGC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;EAEE,YAAY;AACd;AACA;EACE,SAAS;EACT,uCAAuC;EACvC,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB;EAClB,+BAA+B;EAC/B,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,UAAU;AACZ;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;;EAEjB;;uDAEqD;EACrD,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kBAAkB;;EAElB,YAAY;EACZ;;;0CAGwC;EACxC,yBAAyB;EACzB,iCAAiC;;EAEjC,aAAa;EACb,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,UAAU;EACV,cAAc;EACd,iBAAiB;;EAEjB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,6BAA6B;EAC7B,SAAS;AACX;AACA;EACE;;gDAE8C;EAC9C,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,YAAY;;EAEZ,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,SAAS;;EAET,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,SAAS;;EAET,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,SAAS;;EAET,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,OAAO;EACP,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,eAAe;EACf,yBAAyB;EACzB,iBAAiB;;EAEjB,iCAAiC;AACnC;AACA;EACE,aAAa;AACf;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,yBAAyB;AAC3B;AACA;;EAEE,gBAAgB;EAChB,UAAU;AACZ;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,qCAAqC;AACvC;AACA;EACE;IACE,mDAAmD;EACrD;EACA;IACE,yDAAyD;EAC3D;AACF;AACA;EACE,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,oBAAoB;AACtB;AACA;EACE,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap\");\n/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n}\n* {\n  margin: 0;\n  font-family: \"Patrick Hand SC\", cursive;\n  font-weight: 400;\n  font-style: normal;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.cont {\n  display: grid;\n  height: 100%;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-auto-columns: 1fr;\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n}\nh1 {\n  grid-column: 1/3;\n  font-size: 50px;\n  font-family: \"Permanent Marker\", cursive;\n  font-weight: 400;\n  font-style: normal;\n  text-shadow: -3px 3px 0px black;\n  color: whitesmoke;\n}\nform {\n  grid-row: 1;\n  grid-column: 4/6;\n  display: flex;\n  width: 50%;\n}\n.sun {\n  height: 180px;\n  width: 400px;\n  grid-row: 2/4;\n  grid-column: 1/3;\n  color: whitesmoke;\n\n  /* box-shadow:\n    rgb(149, 156, 161) 3px 3px 6px 0px inset,\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */\n  border-radius: 200px;\n}\n.curr {\n  height: 180px;\n  width: 890px;\n  grid-row: 2/4;\n  grid-column: 3 / 7;\n\n  color: white;\n  /* box-shadow:\n    rgba(17, 17, 26, 0.1) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 8px 24px,\n    rgba(17, 17, 26, 0.1) 0px 16px 48px; */\n  /* border-radius: 15px; */\n  border-left: solid whitesmoke 1px;\n\n  display: flex;\n  align-items: end;\n  justify-items: center;\n}\n.week {\n  height: 300px;\n  width: 98%;\n  grid-row: 4/-1;\n  grid-column: 1/-1;\n\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: space-evenly;\n  gap: 40px;\n}\n.week > div {\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n  height: 100px;\n  width: 30%;\n  border-radius: 50px;\n  color: white;\n\n  display: flex;\n}\n.search {\n  height: 25px;\n  width: 25px;\n  fill: whitesmoke;\n}\n.search:hover {\n  cursor: pointer;\n}\nbutton {\n  border: none;\n  background: none;\n}\n.icon-box {\n  height: 100%;\n  flex: 0.5;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.curr-icon {\n  height: 60%;\n}\n.curr > p {\n  height: 50%;\n  flex: 1.5;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n}\n.temp-box {\n  height: 100%;\n  flex: 0.5;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.temp {\n  font-size: 2.8rem;\n}\n.feelslike {\n  font-size: 1.5rem;\n}\n.weekday > div {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.weekday > div > img {\n  width: 40%;\n}\n.sun,\n.sun > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sun > div {\n  flex: 1;\n  flex-direction: column;\n}\n#search {\n  appearance: none;\n  border: none;\n  padding: 5px;\n  width: 100%;\n  border-bottom: solid 2px whitesmoke;\n  font-size: 20px;\n  background-color: #403f4c;\n  color: whitesmoke;\n\n  transition: all ease-in-out 400ms;\n}\n#search:focus {\n  outline: none;\n}\n#search:focus:valid {\n  border-bottom: solid 2px rgb(37, 202, 37);\n}\n#search:focus:invalid {\n  border-bottom: solid 2px rgb(214, 40, 40);\n}\n#search::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\nbody {\n  background-color: #403f4c;\n}\n.sunrise > .img,\n.sunset > .img {\n  fill: whitesmoke;\n  width: 45%;\n}\n.sunset > p,\n.sunrise > p {\n  font-size: 1.3rem;\n}\n.loading {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  background-color: #403f4c;\n  border-radius: 50%;\n  z-index: 10;\n  width: 130px;\n  height: 130px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loading.active {\n  animation: loading 2s linear infinite;\n}\n@keyframes loading {\n  0% {\n    transform: translate(-50%, -50%) scale(1) rotate(0);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1) rotate(-360deg);\n  }\n}\n.overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assign.js":
/*!***********************!*\
  !*** ./src/assign.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignData: () => (/* binding */ assignData)
/* harmony export */ });
const assignData = (data) => {
  const desc = document.querySelector(".desc");
  desc.textContent = data.days[0].description;

  const temp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feelslike");
  temp.textContent = data.days[0].temp + "°C";
  feelsLike.textContent = "Feels like" + " " + data.days[0].feelslike + "°";

  // Array that contains all days, convert datetime property into new Date and use getDay() to extract the day from datetime

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date1 = new Date(data.days[1].datetime);
  const date2 = new Date(data.days[2].datetime);
  const date3 = new Date(data.days[3].datetime);
  const date4 = new Date(data.days[4].datetime);
  const date5 = new Date(data.days[5].datetime);
  const date6 = new Date(data.days[6].datetime);

  const dates = [date1, date2, date3, date4, date5, date6];
  let dateIndex = 0;
  let dayIndex = 1;

  const weekDays = document.querySelectorAll(".weekday");

  for (let i = 0; i < weekDays.length; i++) {
    weekDays[i].children[1].textContent = days[dates[dateIndex].getDay()];
    weekDays[i].children[2].textContent = data.days[dayIndex].temp + "°C";
    dateIndex++;
    dayIndex++;
  }

  // function to convert 24 hour time into 12 hour
  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    console.log(hourString, minute);
    const hour = +hourString % 24;
    console.log(hour);
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  const riseTime = document.querySelector(".rise-time");
  const setTime = document.querySelector(".set-time");
  riseTime.textContent = formatTime(data.currentConditions.sunrise);
  setTime.textContent = formatTime(data.currentConditions.sunset);
};



/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignIcons: () => (/* binding */ assignIcons)
/* harmony export */ });
/* harmony import */ var _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/clear-day.svg */ "./src/assets/clear-day.svg");
/* harmony import */ var _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/clear-night.svg */ "./src/assets/clear-night.svg");
/* harmony import */ var _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cloudy.svg */ "./src/assets/cloudy.svg");
/* harmony import */ var _assets_fog_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fog.svg */ "./src/assets/fog.svg");
/* harmony import */ var _assets_hail_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/hail.svg */ "./src/assets/hail.svg");
/* harmony import */ var _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/partly-cloudy-day.svg */ "./src/assets/partly-cloudy-day.svg");
/* harmony import */ var _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/partly-cloudy-night.svg */ "./src/assets/partly-cloudy-night.svg");
/* harmony import */ var _assets_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/rain-snow-showers-day.svg */ "./src/assets/rain-snow-showers-day.svg");
/* harmony import */ var _assets_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/rain-snow-showers-night.svg */ "./src/assets/rain-snow-showers-night.svg");
/* harmony import */ var _assets_rain_snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/rain-snow.svg */ "./src/assets/rain-snow.svg");
/* harmony import */ var _assets_rain_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/rain.svg */ "./src/assets/rain.svg");
/* harmony import */ var _assets_showers_day_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/showers-day.svg */ "./src/assets/showers-day.svg");
/* harmony import */ var _assets_showers_night_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/showers-night.svg */ "./src/assets/showers-night.svg");
/* harmony import */ var _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/sleet.svg */ "./src/assets/sleet.svg");
/* harmony import */ var _assets_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/snow-showers-day.svg */ "./src/assets/snow-showers-day.svg");
/* harmony import */ var _assets_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/snow-showers-night.svg */ "./src/assets/snow-showers-night.svg");
/* harmony import */ var _assets_snow_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/snow.svg */ "./src/assets/snow.svg");
/* harmony import */ var _assets_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/thunder-rain.svg */ "./src/assets/thunder-rain.svg");
/* harmony import */ var _assets_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/thunder-showers-day.svg */ "./src/assets/thunder-showers-day.svg");
/* harmony import */ var _assets_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/thunder-showers-night.svg */ "./src/assets/thunder-showers-night.svg");
/* harmony import */ var _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/thunder.svg */ "./src/assets/thunder.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/wind.svg */ "./src/assets/wind.svg");
// import all icons























const icons = {
  clearday: _assets_clear_day_svg__WEBPACK_IMPORTED_MODULE_0__,
  clearnight: _assets_clear_night_svg__WEBPACK_IMPORTED_MODULE_1__,
  cloudy: _assets_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,
  fog: _assets_fog_svg__WEBPACK_IMPORTED_MODULE_3__,
  hail: _assets_hail_svg__WEBPACK_IMPORTED_MODULE_4__,
  partlycloudyday: _assets_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__,
  partlycloudynight: _assets_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__,
  rainsnowshowersday: _assets_rain_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_7__,
  rainsnowshowersnight: _assets_rain_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_8__,
  rainsnow: _assets_rain_snow_svg__WEBPACK_IMPORTED_MODULE_9__,
  rain: _assets_rain_svg__WEBPACK_IMPORTED_MODULE_10__,
  showersday: _assets_showers_day_svg__WEBPACK_IMPORTED_MODULE_11__,
  showersnight: _assets_showers_night_svg__WEBPACK_IMPORTED_MODULE_12__,
  sleet: _assets_sleet_svg__WEBPACK_IMPORTED_MODULE_13__,
  snowshowersday: _assets_snow_showers_day_svg__WEBPACK_IMPORTED_MODULE_14__,
  snowshowersnight: _assets_snow_showers_night_svg__WEBPACK_IMPORTED_MODULE_15__,
  snow: _assets_snow_svg__WEBPACK_IMPORTED_MODULE_16__,
  thunderrain: _assets_thunder_rain_svg__WEBPACK_IMPORTED_MODULE_17__,
  thundershowersday: _assets_thunder_showers_day_svg__WEBPACK_IMPORTED_MODULE_18__,
  thundershowersnight: _assets_thunder_showers_night_svg__WEBPACK_IMPORTED_MODULE_19__,
  thunder: _assets_thunder_svg__WEBPACK_IMPORTED_MODULE_20__,
  wind: _assets_wind_svg__WEBPACK_IMPORTED_MODULE_21__,
};

const assignIcons = (data) => {
  let currIcon = data.days[0].icon;
  currIcon = currIcon.replace(/-/g, "");
  console.log(currIcon);
  const currImg = document.querySelector(".curr-icon");
  currImg.src = icons[currIcon];

  const weekDays = document.querySelectorAll(".weekday");
  let dayCount = 0;
  for (let i = 0; i < weekDays.length; i++) {
    ++dayCount;
    weekDays[i].children[0].firstChild.src =
      icons[data.days[dayCount].icon.replace(/-/g, "")];
  }
};



/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loading: () => (/* binding */ loading)
/* harmony export */ });
const loading = (bool) => {
  const loading = document.querySelector(".loading");
  const overlay = document.querySelector(".overlay");

  if (bool) {
    loading.classList.add("active");
    overlay.classList.add("active");
  } else {
    loading.classList.remove("active");
    overlay.classList.remove("active");
  }
};



/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
const getWeatherData = async (loc) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=SF29LX5N55MTZUTLHKL48R3R6`
  );
  const data = await response.json();
  return data;
};



/***/ }),

/***/ "./src/assets/clear-day.svg":
/*!**********************************!*\
  !*** ./src/assets/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "305c2a36ccc255b7586c.svg";

/***/ }),

/***/ "./src/assets/clear-night.svg":
/*!************************************!*\
  !*** ./src/assets/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e7078fd684c0e199ffd.svg";

/***/ }),

/***/ "./src/assets/cloudy.svg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f34a511fe003e5fe6624.svg";

/***/ }),

/***/ "./src/assets/fog.svg":
/*!****************************!*\
  !*** ./src/assets/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbe140f92378ba6a052e.svg";

/***/ }),

/***/ "./src/assets/hail.svg":
/*!*****************************!*\
  !*** ./src/assets/hail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b967f0f364d837e5df0.svg";

/***/ }),

/***/ "./src/assets/loading.svg":
/*!********************************!*\
  !*** ./src/assets/loading.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80fcf176ba7a8bc1d522.svg";

/***/ }),

/***/ "./src/assets/magnify.svg":
/*!********************************!*\
  !*** ./src/assets/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/assets/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dabda635b8d3136d3005.svg";

/***/ }),

/***/ "./src/assets/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/assets/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c2e2db448c82579712f.svg";

/***/ }),

/***/ "./src/assets/rain-snow-showers-day.svg":
/*!**********************************************!*\
  !*** ./src/assets/rain-snow-showers-day.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a672a2d7f1aab49701cc.svg";

/***/ }),

/***/ "./src/assets/rain-snow-showers-night.svg":
/*!************************************************!*\
  !*** ./src/assets/rain-snow-showers-night.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96e1173f01eee0e9ab7b.svg";

/***/ }),

/***/ "./src/assets/rain-snow.svg":
/*!**********************************!*\
  !*** ./src/assets/rain-snow.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9ec3072acd39286a610.svg";

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c39ccd0572d4ee44126.svg";

/***/ }),

/***/ "./src/assets/showers-day.svg":
/*!************************************!*\
  !*** ./src/assets/showers-day.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00a1fc589bcba26ecfd2.svg";

/***/ }),

/***/ "./src/assets/showers-night.svg":
/*!**************************************!*\
  !*** ./src/assets/showers-night.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c6d8bf4d8f84087e362.svg";

/***/ }),

/***/ "./src/assets/sleet.svg":
/*!******************************!*\
  !*** ./src/assets/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f114a77e04bb6aca84e.svg";

/***/ }),

/***/ "./src/assets/snow-showers-day.svg":
/*!*****************************************!*\
  !*** ./src/assets/snow-showers-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c964d42f10edd567e10b.svg";

/***/ }),

/***/ "./src/assets/snow-showers-night.svg":
/*!*******************************************!*\
  !*** ./src/assets/snow-showers-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27fd9f1b82864045e52c.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5bb28a4df42ee525fd0.svg";

/***/ }),

/***/ "./src/assets/thunder-rain.svg":
/*!*************************************!*\
  !*** ./src/assets/thunder-rain.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1a66c74f3744a1a1479.svg";

/***/ }),

/***/ "./src/assets/thunder-showers-day.svg":
/*!********************************************!*\
  !*** ./src/assets/thunder-showers-day.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b4762548f5bb8a142a0.svg";

/***/ }),

/***/ "./src/assets/thunder-showers-night.svg":
/*!**********************************************!*\
  !*** ./src/assets/thunder-showers-night.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "187e46bf234f39852fb3.svg";

/***/ }),

/***/ "./src/assets/thunder.svg":
/*!********************************!*\
  !*** ./src/assets/thunder.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dce1a4fc6b61773850d3.svg";

/***/ }),

/***/ "./src/assets/weather-sunset-down.svg":
/*!********************************************!*\
  !*** ./src/assets/weather-sunset-down.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5962fbf02946e74fc47e.svg";

/***/ }),

/***/ "./src/assets/weather-sunset-up.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-sunset-up.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c393436d8a3a16ec34db.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48c5145f0bc78e8cd565.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/icons.js");
/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign */ "./src/assign.js");
/* harmony import */ var _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/magnify.svg */ "./src/assets/magnify.svg");
/* harmony import */ var _assets_weather_sunset_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/weather-sunset-down.svg */ "./src/assets/weather-sunset-down.svg");
/* harmony import */ var _assets_weather_sunset_up_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/weather-sunset-up.svg */ "./src/assets/weather-sunset-up.svg");
/* harmony import */ var _assets_loading_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/loading.svg */ "./src/assets/loading.svg");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weather */ "./src/weather.js");









const searchBar = document.querySelector("#search");
const submit = document.querySelector('button[type="submit"]');
// let dataa;
submit.addEventListener("click", async (event) => {
  event.preventDefault();
  (0,_loading__WEBPACK_IMPORTED_MODULE_7__.loading)(true);
  // Run imported function that shows a loading icon
  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_8__.getWeatherData)(searchBar.value).catch((err) => {
    alert("Location not found, please enter a valid city");
  });
  console.log(data);
  // Run again to remove loading icon
  if (data) {
    (0,_loading__WEBPACK_IMPORTED_MODULE_7__.loading)(false);
    (0,_assign__WEBPACK_IMPORTED_MODULE_2__.assignData)(await data);
    (0,_icons__WEBPACK_IMPORTED_MODULE_1__.assignIcons)(await data);
  } else {
    (0,_loading__WEBPACK_IMPORTED_MODULE_7__.loading)(false);
  }
});
// Maybe you can put function calls inside a async function here that could await the result of weather data/display of weather data and then while awaiting for that, it could display a loading icon.

})();

/******/ })()
;
//# sourceMappingURL=main.js.map