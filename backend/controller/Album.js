import data from '../utils/data.js'

     /**
      * 
      * @param { String } req to retreive input from client 
      * @param { Object } photo title and thumbnailUrl 
      */
    const getPhotos = async (req, res) =>{
        const response = await data.filter((data)=> data.albumId === parseInt(req.params.albumId))       
        if(response.length >0){
            return res.send({status: 200, response })
        }else{
            return res.send({status: 404, message:`Photo Not Found for ${req.params.albumId}\'s Album` })
        }
    }
   

export default getPhotos