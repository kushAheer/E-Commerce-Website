import AppDbContext from "../Db/AppDbContext.js";

export const getProductsRequest = async (req, res) => {
    try {
        
        const db = await AppDbContext();
        
        const [products] = await db.query('SELECT * FROM products');

        if(products.length == 0){

            return res.status(404).json({status : 404 , message : "No Data Found"});

        }
        
        return res.status(200).json({status: 200, productsData : products});

        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}
export const getAscProductsRequest = async (req, res) => {
    try {
        
        const db = await AppDbContext();
        
        const [products] = await db.query('SELECT * FROM products ORDER BY product_price ASC');

        if(products.length == 0){

            return res.status(404).json({status : 404 , message : "No Data Found"});

        }
        
        return res.status(200).json({status: 200, productsData : products});

        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}

export const getDescProductsRequest = async (req, res) => {
    try {
        
        const db = await AppDbContext();
        
        const [products] = await db.query('SELECT * FROM products ORDER BY product_price DESC');

        if(products.length == 0){

            return res.status(404).json({status : 404 , message : "No Data Found"});

        }
        
        return res.status(200).json({status: 200, productsData : products});

        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}

export const getProductsByCategoryRequest = async (req, res) => {
    try {
        
        const {id} = req.params;
        
        const db = await AppDbContext();
        
        const [products] = await db.query('SELECT * FROM products INNER JOIN category_product ON products.id = category_product.product_id WHERE category_product.category_id = ?' , [id]);

        if(products.length == 0){

            return res.status(404).json({status : 404 , message : "No Data Found"});

        }
        
        return res.status(200).json({status: 200, productsData : products});

        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}

export const getProductsBySubCategoryRequest = async (req, res) => {

}

export const getProductsByIdRequest = async (req, res) => {
    try {

        const {id} = req.params;
        
        const db = await AppDbContext();
        
        const [[product]] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        
        if(!product){
        
            return res.status(404).json({status: 404, message: "Product Not Found"});
        
        }
        
        return res.status(200).json({status: 200, productData : product});
        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }
}


export const createProductRequest = async (req, res) => {

    try {

        const { name, description,price, category_id ,parent_cat_id } = req.body;

        if (name == undefined || description == undefined || price == undefined || category_id == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        const slug = name.trim().replace(/\s+/g, '-').toLowerCase();
        if (name.length < 3) {

            return res.status(202).json({ status: 202, message: 'Product name should be at least 3 characters long' })

        }

        // if(description.length < 10){
         
        //     return res.status(202).json({ status: 202, message: 'Product description should be atleast 10 characters long' })
        
        // }
        if(!(req.files.frontImage && req.files.images)){

            return res.status(202).json({ status: 202, message: 'Please upload Product images' })

        }

        const images = req.files.images;
        const frontImage = req.files.frontImage[0].path;
        
        const date = new Date();

        const db = await AppDbContext();

        const [result] = await db.query('INSERT INTO products (product_name , product_desc , product_price, product_slug ,product_status ,product_image ,created_at,updated_at) VALUES (?,?,?,?,? ,?,?,?)', [name, description, price, slug , "active" ,frontImage , date , date]);
        
        if(!result.insertId){
        
            return res.status(500).json({message: "Internal Server Error" , errorMessage : "Product Creation Failed"});
        
        }
        
        for(let i = 0; i < images.length; i++){

            await db.query('INSERT INTO product_gallery (product_id , image_name ,created_at , updated_at) VALUES (?,?,?,?)' , [result.insertId, images[i].path , date , date]);

        }

        const [catResult] = await db.query('INSERT INTO category_product (product_id , category_id) VALUES (?,?)' , [result.insertId, parent_cat_id]);
        const [subCatResult] = await db.query('INSERT INTO category_product (product_id , category_id) VALUES (?,?)' , [result.insertId, category_id]);

        if(catResult.affectedRows == 0){

            return res.status(500).json({message: "Internal Server Error" , errorMessage : "Product Creation Failed"});

        }
        
        return res.status(200).json({ status: 200, message: 'Product Created' })

        
    } catch (error) {
        
        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }
}

export const deleteProductRequest = async (req, res) => {

    try {

        const {id} = req.params;

        const db = await AppDbContext();

        const [product] = await db.query('DELETE FROM products WHERE id = ?' , [id]);

        if(product.affectedRows == 0){

            return res.status(404).json({status: 404, message: "Product Not Found"});

        }

        return res.status(200).json({ status: 200, message: 'Product Deleted' });

    }
    catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }
}