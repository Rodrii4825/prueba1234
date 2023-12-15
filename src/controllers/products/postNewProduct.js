const path = require('path');
const { validationResult } = require('express-validator');


const postNewProduct = (req,res) => {
    //res.send(req.body);
    
    const errors = validationResult(req);

    if(errors.isEmpty()){

        const { title, price, description } = req.body;

    
        /*const newProduct = {
            id: newId,
            title,
            price,
            description,
            image: req.file ? req.file.filename : ''
        };*/
        
    
        //guardar los datos en el archivo json
        /*fs.writeFile(productsPath,data, (error) => {
            if(error){
                res.send(`Error: ${error}`);
            }else{
                res.redirect('/products');
            }
        });*/
    }else{
        res.render(path.join(__dirname,'../../views/newproduct'),{errors: errors.array(), values: req.body});
    }
}

module.exports = postNewProduct;