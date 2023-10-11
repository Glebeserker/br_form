import { createStore } from 'vuex'
import schema from '../assets/formSupportFiles/schema.json'


export default createStore({
  state: {
    form: {
      schema,
      count: 0,
      reset_schema: schema
    }
  },
  mutations: {
    updateformData(state, {label ,value2, val}){
          const indexOfObject = state.form.schema.findIndex(obj => obj.fieldLabel == label);
          state.form.schema[indexOfObject].value = value2;
          state.form.schema[indexOfObject].check = val;
          console.log(value2);
    },
    saveToLocal(state){
      const data = JSON.stringify(state.form.schema);
      window.localStorage.setItem(state.form.count, data);
      state.form.count += 1;
      console.log(JSON.parse(window.localStorage.getItem('arr')));
      state.form.schema =state.form.reset_schema;
    },
    resetState(state){
      state.form.schema = state.form.reset_schema;
    }
  },
  actions: {

  },
  modules: {
  }
})
