import data from '../utils/data.js'
     /**
      * 
      * @param { String } req to retreive input from client 
      * @param { Object } photo title and thumbnailUrl 
      */
    const getPhotos = async (req, res) =>{
        const photos = await data.filter((data)=> data.albumId === parseInt(req.params.albumId))          
        return(photos.length >0)? res.send({status: 200, photos }): res.send({status: 404, message:`Photo Not Found for ${req.params.albumId}\'s Album` })
    }
export default getPhotos