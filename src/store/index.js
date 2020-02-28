
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
*
import axios from 'axios'
import Vuex from 'vuex'
import Vue from "vue";
import API_ENDPOINT from '@/environments/apiEndPoint';
Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export default new Vuex.Store({
 

    namespaced: true,
  state: initialState,

  getters: {
    loggedIn() {
      return this.state.token !== null
    },
    hasLog(){
      return isLog()
    }
},
mutations:{
    
    isLog(state, rol) {
      state.rol = rol
    },

  },
  actions:{
    isLog({ commit }){
        if(this.state.token != null){
            axios.post(API_ENDPOINT +'auth/user',{},{
            headers: {
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer " + this.state.token,
                 
              }}).then((response) => {
                const a= response.data.rol[0].nombre;
                context.commit('retrieveToken', a   )
            })
        }else{
        
        }
    },
  }
 
 
 
})

*/

const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const store = {
    getToken() {
        return localStorage.getItem('access_token')
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }

}

export default { store }
