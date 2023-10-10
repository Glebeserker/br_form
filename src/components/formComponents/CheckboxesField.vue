<template>
    <div 
    :id="'checkboxField_' + field.id" 
    class="checkboxFieldWrap" >
        <div 
        class="checkboxField"
        v-for="option in field.value">
            <input
                type="checkbox" 
                :name="field.fieldType + '_' + option" 
                :value="option">
            <label :for="field.fieldType + '_' + option">{{ option }}</label>
        </div>
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
    width: 100%;
    display: flex;
    justify-content: center;

}
</style>