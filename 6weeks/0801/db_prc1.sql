USE sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
    );
DESC user;
    
ALTER TABLE user drop column birthday;
ALTER TABLE user add column birthday date not null;

DROP TABLE user;
INSERT INTO user ( ID, name, birthday ) VALUES ('id3', '홍길동2', '2022-08-01');
INSERT INTO user ( ID, birthday ) VALUES ( 'id5', '2022-08-01' );
INSERT INTO user VALUES ( 'song', '송지수', '2022-08-01' );

SELECT * FROM user;
SELECT * FROM user WHERE name = '홍길동'; 
SELECT * FROM user WHERE name = '홍길동' ORDER BY ID DESC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT * FROM user LIMIT 2;
SELECT name, birthday FROM user;

/* BETWEEN a AND b */
 SELECT * FROM player WHERE height BETWEEN 160 AND 180;

/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR position = 'goalkeeper';

/* LIKE */
SELECT * FROM user WHERE name LIKE '_지수';
SELECT * FROM user WHERE name LIKE '김%';

/* upadate */
UPDATE user SET name = '홍길동2', birthday = '2022-07-31' WHERE ID != 'id2';
SELECT * FROM user;

/* upadate */
DELETE FROM user WHERE name = 'id2';

drop table user;


