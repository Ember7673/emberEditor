module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0b25":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "129f":
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "145e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "170b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "182d":
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__("f8cd");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "219c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduceRight = __webpack_require__("d58f").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2954":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var speciesConstructor = __webpack_require__("4840");
var fails = __webpack_require__("d039");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "3280":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $lastIndexOf = __webpack_require__("e58c");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $findIndex = __webpack_require__("b727").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3c5d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var toLength = __webpack_require__("50c4");
var toOffset = __webpack_require__("182d");
var toObject = __webpack_require__("7b0b");
var fails = __webpack_require__("d039");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3fcc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $map = __webpack_require__("b727").map;
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5cc6":
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__("74e8");

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "5f96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "60bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayIterators = __webpack_require__("e260");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),

/***/ "621a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefineAll = __webpack_require__("e2cc");
var fails = __webpack_require__("d039");
var anInstance = __webpack_require__("19aa");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var IEEE754 = __webpack_require__("77a7");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var defineProperty = __webpack_require__("9bf2").f;
var arrayFill = __webpack_require__("81d5");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "6378":
/***/ (function(module, exports) {

/*
 * @Author: wangtengteng
 * @Date: 2020-11-16 14:59:37
 * @LastEditTime: 2020-11-16 14:59:40
 * @FillPath: Do not edit
 */
module.exports = function (api) {
  api.extendPackage({
    dependencies: {
      "axios": "^0.21.0",
      "element-ui": "^2.14.0"
    }
  }), api.injectImports(api.entryFile, "import ElementUI from 'element-ui';\n  import 'element-ui/lib/theme-chalk/index.css';\n  Vue.use(ElementUI);\n  import axios from 'axios';\n  Vue.prototype.$axios = axios;");
};

/***/ }),

/***/ "649e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $some = __webpack_require__("b727").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6841":
/***/ (function(module, exports) {

!function () {
  "use strict";

  window.trans = {
    symbols: "Symbols",
    "basic-math": "Basic math",
    "greek-letters": "Greek letters",
    "letter-symbols": "Other symbols",
    relations: "Relations",
    sets: "Sets",
    geometry: "Geometry",
    "radial-script-fraction": "Roots, fractions, scripts",
    fractions: "Fractions",
    roots: "Roots",
    "superscripts-subscripts": "Superscripts, subscripts",
    spaces: "Spaces",
    "integrals-limit": "Integrals, limits",
    integrals: "Integrals",
    differentials: "Differentials",
    limits: "Limits",
    "gradient-operators": "Gradient operators",
    functions: "Functions",
    "big-operators": "Big operators",
    summation: "Sum",
    product: "Product",
    union: "Union",
    matrices: "Matrices",
    tables: "Matrices",
    "rows-columns": "Rows, columns",
    "equation-parts": "Equation parts",
    decorations: "Decorations",
    parenthesis: "Parenthesis",
    accents: "Accents",
    encloses: "Encloses",
    arrows: "Arrows",
    "arrow-symbols": "Arrows",
    ellipsis: "Ellipsis",
    "arrow-scripts": "Arrows with scripts",
    rows: "Rows",
    columns: "Columns",
    ok: "Ok"
  };
}();

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "72f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__("ebb5").exportTypedArrayMethod;
var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "735e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $fill = __webpack_require__("81d5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "74e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var DESCRIPTORS = __webpack_require__("83ab");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("8aa7");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var ArrayBufferModule = __webpack_require__("621a");
var anInstance = __webpack_require__("19aa");
var createPropertyDescriptor = __webpack_require__("5c6c");
var createNonEnumerableProperty = __webpack_require__("9112");
var toLength = __webpack_require__("50c4");
var toIndex = __webpack_require__("0b25");
var toOffset = __webpack_require__("182d");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var classof = __webpack_require__("f5df");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var setPrototypeOf = __webpack_require__("d2bb");
var getOwnPropertyNames = __webpack_require__("241c").f;
var typedArrayFrom = __webpack_require__("a078");
var forEach = __webpack_require__("b727").forEach;
var setSpecies = __webpack_require__("2626");
var definePropertyModule = __webpack_require__("9bf2");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var InternalStateModule = __webpack_require__("69f3");
var inheritIfRequired = __webpack_require__("7156");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "77a7":
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "82f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $includes = __webpack_require__("4d64").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "841c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var sameValue = __webpack_require__("129f");
var regExpExec = __webpack_require__("14c3");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8aa7":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__("ebb5").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "8bd3":
/***/ (function(module, exports) {

!function () {
  "use strict";

  window.trans = {
    symbols: "Symbols",
    "basic-math": "Basic math",
    "greek-letters": "Greek letters",
    "letter-symbols": "Other symbols",
    relations: "Relations",
    sets: "Sets",
    geometry: "Geometry",
    "radial-script-fraction": "Roots, fractions, scripts",
    fractions: "Fractions",
    roots: "Roots",
    "superscripts-subscripts": "Superscripts, subscripts",
    spaces: "Spaces",
    "integrals-limit": "Integrals, limits",
    integrals: "Integrals",
    differentials: "Differentials",
    limits: "Limits",
    "gradient-operators": "Gradient operators",
    functions: "Functions",
    "big-operators": "Big operators",
    summation: "Sum",
    product: "Product",
    union: "Union",
    matrices: "Matrices",
    tables: "Matrices",
    "rows-columns": "Rows, columns",
    "equation-parts": "Equation parts",
    decorations: "Decorations",
    parenthesis: "Parenthesis",
    accents: "Accents",
    encloses: "Encloses",
    arrows: "Arrows",
    "arrow-symbols": "Arrows",
    ellipsis: "Ellipsis",
    "arrow-scripts": "Arrows with scripts",
    result: "Result",
    rows: "Rows",
    columns: "Columns",
    ok: "Ok"
  };
}();

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9317":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9354":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_2bbdbb77_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9317");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_2bbdbb77_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_style_index_0_id_2bbdbb77_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $copyWithin = __webpack_require__("145e");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ea5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("99af");

__webpack_require__("c975");

__webpack_require__("e260");

__webpack_require__("b0c0");

__webpack_require__("d3b7");

__webpack_require__("4d63");

__webpack_require__("ac1f");

__webpack_require__("25f0");

__webpack_require__("466d");

__webpack_require__("5319");

__webpack_require__("841c");

__webpack_require__("498a");

__webpack_require__("ddb0");

/**
 * Created by panos on 10/16/15.
 */
(function () {
  'use strict'; // everything that is {{$}} is considered as variable to be filled by the user

  window.actions = [{
    "id": "alef",
    "mml": "<mo>&#8501;</mo>",
    "latex": "\\aleph"
  }, {
    "id": "aligned-equations",
    "mml": "<mtable columnspacing=\"2px\" columnalign=\"right center left\"><mtr><mtd><mi>{{$}}</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>{{$}}</mi></mtd></mtr></mtable>",
    "latex": "\\begin{align*} & {{$}} = {{$}} \\\\ & {{$}} = {{$}} \\end{align*}"
  }, {
    "id": "almost-equal",
    "mml": "<mo>&#8776;</mo>",
    "latex": "\\approx"
  }, {
    "id": "alpha",
    "mml": "<mi>&#945;</mi>",
    "latex": "\\alpha"
  }, {
    "id": "angle",
    "mml": "<mo>&#8736;</mo>",
    "latex": "\\angle"
  }, {
    "id": "angle-brackets",
    "mml": "<mfenced open=\"&lt;\" close=\"&gt;\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\langle {{$}} \\rangle"
  }, {
    "id": "angle-brackets-bar",
    "mml": "<mfenced open=\"&lt;\" close=\"&gt;\" separators=\"|\"><mi>{{$}}</mi><mi>{{$}}</mi></mfenced>",
    "latex": "\\langle {{$}} \\mid {{$}} \\rangle"
  }, {
    "id": "aproximately-equal",
    "mml": "<mo>&#8773;</mo>",
    "latex": "\\cong"
  }, {
    "id": "arccosine",
    "mml": "<mi>arccos</mi><mfenced><mrow><mi>{{$}}</mi></mrow></mfenced>",
    "latex": "\\arccos({{$}})"
  }, {
    "id": "arcsine",
    "mml": "<mi>arcsin</mi><mfenced><mrow><mi>{{$}}</mi></mrow></mfenced>",
    "latex": "\\arcsin({{$}})"
  }, {
    "id": "arctangent",
    "mml": "<mi>arctan</mi><mfenced><mrow><mi>{{$}}</mi></mrow></mfenced>",
    "latex": "\\arctan({{$}})"
  }, {
    "id": "arrow-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#8594;</mo></mover>",
    "latex": "\\vec{{{$}}}"
  }, {
    "id": "asterisk",
    "mml": "<mo>*</mo>",
    "latex": "\\ast"
  }, {
    "id": "asymptotically-equal",
    "mml": "<mo>&#8771;</mo>",
    "latex": "\\simeq"
  }, {
    "id": "back-space",
    "mml": "<mspace width=\"-0.2em\"/>",
    "latex": "\\!"
  }, {
    "id": "bar-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#175;</mo></mover>",
    "latex": "\\bar{{{$}}}"
  }, {
    "id": "because",
    "mml": "<mo>&#8757;</mo>",
    "latex": "\\because"
  }, {
    "id": "beta",
    "mml": "<mi>&#946;</mi>",
    "latex": "\\beta"
  }, {
    "id": "bevelled-fraction",
    "mml": "<mfrac bevelled=\"true\"><mi>{{$}}</mi><mi>{{$}}</mi></mfrac>",
    "latex": ""
  }, {
    "id": "bevelled-small-fraction",
    "mml": "<mstyle displaystyle=\"false\"><mfrac bevelled=\"true\"><mi>{{$}}</mi><mi>{{$}}</mi></mfrac></mstyle>",
    "latex": ""
  }, {
    "id": "big-intersection",
    "mml": "<mo largeop=\"true\">&#8745;</mo>",
    "latex": "\\bigcap"
  }, {
    "id": "big-operator-subscript",
    "mml": "<msub><mo largeop=\"true\">{{$}}</mo><mi>{{$}}</mi></msub>",
    "latex": ""
  }, {
    "id": "big-operator-subsuperscript",
    "mml": "<msubsup><mo largeop=\"true\">{{$}}</mo><mi>{{$}}</mi><mi>{{$}}</mi></msubsup>",
    "latex": ""
  }, {
    "id": "big-operator-underoverscript",
    "mml": "<munderover><mo largeop=\"true\">{{$}}</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "{{$}}_{{{$}}}^{{{$}}}"
  }, {
    "id": "big-operator-underscript",
    "mml": "<munder><mo largeop=\"true\">{{$}}</mo><mi>{{$}}</mi></munder>",
    "latex": "{{$}}_{{{$}}}"
  }, {
    "id": "big-square-cap",
    "mml": "<mo largeop=\"true\">&#8851;</mo>",
    "latex": ""
  }, {
    "id": "big-square-cup",
    "mml": "<mo largeop=\"true\">&#8852;</mo>",
    "latex": "\\bigsqcup"
  }, {
    "id": "big-union",
    "mml": "<mo largeop=\"true\">&#8746;</mo>",
    "latex": "\\bigcup"
  }, {
    "id": "bottom-curly-bracket",
    "mml": "<munder><mrow><mi>{{$}}</mi></mrow><mo>&#9183;</mo></munder>",
    "latex": "\\underbrace{{{$}}}"
  }, {
    "id": "bottom-parenthesis",
    "mml": "<munder><mrow><mi>{{$}}</mi></mrow><mo>&#9181;</mo></munder>",
    "latex": ""
  }, {
    "id": "bullet",
    "mml": "<mo>&#8729;</mo>",
    "latex": "\\bullet"
  }, {
    "id": "capital-alpha",
    "mml": "<mi>&#913;</mi>",
    "latex": "A"
  }, {
    "id": "capital-beta",
    "mml": "<mi>&#914;</mi>",
    "latex": "B"
  }, {
    "id": "capital-chi",
    "mml": "<mi>&#935;</mi>",
    "latex": "X"
  }, {
    "id": "capital-delta",
    "mml": "<mi>&#916;</mi>",
    "latex": "\\Delta"
  }, {
    "id": "capital-epsilon",
    "mml": "<mi>&#917;</mi>",
    "latex": "E"
  }, {
    "id": "capital-eta",
    "mml": "<mi>&#919;</mi>",
    "latex": "H"
  }, {
    "id": "capital-gamma",
    "mml": "<mi>&#915;</mi>",
    "latex": "\\Gamma"
  }, {
    "id": "capital-iota",
    "mml": "<mi>&#921;</mi>",
    "latex": "I"
  }, {
    "id": "capital-kappa",
    "mml": "<mi>&#922;</mi>",
    "latex": "K"
  }, {
    "id": "capital-lambda",
    "mml": "<mi>&#923;</mi>",
    "latex": "\\Lambda"
  }, {
    "id": "capital-mi",
    "mml": "<mi>&#924;</mi>",
    "latex": "M"
  }, {
    "id": "capital-ni",
    "mml": "<mi>&#925;</mi>",
    "latex": "N"
  }, {
    "id": "capital-omega",
    "mml": "<mi>&#937;</mi>",
    "latex": "\\Omega"
  }, {
    "id": "capital-omicron",
    "mml": "<mi>&#927;</mi>",
    "latex": "O"
  }, {
    "id": "capital-phi",
    "mml": "<mi>&#934;</mi>",
    "latex": "\\Phi"
  }, {
    "id": "capital-pi",
    "mml": "<mi>&#928;</mi>",
    "latex": "\\Pi"
  }, {
    "id": "capital-psi",
    "mml": "<mi>&#936;</mi>",
    "latex": "\\Psi"
  }, {
    "id": "capital-rho",
    "mml": "<mi>&#929;</mi>",
    "latex": "P"
  }, {
    "id": "capital-sigma",
    "mml": "<mi>&#931;</mi>",
    "latex": "\\Sigma"
  }, {
    "id": "capital-tau",
    "mml": "<mi>&#932;</mi>",
    "latex": "T"
  }, {
    "id": "capital-theta",
    "mml": "<mi>&#920;</mi>",
    "latex": "\\Theta"
  }, {
    "id": "capital-upsilon",
    "mml": "<mi>&#933;</mi>",
    "latex": "\\Upsilon"
  }, {
    "id": "capital-xi",
    "mml": "<mi>&#926;</mi>",
    "latex": "X"
  }, {
    "id": "capital-zeta",
    "mml": "<mi>&#918;</mi>",
    "latex": "Z"
  }, {
    "id": "ceeling",
    "mml": "<mfenced open=\"&#8968;\" close=\"&#8969;\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\lceil {{$}} \\rceil"
  }, {
    "id": "chi",
    "mml": "<mi>&#967;</mi>",
    "latex": "\\chi"
  }, {
    "id": "circle",
    "mml": "<mo>&#9675;</mo>",
    "latex": ""
  }, {
    "id": "circled-asterisk",
    "mml": "<mo>&#8859;</mo>",
    "latex": "\\circledast"
  }, {
    "id": "circled-dash",
    "mml": "<mo>&#8861;</mo>",
    "latex": "\\circleddash"
  }, {
    "id": "circled-division",
    "mml": "<mo>&#10808;</mo>",
    "latex": ""
  }, {
    "id": "circled-dot",
    "mml": "<mo>&#8857;</mo>",
    "latex": "\\odot"
  }, {
    "id": "circled-plus",
    "mml": "<mo>&#8853;</mo>",
    "latex": "\\oplus"
  }, {
    "id": "circled-times",
    "mml": "<mo>&#8855;</mo>",
    "latex": "\\otimes"
  }, {
    "id": "complex-numbers",
    "mml": "<mi>&#8450;</mi>",
    "latex": "\\mathbb{C}"
  }, {
    "id": "contains-as-member",
    "mml": "<mo>&#8715;</mo>",
    "latex": "\\ni"
  }, {
    "id": "contains-normal-subgroup",
    "mml": "<mo>&#8883;</mo>",
    "latex": "\\triangleright"
  }, {
    "id": "contour-integral",
    "mml": "<mo>&#8750;</mo>",
    "latex": "\\oint"
  }, {
    "id": "coproduct",
    "mml": "<mo>&#8720;</mo>",
    "latex": "\\coprod"
  }, {
    "id": "cosecant",
    "mml": "<mi>csc</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\csc({{$}})"
  }, {
    "id": "cosine",
    "mml": "<mi>cos</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\cos({{$}})"
  }, {
    "id": "cotangent",
    "mml": "<mi>cot</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\cot({{$}})"
  }, {
    "id": "cube-root",
    "mml": "<mroot><mi>{{$}}</mi><mn>3</mn></mroot>",
    "latex": "\\sqrt[3]{{{$}}}"
  }, {
    "id": "curl",
    "mml": "<mo>&#8711;</mo><mo>&#215;</mo><mi>{{$}}</mi>",
    "latex": "\\nabla \\times {{$}}"
  }, {
    "id": "curly-brackets",
    "mml": "<mfenced open=\"{\" close=\"}\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left \\{ {{$}} \\right \\}"
  }, {
    "id": "definite-integral",
    "mml": "<msubsup><mo>&#8747;</mo><mi>{{$}}</mi><mi>{{$}}</mi></msubsup>",
    "latex": "\\int_{{{$}}}^{{{$}}}"
  }, {
    "id": "definite-integral-differential",
    "mml": "<msubsup><mo>&#8747;</mo><mi>{{$}}</mi><mi>{{$}}</mi></msubsup><mi>{{$}}</mi><mo>d</mo><mi>{{$}}</mi>",
    "latex": "\\int_{{{$}}}^{{{$}}}{{$}}\\;\\mathrm{d}{{$}}"
  }, {
    "id": "degree-sign",
    "mml": "<mo>&#176;</mo>",
    "latex": "^{\\circ}"
  }, {
    "id": "delta",
    "mml": "<mi>&#948;</mi>",
    "latex": "\\delta"
  }, {
    "id": "derivative",
    "mml": "<mfrac><mrow><mo>d</mo><mi>{{$}}</mi></mrow><mrow><mo>d</mo><mi>{{$}}</mi></mrow></mfrac>",
    "latex": "\\frac{\\mathrm{d} {{$}}}{\\mathrm{d} {{$}}}"
  }, {
    "id": "diaeresis-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#168;</mo></mover>",
    "latex": "\\ddot{{{$}}}"
  }, {
    "id": "diamond",
    "mml": "<mo>&#8900;</mo>",
    "latex": "\\diamond"
  }, {
    "id": "differential",
    "mml": "<mo>d</mo>",
    "latex": "\\mathrm{d}"
  }, {
    "id": "digit-space",
    "mml": "<mo>&#8199;</mo>",
    "latex": "\\;"
  }, {
    "id": "divergence",
    "mml": "<mo>&#8711;</mo><mo>&#183;</mo><mi>{{$}}</mi>",
    "latex": "\\nabla \\cdot {{$}}"
  }, {
    "id": "division-sign",
    "mml": "<mo>&#247;</mo>",
    "latex": "\\div"
  }, {
    "id": "does-not-contain-member",
    "mml": "<mo>&#8716;</mo>",
    "latex": "\\not\\ni"
  }, {
    "id": "dot-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#729;</mo></mover>",
    "latex": "\\dot{{{$}}}"
  }, {
    "id": "double-apostrophe",
    "mml": "<mo>'</mo><mo>'</mo>",
    "latex": "''"
  }, {
    "id": "double-integral",
    "mml": "<mo>&#8748;</mo>",
    "latex": "\\iint"
  }, {
    "id": "double-vertical-bars",
    "mml": "<mfenced open=" || false || false,
    "latex": "\\left \\| {{$}} \\right \\|"
  }, {
    "id": "down-diagonal-strike",
    "mml": "<menclose notation=\"downdiagonalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "down-right-diagonal-ellipsis",
    "mml": "<mo>&#8945;</mo>",
    "latex": "\\ddots"
  }, {
    "id": "downward-left-corner-arrow",
    "mml": "<mo>&#8629;</mo>",
    "latex": ""
  }, {
    "id": "downwards-arrow",
    "mml": "<mo>&#8595;</mo>",
    "latex": "\\downarrow"
  }, {
    "id": "downwards-arrow-left-upwards-arrow",
    "mml": "<mo>&#8693;</mo>",
    "latex": ""
  }, {
    "id": "downwards-double-arrow",
    "mml": "<mo>&#8659;</mo>",
    "latex": "\\Downarrow"
  }, {
    "id": "downwards-harpoon-left-upwards-harpoon",
    "mml": "<mo>&#10607;</mo>",
    "latex": ""
  }, {
    "id": "east-west-diagonal-arrow",
    "mml": "<mo>&#10530;</mo>",
    "latex": ""
  }, {
    "id": "element-of",
    "mml": "<mo>&#8712;</mo>",
    "latex": "\\in"
  }, {
    "id": "element-over",
    "mml": "<mover><mi>{{$}}</mi><mi>{{$}}</mi></mover>",
    "latex": ""
  }, {
    "id": "element-under",
    "mml": "<munder><mi>{{$}}</mi><mi>{{$}}</mi></munder>",
    "latex": ""
  }, {
    "id": "element-underover",
    "mml": "<munderover><mi>{{$}}</mi><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": ""
  }, {
    "id": "ell",
    "mml": "<mi>&#8467;</mi>",
    "latex": "\\ell"
  }, {
    "id": "empty-set",
    "mml": "<mo>&#8709;</mo>",
    "latex": "\\varnothing"
  }, {
    "id": "enclose-actuarial",
    "mml": "<menclose notation=\"actuarial\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "enclose-bottom",
    "mml": "<menclose notation=\"bottom\"><mi>{{$}}</mi></menclose>",
    "latex": "\\underline{}"
  }, {
    "id": "enclose-box",
    "mml": "<menclose notation=\"box\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "enclose-circle",
    "mml": "<menclose notation=\"circle\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "enclose-left",
    "mml": "<menclose notation=\"left\"><mi>{{$}}</mi></menclose>",
    "latex": "\\left | {{$}} \\right. "
  }, {
    "id": "enclose-right",
    "mml": "<menclose notation=\"right\"><mi>{{$}}</mi></menclose>",
    "latex": "\\left. {{$}} \\right |"
  }, {
    "id": "enclose-rounded-box",
    "mml": "<menclose notation=\"roundedbox\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "enclose-top",
    "mml": "<menclose notation=\"top\"><mi>{{$}}</mi></menclose>",
    "latex": "\\overline{{{$}}}"
  }, {
    "id": "epsilon",
    "mml": "<mi>&#949;</mi>",
    "latex": "\\epsilon"
  }, {
    "id": "equal-operator",
    "mml": "<mo>=</mo>",
    "latex": "="
  }, {
    "id": "eta",
    "mml": "<mi>&#951;</mi>",
    "latex": "\\eta"
  }, {
    "id": "euler-number",
    "mml": "<mi>e</mi>",
    "latex": "e"
  }, {
    "id": "exp",
    "mml": "<msup><mi>e</mi><mi>{{$}}</mi></msup>",
    "latex": "e^{{{$}}}"
  }, {
    "id": "exponential",
    "mml": "<mi>exp</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\exp({{$}})"
  }, {
    "id": "final-sigma",
    "mml": "<mi>&#962;</mi>",
    "latex": "\\varsigma"
  }, {
    "id": "floor",
    "mml": "<mfenced open=\"&#8970;\" close=\"&#8971;\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\lfloor {{$}} \\rfloor"
  }, {
    "id": "for-all",
    "mml": "<mo>&#8704;</mo>",
    "latex": "\\forall"
  }, {
    "id": "forward-slash",
    "mml": "<mo>/</mo>",
    "latex": "/"
  }, {
    "id": "fraction",
    "mml": "<mfrac><mi>{{$}}</mi><mi>{{$}}</mi></mfrac>",
    "latex": "\\frac{{{$}}}{{{$}}}"
  }, {
    "id": "gamma",
    "mml": "<mi>&#947;</mi>",
    "latex": "\\gamma"
  }, {
    "id": "gradient",
    "mml": "<mo>&#8711;</mo><mi>{{$}}</mi>",
    "latex": "\\nabla {{$}}"
  }, {
    "id": "greater-than-not-equal",
    "mml": "<mo>&#10888;</mo>",
    "latex": "\\gneq"
  }, {
    "id": "greater-than-or-equal",
    "mml": "<mo>&#8805;</mo>",
    "latex": "\\geq "
  }, {
    "id": "greater-than-or-slanted-equal",
    "mml": "<mo>&#10878;</mo>",
    "latex": "\\geqslant"
  }, {
    "id": "greater-than-sign",
    "mml": "<mo>&gt;</mo>",
    "latex": ">"
  }, {
    "id": "hat-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>^</mo></mover>",
    "latex": "\\hat{{{$}}}"
  }, {
    "id": "horizontal-ellipsis",
    "mml": "<mo>&#8943;</mo>",
    "latex": "\\cdots"
  }, {
    "id": "horizontal-strike",
    "mml": "<menclose notation=\"horizontalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "horizontal-vertical-strikes",
    "mml": "<menclose notation=\"verticalstrike horizontalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "identical-operator",
    "mml": "<mo>&#8801;</mo>",
    "latex": "\\equiv"
  }, {
    "id": "imaginary-numbers",
    "mml": "<mi mathvariant=\"normal\">&#120128;</mi>",
    "latex": "\\mathbb{I}"
  }, {
    "id": "imaginary-part",
    "mml": "<mo>&#8465;</mo>",
    "latex": "\\Im"
  }, {
    "id": "imaginary-unit-i",
    "mml": "<mi>i</mi>",
    "latex": "i"
  }, {
    "id": "increment",
    "mml": "<mo>&#8710;</mo>",
    "latex": "\\triangle"
  }, {
    "id": "infinity",
    "mml": "<mo>&#8734;</mo>",
    "latex": "\\infty"
  }, {
    "id": "integer-numbers",
    "mml": "<mi mathvariant=\"normal\">&#8484;</mi>",
    "latex": "\\mathbb{Z}"
  }, {
    "id": "integral",
    "mml": "<mo>&#8747;</mo>",
    "latex": "\\int"
  }, {
    "id": "integral-subscript",
    "mml": "<msub><mo>&#8747;</mo><mi>{{$}}</mi></msub>",
    "latex": "\\int_{{$}}"
  }, {
    "id": "integral-subscript-differential",
    "mml": "<msub><mo>&#8747;</mo><mi>{{$}}</mi></msub><mi>{{$}}</mi><mo>d</mo><mi>{{$}}</mi>",
    "latex": "\\int_{{$}}{{$}}\\;\\mathrm{d}{{$}}"
  }, {
    "id": "intersection",
    "mml": "<mo>&#8745;</mo>",
    "latex": "\\cap"
  }, {
    "id": "inverse-cosecant",
    "mml": "<msup><mi>csc</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\csc^{-1}(x)"
  }, {
    "id": "inverse-cosine",
    "mml": "<msup><mi>cos</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\cos^{-1}(x)"
  }, {
    "id": "inverse-cotangent",
    "mml": "<msup><mi>cot</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\cot^{-1}(x)"
  }, {
    "id": "inverse-secant",
    "mml": "<msup><mi>sec</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\sec^{-1}(x)"
  }, {
    "id": "inverse-sine",
    "mml": "<msup><mi>sin</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\sin^{-1}(x)"
  }, {
    "id": "inverse-tangent",
    "mml": "<msup><mi>tan</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\tan^{-1}(x)"
  }, {
    "id": "iota",
    "mml": "<mi>&#953;</mi>",
    "latex": "\\iota"
  }, {
    "id": "kappa",
    "mml": "<mi>&#954;</mi>",
    "latex": "\\kappa"
  }, {
    "id": "lambda",
    "mml": "<mi>&#955;</mi>",
    "latex": "\\lambda"
  }, {
    "id": "laplacian",
    "mml": "<mo>&#8710;</mo><mi>{{$}}</mi>",
    "latex": "\\Delta {{$}}"
  }, {
    "id": "left-angle",
    "mml": "<mfenced open=\"&lt;\" close=\"\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left \\langle {{$}} \\right."
  }, {
    "id": "left-arrow-over-right-arrow-overscript",
    "mml": "<mover><mo>&#8646;</mo><mi>{{$}}</mi></mover>",
    "latex": ""
  }, {
    "id": "left-arrow-over-right-arrow-underscript",
    "mml": "<munder><mo>&#8646;</mo><mi>{{$}}</mi></munder>",
    "latex": ""
  }, {
    "id": "left-arrow-over-right-arrow-underoverscript",
    "mml": "<munderover><mo>&#8646;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": ""
  }, {
    "id": "left-arrow-overscript",
    "mml": "<mover><mo>&#8592;</mo><mi>{{$}}</mi></mover>",
    "latex": "\\overset{{{$}}}{\\leftarrow}"
  }, {
    "id": "left-arrow-underscript",
    "mml": "<munder><mo>&#8592;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\underset{{{$}}}{\\leftarrow}"
  }, {
    "id": "left-arrow-underoverscript",
    "mml": "<munderover><mo>&#8592;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\xleftarrow[{{$}}]{{{$}}}"
  }, {
    "id": "left-curly-bracket",
    "mml": "<mfenced open=\"{\" close=\"\"><mi>a</mi></mfenced>",
    "latex": "\\left \\{ {{$}} \\right."
  }, {
    "id": "left-harpoon-over-right-harpoon-overscript",
    "mml": "<mover><mo>&#8651;</mo><mi>{{$}}</mi></mover>",
    "latex": "\\overset{{{$}}}{\\leftrightharpoons}"
  }, {
    "id": "left-harpoon-over-right-harpoon-underscript",
    "mml": "<munder><mo>&#8651;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\underset{{{$}}}{\\leftrightharpoons}"
  }, {
    "id": "left-harpoon-over-right-harpoon-underoverscript",
    "mml": "<munderover><mo>&#8651;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\overset{{{$}}}{\\underset{{{$}}}{\\leftrightharpoons}}"
  }, {
    "id": "left-parenthesis",
    "mml": "<mfenced close=\"\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left ( {{$}} \\right."
  }, {
    "id": "left-right-arrow",
    "mml": "<mo>&#8596;</mo>",
    "latex": "\\leftrightarrow"
  }, {
    "id": "left-right-arrow-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#8596;</mo></mover>",
    "latex": "\\overset{\\leftrightarrow}{{{$}}}"
  }, {
    "id": "left-right-arrow-underoverscript",
    "mml": "<munderover><mo>&#8596;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\overset{{{$}}}{\\underset{{{$}}}{\\leftrightarrow}}"
  }, {
    "id": "left-right-double-arrow",
    "mml": "<mo>&#8660;</mo>",
    "latex": "\\Leftrightarrow"
  }, {
    "id": "left-square-bracket",
    "mml": "<mfenced open=\"[\" close=\"\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left [ {{$}} \\right."
  }, {
    "id": "left-subscript",
    "mml": "<mmultiscripts><mi>{{$}}</mi><mprescripts/><mi>{{$}}</mi><none/></mmultiscripts>",
    "latex": " _{{{$}}}{{$}}"
  }, {
    "id": "left-superscript",
    "mml": "<mmultiscripts><mi>{{$}}</mi><mprescripts/><none/><mi>{{$}}</mi></mmultiscripts>",
    "latex": " ^{{{$}}}{{$}}"
  }, {
    "id": "left-superscript-subscript",
    "mml": "<mmultiscripts><mi>{{$}}</mi><mprescripts/><mi>{{$}}</mi><mi>{{$}}</mi></mmultiscripts>",
    "latex": "_{{{$}}}^{{{$}}}{{$}}"
  }, {
    "id": "leftwards-arrow",
    "mml": "<mo>&#8592;</mo>",
    "latex": "\\leftarrow"
  }, {
    "id": "leftwards-arrow-from-bar",
    "mml": "<mo>&#8612;</mo>",
    "latex": ""
  }, {
    "id": "leftwards-arrow-hook",
    "mml": "<mo>&#8617;</mo>",
    "latex": "\\hookleftarrow"
  }, {
    "id": "leftwards-arrow-over-rightwards-arrow",
    "mml": "<mo>&#8646;</mo>",
    "latex": ""
  }, {
    "id": "leftwards-double-arrow",
    "mml": "<mo>&#8656;</mo>",
    "latex": "\\Leftarrow"
  }, {
    "id": "leftwards-harpoon-barb-downwards",
    "mml": "<mo>&#8637;</mo>",
    "latex": "\\leftharpoondown"
  }, {
    "id": "leftwards-harpoon-barb-upwards",
    "mml": "<mo>&#8636;</mo>",
    "latex": "\\leftharpoonup"
  }, {
    "id": "leftwards-harpoon-over-dash",
    "mml": "<mo>&#10602;</mo>",
    "latex": ""
  }, {
    "id": "leftwards-harpoon-over-rightwards-harpoon",
    "mml": "<mo>&#8651;</mo>",
    "latex": "\\leftrightharpoons"
  }, {
    "id": "less-than-not-equal",
    "mml": "<mo>&#10887;</mo>",
    "latex": "\\lneq"
  }, {
    "id": "less-than-or-equal",
    "mml": "<mo>&#8804;</mo>",
    "latex": "\\leq"
  }, {
    "id": "less-than-or-slanted-equal",
    "mml": "<mo>&#10877;</mo>",
    "latex": "\\leqslant"
  }, {
    "id": "less-than-sign",
    "mml": "<mo>&lt;</mo>",
    "latex": "<"
  }, {
    "id": "limit-infinity",
    "mml": "<munder><mrow><mi>lim</mi></mrow><mrow><mi>{{$}}</mi><mo>&#8594;</mo><mo>&#8734;</mo></mrow></munder>",
    "latex": "\\lim_{{{$}}\\rightarrow \\infty}"
  }, {
    "id": "limit-underscript",
    "mml": "<munder><mrow><mi>lim</mi></mrow><mi>{{$}}</mi></munder>",
    "latex": "\\lim_{{{$}}}"
  }, {
    "id": "logarithm",
    "mml": "<mi>log</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\log({{$}})"
  }, {
    "id": "logarithm-base-n",
    "mml": "<msub><mi>log</mi><mi>n</mi></msub><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\log_{n}({{$}})"
  }, {
    "id": "logical-and",
    "mml": "<mo>&#8743;</mo>",
    "latex": "\\land"
  }, {
    "id": "logical-or",
    "mml": "<mo>&#8744;</mo>",
    "latex": "\\lor"
  }, {
    "id": "matrix-parenthesis",
    "matrix": true,
    "mml": "<mfenced><mtable>{{$}}</mtable></mfenced>",
    "latex": "\\begin{pmatrix}{{$}}\\end{pmatrix}"
  }, {
    "id": "matrix-square-brackets",
    "matrix": true,
    "mml": "<mfenced open=\"[\" close=\"]\"><mtable>{{$}}</mtable></mfenced>",
    "latex": "\\begin{bmatrix}{{$}}\\end{bmatrix}"
  }, {
    "id": "matrix-vertical-bars",
    "matrix": true,
    "mml": "<mfenced open=\"|\" close=\"|\"><mtable>{{$}}</mtable></mfenced>",
    "latex": "\\begin{vmatrix}{{$}}\\end{vmatrix}"
  }, {
    "id": "measured-angle",
    "mml": "<mo>&#8737;</mo>",
    "latex": "\\measuredangle"
  }, {
    "id": "middle-dot",
    "mml": "<mo>&#183;</mo>",
    "latex": "\\cdot"
  }, {
    "id": "minus-plus-sign",
    "mml": "<mo>&#8723;</mo>",
    "latex": "\\mp"
  }, {
    "id": "minus-sign",
    "mml": "<mo>-</mo>",
    "latex": " - "
  }, {
    "id": "mu",
    "mml": "<mi>&#956;</mi>",
    "latex": "\\mu"
  }, {
    "id": "much-greater-than",
    "mml": "<mo>&#8811;</mo>",
    "latex": "\\gg"
  }, {
    "id": "much-less-than",
    "mml": "<mo>&#8810;</mo>",
    "latex": "\\ll"
  }, {
    "id": "multiplication-sign",
    "mml": "<mo>&#215;</mo>",
    "latex": "\\times"
  }, {
    "id": "nabla",
    "mml": "<mo>&#8711;</mo>",
    "latex": "\\nabla"
  }, {
    "id": "natural-logarithm",
    "mml": "<mo>ln</mo><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": " \\ln\\left ( {{$}} \\right ) "
  }, {
    "id": "natural-numbers",
    "mml": "<mi mathvariant=\"normal\">&#8469;</mi>",
    "latex": "\\mathbb{I} "
  }, {
    "id": "normal-space",
    "mml": "<mo>&#160;</mo>",
    "latex": "\\:"
  }, {
    "id": "normal-subgroup-of",
    "mml": "<mo>&#8882;</mo>",
    "latex": "\\lhd "
  }, {
    "id": "north-east-arrow",
    "mml": "<mo>&#8599;</mo>",
    "latex": "\\nearrow "
  }, {
    "id": "north-west-arrow",
    "mml": "<mo>&#8598;</mo>",
    "latex": "\\nwarrow "
  }, {
    "id": "not-almost-equal",
    "mml": "<mo>&#8777;</mo>",
    "latex": "\\not\\approx "
  }, {
    "id": "not-aproximateley-equal",
    "mml": "<mo>&#x2247;</mo>",
    "latex": "\\not\\cong "
  }, {
    "id": "not-element-of",
    "mml": "<mo>&#8713;</mo>",
    "latex": "\\notin "
  }, {
    "id": "not-equal",
    "mml": "<mo>&#8800;</mo>",
    "latex": "\\neq"
  }, {
    "id": "not-identical",
    "mml": "<mo>&#8802;</mo>",
    "latex": "\\not\\equiv"
  }, {
    "id": "not-parallel-to",
    "mml": "<mo>&#8742;</mo>",
    "latex": "\\nparallel"
  }, {
    "id": "not-sign",
    "mml": "<mo>&#172;</mo>",
    "latex": "\\neg"
  }, {
    "id": "not-tilde",
    "mml": "<mo>&#8769;</mo>",
    "latex": "\\nsim"
  }, {
    "id": "nu",
    "mml": "<mi>&#956;</mi>",
    "latex": "\\nu"
  }, {
    "id": "omega",
    "mml": "<mi>&#969;</mi>",
    "latex": "\\omega"
  }, {
    "id": "omicron",
    "mml": "<mi>&#959;</mi>",
    "latex": "o"
  }, {
    "id": "overscript-brace",
    "mml": "<mover><mover><mi>{{$}}</mi><mo>&#9182;</mo></mover><mi>{{$}}</mi></mover>",
    "latex": "\\overbrace{{{$}}}^{{{$}}}"
  }, {
    "id": "parallel-to",
    "mml": "<mo>&#8741;</mo>",
    "latex": "\\parallel"
  }, {
    "id": "parallelogram",
    "mml": "<mo>&#9649;</mo>",
    "latex": ""
  }, {
    "id": "parenthesis",
    "mml": "<mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\left ( {{$}} \\right )"
  }, {
    "id": "partial-derivative",
    "mml": "<mfrac><mrow><mo>&#8706;</mo><mi>{{$}}</mi></mrow><mrow><mo>&#8706;</mo><mi>{{$}}</mi></mrow></mfrac>",
    "latex": "\\frac{\\partial {{$}}}{\\partial {{$}}}"
  }, {
    "id": "partial-differential",
    "mml": "<mfrac><mrow><mo>d</mo><mi>{{$}}</mi></mrow><mrow><mo>d</mo><mi>{{$}}</mi></mrow></mfrac>",
    "latex": "\\frac{\\mathrm{d} {{$}}}{\\mathrm{d} {{$}}}"
  }, {
    "id": "perpendicular",
    "mml": "<mo>&#8869;</mo>",
    "latex": "\\perp"
  }, {
    "id": "phi",
    "mml": "<mi>&#966;</mi>",
    "latex": "\\phi"
  }, {
    "id": "phi-alt",
    "mml": "<mi>&#981;</mi>",
    "latex": "\\varphi"
  }, {
    "id": "pi",
    "mml": "<mi>&#960;</mi>",
    "latex": "\\pi"
  }, {
    "id": "pi-alt",
    "mml": "<mi>&#982;</mi>",
    "latex": "\\varpi"
  }, {
    "id": "pi-number",
    "mml": "<mi mathvariant=\"normal\">&#960;</mi>",
    "latex": "\\pi"
  }, {
    "id": "piecewise-function",
    "mml": "<mfenced open=\"{\" close=\"\"><mtable columnspacing=\"1.4ex\" columnalign=\"left\"><mtr><mtd><mi mathvariant=\"normal\">{{$}}</mi></mtd><mtd><mi mathvariant=\"normal\">{{$}}</mi></mtd></mtr><mtr><mtd><mi mathvariant=\"normal\">{{$}}</mi></mtd><mtd><mi mathvariant=\"normal\">{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\left\\{\\begin{matrix} {{$}} & {{$}} \\\\ {{$}} & {{$}} \\end{matrix}\\right."
  }, {
    "id": "plus-minus-sign",
    "mml": "<mo>&#177;</mo>",
    "latex": "\\pm"
  }, {
    "id": "plus-sign",
    "mml": "<mo>+</mo>",
    "latex": "+"
  }, {
    "id": "precedes",
    "mml": "<mo>&#8826;</mo>",
    "latex": "\\prec"
  }, {
    "id": "prime-numbers",
    "mml": "<mi mathvariant=\"normal\">&#8473;</mi>",
    "latex": "\\mathbb{P}"
  }, {
    "id": "product",
    "mml": "<mo>&#8719;</mo>",
    "latex": "\\prod"
  }, {
    "id": "product-subscript",
    "mml": "<msub><mo>&#8719;</mo><mi mathvariant=\"normal\">{{$}}</mi></msub>",
    "latex": ""
  }, {
    "id": "product-subscript-superscript",
    "mml": "<msubsup><mo>&#8719;</mo><mi mathvariant=\"normal\">{{$}}</mi><mi mathvariant=\"normal\">{{$}}</mi></msubsup>",
    "latex": ""
  }, {
    "id": "product-underoverscript",
    "mml": "<munderover><mo>&#8719;</mo><mi mathvariant=\"normal\">{{$}}</mi><mi mathvariant=\"normal\">{{$}}</mi></munderover>",
    "latex": "\\prod_{{{$}}}^{{{$}}}"
  }, {
    "id": "product-underscript",
    "mml": "<munder><mo>&#8719;</mo><mi mathvariant=\"normal\">{{$}}</mi></munder>",
    "latex": "\\prod_{{{$}}}"
  }, {
    "id": "proportional-to",
    "mml": "<mo>&#8733;</mo>",
    "latex": "\\propto"
  }, {
    "id": "psi",
    "mml": "<mi mathvariant=\"normal\">&#968;</mi>",
    "latex": "\\psi"
  }, {
    "id": "quantity-j",
    "mml": "<mi>j</mi>",
    "latex": "\\jmath"
  }, {
    "id": "rational-numbers",
    "mml": "<mi mathvariant=\"normal\">&#8474;</mi>",
    "latex": "\\mathbb{Q}"
  }, {
    "id": "real-numbers",
    "mml": "<mi mathvariant=\"normal\">&#8477;</mi>",
    "latex": "\\mathbb{R}"
  }, {
    "id": "real-part",
    "mml": "<mo>&#8476;</mo>",
    "latex": "\\Re"
  }, {
    "id": "reverse-set-minus",
    "mml": "<mo>&#8726;</mo>",
    "latex": ""
  }, {
    "id": "reverse-slash",
    "mml": "<mo>\</mo>",
    "latex": "\\setminus"
  }, {
    "id": "reversed-prime",
    "mml": "<mo>&#8245;</mo>",
    "latex": "\\prime"
  }, {
    "id": "rho",
    "mml": "<mi>&#961;</mi>",
    "latex": "\\rho"
  }, {
    "id": "right-angle",
    "mml": "<mfenced open=\"\" close=\"&gt;\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left. {{$}} \\right \\rangle"
  }, {
    "id": "right-arrow-over-left-arrow-overscript",
    "mml": "<mover><mo>&#8644;</mo><mi>{{$}}</mi></mover>",
    "latex": ""
  }, {
    "id": "right-arrow-over-left-arrow-underscript",
    "mml": "<munder><mo>&#8644;</mo><mi>{{$}}</mi></munder>",
    "latex": ""
  }, {
    "id": "right-arrow-over-left-arrow-underoverscript",
    "mml": "<munderover><mo>&#8644;</mo><mi>b</mi><mi>{{$}}</mi></munderover>",
    "latex": ""
  }, {
    "id": "right-arrow-overscript",
    "mml": "<mover><mo>&#8594;</mo><mi>{{$}}</mi></mover>",
    "latex": "\\overset{{{$}}}{\\rightarrow}"
  }, {
    "id": "right-arrow-subscript",
    "mml": "<munder><mo>&#8594;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\underset{{{$}}}{\\rightarrow}"
  }, {
    "id": "right-arrow-underoverscript",
    "mml": "<munderover><mo>&#8594;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\xrightarrow[{{$}}]{{{$}}}"
  }, {
    "id": "right-curly-bracket",
    "mml": "<mfenced open=\"\" close=\"}\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left. {{$}} \\right \\}"
  }, {
    "id": "right-harpoon-over-left-harpoon-overscript",
    "mml": "<mover><mo>&#8652;</mo><mi>{{$}}</mi></mover>",
    "latex": "\\overset{{{$}}}{\\rightleftharpoons}"
  }, {
    "id": "right-harpoon-over-left-harpoon-underoverscript",
    "mml": "<munderover><mo>&#8652;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\overset{{{$}}}{\\underset{{{$}}}{\\rightleftharpoons}}"
  }, {
    "id": "right-harpoon-over-left-harpoon-underscript",
    "mml": "<munder><mo>&#8652;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\underset{{{$}}}{\\rightleftharpoons}"
  }, {
    "id": "right-left-arrow-overscript",
    "mml": "<mover><mo>&#8596;</mo><mi>{{$}}</mi></mover>",
    "latex": "\\overset{{{$}}}{\\leftrightarrow}"
  }, {
    "id": "right-left-arrow-underscript",
    "mml": "<munder><mo>&#8596;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\underset{{{$}}}{\\leftrightarrow}"
  }, {
    "id": "right-parenthesis",
    "mml": "<mfenced open=\"\" close=\")\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left. {{$}} \\right )"
  }, {
    "id": "right-square-bracket",
    "mml": "<mfenced open=\"\" close=\"]\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left. {{$}} \\right ]"
  }, {
    "id": "rightwards-arrow-from-bar",
    "mml": "<mo>&#8614;</mo>",
    "latex": "\\mapsto"
  }, {
    "id": "rightwards-arrow-hook",
    "mml": "<mo>&#8618;</mo>",
    "latex": "\\hookrightarrow"
  }, {
    "id": "rightwards-arrow-over-leftwards-arrow",
    "mml": "<mo>&#8644;</mo>",
    "latex": ""
  }, {
    "id": "rightwards-double-arrow",
    "mml": "<mo>&#8658;</mo>",
    "latex": "\\Rightarrow"
  }, {
    "id": "rightwards-harpoon-barb-downwards",
    "mml": "<mo>&#8641;</mo>",
    "latex": "\\rightharpoondown"
  }, {
    "id": "rightwards-harpoon-below-dash",
    "mml": "<mo>&#10605;</mo>",
    "latex": ""
  }, {
    "id": "rightwards-harpoon-over-leftwards-harpoon",
    "mml": "<mo>&#8652;</mo>",
    "latex": "\\rightleftharpoons"
  }, {
    "id": "righwards-arrow",
    "mml": "<mo>&#8594;</mo>",
    "latex": "\\rightarrow"
  }, {
    "id": "righwards-harpoon-barb-upwards",
    "mml": "<mo>&#8640;</mo>",
    "latex": "\\rightharpoonup"
  }, {
    "id": "ring-operator",
    "mml": "<mo>&#8728;</mo>",
    "latex": "\\circ"
  }, {
    "id": "root",
    "mml": "<mroot><mi>{{$}}</mi><mn>{{$}}</mn></mroot>",
    "latex": "\\sqrt[{{$}}]{{{$}}}"
  }, {
    "id": "script-capital-f",
    "mml": "<mo>&#8497;</mo>",
    "latex": "\\mathcal{F}"
  }, {
    "id": "script-capital-l",
    "mml": "<mo>&#8466;</mo>",
    "latex": "\\mathcal{L}"
  }, {
    "id": "script-capital-p",
    "mml": "<mi>&#8472;</mi>",
    "latex": "\\wp"
  }, {
    "id": "secant",
    "mml": "<mi>sec</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\sec({{$}})"
  }, {
    "id": "sigma",
    "mml": "<mi>&#963;</mi>",
    "latex": "\\sigma"
  }, {
    "id": "sine",
    "mml": "<mi>sin</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\sin({{$}})"
  }, {
    "id": "single-apostrophe",
    "mml": "<mo>'</mo>",
    "latex": "'"
  }, {
    "id": "small-fraction",
    "mml": "<mstyle displaystyle=\"false\"><mfrac><mi>{{$}}</mi><mi>{{$}}</mi></mfrac></mstyle>",
    "latex": "\\tfrac{{{$}}}{{{$}}}"
  }, {
    "id": "south-east-arrow",
    "mml": "<mo>&#8600;</mo>",
    "latex": "\\searrow"
  }, {
    "id": "south-west-arrow",
    "mml": "<mo>&#8601;</mo>",
    "latex": "\\swarrow"
  }, {
    "id": "spherical-angle",
    "mml": "<mo>&#8738;</mo>",
    "latex": "\\sphericalangle"
  }, {
    "id": "square",
    "mml": "<mo>&#9633;</mo>",
    "latex": "\\square"
  }, {
    "id": "square-brackets",
    "mml": "<mfenced open=\"[\" close=\"]\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left [ {{$}} \\right ]"
  }, {
    "id": "square-cap",
    "mml": "<mo>&#8851;</mo>",
    "latex": "\\sqcap"
  }, {
    "id": "square-cup",
    "mml": "<mo>&#8852;</mo>",
    "latex": "\\sqcup"
  }, {
    "id": "square-root",
    "mml": "<msqrt><mi>{{$}}</mi></msqrt>",
    "latex": "\\sqrt{{{$}}}"
  }, {
    "id": "square-subset-of",
    "mml": "<mo>&#8847;</mo>",
    "latex": "\\sqsubset"
  }, {
    "id": "square-subset-or-equal",
    "mml": "<mo>&#8849;</mo>",
    "latex": "\\sqsubseteq"
  }, {
    "id": "square-superset-of",
    "mml": "<mo>&#8848;</mo>",
    "latex": "\\sqsupset"
  }, {
    "id": "square-superset-or-equal",
    "mml": "<mo>&#8850;</mo>",
    "latex": "\\sqsupseteq"
  }, {
    "id": "subscript",
    "mml": "<msub><mi>{{$}}</mi><mi>{{$}}</mi></msub>",
    "latex": "{{$}}_{{{$}}}"
  }, {
    "id": "subset-of",
    "mml": "<mo>&#8834;</mo>",
    "latex": "\\subset"
  }, {
    "id": "subset-of-or-equal-to",
    "mml": "<mo>&#8838;</mo>",
    "latex": "\\subseteq"
  }, {
    "id": "succeedes",
    "mml": "<mo>&#8827;</mo>",
    "latex": "\\succ"
  }, {
    "id": "sum",
    "mml": "<mo>&#8721;</mo>",
    "latex": "\\sum"
  }, {
    "id": "sum-subscript",
    "mml": "<msub><mo>&#8721;</mo><mi>{{$}}</mi></msub>",
    "latex": ""
  }, {
    "id": "sum-subscript-superscript",
    "mml": "<msubsup><mo>&#8721;</mo><mi>{{$}}</mi><mi>{{$}}</mi></msubsup>",
    "latex": ""
  }, {
    "id": "sum-underoverscript",
    "mml": "<munderover><mo>&#8721;</mo><mi>{{$}}</mi><mi>{{$}}</mi></munderover>",
    "latex": "\\sum_{{{$}}}^{{{$}}}"
  }, {
    "id": "sum-underscript",
    "mml": "<munder><mo>&#8721;</mo><mi>{{$}}</mi></munder>",
    "latex": "\\sum_{{{$}}}"
  }, {
    "id": "superscript",
    "mml": "<msup><mi>{{$}}</mi><mi>{{$}}</mi></msup>",
    "latex": "{{$}}^{{{$}}}"
  }, {
    "id": "superscript-subscript",
    "mml": "<msubsup><mi>{{$}}</mi><mi>{{$}}</mi><mi>{{$}}</mi></msubsup>",
    "latex": "{{$}}_{{{$}}}^{{{$}}}"
  }, {
    "id": "superset-of",
    "mml": "<mo>&#8835;</mo>",
    "latex": "\\supset"
  }, {
    "id": "superset-of-or-equal-to",
    "mml": "<mo>&#8839;</mo>",
    "latex": "\\supseteq"
  }, {
    "id": "surface-integral",
    "mml": "<mo>&#8751;</mo>",
    "latex": "\\oint"
  }, {
    "id": "table",
    "mml": "<mtable>{{$}}</mtable>",
    "matrix": true,
    "latex": "\\begin{matrix}{{$}}\\end{matrix}"
  }, {
    "id": "tangent",
    "mml": "<mi>tan</mi><mfenced><mi>{{$}}</mi></mfenced>",
    "latex": "\\tan({{$}})"
  }, {
    "id": "tau",
    "mml": "<mi>&#964;</mi>",
    "latex": "\\tau"
  }, {
    "id": "there-exists",
    "mml": "<mo>&#8707;</mo>",
    "latex": "\\exists"
  }, {
    "id": "there-not-exists",
    "mml": "<mo>&#8708;</mo>",
    "latex": "\\nexists"
  }, {
    "id": "therefore",
    "mml": "<mo>&#8756;</mo>",
    "latex": "\\therefore"
  }, {
    "id": "theta",
    "mml": "<mi>&#952;</mi>",
    "latex": "\\theta"
  }, {
    "id": "theta-alt",
    "mml": "<mi>&#977;</mi>",
    "latex": "\\vartheta"
  }, {
    "id": "thinner-space",
    "mml": "<mo>&#8202;</mo>",
    "latex": "\\,"
  }, {
    "id": "three-column-row",
    "mml": "<mtable><mtr><mtd><mi>{{$}}</mi></mtd><mtd><mi>{{$}}</mi></mtd><mtd><mi>{{$}}</mi></mtd></mtr></mtable>",
    "latex": "\\begin{matrix} {{$}} & {{$}} & {{$}} \\end{matrix}"
  }, {
    "id": "three-row-column",
    "mml": "<mtable><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr></mtable>",
    "latex": "\\begin{matrix} {{$}} \\\\ {{$}} \\\\ {{$}} \\end{matrix}"
  }, {
    "id": "tilde-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>~</mo></mover>",
    "latex": "\\widetilde{{{$}}}"
  }, {
    "id": "tilde-operator",
    "mml": "<mo>~</mo>",
    "latex": "\\sim"
  }, {
    "id": "top-curly-bracket",
    "mml": "<mover><mrow><mi>{{$}}</mi></mrow><mo>&#9182;</mo></mover>",
    "latex": "\\overbrace{{{$}}}"
  }, {
    "id": "top-parenthesis",
    "mml": "<mover><mi>{{$}}</mi><mo>&#9180;</mo></mover>",
    "latex": ""
  }, {
    "id": "triangle",
    "mml": "<mo>&#9651;</mo>",
    "latex": "\\triangle"
  }, {
    "id": "triple-integral",
    "mml": "<mo>&#8749;</mo>",
    "latex": "\\iiint"
  }, {
    "id": "two-column-row-parenthesis",
    "mml": "<mfenced><mtable><mtr><mtd><mi>{{$}}</mi></mtd><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\begin{pmatrix} {{$}} & {{$}} \\end{pmatrix}"
  }, {
    "id": "two-column-row-square-bracket",
    "mml": "<mfenced open=\"[\" close=\"]\"><mtable><mtr><mtd><mi>{{$}}</mi></mtd><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\begin{bmatrix} {{$}} & {{$}} \\end{bmatrix}"
  }, {
    "id": "two-row-column-left-curly-bracket",
    "mml": "<mfenced open=\"{\" close=\"\"><mtable columnalign=\"left\"><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\left\\{\\begin{matrix} {{$}} \\\\ {{$}} \\end{matrix}\\right."
  }, {
    "id": "two-row-column-parenthesis",
    "mml": "<mfenced><mtable><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\binom{{{$}}}{{{$}}}"
  }, {
    "id": "two-row-column-square-brackets",
    "mml": "<mfenced open=\"[\" close=\"]\"><mtable><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\begin{bmatrix} {{$}} \\\\ {{$}} \\end{bmatrix}"
  }, {
    "id": "two-rows-column-right-curly-brackets",
    "mml": "<mfenced open=\"\" close=\"}\"><mtable columnalign=\"right\"><mtr><mtd><mi>{{$}}</mi></mtd></mtr><mtr><mtd><mi>{{$}}</mi></mtd></mtr></mtable></mfenced>",
    "latex": "\\left.\\begin{matrix} {{$}} \\ {{$}} \\end{matrix}\\right\\}"
  }, {
    "id": "underscript-brace",
    "mml": "<munder><munder><mi>{{$}}</mi><mo>&#9183;</mo></munder><mrow><mi>{{$}}</mi></mrow></munder>",
    "latex": "\\underbrace{{{$}}}_{{{$}}}"
  }, {
    "id": "union",
    "mml": "<mo>&#8746;</mo>",
    "latex": "\\cup"
  }, {
    "id": "up-diagonal-strike",
    "mml": "<menclose notation=\"updiagonalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "up-down-arrow",
    "mml": "<mo>&#8597;</mo>",
    "latex": "\\updownarrow"
  }, {
    "id": "up-down-diagonal-strike",
    "mml": "<menclose notation=\"downdiagonalstrike updiagonalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "up-down-double-arrow",
    "mml": "<mo>&#8661;</mo>",
    "latex": "\\Updownarrow"
  }, {
    "id": "up-right-diagonal-ellipsis",
    "mml": "<mo>&#8944;</mo>",
    "latex": ""
  }, {
    "id": "upsilon",
    "mml": "<mi>&#965;</mi>",
    "latex": "\\upsilon"
  }, {
    "id": "upwards-arrow",
    "mml": "<mo>&#8593;</mo>",
    "latex": "\\uparrow"
  }, {
    "id": "upwards-arrow-left-downwards-arrow",
    "mml": "<mo>&#8645;</mo>",
    "latex": "\\uparrow\\!\\downarrow"
  }, {
    "id": "upwards-double-arrow",
    "mml": "<mo>&#8657;</mo>",
    "latex": "\\Uparrow"
  }, {
    "id": "upwards-harpoon-left-downwards-harpoon",
    "mml": "<mo>&#10606;</mo>",
    "latex": ""
  }, {
    "id": "vector-accent",
    "mml": "<mover><mi>{{$}}</mi><mo>&#8640;</mo></mover>",
    "latex": "\\vec{{{$}}}"
  }, {
    "id": "vertical-bars",
    "mml": "<mfenced open=\"|\" close=\"|\"><mi>{{$}}</mi></mfenced>",
    "latex": "\\left | {{$}} \\right |"
  }, {
    "id": "vertical-ellipsis",
    "mml": "<mo>&#8942;</mo>",
    "latex": "\\vdots"
  }, {
    "id": "vertical-strike",
    "mml": "<menclose notation=\"horizontalstrike\"><mi>{{$}}</mi></menclose>",
    "latex": ""
  }, {
    "id": "volume-integral",
    "mml": "<mo>&#8752;</mo>",
    "latex": ""
  }, {
    "id": "west-east-diagonal-arrow",
    "mml": "<mo>&#10529;</mo>",
    "latex": "\\wearrow"
  }, {
    "id": "xi",
    "mml": "<mi>&#958;</mi>",
    "latex": "\\xi"
  }, {
    "id": "z-transform",
    "mml": "<mo>&#437;</mo>",
    "latex": "\\mathcal{Z}"
  }, {
    "id": "zeta",
    "mml": "<mi>&#950;</mi>",
    "latex": "\\zeta"
  }];
})();
/**
 * Created by panos on 10/29/15.
 */


(function () {
  'use strict';

  window.panels = [{
    id: "symbols",
    width: 334,
    visible: true,
    sections: [{
      id: "basic-math",
      children: ["plus-sign", "minus-sign", "multiplication-sign", "division-sign", "middle-dot", "plus-minus-sign", "minus-plus-sign", "forward-slash", "set-minus", "reverse-set-minus", "reverse-slash", "reversed-prime", "asterisk", "ring-operator", "bullet", "degree-sign", "single-apostrophe", "double-apostrophe", "differential", "euler-number", "pi-number", "empty-set", "increment", "nabla", "infinity", "circled-asterisk", "circled-dot", "circled-dash", "circled-plus", "circled-times", "circled-division"]
    }, {
      id: "greek-letters",
      children: ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "theta-alt", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "pi-alt", "rho", "sigma", "final-sigma", "tau", "upsilon", "phi", "phi-alt", "chi", "psi", "omega", "capital-alpha", "capital-beta", "capital-gamma", "capital-delta", "capital-epsilon", "capital-zeta", "capital-eta", "capital-theta", "capital-iota", "capital-kappa", "capital-lambda", "capital-mu", "capital-nu", "capital-xi", "capital-omicron", "capital-pi", "capital-rho", "capital-sigma", "capital-tau", "capital-upsilon", "capital-phi", "capital-chi", "capital-psi", "capital-omega"]
    }, {
      id: "letter-symbols",
      children: ["alef", "ell", "real-part", "imaginary-part", "imaginary-unit-i", "quantity-j", "natural-numbers", "real-numbers", "integer-numbers", "complex-numbers", "imaginary-numbers", "rational-numbers", "prime-numbers", "script-capital-f", "script-capital-l", "script-capital-p", "z-transform"]
    }, {
      id: "relations",
      children: ["equal-operator", "identical-operator", "tilde-operator", "almost-equal", "aproximately-equal", "asymptotically-equal", "less-than-sign", "less-than-or-equal", "less-than-not-equal", "less-than-or-slanted-equal", "greater-than-sign", "greater-than-or-equal", "greater-than-not-equal", "greater-than-or-slanted-equal", "much-greater-than", "much-less-than", "not-equal", "not-identical", "not-tilde", "not-almost-equal", "not-aproximateley-equal", "proportional-to", "precedes", "succeedes"]
    }, {
      id: "sets",
      children: ["element-of", "not-element-of", "union", "intersection", "square-cap", "square-cup", "subset-of", "subset-of-or-equal-to", "superset-of", "superset-of-or-equal-to", "square-subset-of", "square-subset-or-equal", "square-superset-of", "square-superset-or-equal", "for-all", "not-sign", "contains-as-member", "does-not-contain-member", "normal-subgroup-of", "contains-normal-subgroup", "there-exists", "there-not-exists", "logical-and", "logical-or", "because", "therefore"]
    }, {
      id: "geometry",
      children: ["angle", "measured-angle", "spherical-angle", "circle", "triangle", "square", "parallelogram", "diamond", "parallel-to", "not-parallel-to", "perpendicular"]
    }]
  }, {
    id: "radial-script-fraction",
    width: 270,
    visible: false,
    sections: [{
      id: "fractions",
      children: ["fraction", "bevelled-fraction", "small-fraction", "bevelled-small-fraction"]
    }, {
      id: "roots",
      children: ["root", "square-root", "cube-root"]
    }, {
      id: "superscripts-subscripts",
      children: ["superscript", "subscript", "superscript-subscript", "element-over", "element-under", "element-underover", "left-subscript", "left-superscript", "left-superscript-subscript", "overscript-brace", "underscript-brace", "big-operator-subscript", "big-operator-subsuperscript", "big-operator-underoverscript", "big-operator-underscript"]
    }, {
      id: "spaces",
      children: ["normal-space", "digit-space", "thinner-space", "back-space"]
    }]
  }, {
    id: "integrals-limit",
    width: 388,
    visible: false,
    sections: [{
      id: "integrals",
      children: ["integral", "integral-subscript", "integral-subscript-differential", "double-integral", "triple-integral", "contour-integral", "surface-integral", "volume-integral", "definite-integral", "definite-integral-differential"]
    }, {
      id: "differentials",
      children: ["differential", "partial-differential", "derivative", "gradient", "partial-derivative"]
    }, {
      id: "limits",
      children: ["limit-infinity", "limit-underscript"]
    }, {
      id: "gradient-operators",
      children: ["curl", "divergence", "laplacian"]
    }, {
      id: "functions",
      children: ["sine", "cosine", "tangent", "secant", "cosecant", "cotangent", "arccosine", "arcsine", "arctangent", "exponential", "logarithm", "logarithm-base-n", "natural-logarithm", "inverse-sine", "inverse-cosine", "inverse-tangent", "inverse-cosecant", "inverse-cotangent", "inverse-secant"]
    }]
  }, {
    id: "big-operators",
    width: 235,
    visible: false,
    sections: [{
      id: "summation",
      children: ["sum", "sum-subscript", "sum-subscript-superscript", "sum-underscript", "sum-underoverscript"]
    }, {
      id: "product",
      children: ["product", "coproduct", "product", "product-subscript", "product-subscript-superscript", "product-underoverscript", "product-underscript"]
    }, {
      id: "union",
      children: ["big-union", "big-intersection", "big-square-cup", "big-square-cap"]
    }]
  }, {
    id: "matrices",
    width: 175,
    visible: false,
    sections: [{
      id: "tables",
      children: ["table", "matrix-parenthesis", "matrix-square-brackets", "matrix-vertical-bars"]
    }, {
      id: "rows-columns",
      children: ["three-column-row", "three-row-column", "two-column-row-parenthesis", "two-column-row-square-bracket", "two-row-column-left-curly-bracket", "two-row-column-parenthesis", "two-row-column-square-brackets", "two-rows-column-right-curly-brackets"]
    }, {
      id: "equation-parts",
      children: ["aligned-equations", "piecewise-function"]
    }]
  }, {
    id: "decorations",
    width: 205,
    visible: false,
    sections: [{
      id: "parenthesis",
      children: ["parenthesis", "curly-brackets", "angle-brackets", "square-brackets", "vertical-bars", "left-angle", "right-angle", "left-parenthesis", "right-parenthesis", "left-curly-bracket", "right-curly-bracket", "left-square-bracket", "right-square-bracket", "double-vertical-bars", "ceeling", "floor", "angle-brackets-bar"]
    }, {
      id: "accents",
      children: ["arrow-accent", "vector-accent", "bar-accent", "diaeresis-accent", "dot-accent", "hat-accent", "tilde-accent", "top-curly-bracket", "top-parenthesis", "bottom-curly-bracket", "bottom-parenthesis", "left-right-arrow-accent"]
    }, {
      id: "encloses",
      children: ["enclose-bottom", "enclose-top", "enclose-left", "enclose-right", "enclose-double-left", "enclose-double-right", "enclose-box", "enclose-rounded-box", "enclose-actuarial", "vertical-strike", "horizontal-strike", "horizontal-vertical-strikes", "down-diagonal-strike", "up-diagonal-strike", "up-down-diagonal-strike", "enclose-circle"]
    }]
  }, {
    id: "arrows",
    width: 290,
    visible: false,
    sections: [{
      id: "arrow-symbols",
      children: ["leftwards-arrow", "righwards-arrow", "downwards-arrow", "upwards-arrow", "up-down-arrow", "up-down-double-arrow", "downward-left-corner-arrow", "east-west-diagonal-arrow", "west-east-diagonal-arrow", "leftwards-arrow-from-bar", "leftwards-arrow-hook", "rightwards-arrow-from-bar", "rightwards-arrow-hook", "rightwards-arrow-over-leftwards-arrow", "rightwards-double-arrow", "leftwards-double-arrow", "left-right-arrow", "left-right-double-arrow", "leftwards-arrow-over-rightwards-arrow", "upwards-arrow-left-downwards-arrow", "downwards-arrow-left-upwards-arrow", "downwards-double-arrow", "upwards-double-arrow", "south-east-arrow", "south-west-arrow", "north-east-arrow", "north-west-arrow", "upwards-harpoon-left-downwards-harpoon", "downwards-harpoon-left-upwards-harpoon", "leftwards-harpoon-barb-downwards", "leftwards-harpoon-barb-upwards", "leftwards-harpoon-over-dash", "leftwards-harpoon-over-rightwards-harpoon", "rightwards-harpoon-barb-downwards", "rightwards-harpoon-below-dash", "rightwards-harpoon-over-leftwards-harpoon", "righwards-harpoon-barb-upwards"]
    }, {
      id: "ellipsis",
      children: ["horizontal-ellipsis", "vertical-ellipsis", "down-right-diagonal-ellipsis", "up-right-diagonal-ellipsis"]
    }, {
      id: "arrow-scripts",
      children: ["left-arrow-overscript", "left-arrow-underscript", "left-arrow-over-right-arrow-overscript", "left-arrow-over-right-arrow-underscript", "right-left-arrow-overscript", "right-left-arrow-underscript", "right-arrow-over-left-arrow-overscript", "right-arrow-over-left-arrow-underscript", "right-arrow-overscript", "right-arrow-subscript", "right-harpoon-over-left-harpoon-overscript", "right-harpoon-over-left-harpoon-underscript", "left-harpoon-over-right-harpoon-overscript", "left-harpoon-over-right-harpoon-underscript", "left-arrow-underoverscript", "left-arrow-over-right-arrow-underoverscript", "left-right-arrow-underoverscript", "right-arrow-over-left-arrow-underoverscript", "right-arrow-underoverscript", "right-harpoon-over-left-harpoon-underoverscript", "left-harpoon-over-right-harpoon-underoverscript"]
    }]
  }];
})();
/**
 * Created by panos on 11/3/15.
 */


(function () {
  'use strict';

  window.AreaPanel = function (panel, toolbar) {
    this.visible = panel.visible;
    this.id = panel.id;
    this.sectionWidth = panel.width;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-panel-area";
    this.element.id = this.id + "-panel-area";
    this.toolbar = toolbar;
    this.sections = [];
    this.panel = panel;
    this.createPanelArea();
    this.createSections(panel.sections);
  };

  AreaPanel.__name__ = ["AreaPanel"];
  AreaPanel.prototype = {
    createPanelArea: function createPanelArea() {
      //Panel area
      var panelAreaObj = this;
      this.panelArea = document.createElement("div");
      this.panelArea.className = "fm-editor-panel-area-container";
      this.panelAreaBox = document.createElement("div");
      this.panelAreaBox.className = "fm-editor-panel-area-box";
      this.panelArea.appendChild(this.panelAreaBox);
      this.element.appendChild(this.panelArea); //Button area

      this.panelButtonArea = document.createElement("div");
      this.panelButtonArea.className = "fm-editor-panel-area-button-container";
      this.panelButtonArea.innerHTML = "<div class='fm-editor-panel-area-moveup-button'><div class='arrow-up'></div></div>" + "<div class='fm-editor-panel-area-movedown-button'><div class='arrow-down'></div></div>" + "<div class='fm-editor-panel-area-popup-button'><div class='left-down-arrow'></div></div>";
      this.element.appendChild(this.panelButtonArea);
      var popupButton = this.panelButtonArea.getElementsByClassName("fm-editor-panel-area-popup-button")[0];
      popupButton.addEventListener("click", function (event) {
        panelAreaObj.toggleSections(event);
      });
      var moveDownButton = this.panelButtonArea.getElementsByClassName("fm-editor-panel-area-movedown-button")[0];
      moveDownButton.addEventListener("click", function (event) {
        panelAreaObj.scrollDownAreaBox();
      });
      var moveUpButton = this.panelButtonArea.getElementsByClassName("fm-editor-panel-area-moveup-button")[0];
      moveUpButton.addEventListener("click", function (event) {
        panelAreaObj.scrollUpAreaBox();
      });
    },
    createSections: function createSections(sections) {
      var sectionContainer = document.createElement("div");
      sectionContainer.className = "fm-editor-panel-area-section-container";
      var sectionBox = document.createElement("div");
      sectionBox.className = "fm-editor-panel-area-section-box";
      sectionBox.style.width = this.sectionWidth + "px";
      sectionContainer.appendChild(sectionBox);
      var sectionBoxContainer = document.createElement("div");
      sectionBoxContainer.className = "fm-editor-panel-area-section-box-container";
      sectionBox.appendChild(sectionBoxContainer);
      var sectionOverlapContainer = document.createElement("div");
      sectionOverlapContainer.className = "fm-editor-panel-area-section-overlap-container";
      sectionBoxContainer.appendChild(sectionOverlapContainer);
      var dropdownList = new DropdownList(this);
      sectionOverlapContainer.appendChild(dropdownList.element);

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        this.appendSection(section, sectionOverlapContainer, dropdownList, i == 0);
      }

      this.sectionsMountPoint = document.createElement("div");
      this.sectionsMountPoint.className = "fm-editor-panel-area-section-mount-point";
      this.sectionsMountPoint.appendChild(sectionContainer);
      this.element.appendChild(this.sectionsMountPoint);
    },
    toggleSections: function toggleSections(event) {
      if (this.sectionsMountPoint != null) {
        if (this.active) {
          this.hideSections(event);
        } else {
          this.showSections(event);
        }
      }

      event.stopPropagation();
      return false;
    },
    showSections: function showSections(event) {
      if (this.toolbar.activePanel != null) {
        this.toolbar.activePanel.hideSections(event);
      }

      this.sectionsMountPoint.style.display = "block";
      this.active = true;
      DomUtils.addClass(this.element, "active");
      this.toolbar.activePanel = this;
    },
    hideSections: function hideSections(event) {
      this.sectionsMountPoint.style.display = "none";
      this.active = false;
      DomUtils.removeClass(this.element, "active");
      this.toolbar.activePanel = null;
    },
    appendSection: function appendSection(section, sectionContainer, dropdownList, isActive) {
      var buttonSection = new ButtonSection(section, this);

      if (buttonSection.buttons.length > 0) {
        sectionContainer.appendChild(buttonSection.element);
        this.sections.push(buttonSection);
        dropdownList.addListItem(buttonSection, isActive);
      }
    },
    cloneButtonsToAreaBox: function cloneButtonsToAreaBox(section) {
      this.panelAreaBox.innerHTML = "";
      var buttonsContainer = document.createElement("div");
      buttonsContainer.className = "fm-editor-section-buttons";
      this.panelAreaBox.appendChild(buttonsContainer);

      for (var i = 0; i < section.buttons.length; i++) {
        var sectionButton = section.buttons[i];
        var newButton = new Button(sectionButton.id, section);
        buttonsContainer.appendChild(newButton.element);
      }

      this.panelAreaBox.style.marginTop = "0px";
    },
    scrollUpAreaBox: function scrollUpAreaBox() {
      var marginTop = this.getMarginTop();
      this.panelAreaBox.style.marginTop = Math.min(0, marginTop + 56) + "px";
    },
    scrollDownAreaBox: function scrollDownAreaBox() {
      var height = parseInt(this.panelAreaBox.scrollHeight);
      var marginTop = this.getMarginTop();
      this.panelAreaBox.style.marginTop = Math.min(0, Math.max(-height + 56 + height % 28, marginTop - 56)) + "px";
    },
    getMarginTop: function getMarginTop() {
      var marginTop = this.panelAreaBox.style.marginTop;
      if (marginTop.length == 0) marginTop = 0;
      return parseInt(marginTop);
    },
    redraw: function redraw() {
      this.sections = [];
      this.panelArea.parentNode.removeChild(this.panelArea);
      this.panelButtonArea.parentNode.removeChild(this.panelButtonArea);
      this.sectionsMountPoint.parentNode.removeChild(this.sectionsMountPoint);
      this.createPanelArea();
      this.createSections(this.panel.sections);
    },
    element: null,
    panelArea: null,
    panelButtonArea: null,
    panelAreaBox: null,
    sectionsMountPoint: null,
    sectionWidth: null,
    visible: false,
    active: false,
    sections: null,
    panel: null,
    id: null,
    toolbar: null,
    __class__: AreaPanel
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.Button = function (button, section) {
    this.id = button;
    this.element = document.createElement("span");
    this.element.className = "fm-editor-button math math-" + button;
    this.element.id = this.id + "-btn";
    this.section = section;
    this.createEvent();
    var button = this;
    this.element.addEventListener("click", function (event) {
      button.addEquationEvent.clientX = event.clientX;
      button.addEquationEvent.clientY = event.clientY;
      button.element.dispatchEvent(button.addEquationEvent);
    });
  };

  Button.__name__ = ["Button"];
  Button.prototype = {
    createEvent: function createEvent() {
      this.addEquationEvent = document.createEvent('Event');
      this.addEquationEvent.formulaAction = this.id;
      this.addEquationEvent.initEvent('addEquation', true, true);
    },
    element: null,
    addEquationEvent: null,
    id: null,
    section: null,
    __class__: Button
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.ButtonPanel = function (panel, toolbar) {
    this.visible = panel.visible;
    this.id = panel.id;
    this.name = trans[panel.id] || panel.id;
    this.sectionWidth = panel.width;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-panel";
    this.element.id = this.id + "-panel";
    this.toolbar = toolbar;
    this.panel = panel;
    this.sections = [];
    this.createPanelButton();
    this.createSections(panel.sections);
  };

  ButtonPanel.__name__ = ["ButtonPanel"];
  ButtonPanel.prototype = {
    createPanelButton: function createPanelButton() {
      this.buttonElement = document.createElement("div");
      this.buttonElement.className = "fm-editor-panel-button";
      var iconDiv = document.createElement("div");
      iconDiv.className = "fm-editor-panel-button-icon math math-" + this.id + "-btn";
      var labelDiv = document.createElement("div");
      labelDiv.className = "fm-editor-panel-button-label";
      labelDiv.innerHTML = this.name;
      var arrowDiv = document.createElement("div");
      arrowDiv.className = "arrow-down";
      this.buttonElement.appendChild(iconDiv);
      this.buttonElement.appendChild(labelDiv);
      this.buttonElement.appendChild(arrowDiv);
      this.element.appendChild(this.buttonElement);
      var buttonPanel = this;
      this.buttonElement.addEventListener("click", function (event) {
        buttonPanel.toggleSections(event);
      });
    },
    createSections: function createSections(sections) {
      var sectionDiv = document.createElement("div");
      sectionDiv.className = "fm-editor-section-container";
      sectionDiv.style.width = this.sectionWidth + "px";

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        this.appendSection(section, sectionDiv);
      }

      this.sectionsMountPoint = document.createElement("div");
      this.sectionsMountPoint.className = "fm-editor-section-mount-point";
      this.sectionsMountPoint.appendChild(sectionDiv);
      this.element.appendChild(this.sectionsMountPoint);
    },
    toggleSections: function toggleSections(event) {
      if (this.sectionsMountPoint != null) {
        if (this.active) {
          this.hideSections(event);
        } else {
          this.showSections(event);
        }
      }

      this.toolbar.mlangPanel.hideList();
      event.stopPropagation();
      return false;
    },
    showSections: function showSections(event) {
      if (this.toolbar.activePanel != null) {
        this.toolbar.activePanel.hideSections(event);
      }

      this.active = true;
      DomUtils.addClass(this.element, "active");
      var finalWidth = this.buttonElement.getBoundingClientRect().left + this.sectionWidth;

      if (finalWidth > document.body.clientWidth) {
        this.sectionsMountPoint.style.left = -this.sectionWidth + this.buttonElement.clientWidth + "px";
      } else {
        this.sectionsMountPoint.style.left = "-1px";
      }

      this.toolbar.activePanel = this;
    },
    hideSections: function hideSections(event) {
      this.active = false;
      DomUtils.removeClass(this.element, "active");
      this.toolbar.activePanel = null;
    },
    appendSection: function appendSection(section, sectionDiv) {
      var buttonSection = new ButtonSection(section, this);

      if (buttonSection.buttons.length > 0) {
        sectionDiv.appendChild(buttonSection.element);
        this.sections.push(buttonSection);
      }
    },
    redraw: function redraw() {
      this.sections = [];
      this.sectionsMountPoint.parentNode.removeChild(this.sectionsMountPoint);
      this.createSections(this.panel.sections);
    },
    element: null,
    sectionsMountPoint: null,
    buttonElement: null,
    sectionWidth: null,
    visible: false,
    active: false,
    sections: null,
    panel: null,
    id: null,
    name: null,
    toolbar: null,
    __class__: ButtonPanel
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.ButtonSection = function (section, panel) {
    this.id = section.id;
    this.name = section.name || trans[section.id] || section.id;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-section";
    this.element.id = this.id + "-section";
    this.panel = panel;
    this.createTitle();
    this.buttons = [];

    if (section.children && section.children.length > 0) {
      this.createButtons(section.children);
    }
  };

  ButtonSection.__name__ = ["ButtonSection"];
  ButtonSection.prototype = {
    createButtons: function createButtons(buttons) {
      var actionsHash = this.panel.toolbar.editor.actions;
      var mlang = this.panel.toolbar.editor.mlang;
      var buttonsElt = document.createElement("div");
      buttonsElt.className = "fm-editor-section-buttons";

      for (var i = 0; i < buttons.length; i++) {
        var child = buttons[i];
        var action = actionsHash.get(child);

        if (!!action && !!action[mlang]) {
          var button = new Button(child, this);
          buttonsElt.appendChild(button.element);
          this.buttons.push(button);
        }
      }

      this.element.appendChild(buttonsElt);
    },
    createTitle: function createTitle() {
      var title = document.createElement("div");
      title.className = "fm-editor-section-title";
      title.innerHTML = this.name;
      this.element.appendChild(title);
    },
    setActive: function setActive() {
      if (!this.active) {
        DomUtils.addClass(this.element, "active");
        this.active = true;
      }
    },
    unsetActive: function unsetActive() {
      if (this.active) {
        DomUtils.removeClass(this.element, "active");
        this.active = false;
      }
    },
    element: null,
    active: false,
    buttons: null,
    id: null,
    name: null,
    panel: null,
    __class__: ButtonSection
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.DropdownList = function (areaPanel) {
    this.areaPanel = areaPanel;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-dropdown fm-editor-dropdown-button";
    this.element.id = areaPanel.id + "-dropdown";
    this.createLabel();
    this.createList();
  };

  DropdownList.__name__ = ["DropdownList"];
  DropdownList.prototype = {
    createLabel: function createLabel() {
      this.labelButton = document.createElement("div");
      this.labelButton.className = "fm-editor-dropdown-label-button";
      this.labelButtonText = document.createElement("div");
      this.labelButtonText.className = "fm-editor-dropdown-label-button-text";
      this.labelButton.appendChild(this.labelButtonText);
      var arrowDown = document.createElement("div");
      arrowDown.className = "arrow-down";
      this.labelButton.appendChild(arrowDown);
      this.element.appendChild(this.labelButton);
      var dropdownList = this;
      this.labelButton.addEventListener("click", function (event) {
        dropdownList.toggleList(event);
      });
    },
    createList: function createList() {
      this.listMountPoint = document.createElement("div");
      this.listMountPoint.className = "fm-editor-dropdown-list-mount-point";
      var listElement = document.createElement("div");
      listElement.className = "fm-editor-dropdown-list-items";
      this.listItemContainer = document.createElement("div");
      this.listItemContainer.className = "fm-editor-dropdown-list-items-container";
      listElement.appendChild(this.listItemContainer);
      this.listMountPoint.appendChild(listElement);
      this.element.appendChild(this.listMountPoint);
    },
    toggleList: function toggleList(event) {
      if (this.active) {
        this.hideList(event);
      } else {
        this.showList(event);
      }

      event.stopPropagation();
      return false;
    },
    hideList: function hideList(event) {
      DomUtils.removeClass(this.listMountPoint, "active");
      this.active = false;
    },
    showList: function showList(event) {
      DomUtils.addClass(this.listMountPoint, "active");
      this.active = true;
    },
    addListItem: function addListItem(section, setActive) {
      var item = new DropdownListItem(section, this);
      this.listItemContainer.appendChild(item.element);

      if (setActive) {
        item.setActive();
      }
    },
    changeActiveItem: function changeActiveItem(item) {
      if (this.activeItem !== null) {
        this.activeItem.unsetActive();
      }

      this.activeItem = item;
      this.labelButtonText.innerHTML = item.name;
      this.areaPanel.cloneButtonsToAreaBox(this.activeItem.section);
    },
    element: null,
    active: false,
    labelButton: null,
    labelButtonText: null,
    listMountPoint: null,
    listItemContainer: null,
    activeItem: null,
    areaPanel: null,
    __class__: DropdownList
  };
})();
/**
 * Created by panos on 11/5/15.
 */


(function () {
  'use strict';

  window.DropdownListItem = function (section, dropdownList) {
    this.id = section.id;
    this.name = section.name;
    this.element = document.createElement("div");
    this.element.className = "fm-editor-dropdown-list-item";
    this.element.id = this.id + "-list-item";
    this.section = section;
    this.dropdownList = dropdownList;
    this.element.innerHTML = this.name;
    this.addListener();
  };

  DropdownListItem.__name__ = ["DropdownListItem"];
  DropdownListItem.prototype = {
    addListener: function addListener() {
      var item = this;
      this.element.addEventListener("click", function (event) {
        item.changeActive(event);
      });
    },
    changeActive: function changeActive(event) {
      this.setActive();
      this.dropdownList.hideList(event);
      event.stopPropagation();
      return false;
    },
    setActive: function setActive() {
      this.dropdownList.changeActiveItem(this);
      this.section.setActive();

      if (!this.active) {
        DomUtils.addClass(this.element, "active");
        this.active = true;
      }
    },
    unsetActive: function unsetActive() {
      this.section.unsetActive();

      if (this.active) {
        DomUtils.removeClass(this.element, "active");
        this.active = false;
      }
    },
    element: null,
    active: false,
    id: null,
    name: null,
    section: null,
    dropdownList: null,
    __class__: DropdownListItem
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.Editor = function (actions, panels, parameters) {
    this.lang = parameters.lang || this.lang;
    this.id = parameters.id || this.id;
    this.lang = this.lang.replace(/_[a-zA-Z]+/g, "").toLocaleLowerCase();
    this.mlang = parameters.mlang || this.mlang;
    this.initEquation = parameters.equation || this.initEquation;
    this.buildActionsHash(actions);
    this.panels = panels;
    var editor = this;
    DomUtils.loadJsFile("js/translations/" + this.lang + ".js", function () {
      editor.init();
    }, "js/translations/fr.js");
  };

  Editor.__name__ = ["Editor"];
  Editor.prototype = {
    init: function init() {
      this.element = document.createElement("div");
      this.element.className = "fm-editor";
      this.createToolbar(this.panels);
      this.createTextArea();
      this.createResultArea();
      document.getElementById('' + this.id + '').appendChild(this.element);
      this.createMatixActionPopup();
      var editor = this;
      this.element.addEventListener("addEquation", function (event) {
        editor.addEquation(event);
      });
      document.addEventListener("click", function (e) {
        if (editor.toolbar.activePanel != null) {
          editor.toolbar.activePanel.hideSections(e);
        }

        editor.toolbar.mlangPanel.hideList();

        if (e.target.id.indexOf("btn") == -1 || e.target.id.indexOf("table") == -1 && e.target.id.indexOf("matrix") == -1) {
          editor.hideMatrixPopup();
        }
      });

      if (this.initEquation !== null) {
        this.insertEquationToTextarea(decodeURIComponent(this.initEquation));
      }
    },
    createToolbar: function createToolbar(panels) {
      this.toolbar = new Toolbar(panels, this);
      this.element.appendChild(this.toolbar.element);
    },
    addEquation: function addEquation(event) {
      var actionHash = this.actions.get(event.formulaAction);
      var equation = actionHash[this.mlang];

      if (actionHash.matrix) {
        this.currentMatrixEquation = equation;
        this.showMatrixPopup(event.clientX, event.clientY);
      } else {
        var regex = /\{\{\$\}\}/g;
        var matches = equation.match(regex);

        if (matches && matches.length > 0) {
          if (matches == 1) {
            equation = equation.replace(regex, "x");
          } else {
            var cnt = 1;
            equation = equation.replace(regex, function () {
              return "x" + cnt++;
            });
          }
        }

        equation = equation.trim();
        this.insertEquationToTextarea(equation);
      }
    },
    insertEquationToTextarea: function insertEquationToTextarea(equation) {
      if (this.mlang == "latex") {
        equation = equation + " ";
      }

      this.textarea.insertAtCaret(equation);
      this.renderEquationToResultarea(this.textarea.value);
    },
    insertMatrixToTextarea: function insertMatrixToTextarea() {
      var rows = parseInt(document.getElementById("fm-editor-matrix-rows").value);
      var columns = parseInt(document.getElementById("fm-editor-matrix-columns").value);
      var equation = this.currentMatrixEquation;
      this.hideMatrixPopup();

      if (equation !== null && rows > 0 && columns > 0) {
        var matrixCode = "";

        if (this.mlang == "latex") {
          matrixCode = this.createMatrixCodeLatex(rows, columns);
        } else {
          matrixCode = this.createMatrixCodeMml(rows, columns);
        }

        equation = equation.replace(/\{\{\$\}\}/g, matrixCode);
        equation = equation.trim();
        this.insertEquationToTextarea(equation);
      }
    },
    createMatrixCodeLatex: function createMatrixCodeLatex(rows, columns) {
      var matrixCode = "";

      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < columns; i++) {
          matrixCode += " x_" + (i + 1 + j * columns);

          if (i < columns - 1) {
            matrixCode += " &";
          } else {
            matrixCode += " ";
          }
        }

        if (j < rows - 1) {
          matrixCode += "\\\\";
        }
      }

      return matrixCode;
    },
    createMatrixCodeMml: function createMatrixCodeMml(rows, columns) {
      var matrixCode = "";

      for (var j = 0; j < rows; j++) {
        matrixCode += "<mtr>";

        for (var i = 0; i < columns; i++) {
          matrixCode += "<mtd><msub><mi>x</mi><mi>" + (i + 1 + j * columns) + "</mi></msub></mtd>";
        }

        matrixCode += "</mtr>";
      }

      return matrixCode;
    },
    renderEquationToResultarea: function renderEquationToResultarea(equation) {
      equation = equation || "";

      if (equation.trim() !== "") {
        if (this.mlang == "latex") {
          equation = "$$" + equation.trim() + "$$";
        } else {
          equation = "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" mode=\"display\">" + equation.trim() + "</math>";
        }

        this.toolbar.mlangPanel.disable();
        this.resultarea.innerHTML = equation;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.resultarea]);
      } else {
        this.toolbar.mlangPanel.enable();
        this.resultarea.innerHTML = "";
      }
    },
    createTextArea: function createTextArea() {
      var textAreaContainer = document.createElement("div");
      textAreaContainer.className = "fm-editor-content-area";
      this.textarea = document.createElement("textarea");
      this.textarea.className = "fm-editor-content";
      textAreaContainer.appendChild(this.textarea);
      this.element.appendChild(textAreaContainer);
      var editor = this;
      this.textarea.addEventListener('input', function () {
        editor.renderEquationToResultarea(this.value);
      });
    },
    createResultArea: function createResultArea() {
      var resultAreaContainer = document.createElement("div");
      resultAreaContainer.className = "fm-editor-result-area";
      var resultAreaLabel = document.createElement("div");
      resultAreaLabel.className = "fm-editor-result-area-label";
      resultAreaLabel.innerHTML = trans["result"] || "result";
      this.resultarea = document.createElement("div");
      this.resultarea.className = "fm-editor-result-area-inner";
      resultAreaContainer.appendChild(resultAreaLabel);
      resultAreaContainer.appendChild(this.resultarea);
      this.element.appendChild(resultAreaContainer);
    },
    createMatixActionPopup: function createMatixActionPopup() {
      this.matrixPopupMount = document.createElement("div");
      this.matrixPopupMount.className = "fm-editor-matrix-popup-mount";
      var matrixPopupContainer = document.createElement("div");
      matrixPopupContainer.className = "fm-editor-matrix-popup-container";
      matrixPopupContainer.innerHTML = "<table>" + "<tr><td>" + (trans["rows"] || "rows") + ":</td><td><input id=\"fm-editor-matrix-rows\" type='number' name='matrix-rows'/></td></tr>" + "<tr><td>" + (trans["columns"] || "columns") + ":</td><td><input id=\"fm-editor-matrix-columns\" type='number' name='matrix-columns'/></td></tr>" + "<tr><td colspan='2'><button type='button' id='fm-editor-matrix-create-btn'>" + (trans["ok"] || "ok") + "</button></td></tr>" + "</table>";
      this.matrixPopupMount.appendChild(matrixPopupContainer);
      this.element.appendChild(this.matrixPopupMount); //Adding listeners

      var editor = this;
      this.matrixPopupMount.addEventListener("click", function (event) {
        event.stopPropagation();
        return false;
      });
      document.getElementById("fm-editor-matrix-create-btn").addEventListener("click", function () {
        editor.insertMatrixToTextarea();
      });
      document.getElementById("fm-editor-matrix-rows").addEventListener("keypress", function (event) {
        if (event.which == 13 || event.keyCode == 13) {
          document.getElementById("fm-editor-matrix-columns").focus();
        }
      });
      document.getElementById("fm-editor-matrix-columns").addEventListener("keypress", function (event) {
        if (event.which == 13 || event.keyCode == 13) {
          editor.insertMatrixToTextarea();
        }
      });
    },
    showMatrixPopup: function showMatrixPopup(x, y) {
      var rowsInput = document.getElementById("fm-editor-matrix-rows");
      rowsInput.value = 2;
      document.getElementById("fm-editor-matrix-columns").value = 2;
      DomUtils.addClass(this.matrixPopupMount, "active");
      this.matrixPopupMount.style.top = y - 40 + "px";
      this.matrixPopupMount.style.left = x - 20 + "px";
      rowsInput.focus();
    },
    hideMatrixPopup: function hideMatrixPopup() {
      DomUtils.removeClass(this.matrixPopupMount, "active");
      this.currentMatrixEquation = null;
    },
    buildActionsHash: function buildActionsHash(actions) {
      this.actions = new HashArray();

      for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        this.actions.set(action.id, action);
      }
    },
    getEquationPng: function getEquationPng(callback) {
      var svg = this.resultarea.getElementsByTagName("svg")[0];

      if (svg) {
        svg = svg.cloneNode(true);
        var editor = this;
        DomUtils.replaceSVGUseWithGraphElements(svg);
        var image = new Image();

        image.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          var context = canvas.getContext("2d");
          context.drawImage(image, 0, 0);
          var imgSrc = canvas.toDataURL('image/png');
          var mlang = editor.mlang;
          var equation = editor.textarea.value.trim();
          callback(imgSrc, mlang, equation);
        };

        var svgAsXml = new XMLSerializer().serializeToString(svg);
        image.src = 'data:image/svg+xml,' + encodeURIComponent(svgAsXml);
      } else {
        callback(null, null, null);
      }
    },
    panels: null,
    element: null,
    toolbar: null,
    actions: null,
    textarea: null,
    resultarea: null,
    currentMatrixEquation: null,
    matrixPopupMount: null,
    lang: "en",
    mlang: "latex",
    initEquation: null,
    __class__: Editor
  };
})();
/**
 * Created by panos on 11/12/15.
 */


(function () {
  'use strict';

  window.MlangPanel = function (toolbar) {
    this.id = "mlang";
    this.element = document.createElement("div");
    this.element.className = "fm-editor-panel";
    this.toolbar = toolbar;
    this.currentMlang = this.toolbar.editor.mlang;
    this.createPanelButton();
    this.createList();
  };

  MlangPanel.__name__ = ["MlangPanel"];
  MlangPanel.prototype = {
    createPanelButton: function createPanelButton() {
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "fm-editor-panel-button";
      var iconDiv = document.createElement("div");
      iconDiv.className = "fm-editor-panel-button-icon math math-" + this.id + "-btn";
      this.labelButtonText = document.createElement("div");
      this.labelButtonText.className = "fm-editor-panel-button-label";
      this.labelButtonText.innerHTML = this.mlangs[this.currentMlang];
      var arrowDiv = document.createElement("div");
      arrowDiv.className = "arrow-down";
      buttonDiv.appendChild(iconDiv);
      buttonDiv.appendChild(this.labelButtonText);
      buttonDiv.appendChild(arrowDiv);
      this.element.appendChild(buttonDiv);
      var mlangPanel = this;
      buttonDiv.addEventListener("click", function (event) {
        if (mlangPanel.enabled) mlangPanel.toggleList(event);

        if (mlangPanel.toolbar.activePanel != null) {
          mlangPanel.toolbar.activePanel.hideSections(event);
        }

        event.stopPropagation();
        return false;
      });
    },
    createList: function createList() {
      this.listMountPoint = document.createElement("div");
      this.listMountPoint.className = "fm-editor-dropdown-list-mount-point";
      var listElement = document.createElement("div");
      listElement.className = "fm-editor-dropdown-list-items";
      this.listItemContainer = document.createElement("div");
      this.listItemContainer.className = "fm-editor-dropdown-list-items-container"; // Create latex and mml dropdown items

      var latexSection = new ButtonSection({
        id: "latex",
        name: "LaTeX",
        children: []
      }, this);
      var latexItem = new DropdownListItem(latexSection, this);
      this.listItemContainer.appendChild(latexItem.element);
      var mmlSection = new ButtonSection({
        id: "mml",
        name: "MathML",
        children: []
      }, this);
      var mmlItem = new DropdownListItem(mmlSection, this);
      this.listItemContainer.appendChild(mmlItem.element);

      if (this.currentMlang == "latex") {
        latexItem.setActive();
      } else {
        mmlItem.setActive();
      }

      listElement.appendChild(this.listItemContainer);
      this.listMountPoint.appendChild(listElement);
      this.element.appendChild(this.listMountPoint);
    },
    toggleList: function toggleList(event) {
      if (this.active) {
        this.hideList();
      } else {
        this.showList();
      }
    },
    showList: function showList() {
      DomUtils.addClass(this.listMountPoint, "active");
      this.active = true;
    },
    hideList: function hideList() {
      DomUtils.removeClass(this.listMountPoint, "active");
      this.active = false;
    },
    changeActiveItem: function changeActiveItem(item) {
      if (this.activeItem != null) {
        this.activeItem.unsetActive();
        this.toolbar.editor.mlang = item.id;
        this.toolbar.redraw();
      }

      this.activeItem = item;
      this.labelButtonText.innerHTML = item.name;
    },
    disable: function disable() {
      if (this.enabled) {
        this.enabled = false;
        DomUtils.addClass(this.element, "disabled");
      }
    },
    enable: function enable() {
      if (!this.enabled) {
        this.enabled = true;
        DomUtils.removeClass(this.element, "disabled");
      }
    },
    enabled: true,
    active: false,
    activeItem: null,
    element: null,
    labelButtonText: null,
    listItemContainer: null,
    listMountPoint: null,
    currentMlang: null,
    toolbar: null,
    mlangs: {
      "latex": "LaTeX",
      "mml": "MathML"
    },
    __class__: MlangPanel
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.Toolbar = function (panels, editor) {
    this.element = document.createElement("div");
    this.element.className = "fm-editor-toolbar";
    this.editor = editor;
    this.createPanels(panels);
  };

  Toolbar.__name__ = ["Toolbar"];
  Toolbar.prototype = {
    createPanels: function createPanels(panels) {
      this.panels = [];
      this.activePanel = null;
      var panelDiv = document.createElement("div");
      panelDiv.className = "fm-editor-panel-container";
      this.createMlangPanel(panelDiv);

      for (var i = 0; i < panels.length; i++) {
        var panel = panels[i];

        if (panel.visible) {
          var panelObj = new AreaPanel(panel, this);
        } else {
          var panelObj = new ButtonPanel(panel, this);
        }

        panelDiv.appendChild(panelObj.element);
        this.panels.push(panelObj);
      }

      this.element.appendChild(panelDiv);
    },
    createMlangPanel: function createMlangPanel(parentDiv) {
      this.mlangPanel = new MlangPanel(this);
      parentDiv.appendChild(this.mlangPanel.element);
    },
    redraw: function redraw() {
      for (var i = 0; i < this.panels.length; i++) {
        var panel = this.panels[i];
        panel.redraw();
      }
    },
    element: null,
    activePanel: null,
    mlangPanel: null,
    editor: null,
    panels: null,
    __class__: Toolbar
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.ArrayIterator = function (a) {
    this.arr = a;
  };

  ArrayIterator.__name__ = ["ArrayIterator"];
  ArrayIterator.prototype = {
    hasNext: function hasNext() {
      return this.cur < this.arr.length;
    },
    next: function next() {
      return this.arr[this.cur++];
    },
    cur: 0,
    arr: [],
    __class__: ArrayIterator
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.HashArray = function () {
    this.obj = {};
  };

  HashArray.__name__ = ["HashArray"];
  HashArray.prototype = {
    toString: function toString() {
      var str = "";
      str += "{";
      var it = this.keys();

      while (it.hasNext()) {
        var i = it.next();
        str += i;
        str += " => ";
        str += this.get(i);
        if (it.hasNext()) str += ", ";
      }

      ;
      str += "}";
      return str;
    },
    iterator: function iterator() {
      return {
        ref: this.obj,
        it: this.keys(),
        hasNext: function hasNext() {
          return this.it.hasNext();
        },
        next: function next() {
          var i = this.it.next();
          return this.ref["$" + i];
        }
      };
    },
    keys: function keys() {
      var a = [];

      for (var vParameter in this.obj) {
        if (this.obj.hasOwnProperty(vParameter)) a.push(vParameter.substr(1));
      }

      ;
      return ArrayIterator(a);
    },
    remove: function remove(vParameter) {
      vParameter = "$" + vParameter;
      if (!this.obj.hasOwnProperty(vParameter)) return false;
      delete this.obj[vParameter];
      return true;
    },
    exists: function exists(vParameter) {
      return this.obj.hasOwnProperty("$" + vParameter);
    },
    get: function get(vParameter) {
      return this.obj["$" + vParameter];
    },
    set: function set(vParameter, value) {
      this.obj["$" + vParameter] = value;
    },
    obj: null,
    __class__: HashArray
  };
})();
/**
 * Created by panos on 10/16/15.
 */


(function () {
  'use strict';

  window.DomUtils = {
    hasClass: function hasClass(el, className) {
      if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },
    addClass: function addClass(el, className) {
      if (el.classList) el.classList.add(className);else if (!this.hasClass(el, className)) el.className += " " + className;
    },
    removeClass: function removeClass(el, className) {
      if (el.classList) el.classList.remove(className);else if (this.hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
      }
    },
    loadJsFile: function loadJsFile(filename, onLoadCallback, defaultFilename) {
      var fileref = document.createElement('script');

      if (defaultFilename) {
        fileref.onerror = function () {
          DomUtils.loadJsFile(defaultFilename, onLoadCallback);
        };
      }

      fileref.onload = onLoadCallback;
      fileref.type = "text/javascript";
      fileref.src = filename;
      document.getElementsByTagName("head")[0].appendChild(fileref);
    },
    replaceSVGUseWithGraphElements: function replaceSVGUseWithGraphElements(svg) {
      var useElements = svg.getElementsByTagName("use");
      var originalElements = [];
      var newUseElements = []; // Get all use elements

      for (var i = 0; i < useElements.length; i++) {
        var useElement = useElements[i];
        var originalElementId = useElement.getAttribute("href").replace("#", "");
        var originalElement = document.getElementById(originalElementId).cloneNode(true);
        originalElement.id += "-c-" + new Date().getTime();
        var position = {}; //For every element get all attributes and copy them to graph element

        for (var j = 0; j < useElement.attributes.length; j++) {
          var attribute = useElement.attributes[j];

          if (attribute.nodeName !== "href" && attribute.nodeName !== "x" && attribute.nodeName !== "y") {
            originalElement.setAttribute(attribute.nodeName, attribute.nodeValue);
          } else if (attribute.nodeName == "x" || attribute.nodeName == "y") {
            //If position attributes (x or y) are set, create a position element
            position[attribute.nodeName] = attribute.nodeValue;
          }
        } //If position element is set then add or change tranform attribute


        if (position.x) {
          var positionStr = (position.x || 0) + ", " + (position.y || 0);
          var transform = originalElement.getAttribute("transform") || "";
          if (transform !== "") transform += " ";
          transform += "translate(" + positionStr + ")";
          originalElement.setAttribute("transform", transform);
        }

        originalElements.push(originalElement);
        newUseElements.push(useElement);
      }

      for (var i = 0; i < originalElements.length; i++) {
        var tmp = newUseElements[i];
        newUseElements[i] = i;
        tmp.parentNode.replaceChild(originalElements[i], tmp);
      }
    }
  };

  HTMLTextAreaElement.prototype.insertAtCaret = function (text) {
    text = text || '';

    if (document.selection) {
      // IE
      this.focus();
      var sel = document.selection.createRange();
      sel.text = text;
    } else if (this.selectionStart || this.selectionStart === 0) {
      // Others
      var startPos = this.selectionStart;
      var endPos = this.selectionEnd;
      this.value = this.value.substring(0, startPos) + text + this.value.substring(endPos, this.value.length);
      this.selectionStart = startPos + text.length;
      this.selectionEnd = startPos + text.length;
    } else {
      this.value += text;
    }
  };

  HTMLTextAreaElement.prototype.getCaret = function () {
    if (this.selectionStart) {
      return this.selectionStart;
    } else if (document.selection) {
      this.focus();
      var r = document.selection.createRange();

      if (r == null) {
        return 0;
      }

      var re = this.createTextRange(),
          rc = re.duplicate();
      re.moveToBookmark(r.getBookmark());
      rc.setEndPoint('EndToStart', re);
      return rc.text.length;
    }

    return 0;
  };

  window.Url = {
    get get() {
      var vars = {};
      if (window.location.search.length !== 0) window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        key = decodeURIComponent(key);

        if (typeof vars[key] === "undefined") {
          vars[key] = decodeURIComponent(value);
        } else {
          vars[key] = [].concat(vars[key], decodeURIComponent(value));
        }
      });
      return vars;
    }

  };
})();

/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a078":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var getIteratorMethod = __webpack_require__("35a1");
var isArrayIteratorMethod = __webpack_require__("e95a");
var bind = __webpack_require__("0366");
var aTypedArrayConstructor = __webpack_require__("ebb5").aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];
    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $every = __webpack_require__("b727").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "a981":
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b37a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b39a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var ArrayBufferViewCore = __webpack_require__("ebb5");
var fails = __webpack_require__("d039");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c1ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $filter = __webpack_require__("b727").filter;
var speciesConstructor = __webpack_require__("4840");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ca91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $reduce = __webpack_require__("d58f").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cd26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d139":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $find = __webpack_require__("b727").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d23b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d5d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $forEach = __webpack_require__("b727").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01d":
/***/ (function(module, exports) {

!function () {
  "use strict";

  window.trans = {
    symbols: "Symboles",
    "basic-math": "Générales",
    "greek-letters": "Caractères grecs",
    "letter-symbols": "Autres caractères",
    relations: "Relations",
    sets: "Ensembles",
    geometry: "Géométrie",
    "radial-script-fraction": "Racines, fractions, exposants",
    fractions: "Fractions",
    roots: "Racines",
    "superscripts-subscripts": "Exposants, indices",
    spaces: "Espaces",
    "integrals-limit": "Intégrales, limites",
    integrals: "Intégrales",
    differentials: "Differentielles",
    limits: "Limites",
    "gradient-operators": "Gradient",
    functions: "Fonctions",
    "big-operators": "Grands opérateurs",
    summation: "Somme",
    product: "Produit",
    union: "Union",
    matrices: "Matrices",
    tables: "Matrices",
    "rows-columns": "Lignes, colonnes",
    "equation-parts": "Parties d'équations",
    decorations: "Décorations",
    parenthesis: "Parenthèses",
    accents: "Accents",
    encloses: "Tirets, encadrements",
    arrows: "Flèches",
    "arrow-symbols": "Flèches",
    ellipsis: "Points de suspension",
    "arrow-scripts": "Flèches avec exposants",
    result: "Résultat",
    rows: "Lignes",
    columns: "Colonnes",
    ok: "Ok"
  };
}();

/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e58c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
// For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e91f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("ebb5");
var $indexOf = __webpack_require__("4d64").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "ebb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("a981");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var classof = __webpack_require__("f5df");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var defineProperty = __webpack_require__("9bf2").f;
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var wellKnownSymbol = __webpack_require__("b622");
var uid = __webpack_require__("90e3");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8cd":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"abb3162a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/editor.vue?vue&type=template&id=2bbdbb77&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor"},[_c('div',{staticClass:"editor-header"},[_c('ul',[_c('li',[_c('input',{ref:"uploadImg",staticClass:"uploadImg",attrs:{"type":"file"},on:{"change":_vm.onClickUploadImg}}),_c('i',{staticClass:"iconfont"},[_vm._v("")])]),_c('li',{on:{"click":_vm.onChooseFormula}},[_c('i',{staticClass:"iconfont"},[_vm._v("")])]),_c('li',{on:{"click":_vm.onClear}},[_c('i',{staticClass:"iconfont"},[_vm._v("")])])])]),_c('div',{ref:"edit-div",staticClass:"edit-div",attrs:{"id":'edit-' + _vm.id,"contenteditable":true},domProps:{"innerHTML":_vm._s(_vm.innerText)},on:{"blur":_vm.editorBlur,"input":_vm.changeText}}),_c('el-dialog',{attrs:{"title":"添加特殊符号","visible":_vm.formulaDialogVisible,"width":"800","append-to-body":""},on:{"update:visible":function($event){_vm.formulaDialogVisible=$event}}},[_c('div',{attrs:{"id":_vm.id}}),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.onChooseFormulaCancle}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onConfirmFormula}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/editor.vue?vue&type=template&id=2bbdbb77&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__("5cc6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__("9a8c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__("a975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__("735e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__("c1ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__("d139");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__("3a7b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__("d5d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__("82f8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__("e91f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__("60bd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__("5f96");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__("3280");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__("3fcc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__("ca91");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__("25a1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__("cd26");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("3c5d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__("2954");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__("649e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__("219c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__("170b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__("b39a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__("72f7");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./src/utils/utils.js
var utils = {
  isEmpty: function isEmpty(value) {
    if (value == null) {
      return true;
    }

    for (var key in value) {
      return false;
    }

    return true;
  }
};
/* harmony default export */ var utils_utils = (utils);
// EXTERNAL MODULE: ./src/assets/css/iconfont/iconfont.css
var iconfont = __webpack_require__("b37a");

// EXTERNAL MODULE: ./src/lib/formula/js/formula.js
var formula = __webpack_require__("9ea5");

// EXTERNAL MODULE: ./src/lib/formula/css/formula.min.css
var formula_min = __webpack_require__("d23b");

// EXTERNAL MODULE: ./src/lib/formula/js/translations/fr.js
var fr = __webpack_require__("e01d");

// EXTERNAL MODULE: ./src/lib/formula/js/translations/en.js
var en = __webpack_require__("8bd3");

// EXTERNAL MODULE: ./src/lib/formula/js/translations/es.js
var es = __webpack_require__("6841");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/editor.vue?vue&type=script&lang=js&
































//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_SVG';
document.head.appendChild(script);







/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "EditorPanel",
  props: {
    value: {
      type: String,
      default: '请在这里编辑'
    },
    id: {
      type: String,
      default: 'fm-editor'
    }
  },
  data: function data() {
    return {
      content: '请在这里编辑',
      name: this.id,
      imageUrl: '',
      range: {},
      // 页面光标停止range
      formulaObj: {},
      //特殊符号对象
      formulaDialogVisible: false,
      innerText: this.value ? this.value : '请在这里编辑'
    };
  },
  watch: {
    content: function content(newval) {
      var contentData = '<div>' + newval + '</div>';
      this.$emit('input', contentData);
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.getElementById('edit-' + this.id).addEventListener('paste', function (e) {
      _this.pasteImg(e);
    }, false);
  },
  methods: {
    onClear: function onClear() {
      this.content = "";
      this.$refs['edit-div'].innerHTML = '';
    },
    editorBlur: function editorBlur(e) {
      var sel = window.getSelection();
      this.range = sel.getRangeAt(0);
    },
    onClickUploadImg: function onClickUploadImg(e) {
      var file = e.target.files[0];
      this.onUploadImg(file);
    },
    onUploadImg: function onUploadImg(file) {
      var _this2 = this;

      this.imageUrl = '';
      this.uploadImg(file, function (res) {
        if (res.success) {
          if (res.result.sArray[0]) {
            _this2.imageUrl = res.result.sArray[0].url;
            var imageNode = document.createElement('img');
            imageNode.src = _this2.imageUrl;

            if (utils_utils.isEmpty(_this2.range)) {
              _this2.content += "<img src=\"".concat(_this2.imageUrl, "\" />");
              _this2.innerText += "<img src=\"".concat(_this2.imageUrl, "\" />");
            } else {
              _this2.range.insertNode(imageNode);

              var editDivInnerHtml = document.getElementsByClassName('edit-div')[0].innerHTML;
              _this2.content = editDivInnerHtml;
            }

            _this2.$forceUpdate(); // 处理上传同一个图片失效的问题


            _this2.$refs['uploadImg'].value = null;
          } else {
            console.log('文件地址错误');
          }
        } else {
          console.log('文件地址错误');
        }
      });
    },
    uploadImg: function uploadImg(file, callback) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var timeStr, fd, origin, url, config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                timeStr = _this3.toDateTimeStr2();
                fd = new FormData();
                origin = "g12e";
                url = "http://upload.g12e.com/mfileUpload";
                fd.append("files", file);
                fd.append("origin", origin);
                fd.append("time", timeStr);
                config = {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                };

                if (_this3.checkFile(file)) {
                  _this3.$axios.post(url, fd, config).then(function (res) {
                    callback(res.data);
                  });
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    toDateTimeStr2: function toDateTimeStr2(intTime) {
      var date;

      if (intTime == null) {
        date = new Date();
      } else {
        date = new Date(intTime);
      }

      var month = date.getMonth() + 1;

      if (month < 10) {
        month = "0" + month;
      }

      var day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      var hours = date.getHours();

      if (hours < 10) {
        hours = "0" + hours;
      }

      var m = date.getMinutes();

      if (m < 10) {
        m = "0" + m;
      }

      var s = date.getSeconds();

      if (s < 10) {
        s = "0" + s;
      }

      return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + m + ":" + s;
    },
    checkFile: function checkFile(file) {
      //文件为空判断
      if (file === null || file === undefined) {
        alert("请选择您要上传的文件！");
        return false;
      } //检测文件类型


      if (file.type.indexOf("image") === -1) {
        alert("请选择图片文件！");
        return false;
      } //计算文件大小


      var size = Math.floor(file.size / 1024);

      if (size > 5000) {
        alert("上传文件不得超过5M!");
        return false;
      }

      return true;
    },
    // 选择特殊符号，添加到页面上
    onChooseFormula: function onChooseFormula() {
      this.formulaDialogVisible = true;

      if (utils_utils.isEmpty(this.formulaObj)) {
        window.parameters = {
          lang: 'en',
          id: this.id
        };
        this.formulaObj = new Editor(window.actions, window.panels, window.parameters);
      } else {
        // 删除特殊符号中输入文本区域内容
        document.getElementsByClassName('fm-editor-content')[0].value = ""; // 删除特殊符号结果区域中内容

        var resultNode = document.getElementsByClassName('fm-editor-result-area-inner')[0];
        var child = resultNode.lastElementChild;

        while (child) {
          resultNode.removeChild(child);
          child = resultNode.lastElementChild;
        }
      }
    },
    // 取消选择特殊符号
    onChooseFormulaCancle: function onChooseFormulaCancle() {
      this.formulaDialogVisible = false;
    },
    // 确认选中的特殊符号
    onConfirmFormula: function onConfirmFormula() {
      var _this = this;

      this.formulaObj.getEquationPng(function (src, mlang, equation) {
        var blob = _this.base64ToBlob(src);

        var file = _this.blobToFile(blob);

        _this.onUploadImg(file);
      });
      this.formulaDialogVisible = false;
    },
    // base64转blob
    base64ToBlob: function base64ToBlob(base64Data) {
      var arr = base64Data.split(','),
          fileType = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          l = bstr.length,
          u8Arr = new Uint8Array(l);

      while (l--) {
        u8Arr[l] = bstr.charCodeAt(l);
      }

      return new Blob([u8Arr], {
        type: fileType
      });
    },
    // blob转file
    blobToFile: function blobToFile(blobFile, fileName) {
      if (blobFile instanceof Blob) {
        var blobType = blobFile.type;

        if (!fileName) {
          var ext = blobType.substring(blobType.indexOf('/') + 1);
          fileName = new Date().getTime() + '.' + ext;
        }

        blobFile = new window.File([blobFile], fileName, {
          type: blobType
        });
      }

      return blobFile;
    },
    // 禁止粘贴图片
    pasteImg: function pasteImg(e) {
      e.preventDefault();
      var text = null; //得到剪贴板中的文本

      if (window.clipboardData && clipboardData.setData) {
        // IE
        text = window.clipboardData.getData('text');
      } else {
        try {
          text = (e.originalEvent || e).clipboardData.getData('text/plain');
        } catch (e) {
          return;
        }
      }

      ;

      if (document.body.createTextRange) {
        if (document.selection) {
          textRange = document.selection.createRange();
        } else if (window.getSelection) {
          sel = window.getSelection();
          var range = sel.getRangeAt(0); // 创建临时元素，使得TextRange可以移动到正确的位置

          var tempEl = document.createElement("span");
          tempEl.innerHTML = "&#FEFF;";
          range.deleteContents();
          range.insertNode(tempEl);
          textRange = document.body.createTextRange();
          textRange.moveToElementText(tempEl);
          tempEl.parentNode.removeChild(tempEl);
        }

        ;
        textRange.text = text;
        textRange.collapse(false);
        textRange.select();
      } else {
        // Chrome之类浏览器
        document.execCommand("insertText", false, text);
      }

      ;
    },
    // 页面数据更新
    changeText: function changeText(val) {
      this.content = this.$refs['edit-div'].innerHTML;
    },
    destroyed: function destroyed() {
      document.getElementById('edit-' + this.id).removeEventListener('paste', function (e) {
        _this.pasteImg(e);
      }, false);
    }
  }
});
// CONCATENATED MODULE: ./src/lib/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/editor.vue?vue&type=style&index=0&id=2bbdbb77&scoped=true&lang=scss&
var editorvue_type_style_index_0_id_2bbdbb77_scoped_true_lang_scss_ = __webpack_require__("9354");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/editor.vue






/* normalize component */

var component = normalizeComponent(
  lib_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2bbdbb77",
  null
  
)

/* harmony default export */ var editor = (component.exports);
// EXTERNAL MODULE: ./src/lib/generator.js
var generator = __webpack_require__("6378");

// CONCATENATED MODULE: ./src/lib/index.js


/*
 * @Author: wangtengteng
 * @Date: 2020-10-30 17:26:15
 * @LastEditTime: 2020-11-16 15:00:26
 * @FillPath: Do not edit
 */


var lib_Editor = {
  install: function install(Vue) {
    Vue.component(editor.name, editor);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(lib_Editor);
}

/* harmony default export */ var lib = (lib_Editor);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });