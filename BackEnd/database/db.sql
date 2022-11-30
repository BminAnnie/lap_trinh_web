-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 04:17 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `issell` tinyint(1) NOT NULL,
  `microchip` varchar(255) NOT NULL,
  `informationMore` varchar(255) NOT NULL,
  `isVaccinated` tinyint(1) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `gender`, `price`, `birthday`, `issell`, `microchip`, `informationMore`, `isVaccinated`, `quantity`) VALUES
(1, 'dog1', 'boy5', 122, '12/3/1889', 1, 'mc5', 'nonono', 1, 121),
(2, 'dog2', 'boy2', 728121, '12/4/2020', 0, 'mc2', 'more2', 1, 2),
(3, 'dog3', 'girl1', 6456, '7/8/2022', 0, 'mc3', 'more3', 1, 3),
(4, 'dog4', 'girl4', 6734423, '6/3/2020', 0, 'mc4', 'more4', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `phone` int(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fullname`, `image`, `phone`, `address`, `role`) VALUES
(2, 'admin', '123', 'admin', '', 0, '', 1),
(18, 'pill', 'pill', 'pill', 'pill', 0, '', 2),
(19, 'adad', '1234', 'jsná', '', 0, '', 2),
(20, 'huhuhu', '123@hama', 'phuc pill', 'noimage', 1113, 'la', 2),
(23, 'bingchiling', '123456', 'bingchiling', '', 0, '', 1),
(24, 'jiji', '1234', 'jiji', '', 0, '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
