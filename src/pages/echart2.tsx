import React, { Component} from "react";
// 引入ECharts主模块
import * as echarts from "echarts";
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
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制Echarts实例所需要的数据
    myChart.setOption({
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
          }
        ]
      }
    );
  }
  render() {//渲染需要陈放Echart实例的容器元素
    return <div id = "main" style = { {  width: 1000, height: 600 }}> </div>;
  }
}
export default App;
