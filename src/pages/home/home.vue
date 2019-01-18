<template>
  <div id="home">
      <div class="home">
        <el-row class="homeOne" :gutter="8">
            <el-col :span="5">
            <!-- 轮播图左 -->
                <p>
                    <i class="iconfont">&#xe694;</i>
                    <router-link to="/home">标的物类型</router-link>
                </p>
                <ul class="clearfix">
                    <li v-for="item in logoL">
                        <router-link :to="item.path" :key="item.id">{{item.name}}</router-link>
                    </li>
                </ul>
                <p>
                    <i class="iconfont">&#xe766;</i>
                    <router-link to="/home">标的物所在地</router-link>
                </p>
                <ul>
                    <li v-for="item in logoLb" :key="item.id">
                        <router-link :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="19" class="logoR">
                <!-- 轮播图左 -->
                <div class="fr">
                    <div class="logoRtop">
                        <!-- 上 -->
                        <dl class="fl" v-for="item in logoRtopT">
                            <dt :key="item.id">
                                <router-link :to="item.path">
                                    <i class="iconfont" v-html="item.icon"></i>
                                </router-link>
                            </dt>
                            <dd>
                                <router-link :to="item.path">{{item.name}}</router-link>
                            </dd>
                        </dl>
                    </div>
                    <div class="logoRbottm">
                        <!-- 下 -->
                        <router-link to="/home">
                            <span class="fl">帮助中心</span>
                            <span class="fr">
                                <u>更多</u>
                                <i class="iconfont">&#xe602;</i>
                            </span>
                        </router-link>
                        <div class="logoRban">
                            <router-link :to="item.to" v-for="item in logoRban" :key="item.id" :title="item.name">
                                <span>{{item.an}}</span>
                                <u>{{item.name}}</u>
                            </router-link>
                        </div>
                        <div class="logoRan0">
                            <router-link to="/home">
                                <i class="iconfont">&#xebd1;</i>
                                <span>模拟体验司法拍卖</span>
                            </router-link>
                            <p>
                                客服专线 400-822-2870
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fr">
                    <!-- 轮播图 -->
                    <el-carousel height="368px">
                        <el-carousel-item v-for="item in logoCome" :key="item.id">
                            <router-link :to="item.to"><img :src="item.url" alt=""></router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>

      </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
        logoL: {
            a: { name: '机动车', path: '/home', id: 1},
            b: { name: '住宅用房', path: '/home', id: 2},
            c: { name: '资产', path: '/home', id: 3},
            d: { name: '土地', path: '/home', id: 4},
            e: { name: '林权', path: '/home', id: 5},
            f: { name: '无形资产', path: '/home', id: 6},
            g: { name: '工程', path: '/home', id: 7},
            j: { name: '其他', path: '/home', id: 8}
        },
        logoLb: {
            a: { name: '浙江', path: '/home', id: 1},
            b: { name: '江苏', path: '/home', id: 2},
            c: { name: '广东', path: '/home', id: 3},
            g: { name: '福建', path: '/home', id: 4},
            f: { name: '山东', path: '/home', id: 5},
            e: { name: '河南', path: '/home', id: 6},
            d: { name: '四川', path: '/home', id: 7},
            h: { name: '北京', path: '/home', id: 8},
            i: { name: '河北', path: '/home', id: 9},
            k: { name: '江西', path: '/home', id: 10},
            l: { name: '湖北', path: '/home', id: 11},
            m: { name: '广西', path: '/home', id: 12},
            n: { name: '重庆', path: '/home', id: 13},
            oa: { name: '湖南', path: '/home', id: 14},
            fa: { name: '天津', path: '/home', id: 15},
            fa: { name: '安徽', path: '/home', id: 16},
            da: { name: '云南', path: '/home', id: 17},
            fd: { name: '陕西', path: '/home', id: 18},
            af: { name: '贵州', path: '/home', id: 19},
            et: { name: '吉林', path: '/home', id: 20},
            yt: { name: '内蒙古', path: '/home', id: 21},
            wr: { name: '海南', path: '/home', id: 22},
            yr: { name: '黑龙江', path: '/home', id: 28},
            rw: { name: '山西', path: '/home', id: 23},
            te: { name: '甘肃', path: '/home', id: 24},
            ku: { name: '辽宁', path: '/home', id: 25},
            et: { name: '上海', path: '/home', id: 26},
            qf: { name: '宁夏', path: '/home', id: 27}
        },
        logoCome: [
            {url: '../../../static/logo/logo1.jpg', to: '/home', id: '123'},
            {url: '../../../static/logo/logo2.jpg', to: '/home', id: '114'},
            {url: '../../../static/logo/logo3.jpg', to: '/home', id: '124'}
        ],
        logoRtopT: [
            {path: '/home', name: '零佣金', id: '1', icon: '&#xe625;'},
            {path: '/home', name: '支持贷款', id: '2', icon: "&#xe607;"},
            {path: '/home', name: '交易保障', id: '3', icon: '&#xe618;'}
        ],
        logoRban: [
            {id: '1', name: '交保限额', an: '交保', to: '/home'},
            {id: '2', name: '出价规则', an: '出价', to: '/home'},
            {id: '3', name: '退回保证金', an: '退回', to: '/home'},
            {id: '4', name: '售后交割', an: '交割', to: '/home'},
            {id: '5', name: '金融贷款', an: '贷款', to: '/home'},
            {id: '6', name: '如何过户?', an: '过户', to: '/home'}
        ]
    }
  }
}
</script>
<style lang="scss">
    #home {
        width: 100%;
        position: relative;
        .home {
            width: 1190px;
            margin:0 auto;
        }
    }
    .homeOne {
        height: 370px;
        margin-top: 20px;
        // background: #ccc;
        .el-col-5 {
            height:100%;
            border: 2px solid #ce2023;
            padding: 14px 0 0 18px !important;
            p > a {
                font-weight: 570;
            }
            p > i {
                color: #ce2023;
            }
            p a:hover {
                color: #ce2023;
            }
            & ul:nth-child(2) li{
                float: left;
                width: 25%;
                height: 28px;
                line-height: 28px;
                a {
                    color: #333333;
                    font-size: 12px;
                }
                & a:hover {
                    color: #fff;
                    background: #ce2023;
                }
            }
        }
    }
    .homeOne .el-col-5 ul li:nth-child(2) a,.homeOne .el-col-5 ul li:nth-child(1) a{
        color: #ce2023;
    }
    .homeOne .el-col-5 ul:nth-child(4) {
        & > li:nth-child(4) a ,& > li:nth-child(6) a,& > li:nth-child(9) a {
            color: #ce2023;
        }
        li {
            float: left;
            height: 28px;
            line-height: 28px;
            width: 25%;
            & a:hover {
                color: #fff;
                background: #ce2023;
            }
        }
    } 
    .logoR > div:nth-child(2) {
        width: 660px;
        background: #eee;
        box-sizing: border-box;
        border: 1px solid #dfdfdf;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            img {
                width: 658px;
                height: 368px;
            }
        }
    }
    .logoR > div:nth-child(1) {
        width: 270px;
        height: 370px;
        background: #f7f7f7;
        box-sizing: border-box;
        border: 1px solid #dfdfdf;
    }
    .logoRtop {
        width: 100%;
        height: 124px;
        border: 1px solid #dfdfdf;
        background: #f7f7f7;
        dl {
            height: 124px;
            width: 33%;
            text-align: center;
            dt {
                height: 74px;
                line-height: 100px;
                a {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    border-radius: 24px;
                    border: 2px solid #bcbcbd;
                    background: #fff;
                    text-align: center;
                    line-height: 45px;
                    color: #cd0000;
                    i {
                        font-size: 26px;
                        font-weight: 580;
                    }
                }
            }
            dd {
                margin-top: 10px;
                a {
                    font-weight: 580;
                }
            }
        }
    }
    .logoRtop dl a:hover {
        color: #c31f3a;
        border-color: #c31f3a;
    }
    .logoRbottm {
        height: auto;
        box-sizing: border-box;
        padding-left: 20px;
        padding-top: 16px;
        & > a:first-child {
            display: inline-block;
            width: 100%;
            height: 18px;
            line-height: 18px;
            font-weight: 580;
            & span:last-child {
                margin-right: 15px;
            }
        }
        & a:hover {
            color: #c31f3a;
        }
    }
    .logoRban a {
        display: inline-block;
        width: 120px;
        height: 20px;
        margin-bottom: 15px;
        font-size: 12px;
        color: #777777;
        span {
            display: inline-block;
            width: 36px;
            height: 20px;
            line-height: 18px;
            float: left;
            box-sizing: border-box;
            border: 1px solid #666666;
            border-radius: 3px;
            text-align: center;
        }
        u {
            display: inline-block;
            width: 84px;
            height: 100%;
            float: left;
            text-indent: 4px;
            background: #f7f7f7;
            color: #777777;
        }

    }
    .logoRbottm .logoRban a:hover {
        color: #fff;
        background: #c31f3a;
        text-decoration: underline;
    }
    .logoRban {
        padding-top: 10px;
    }
    .logoRan0 {
        height: auto;
        a {
            display: inline-block;
            width: 122px;
            height: 14px;
            line-height: 14px;
            border: 1px solid #c31f3a;
            border-radius: 4px;
            font-size: 12px;
            margin:0 auto;
            padding: 8px 44px;
            i {
                font-size: 14px;
                margin-right: 8px;
            }
        }
    }
    .logoRan0 a:hover {
        background: #c31f3a;
        color: #fff;
    }
    .logoRan0 p {
        width: 225px;
        height: 38px;
        line-height: 38px;
        text-align: center;
    }
</style>
