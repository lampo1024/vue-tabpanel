<template>
<li :class="{'active': tabData.active, 'loading': tabData.loading}">
  {{tabData.params.title}}<span v-if="tabData.allowClose || tabData.params.allowClose" class="btn-close" @click.stop="close">&times;</span></li>
</template>
<script>
    export default {
        props: {
            tabData: Object
        },
        mounted() {
            
        },
        methods: {
            close() {
                this.$emit('close', this.tabData)
            }
        }
    }
</script>