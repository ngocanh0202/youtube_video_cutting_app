import InformationVideo from "./infomationVideo";
import { Link } from "react-router-dom";
export function ListVideos({videos}){
    function HandleRedirectionPage(video){
        window.localStorage.setItem("Video",video);
        console.log(video);
    }
    const listVideo = videos.map(video =>
        <Link onClick={() => HandleRedirectionPage(video)} key={video.id.videoId} style={{"textDecoration":"none"}} to={`/Watch/${video.id.videoId}`}>
            <InformationVideo 
                key={video.id.videoId}
                channelTitle={video.snippet.channelTitle} 
                title={video.snippet.title} 
                description={video.snippet.description} 
                ImageVideo={video.snippet.thumbnails.high.url}
                publishedAt={video.snippet.publishedAt}
            />
        </Link>   
    )
    return(
        <>
            {listVideo}
        </>
    );
}