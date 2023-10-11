<template>
    <form class="formWrapper" @submit.prevent="printForm($event)">
         <!--Loops over schema to call up correct Form Components  -->
        <component v-for="field in field_schema" :key="field.id" :is="field.fieldType"  :field="field" v-model="itemsForm" ></component>
        <div class="buttonWraper">
            <button type="submit" :disabled="invalid == true">Submit</button>
        </div>
    </form>
</template>

<script>
// importing form data
import schema from '../assets/formSupportFiles/schema.json'



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
    field_data: {},
    itemsForm: {},
    count: 0,
    invalid: true,

  }),
  
  methods: {
    printForm(e) {
        const form = e.target
        const formData = new FormData(form)
        console.log(formData)
        for(const item of formData.entries()){
            this.itemsForm[item[0]] = item[1];
            console.log(item[0], item[1])
        }
        const data = JSON.stringify(this.itemsForm);
        window.localStorage.setItem(this.count, data);
        this.count += 1;
        console.log(JSON.parse(window.localStorage.getItem('arr')))
    }
  },

}
</script>

<style scoped lang="scss">
.formWrapper{
    display: flex;
    width: 35%;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: $main-col;

    @media (max-width: $breakpoint-tablet){
        min-width: 65%;
    }

    div:not(:last-child){
        margin-bottom: 1rem;
    }

    .buttonWraper{
        width: 75%;
        display: flex;
        flex-wrap: wrap;

        button{
            margin-top: 1rem;
            width: 100%;
            padding: 14px 20px;
            background-color: $main-col;
            border-radius: 4px;
            border: 0;
            box-shadow: none;
            cursor: pointer;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;

            &[disabled = "true"]{
                background-color: grey;
                transition: 0.2s;
            }

            &:hover{
                background-color: green;
                transition: 0.2s;
            }
            &:active{
                background-color: $sec-col;
                color: $main-col;
                transition: 0.2s;
            }
        }
    }
}
</style>