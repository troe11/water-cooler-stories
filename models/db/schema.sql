create database watercoolerdb;

use watercoolerdb;

create table userinformation (
		user_id int not null auto_increment primary key,
        firstname varchar (50) not null,
        lastname varchar (80) not null,
        phone_1 int,
        email_1 varchar (30) not null,
        password1 varchar (50) not null,
        work_id1 int not null,
        work_id2 int,
		);

create table storytable (
		story_id int not null primary key auto_increment,
        user_id int not null,
		vent_story varchar (3000) not null,
		hot_count int NULL DEFAULT 0,
        cold_count int NULL DEFAULT 0,
        tag_id1 int not null,
        tag_id2 int,
        tag_id3 int
        );
        
create table workdescription (
		works_id int not null auto_increment primary key,
        work_description varchar (40) not null
        );
        
create table tags (
		tags_id int not null auto_increment primary key,
        tag_description varchar (40) not null
        );
