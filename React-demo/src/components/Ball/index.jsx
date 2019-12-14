import React, { Component } from 'react';
import { X_step, Y_step, sin1, sin2 } from './ballConfig.js';

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.reset(nextProps.count);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    this.stop = null;
    canvas.height = 500;
    canvas.width = 500;
    this.canvas = canvas;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    const ctx = this.canvas.getContext('2d');
    this.drawCircle(ctx);
    /* 
      @param {number} x 正弦曲线偏移量初始值
      @param {number} y 正弦曲线的高度
      @param {number} rangeValue 过渡的初始值
    */
    this.offset = {
      x: 0,
      x2: 0,
      y: this.props.count / 100,
      rangeValue: 0
    }
    if(this.offset.y <= 0) return;
    this.stop = window.requestAnimationFrame(this.draw.bind(this, ctx));
  }
  /* 
    @param {number} count 要设置的正弦曲线的高度
  */
  reset(count) {
    this.offset = {
      x: 0,
      x2: 0,
      y: count / 100,
      rangeValue: this.props.count / 100
    }
    this.stop = null;
  }

  drawWrite(ctx) {
    ctx.fillStyle = 'black';
    ctx.font="40px Georgia";
    ctx.fillText(this.props.count,this.canvasWidth / 2, this.canvasHeight / 2);
  }

  countHeight(offset) {
    if(offset.y === offset.rangeValue) return;
    const step = Math.abs((offset.y - offset.rangeValue)) * this.canvasHeight / 10000;
    if(offset.rangeValue < offset.y) {  // 正弦曲线的高度
      offset.rangeValue += step;
      if(Math.abs(offset.rangeValue - offset.y).toFixed(5) <= step.toFixed(5)) {
        offset.rangeValue = offset.y;
      }
    }else if(offset.rangeValue > offset.y) {
      offset.rangeValue -= step;
      if(Math.abs(offset.rangeValue - offset.y).toFixed(5) <= step.toFixed(5)) {
        offset.rangeValue = offset.y;
      }
    }
  }

  /* 
    @param {object} ctx canvas实例
  */
  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawSin(ctx, this.offset.x2, this.offset.rangeValue - 0.01, sin2);
    this.drawSin(ctx, this.offset.x, this.offset.rangeValue, sin1);
    this.offset.x += X_step; // 正弦曲线的水平偏移量
    this.offset.x2 += X_step + 0.001; // 正弦曲线的水平偏移量
    this.countHeight(this.offset);
    // this.drawWrite(ctx);
    //动画轮询
    this.stop = window.requestAnimationFrame(this.draw.bind(this, ctx));
  }
  /* 
    @param {object} ctx canvas实例
  */
  drawCircle(ctx) {
    const center = this.canvasWidth / 2;
    const lineWidth = 5;
    const r = center - lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(186, 165, 130, 0.3)';
    ctx.lineWidth = lineWidth;
    ctx.arc(center, center, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.clip();
  }
  /* 
    @param {object} ctx canvas实例
    @param {number} xOffset 正弦曲线的水平偏移量
    @param {number} yOffset 正弦曲线的高度
  */
  drawSin(ctx, xOffset = 0, yOffset = 0, config = {}) {
    const { WAVE_height, WAVE_width, colorStart, colorStop } = config;
    const points = [];
    const canvasHeight = this.canvasHeight;
    const canvasWidth = this.canvasWidth;
    let startX = 0;
    ctx.beginPath();
    ctx.lineWidth = 1;
    for(let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {  //绘制正弦曲线
      const y = WAVE_height * Math.sin((startX + x) * WAVE_width + xOffset);
      points.length < 1 && points.push([x, (1 - yOffset) * canvasHeight + y]);
      ctx.lineTo(x, (1 - yOffset) * canvasHeight + y);
    }
    //下面几行主要是绘制 直线
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(startX, canvasHeight);
    ctx.lineTo(points[0][0], points[0][1]);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    const r = canvasHeight / 2;
    const gradient = ctx.createLinearGradient(r, r, r, canvasHeight);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorStop);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
  
  render() {
    
    return (
      <div>
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default Ball;