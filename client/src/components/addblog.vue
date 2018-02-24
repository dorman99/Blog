<template>
<div>
    <div class="control columns" style="justify-content: center">
      <div class="column is-2">
            Title:
            <input v-model = "title" class="input" type="text" placeholder="Text input">
      </div>
        <div class="column is-2">
            Select Image:
            <input @change="filehandle" type="file" placeholder="Text input">
      </div>
</div>
<div class="column is-12">
    <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="pic">
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea v-model = "content" class="textarea" placeholder="Tell Your Story..."></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a @click.prevent = "postblog" class="button is-info">Submit</a>
        </div>
      </div>
        </nav>
    </div>
    </article>
</div>
</div>
</template>

<script>

export default {
    name: 'addblog',
    props:['blog'],
    data () {
        return {
            title: '',
            content: '',
            img:'',
            pic: localStorage.getItem('pic')
        }
    },
    methods : {
        filehandle (e) {
            this.img = e.target.files[0]
            let self = this
            const formData = new FormData()
            formData.append('img',self.img)
            this.$http.post('/upload',formData,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            }).then(response=>{
                self.img = response.data.link
                console.log('changedddd',response.data)
            }).catch(err=>{console.log(err)})
        },
        postblog(){
            let self = this
            this.$http.post('/blogs',{
                title: self.title,
                content: self.content,
                img: self.img
            },{
                headers : {
                    token : localStorage.getItem('token'),
                    
                }
            })
            .then(response=>{
                this.$emit('newblog',response.data.data)
                console.log('berhasil',response)
                this.title = ''
                this.content = ''
                this.img = ''
            })
            .catch(err => { console.log(err) })
         }
     
    }
}
</script>

<style>

</style>
