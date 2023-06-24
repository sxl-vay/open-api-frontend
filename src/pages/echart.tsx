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
    let times: any = [];
    let zfbYue: any = [];
    let zfbFund: any = [];
    let fund: any = [];
    let shares: any = [];
    let constructionBank: any = [];
    let debt: any = [];


    if (rest.data) {
      const data = rest.data;
      const records = data.records;

      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        times.push(record.createTime.substring(0,10))
        zfbYue.push(record.zfbYue)
        zfbFund.push(record.zfbFund)
        fund.push(record.fund)
        shares.push(record.shares)
        constructionBank.push(record.constructionBank)
        debt.push(record.debt)

      }
    }

    // @ts-ignore
    let lineTypeChart = echarts.init(document.getElementById("lineTypeChart"));


    lineTypeChart.setOption(
      {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['支付宝余额','建行', '余额宝', '基金','股票','外借债务']
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
            name: '支付宝余额',
            type: 'line',
            stack: 'Total',
            data: zfbYue
          },
          {
            name: '建行',
            type: 'line',
            stack: 'Total',
            data: constructionBank
          },
          {
            name: '余额宝',
            type: 'line',
            stack: 'Total',
            data: zfbFund
          },
          {
            name: '基金',
            type: 'line',
            stack: 'Total',
            data: fund
          },
          {
            name: '股票',
            type: 'line',
            stack: 'Total',
            data: shares
          },

          {
            name: '外借债务',
            type: 'line',
            stack: 'Total',
            data: debt
          }
        ]
      }
    )
  }

  render() {//渲染需要陈放Echart实例的容器元素
    //<div id="main" style={{width: 1000, height: 600}}></div>

    return <div id="lineTypeChart" style={{width: 1000, height: 1000}}></div>
  }
}

export default App;
