import React from "react";
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
	ExploreOutlined,
	Home,
	NotificationsOutlined,
	SubscriptionsOutlined,
	VideoLibraryOutlined,
} from "@material-ui/icons";

const Footer = () => {
	const history = useHistory();
	return (
		<div className="Footer">
			<div className="footer__body">
				<IconButton
					onClick={history.push("/")}
					className="footer__iconButton"
				>
					<div className="footer__section">
						<Home className="footer__icon" />
						<p className="footer__title">Home</p>
					</div>
				</IconButton>

				<IconButton
					aria-label=""
					onClick={history.push("/")}
					className="footer__iconButton"
				>
					<div className="footer__section">
						<ExploreOutlined className="footer__icon" />
						<p className="footer__title">Explore</p>
					</div>
				</IconButton>

				<IconButton
					aria-label=""
					onClick={history.push("/")}
					className="footer__iconButton"
				>
					<div className="footer__section">
						<SubscriptionsOutlined className="footer__icon" />
						<p className="footer__title">Subscriptions</p>
					</div>
				</IconButton>

				<IconButton
					aria-label=""
					onClick={history.push("/")}
					className="footer__iconButton"
				>
					<div className="footer__section">
						<NotificationsOutlined className="footer__icon" />
						<p className="footer__title">Notifications</p>
					</div>
				</IconButton>

				<IconButton
					aria-label=""
					onClick={history.push("/")}
					className="footer__iconButton"
				>
					<div className="footer__section">
						<VideoLibraryOutlined className="footer__icon" />
						<p className="footer__title">Library</p>
					</div>
				</IconButton>
			</div>
		</div>
	);
};

export default Footer;
