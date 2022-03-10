// Подключение модуля net
const net = require("net");

// Создание TCP-сервера
const server = net.createServer((stream) => {
	// Установка кодировки
	stream.setEncoding("utf-8");
	// Объявление обработчика событий
	stream.on("data", (data) => {
		// Вывод данных в консоль
		console.log(data);
	});
});

// Запуск сервера
server.listen(8080, "127.0.0.1");
