// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** add POST /api/deposit/add */
export async function addUsingPOST(
  body: API.DepositInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDepositInfoVO_>('/api/deposit/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDepositInfoInfo POST /api/deposit/delete */
export async function deleteDepositInfoInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/deposit/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDepositInfoByPage GET /api/deposit/list/page */
export async function listDepositInfoByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDepositInfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDepositInfoVO_>('/api/deposit/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDepositInfoByPage POST /api/deposit/list/page */
export async function listDepositInfoByPageUsingPOST(
  body: API.DepositInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDepositInfoVO_>('/api/deposit/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateDepositInfoInfo POST /api/deposit/update */
export async function updateDepositInfoInfoUsingPOST(
  body: API.DepositInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/deposit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
