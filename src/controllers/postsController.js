const posts = require('../models/postsModel')

const getPosts = (request, response) => {
    if(posts.length){
        response.status(200).json(posts)
    } else {
        response.status(500).json({ mensagem: 'Lista de posts vazia'})
    }
    

}

const getPostById = (request, response) => {

}

const createPost = (request, response) => {

}

const deletePost = (request, response) => {

}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost
}