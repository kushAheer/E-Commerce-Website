import AppDbContext from "../Db/AppDbContext";

export const getCategory = async (req, res) => {

    try {

        const db = AppDbContext();

        const [result] = await db.query('SELECT * FROM categories');

        return res.status(200).json({ status: 200, message: 'Category Fetched', data: result })

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })

    }
}

export const createCategory = async (req, res) => {


    try {

        const { name, description, slug, subCategory } = req.body;



        if (name == undefined || description == undefined || slug == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (name.length < 3) {

            return res.status(202).json({ status: 202, message: 'Category name should be atleast 3 characters long' })

        }

        const db = AppDbContext();

        const [result] = await db.query('INSERT INTO categories (category_name , category_desc , category_slug) VALUES (?,?,?)', [name, description, slug]);

        if (subCategory == false) {

            await db.query('INSERT INTO categories (parent_cat_id) VALUES (?)', [result.insertId]);

        } else {

            const [[Category]] = await db.query('SELECT id FROM categories WHERE category_name = ?', [subCategory]);

            await db.query('INSERT INTO categories (parent_cat_id) VALUES (?)', [Category.id]);

        }
        return res.status(200).json({ status: 200, message: 'Category Created' })



    } catch (error) {
            
        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }

}