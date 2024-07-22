import mysql2 from 'mysql2/promise';

const appDbContext = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    
});