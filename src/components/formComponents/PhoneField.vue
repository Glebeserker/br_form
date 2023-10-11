<template>
    <div class="telFieldWrap">
        <div :id="'telField_' + field.id" class="telField">
            <label :for="field.fieldType + field.id">
                {{ field.fieldLabel }}
            </label>
            <input 
                type="tel" 
                :name="field.fieldType + '_' + field.id" 
                v-model="phone" 
                @keypress="phoneCheck($event)"
                
                >
            <p v-if="!valid" class="warningMsg">
                {{ warningMsg }}{{ lengthMessage }}
            </p>

            <p v-else class="placeWarn"></p>
        </div>
    </div>
</template>

<script>

export default {
    name: "PhoneField",
    props: {
        field: Object
    },
    data: () => ({
        phone: '',
        valid: null,
        warningMsg: "",
        lengthMessage: "",
    }),
    methods: {
        // Checks if the input is a digit and not anything else
        phoneCheck(e) {
            let phoneDigit = e.keyCode;
            const phoneLen = this.phone.length;
            if(phoneDigit < 48 || phoneDigit > 57){
                e.preventDefault();
                this.valid = false;
                this.warningMsg = "Must be only numbers. ";
                if(phoneLen < 10){
                    this.lengthMessage = "Must be at least 10 digits.";
                }
                else if (phoneLen > 15){
                    this.phone = this.phone.substring(0, 15);
                    this.lengthMessage = "Can have maximum of 15 digits.";
                }
                else{
                    this.lengthMessage = "";
                }
            }
            else {
                this.warningMsg = "";
                if(phoneLen < 10){
                    this.lengthMessage = "Must be at least 10 digits.";
                    this.valid = false;
                }
                else if (phoneLen > 15){
                    this.phone = this.phone.substring(0, 15);
                    this.lengthMessage = "Can have maximum of 15 digits.";
                    this.valid = false;
                }
                else if (phoneLen == 15){
                    this.lengthMessage = "Can have maximum of 15 digits.";
                    this.valid = true;
                }
                else{
                    this.lengthMessage = "";
                    this.valid = true;
                }
            }

        }
    },
    computed: {
        // A computed property to check length of the phone number
        // Maxium is 15 and minimum is set to 10, can be also dynamic where values 
        // are passed as a prop
    }
}
</script>

<style scoped lang="scss">

.telFieldWrap{
    width: 75%;
    .telField{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    label, input{
        width: 100%;
        color: $main-col;
    }
    input{
        font-size: 1.3rem;
        border-radius: 10px;
        border: 1px solid $main-col;
        padding: 1rem;
    }
    label{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .placeWarn{
        display: none;
    }

    .warningMsg{
        color: red;
    }
}
}

</style>