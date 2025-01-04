"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaders/fragment.glsl */ \"./shaders/fragment.glsl\");\n\nvar _s = $RefreshSig$();\n\n\n// Import shaders\n\nfunction Home() {\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        // Setup Three.js\n        const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n        const camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n            canvas: canvasRef.current\n        });\n        renderer.setSize(800, 800);\n        // Create a plane with our shader\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(2, 2);\n        const material = new three__WEBPACK_IMPORTED_MODULE_3__.ShaderMaterial({\n            // Vertex shader is missing. Fix it. AI!\n            fragmentShader: _shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            glslVersion: three__WEBPACK_IMPORTED_MODULE_3__.GLSL3\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);\n        scene.add(mesh);\n        camera.position.z = 1;\n        // Render\n        renderer.render(scene, camera);\n        // Cleanup\n        return ()=>{\n            geometry.dispose();\n            material.dispose();\n            renderer.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            padding: \"2rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef\n        }, void 0, false, {\n            fileName: \"/Users/nek/GitHub/edgedb/glsl-loader/example/pages/index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nek/GitHub/edgedb/glsl-loader/example/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWDtBQUUvQixpQkFBaUI7QUFDcUM7QUFFdkMsU0FBU0k7O0lBQ3RCLE1BQU1DLFlBQVlKLDZDQUFNQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNLLFVBQVVDLE9BQU8sRUFBRTtRQUV4QixpQkFBaUI7UUFDakIsTUFBTUMsUUFBUSxJQUFJTCx3Q0FBVztRQUM3QixNQUFNTyxTQUFTLElBQUlQLHFEQUF3QixDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUs7UUFDL0QsTUFBTVMsV0FBVyxJQUFJVCxnREFBbUIsQ0FBQztZQUFFVyxRQUFRUixVQUFVQyxPQUFPO1FBQUM7UUFDckVLLFNBQVNHLE9BQU8sQ0FBQyxLQUFLO1FBRXRCLGlDQUFpQztRQUNqQyxNQUFNQyxXQUFXLElBQUliLGdEQUFtQixDQUFDLEdBQUc7UUFDNUMsTUFBTWUsV0FBVyxJQUFJZixpREFBb0IsQ0FBQztZQUN4Qyx3Q0FBd0M7WUFDeENDLGNBQWNBLGdFQUFBQTtZQUNkZ0IsYUFBYWpCLHdDQUFXO1FBQzFCO1FBQ0EsTUFBTW1CLE9BQU8sSUFBSW5CLHVDQUFVLENBQUNhLFVBQVVFO1FBQ3RDVixNQUFNZ0IsR0FBRyxDQUFDRjtRQUVWWixPQUFPZSxRQUFRLENBQUNDLENBQUMsR0FBRztRQUVwQixTQUFTO1FBQ1RkLFNBQVNlLE1BQU0sQ0FBQ25CLE9BQU9FO1FBRXZCLFVBQVU7UUFDVixPQUFPO1lBQ0xNLFNBQVNZLE9BQU87WUFDaEJWLFNBQVNVLE9BQU87WUFDaEJoQixTQUFTZ0IsT0FBTztRQUNsQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFLQyxPQUFPO1lBQUVDLFNBQVM7WUFBUUMsZ0JBQWdCO1lBQVVDLFNBQVM7UUFBTztrQkFDeEUsNEVBQUNuQjtZQUFPb0IsS0FBSzVCOzs7Ozs7Ozs7OztBQUduQjtHQXhDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8vIEltcG9ydCBzaGFkZXJzXG5pbXBvcnQgZnJhZ21lbnRTaGFkZXIgZnJvbSAnLi4vc2hhZGVycy9mcmFnbWVudC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAvLyBTZXR1cCBUaHJlZS5qc1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgMSwgLTEsIDAuMSwgMTApO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBjYW52YXM6IGNhbnZhc1JlZi5jdXJyZW50IH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUoODAwLCA4MDApO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGxhbmUgd2l0aCBvdXIgc2hhZGVyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgyLCAyKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAvLyBWZXJ0ZXggc2hhZGVyIGlzIG1pc3NpbmcuIEZpeCBpdC4gQUkhXG4gICAgICBmcmFnbWVudFNoYWRlcixcbiAgICAgIGdsc2xWZXJzaW9uOiBUSFJFRS5HTFNMMyxcbiAgICB9KTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICBzY2VuZS5hZGQobWVzaCk7XG5cbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDE7XG5cbiAgICAvLyBSZW5kZXJcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICAvLyBDbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcbiAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogJzJyZW0nIH19PlxuICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiVEhSRUUiLCJmcmFnbWVudFNoYWRlciIsIkhvbWUiLCJjYW52YXNSZWYiLCJjdXJyZW50Iiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsInNldFNpemUiLCJnZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwiZ2xzbFZlcnNpb24iLCJHTFNMMyIsIm1lc2giLCJNZXNoIiwiYWRkIiwicG9zaXRpb24iLCJ6IiwicmVuZGVyIiwiZGlzcG9zZSIsIm1haW4iLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});