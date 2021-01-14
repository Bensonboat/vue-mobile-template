<template>
    <div class="index-content">
        <the-heading/>
        <router-view class="index-content-router-view"/>
    </div>
</template>

<script>
    import TheHeading from './TheHeading.vue'
    export default {
        name: 'IndexContent',
        components: {
            TheHeading
        }
    }
</script>

<style lang="sass" scoped>
.index-content
    .index-content-router-view
        height: calc(100% - 5rem)
        overflow: scroll

</style>