create table User(
  id                int           not null    AUTO_INCREMENT   primary key   		comment '主键Id',
  acount            varchar(50)   not null                                      comment '用户名',
  password          varchar(15)   not null                                      comment '密码',
  is_class_teacher  tinyint(1)    not null    default '0'                       comment '是否班主任',       
  remark            text          null                                          comment '备注',
  create_time       datetime      not null                                      comment '创建时间',
  update_time       datetime      not null                                      comment '更新时间',
  is_removed        tinyint(1)    not null    default '0'                       comment '删除标记'                 
)