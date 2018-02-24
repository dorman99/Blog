<template>
  <body>
      <h1 class="title">Welcome To Admin Dashboard, please be wise !</h1>
      <hr>
  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box con">
                <p class="title">Create user</p>
                    <div class="control">
                        <form @submit.prevent="createnewUser">
                            <div>
                            user full name :
                            <input v-model="newUser.name" class="input" type="text" placeholder="Text input">
                            <hr>
                            UserName :
                            <input v-model="newUser.username" class="input" type="text" placeholder="Text input">
                            <hr>
                            Password :
                            <input v-model="newUser.password" class="input" type="password" placeholder="Text input">
                            <hr>
                            Role :
                            <input v-model="newUser.role" class="input" type="text" placeholder="Text input">
                            <br>
                            <br>
                            <button @click="createnewUser" class="button is-danger">Create User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tile is-vertical is-parent">
               <div class="tile is-child box" style="background-color: rgb(178, 236, 93)">
                <p class="title">delete blog</p>
                <select v-model="deleteblog.selected">
                    <option disabled value="">select blog below</option>
                    <option v-for="(blog,key) in blogs" :key="key" :value="blog._id">{{blog.title}}</option>
                </select>
                    <button @click="blogdelete" class="button is-warning">Delete Blog</button>
                </div>
                <div class="tile is-child box" style="background-color:rgb(236, 93, 106)">
                    <p class="title">edit user role</p>
                    <div class="columns">
                         <div class="column is-9" style="align-self: center">
                            <select v-model="edit.selected" >
                                <option disabled value=""> select user </option>
                                <option v-for="(user,key) in users" :key="key" :value="user._id">{{user.name}}</option>
                            </select>
                            <br>
                            <br>
                            <input class="input" v-model="edit.role" type="text" placeholder="change user role">
                        </div>
                        <div class="column is-3" style="align-self: flex-end">
                           <button @click="editUser" class="button is-warning">edit</button>
                        </div>
                    </div>
                </div>
                <div class="tile is-child box" style="background-color: #FFFF66">
                <p class="title">delete user</p>
                    <select v-model="deleteSelected">
                        <option disabled value="">Please select one</option>
                        <option  v-for="(user,key) in users" :key="key" :value="user._id">{{user.name}}</option>
                    </select>
                    <button @click="deleteoneUser" class="button is-danger"> delete user</button>
                </div>
            </div>
     </div>
    </div>
  </section>
  <hr>
</body>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      newUser: {
        name: '',
        username: '',
        password: '',
        role: ''
      },
      edit: {
        selected: '',
        role: ''
      },
      deleteSelected: '',
      users: [],
      blogs: [],
      deleteblog: {
        selected: ''
      }
    }
  },
  methods: {
    createnewUser () {
      let self = this
      console.log(self.users, 'ini apa')
      console.log('masukk new user create')
      this.$http.post('/authors', {
        name: self.newUser.name,
        username: self.newUser.username,
        password: self.newUser.password,
        role: self.newUser.role
      }).then(response => {
        console.log(response, 'ini response')
        self.newUser = {}
        self.users.push(response.data.data)
        this.$swal('Good job!', 'You clicked the button!', 'success')
      }).catch(err => { console.log(err) })
    },
    deleteoneUser () {
      let self = this
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.delete(`/authors/${self.deleteSelected}`, {
              headers: {
                token: localStorage.getItem('token')
              }
            })
              .then(resp => {
                const filteredUser = self.users.filter(el => el._id !== self.deleteSelected)
                self.users = filteredUser
                self.deleteSelected = ''
              })
              .catch(err => { console.log(err) })
            this.$swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success'
            })
          } else {
            this.$swal('Your imaginary file is safe!')
          }
        })
    },
    editUser () {
      let self = this
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            console.log(self.edit.selected)
            this.$http.put(`/authors/${self.edit.selected}`, {
              role: self.edit.role
            }, {
              headers: {
                token: localStorage.getItem('token')
              }
            }).then(response => {
              console.log(response)
              self.edit = {}
            }).catch(err => { console.log(err) })
              .then(resp => {
                const filteredUser = self.users.filter(el => el._id !== self.deleteSelected)
                self.users = filteredUser
                self.deleteSelected = ''
              })
              .catch(err => { console.log(err) })
            this.$swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success'
            })
          } else {
            this.$swal('Your imaginary file is safe!')
          }
        })
    },
    blogdelete () {
      let self = this
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.delete(`/blogs/${self.deleteblog.selected}`, {
              headers: {
                token: localStorage.getItem('token')
              }
            })
              .then(responnse => {
                let a = self.blogs.filter(el => el._id !== self.deleteblog.selected)
                self.blogs = a
                this.$swal('Poof! Your imaginary file has been deleted!', {
                  icon: 'success'
                })
              })
              .catch(err => { console.log(err) })
          } else {
            this.$swal('Your imaginary file is safe!')
          }
        })
    }
  },
  created () {
    let self = this
    this.$http.get('/authors')
      .then(response => {
        self.users = response.data.data
        console.log(response)
      }).catch(err => { console.log(err) })
    this.$http.get('/blogs')
      .then(response => {
        self.blogs = response.data.data
        console.log('masuk blog', response)
      })
      .catch(err => { console.log(err) })
  }
}
</script>

<style>
.con{
    background-color:turquoise;
    justify-content:space-between;
}
 hr{
     background-color: black
 }
 h1.title{
     padding-top: 10px;
     padding-left: 5%;
     text-align: left
 }
</style>
