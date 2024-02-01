-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: emp_mngmnt_system
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) DEFAULT NULL,
  `f_name` varchar(255) DEFAULT NULL,
  `l_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'abcdefg@gmail.com','thisara','dilshann'),(2,'iiiiue@gmail.com',NULL,NULL),(3,'thisaradilshanba@gmail.com',NULL,NULL),(4,'',NULL,NULL),(5,'thisaradilshanba@gmail.com',NULL,NULL),(6,'thisaraa@gmail.com',NULL,NULL),(7,'',NULL,NULL),(8,'aaa',NULL,NULL),(9,'',NULL,NULL),(10,'',NULL,NULL),(11,'',NULL,NULL),(12,'',NULL,NULL),(13,'',NULL,NULL),(14,'',NULL,NULL),(15,'',NULL,NULL),(16,'thisaradilshanba@gmail.com',NULL,NULL),(17,'aa',NULL,NULL),(18,'abcd@gmail.com','bb','bb'),(19,'A',NULL,NULL),(20,'v',NULL,NULL),(21,'',NULL,NULL),(22,'a','ax',NULL),(23,'b','b',NULL),(24,'c','c','c'),(25,'q','q','q'),(26,'q','q','q'),(27,'s','s','s'),(28,'s','s','s'),(29,'s','s','s'),(30,'s','s','s'),(31,'d','a','s'),(32,'abcdf@gmail.com','bb','ba'),(33,'thisaradilshanba@gmail.com','Batapola Acharige','Thisara'),(34,'thisaradilshanba@gmail.com','Batapola Acharige','Thisara'),(35,'thisaradilshanba@gmail.com','Batapola Acharige','nethmi'),(36,'thisaradilshanba@gmail.com','Batapola Acharige','Nethmi');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 11:34:28
