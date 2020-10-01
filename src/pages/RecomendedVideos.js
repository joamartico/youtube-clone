import React, { useEffect, useState } from "react";

import VideoCard from "../components/VideoCard";
import youtubeApi from "../youtubeApi";
import "./RecomendedVideos.css";

const RecomendedVideos = () => {
	const [videos, setVideos] = useState([]);

	const fetchData = async () => {
		const req = await youtubeApi.get("/search", {
				params: { q: "" }
			})
			.catch((err) => console.log("error: ", err))
			
		const res = await req.data;

		console.log(res.items)

		setVideos(res.items)
		// const res = await req.data;

		// console.log(res.items)

		// setVideos(res.items)
	};

	useEffect(() => {
		fetchData();
	}, []);



	return (
		<div className="RecomendedVideos">

			<div className="recomendedVideos__videos">
				{
					videos.map(({snippet}) => (
						<VideoCard 
						channelTitle={snippet.channelTitle}
						title={snippet.title}
						description={snippet.description}
						thumbnail={snippet.thumbnails.medium.url}
						timestamp="hace 2 meses"
						views="77,234"
						/>
						
					))
				}
			</div>
		</div>
	);
};

export default RecomendedVideos;
