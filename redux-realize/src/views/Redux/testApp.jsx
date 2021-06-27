import React from "react";
import { connect } from "./store";
import MyPromise from "./promise";
import "./arrays";
import {
  compose,
  compose2,
  curr0y,
  quickSort,
  fibonacci,
  maxLength,
  bSort,
  xzSort,
  fibonacci2,
} from "./utils";
import "./index.css";

const addCount = function (payload) {
  return {
    type: "ADD_COUNT",
    payload,
  };
};

const setMsg = function (payload) {
  return {
    type: "SET_MSG",
    payload,
  };
};

const fetchData = (num) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("ok");
        dispatch({
          type: "ADD_COUNT",
          payload: num,
        });
      }, 500);
    });
  };
};

class TestApp extends React.Component {
  constructor(props) {
    super(props);
    this.testMethod = this.testMethod.bind(this);
  }

  componentDidMount() {
    const imgs = document.querySelectorAll(".test-app img");
    console.log(imgs);
    const observer = new IntersectionObserver((changes) => {
      console.log(changes, "changes");
    });
    imgs.forEach((img) => observer.observe(img));
  }

  testMethod() {
    console.log(this);
  }

  handleCount = () => {
    this.props.addCount(456);
  };

  handleMsg = () => {
    this.props.setMsg("hello react!");
  };

  handleFetchData = () => {
    this.props.fetchData(9);
  };

  render() {
    console.log(this.props);
    const { count, copyMsg } = this.props;
    return (
      <div className="test-app">
        <h1 onClick={this.handleCount}>test app {count}</h1>
        <button onClick={this.handleMsg}>{copyMsg}</button>
        <button onClick={this.handleFetchData}>fetch data</button>
        <button onClick={this.testMethod}>log this</button>
        <div>
          win10专业版：FYJY8-G9NMT-4GJT6-M3T94-X2C7D win10系统激活：
          1.去【开始——设置——更新——激活】点击更改产品密钥，然后把我发给你的密钥复制粘贴进去
          确保网络畅通即可成功激活，如果有问题在更改密钥上面点击错误详细信息查看原因告诉我
          无法激活请回复数字99参考能否自助激活，解决不了请及时联系客服哦
          激活后告诉我，记得好评哦 祝你每天都有好心情哦~ =======================
          自动发货，付款后会自动发送密钥消息到你旺旺上，输入密钥后即可激活（激活有时候因为网络拥堵或者版本不符会出现错误代码，如果不能激活截图给掌柜错误代码有处理方法，）
          人工服务时间，早上9点到24点
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  count: store.count,
  copyMsg: store.msg,
});

const mapDispatchToProps = {
  addCount,
  setMsg,
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
