import { Hidden } from "@material-ui/core";
import { TuneOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelRow from "../components/ChannelRow";
import VideoRow from "../components/VideoRow";
import youtubeApi from "../youtubeApi";
import "./SearchResults.css";

const SearchResults = () => {
	const { searchQuery } = useParams();
	const [videos, setVideos] = useState([]);

	const fetchData = async () => {
		const req = await youtubeApi
			.get("/search", {
				params: { q: searchQuery },
			})
			.catch((err) => console.log(err));

		if (req) {
			const res = await req.data;

			console.log(res.items);

			setVideos(res.items);
		}
	};

	useEffect(() => {
		fetchData();
	}, [searchQuery]);

	return (
		<div className="SearchResults">
			<div className="searchResults__body">
				<Hidden mdDown>
					<div className="searchResults__filter">
						<TuneOutlined />
						<h2>FILTER</h2>
					</div>
					<hr />
				</Hidden>

				{/* <hr />
			<ChannelRow verified />
        <hr /> */}

				{videos.map(({ snippet }) => (
					<VideoRow
						channelTitle={snippet.channelTitle}
						title={snippet.title}
						description={snippet.description}
						thumbnail={snippet.thumbnails.medium.url}
						timestamp="hace 2 meses"
						views="77,234"
					/>
				))}
			</div>
		</div>
	);
};

export default SearchResults;
