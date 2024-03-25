/*
 * @Author: 朱小龙
 * @Date: 2024-03-21 16:43:12
 * @LastEditTime: 2024-03-25 09:59:55
 * @LastEditors: 朱小龙
 * @Description: 
 * @FilePath: \my-app\src\pages\search\index.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React, { Component } from "react";

export default class Search extends Component {
  // =======================================生命周期第一阶段======================================================
  // 初始化状态 
  constructor() {
    console.log('constructor');
  }
  // 静态方法  用来接收新的props  计算新的state并返回  每次更新都会调用  初始化阶段也会调用
  getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
  }
  // 渲染ui结构
  render() {
    return (
        <div></div>
    )
  }
  // 初始化结束调用
  componentDidMount() {

  }
  // ============================================生命周期第二阶段==================================================
  // 更新阶段  接收新的props  并处理数据返回新的state、  从字面意思上看  stateFormProps   从props中获取state   
  gerDerivedStateFromProps() {

  }
  // 询问是否更新
  shouldComponentUpdate() {
    // forceUpdate() {}强制更新时不调用shouldComponentUpdate()函数  直接跳到下一个函数componentWillUpdate()
  }
  // 将要更新
  componentWillUpdate() {

  }
  // 组件更新之前触发  捕获组件更新之前的数据信息  在组件更新之后做数据处理时作对比使用
  getSnapShotBeforeUpdate() {
    
  }
  // 组件更新结束
  componentDidUpdate() {

  }
  // ==========================================生命周期第三阶段=======================================================
  // 卸载阶段 由ReactDom.unmountComponentAtNode() 触发  组件卸载之前执行 可执行一些清理操作  比如清理定时器等
  componentWillUnmount() {
    
  }
}
