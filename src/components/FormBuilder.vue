<template>
    <form class="formWrapper" >
        <component v-for="field in field_schema" :key="field.id" :is="field.fieldType"  :field="field"></component>
        <div class="buttonWraper">
            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<script>
import schema from '../assets/formSupportFiles/schema.json'
// import {CheckboxField, DropdownField, PhoneField, TextField, TextFieldMedium} from './formComponents/index.js';


export default{
    name: "FormBuilder",
    components: {},
    
    created() {
        // Method to dynamically import formComponents in formComponent folder
        const formComponents = import.meta.glob('./formComponents/*.vue', {eager:true});

        Object.entries(formComponents).forEach(([path, def]) => {
            const compName = path.split('/').pop().replace(/\.\w+$/, '')
            this.$options.components[compName] = def.default;
        })

    },
    data: () => ({
    field_schema: schema,
    count_start: 1,
    field_data: {},

    // formData
  }),
  computed: {
  },
  
  methods: {
    handler(value){
        // this.field_data[] = value;
        console.log(value.data)
        console.log(value)
    },
    dataBuilder(){
            let i = 0;
            while(this.field_schema[i]){
            console.log(this.field_schema[i].fieldLabel);
            this.field_data[this.field_schema[i].fieldLabel] = this.field_schema[i].value;
            i++;
            }
        }
  },

  mounted(){
    this.dataBuilder();

  }

}
</script>

<style scoped lang="scss">
.formWrapper{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;

    div:not(:last-child){
        margin-bottom: 1rem;
    }

    .buttonWraper{
        width: 100%;
        display: flex;
        justify-content: center;

        button{
            width: 50%;
        }
    }
}
</style>