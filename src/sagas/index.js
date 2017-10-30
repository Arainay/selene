import { takeEvery } from 'redux-saga/effects';
import { getGateway, deleteGateway, updateGateway, addGateway } from './gatewaySaga';

export default function* rootSaga() {
  yield takeEvery('GET_GATEWAY', getGateway);
  yield takeEvery('DELETE_GATEWAY', deleteGateway);
  yield takeEvery('UPDATE_GATEWAY', updateGateway);
  yield takeEvery('ADD_GATEWAY', addGateway);
}