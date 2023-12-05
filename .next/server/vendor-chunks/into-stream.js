"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/into-stream";
exports.ids = ["vendor-chunks/into-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/into-stream/index.js":
/*!*******************************************!*\
  !*** ./node_modules/into-stream/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst from = __webpack_require__(/*! from2 */ \"(ssr)/./node_modules/from2/index.js\");\nconst pIsPromise = __webpack_require__(/*! p-is-promise */ \"(ssr)/./node_modules/p-is-promise/index.js\");\n\nconst intoStream = input => {\n\tif (Array.isArray(input)) {\n\t\tinput = input.slice();\n\t}\n\n\tlet promise;\n\tlet iterator;\n\tlet asyncIterator;\n\n\tprepare(input);\n\n\tfunction prepare(value) {\n\t\tinput = value;\n\n\t\tif (\n\t\t\tinput instanceof ArrayBuffer ||\n\t\t\t(ArrayBuffer.isView(input) && !Buffer.isBuffer(input))\n\t\t) {\n\t\t\tinput = Buffer.from(input);\n\t\t}\n\n\t\tpromise = pIsPromise(input) ? input : null;\n\n\t\t// We don't iterate on strings and buffers since slicing them is ~7x faster\n\t\tconst shouldIterate = !promise && input[Symbol.iterator] && typeof input !== 'string' && !Buffer.isBuffer(input);\n\t\titerator = shouldIterate ? input[Symbol.iterator]() : null;\n\n\t\tconst shouldAsyncIterate = !promise && input[Symbol.asyncIterator];\n\t\tasyncIterator = shouldAsyncIterate ? input[Symbol.asyncIterator]() : null;\n\t}\n\n\treturn from(function reader(size, callback) {\n\t\tif (promise) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tawait prepare(await promise);\n\t\t\t\t\treader.call(this, size, callback);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tcallback(error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (iterator) {\n\t\t\tconst object = iterator.next();\n\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\treturn;\n\t\t}\n\n\t\tif (asyncIterator) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tconst object = await asyncIterator.next();\n\t\t\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tsetImmediate(callback, error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (input.length === 0) {\n\t\t\tsetImmediate(callback, null, null);\n\t\t\treturn;\n\t\t}\n\n\t\tconst chunk = input.slice(0, size);\n\t\tinput = input.slice(size);\n\n\t\tsetImmediate(callback, null, chunk);\n\t});\n};\n\nmodule.exports = intoStream;\n\nmodule.exports.object = input => {\n\tif (Array.isArray(input)) {\n\t\tinput = input.slice();\n\t}\n\n\tlet promise;\n\tlet iterator;\n\tlet asyncIterator;\n\n\tprepare(input);\n\n\tfunction prepare(value) {\n\t\tinput = value;\n\t\tpromise = pIsPromise(input) ? input : null;\n\t\titerator = !promise && input[Symbol.iterator] ? input[Symbol.iterator]() : null;\n\t\tasyncIterator = !promise && input[Symbol.asyncIterator] ? input[Symbol.asyncIterator]() : null;\n\t}\n\n\treturn from.obj(function reader(size, callback) {\n\t\tif (promise) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tawait prepare(await promise);\n\t\t\t\t\treader.call(this, size, callback);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tcallback(error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (iterator) {\n\t\t\tconst object = iterator.next();\n\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\treturn;\n\t\t}\n\n\t\tif (asyncIterator) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tconst object = await asyncIterator.next();\n\t\t\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tsetImmediate(callback, error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tthis.push(input);\n\n\t\tsetImmediate(callback, null, null);\n\t});\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50by1zdHJlYW0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixhQUFhLG1CQUFPLENBQUMsa0RBQU87QUFDNUIsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW93ZWIvLi9ub2RlX21vZHVsZXMvaW50by1zdHJlYW0vaW5kZXguanM/NDlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBmcm9tID0gcmVxdWlyZSgnZnJvbTInKTtcbmNvbnN0IHBJc1Byb21pc2UgPSByZXF1aXJlKCdwLWlzLXByb21pc2UnKTtcblxuY29uc3QgaW50b1N0cmVhbSA9IGlucHV0ID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgpO1xuXHR9XG5cblx0bGV0IHByb21pc2U7XG5cdGxldCBpdGVyYXRvcjtcblx0bGV0IGFzeW5jSXRlcmF0b3I7XG5cblx0cHJlcGFyZShpbnB1dCk7XG5cblx0ZnVuY3Rpb24gcHJlcGFyZSh2YWx1ZSkge1xuXHRcdGlucHV0ID0gdmFsdWU7XG5cblx0XHRpZiAoXG5cdFx0XHRpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8XG5cdFx0XHQoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSAmJiAhQnVmZmVyLmlzQnVmZmVyKGlucHV0KSlcblx0XHQpIHtcblx0XHRcdGlucHV0ID0gQnVmZmVyLmZyb20oaW5wdXQpO1xuXHRcdH1cblxuXHRcdHByb21pc2UgPSBwSXNQcm9taXNlKGlucHV0KSA/IGlucHV0IDogbnVsbDtcblxuXHRcdC8vIFdlIGRvbid0IGl0ZXJhdGUgb24gc3RyaW5ncyBhbmQgYnVmZmVycyBzaW5jZSBzbGljaW5nIHRoZW0gaXMgfjd4IGZhc3RlclxuXHRcdGNvbnN0IHNob3VsZEl0ZXJhdGUgPSAhcHJvbWlzZSAmJiBpbnB1dFtTeW1ib2wuaXRlcmF0b3JdICYmIHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0J1ZmZlcihpbnB1dCk7XG5cdFx0aXRlcmF0b3IgPSBzaG91bGRJdGVyYXRlID8gaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSgpIDogbnVsbDtcblxuXHRcdGNvbnN0IHNob3VsZEFzeW5jSXRlcmF0ZSA9ICFwcm9taXNlICYmIGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcblx0XHRhc3luY0l0ZXJhdG9yID0gc2hvdWxkQXN5bmNJdGVyYXRlID8gaW5wdXRbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgOiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGZyb20oZnVuY3Rpb24gcmVhZGVyKHNpemUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgcHJlcGFyZShhd2FpdCBwcm9taXNlKTtcblx0XHRcdFx0XHRyZWFkZXIuY2FsbCh0aGlzLCBzaXplLCBjYWxsYmFjayk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGl0ZXJhdG9yKSB7XG5cdFx0XHRjb25zdCBvYmplY3QgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIG9iamVjdC5kb25lID8gbnVsbCA6IG9iamVjdC52YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jSXRlcmF0b3IpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gYXdhaXQgYXN5bmNJdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBvYmplY3QuZG9uZSA/IG51bGwgOiBvYmplY3QudmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBudWxsKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjaHVuayA9IGlucHV0LnNsaWNlKDAsIHNpemUpO1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2Uoc2l6ZSk7XG5cblx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIGNodW5rKTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludG9TdHJlYW07XG5cbm1vZHVsZS5leHBvcnRzLm9iamVjdCA9IGlucHV0ID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgpO1xuXHR9XG5cblx0bGV0IHByb21pc2U7XG5cdGxldCBpdGVyYXRvcjtcblx0bGV0IGFzeW5jSXRlcmF0b3I7XG5cblx0cHJlcGFyZShpbnB1dCk7XG5cblx0ZnVuY3Rpb24gcHJlcGFyZSh2YWx1ZSkge1xuXHRcdGlucHV0ID0gdmFsdWU7XG5cdFx0cHJvbWlzZSA9IHBJc1Byb21pc2UoaW5wdXQpID8gaW5wdXQgOiBudWxsO1xuXHRcdGl0ZXJhdG9yID0gIXByb21pc2UgJiYgaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSA/IGlucHV0W1N5bWJvbC5pdGVyYXRvcl0oKSA6IG51bGw7XG5cdFx0YXN5bmNJdGVyYXRvciA9ICFwcm9taXNlICYmIGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA/IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogbnVsbDtcblx0fVxuXG5cdHJldHVybiBmcm9tLm9iaihmdW5jdGlvbiByZWFkZXIoc2l6ZSwgY2FsbGJhY2spIHtcblx0XHRpZiAocHJvbWlzZSkge1xuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCBwcmVwYXJlKGF3YWl0IHByb21pc2UpO1xuXHRcdFx0XHRcdHJlYWRlci5jYWxsKHRoaXMsIHNpemUsIGNhbGxiYWNrKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoaXRlcmF0b3IpIHtcblx0XHRcdGNvbnN0IG9iamVjdCA9IGl0ZXJhdG9yLm5leHQoKTtcblx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgbnVsbCwgb2JqZWN0LmRvbmUgPyBudWxsIDogb2JqZWN0LnZhbHVlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoYXN5bmNJdGVyYXRvcikge1xuXHRcdFx0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3QgPSBhd2FpdCBhc3luY0l0ZXJhdG9yLm5leHQoKTtcblx0XHRcdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIG9iamVjdC5kb25lID8gbnVsbCA6IG9iamVjdC52YWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnB1c2goaW5wdXQpO1xuXG5cdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBudWxsKTtcblx0fSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/into-stream/index.js\n");

/***/ })

};
;