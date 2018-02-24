<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://previews.123rf.com/images/jemastock/jemastock1608/jemastock160812408/61844162-writer-machine-vintage-old-message-icon-flat-and-isolated-design-vector-illustration.jpg">
            </figure>
            <form>
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
              <button @click.prevent="login()" class="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/signup">Sign Up</router-link>
            ·&nbsp;
            <router-link to="#">need help?</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('masuk sini axios login')
      let self = this
      this.$http.post('/login', {
        username: self.username,
        password: self.password
      })
        .then(resp => {
          if (resp.data.search) {
            this.$swal('Login Fail!', 'username/password salah!', 'error')
          } else {
            console.log(resp.data.role)
            this.$swal('Login Success!', 'Welcome!', 'success')
            if (resp.data.role === 'author') {
              self.$router.push('blogs')
              let payload = {
                status: false,
                role: resp.data.role,
                token: true
              }
              self.$emit('loggedin', payload)
              localStorage.setItem('token', resp.data.data)
              localStorage.setItem('pic',resp.data.profile)
            } else if (resp.data.role === 'admin') {
              console.log('ini dari server admin', resp.data)
              localStorage.setItem('token', resp.data.data)
                 console.log('login',resp)
                  self.$router.push('admin')
                  let payload = {
                status: false,
                role: resp.data.role,
                token: true
              }
              console.log('ini payload', payload)
              self.$emit('loggedin', payload)
            }
          }
          console.log(resp, 'dari resp')
        }).catch(err => { console.log(err) })
    }
  }
}
</script>
