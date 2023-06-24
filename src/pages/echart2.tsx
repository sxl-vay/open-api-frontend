import React, {Component} from "react";
// 引入ECharts主模块
import * as echarts from "echarts";
// 引入折线图需要的模块
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import 'echarts/lib/component/polar';
import {
  getLineChartUsingGET, getPieChartUsingGET

} from "@/services/open-api-backend/echartsController";

class App extends Component { // 初始化状态
  state = {
    sourceData: [],
  };

  async componentDidMount() {
    let lineRes = await getLineChartUsingGET()
    let pieRes = await getPieChartUsingGET()
    let times:any = [];
    let totals:any = [];
    let pieData: any = [];
    if (lineRes.data) {
      times = lineRes.data.times;
      totals = lineRes.data.totals;
    }
    if (pieRes.data) {
      pieData = pieRes.data;
      console.log(pieRes.data)
    }
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示
    let lineChart = echarts.init(document.getElementById("lineChart"));
    let pieChart = echarts.init(document.getElementById("pieChart"));
    // 绘制Echarts实例所需要的数据
    pieChart.setOption({
      title: {
        text: '资金分部图',
        left: 'center',
        top: 20,
      },
      tooltip: {
        trigger: 'item'
      },

        series: [
          {
            type: 'pie',
            stillShowZeroSum: false,
            data: pieData
          }
        ]
      }
    );


    lineChart.setOption({
        xAxis: {
          data: times
        },
        yAxis: {},
        series: [
          {
            data: totals,
            type: 'line',
            smooth: true
          }
        ]
      }
    );
  }

  render() {//渲染需要陈放Echart实例的容器元素
    //<div id="main" style={{width: 1000, height: 600}}></div>

    return <table>
      <tr>
        <td>
          <div id="pieChart" style={{width: 500, height: 500}}></div>
        </td>
        <td>
          <div id="lineChart" style={{width: 600, height: 300}}></div>
        </td>
      </tr>
    </table>;
  }
}

export default App;
