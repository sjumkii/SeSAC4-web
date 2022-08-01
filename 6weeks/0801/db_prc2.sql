use sesac;

CREATE TABLE user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM( 'F', 'M', '' ) default '',
    birthday DATE not null,
    age int(3) not null default 0
);

insert into user (id, pw, name, gender, birthday, age) values ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33');
insert into user (id, pw, name, gender, birthday, age) values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
insert into user (id, pw, name, gender, birthday, age) values ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53');
insert into user (id, pw, name, gender, birthday, age) values ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39');
insert into user (id, pw, name, gender, birthday, age) values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', '47');
insert into user (id, pw, name, gender, birthday, age) values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22');
insert into user (id, pw, name, gender, birthday, age) values ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

SELECT * FROM user;

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name;
SELECT id, name from user WHERE birthday LIKE '19%';
SELECT * FROM user WHERE birthday LIKE '_____06%' ORDER BY birthday;
SELECT * FROM user WHERE gender = 'M' and birthday LIKE '197%';
SELECT id, pw, name from user ORDER BY name desc;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';


