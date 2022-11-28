/** @format */

import "./App.scss";
import React from "react";
import Registration from "./Component/Registration/Registration";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Balanse from "./Component/Balanse/Balanse";
import { Routes, Route } from "react-router-dom";
import Authorisation from "./Component/Authorisation/Authorisation";
function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/author" element={<Authorisation/>} />
					<Route path="/register" element={<Registration/>} />
 				</Routes>
			</div>
			<div className='container'>
				<div className='center'>
					<Routes>
						<Route
							path=''
							element={<Menu />}
						/>
						<Route path='' element={<Header/>}/>
						<Route path="/balans" element={<Balanse/>} />
					</Routes>


				</div>
			</div>
		</>
	);
}

export default App;
