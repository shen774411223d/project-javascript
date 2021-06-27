// map
Array.prototype.myMap = function(callback, thisArg) {
  const _this = thisArg || window
  let newArr = []
  for(let i = 0; i < this.length; i++) {
    newArr.push(callback.call(_this, this[i], i, this))
  }
  return newArr
}

// filter
Array.prototype.myFilter = function(callback, thisArg) {
  const _this = thisArg || window
  let newArr = []
  for(let i = 0; i < this.length; i++) {
    if(callback.call(_this, this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

// reduce
// callback(prev, current, index, array)
Array.prototype.myReduce = function(callback, initValue) {
  const _this = window
  const firstIndex = initValue != null? 0 : 1
  let finalValue = initValue || this[0]
  for(let i = firstIndex; i< this.length; i++) {
    finalValue = callback.call(_this, finalValue, this[i], i, this)
  }
  return finalValue
}

// call
Function.prototype.myCall = function(ctx, ...args) {
  ctx = ctx || window
  ctx.fn = this
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}

// apply
Function.prototype.myApply = function(ctx, args) {
  ctx = ctx || window
  ctx.fn = this
  const a = Array.isArray(args)? args : [undefined]
  const result = ctx.fn(...a)
  delete ctx.fn
  return result
}

// bind
Function.prototype.myBind = function(ctx, ...args) {
  const _this = this
  const o = function() {}
  const fn = function(...payload) {
    const p = [...args, ...payload]
    return _this.apply(this instanceof o? this : ctx, p)
  }
  o.prototype = _this.prototype
  fn.prototype = new o
  return fn
}

// new
function _new(target, ...args) {
  const obj = {}
  obj.__proto__ = target.prototype
  const result = obj.call(target, ...args)
  return typeof result === 'object'? result : obj
}