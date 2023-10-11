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
                        :name="field.fieldType + '_' + option" 
                        :value="option">
                    <label :for="field.fieldType + '_' + option">
                        {{ option }}
                    </label>
                </div>
            </div>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "CheckboxField",
    props: {
        field: Object
    }
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
        }

    }
</style>