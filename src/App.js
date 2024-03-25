/*
 * @Author: 朱小龙
 * @Date: 2024-03-20 11:36:56
 * @LastEditTime: 2024-03-21 16:31:43
 * @LastEditors: 朱小龙
 * @Description:
 * @FilePath: \my-app\src\App.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import store from "./store/store";
import { Provider } from "react-redux";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
