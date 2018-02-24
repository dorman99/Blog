<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Sign Up</h3>
          <p class="subtitle has-text-grey">Input Your Info Below</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://previews.123rf.com/images/jemastock/jemastock1608/jemastock160812408/61844162-writer-machine-vintage-old-message-icon-flat-and-isolated-design-vector-illustration.jpg">
            </figure>
            <form>

              <div class="field">
                <div class="control">
                  <p><b>pic your profile pic: </b></p>
                  <input @change="filehandle"  type="file" placeholder="Your Username" autofocus="">
                </div>

              </div>
                <div class="field">
                <div class="control">
                  <input v-model="name" class="input is-large" type="text" placeholder="Your full name" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input v-model="username" class="input is-large" type="text" placeholder="Your Username" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input v-model="password" class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <button @click.prevent="signup()" class="button is-block is-info is-large is-fullwidth">Sign Up</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/login">Login?</router-link>
            &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      username: '',
      password: '',
      img: ''
    }
  },
  methods: {
    filehandle(e){
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
    signup () {
      let self = this
      this.$http.post('/signup', {
        username: self.username,
        password: self.password,
        name: self.name,
        img: self.img
      }).then(resp => {
        console.log(resp)
        let x = resp.data.message.search('username')
        if (x !== -1) {
          this.$swal('Sign Up Fail!', 'username sudah digunakan / tidak boleh kosong!', 'error')
          self.username = ''
          self.password = ''
          self.name = ''
          self.img = ''
        } else {
          this.$swal('Sign Up Complete!', 'Silakan Login!', 'success')
          self.username = ''
          self.password = ''
          self.name = ''
          self.img = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
