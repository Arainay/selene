import { takeEvery } from 'redux-saga/effects';
import { getGateway, deleteGateway, updateGateway } from './gatewaySaga';

export default function* rootSaga() {
  yield takeEvery('GET_GATEWAY', getGateway);
  yield takeEvery('DELETE_GATEWAY', deleteGateway);
  yield takeEvery('UPDATE_GATEWAY', updateGateway);
}