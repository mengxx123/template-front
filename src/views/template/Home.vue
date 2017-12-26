<template>
    <div class="page page-home">
        <ui-header></ui-header>
        <div class="page-body">
            <div class="page-banner">
                <div class="banner-item item-1"></div>
                <div class="container">
                    <ul class="main-nav-list">
                        <li class="item">
                            <a class="link" href="#"><i class="icon icon-category"></i> 企业模板</a>
                        </li>
                        <li class="item">
                            <a class="link" href="#"><i class="icon icon-category"></i> 营销模板</a>
                        </li>
                        <li class="item">
                            <a class="link" href="#"><i class="icon icon-category"></i> 资讯模板</a>
                        </li>
                        <li class="item">
                            <a class="link" href="#"><i class="icon icon-category"></i> 手机模板</a>
                        </li>
                        <li class="item">
                            <a class="link" href="#"><i class="icon icon-category"></i> HTML5/CSS3</a>
                        </li>
                    </ul>
                    <div class="mainAright wrap Right">
                        <div class="side Left">
                            <div class="akeypost">
                                <ul id="marqueebox3">
                                    <li><h3>共有650套模板</h3></li>
                                    <!--<li><h3>1,070套完美插件</h3></li>-->
                                    <!--<li><h3>2,700多家合作商</h3></li>-->
                                </ul>
                            </div>
                            <div class="tab">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
