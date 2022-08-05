CREATE DATABASE sesac ;

USE sesac;

CREATE TABLE member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
	email varchar(50),
    promotion varchar(2) DEFAULT 'x'
    );

ALTER TABLE member drop column age;   
ALTER TABLE member add column interest varchar(100);
ALTER TABLE member alter column gender set default '여';
 
DROP TABLE member;

