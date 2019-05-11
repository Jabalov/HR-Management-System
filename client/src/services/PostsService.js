import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },

 /* addPost (params) {
    return Api().post('posts/add_post', params)
  },*/

  /*updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },
*/
  getPost (params) {
    return Api().get('posts/post/' + params.id)
  },
/*
  deletePost (id) {
    return Api().delete('posts/' + id)
  },*/
  
}

