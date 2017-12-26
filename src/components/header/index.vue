<template>
    <div>
        <div class="top-bar">
            <div class="container">
                <div class="welcome">欢迎来访云设模板网，精品与原创模板提供商！</div>
                <a class="collection" href="#" @click.prevent="collection">收藏本站</a>
            </div>
        </div>
        <header class="page-header">
            <div class="container">
                <h1 class="logo">
                    <img src="/static/template/logo.svg">
                </h1>
                <div class="center">
                    <div class="sear_box">
                        <form>
                            <input class="main_sear_inp" placeholder="输入搜索商品" type="text">
                            <button class="main_sear_btn">搜索</button>
                        </form>
                    </div>
                    <div class="keywords">
                        <a class="link" href="#">免费模板</a>
                        <a class="link" href="#">企业模板</a>
                        <a class="link" href="#">官网</a>
                    </div>
                </div>
                <div class="phone-box">
                    <div class="title">咨询热线</div>
                    <div class="phone">156-0222-9283</div>
                </div>
            </div>
        </header>
        <nav class="nav-box">
            <div class="container">
                <a class="all-category">所有分类</a>
                <ul class="nav-list">
                    <li class="item">
                        <router-link class="link" to="/" exact>网站首页</router-link>
                    </li>
                    <li class="item">
                        <router-link class="link" to="/about">关于我们</router-link>
                    </li>
                    <li class="item">
                        <router-link class="link" to="/package">建站套餐</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
            collection() {
                alert('抱歉，您所使用的浏览器不支持此操作。\n加入收藏失败，请使用 Ctrl+D 进行添加')
            }
        }
    }
</script>
