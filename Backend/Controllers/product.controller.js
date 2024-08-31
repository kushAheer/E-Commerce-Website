import AppDbContext from "../Db/AppDbContext.js";


//GET REQUESTS <OPEN>

export const getProductsRequest = async (req, res) => {
    
    try {
        const db = await AppDbContext();
        const { sortBy, category } = req.query;
    
        let queryParams = [];
        let query = `
            SELECT p.*
            FROM products p
            JOIN category_product cp ON p.id = cp.product_id
            JOIN categories c ON cp.category_id = c.id
            WHERE 1 = 1
            AND c.parent_cat_id != 0
        `;
    
        if (category !== undefined) {
            
            query += `
                AND c.id IN (
                    SELECT id FROM categories WHERE category_slug = ?
                    UNION ALL
                    SELECT id FROM categories WHERE parent_cat_id = (
                        SELECT id FROM categories WHERE category_slug = ?
                    )
                )
            `;
            queryParams.push(category, category);
        }
    
        
        if (sortBy !== undefined ) {
            query += ` ORDER BY p.product_price ${sortBy === 'ASC' ? 'ASC' : 'DESC'}`;
        }
    
        const [products] = await db.query(query, queryParams);
    
        if (products.length === 0) {
            return res.status(404).json({ status: 404, message: "No Product Found", productsData: [] });
        }
    
        return res.status(200).json({ status: 200, productsData: products });
    
    } catch (error) {
        
        console.error(error);
        
        return res.status(500).json({ status: 500, message: "Internal Server Error" });

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

        const {slug} = req.params;
        
        const db = await AppDbContext();
        
        const [[product]] = await db.query('SELECT * FROM products WHERE product_slug = ?', [slug]);

        
        
        if(!product){
        
            return res.status(404).json({status: 404, message: "Product Not Found"});
        
        }
        let [gallery] = await db.query('SELECT image_name FROM product_gallery WHERE product_id = ?' , [product.id]);


        if(!gallery){
            gallery = [];
        }


        const [[cat]] = await db.query('SELECT category_id FROM category_product WHERE product_id = ?' , [product.id]);

        const [[category]] = await db.query('SELECT category_name FROM categories WHERE id = ?' , [cat.category_id]);

        
        
        return res.status(200).json({status: 200, productData : product , images : gallery , category : category});
        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }
}

//GET REQUESTS <CLOSE>

//POST REQUESTS <OPEN>

export const createProductRequest = async (req, res) => {

    try {

        const { name, description,price, categoryList } = req.body;

        if (name == undefined || description == undefined || price == undefined || categoryList == undefined) {

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
        const frontImage = req.files.frontImage[0].filename;
        
        const db = await AppDbContext();
        const date = new Date();

        

        const [result] = await db.query('INSERT INTO products (product_name , product_desc , product_price, product_slug ,product_status ,product_image ,created_at,updated_at) VALUES (?,?,?,?,? ,?,?,?)', [name, description, price, slug , "active" ,frontImage , date , date]);
        
        if(!result.insertId){
        
            return res.status(500).json({message: "Internal Server Error" , errorMessage : "Product Creation Failed"});
        
        }
        
        for(let i = 0; i < images.length; i++){

            await db.query('INSERT INTO product_gallery (product_id , image_name ,created_at , updated_at) VALUES (?,?,?,?)' , [result.insertId, images[i].filename , date , date]);

        }

        for(let j = 0 ; j < categoryList.length ; j++){
                
                const [catResult] = await db.query('INSERT INTO category_product (product_id , category_id) VALUES (?,?)' , [result.insertId, categoryList[j]]);
    
                if(catResult.affectedRows == 0){
    
                    return res.status(500).json({message: "Internal Server Error" , errorMessage : "Product Creation Failed"});
    
                }
        }
        
        return res.status(200).json({ status: 200, message: 'Product Created' })

        
    } catch (error) {
        
        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }
}

//POST REQUESTS <CLOSE>

//DELETE REQUESTS <OPEN>

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

//DELETE REQUESTS <CLOSE>