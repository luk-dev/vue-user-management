import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'https://reqres.in/api/users',
    users: [],
  },
  mutations: {
    FETCH_USERS (state, { users }) {
      state.users = users.data
    },
    ADD_USER (state, user) {
      let addedUser = state.users.concat(user)
      state.users = addedUser
    },
    DELETE_USER (state, userId){
      let users = state.users.filter(u => u.id != userId)
      state.users = users
    },
    EDIT_USER (state, user) {
      const index = state.users.map(o => o.id).indexOf(user.id)
      state.users.splice(index, 1, user)
    },
  },
  actions: {
    async fetchUsers ({ commit }) {
      try {
        const { data } = await axios.get(`${this.state.baseUrl}?page=1&per_page=4`)
        commit('FETCH_USERS', { users: data })
      } catch (e) {
        console.log(e)
      }
    },
    async paginateUsers ({ commit }, pagination) {
      try {
        const { data } = await axios.get(`${this.state.baseUrl}?page=${pagination.page}&per_page=${pagination.perPage}`)
        commit('FETCH_USERS', { users: data })
      } catch (e) {
        console.log(e)
      }
    },
    async createUser ({commit}, user) {
      let response = await axios.post(`${this.state.baseUrl}`, user)
      let savedUser = response.data
      commit('ADD_USER', savedUser)
      return savedUser
    },
    async deleteUser ({commit}, user) {
      let response = await axios.delete(`${this.state.baseUrl}/${user.id}`)
      if(response.status == 200 || response.status == 204){
        commit('DELETE_USER', user.id)
      }
    },
    async editUser ({commit}, user) {
      let response = await axios.put(`${this.state.baseUrl}/${user.id}`, user)
      let editedUser = response.data
      commit('EDIT_USER', editedUser)
      return editedUser
    }
  },
})
