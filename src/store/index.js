import { createStore } from 'vuex'
import schema from '../assets/formSupportFiles/schema.json'

export default createStore({
  state: {
    form: {
      schema
    }
  },
  mutations: {
    initForm(state){

    }
  },
  actions: {
  },
  modules: {
  }
})
