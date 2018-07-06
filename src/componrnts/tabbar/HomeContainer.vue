<template>
    <div>
    <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../images/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item> <img src="../../images/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    <!--  九宫格到 6 宫格 的改造  -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 ">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">练习我们</div>
                </a>
            </li>
        </ul> 
    </div>
</template>


<script>

import { Toast } from 'mint-ui'

    export default {
        data() {
            return{
                
            }
        },
        created() {
            this.getLunBoTu()
        },
        methods:{
            getLunBoTu() {
                // this.$http.get('http://localhost:3000/comments')
                //     .then(result => {
                //         console.log(result)
                //     })
                Toast('动物世界获取成功')
            }
        }
    }
</script>



<style lang="scss" scoped>
    .mint-swipe {
        height:200px;

            .mint-swipe-item {
            &:nth-child(1) {
                background-color:red;
            }

            &:nth-child(2) {
                background:green;
            }

            &:nth-child(3) {
                background:yellow;
            }
        }
        img {
            width:100%;
            height:100%;
        }
    }

    .mui-grid-view.mui-grid-9{
        background:#FFF;
        border:none;
            img {
                width:60px;
                height:60px;
            }
            .mui-media-body {
                font-size :12px;
            }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border:none;
        width:33.3333%;
    }
    
</style>