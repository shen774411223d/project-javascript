export class Requeue {
  /**
   * 循环队列，在不超过队列最大长度，对头 队尾可以任意移动
   * @param array 队列
   * @param front 对头
   * @param rear 队尾
   * @param size 队列的长度
   */
  constructor(size = 0) {
    this.array = Array(size)
    this.size = this.array.length
    this.front = 0
    this.rear = 0
  }
  // 入队
  enRequeue(data) {
    console.log(this.rear, this.front, 'enRequeue rear')
    if(((this.rear + 1) % this.size) === this.front) {
      throw new Error('队列已满！')
    }
    this.array[this.rear] = data
    this.rear = (this.rear + 1) % this.size
  }
  // 出队
  deRequeue() {
    console.log(this.rear, this.front, 'deRequeue rear')
    if(this.front === this.rear) {
      throw new Error('队列已空！')
    }
    const data = this.array[this.front]
    this.array[this.front] = undefined
    this.front = (this.front + 1) % this.size
    return data
  }

  getRequeue() {
    return this.array
  }
}
// 链表
export class Chain {
  /**
   * @param head 头节点
   * @param size 链表长度
   */
  constructor() {
    this.head = this.node(null)
    this.last = this.node(null)
    this.size = 0
  }

  // 生成链表数据的方法
  node(data) {
    return {
      data,
      next: null
    }
  }

  // 查询某个位置的节点
  getNode(index) {
    if(index > this.size) {
      console.error('超过最大节点，直接返回最后一个')
      return this.last
    }
    let targetNode = this.head
    for(let i = 0; i < index; i++) {
      targetNode = targetNode.next
    }
    return targetNode
  }

  insert(data, index) {
    const node = this.node(data)
    if(this.size === 0) {// 空链表
      this.head = node
      this.last = node
    }else if(index === 0) {// 在头部插入
      node.next = this.head
      this.head = node
    }else if(!index || this.size === index) {// 尾部插入
      this.last.next = node
      this.last = node
    }else {// 插入中间
      const prevNode = this.getNode(index - 1)
      node.next = prevNode.next
      prevNode.next = node
    }
    this.size++
  }

}