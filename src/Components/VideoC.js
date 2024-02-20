import ReactPlayer from "react-player";

export default function VideoCut({url}){
    const downloadVideo = () => {

        const apiKey = '945964482746849';
        const apiSecret = '7bAkkX0bHbyqZeUzTBJLCeTGISU';
        const timestamp = Math.floor(Date.now() / 1000); 
        const signature = cloudinarySignature(apiKey, apiSecret, timestamp);

  
        const cloudinaryUrl = `${url}?api_key=${apiKey}&timestamp=${timestamp}&signature=${signature}`;

        window.open(cloudinaryUrl, '_blank');
    };

    const cloudinarySignature = (apiSecret, timestamp) => {
        const signature = 'timestamp=' + timestamp + apiSecret;
        return btoa(signature); // Base64 encode the signature
    };
    return (
        <>
            <ReactPlayer 
                url={url}
                width="667.5px"
                height="463px"
                playing="false"
                controls="true"
            />
            <button className="link-download" onClick={downloadVideo}>Link download video</button>
            <h1>&#8593;&#8593; Video has been cut </h1>
            
        </>
        
    )
}