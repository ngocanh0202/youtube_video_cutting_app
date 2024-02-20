# Youtube Video Cutting App
This is a web application named Youtube Video Cutting App that allows users to search for videos using the YouTube API, select a video, specify the start and end times for cutting, and then cuts the video on the server using ffmpeg. It utilizes ytdl-core to fetch videos from YouTube. Once the video is cut, it is uploaded to Cloudinary and a URL link is provided to the client for viewing and downloading.

## Features
- Search for videos using the YouTube API.
- Select a video and specify the start and end times for cutting.
- Cut the selected video on the server using ffmpeg.
- Upload the cut video to Cloudinary.
- Provide a URL link to the client for viewing and downloading the cut video.

## Technologies Used
- Node.js: Runtime environment for server-side JavaScript.
- Express.js: Web application framework for Node.js.
- React.js: JavaScript library for building user interfaces.
- Youtube Data API v3: API for fetching YouTube video data.
- ytdl-core: Node.js module for downloading YouTube videos.
- fluent-ffmpeg: JavaScript wrapper for ffmpeg command-line tool.
- Cloudinary: Cloud-based media management platform for storing and managing video files.

## How to use web
- Clone the repository (Client): `https://github.com/ngocanh0202/youtube_video_cutting_app.git` branch Front-end
- Download the repository (Server): `https://github.com/ngocanh0202/youtube_video_cutting_app.git`branch Back-end
- Run at Client with `npm start` and open your browser and navigate to http://localhost:3000 to access the web application.
- Run at Server with `node index.js` and open your browser and navigate to http://localhost:9000 to start the server

## Expectations about the project
- [ ] Login/Logout
- [x] Search video on youtube
- [x] Trim video
- [x] Can download video cut
- [ ] Save the video have been cut 
- [ ] Can choose the video quality to cut