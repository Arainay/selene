import { call, put } from 'redux-saga/effects';

export function* getGateway() {
  try {
    const data = yield call(fetch, '/api/gateway/get-gateway');
    yield put({ type: 'GET_GATEWAY_SUCCESS', payload: data });
  } catch (err) {
    yield put({ type: 'GET_GATEWAY_FAILED', payload: err.message });
  }
}

export function* deleteGateway() {
  try {
    yield call(fetch, '/api/gateway/delete-gateway');
    yield put({ type: 'DELETE_GATEWAY_SUCCESS' });
  } catch (err) {
    yield put({ type: 'DELETE_GATEWAY_FAILED', payload: err.message });
  }
}

export function* updateGateway(gateway) {
  try {
    yield call(fetch, '/api/gateway/update-gateway', { method: 'PUT', body: gateway });
    yield put({ type: 'UPDATE_GATEWAY_SUCCESS',payload: gateway });
  } catch (err) {
    yield put({ type: 'UPDATE_GATEWAY_FAILED', payload: err.message });
  }
}

export function* addGateway(gateway) {
  try {
    yield call(fetch, '/api/gateway/add-gateway', { method: 'POST', body: gateway });
    yield put({ type: 'ADD_GATEWAY_SUCCESS',payload: gateway });
  } catch (err) {
    yield put({ type: 'ADD_GATEWAY_FAILED', payload: err.message });
  }
}