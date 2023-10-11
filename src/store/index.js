import { createStore } from 'vuex'
import schema from '../assets/formSupportFiles/schema.json'


export default createStore({
  state: {
    form: {
      schema,
      formData : {},
    }
  },
  mutations: {
    updateformData(state, {label ,value2, val}){
          const indexOfObject = state.form.schema.findIndex(obj => obj.fieldLabel == label);
          state.form.schema[indexOfObject].value = value2;
          state.form.schema[indexOfObject].check = val;
          console.log(value2);
    }
  },
  actions: {
    
  },
  modules: {
  }
})
