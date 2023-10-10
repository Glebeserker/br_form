<template>
    <div :id="'textField_' + field.id" class="textField">
        <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
        <input type="text" :name="field.fieldType + '_' + field.id" @input="$emit('update: fieldValue', $event.target.value)">
    </div>
</template>

<script>
export default {
    name: "TextField",
    props: {
        field: Object,
        'fieldValue': '',
    },
}
</script>

<style scoped lang="scss">
.textField{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>