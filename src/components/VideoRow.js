import { Hidden } from "@material-ui/core";
import React from "react";
import "./VideoRow.css";

const VideoRow = ({
	title,
	description,
	channelTitle,
	thumbnail,
	views,
	subs,
	timestamp,
}) => {
	return (
		<div className="VideoRow">
			<img src={thumbnail} alt={channelTitle} />

			<div className="videoRow__info">
				<h3 className="videoRow__title">{title}</h3>

				<p className="videoRow__channelTitle">{channelTitle}</p>

				<p className="videoRow__viewsAndTimestamp">
					{views} views • {timestamp}
				</p>

				<Hidden mdDown>
					<p className="videoRow__description">{description}</p>
				</Hidden>
			</div>
		</div>
	);
};

export default VideoRow;
