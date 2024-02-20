
export default function InformationVideo({channelTitle,title, description,ImageVideo, publishedAt}){
    function HandlePublishedAt(){
        const publishedAtString = "2024-02-09T22:17:29Z";


        const publishedAtDate = new Date(publishedAtString);

        const currentDate = new Date();

        const differenceInTime = currentDate.getTime() - publishedAtDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays;
    }
    return (
        <div className="Content">
            <div className="content-image">
                 <img 
                    src={ImageVideo} 
                    width="336px" 
                    height="188px" 
                    alt="Thumbnail of the video" 
                    />
            </div>
            <div className="content-information">
                <p>Channel: {channelTitle}</p>
                <p>Title: {title}</p>
                <p>published At: {HandlePublishedAt()} days</p>
                <div className="content-information-Description">
                    Description: {description}
                </div>              
            </div>
        </div>
    );
}