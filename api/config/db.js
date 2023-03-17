import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'db-db-1',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'Nimbus',
});

pool.getConnection((err, connexion) => {
  if (err) {
    console.error('error', err);
  }
  if (connexion) connexion.release();
  return;
});

export default pool;
