<template>
<div>
    <section class="delbox" v-show="grayShow">
        <p><a href="javascript:;"  @click="CancleDel">×</a></p>
        <h4>你确定要删除该商品吗？</h4>
        <div><a href="javascript:;"  @click="CancleDel">取消</a><a href="javascript:;" class="suredelbut"  @click="SureDel">确定</a></div>
    </section>
    <div class="graybox" v-if="grayShow"></div>
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
          grayShow: 'GrayShow'
        })
    },
    methods:{
        SureDel(){
            this.$store.dispatch('nowSureDel')
        },
        CancleDel(){
            this.$store.dispatch('nowCancleDel')
        }
    }
}
</script>
