<template>
    <div :id="'telField_' + field.id" class="telField">
        <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
        <input type="tel" :name="field.fieldType + '_' + field.id">
    </div>
</template>

<script>
export default {
    name: "PhoneField",
    props: {
        field: Object
    }
}
</script>

<style scoped lang="scss">
.telField{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>