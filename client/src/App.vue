<template>
  <div id="app">
    <div id="nav">
      <router-link  v-if="loginstat" to="/login">Login</router-link>|
      <router-link to="/blogs">Blogs</router-link>|
      <router-link v-if="admin" to="/admin">Admin</router-link>
      <a v-if="!loginstat" @click.prevent="logut()">logout</a>
    </div>
    <router-view @blogcome="newblog" :token="token" :articles="articles" @loggedin= "catchstat"/>
    <vueter></vueter>
  </div>
</template>
<script>
import vueter from './components/footer.vue'
export default {
  components: {
    vueter
  },
  data () {
    return {
      loginstat: true,
      token : false,
      admin: false,
      articles : []
    }
  },
  methods: {
    catchstat (payload) {
      let self = this
      if (payload.role == 'author') {
        this.token = payload.token
        this.loginstat = false
        this.$http.get('/blogs')
        .then(response => {
          self.articles = response.data.data
        })
      } else if (payload.role == 'admin') {
        this.token = payload.token
        this.admin = true
        this.loginstat = false
      }
    },
    logut() {
      localStorage.clear()
      this.$router.push('login')
      this.loginstat = true
      this.token = false
      this.admin = false
    },
    newblog(val){
      this.articles.push(val)
      console.log('ini asuk sini')
    }
  },
  created() {
      let self = this
      this.$http.get('/blogs')
       .then(response => {
         self.articles = response.data.data
       })
       .catch(err => {console.log(err) })

       if(localStorage.getItem('token')){
         self.token = true
         self.loginstat = false
       }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: powderblue
}

#nav {
  padding: 30px;
  background-color: hotpink
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
