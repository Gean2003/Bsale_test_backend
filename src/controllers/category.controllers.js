const { getConnection } = require("../database/database");

//NOTE: obtener todas las categorias
const getCategory = async (req, res) => {

    try {
        const category = await getConnection()
        const result = await category.query('SELECT * FROM category') 
        res.json({
            status: "ok",
            result: result})
    } catch (e) {
        /* handle error */
        res.status(400).json({message:e})
    }
} ;

module.exports = {
    getCategory
}
