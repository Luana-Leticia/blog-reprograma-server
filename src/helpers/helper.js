const getNewId = (posts) => {
    let newId = 1
    if(posts.length != 0) {
        const ids = posts.map(post => post.id)
        const sortedIds = ids.sort((a, b) => b - a)
        newId = sortedIds[0] + 1
    } 
    return newId
}

const getDate = () => {
    const date = new Date()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return formattedDate

}

module.exports = {
    getNewId,
    getDate
}