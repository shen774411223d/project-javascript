class Toast {
  static initance = null

  getName() {
    console.log('jack')
  }

  static getInitance() {
    if(!this.initance) {
      this.initance = new Toast()
    }
    return this.initance
  }

  constructor() {
    console.log('load')
  }
}
export default Toast