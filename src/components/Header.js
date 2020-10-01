import { Avatar, Hidden, InputBase } from "@material-ui/core";
import {
	Apps,
	ArrowBack,
	ArrowBackIos,
	Close,
	Menu,
	Notifications,
	Search,
	SquareFoot,
	Tune,
	VideoCall,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Header.css";

const Header = ({ onlySearch }) => {
	const [searchQuery, setSearchQuery] = useState();

	
	const history = useHistory();

	return (
		<>
			{onlySearch ? (
				<div className="Header">
					<ArrowBack
						className="header__onlySearchIcon"
						onClick={() => history.push("/")}
					/>
					<InputBase
						type="text"
						autoFocus
						className="header__onlySearchInput"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								history.push(`/search/${searchQuery}`);
							}
						}}
						placeholder="Search YouTube"
					/>

					<Close className="header__onlySearchIcon"
					onClick={() => setSearchQuery("")}/>
					<Tune className="header__onlySearchIcon"/>

				</div>
			) : (
				<div className="Header">
					<div className="header__left">
						<Hidden mdDown>
							<Menu className="header__menu" />
						</Hidden>
						<Link to="/">
							<img
								className="header__logo"
								src="/logo.png"
								alt="youtube"
							/>
						</Link>
					</div>

					<div className="header__center">
						<input
							type="text"
							className="header__searchInput"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search"
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									history.push(`/search/${searchQuery}`);
								}
							}}
						/>

						<Link
							to={`/search/${searchQuery}`}
							className="header__searchIcon"
						>
							<Search />
						</Link>
					</div>

					<div className="header__right">
						<VideoCall className="header__icon" />
						<Apps className="header__icon" />
						<Notifications className="header__icon" />
						<Avatar src="" className="header__icon" />
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
