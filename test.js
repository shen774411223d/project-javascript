
class Quque {
  constructor(size = 0) {
    this.array = Array(size)
    this.front = 0
    this.rear = 0
  }
  /**
   * 入队列时 只需要考虑 对尾的值
   * 计算队尾的值 为什么要取余？
   * 因为随着队尾的值 越来越大 可能会大于数组的length（因为是循环数组，数组长度不变 只会变更数组中某一项的值）
   * @param item  要入队列的值
   */
  deQuque(item) {
    this.array = item
    this.rear = (this.rear + 1) % this.array
  }


}

const q = new Quque(10)
console.log(q)