import React, { Component} from "react";
// 引入ECharts主模块
import * as echarts from "echarts/lib/echarts";
// 引入折线图需要的模块
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import 'echarts/lib/component/polar';
class App extends Component { // 初始化状态
  state = {
    sourceData: [],
  };
  async componentDidMount() {
    let data = [];
    for (let i = 0; i <= 100; i++) {//根据公式,生成绘制在图上的坐标数据源数组
      let theta = i / 100 * 360;
      let r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
      data.push([r, theta]);
    }
    this.setState(() => {
      return {
        sourceData: data//更新react组件的state数据
      };
    });
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制Echarts实例所需要的数据
    myChart.setOption({
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
          coordinateSystem: 'polar',//极坐标图
          name: 'line',
          type: 'line',
          data: data //根据已生成的坐标数组来绘制爱心图形
        }]
      }
    );
  }
  render() {//渲染需要陈放Echart实例的容器元素
    return <div id = "main" style = { {  width: 1000, height: 600 }}> </div>;
  }
}
export default App;
