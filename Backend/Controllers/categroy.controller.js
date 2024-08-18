import AppDbContext from "../Db/AppDbContext.js";

export const getCategory = async (req, res) => {

    try {

        const db = await AppDbContext();

        const [result] = await db.query('SELECT * FROM categories where parent_cat_id = 0');
        if (result.length == 0) {

            return res.status(202).json({ status: 202, message: 'No Category Found' })
        }

        return res.status(200).json({ status: 200, message: 'Category Fetched', data: result })

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })

    }
}

export const getSubCategory = async (req, res) => {

    try {
        const { id } = req.params;

        const db = await AppDbContext();

        const [result] = await db.query('SELECT * FROM categories WHERE parent_cat_id =? AND id != ?',[id , id]);

        if (result.length == 0) {

            return res.status(202).json({ status: 202, message: 'No Sub Category Found' })
        }

        return res.status(200).json({ status: 200, message: 'Sub Category Fetched', data: result })

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })

    }
}

export const createCategory = async (req, res) => {


    try {

        const { name  } = req.body;

        const slug = name.trim().replace(/\s+/g, '-').toLowerCase();

        if (name == undefined ) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (name.length < 3) {

            return res.status(202).json({ status: 202, message: 'Category name should be atleast 3 characters long' })

        }
        const frontImage = req.files.frontImage[0].filename;

        if(frontImage == undefined){
            
            return res.status(202).json({ status: 202, message: 'Please Upload Image' })

        }

        const db = await AppDbContext();
        
        const date = new Date();



        const [categoryAlready] = await db.query('SELECT * FROM categories Where category_name = ?', [name]);

        if (categoryAlready.length > 0) {

            return res.status(409).json({ status: 409, message: "Category Already Exist " });

        }


        const [result] = await db.query('INSERT INTO categories (category_name  , category_slug ,created_at , updated_at ,front_image) VALUES (?,?,?,?,?)', [name, slug, date, date ,frontImage]);



        const data = await db.query('UPDATE categories SET parent_cat_id = ? WHERE id = ? ', [result.insertId, result.insertId]);


        return res.status(200).json({ status: 200, message: 'Category Created' })



    } catch (error) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }

}

export const createSubCategory = async (req, res) => {

    try {

        const { name, parent_cat_id } = req.body;

        if (name == undefined || parent_cat_id == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        const db = await AppDbContext();
        const slug = name.trim().replace(/\s+/g, '-').toLowerCase();
        const [alreadyExist] = await db.query("SELECT * FROM categories where category_name = ? AND parent_cat_id = ? ", [name, parent_cat_id]);

        if (alreadyExist.length > 0) {

            return res.status(409).json({ status: 409, message: "Sub Category is Already Existed in Parent Category " });

        }


        const [isParentCategoryExists] = await db.query('SELECT * FROM categories WHERE id = ? ', [parent_cat_id]);


        if (isParentCategoryExists.length == 0) {

            return res.status(202).json({ status: 202, message: 'Parent Category does not exists ' })

        }
        const date = new Date();

        const [created] = await db.query('INSERT INTO categories (category_name , category_slug , parent_cat_id , created_at , updated_at) VALUES (?,?,?,?,?)', [name, slug.toLowerCase(), isParentCategoryExists[0].id, date, date]);

        if (created.affectedRows > 0) {

            return res.status(200).json({ status: 200, message: 'Sub Category Created' })

        }
        else {

            return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: 'Failed to create Sub Category' })

        }

    } catch (error) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }
}


export const getAllCatAndSubCat = async (req, res) => {

    try {
        
        const db = await AppDbContext();
        const result = await buildCategoryTree(0,db);
        
        if(result.length == 0 || result == undefined){
        
            return res.status(202).json({ status: 202, message: 'No Categories Found' })
        
        }

        return res.status(200).json({ status: 200, message: 'Categories Fetched', result })
        
    } catch (error) {
        
        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }
}


const buildCategoryTree = async ( parent_cat_id = 0 ,db) => {

    

    const [categories] = await db.query('SELECT id,category_name ,parent_cat_id FROM categories WHERE parent_cat_id = ?' , [parent_cat_id]);
    if(categories.affectedRows == 0){
        return [];
    }
    // const result = await Promise.all(categories.map(async(category) => {
    //     const subCategories = await buildCategoryTree(category.id);
        
    //     //return {category , subCategories}
    // }))
    
    const data = await Promise.all( categories.map(async element => {
    
        const children = await buildCategoryTree(element.id , db);    
        // result.push([ ...result , {element , children}]);
        const category = {
            id : element.id,
            category_name : element.category_name,
            parent_cat_id : element.parent_cat_id,
            children : children
        }
        return { category};
    
    }));
    return data;

    
    
}