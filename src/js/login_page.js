// Вызов функции при нажатии кнопки "Войти" и перенаправление пользователя на его личную страничку
function login_func(){
	var login=document.getElementById('login').value,		// Логин, введенныей в форме на index.html
		password=document.getElementById('password').value, // Пароль
		ID = get_user_ID(login, password);
	if (ID != false){
		redirect_to_input_page(ID); // Перенаправляем пользователя на его личную страничку
	}
	else {
		location.reload(); // Обновляем страницу
	}
}
