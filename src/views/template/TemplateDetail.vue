<template>
    <div class="page page-home">
        <h1>云设模板</h1>
        <div class="page-body">
            <div class="container">
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
                        <div class="ic ic-1"></div>
                        <h4 class="title">支付购买</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">支付方式</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">交易条款</router-link> </li>
                        </ul>
                    </li>
                    <li class="item">
                        11
                    </li>
                    <li class="item">
                        <div class="ic ic-1"></div>
                        <h4 class="title">新手指南</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">购买流程</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">交易条款</router-link> </li>
                        </ul>
                    </li>
                    <li class="item">
                        <div class="ic ic-1"></div>
                        <h4 class="title">新手指南</h4>
                        <ul class="nav-list">
                            <li class="nav-item"><router-link class="link" to="/">购买流程</router-link> </li>
                            <li class="nav-item"><router-link class="link" to="/">交易条款</router-link> </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="page-footer">
            <div class="nav">
                <a href="http://www.xiuzhanwang.com" rel="nofollow">网站首页</a>
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
                <a href="/goumailiucheng/" rel="nofollow" title="新手指南">新手指南</a>
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
                <a href="/pay/" rel="nofollow" title="支付购买">支付购买</a>
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
                <a href="/service/" rel="nofollow" title="售后服务">售后服务</a>
                &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
                <a href="/about/" rel="nofollow" title="关于我们">关于我们</a>
            </div>
            <div class="info">Copyright © 2016-2017 云设模板-为您提供最专业的高品质企业网站建设</div>
            <div class="info">公司名称：广州云设科技有限公司 地址：合肥蜀山区社岗路阳光花园6幢602 电话：152-0569-5834</div>
            <div class="info">dedecms模板,dedecms企业模板,dedecms资讯模板,高端HTML5响应式模板,dedecms手机模板,Html5+CSS3模板,网站模板,网页模板,免费网页模板</div>
        </footer>
        <article>
            <p>我们的目标</p>
            <p>为什么选择我们</p>
        </article>
        <div></div>
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
