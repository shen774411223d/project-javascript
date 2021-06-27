
export function compose(...fns) {
  if(fns.length === 0) return arg => arg
  if(fns.length === 1) return fns[0]
  return fns.reduce((curr, current) => (...args) => curr(current(...args)))
}

export function compose2(...fns) {
  const _this = window
  if(fns.length === 0) return arg => arg
  if(fns.length === 1) return fns[0]

  return function(...args) {
    let finalVal = args
    // 除了可以for从数组末尾倒数开始，也可以事先把数组reverse一下
    for(let i = fns.length - 1; i > -1; i--) {
      const v = Array.isArray(finalVal)? finalVal : [finalVal]
      finalVal = fns[i].apply(_this, v)
    }
    return finalVal
  }
}

export function curry(fn) {
  let args = []
  // 拿到fn的参数个数，根据个数来确定执行几次next
  let totalArguments = fn.length
  return function next(...payload) {
    args.push(...payload)
    if(args.length >= totalArguments) {
      return fn.apply(null, args)
    }
    return next
  }
}
// 快排
export function quickSort(array) {
  if(array.length <= 1) return array

  const middleIndex = Math.floor(array.length / 2)
  const middle = array.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    if(item < middle) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return [...quickSort(left), middle, ...quickSort(right)]
}
// 斐波那契数列
export function fibonacci(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
// 斐波那契数列2
export function fibonacci2(n) {
  if(n === 0) return 0
  if(n === 1) return 1

  let c2 = 0
  let c1 = 1
  let total = 0
  for(let i = 2; i <= n; i++) {
    total = c1 + c2
    c2 = c1
    c1 = total
  }
  return total
}

// 找出字符串里无序最长子串
export function maxLength(str) {
  const occ = new Set()
  const len = str.length
  let right = -1
  let ans = 0
  for(let i = 0; i < len; i++) {
    if(i != 0) {
      occ.delete(str.charAt(i - 1))
    }
    while (right + 1 < len && !occ.has(str.charAt(right + 1))) {
      occ.add(str.charAt(right + 1))
      ++right
    }
    console.log(i, right)
    ans = Math.max(ans, right - i + 1)
  }
  return ans
}
// 冒泡排序
export function bSort(list) {
  const arr = [...list]
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        const t = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = t
      }
    }
  }
  return arr
}

// 选择排序
export function xzSort(list) {
  const arr = [...list]
  let temp
  let minIndex

  for(let i = 0; i < arr.length; i++) {
    minIndex = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}