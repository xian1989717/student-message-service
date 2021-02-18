create table User(
  id                int           not null    AUTO_INCREMENT   primary key   		comment '主键Id',
  account           varchar(50)   not null    UNIQUE                            comment '用户名',
  password          varchar(15)   not null                                      comment '密码',
  is_class_teacher  tinyint(1)    not null    default '0'                       comment '是否班主任',       
  remark            text          null                                          comment '备注',
  create_time       datetime      not null                                      comment '创建时间',
  update_time       datetime      not null                                      comment '更新时间',
  is_removed        tinyint(1)    not null    default '0'                       comment '删除标记'                 
)

create table Grade(
  id                int           not null    AUTO_INCREMENT    primary key     comment '主键Id',
  class_id          int           null                                          comment '班级关联Id',
  name              varchar(10)   not null                                      comment '年级',
  is_removed        tinyint(1)    not null    default '0'                       comment '删除标记'
)

create table Class(
  id                int           not null    AUTO_INCREMENT    primary key     comment '主键Id',
  student_id        int           not null                                      comment '学生Id',
  name              varchar(10)   not null                                      comment '班级',
  is_removed        tinyint(1)    not null                      default '0'     comment '删除标记'
)

create table Student(
  id                  int                     not null    AUTO_INCREMENT  primary key       comment '主键Id',
  name                varchar(10)             not null                                      comment '姓名',
  gender              enum('male','female')   not null                    default 'male'    comment '性别',
  birthday            date                    not null                                      comment '出生日期',
  nation_id           int                     not null                                      comment '民族关联Id',
  native_place        varchar(100)            not null                                      comment '籍贯',
  permanent_address   varchar(100)            not null                                      comment '户籍地址',
  live_adress         varchar(100)            not null                                      comment '居住地址',
  temporary_study     tinyint(1)              not null                    default '0'       comment '是否借读',
  sos_person          varchar(10)             not null                                      comment '紧急联络人',
  sos_person_phone    varchar(15)             not null                                      comment '紧急联络人电话',
  remark              text                    null                                          comment '备注',
  create_time         datetime                not null                                      comment '创建时间',
  update_time         datetime                not null                                      comment '更新时间',
  is_removed          tinyint(1)              not null                    default '0'       comment '删除标记'                                            
)

create table Nation(
  id                  int                     not null  AUTO_INCREMENT    primary key       comment '主键Id',
  name                varchar(10)             not null                                      comment '民族名称'
)

create table Subject(

)