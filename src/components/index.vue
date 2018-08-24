<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(item2, i) in item.subcates" :key="item2.id">
                                                {{item2.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html" v-for="(item2, i) in item.subcates" :key="item2.id">{{item2.title}}</a>      
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                               <el-carousel >
                                    <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                    <h3>{{ item.title }}</h3>
                                     <img :src="item.img_url" alt="">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>

                        </div>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist " :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time |filterDate}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in message" :key="item.id">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a  href="/goods/43.html">{{item.message}}</a>
                    
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(item2, index) in item.datas" :key="item2.artID">
                            <a href="#/site/goodsinfo/87" class="">
                                <div class="img-box">
                                    <img :src="item2.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{item2.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{item2.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{item2.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{item2.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//导入axios
import axios from 'axios';
import moment from "moment"

export default {
  name: 'app',
  data:function(){
      return {
        catelist:[],
        sliderlist:[],
        toplist:[],
        message:[]
      }
  },
  //生命周期创建之前
  beforeCreate() {    
  },
  //创建完毕
  created() {
      axios.get("http://47.106.148.205:8899/site/goods/gettopdata/goods")
        .then((response)=>{
            //   console.log(response);
            this.catelist=response.data.message.catelist;
            this.sliderlist=response.data.message.sliderlist;
            this.toplist=response.data.message.toplist;
        })
      axios.get("http://47.106.148.205:8899/site/goods/getgoodsgroup")
      .then((response)=>{
          console.log(response);
          this.message=response.data.message;
      })
    
     },
     //过滤器
    filters:{
        //过滤日期
        filterDate(val){
            return  moment(val).format('YYYY年MM月DD日');
        }
    },
     
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 3  00px;
    margin: 0;
    height:341px;
  }
  .el-carousel{
      height:100%;
  }
  .el-carousel__container{
      height:100% ;
  }

 .banner-img{

 }
  
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
