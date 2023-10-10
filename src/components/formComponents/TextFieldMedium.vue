<template>
    <div :id="'textFieldMedium_' + field.id" class="textFieldMedium">
        <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
        <textarea type="tel" :name="field.fieldType + '_' + field.id" >
        </textarea>
    </div>
</template>

<script>
export default {
    name: "TextFieldMedium",
    props: {
        field: Object
    }
}
</script>

<style scoped lang="scss">
.textFieldMedium{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>