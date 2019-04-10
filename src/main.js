require("babel-runtime/regenerator")
require("webpack-hot-middleware/client?reload=true")
require("./main.css")
require('./index.html')

const a = () => {
  console.log('HEllo from the FUTURE!')
}
//debugger