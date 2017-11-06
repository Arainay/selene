export function getGateway() {
  return { type: 'GET_GATEWAY' };
}

export function saveGateway(gateway) {

}

export function updateGateway(gateway) {
  return { type: 'UPDATE_GATEWAY', payload: gateway };
}