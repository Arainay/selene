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
    default:
      return state;
  }
}