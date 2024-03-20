/*
 * @Author: 朱小龙
 * @Date: 2024-03-20 11:36:56
 * @LastEditTime: 2024-03-20 16:25:12
 * @LastEditors: 朱小龙
 * @Description:
 * @FilePath: \my-app\src\App.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
