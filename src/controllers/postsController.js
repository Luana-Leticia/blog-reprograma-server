const posts = require('../models/postsModel')
const helper = require('../helpers/helper')

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
    const { titulo, conteudo, etiquetas } = request.body

    const newPost = {
        id: helper.getNewId(posts),
        dataCriacao: helper.getDate(),
        titulo: titulo,
        conteudo: conteudo,
        etiquetas: etiquetas
    }

    posts.push(newPost)
    
    response.status(200).json(newPost)

}

const deletePost = (request, response) => {
    const { id } = request.params
    const post = posts.find((post, index) => {
        if (post.id == id) {
            posts.splice(index, 1)
            return true
        }
    })

    if(post){
        response.status(200).json(posts)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }

}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    deletePost
}