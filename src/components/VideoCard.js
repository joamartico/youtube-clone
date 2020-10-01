import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";

const VideoCard = ({
	thumbnail,
	title,
	views,
	timestamp,
	channelTitle,
	channelImage,
}) => {
	return (
		<div className="VideoCard">
			<img
				className="videoCard__image"
				src={thumbnail}
				alt={channelTitle}
			/>

			<div className="videoCard__top">
				<Avatar
					className="videoCard__avatar"
					src={channelImage}
					alt={channelTitle}
				/>

				<h4>{title}</h4>
			</div>

			<div className="videoCard__text">
				<p className="videoCard__channelTitle">{channelTitle}</p>
				<p>
					{views} views • {timestamp}
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
