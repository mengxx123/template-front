<template>
    <div class="page page-template-detail">
        <ui-header></ui-header>
        <div class="page-body">
            <div class="container container-main">
                <div class="detail-box">
                    <img src="/static/template/img/demo-1.jpg">
                </div>
            </div>
        </div>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                templates: [1, 2, 3, 4, 5, 6]
            }
        }
    }
</script>

<style scoped>
</style>
