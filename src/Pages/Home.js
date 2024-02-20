import Search from "../Components/Search";
import fetchData from "../Services/API";
import { useEffect, useState } from "react";
import { ListVideos } from "../Components/ListVideo";

export default function Home() {
    const [q, setQuery] = useState();
    const [videos, setVideos] = useState([]);

    function HandleSearch(query) {
        setQuery(query);
    }

    function GetVideo(data,query) {
        setVideos(data);
        window.localStorage.setItem("Videos", data);
        window.localStorage.setItem("Search", query);
    }
    console.log(videos.length);

    useEffect(() => {
        if (q) {
            fetchData(q, GetVideo);
        }
    }, [q]);

    return (
        <>
            <div className="Header">
                <h1>Welcome to Youtube API APP: Cutting Video</h1>
                <Search HandleQuery={HandleSearch}/>
            </div>
            <div>
                {videos.length > 0 && <ListVideos videos={videos}/>}
            </div>
        </>
    );
}
