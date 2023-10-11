<template>
    <div :id="'textFieldMedium_' + field.id" class="textFieldMediumWrap">
        <div class="textFieldMedium">
            <label :for="field.fieldType + field.id">{{ field.fieldLabel }}</label>
            <textarea  :name="field.fieldType + '_' + field.id" @input="checkLimit" v-model="message">
            </textarea>
            <p :class="{'danger': remaining < 10, 'out': remaining == 0}">{{ instruction }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextFieldMedium",
    props: {
        field: Object,
    },
    data: () => ({
        message: '' 
    }),
    methods: {
        checkLimit(){
            this.message = this.message.substring(0, this.field.maxChars);
            
        }
    },
    computed:{
        instruction: function(){
            return this.message == ""?
            "Limit: " + this.field.maxChars + ' characters' : 'Remaining: ' + this.remaining + ' character'
        },
        remaining: function(){
            return this.field.maxChars - this.message.length;
        }
    },
}
</script>

<style scoped lang="scss">
.textFieldMediumWrap{
    width: 75%;
    display: flex;
    justify-content: center;

    div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        label, textarea{
            width: 100%;
            color: $main-col;
        }
        textarea{
            font-size: 1.3rem;
            border-radius: 10px;
            border: 1px solid $main-col;
            min-height: 10rem;
            padding: 1rem;
        }
        label{
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    .textFieldMedium{

        p{
            width: 100%;
            text-align: right;
        }

        .danger{
            color: orange;
        }

        .out {
            color: red;
        }
    }

}
</style>