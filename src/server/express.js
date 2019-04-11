import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../../config/webpack.dev'
import keys from '../../config/keys'

const server = express()
const mongoose = require('mongoose')

// DB config
const { mongoURI: db } = keys

mongoose
  .connect(db)
  .then(() => console.log('DB connected'))
  .catch( e => console.log(e))


const compiler = webpack(config)
const webpackDevMiddleware = require("webpack-dev-middleware")(compiler, config.devServer)
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)
const staticMiddleware = express.static("dist")


server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)
server.use(staticMiddleware)
server.listen(8080, () => {
  console.log('Listening 8080... ')
})