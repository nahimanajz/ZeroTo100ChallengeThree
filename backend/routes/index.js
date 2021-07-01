
import express from 'express'
import getPhotos from '../controller/Album.js'

const routes = express.Router();
routes.get('/album/:albumId', getPhotos)

routes.get('/test', (req, res) => res.send('Api works'))

export default routes