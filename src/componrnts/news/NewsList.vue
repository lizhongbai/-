<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/4.jpg">
                    <div class="mui-media-body">
                        <h4>{{ item.title }}</h4>                      
                        <p>
                            <span>发表时间: {{ item.addTime | dataForm}}</span>
                            <span>点击: {{ item.Click }}次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                newsList:[
                    {id:1,title:'幸福吗',addTime:new Date(),Click:1},
                    {id:2,title:'快乐吗',addTime:new Date(),Click:2},
                    {id:3,title:'想死吗',addTime:new Date(),Click:3},
                    {id:4,title:'煞笔吗',addTime:new Date(),Click:4},
                    {id:5,title:'垃圾吗',addTime:new Date(),Click:5},
                    {id:6,title:'吃屎吗',addTime:new Date(),Click:6},
                    {id:7,title:'吃屎吗',addTime:new Date(),Click:7},
                    {id:8,title:'吃屎吗',addTime:new Date(),Click:32},
                    {id:9,title:'吃屎吗',addTime:new Date(),Click:21},
                    {id:10,title:'吃屎吗',addTime:new Date(),Click:767},
                    {id:11,title:'吃屎吗',addTime:new Date(),Click:56},
                    {id:12,title:'吃屎吗',addTime:new Date(),Click:684},
                    {id:13,title:'吃屎吗',addTime:new Date(),Click:467},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li{
            h4{
                font-size:14px;
                font-weight:normal;
            }

            p {
                font-size:12px;
                color:blue;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>