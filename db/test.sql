DROP DATABASE IF EXISTS final_test;
CREATE DATABASE IF NOT EXISTS final_test;

use final_test;

create table users(
  id int(11) primary key auto_increment,
  name varchar(40) not null,
  email varchar(40) not null unique,
  age int(3) not null,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

INSERT INTO users(name, email, age) 
VALUES 
('John Smith', 'john.smith@example.com', 25), 
('Jane Doe', 'jane.doe@example.com', 30), 
('Michael Johnson', 'michael.johnson@example.com', 20), 
('Emily Davis', 'emily.davis@example.com', 27), 
('James Brown', 'james.brown@example.com', 22), 
('Olivia Garcia', 'olivia.garcia@example.com', 29), 
('Ethan Lee', 'ethan.lee@example.com', 31), 
('Sophia Wilson', 'sophia.wilson@example.com', 26), 
('Jacob Martinez', 'jacob.martinez@example.com', 24), 
('Isabella Thompson', 'isabella.thompson@example.com', 28);