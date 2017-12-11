<template>
    <div class="page page-home">
        <ui-header></ui-header>
        <div class="page-body">
            <div class="container container-main">
                <!--<div class="sort clearfix">-->
                    <!--<div class="serbz">-->
                        <!--<b>三大服务保证：</b>-->
                        <!--<span class="no1">正版授权商品</span>-->
                        <!--<span class="no2">一年售后无忧</span>-->
                        <!--<span class="no3">诚信支付单位</span>-->
                    <!--</div>-->
                    <!--<div class="Right"> 共找到<font class="red ">360</font>件商品 </div>-->
                <!--</div>-->
                <div class="template-list">
                    <router-link class="item" to="/templates/1" v-for="template in templates">
                        <img class="img" src="/static/template/img/demo.jpg">
                        <div class="name">K44-dedecms资源教程网织梦模板</div>
                        <footer class="footer">
                            <div class="price">¥299元</div>
                        </footer>
                    </router-link>
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
