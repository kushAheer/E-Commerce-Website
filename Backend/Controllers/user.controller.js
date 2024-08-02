export const getAllUsersRequest = async (req, res) => {
    try {
        
        const db = await AppDbContext();
        
        const [[users]] = await db.query('SELECT name , email , roles FROM users');

        if(users.length == 0){

            return res.status(404).json({status : 404 , message : "No Data Found"});

        }
        
        return res.status(200).json({status: 200, usersData : users});

        
    } catch (error) {

        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}


export const createUserProfileRequest = async (req, res) => {
    
    try {

        const {first, last , addres , city , pincode , state , country , phone} = req.body;

        const {id} = req.user;

        if (first == undefined || last == undefined || addres == undefined || city == undefined || pincode == undefined || state == undefined || country == undefined || phone == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }

        const db = await AppDbContext();

        const date = new Date();

        await db.query('INSERT INTO user_profile (first_name , last_name , address , city , pincode , state , country , phone , uid,created_at , updated_at , profile_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [first, last , addres , city , pincode , state , country , phone , id , date , date , "active"]);


        
    } catch (error) {
        
        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }

}