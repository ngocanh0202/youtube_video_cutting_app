import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from 'react-player/youtube'
import VideoCut from "./VideoC";
 

export default function Video(){
    const params = useParams(); // ID video
    const [timeStart, setTimeStart] = useState({ // set time start
        "Progress":0,
        "Time":"00:00:01",
    });
    const [timeEnd, setTimeEnd] = useState({ // set time end
        "Progress":0,
        "Time":"00:00:00",
    });
    // const [duration, setDuration] = useState({ // set duration of video cutting
    //     "Progress":0,
    //     "Time":"00:00:00",
    // });
    const [durationVideo, setDurationVideo] = useState({ // set duration of video time
        "Progress":0,
        "Time":"00:00:00",
    });
    const [timeCurrent, setTimeCurrent] = useState(); // set current time video played
    const [linkDownload, setLinkDownload] = useState(); // set link download after video has been cut
    const [loaddingVideo, setLoaddingVideo] = useState(false);
    const [error, setError] = useState({
        "errorSubmit": false,
        "errorCutting": false
    });
    const handleProgress = state => {
        setTimeCurrent(state.playedSeconds);
    };

    const handleDuration = duration => {
        setDurationVideo(duration)
    };
    function TakeTime(timeCurrent){
        let time = Math.floor(timeCurrent);
        let minute = Math.floor(time / 60);
        let hours = "00"
        let seconds = time % 60;

        minute = minute.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        if (minute >= 60) {
            hours = Math.floor(minute / 60);
            hours = hours.toString().padStart(2, '0');

            minute = minute % 60;
            minute = minute.toString().padStart(2, '0');
        } 
        return {
            "Progress":timeCurrent,
            "Time":`${hours}:${minute}:${seconds}`,
        }
    }
    
    const handleSelectStart = () => {
        const time = TakeTime(timeCurrent);
        setTimeStart(time);

    }
    const handleSelectEnd = () => {
        const time = TakeTime(timeCurrent);
        setTimeEnd(time);
    }
    const handleSelectAllTime = () => {
        const time = TakeTime(durationVideo);
        setTimeEnd(time);
    }

    const handleCuttingVideo = () => {
        const time = timeEnd.Progress - timeStart.Progress;
        if(time < 0){
            setError(err => {
                return {
                    ...err,
                    "errorSubmit": true
                }
            })
            return;
        }
        setError(err => {
            return {
                ...err,
                "errorSubmit": false
            }
        })
        const duration = TakeTime(time);
        console.log(duration);
        setLoaddingVideo(true);
        fetch("http://localhost:9000/cutYoutubeVideo",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "videoID": params.VideoID,
                    "startTime": timeStart.Time,
                    "duration": duration.Time // to do handle duration  
                }),
                
            })
            .then(res =>{
                if(!res.ok){
                    setError(data =>{
                        return {
                            ...data,
                            "errorCutting": true
                        }
                    });
                    throw new Error('Network response was not ok');
                }
                setError(data =>{
                    return {
                        ...data,
                        "errorCutting": false
                    }
                });
                return res.json();
            })
            .then(data => {
                console.log(data);
                setLinkDownload(data);
            })
            .catch(err => {
                console.error("Error downloading: "+err.message);
                
            })
            .finally(() => {
                setLoaddingVideo(false);
            })
    }

    return(
        <div className="video-content">
            <div className="video-content-back">
                <Link className="link-active" to="/">Back Home</Link>
            </div>
            <div className="video-content-information">
                <div className="video-content-video">
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${params.VideoID}`}
                        width="667.5px"
                        height="463px"
                        playing="true"
                        controls="true"
                        onProgress={handleProgress}
                        onDuration={handleDuration}
                    />
                   
                </div>
                <div className="video-content-cutting">
                    <input className="font-text-class btn-settime" type="text" value={timeStart.Time} onClick={handleSelectStart} id="time-start" placeholder="00:00" />
                    <input className="font-text-class btn-settime" type="text" value={timeEnd.Time} onClick={handleSelectEnd} id="time-end" placeholder="00:00" />
                    <button className="font-text-class btn-settime" onClick={handleSelectAllTime}>Use the entire time starting at Time Start.</button>
                    {timeStart.Progress > timeEnd.Progress ? 
                            <span className="inform-error">Time Start over Time End</span>
                        :
                            <input className="font-text-class btn-settime" type="submit" onClick={handleCuttingVideo} value="Start Cutting Video" />
                    }
                    {loaddingVideo && <span className="inform-loading">Loading...</span>}
                    {error.errorSubmit && <span className="inform-error">Time Start over Time End</span>}
                </div>
            </div>
            <div className="Video-content-cut">
                {error.errorCutting && <h1>Failed</h1>}
                {linkDownload && <VideoCut url={linkDownload.url}></VideoCut>}
            </div>
        </div>
    )
}