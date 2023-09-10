// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLineChart GET /api/echarts/lineChart */
export async function getLineChartUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseLineChartVO_>('/api/echarts/lineChart', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getPieChart GET /api/echarts/pieChart */
export async function getPieChartUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListPieChartItemVO_>('/api/echarts/pieChart', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getPieTypeChart GET /api/echarts/pieTypeChart */
export async function getPieTypeChartUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListPieChartItemVO_>('/api/echarts/pieTypeChart', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getTotalCountLine GET /api/echarts/totalLine */
export async function getTotalCountLineUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListTotalCountLineVO_>('/api/echarts/totalLine', {
    method: 'GET',
    ...(options || {}),
  });
}
