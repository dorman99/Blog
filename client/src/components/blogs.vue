<template>
 <section class="hero is-white">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Wanna read something good ?
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
  <div class="container">
    <div class="columns">
    <div class="column is-one-quarter">
      <sidebar @select-arc="selectedArc" :blogs="articles"/>
      <router-link   v-if="token" class="button is-dark" :to="{name: 'addBlog'}">
          create a post
      </router-link>
    </div> 
    <div class="column">
      <router-view @newblog="newblog" @select-title="selecttitle" :blog="selectedarc" :blogs="articles"></router-view>
    </div>
     </div>
  </div>
  <hr>
</section>
</template>

<script>
import sidebar from './sidebar'
export default {
    name:"blogs",
    props: ['articles','token'],
    data() {
      return{
          selectedarc: {}
      }
    },
    components:{
      sidebar,
    },
    methods:{  
      selectedArc(val){
          console.log('ini blog',val)
          this.articles.filter(el=>{
             if(el._id == val){
               return this.selectedarc = el
             }
          })
        },
        selecttitle(val){
          this.selectedarc = val
        },
        newblog(val){
          console.log('mmasuk sini')
          this.$emit('blogcome',val)
        }
    }
}
</script>

<style scoped>
#cards{
 display: flex;
 flex-wrap:wrap
  
}
.container{
  text-align: start;
}
</style>
