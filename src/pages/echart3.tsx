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
  listBookkeepingByPageUsingGET

} from "@/services/open-api-backend/bookkeepingController";
import {EChartsOption} from "echarts";
import {getTotalCountLineUsingGET} from "@/services/open-api-backend/echartsController";

class App extends Component { // 初始化状态
  state = {
    sourceData: [],
  };

  async componentDidMount() {

    const params: API.listBookkeepingByPageUsingGETParams = {
      current:1,
      pageSize:99999
    }
    let rest = await getTotalCountLineUsingGET(params)
    let xData: any[] = [];
    let totals: any[] = [];
    let pureTotals: any[] = [];

    if (rest.data) {
      const data = rest.data;
      for (let i = 0; i < data.length; i++) {
        xData.push(data[i].createTime)
        totals.push(data[i].total)
        pureTotals.push(data[i].pureTotal)
      }
    }

    const chartDom = document.getElementById('pieChart')!;
    const myChart = echarts.init(chartDom);
    let option: EChartsOption;


    setTimeout(function () {
      option = {
        title: {
          text: 'Rainfall vs Evaporation',
          subtext: 'Fake Data'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Rainfall', 'Evaporation']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '全部总计',
            type: 'bar',
            data: totals,
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }/*,
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }*/
          },
          {
            name: '去除转移支付总计',
            type: 'bar',
            data: pureTotals,
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }/*,
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }*/
          }
        ]
      };



      myChart.on('updateAxisPointer', function (event: any) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption<echarts.EChartsOption>({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });

      myChart.setOption<echarts.EChartsOption>(option);
    });
  }

  render() {//渲染需要陈放Echart实例的容器元素
    //<div id="main" style={{width: 1000, height: 600}}></div>

    return <div id="pieChart" style={{width: 1000, height: 1000}}></div>

  }
}

export default App;
