/** @format */

import React from "react";
import "./Authorisation.scss";

import logo from "..//..//Assets/Image/logo.svg";

function Authorisation() {
	return (
		<>
			<div className='author'>
				<img
					src={logo}
					alt=''
					width={91}
					height={79}
				/>
				<h2 className='author__title'>Авторизация</h2>
				<form
					className='author__form'
					action=''>
					
					<input
						className='author__input author__input__2'
						type='email'
						name=''
						id=''
						placeholder='Электронная почта'
					/>
					<input
						className='author__input'
						type='password'
						name=''
						id=''
						placeholder='Пароль'
					/>
					<button className='author__btn'>Войти</button>
					<a
						className='author__link'
						href='#link'>
						Регистрация
					</a>
                    <a
						className='author__link'
						href='#link'>
						Сброс пароля
					</a>
				</form>
			</div>
		</>
	);
}

export default Authorisation;
