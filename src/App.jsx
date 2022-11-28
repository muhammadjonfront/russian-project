/** @format */

import "./App.scss";
import React from "react";
// import Authorisation from "./Component/Authorisation/Authorisation";
import Registration from "./Component/Registration/Registration";
import Header from "./Component/Header/Header";
import Menu from './Component/Menu/Menu';
// import Balanse from "./Component/Balanse/Balanse";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
	return (
		<>
			<div className='container'>
				<div className='center'>
					<Routes>
						<Route path="/" element={<Menu />}/>
						<Route path="/register" element={<Registration />}/>
					</Routes>
					{/* <Authorisation/> */}
					{/* <Registration/> */}
					{/* <Header /> */}
					{/* <Routes> */}


					{/* <Menu/> */}

					{/* <Balanse /> */}
				</div>
			</div>
		</>
	);
}

export default App;
