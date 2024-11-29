const {listarPublicacion} = require('../services/publicacionesServices')

let listarPublicaciones = async( req,res)=>{
    try {
       let resp = await listarPublicacion();

       res.json(resp)
      
    }catch(e){
console.log(e)
    }
}

module.exports = {
    listarPublicaciones
}