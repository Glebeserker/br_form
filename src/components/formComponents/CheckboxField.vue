<template>
    <div 
    :id="'checkboxField_' + field.id" 
    class="checkboxFieldWrap" >
    <fieldset>
    <legend class="checkBoxFieldTitle">
                {{ field.fieldLabel }}
    </legend>
        <div class="checkboxWrap">
            <div 
            class="checkboxField"
            v-for="option in field.value">
                    <input
                        type="checkbox" 
                        :name="field.fieldType + '_' + option + '_' + field.id" 
                        :value="option"
                        v-model="optionsSelected"
                        @change="checkOptions"
                        
                        >
                    <label :for="field.fieldType + '_' + option">
                        {{ option }}
                    </label>
                </div>
                <p v-if="valid == false" class="warnMsg">Must have at least 1 option selected</p>
            </div>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "CheckboxField",
    props: {
        field: Object
    },
    data: () => ({
        optionsSelected: [],
        valid: null,
    }),
    methods: {
        checkOptions(){
            let len = this.optionsSelected.length;
            console.log(len)
            if(len === 0){
                this.valid = false;
            }
            else{
                this.valid = true;
            }
        },
        createStore(){
            this.$store.commit('updateformData', {label: this.field.fieldLabel , value2: this.optionsSelected, val: this.valid})
        },
    },
}
</script>

<style lang="scss">
    .checkboxFieldWrap{
        width: 75%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        fieldset{
            width: 100%;
            border: 1px solid $main-col;
            border-radius: 10px;
        }

        .checkBoxFieldTitle{
            text-align: left;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .checkboxWrap{
            width: 100%;
            padding: 1rem 0 1rem 0;
            font-size: 1.3rem;

            .checkboxField:not(:last-child) {
                margin-bottom: 1rem;
            }

            .warnMsg{
                color: red;
            }
        }

    }
</style>