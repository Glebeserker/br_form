<template>
    <div class="textFieldWrap">
        <div :id="'textField_' + field.id" class="textField">
            <label :for="field.fieldType + field.id" >
                {{ field.fieldLabel }}
            </label>
            <input 
            type="text" 
            :name="field.fieldType + '_' + field.id"
            v-model='textData.fieldData' @input="checkInput">
        </div>
    </div>
</template>

<script>


export default {
    name: "TextField",
    props: {
        field: Object,
    },
    data: () => ({
        textData: {
            valid: null,
            fieldData: "",
        }
    }),
    methods: {
        // checkInput(){
        //     if(this.textData.fieldData.length < 3 || /\s/g.test(this.textData.fieldData)){
        //         console.log("meep")
        //     }
        // }
    }
    
    
}
</script>

<style scoped lang="scss">
.textFieldWrap{
    width: 75%;

    .textField{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    label{
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
    }
    input{
        width: 100%;
        color: $main-col;
        border: 1px solid $main-col;
        border-radius: 10px;
        padding: 1rem;
        font-size: 1.3rem;
    }
}
}

</style>