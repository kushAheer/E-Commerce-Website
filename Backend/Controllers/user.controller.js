import AppDbContext from "../Db/AppDbContext.js";

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

        const {first, last , address , city , pincode , state , country , phone} = req.body;

        const {id} = req.user;

        if (first == undefined || last == undefined || address == undefined || city == undefined || pincode == undefined || state == undefined || country == undefined || phone == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if(phone.length !== 10){
            return res.status(202).json({ status: 202, message: 'Please Enter a valid Phone Number' })
        }
        if(pincode.length !== 6){
            return res.status(202).json({ status: 202, message: 'Please Enter a valid Pincode' })
        }
        const db = await AppDbContext();

        const date = new Date();

        await db.query('INSERT INTO user_profile (first_name , last_name , address , city , zipcode , state , country , phone , uid,created_at , updated_at , profile_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [first, last , address , city , pincode , state , country , phone , id , date , date , "active"]);

        return res.status(200).json({status: 200, message : "Profile Created Successfully"});

        
    } catch (error) {
        
        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});

    }

}


export const userAddress = async (req, res) => {
    try {
        const {id} = req.user;

        const db = await AppDbContext();

        const [profile] = await db.query('SELECT * FROM user_profile WHERE uid = ?',[id]);

        if(profile.length == 0){
            return res.status(404).json({status: 404 , message : "No Profile Found" ,profileData : []}, );
        }

        return res.status(200).json({status: 200 , profileData : profile});

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error" , errorMessage : error.message});
    }
}