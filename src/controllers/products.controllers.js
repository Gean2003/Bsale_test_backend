const { getConnection } = require("../database/database");

//NOTE: obtener todos los productos
const getAllProducts = async (req, res) => {

        const offset = Number(req.query.offset) || 1 ;
        const limit = Number(req.query.limit) || 10 ;
        const urlBase =  'https://bsale-backend-vyob.onrender.com/api/products' ;
    try {


        const products = await getConnection()
        const result = await products.query(`SELECT * FROM product LIMIT ${(offset - 1) * limit}, ${limit}`) 
        res.json({
            status: "ok",
            page: offset, //NOTE: pagina en la que te encuentras
            nextPage: result.length >= limit ? `${urlBase}?offset=${offset + 1 }&limit=${limit}` : null, //NOTE: paginacion para la siguiente pagina
            previousPage: offset == 1 ?  null : `${urlBase}?offset=${offset - 1}&limit=${limit}`, //NOTE: paginacion para la pagina antetior
            result: result})
    } catch (e) {
        /* handle error */
        res.status(400).json({message:e})
    }
    
} ;


//NOTE: buscar productos
const searchProducts = async (req, res) => {
    try {
        const {name} = req.query ;
        const products = await getConnection();
        const result = await products.query(`SELECT * FROM product WHERE name LIKE "%${name}%" `) ;
        res.json({result: result})
    } catch (e) {
        /* handle error */
        res.json({message:e})
    }
    
} ;



module.exports = {
    getAllProducts,
    searchProducts
}
