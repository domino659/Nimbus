#!/bin/bash
project_path=`$1`
mysql_user=`$2`
mysql_password=`$3`
mysql_database=`$4`
log_file="/var/log/monitoring.log"

# Create backup tar gz file with database dump and wordpress files in two separate folders. The tar file is named with the current date and time and deleted after 10 days.


# Create backup folder if it doesn't exist
if [ ! -d "/var/www/backup" ]; then
  mkdir /var/www/backup
fi
echo "Backup folder created at $(date +%Y%m%d_%H%M%S)" >> $log_file


# Create backup file for the database
if [ mysqldump -u $mysql_user -p$mysql_password $mysql_database > db.sql 2>> $log_file ]; then
  echo "Backup file for the database created at $(date +%Y%m%d_%H%M%S)" >> $log_file
else
  echo "ERROR Backup file for the database not created at $(date +%Y%m%d_%H%M%S)" >> $log_file
fi


# Create backup file for the wordpress files 
tar -czf wordpress.tar.gz $project_path
echo "Backup file for the wordpress files created at $(date +%Y%m%d_%H%M%S)" >> $log_file

# Create backup file for the wordpress files and database with the current date and time
tar -czf /var/www/backup/wordpress_$(date +%Y%m%d_%H%M%S).tar.gz db.sql wordpress.tar.gz
echo "Backup file for the wordpress files and database created at $(date +%Y%m%d_%H%M%S)" >> $log_file

# Delete db.sql and wordpress.tar.gz files
rm db.sql
rm wordpress.tar.gz
echo "db.sql and wordpress.tar.gz files deleted at $(date +%Y%m%d_%H%M%S)" >> $log_file

# Delete backup files older than 10 days
find /var/www/backup/ -type f -mtime +10 -exec rm {} \;
echo "Backup files older than 10 days deleted at $(date +%Y%m%d_%H%M%S)" >> $log_file




