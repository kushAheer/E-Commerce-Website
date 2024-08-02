import AppDbContext from "../Db/AppDbContext.js";

export const getCategory = async (req, res) => {

    try {

        const db = await AppDbContext();

        const [result] = await db.query('SELECT * FROM categories');
        if(result.length == 0){
                
            return res.status(202).json({ status: 202, message: 'No Category Found' })
        }

        return res.status(200).json({ status: 200, message: 'Category Fetched', data: result })

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })

    }
}

export const createCategory = async (req, res) => {


    try {

        const { name, slug } = req.body;



        if (name == undefined  || slug == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (name.length < 3) {

            return res.status(202).json({ status: 202, message: 'Category name should be atleast 3 characters long' })

        }

        const db = await AppDbContext();

        const date = new Date();

        const [categoryAlready] = await db.query('SELECT * FROM categories Where category_name = ?',[name]);

        if(categoryAlready.length > 0){
        
            return res.status(409).json({status : 409 ,message : "Category Already Exist "});

        }


        const [result] = await db.query('INSERT INTO categories (category_name  , category_slug ,created_at , updated_at) VALUES (?,?,?,?)', [name, slug,date,date]);

        

        const data = await db.query('UPDATE categories SET parent_cat_id = ? WHERE id = ? ' ,[result.insertId , result.insertId]);

        
        return res.status(200).json({ status: 200, message: 'Category Created' })



    } catch (error) {
            
        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }

}

export const createSubCategory = async (req, res) => {

    try {

        const { name, slug, parentCategory } = req.body;

        if (name == undefined || slug == undefined || parentCategory == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        const db = await AppDbContext();

        const [alreadyExist] = await db.query("SELECT * FROM categories where category_name = ? AND parentCategory = ? ",[name,parentCategory]);

        if(alreadyExist.length > 0){

            return res.status(409).json({status : 409 , message : "Sub Category is Already Existed in Parent Category "});

        }


        const [isParentCategoryExists] = await db.query('SELECT * FROM categories WHERE category_name = ? ', [parentCategory]);
        
        
        if (isParentCategoryExists.length == 0) {
        
            return res.status(202).json({ status: 202, message: 'Parent Category does not exists ' })
        
        }
        const date = new Date();

        const [created] = await db.query('INSERT INTO categories (category_name , category_slug , parent_cat_id , created_at , updated_at) VALUES (?,?,?,?,?)', [name, slug.toLowerCase(), isParentCategoryExists[0].id , date , date]);
        
        if(created.affectedRows > 0){
        
            return res.status(200).json({ status: 200, message: 'Sub Category Created' })
        
        }
        else{

            return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: 'Failed to create Sub Category' })

        }
        
    } catch (error) {
        
        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }
}