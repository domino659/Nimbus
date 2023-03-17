import pool from '../config/db.js';
import { exec } from 'child_process';

export function getSizeTables(req, res) {
    const { TABLE_SCHEMA } = req.query;

    if (!TABLE_SCHEMA || !Array.isArray(TABLE_SCHEMA)) {
        return res.status(400).json({ error: 'Le paramètre TABLE_SCHEMA doit être un tableau de noms de tables.' });
    }

    try {
        pool
            .query(
                `SELECT TABLE_NAME, CONCAT(ROUND(((DATA_LENGTH + INDEX_LENGTH - DATA_FREE) / 1024 / 1024), 2), 'Mo') AS TailleMo FROM information_schema.TABLES WHERE TABLE_SCHEMA IN (${TABLE_SCHEMA.map(name => `'${name}'`).join(',')})`
            )
            .then((result) => {
                res.status(202).json({
                    result
                });
            });
    } catch (e) {
        res.status(400).json({
            status: 'Failed',
            message: 'Request failed',
        });
    }
}

export function getBackUp(req, res) {
    const projectPath = req.query.project_path;
    const mysqlUser = req.query.mysql_user;
    const mysqlPassword = req.query.mysql_password;
    const mysqlDatabase = req.query.mysql_database;


    const command = `/bin/bash ../scripts/backup.sh "${projectPath}" "${mysqlUser}" "${mysqlPassword}" "${mysqlDatabase}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return res.status(500).send('An error occurred');
        }
    
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return res.status(500).send('An error occurred');
        }
    
        console.log(`Backup completed: ${stdout}`);
        return res.status(200).send('Backup completed');
      });
  
}