/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import "./Authorisation.scss";

import logo from "..//..//Assets/Image/logo.svg";
import profil from "..//..//Assets/Image/profil.svg";
import keys from "..//..//Assets/Image/key.svg";

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
					<div className='author__block'>
						<img
							className='img img__profil'
							src={profil}
							alt=''
							width={24}
							height={24}
						/>
						<input
							className='author__input author__input__2'
							type='email'
							name=''
							id=''
							placeholder='Электронная почта'
						/>
					</div>
					<div className='author__block'>
						<img className="img img__1"
							src={keys}
							alt=''
						/>
						<input
							className='author__input'
							type='password'
							name=''
							id=''
							placeholder='Пароль'
						/>
					</div>
					<NavLink to={"/"}>
						<button className='author__btn'>Войти</button>
					</NavLink>
					<NavLink
						to={"/register"}
						className='author__link'
						href='#link'>
						Регистрация
					</NavLink>
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
