-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2017 at 11:29 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` bigint(20) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `division` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL,
  `hired_date` datetime NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `marital_status` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `sub_division` varchar(255) NOT NULL,
  `suspend_date` datetime DEFAULT NULL,
  `loc_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `date_of_birth`, `division`, `email`, `first_name`, `gender`, `grade`, `hired_date`, `last_name`, `marital_status`, `nationality`, `phone`, `photo`, `status`, `sub_division`, `suspend_date`, `loc_id`) VALUES
(5, '1996-02-11 00:00:00', 'SE-Pro', 'aaa@bb.com', 'Mitrais', 'Male', 'SE-AP', '1997-02-04 00:00:00', 'Scrum', 'single', 'Indonesia', '+627890141321', NULL, 'Contract', 'SE', NULL, 2),
(6, '1996-02-11 00:00:00', 'SE-Pro', 'aaa@bb.com', 'Mitrais', 'Male', 'SE-AP', '1997-02-04 00:00:00', 'Godd', 'single', 'Indonesia', '+627890141321', NULL, 'Contract', 'SE', NULL, 2),
(7, '1996-02-11 00:00:00', 'SE-Pro', 'aaa@bb.com', 'Samsung', 'Male', 'SE-AP', '1997-02-04 00:00:00', 'Godd', 'single', 'Indonesia', '+627890141321', NULL, 'Contract', 'SE', NULL, 2),
(8, '1996-02-11 07:00:00', 'SE-Pro', 'aaa@bb.com', 'Iphone', 'Male', 'SE-AP', '1997-02-04 07:00:00', 'Godd', 'single', 'Indonesia', '+627890141321', NULL, 'Contract', 'SE', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` bigint(20) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `city`) VALUES
(1, 'Bandung'),
(2, 'Jakarta'),
(3, 'Yogyakarta'),
(4, 'Bali');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`),
  ADD KEY `FK731tmgoixb14mxbou4da711h6` (`loc_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `emp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK731tmgoixb14mxbou4da711h6` FOREIGN KEY (`loc_id`) REFERENCES `location` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
