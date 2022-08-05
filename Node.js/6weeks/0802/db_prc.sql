USE sesac;

CREATE TABLE signup (
	id varchar(15) not null primary key,
    pw varchar(15) not null,
    name varchar(20) not null,
    phone int(11),
    email varchar(30) not null,
	birthday date not null,
    gender ENUM( 'F', 'M', '' ) default '',
    adress varchar(50)
    );

CREATE TABLE product (
	pd_number int(10) not null primary key,
    pd_name varchar(30) not null,
    pd_price int not null,
    pd_stock int not null,
    pd_option varchar(30) not null
    );

CREATE TABLE request (
	od_number int not null primary key,
    od_id varchar(15) not null,
    od_count int not null,
    od_adress varchar(50) not null,
    od_message varchar(20),
    od_totalprice int not null
    );

CREATE TABLE delivery (
	de_number int not null primary key,
    de_id varchar(15) not null,
    de_adress varchar(50) not null,
    de_phone int(11),
    de_message varchar(20)
    );