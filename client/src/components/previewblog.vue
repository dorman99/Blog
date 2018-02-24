<template>
  <div class="column">
       <div class="columns">
           <div style="display:flex;flex-wrap:wrap">
            <div class="column" v-for="(blog,index) in blogs" :key="index">
            <card @select-title="selecttitle" :blog="blog"/>
         </div>
           </div>
        </div>
    </div>
</template>

<script>
import card from './cards'
export default {
  name: 'previewBlog',
  props: ['blogs'],
  components: {
    card
  },
  methods : {
      selecttitle(val){
          this.$emit('select-title',val)
          console.log('ini prev',val)
      }
  }
}
</script>

<style>

</style>
