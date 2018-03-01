# Blog TDD !
a simple Blog web-app with TDD on server-side
-----
Blog's API :
###### list of routes : 
------
| Routes        | HTTP      | Description  |
| ------------- |:-------------:| -----:|
| [/login](/login)      | POST | Signin Endpoint to get Auth-Token |
|[signup](signup)|POST|Login To Blog To get Auth
| [/authors](/authors)      | GET|  All Authors Data |
| [/authors/:id](/:id)      | PUT|  Edit User Information (admin only) |
| [/authors/:id](/authors/:id) | DELETE|Delete User Information (admin only) |
| [/authors/:id](/:id)      | GET|  Single User Data |
|[authors/:id](/authors/:id)|DELETE|Delete User Data (admin only) |
|[/blogs/](/blogs/)|GET|get all blogs information|
|[/blogs/]()|POST|Create New blog (auth user only)|
|[/blogs/:id]()|PUT|Edit blog (auth user only)|
|[/blogs/:id]()|DELETE|Delete blog from DB (admin only)
|[/upload/]()|POST|Middleware to post (picture file) to GoogleCloudStorage 



## Wanna Read Something?
[http://blogtdd.abdillahh.com](http://blogtdd.abdillahh.com)
###### with only npm : 
------

## Build Setup Client-Side

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

