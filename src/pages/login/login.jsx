/*
 * @Author: 朱小龙
 * @Date: 2024-03-21 10:35:05
 * @LastEditTime: 2024-03-21 11:35:33
 * @LastEditors: 朱小龙
 * @Description: 登录的路由组件
 * @FilePath: \my-app\src\pages\login\login.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React, { Component } from "react";
import "./style/login.css";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <h1 className="headerTitle">我的react项目</h1>
        </header>
        <section className="login-content"></section>
      </div>
    );
  }
}
