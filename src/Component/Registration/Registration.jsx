/** @format */

import React from "react";
import "./Registration.scss";
import { NavLink } from "react-router-dom";
import logo from "..//..//Assets/Image/logo.svg";

import profil from "..//..//Assets/Image/profil.svg";
import keys from "..//..//Assets/Image/key.svg";
import sms from "..//..//Assets/Image/sms.svg"
function Registration() {
	return (
		<>
			<div className='regis'>
				<img
					src={logo}
					alt=''
					width={91}
					height={79}
				/>
				<h2 className='regis__title'>Регистрация</h2>
				<form
					className='regis__form'
					action=''>
					<div className='regis__block'>
						<img
							className='img__profil'
							src={profil}
							alt=''
							width={24}
							height={24}
						/>
						<input
							className='regis__input'
							type='text'
							name=''
							id=''
							placeholder='Имя пользователя'
						/>
					</div>
					<div className='regis__block'>
						<img className="img__sms" src={sms} alt="" />
						<input
							className='regis__input regis__input__2'
							type='email'
							name=''
							id=''
							placeholder='Электронная почта'
						/>
					</div>
					<div className='regis__block'>
						<img className="img__keys"
							src={keys}
							alt=''
						/>
						<input
							className='regis__input'
							type='password'
							name=''
							id=''
							placeholder='Пароль'
						/>
					</div>
					<div className="regis__link">
					<NavLink to={"/"}>
						<button className='regis__btn'>
							Зарегистрироваться
						</button>
					</NavLink>
					<NavLink
						to={"/author"}
						className='regis__link'
						href='#link'>
						Авторизация
					</NavLink>
					</div>
				</form>
			</div>
		</>
	);
}

export default Registration;
