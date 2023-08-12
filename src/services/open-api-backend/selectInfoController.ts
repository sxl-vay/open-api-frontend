// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getSelectInfo GET /api/selectinfo/getinfo */
export async function getSelectInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSelectInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSelectInfoVO_>('/api/selectinfo/getinfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
