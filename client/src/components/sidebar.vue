<template>
  <aside class="menu">
    <hr>
  <p class="menu-label">
    Articles
  </p>
  <ul class="menu-list">
    <li v-for="(blog,index) in blogs" :key="index" @click="selectArc(blog._id)" ><router-link :to="'/blog/' + blog._id">{{blog.title}}</router-link></li>
  </ul>
  <hr>
</aside>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['blogs'],
  methods: {
    selectArc (blogid) {
      this.$emit('select-arc', blogid)
      console.log('masuk sini')
    }
  }

}
</script>

<style>

</style>
