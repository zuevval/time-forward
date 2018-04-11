-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 11 2018 г., 22:17
-- Версия сервера: 5.6.38
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `time-forward`
--

-- --------------------------------------------------------

--
-- Структура таблицы `ajax_example`
--

CREATE TABLE `ajax_example` (
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(1) NOT NULL,
  `wpm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ajax_example`
--

INSERT INTO `ajax_example` (`name`, `age`, `sex`, `wpm`) VALUES
('Frank', 45, 'm', 87),
('Jerry', 120, 'm', 20),
('Jill', 22, 'f', 72),
('Julie', 35, 'f', 90),
('Regis', 75, 'm', 44),
('Tracy', 27, 'f', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `login` text NOT NULL,
  `pass` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`login`, `pass`, `user_id`, `group_id`) VALUES
('zuev', 'qwerty', 1, 136322);

-- --------------------------------------------------------

--
-- Структура таблицы `user_data`
--

CREATE TABLE `user_data` (
  `n` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_data`
--

INSERT INTO `user_data` (`n`) VALUES
(92),
(92),
(92),
(92);

-- --------------------------------------------------------

--
-- Структура таблицы `usr_1_raw`
--

CREATE TABLE `usr_1_raw` (
  `day` int(11) NOT NULL,
  `event_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `usr_1_raw`
--

INSERT INTO `usr_1_raw` (`day`, `event_id`) VALUES
(0, '201'),
(0, '202');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `ajax_example`
--
ALTER TABLE `ajax_example`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
