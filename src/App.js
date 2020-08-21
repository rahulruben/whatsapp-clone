import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
	const [{ user }, dispatch] = useStateValue(null);

	return (
		<div className="app">
			<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
			{
				!user ? (
					<Login />
				) : (
						<div className="app__body">
							<Router>
								<Sidebar />
								<Switch>
									<Route path="/rooms/:roomId">
										<Chat />
									</Route>
									<Route path="/">
										{/* <Chat /> */}
									</Route>
								</Switch>
							</Router>
						</div>
					)
			}
		</div>
	);
}

export default App;
