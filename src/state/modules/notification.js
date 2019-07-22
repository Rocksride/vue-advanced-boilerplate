import * as types from '../mutationTypes.js'
export const state = {
  notifications: [
    {type: 'error', message: 'destroy me', id: -3},
    {type: 'warning', message: 'destroy me', id: -2},
    {type: 'info', message: 'destroy me', id: -1},
    {type: 'success', message: 'destroy me', id: -4},
  ],
  timeout: 5000
}

let notificationId = 1

export const mutations = {
  [types.PUSH_NOTIFICATION]: (state, payload) => {
    state.notifications.push({
      ...payload,
      id: notificationId++
    })
  },
  [types.REMOVE_NOTIFICATION]: (state, payload) => {
    state.notifications = state.notifications.filter(n => n.id !== payload.id)
  }
}

export const actions = {
  pushNotification: ({ commit, state }, payload) => {
    commit(types.PUSH_NOTIFICATION, payload)
   
  },
  removeNotification: ({ commit }, payload) => {
    commit(types.REMOVE_NOTIFICATION, payload)
  }
}
