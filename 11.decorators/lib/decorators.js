"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function log(target, name, descriptor) {
  var original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log("Arguments: ".concat(args));

      try {
        var result = original.apply(this, args);
        console.log("Result: ".concat(result));
        return result;
      } catch (e) {
        console.log("Error: ".concat(e));
        throw e;
      }
    };
  }

  return descriptor;
}

var Example = (_class =
/*#__PURE__*/
function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Example;
}(), (_applyDecoratedDescriptor(_class.prototype, "sum", [log], Object.getOwnPropertyDescriptor(_class.prototype, "sum"), _class.prototype)), _class);