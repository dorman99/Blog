<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="blog.img" alt="Placeholder image">
    </figure>
  </div>
     <div class="card-content">
    <div class="media">
      <div class="media-content">
        <router-link :to="'/blog/' + blog._id" >
          <p @click="selecttitle(blog)" class="title is-6">{{blog.title}}</p>
        </router-link>
        <p class="subtitle is-6">{{blog.author.name}}</p>
      </div>
    </div>
    <div class="content">
      {{blog.content.substr(0,100)}} ....
      <br>
      <time :datetime="blog.date">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'card',
  props: ['blog'],
  data () {
    return {
      pic : localStorage.getItem('pic')
    }
  },
  methods:{
    selecttitle (val) {
      this.$emit('select-title',val)
    }
  }
}
</script>

<style>

</style>
