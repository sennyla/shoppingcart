<template>
<div>
    <div class="Vtest01butt">
        <a href="javascript:;" class="thecheck"  v-bind:class="{'check':Ischecked}" @click="selectAll(true)"><input type="checkbox" /></a><span style="margin:0 0.3rem 0 0.05rem;">全选</span>
        <a href="javascript:;"  @click="selectAll(false)">取消全选</a>
        <a href="javascript:;" class="totalmoney">总计:&nbsp;{{TotalMoney | AmoutFormat(' 元')}}</a>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters({
          Ischecked: 'Ischecked',
          TotalMoney:'TotalMoney'
        })
    },
    methods:{
        selectAll(flag){
            this.$store.dispatch('AllSelect',{flag})
        }
    }
}
</script>
