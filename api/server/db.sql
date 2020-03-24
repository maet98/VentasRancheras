use RancherasDB;

create table routes
(
	id int auto_increment,
	user int null,
	createdAt timestamp default now() null,
	updatedAt timestamp default now() on update now() not null,
	constraint routes_pk
		primary key (id)
);

create table employees
(
    employeeId int                                   null,
    username   varchar(40)                           null,
    password   varchar(150)                          null,
    type       varchar(20)                           null,
    email      varchar(40)                           null,
    createdAt  timestamp default NOW() not null,
    updatedAt  timestamp default NOW() not null on update NOW(),
    constraint employees_pk
        primary key(email)
);

create table RancherasDB.tokens
(
    id_token                   varchar(150) not null primary key,
    realmId                    varchar(60)  null,
    access_token               varchar(150) null,
    refresh_token              varchar(50)  null,
    expires_in                 int          null,
    x_refresh_token_expires_in int          null,
    token_type                 varchar(20)  null,
    latency                    int          null,
    createdAt  timestamp default NOW() not null,
    updatedAt  timestamp default NOW() not null on update NOW()
);

create table stops
(
	id int auto_increment,
	client int null,
	priority int null,
	name varchar(30) null,
	longitude float null,
	latitude float null,
	constraint stops_pk
		primary key (id)
);

