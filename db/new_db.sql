-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 14, 2023 at 12:17 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `new_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `tahun` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `quotes` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id`, `nama`, `tahun`, `instagram`, `quotes`, `gambar`, `url`) VALUES
(2, 'Putra Jeka', '2020', 'putra_kuncoro279', 'tetap semangat', '74aa11119e55678395d2a0f142d15dd9.png', 'http://192.168.100.118:5000/gambar/74aa11119e55678395d2a0f142d15dd9.png'),
(3, 'budi', '2020', 'budi201', 'tetap bekerja', 'fb2986d9dc63d376f24574581bc3f588.jpeg', 'http://192.168.43.197:5000/gambar/fb2986d9dc63d376f24574581bc3f588.jpeg'),
(4, 'budi', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683816949493-Hiro Hamada.jpeg', 'http://192.168.100.118/gambar/public/gambar/1683816949493-Hiro Hamada.jpeg'),
(5, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683817166612-Hiro Hamada.jpeg', 'http://192.168.100.118/public/gambar/1683817166612-Hiro Hamada.jpeg'),
(6, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683817300916-Hiro Hamada.jpeg', 'http://192.168.100.118/public/gambar/1683817300916-Hiro Hamada.jpeg'),
(7, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683817485970-Hiro Hamada.jpeg', 'http://192.168.100.118/public/gambar/1683817485970-Hiro Hamada.jpeg'),
(8, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683817648970-Hiro Hamada.jpeg', 'http://192.168.100.118/public/gambar/1683817648970-Hiro Hamada.jpeg'),
(9, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683818560066-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.100.118/gambar/public/gambar/1683818560066-Screenshot from 2023-04-15 17-30-30.png'),
(10, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683818633085-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.100.118/public/gambar/1683818633085-Screenshot from 2023-04-15 17-30-30.png'),
(11, 'asep', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683818722725-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.100.118/public/gambar/1683818722725-Screenshot from 2023-04-15 17-30-30.png'),
(12, 'cucuk', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683892149099-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.100.118:5000/public/gambar/1683892149099-Screenshot from 2023-04-15 17-30-30.png'),
(13, 'kalok', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683970286898-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.43.197:5000/public/gambar/1683970286898-Screenshot from 2023-04-15 17-30-30.png'),
(14, 'kaloka', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683972317430-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.43.197:5000/public/gambar/1683972317430-Screenshot from 2023-04-15 17-30-30.png'),
(15, 'kalokaks', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683986639846-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.43.197:5000/public/gambar/1683986639846-Screenshot from 2023-04-15 17-30-30.png'),
(16, 'kalokaks', '2020', 'budi201', 'tetap bekerja', 'public/gambar/1683986739371-Screenshot from 2023-04-15 17-30-30.png', 'http://192.168.43.197:5000/public/gambar/1683986739371-Screenshot from 2023-04-15 17-30-30.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'putra', 'putra123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
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
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
