import mysql2 from 'mysql2/promise';


async function AppDbContext(){
    try{
        
        const connectDb =  mysql2.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: 3306,
        });
        if(connectDb){
            // const result = connectDb.query('SELECT * FROM users');
            // console.log(result);
            console.log('Database connected');
            
            return connectDb;

        }else{

            console.log('Database not connected');

        }
    }catch(err){
        console.log(err);
    }
    
}


export default AppDbContext;