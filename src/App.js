import React from "react";
import Header from "./components/Header";
import RecomendedVideos from "./pages/RecomendedVideos";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import { Hidden } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import Footer from "./components/Footer";

function App() {
	const responseGoogle = (response) => {
		console.log(response);
	};

	return (
		<div className="App">
			<Router>
				<Route exact path="/login">
					<GoogleLogin
						clientId="956922473029-utrnjdnla00jskem5aphug1fosupf4lk.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				</Route>

				<Route exact path="/">
					<Header />
					<div className="app__page">
						<Hidden mdDown>
							<Sidebar />
						</Hidden>

						<RecomendedVideos />
					</div>
				</Route>

				<Route path="/search/:searchQuery">
					<Header onlySearch />
					<div className="app__page">
						<Hidden mdDown>
							<Sidebar />
						</Hidden>

						<SearchResults />
					</div>
				</Route>

				<Route exact path="/search/">
					<Header onlySearch />
					<div className="app__page">
						<Hidden mdDown>
							<Sidebar />
						</Hidden>

						<SearchResults />
					</div>
				</Route>

				<Hidden smUp>
					<Footer />
				</Hidden>
			</Router>
		</div>
	);
}

export default App;
