
import React from "react";
import "./Registration.scss";
import logo from "..//..//Assets/Image/logo.svg";
function Registration() {
	return (
		<>
			<div className='regis'>
                <img src={logo} alt="" width={91} height={79} />
				<h2 className="regis__title">Регистрация</h2>
				<form
					className='regis__form'
					action=''>
					<input
						className='regis__input'
						type='text'
						name=''
						id=''
						placeholder='Имя пользователя'
					/>
					<input
						className='regis__input regis__input__2'
						type='email'
						name=''
						id=''
						placeholder='Электронная почта'
					/>
					<input
						className='regis__input'
						type='password'
						name=''
						id=''
						placeholder='Пароль'
					/>
					<button className='regis__btn'>Зарегистрироваться</button>
					<a className="regis__link" href='#link'>Авторизация</a>
				</form>
			</div>
		</>
	);
}

export default Registration;
