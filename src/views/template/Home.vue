<template>
    <div class="page page-home">
        <ui-header></ui-header>
        <div class="page-body">
            <div class="container">
                <div class="sort clearfix">
                    <div class="serbz">
                        <b>三大服务保证：</b>
                        <span class="no1">正版授权商品</span>
                        <span class="no2">一年售后无忧</span>
                        <span class="no3">诚信支付单位</span>
                    </div>
                    <div class="Right"> 共找到<font class="red ">360</font>件商品 </div>
                </div>
                <ul class="template-list">
                    <li class="item" v-for="template in templates">
                        <img class="img" src="/static/template/img/demo.jpg">
                        <div class="name">K44-dedecms资源教程网织梦模板</div>
                        <footer class="footer">
                            <div class="price">¥299元</div>
                        </footer>
                    </li>
                </ul>
            </div>
            <div class="feature-box">
                <div class="container">
                    <ul class="feature-list">
                        <li class="item">
                            <div class="ic ic-1"></div>
                            <div class="title">实体企业</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-2"></div>
                            <div class="title">正版产品</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-3"></div>
                            <div class="title">注重售后</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-4"></div>
                            <div class="title">授权保护</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-5"></div>
                            <div class="title">免费安装</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-6"></div>
                            <div class="title">免费安全</div>
                        </li>
                        <li class="item">
                            <div class="ic ic-7"></div>
                            <div class="title">98% 好评</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="help-box">
                <ul class="help-list">
                    <li class="item">
                        <div class="ic ic-1"></div>
                        <h4 class="title">新手指南</h4>
                        <ul class="nav-list">
                           <li class="nav-item"><router-link class="link" to="/">购买流程</router-link> </li>
                           <li class="nav-item"><router-link class="link" to="/">交易条款</router-link> </li>
                        </ul>
                    </li>
                    <li class="item">
                        <div class="ic ic-2"></div>
                        <h4 class="title">支付购买</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">支付方式</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">交易条款</router-link> </li>
                        </ul>
                    </li>
                    <li class="item">
                        <img class="qrcode" src="/static/template/img/qrcode.png" >
                        <div class="qrcode-text">关注有惊喜，好礼马上到!</div>
                    </li>
                    <li class="item">
                        <div class="ic ic-3"></div>
                        <h4 class="title">售后服务</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">域名授权</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">售后保障</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">常见问题</router-link> </li>
                        </ul>
                    </li>
                    <li class="item">
                        <div class="ic ic-4"></div>
                        <h4 class="title">服务支持</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">客服QQ： 1418503647@qq.com</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">工作日： 9:00-18:00</router-link> </li>
                        </ul>
                    </li>
                </ul>
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
