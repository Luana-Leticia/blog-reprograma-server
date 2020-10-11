const posts = require('../models/postsModel')

const getPosts = (request, response) => {
    if(posts.length){
        response.status(200).json(posts)
    } else {
        response.status(500).json({ mensagem: 'Lista de posts vazia'})
    }
}

const getPostById = (request, response) => {
    const { id } = request.params
    const post = posts.find(post => post.id == id)
    if(post){
        response.status(200).json(post)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }
}

const createPost = (request, response) => {
    const post = request.body
    const newId = helper.getNewId(posts)
    const date = helper.getDate()
    const newPost = {
        id: newId,
        dataCriacao: date,
        ...posts
    }

    response.status(200).json(newPost)
    
}

const deletePost = (request, response) => {

}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost
}