<template>
    <div :id="'dropdownField_' + field.id" class="dropdownField">
        <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
        <select :name="field.fieldType + '_' + field.id" @change="pullOption">
            <option v-for="option in field.value" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "DropdownField",
    props: {
        field: Object
    },
    methods: {
        // Pulls data of selected option
        pullOption(e){
            console.log(e.target.options[e.target.selectedIndex].value)
        }
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