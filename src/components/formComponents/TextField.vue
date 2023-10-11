<template>
    <div class="textFieldWrap">
        <div :id="'textField_' + field.id" class="textField">
            <label :for="field.fieldType + field.id" >
                {{ field.fieldLabel }}
            </label>
            <input 
            type="text" 
            :name="field.fieldType + '_' + field.id"
            v-model='fieldData' @keypress="checkInput" @focusout="createStore">
            <p v-if="valid == false" class="warnMsg">{{ warnMsg }}</p>
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
        fieldData: "",
        warnMsg: "",
        valid: null,

    }),
    methods: {
        createStore(){
            this.$store.commit('updateformData', {label: this.field.fieldLabel , value2: this.fieldData, val: this.valid})
        },
        checkInput(){
            if(this.fieldData.length < 3 && this.fieldData.indexOf(" ") >= 0){
                this.valid = false;
                this.warnMsg = "Need to have at least 3 characters"
            }
            else if(this.fieldData.length < 3 && this.fieldData.indexOf(" ") < 0){
                this.valid=false;
                this.warnMsg = "Need to have at least 3 characters and a space";
            }
            else if(this.fieldData.indexOf(" ") < 0){
                this.valid=false;
                this.warnMsg = "Need to have a space between characters";
            }
            else{
                this.valid = true;
            }
        }
    },
    
    
    
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

    .warnMsg{
        color: red;
    }
}
}

</style>