// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** add POST /api/book/add */
export async function addUsingPOST(
  body: API.BookkeepingAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBookkeepingBookVO_>('/api/book/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteBookkeepingInfo POST /api/book/delete */
export async function deleteBookkeepingInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/book/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listBookkeepingByPage GET /api/book/list/page */
export async function listBookkeepingByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listBookkeepingByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageBookkeepingBookVO_>('/api/book/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listBookkeepingByPage POST /api/book/list/page */
export async function listBookkeepingByPageUsingPOST(
  body: API.BookkeepingQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageBookkeepingBookVO_>('/api/book/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateBookkeepingInfo POST /api/book/update */
export async function updateBookkeepingInfoUsingPOST(
  body: API.BookkeepingUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/book/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
