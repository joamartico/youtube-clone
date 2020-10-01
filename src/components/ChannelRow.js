import { Avatar } from "@material-ui/core";
import {
	CheckCircle,
	VerifiedUser,
	VerifiedUserRounded,
	VerifiedUserSharp,
	VerifiedUserTwoTone,
} from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

const ChannelRow = ({
	image,
	channel,
	subs,
	nOfVideos,
	description,
	verified,
}) => {
	return (
		<div className="ChannelRow">
			<Avatar className="channelRow__image" src={image} alt={channel} />

			<div className="channelRow__text">
				<h4>
					{channel} {verified && <CheckCircle />}
				</h4>

				<p>
					{subs} subscribers • {nOfVideos} videos
				</p>

				<p>{description}</p>
			</div>
		</div>
	);
};

export default ChannelRow;
