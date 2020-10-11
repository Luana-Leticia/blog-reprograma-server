const express = require('express')
const router = express.Router()
const controller = require('../controllers/postsController')

//@route GET posts
//@desc Retornar todos os posts
//@access Public
//@endpoint http://localhost:porta/posts
router.get('/posts', controller.getPosts)

//@route GET posts
//@desc Retornar apenas um único post pelo id : identificador
//@params :id
//@access Public
//@endpoint http://localhost:porta/posts/:id
router.get('/posts/:id', controller.getPostById)

//@route POST posts
//@desc Criar um post
//@access Public
//@endpoint http://localhost:porta/posts/
router.post('/posts', controller.createPost)

//@route DELETE posts
//@desc Deletar apenas um único post pelo id : identificador
//@params :id
//access Public
//@endpoint http://localhost:porta/posts/:id
router.delete('/posts/:id', controller.deletePost)

module.exports = router
