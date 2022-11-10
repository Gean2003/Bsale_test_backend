const express = require('express') ;
const cors = require('cors');
const morgan = require('morgan') ;
const config = require('./config') ;
const productRouter = require('./router/product.router');
const categoryRouter = require('./router/category.router');
const { getConnection } = require('./database/database');

const app = express() ;

//PERF: Cors
app.use(cors())

//PERF: logs
app.use(morgan("dev"))

//PERF: inicio del servidor
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK!',
    })
})

//PERF: databse init
getConnection()

//PERF: rutas
app.use('/api/products', productRouter)
app.use('/api/categories', categoryRouter )


app.listen(config.port, () =>{
    console.log(`Server on port ${config.port}`);
})


