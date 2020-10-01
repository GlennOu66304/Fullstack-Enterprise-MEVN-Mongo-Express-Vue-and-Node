import Express from 'express'

import Mongoose from 'mongoose'

import config from '@config'

import path from 'path'

import v1Router from '@routes'

import webpackConfig from '../webpack.config'

import webpack from 'webpack'

import WebpackHotMiddleware from 'webpack-hot-middleware'

import WebpackDevMiddleware from 'webpack-dev-middleware'



Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

const app = Express()

const compiler = webpack(webpackConfig)

app.use(WebpackDevMiddleware(compiler,{

hot:true,
publicPath: webpackConfig.output.publicPath

}))



app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('server started succesfully.')
})
