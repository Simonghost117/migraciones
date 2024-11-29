const {Publicacion }= require('../models')
let listarPublicacion = async ()=>{
    try {
       let resp =await Publicacion.findAll()
        return resp
    }catch(e){
        console.log(e)
    }
}
module.exports = {
    listarPublicacion
}