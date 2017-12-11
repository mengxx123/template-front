<template>
    <div class="page page-home">
        <ui-header></ui-header>
        <div class="page-body">
            <div class="container">
                <article>
                    <p>我们的目标</p>
                    <p>为什么选择我们</p>
                </article>
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
