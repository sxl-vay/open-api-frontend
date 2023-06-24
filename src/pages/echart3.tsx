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

class App extends Component { // 初始化状态
  state = {
    sourceData: [],
  };

  async componentDidMount() {

    const params: API.listBookkeepingByPageUsingGETParams = {
      current:1,
      pageSize:99999
    }
    let rest = await listBookkeepingByPageUsingGET(params)
    let times: any = ['时间线'];

    let zfbYue: any = ['支付宝余额'];
    let zfbFund: any = ['余额宝'];
    let fund: any = ['基金'];
    let shares: any = ['股票'];
    let constructionBank: any = ['建行'];
    let debt: any = ['外借'];


    if (rest.data) {
      const data = rest.data;
      const records = data.records;
      // @ts-ignore
      for (let i = 0; i < records.length; i++) {
        // @ts-ignore
        const record = records[i];
        var time = record.createTime;
        times.push(time.substring(0,10))
        zfbYue.push(record.zfbYue)
        zfbFund.push(record.zfbFund)
        fund.push(record.fund)
        shares.push(record.shares)
        constructionBank.push(record.constructionBank)
        debt.push(record.debt)

      }
    }

    var chartDom = document.getElementById('pieChart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    setTimeout(function () {
      option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: true,
          show:true
        },
        dataset: {
          source: [
            times,
            zfbYue,
            zfbFund,
            fund,
            shares,
            constructionBank,
            debt
          ],
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {focus: 'series'}
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            }
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
