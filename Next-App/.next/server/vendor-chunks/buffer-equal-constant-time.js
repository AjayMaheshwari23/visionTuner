"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-equal-constant-time";
exports.ids = ["vendor-chunks/buffer-equal-constant-time"];
exports.modules = {

/***/ "(rsc)/./node_modules/buffer-equal-constant-time/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/buffer-equal-constant-time/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*jshint node:true */ \nvar Buffer = (__webpack_require__(/*! buffer */ \"buffer\").Buffer); // browserify\nvar SlowBuffer = (__webpack_require__(/*! buffer */ \"buffer\").SlowBuffer);\nmodule.exports = bufferEq;\nfunction bufferEq(a, b) {\n    // shortcutting on type is necessary for correctness\n    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n        return false;\n    }\n    // buffer sizes should be well-known information, so despite this\n    // shortcutting, it doesn't leak any information about the *contents* of the\n    // buffers.\n    if (a.length !== b.length) {\n        return false;\n    }\n    var c = 0;\n    for(var i = 0; i < a.length; i++){\n        /*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR\n    }\n    return c === 0;\n}\nbufferEq.install = function() {\n    Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {\n        return bufferEq(this, that);\n    };\n};\nvar origBufEqual = Buffer.prototype.equal;\nvar origSlowBufEqual = SlowBuffer.prototype.equal;\nbufferEq.restore = function() {\n    Buffer.prototype.equal = origBufEqual;\n    SlowBuffer.prototype.equal = origSlowBufEqual;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWVxdWFsLWNvbnN0YW50LXRpbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLEdBQ25CO0FBQ0EsSUFBSUEsU0FBU0Msb0RBQXdCLEVBQUUsYUFBYTtBQUNwRCxJQUFJQyxhQUFhRCx3REFBNEI7QUFFN0NFLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsU0FBU0MsQ0FBQyxFQUFFQyxDQUFDO0lBRXBCLG9EQUFvRDtJQUNwRCxJQUFJLENBQUNQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDTixPQUFPUSxRQUFRLENBQUNELElBQUk7UUFDOUMsT0FBTztJQUNUO0lBRUEsaUVBQWlFO0lBQ2pFLDRFQUE0RTtJQUM1RSxXQUFXO0lBQ1gsSUFBSUQsRUFBRUcsTUFBTSxLQUFLRixFQUFFRSxNQUFNLEVBQUU7UUFDekIsT0FBTztJQUNUO0lBRUEsSUFBSUMsSUFBSTtJQUNSLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTCxFQUFFRyxNQUFNLEVBQUVFLElBQUs7UUFDakMsdUJBQXVCLEdBQ3ZCRCxLQUFLSixDQUFDLENBQUNLLEVBQUUsR0FBR0osQ0FBQyxDQUFDSSxFQUFFLEVBQUUsTUFBTTtJQUMxQjtJQUNBLE9BQU9ELE1BQU07QUFDZjtBQUVBTCxTQUFTTyxPQUFPLEdBQUc7SUFDakJaLE9BQU9hLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHWixXQUFXVyxTQUFTLENBQUNDLEtBQUssR0FBRyxTQUFTQSxNQUFNQyxJQUFJO1FBQ3ZFLE9BQU9WLFNBQVMsSUFBSSxFQUFFVTtJQUN4QjtBQUNGO0FBRUEsSUFBSUMsZUFBZWhCLE9BQU9hLFNBQVMsQ0FBQ0MsS0FBSztBQUN6QyxJQUFJRyxtQkFBbUJmLFdBQVdXLFNBQVMsQ0FBQ0MsS0FBSztBQUNqRFQsU0FBU2EsT0FBTyxHQUFHO0lBQ2pCbEIsT0FBT2EsU0FBUyxDQUFDQyxLQUFLLEdBQUdFO0lBQ3pCZCxXQUFXVyxTQUFTLENBQUNDLEtBQUssR0FBR0c7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXNpb250dW5lcjIvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWVxdWFsLWNvbnN0YW50LXRpbWUvaW5kZXguanM/ODJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBub2RlOnRydWUgKi9cbid1c2Ugc3RyaWN0JztcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7IC8vIGJyb3dzZXJpZnlcbnZhciBTbG93QnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuU2xvd0J1ZmZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJFcTtcblxuZnVuY3Rpb24gYnVmZmVyRXEoYSwgYikge1xuXG4gIC8vIHNob3J0Y3V0dGluZyBvbiB0eXBlIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdG5lc3NcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGJ1ZmZlciBzaXplcyBzaG91bGQgYmUgd2VsbC1rbm93biBpbmZvcm1hdGlvbiwgc28gZGVzcGl0ZSB0aGlzXG4gIC8vIHNob3J0Y3V0dGluZywgaXQgZG9lc24ndCBsZWFrIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgKmNvbnRlbnRzKiBvZiB0aGVcbiAgLy8gYnVmZmVycy5cbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgLypqc2hpbnQgYml0d2lzZTpmYWxzZSAqL1xuICAgIGMgfD0gYVtpXSBeIGJbaV07IC8vIFhPUlxuICB9XG4gIHJldHVybiBjID09PSAwO1xufVxuXG5idWZmZXJFcS5pbnN0YWxsID0gZnVuY3Rpb24oKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuZXF1YWwgPSBTbG93QnVmZmVyLnByb3RvdHlwZS5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKHRoYXQpIHtcbiAgICByZXR1cm4gYnVmZmVyRXEodGhpcywgdGhhdCk7XG4gIH07XG59O1xuXG52YXIgb3JpZ0J1ZkVxdWFsID0gQnVmZmVyLnByb3RvdHlwZS5lcXVhbDtcbnZhciBvcmlnU2xvd0J1ZkVxdWFsID0gU2xvd0J1ZmZlci5wcm90b3R5cGUuZXF1YWw7XG5idWZmZXJFcS5yZXN0b3JlID0gZnVuY3Rpb24oKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuZXF1YWwgPSBvcmlnQnVmRXF1YWw7XG4gIFNsb3dCdWZmZXIucHJvdG90eXBlLmVxdWFsID0gb3JpZ1Nsb3dCdWZFcXVhbDtcbn07XG4iXSwibmFtZXMiOlsiQnVmZmVyIiwicmVxdWlyZSIsIlNsb3dCdWZmZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiYnVmZmVyRXEiLCJhIiwiYiIsImlzQnVmZmVyIiwibGVuZ3RoIiwiYyIsImkiLCJpbnN0YWxsIiwicHJvdG90eXBlIiwiZXF1YWwiLCJ0aGF0Iiwib3JpZ0J1ZkVxdWFsIiwib3JpZ1Nsb3dCdWZFcXVhbCIsInJlc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/buffer-equal-constant-time/index.js\n");

/***/ })

};
;