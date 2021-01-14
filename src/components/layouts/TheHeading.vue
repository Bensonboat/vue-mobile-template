<template>
    <div class="the-heading">
        This is header block
        <router-link to="/home_page">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        name: 'TheHeading'
    }
</script>

<style lang="sass" scoped>
.the-heading
    height: 5rem
</style>