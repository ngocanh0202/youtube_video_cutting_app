const ytdl = require('ytdl-core');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'dfytbqcny', 
  api_key: '945964482746849', 
  api_secret: '7bAkkX0bHbyqZeUzTBJLCeTGISU' 
});


const CutVideoYoutube = (req, res) => {
    const { videoID, startTime, duration } = req.body;
    try {
        const videoStream = ytdl(`https://www.youtube.com/watch?v=${videoID}`, { quality: 'highestaudio' });
        ffmpeg(videoStream)
            .setStartTime(startTime)
            .setDuration(duration)
            .outputOptions([
                '-c:v', 'copy', 
                '-c:a', 'copy' 
            ])
            .format("mp4")
            .on('end', function () {
                console.log('Video cutting completed');

                cloudinary.uploader.upload(`${videoID}.mp4`, { resource_type: "video" }, function(error, result) { 
                    if (error) {
                        console.error('Error uploading video to Cloudinary:', error);
                        res.status(500).json({ error: 'Error uploading video to Cloudinary' });
                    } else {
                        console.log('Video uploaded to Cloudinary:', result);
                        res.status(200).send( JSON.stringify({
                            "url": result.url,
                            "secure_url": result.secure_url,
                            "playback_url": result.playback_url,
                        }));
                    }
                });

            })
            .on('error', function (err) {
                console.error('Error:', err.message);
                res.status(500).json({ error: 'Error cutting video' });
            })
            .save(`${videoID}.mp4`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error processing video' });
    }
}

const TakeAudio = (req, res) => {
    const { videoID, startTime, duration } = req.body;
    try {
        const videoStream = ytdl(`https://www.youtube.com/watch?v=${videoID}`, { quality: 'highestaudio' });
        ffmpeg(videoStream)
            .setStartTime(startTime)
            .setDuration(duration)
            .outputOptions([
                '-c:v', 'copy', 
                '-c:a', 'copy' 
            ])
            .format("mp3")
            .on('end', function () {
                console.log('Audio cutting completed');

                cloudinary.uploader.upload(`${videoID}.mp3`, { resource_type: "video" }, function(error, result) { 
                    if (error) {
                        console.error('Error uploading audio to Cloudinary:', error);
                        res.status(500).json({ error: 'Error uploading audio to Cloudinary' });
                    } else {
                        console.log('Audio uploaded to Cloudinary:', result);
                        res.status(200).send( JSON.stringify({
                            "url": result.url,
                            "secure_url": result.secure_url,
                            "playback_url": result.playback_url,
                        }));
                    }
                });

            })
            .on('error', function (err) {
                console.error('Error:', err.message);
                res.status(500).json({ error: 'Error cutting audio' });
            })
            .save(`${videoID}.mp3`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error processing audio' });
    }
}

module.exports = CutVideoYoutube, TakeAudio;