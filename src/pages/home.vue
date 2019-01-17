<template>
  <div id="home">
      <div class="home">
        <el-row class="homeOne" :gutter="8">
            <el-col :span="5">
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
            <el-col :span="19">
                gfdsg
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
            yr: { name: '黑龙江', path: '/home', id: 22},
            rw: { name: '山西', path: '/home', id: 23},
            te: { name: '甘肃', path: '/home', id: 24},
            ku: { name: '辽宁', path: '/home', id: 25},
            et: { name: '上海', path: '/home', id: 26},
            qf: { name: '宁夏', path: '/home', id: 27}
        }
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





 
</style>
