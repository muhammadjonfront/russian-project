/** @format */

import React from "react";
import "./Balanse.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo  from "..//..//Assets/Image/logo.svg"
import chart from "..//..//Assets/Image/Vector.svg";
import statik from "..//..//Assets/Image/card.svg";
import logo2 from "..//..//Assets/Image/chart.svg";
import logo3 from "..//..//Assets/Image/profile.svg";
import logo4 from "..//..//Assets/Image/information.svg";
function Balanse() {
	return (
		<>
			<div className='container'>
				<div className='center'>
					<div className='logo'>
						<div>
							<img
								src={logo}
								alt=''
								width={82}
								height={77}
							/>
						</div>
						<ul className='logo__menu'>
							<li className='logo__menu__item'>
								<NavLink
									className='logo__menu__item'
									to={"/"}>
									<img
										src={logo2}
										alt=''
										width={22}
										height={22}
									/>
								</NavLink>
							</li>
							<NavLink
								className='logo__menu__item'
								to={"/"}>
								<li className='logo__menu__item'>
									<img
										src={chart}
										alt=''
										width={22}
										height={22}
									/>
								</li>
							</NavLink>
							<li className='logo__menu__item'>
								<NavLink to={"/balans"}>
									<img
										src={statik}
										alt=''
										width={22}
										height={22}
									/>
								</NavLink>
							</li>
						</ul>
						<Link to='/author'>
							<img
								className='logo__profile'
								src={logo3}
								alt=''
								width={22}
								height={22}
							/>
						</Link>
					</div>

					<div>
						<h2>Баланс</h2>
						<div className='balans'>
							<div className='balans__hero'>
								<p className='balans__text'>
									Ваш текущий баланс: 1100 руб
								</p>
								<p className='balans__text balans__text__2'>
									Активных услуг: 56
								</p>
								<p className='balans__text'>
									Дата блокировки: 28.11.2022
								</p>
							</div>
							<div className='balans__block'>
								<img
									className='balans__block__img'
									src={logo4}
									alt=''
								/>
								<p className='balans__block__text'>
									Напоминаем, блокировка происходит если
									средств на вашем балансе не хватает на
									оплату
								</p>
							</div>
						</div>

						<div className='balans__form'>
							<h3 className='balans__form__title'>
								Пополнение баланса
							</h3>
							<form
								className='form'
								action=''>
								<input
									className='input input__1'
									type='text'
									name=''
									id=''
									placeholder='Номер карты'
								/>
								<div className='input__label'>
									<input
										className='input input__2'
										type='data'
										name=''
										id=''
										placeholder='Дата '
									/>
									<input
										className='input input__3'
										type='text'
										name=''
										id=''
										placeholder='CVV'
									/>
								</div>
								<input
									className='input input__4'
									type='text'
									placeholder='Держатель карты'
								/>
							</form>
						</div>
						<div className='balans__footer'>
							<span className='balans__footer__text'>
								Таблица с историей оплаты и статусами
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Balanse;
