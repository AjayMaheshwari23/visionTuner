"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mahek_Desktop_visionTuner_Next_App_src_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/register/route.ts */ \"(rsc)/./src/app/api/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"/home/mahek/Desktop/visionTuner/Next-App/src/app/api/register/route.ts\",\n    nextConfigOutput,\n    userland: _home_mahek_Desktop_visionTuner_Next_App_src_app_api_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbWFoZWslMkZEZXNrdG9wJTJGdmlzaW9uVHVuZXIlMkZOZXh0LUFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm1haGVrJTJGRGVza3RvcCUyRnZpc2lvblR1bmVyJTJGTmV4dC1BcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb250dW5lcjIvPzdkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbWFoZWsvRGVza3RvcC92aXNpb25UdW5lci9OZXh0LUFwcC9zcmMvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVnaXN0ZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmVnaXN0ZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9tYWhlay9EZXNrdG9wL3Zpc2lvblR1bmVyL05leHQtQXBwL3NyYy9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JlZ2lzdGVyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/db/config.ts":
/*!**********************************!*\
  !*** ./src/app/api/db/config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MONGO_URL = String(process__WEBPACK_IMPORTED_MODULE_1__.env.MONGO_URL);\nconst connection = {\n    isConnected: false\n};\nconst Connection_db = async ()=>{\n    try {\n        if (connection.isConnected) return;\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, {});\n        console.log(\"Database connected sucessfully\");\n        connection.isConnected = db.connections[0].readyState == 1;\n    } catch (error) {\n        console.log(\"Error while connecting with the database \", error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connection_db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYi9jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDRjtBQUU5QixNQUFNRSxZQUFZQyxPQUFPRix3Q0FBR0EsQ0FBQ0MsU0FBUztBQUN0QyxNQUFNRSxhQUFhO0lBQUVDLGFBQWE7QUFBSztBQUV2QyxNQUFNQyxnQkFBZ0I7SUFDcEIsSUFBSTtRQUNGLElBQUlGLFdBQVdDLFdBQVcsRUFBRTtRQUM1QixNQUFNRSxLQUFLLE1BQU1QLHVEQUFnQixDQUFDRSxXQUFXLENBQUM7UUFDOUNPLFFBQVFDLEdBQUcsQ0FBQztRQUVaTixXQUFXQyxXQUFXLEdBQUdFLEdBQUdJLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVUsSUFBSTtJQUUzRCxFQUFFLE9BQU9DLE9BQVk7UUFDbkJKLFFBQVFDLEdBQUcsQ0FBQyw2Q0FBNkNHLE1BQU1DLE9BQU87SUFDeEU7QUFDRjtBQUVBLGlFQUFlUixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlzaW9udHVuZXIyLy4vc3JjL2FwcC9hcGkvZGIvY29uZmlnLnRzP2VkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgZW52IH0gZnJvbSBcInByb2Nlc3NcIjtcblxuY29uc3QgTU9OR09fVVJMID0gU3RyaW5nKGVudi5NT05HT19VUkwpO1xuY29uc3QgY29ubmVjdGlvbiA9IHsgaXNDb25uZWN0ZWQ6IGZhbHNlfTtcblxuY29uc3QgQ29ubmVjdGlvbl9kYiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwsIHt9KTtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3RlZCBzdWNlc3NmdWxseVwiKTtcbiAgICBcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSA9PSAxO1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGNvbm5lY3Rpbmcgd2l0aCB0aGUgZGF0YWJhc2UgXCIsIGVycm9yLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uX2RiO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZW52IiwiTU9OR09fVVJMIiwiU3RyaW5nIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiQ29ubmVjdGlvbl9kYiIsImRiIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/db/config.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/register/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/register/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user */ \"(rsc)/./src/app/models/user.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _app_api_db_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/db/config */ \"(rsc)/./src/app/api/db/config.ts\");\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n\nconst jose = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/cjs/index.js\");\n\n(0,_app_api_db_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nfunction GET(request) {\n    const users = [\n        {\n            name: \"Ajay\",\n            status: \"Working...\"\n        }\n    ];\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(users);\n}\nasync function POST(request, response) {\n    try {\n        const data = await request.json();\n        const { username, email, password } = data;\n        const salt = await bcrypt.genSalt(10);\n        const hashPass = await bcrypt.hash(password, salt);\n        const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashPass\n        });\n        // console.log(newUser.username , newUser.email , newUser.password);\n        const already = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email: email\n        }) || await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username: username\n        });\n        if (already) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Username or Email Already taken\",\n                status: 400\n            });\n        }\n        await newUser.save();\n        const JTdata = {\n            user: {\n                id: newUser.id\n            }\n        };\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n        const jwtToken = await new jose.SignJWT(JTdata).setProtectedHeader({\n            alg: \"HS256\"\n        }).sign(secret);\n        (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().set(\"jwtToken\", jwtToken);\n        console.log(\"Successfully Registered & logged In\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"User registered successfully\",\n            status: 200,\n            jwtToken: jwtToken\n        });\n    } catch (error) {\n        console.error(\"Error during registration:\", error.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Internal Server Error\",\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEscUZBQXdCO0FBQ21CO0FBQ047QUFFckMsTUFBTUksU0FBU0osbUJBQU9BLENBQUMsd0RBQVU7QUFDakMsTUFBTUssTUFBTUwsbUJBQU9BLENBQUMsZ0VBQWM7QUFDSTtBQUN0QyxNQUFNTyxPQUFPUCxtQkFBT0EsQ0FBQztBQUMyQjtBQUVoRFEsOERBQWFBO0FBRU4sU0FBU0MsSUFBSUMsT0FBZ0I7SUFDbEMsTUFBTUMsUUFBUTtRQUNaO1lBQ0VDLE1BQU07WUFDTkMsUUFBUTtRQUNWO0tBQ0Q7SUFDRCxPQUFPWCxrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDSDtBQUMzQjtBQVFPLGVBQWVJLEtBQUtMLE9BQWdCLEVBQUVNLFFBQXlCO0lBQ3BFLElBQUk7UUFDRixNQUFNQyxPQUFpQixNQUFNUCxRQUFRSSxJQUFJO1FBQ3pDLE1BQU0sRUFBRUksUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUV0QyxNQUFNSSxPQUFPLE1BQU1qQixPQUFPa0IsT0FBTyxDQUFDO1FBQ2xDLE1BQU1DLFdBQVcsTUFBTW5CLE9BQU9vQixJQUFJLENBQUNKLFVBQVVDO1FBRTdDLE1BQU1JLFVBQVUsSUFBSXRCLG9EQUFJQSxDQUFDO1lBQ3ZCZTtZQUNBQztZQUNBQyxVQUFVRztRQUNaO1FBRUEsb0VBQW9FO1FBRXBFLE1BQU1HLFVBQ0osTUFBT3ZCLG9EQUFJQSxDQUFDd0IsT0FBTyxDQUFDO1lBQUVSLE9BQU9BO1FBQU0sTUFDbEMsTUFBTWhCLG9EQUFJQSxDQUFDd0IsT0FBTyxDQUFDO1lBQUVULFVBQVVBO1FBQVM7UUFDM0MsSUFBSVEsU0FBUztZQUNYLE9BQU94QixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUN2QmMsU0FBUztnQkFDVGYsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxNQUFNWSxRQUFRSSxJQUFJO1FBRWxCLE1BQU1DLFNBQVM7WUFDWEMsTUFBTztnQkFDUEMsSUFBR1AsUUFBUU8sRUFBRTtZQUNmO1FBQ0Y7UUFHQyxNQUFNQyxTQUFTLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBRTlELE1BQU1DLFdBQVcsTUFBTSxJQUFJaEMsS0FBS2lDLE9BQU8sQ0FBQ1YsUUFDckNXLGtCQUFrQixDQUFDO1lBQUVDLEtBQUs7UUFBUSxHQUNsQ0MsSUFBSSxDQUFDVjtRQUVUM0IscURBQU9BLEdBQUdzQyxHQUFHLENBQUMsWUFBYUw7UUFFM0JNLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE9BQU81QyxrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQ3ZCYyxTQUFTO1lBQ1RmLFFBQVE7WUFDUjBCLFVBQVNBO1FBQ1g7SUFFRixFQUFFLE9BQU9RLE9BQVk7UUFDbkJGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBLE1BQU1uQixPQUFPO1FBQ3pELE9BQU8xQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQ3ZCYyxTQUFTO1lBQ1RmLFFBQVE7UUFDVjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb250dW5lcjIvLi9zcmMvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS50cz9lY2JlIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiXG5jb25zdCBqb3NlID0gcmVxdWlyZSgnam9zZScpO1xuaW1wb3J0IENvbm5lY3Rpb25fZGIgZnJvbSBcIkAvYXBwL2FwaS9kYi9jb25maWdcIjtcblxuQ29ubmVjdGlvbl9kYigpO1xuXG5leHBvcnQgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgdXNlcnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJBamF5XCIsXG4gICAgICBzdGF0dXM6IFwiV29ya2luZy4uLlwiLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c2Vycyk7XG59XG5cbnR5cGUgUkVnaXN0ZXIgPSB7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YTogUkVnaXN0ZXIgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGRhdGE7XG5cbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xuICAgIGNvbnN0IGhhc2hQYXNzID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xuXG4gICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZDogaGFzaFBhc3MsXG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdVc2VyLnVzZXJuYW1lICwgbmV3VXNlci5lbWFpbCAsIG5ld1VzZXIucGFzc3dvcmQpO1xuXG4gICAgY29uc3QgYWxyZWFkeSA9XG4gICAgICAoYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGVtYWlsIH0pKSB8fFxuICAgICAgKGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lOiB1c2VybmFtZSB9KSk7XG4gICAgaWYgKGFscmVhZHkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgb3IgRW1haWwgQWxyZWFkeSB0YWtlblwiLFxuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xuXG4gICAgY29uc3QgSlRkYXRhID0ge1xuICAgICAgICB1c2VyIDoge1xuICAgICAgICBpZDpuZXdVc2VyLmlkXG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgIGNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcblxuICAgICBjb25zdCBqd3RUb2tlbiA9IGF3YWl0IG5ldyBqb3NlLlNpZ25KV1QoSlRkYXRhKVxuICAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiB9KVxuICAgICAgIC5zaWduKHNlY3JldCk7XG5cbiAgICBjb29raWVzKCkuc2V0KFwiand0VG9rZW5cIiAsIGp3dFRva2VuKTtcblxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IFJlZ2lzdGVyZWQgJiBsb2dnZWQgSW5cIik7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGp3dFRva2VuOmp3dFRva2VuXG4gICAgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgcmVnaXN0cmF0aW9uOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgICAgIHN0YXR1czogNTAwLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsIk5leHRSZXNwb25zZSIsIlVzZXIiLCJiY3J5cHQiLCJqd3QiLCJjb29raWVzIiwiam9zZSIsIkNvbm5lY3Rpb25fZGIiLCJHRVQiLCJyZXF1ZXN0IiwidXNlcnMiLCJuYW1lIiwic3RhdHVzIiwianNvbiIsIlBPU1QiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2hQYXNzIiwiaGFzaCIsIm5ld1VzZXIiLCJhbHJlYWR5IiwiZmluZE9uZSIsIm1lc3NhZ2UiLCJzYXZlIiwiSlRkYXRhIiwidXNlciIsImlkIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImp3dFRva2VuIiwiU2lnbkpXVCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNpZ24iLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst imageObjSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    id: {\n        type: Number,\n        required: true\n    },\n    url: {\n        type: String,\n        required: true\n    }\n});\nconst AnnotationboxSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    tl: {\n        type: Number,\n        required: true\n    },\n    tr: {\n        type: Number,\n        required: true\n    },\n    bl: {\n        type: Number,\n        required: true\n    },\n    br: {\n        type: Number,\n        required: true\n    }\n});\nconst annotationObjSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    id: {\n        type: Number,\n        required: true\n    },\n    coordinates: {\n        type: [\n            AnnotationboxSchema\n        ],\n        required: true\n    }\n});\nconst projectSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    projectId: {\n        type: Number,\n        required: true\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    categoryNumber: {\n        type: Number,\n        required: true\n    },\n    categories: {\n        type: [\n            String\n        ],\n        required: true\n    },\n    images: {\n        type: [\n            imageObjSchema\n        ],\n        required: true\n    },\n    annotations: {\n        type: [\n            annotationObjSchema\n        ],\n        required: true\n    },\n    model: {\n        type: String,\n        required: false\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    projects: {\n        type: [\n            projectSchema\n        ],\n        default: []\n    }\n});\nuserSchema.pre(\"save\", function(next) {\n    if (!this.projects) {\n        this.projects = [];\n    }\n    next();\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy91c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQXVDckQsTUFBTUMsaUJBQWlCLElBQUlELHdEQUFlLENBQVc7SUFDbkRHLElBQUk7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1JO1FBQVFGLFVBQVU7SUFBSztBQUN0QztBQUVBLE1BQU1HLHNCQUFzQixJQUFJVCx3REFBZSxDQUFnQjtJQUM3RFUsSUFBRztRQUFFTixNQUFNQztRQUFRQyxVQUFTO0lBQUk7SUFDaENLLElBQUc7UUFBRVAsTUFBTUM7UUFBUUMsVUFBUztJQUFJO0lBQ2hDTSxJQUFHO1FBQUVSLE1BQU1DO1FBQVFDLFVBQVM7SUFBSTtJQUNoQ08sSUFBRztRQUFFVCxNQUFNQztRQUFRQyxVQUFTO0lBQUk7QUFDbEM7QUFFQSxNQUFNUSxzQkFBc0IsSUFBSWQsd0RBQWUsQ0FBZ0I7SUFDN0RHLElBQUk7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ25DUyxhQUFhO1FBQUVYLE1BQU07WUFBQ0s7U0FBb0I7UUFBRUgsVUFBVTtJQUFLO0FBQzdEO0FBRUEsTUFBTVUsZ0JBQWdCLElBQUloQix3REFBZSxDQUFVO0lBQ2pEaUIsV0FBVztRQUFFYixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDMUNZLE9BQU87UUFBRWQsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQ3RDYSxhQUFhO1FBQUVmLE1BQU1JO1FBQVFGLFVBQVU7SUFBSztJQUM1Q2MsZ0JBQWdCO1FBQUVoQixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDL0NlLFlBQVk7UUFBRWpCLE1BQU07WUFBQ0k7U0FBTztRQUFFRixVQUFVO0lBQUs7SUFDN0NnQixRQUFRO1FBQUVsQixNQUFNO1lBQUNIO1NBQWU7UUFBRUssVUFBVTtJQUFLO0lBQ2pEaUIsYUFBYTtRQUFFbkIsTUFBTTtZQUFDVTtTQUFvQjtRQUFFUixVQUFVO0lBQUs7SUFDM0RrQixPQUFPO1FBQUVwQixNQUFNSTtRQUFRRixVQUFVO0lBQU07SUFDdkNtQixXQUFXO1FBQUVyQixNQUFNc0I7UUFBTUMsU0FBU0QsS0FBS0UsR0FBRztJQUFDO0FBQzdDO0FBRUEsTUFBTUMsYUFBYSxJQUFJN0Isd0RBQWUsQ0FBMEI7SUFDOUQ4QixVQUFVO1FBQ1IxQixNQUFNSTtRQUNORixVQUFVO1FBQ1Z5QixRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMNUIsTUFBTUk7UUFDTkYsVUFBVTtRQUNWeUIsUUFBUTtJQUNWO0lBQ0FFLFVBQVU7UUFDUjdCLE1BQU1JO1FBQ05GLFVBQVU7SUFDWjtJQUNBNEIsVUFBVTtRQUNSOUIsTUFBTTtZQUFDWTtTQUFjO1FBQ3JCVyxTQUFTLEVBQUU7SUFDYjtBQUNGO0FBRUFFLFdBQVdNLEdBQUcsQ0FBQyxRQUFRLFNBQVVDLElBQUk7SUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQ0YsUUFBUSxFQUFFO1FBQ2xCLElBQUksQ0FBQ0EsUUFBUSxHQUFHLEVBQUU7SUFDcEI7SUFDQUU7QUFDRjtBQUVBLE1BQU1DLE9BQ0pyQyx3REFBZSxDQUFDcUMsSUFBSSxJQUNwQnJDLHFEQUFjLENBQTBCLFFBQVE2QjtBQUVsRCxpRUFBZVEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Zpc2lvbnR1bmVyMi8uL3NyYy9hcHAvbW9kZWxzL3VzZXIudHM/MjM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIE1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmltcG9ydCB7IEltYWdlT2JqIH0gZnJvbSBcIkAvY29tcG9uZW50cy91cGxvYWQvVXBsb2FkSW1hZ2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uYm94e1xuICB0bDogbnVtYmVyO1xuICB0cjogbnVtYmVyO1xuICBibDogbnVtYmVyO1xuICBicjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25PYmoge1xuICBpZDogbnVtYmVyO1xuICBjb29yZGluYXRlczogQW5ub3RhdGlvbmJveFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICBwcm9qZWN0SWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnlOdW1iZXI6IG51bWJlcjtcbiAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gIGltYWdlczogSW1hZ2VPYmpbXTtcbiAgYW5ub3RhdGlvbnM6IEFubm90YXRpb25PYmpbXTtcbiAgbW9kZWw6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG5pbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHByb2plY3RzOiBQcm9qZWN0W107XG59XG5cbmludGVyZmFjZSBVc2VyRG9jdW1lbnQgZXh0ZW5kcyBVc2VyLCBEb2N1bWVudCB7fVxuXG5pbnRlcmZhY2UgVXNlck1vZGVsIGV4dGVuZHMgTW9kZWw8VXNlckRvY3VtZW50PiB7fVxuXG5jb25zdCBpbWFnZU9ialNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8SW1hZ2VPYmo+KHtcbiAgaWQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB1cmw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IEFubm90YXRpb25ib3hTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPEFubm90YXRpb25ib3g+KHtcbiAgdGw6eyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOnRydWV9LFxuICB0cjp7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6dHJ1ZX0sXG4gIGJsOnsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDp0cnVlfSxcbiAgYnI6eyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOnRydWV9XG59KVxuXG5jb25zdCBhbm5vdGF0aW9uT2JqU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxBbm5vdGF0aW9uT2JqPih7XG4gIGlkOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY29vcmRpbmF0ZXM6IHsgdHlwZTogW0Fubm90YXRpb25ib3hTY2hlbWFdLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IHByb2plY3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPFByb2plY3Q+KHtcbiAgcHJvamVjdElkOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGNhdGVnb3J5TnVtYmVyOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY2F0ZWdvcmllczogeyB0eXBlOiBbU3RyaW5nXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaW1hZ2VzOiB7IHR5cGU6IFtpbWFnZU9ialNjaGVtYV0sIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGFubm90YXRpb25zOiB7IHR5cGU6IFthbm5vdGF0aW9uT2JqU2NoZW1hXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbW9kZWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG59KTtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWE8VXNlckRvY3VtZW50LCBVc2VyTW9kZWw+KHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBlbWFpbDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB1bmlxdWU6IHRydWUsXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIHR5cGU6IFtwcm9qZWN0U2NoZW1hXSxcbiAgICBkZWZhdWx0OiBbXSxcbiAgfSxcbn0pO1xuXG51c2VyU2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLnByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICB9XG4gIG5leHQoKTtcbn0pO1xuXG5jb25zdCBVc2VyID1cbiAgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHxcbiAgbW9uZ29vc2UubW9kZWw8VXNlckRvY3VtZW50LCBVc2VyTW9kZWw+KFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImltYWdlT2JqU2NoZW1hIiwiU2NoZW1hIiwiaWQiLCJ0eXBlIiwiTnVtYmVyIiwicmVxdWlyZWQiLCJ1cmwiLCJTdHJpbmciLCJBbm5vdGF0aW9uYm94U2NoZW1hIiwidGwiLCJ0ciIsImJsIiwiYnIiLCJhbm5vdGF0aW9uT2JqU2NoZW1hIiwiY29vcmRpbmF0ZXMiLCJwcm9qZWN0U2NoZW1hIiwicHJvamVjdElkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5TnVtYmVyIiwiY2F0ZWdvcmllcyIsImltYWdlcyIsImFubm90YXRpb25zIiwibW9kZWwiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsInVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwcm9qZWN0cyIsInByZSIsIm5leHQiLCJVc2VyIiwibW9kZWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/semver","vendor-chunks/bcryptjs","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.ts&appDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmahek%2FDesktop%2FvisionTuner%2FNext-App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();