<template>
<div>
    <div class="Vtest01box">
        <ul>
            <li v-for="(item,index) in filterList">
                <div><a href="javascript:;" class="thecheck"  v-bind:class="{'check':item.checked}" @click="selectCheck(item)"><input type="checkbox" /></a></div>
                <div>
                    <a href="javascript:;" @click="addGoods(item,-1)">-</a>
                    <a class="Vcount" href="javascript:;"><input disabled v-model="item.vtest01_count"/></a>
                    <a href="javascript:;" @click="addGoods(item,1)">+</a>
                </div>
                <div><strong>{{item.vtest01_momey*item.vtest01_count | AmoutFormat(' 元')}}</strong><span  @click="DelGoods(item)">删除</span></div> 
                <div class="goodold"><span  v-if="!item.vtest01_showOld" @click="SetDefault(item.vtest01_ID)">设为新商品</span><strong v-if="item.vtest01_showOld">新商品</strong></div>
            </li>
        </ul>
    </div>
    <div class="showmore">
        <!--<p><span>点击显示更多</span></p>-->
        <p><span @click="showMore">点击显示更多</span></p>
    </div>
</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return {
        limitMore:3
    }
  },
  computed:{
       ...mapGetters({
        products: 'allProducts'
       }),
       filterList(){
         return this.products.slice(0, this.limitMore)
       }
  },
  methods:{
    showMore(){
        this.limitMore = this.products.length
    },
    SetDefault(theID){
        this.$store.dispatch('nowSetDefault',theID)
    },
    addGoods(item,opStatus){
        this.$store.dispatch('nowAddAction',{item,opStatus})
    },
    selectCheck(item){
        this.$store.dispatch('nowSelectCheck',{item})
    },
    DelGoods(item){
        this.$store.dispatch('nowDelGoods',{item})
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>


