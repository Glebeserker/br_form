<template>
    <Teleport>
        <div class="resultsWrap">
            <button @click="close">Close</button>
            <div class="resultsInner">
                Hello
            </div>
        </div>
    </Teleport>
</template>

<script>
export default{
    name: "Results Page",
    data: () => ({
        resultData: {},
        show: false,
    }),
    mounted: {
        getDataRes(){
            this.resultData = localStorage.storedData;
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped lang="scss">
    .resultsWrap{
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 50%;
        width: 300px;
        margin-left: -150px;
    }
</style>