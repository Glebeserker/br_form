<template>
    <div class="dropdownFieldWrap">
        <div :id="'dropdownField_' + field.id" class="dropdownField">
            <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
            <select 
            :name="field.fieldType + '_' + field.id" 
            @change="selectedOptionCheck" 
            v-model="selectedOption"
            >
                <option value="">Select A Value</option>
                <option v-for="option in field.value" :value="option" @focusout="createStore">
                    {{ option }}
                </option>
            </select>
            <p v-if="valid == false">{{ warningMsg }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownField",
    props: {
        field: Object
    },
    data: () => ({
        selectedOption: "",
        valid: null,
        warningMsg: "",
    }),
    methods: {
        selectedOptionCheck(){
            if(this.selectedOption == ""){
                this.valid = false;
                this.warningMsg = "Must select an option";
            }
            else{
                this.valid = true;
            }
            
        },
        createStore(){
            this.$store.commit('updateformData', {label: this.field.fieldLabel , value2: this.selectedOption, val: this.valid})
        }
    }
}
</script>

<style scoped lang="scss">
.dropdownFieldWrap{
    width: 75%;
    display: flex;
    justify-content: center;

    .dropdownField{
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        label{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 600;
        }
        select{
            width: 100%;
            color: $main-col;
            font-size: 1.3rem;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid $main-col;
            background-color: white;
        }


        p{
            color: red;
        }
    }
}
</style>