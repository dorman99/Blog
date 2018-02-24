<template>
   <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="blog.img">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">{{blog.title}}</p>
        <p class="subtitle is-6">{{blog.author.name}}</p>
      </div>
    </div>
    <div class="content">
      {{blog.content}}
      <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'blogdetail',
  props: ['id', 'blog'],
  data(){
    return {
      pic: localStorage.getItem('pic')
    }
  }
}
</script>

<style>

</style>
