<template>
<div>
    <h1>购物车的结算</h1>
    <section>
     <shop-list></shop-list>   
     <total-list></total-list>
    </section>
    <settle-list></settle-list>
    <delet-list></delet-list>
</div>
</template>

<script>
import Vue from 'Vue'
import ShopList from './ShopList'
import TotalList from './TotalList'
import SettleList from './SettleList'
import DeletList from './DeletList'
export default{
    data(){
        return{
        }
    },
    components: {
        ShopList,
        TotalList,
        SettleList,
        DeletList
    },
    mounted(){
        this.$nextTick(function(){
            
        })
        
    },
    filters:{
        
    },
    computed:{
        
    },
    methods:{
        
    }
}




</script>

<style lang="scss">
@import "../assets/sass/conn";
.Vtest01box{
    width:100%;
    ul>li{
        width:100%;
        padding:0.2rem;
        overflow: hidden;
        border-bottom:1px dashed #ccc;
        box-sizing: border-box;
        >div{
          float:left;
          font-size:0.26rem;
          
          a{
            display:inline-block;
            padding:0.1rem 0.2rem;
            color:#000;
          }
        }
        >div:nth-of-type(1){
            width:20%;
        }
        >div:nth-of-type(2){
            width:30%;
        }
        >div:nth-of-type(3){
            width:50%;
            text-align: right;
            >span{
                margin-left:0.5rem;
            }
        }
    }
    .Vcount{
        padding:0;
        >input{
           display:inline-block;
           width:0.5rem;
           text-align: center;
        }
    }
}
.thecheck{
    margin-top:0.1rem;
    display:inline-block;
    width:0.3rem;
    height:0.3rem;
    padding:0!important;
    border-radius: 50%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position:relative;
    >input{
        opacity:0;
    }
}
.check{
   background:green;  
}
.check:after{
    content: '';
    width:0.2rem;
    height:0.1rem;
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    background: transparent;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position:absolute;
    top:30%;
    left:10%;
}
.Vtest01butt{
    padding:0.2rem;
    box-sizing: border-box;
    a{
        vertical-align: bottom;
        color:#000;
    }
}
.totalmoney{
    float:right;
}
/*****************************/
.graybox{
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    bottom: 0;
}
.delbox{
    position: fixed;
    left: 20%;
    top: 40%;
    z-index:99;
    width:60%;
    padding:0.1rem 0.2rem;
    height:2.5rem;
    background:#fff;
    box-sizing: border-box;
    >p{
        overflow: hidden;
        >a{
            display:inline-block;
            float:right;
            font-size:0.4rem;
            color:#666;

        }
    }
    >h4{
        text-align: center;
    }
    >div{
        text-align: center;
        padding:0.3rem 0 0;
        >a{
            display:inline-block;
            padding:0.1rem 0.2rem;
            border: 1px solid #ccc;
            border-radius: 2px;
            text-align: center;
            margin:0 0.2rem;
            color:#666;
        }
    }
    .suredelbut{
        background:orange;
        color:#fff;
        border-color:orange;
    }

}
/**********************/
.showmore{
    width:100%;
    border-bottom:1px solid #ccc;
    text-align: center;
    padding:0.2rem;
    box-sizing: border-box;
    span{
        color:orange;
    }
}
.lichecked{
    background:orange;
}
/*******************/
.goodold{
    width:100%;
    padding:0.1rem 0 0;
    text-align: left;
    >span{
        color:blue;
    }
    >strong{
        float:right;
        color:red;
    }
}
/***************************/
.Settlemenbox{
    width:100%;
    padding:0.2rem;
    margin-bottom:0.5rem;
    box-sizing: border-box;
    ul{
        overflow: hidden;
        >li{
            float:left;
            width:50%;
            text-align: center;
            padding:0.2rem;
            box-sizing: border-box;
            >a{
                display:block;
                padding:0.3rem 0;
                color:#666;
                border: 1px solid #ccc;
                font-size:0.28rem;
            }
            a.Acurrent{
                background:orange;
                color:#fff;
                border-color:orange;
            }
        }
    }
}
</style>