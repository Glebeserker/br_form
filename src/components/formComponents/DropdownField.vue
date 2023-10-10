<template>
    <div :id="'dropdownField_' + field.id" class="dropdownField">
        <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
        <select :name="field.fieldType + '_' + field.id" >
            <option value="option" v-for="option in field.value">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "DropdownField",
    props: {
        field: Object
    }
}
</script>

<style scoped lang="scss">
.dropdownField{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>