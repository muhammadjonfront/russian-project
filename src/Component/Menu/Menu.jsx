/** @format */

import React from "react";
import "./Menu.scss";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import pngwing from "..//..//Assets/Image/pngwing.svg";
import golc from "..//..//Assets/Image/golc.svg";
import coin from "..//..//Assets/Image/coin.svg";
import card from "..//..//Assets/Image/status.svg";
// import { Navlink } from "react-router-dom";

import "./Header.scss";
import logo  from "..//..//Assets/Image/logo.svg"
import chart from "..//..//Assets/Image/Vector.svg";
import statik from "..//..//Assets/Image/card.svg";
import logo2 from "..//..//Assets/Image/chart.svg";
import logo3 from "..//..//Assets/Image/profile.svg";

function Menu() {
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
						<h2 className='menu__title'>Панель управления</h2>
						<div className='menu'>
							<div className='menu__hero'>
								<ul className='menu__list'>
									<li className='menu__item'>
										<h3 className='menu__item__title'>
											Активных услуг
										</h3>
										<span className='menu__item__digit menu__item__digit--1'>
											56
										</span>
									</li>
									<li className='menu__item'>
										<h3 className='menu__item__title'>
											Активных услуг
										</h3>
										<span className='menu__item__digit menu__item__digit--2'>
											1.1 K
										</span>
									</li>
									<li className='menu__item'>
										<h3 className='menu__item__title'>
											Активных услуг
										</h3>
										<span className='menu__item__digit menu__item__digit--3'>
											10
										</span>
									</li>
									<li className='menu__item'>
										<h3 className='menu__item__title'>
											Активных услуг
										</h3>
										<span className='menu__item__digit menu__item__digit--4'>
											10
										</span>
									</li>
								</ul>
							</div>

							<div className='heading'>
								<ul className='heading__list'>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
									<li className='heading__item'>
										<h3 className='heading__item__title'>
											Название: CD-01
										</h3>
										<div className='heading__item__block'>
											<img
												className='heading__item__img'
												src={pngwing}
												alt=''
												width={59}
												height={64}
											/>
											<ul className='heading__item__list'>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={card}
														alt=''
														width={24}
														height={24}
													/>
													<span className='heading__item__text'>
														Статус:{" "}
														<span className='heading__item__work'>
															Работает
														</span>
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={golc}
														alt=''
														width={24}
														height={24}
													/>
													<span>
														Модерация: Пройдена
													</span>
												</li>
												<li className='heading__item__list--item'>
													<img
														className='heading__img'
														src={coin}
														alt=''
														width={24}
														height={24}
													/>
													<span>Цена: 250 р/мес</span>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
