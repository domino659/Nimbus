import mariadb from 'mariadb';
export default function connect_db(){
    const pool = mariadb.createPool({
        host: '127.0.0.1',
        port: 3306,
        user:'testBen',
        password: 'password',
        database: 'Nimbus',
    })
    return pool.getConnection().then((res) => {return res});
}

