const initialState = {
  name: '',
  uid: '',
  iotConnectUrl: '',
  topology: '',
  heartBeatInterval: '',
  rawApiKey: '',
  rawSecretApiKey: '',
  cloudPlatform: '',
  enabled: true
};

export default function gateway(state = initialState, action) {
  switch (action.type) {
    case 'GET_GATEWAY':
      return state;
    case 'GET_GATEWAY_SUCCESS':
      return state;
    case 'UPDATE_GATEWAY_SUCCESS':
      return action.payload;
    case 'UPDATE_GATEWAY_FAILED':
      return state;
    default:
      return state;
  }
}