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
  getLineChartUsingGET, getPieChartUsingGET, getPieTypeChartUsingGET

} from "@/services/open-api-backend/echartsController";

class App extends Component { // 初始化状态
  state = {
    sourceData: [],
  };

  async componentDidMount() {
    let lineRes = await getLineChartUsingGET();
    let pieRes = await getPieChartUsingGET();
    let pieTypeRes = await getPieTypeChartUsingGET();
    let times: any = [];
    let totals: any = [];
    let pieData: any = [];
    let pieTypeData: any = [];
    if (lineRes.data) {
      times = lineRes.data.times;
      totals = lineRes.data.totals;
    }
    if (pieRes.data) {
      pieData = pieRes.data;
    }
    if (pieTypeRes.data) {
      pieTypeData = pieTypeRes.data;
    }
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示
    // @ts-ignore
    let lineChart = echarts.init(document.getElementById("lineChart"));
    // @ts-ignore
    let pieChart = echarts.init(document.getElementById("pieChart"));
    // @ts-ignore
    let pieTypeChart = echarts.init(document.getElementById("pieTypeChart"));
    // @ts-ignore
    let lineTypeChart = echarts.init(document.getElementById("lineTypeChart"));
    // 绘制Echarts实例所需要的数据
    pieChart.setOption({
        title: {
          text: '资金种类占比',
          left: 'center',
          top: 20,
        },
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
            label: {
              show: true,
              formatter(param) {
                // correct the percentage
                return param.name+param.percent+'%';
              }
            },
            type: 'pie',
            stillShowZeroSum: false,
            data: pieData
          }
        ]
      }
    );

    pieTypeChart.setOption({
        title: {
          text: '资金分布',
          left: 'center',
          top: 20,
        },
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
            label: {
              show: true,
              formatter(param) {
                // correct the percentage
                return param.name+param.percent+'%';
              }
            },
            type: 'pie',
            stillShowZeroSum: false,
            data: pieTypeData
          }
        ]
      }
    );


    lineChart.setOption({
        title: {
          text: '资金趋势图',
          left: 'center',
          top: 20,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: times,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: totals
          }
        ]
      }
    );

    lineTypeChart.setOption(
      {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['灵活取用', '投资', '借出']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: times
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '灵活取用',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '投资',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '借出',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    )
  }

  render() {//渲染需要陈放Echart实例的容器元素
    //<div id="main" style={{width: 1000, height: 600}}></div>

    return <table>
      <tr>
        <td>
          <div id="pieTypeChart" style={{width: 1000, height: 1000}}></div>
        </td>
        <td>
          <div id="lineTypeChart" style={{width: 1000, height: 1000}}></div>
        </td>
      </tr>
      <tr>
        <td>
          <div id="pieChart" style={{width: 1000, height: 1000}}></div>
        </td>
        <td>
          <div id="lineChart" style={{width: 800, height: 500}}></div>
        </td>
      </tr>

    </table>;
  }
}

export default App;
