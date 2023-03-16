import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'testBen',
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
