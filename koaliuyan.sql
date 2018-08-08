/*
Navicat MySQL Data Transfer

Source Server         : 本地1
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : koaliuyan

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2018-05-23 16:45:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for msg
-- ----------------------------
DROP TABLE IF EXISTS `msg`;
CREATE TABLE `msg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `ads` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `url` varchar(3000) DEFAULT NULL,
  `sta` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg
-- ----------------------------
INSERT INTO `msg` VALUES ('1', '测试', '15973370670', '2018-05-17 10:45', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('2', '测试', '15973370670', '2018-05-17 10:53', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('3', '袁世豪 测试', '15973370670', '2018-05-17 10:55', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('4', '袁世豪 测试2', '15973370670', '2018-05-17 10:55', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('5', '测试2', '15973370670', '2018-05-17 10:56', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('6', '测试3', '15973370670', '2018-05-17 10:58', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('7', 'yuanshihao', '15973370670', '2018-05-17 15:49', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('8', 'yuan442177', '15973370670', '2018-05-17 15:51', '广东省广州市荔湾区', '58.62.30.21', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('9', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('10', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('11', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('12', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('13', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('14', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('15', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('16', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('17', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('18', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('19', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('20', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('21', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('22', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('23', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('24', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '已审核');
INSERT INTO `msg` VALUES ('25', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('26', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('27', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('28', '袁世豪 测试', '15973370670', '2018-05-23 11:11', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('29', '原始好测试', '15973370670', '2018-05-23 14:48', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('30', '原始好测试', '15973370670', '2018-05-23 14:48', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');
INSERT INTO `msg` VALUES ('31', '原始好测试', '15973370670', '2018-05-23 14:49', '广东省广州市', '58.62.28.229', 'http://127.0.0.1:3000/msg', '未审核');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `pass` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ysh', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('2', 'ysh1', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('3', 'ysh12', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('4', 'yuanshihao', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('5', 'yshysh', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('6', 'yyyyyy', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('7', '袁世豪', '202cb962ac59075b964b07152d234b70');
INSERT INTO `users` VALUES ('8', '111111', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `users` VALUES ('9', '测试', '202cb962ac59075b964b07152d234b70');

-- ----------------------------
-- Table structure for _mysql_session_store
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:5ed84xXCPsjd6nhQueK2LTVIZRDI_CHQ', '1527067630419', '{\"user\":\"ysh\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:9QUVTM9OqhXg6rPA2q7KzsAuOEwOkHe6', '1527139066488', '{\"user\":\"ysh\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:D9mhE9V1SLshbO-c2c8VNQjvGTMZ_49o', '1526784740441', '{\"user\":\"ysh\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:JDyrXppOsR07IACz8OKPJHp6bsC-UjcB', '1526637541246', '{\"user\":\"ysh\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:NeIeOQQ_1NqGrn6bq7U_GUPJwl9bzquz', '1526529672533', '{\"user\":\"ysh\",\"id\":1}');
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:XueWjh3-c8IIze6IRaAHGgwoYpHIxG8x', '1526628736334', '{\"user\":\"ysh\",\"id\":1}');
