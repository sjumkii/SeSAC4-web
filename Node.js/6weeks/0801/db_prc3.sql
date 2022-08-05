use sesac;

CREATE TABLE signup(
	id varchar(15) not null primary key,
    pw varchar(15) not null,
    name varchar(15) not null,
    phone int(11),
    email varchar(30) not null
);

DROP table signup;

SELECT * FROM signup;
