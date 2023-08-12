// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** add POST /api/card/add */
export async function addUsingPOST(body: API.CardInfo, options?: { [key: string]: any }) {
  return request<API.BaseResponseCardInfo_>('/api/card/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteCardInfo POST /api/card/delete */
export async function deleteCardInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/card/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function listCardInfoByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCardInfo_>('/api/card/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function listCardInfoByPageUsingPOST(
  body: API.PageRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCardInfo_>('/api/card/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCardInfo POST /api/card/update */
export async function updateCardInfoUsingPOST(
  body: API.PageRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/card/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
