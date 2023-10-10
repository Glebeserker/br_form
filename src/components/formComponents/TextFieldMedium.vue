<template>
    <div :id="'textFieldMedium_' + field.id" class="textFieldMediumWrap">
        <div class="textFieldMedium">
            <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
            <textarea type="tel" :name="field.fieldType + '_' + field.id" >
            </textarea>
        </div>
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
.textFieldMediumWrap{
    width: 100%;
    display: flex;
    justify-content: center;

    div{
        width: 50%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        label, textarea{
            width: 100%;
        }
    }

}
</style>