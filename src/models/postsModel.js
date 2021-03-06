const helper = require('../helpers/helper')

const posts = [
    {
        id: 1,
        dataCriacao: helper.getDate(),
        titulo: 'Inscrição Reprograma',
        conteudo: 'Se inscreva na próxima turma da Reprograma',
        etiquetas: ['Inscrição', 'Mulheres na tecnologia']
    },
    {
        id: 2,
        dataCriacao: helper.getDate(),
        titulo: 'Introdução ao NodeJS',
        conteudo: 'O que você precisa para começar a aprender NodeJS',
        etiquetas: ['Artigo', 'Node', 'Javascript']
    },
]

module.exports = posts