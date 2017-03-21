<template>
<li :class="{'active': tabData.active, 'loading': tabData.loading}">
  {{tabData.params.title}}<span v-if="allowClose" class="btn-close" @click.stop="close">&times;</span></li>
</template>
<script>
    export default {
        props: {
            tabData: Object
        },
        computed: {
            allowClose() {
                return this.tabData.allowClose || this.tabData.allowClose === undefined;
            }
        },
        methods: {
            close() {
                this.$emit('close', this.tabData)
            }
        }
    }
</script>