const KEY = "AIzaSyCz2IrJ1x-1uSZJmnR0J7qYdwAiVUOV7X8";
const fetchData = async (query, CallBackData) => {
    const results = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&maxResults=5&key=${KEY}`
    );
    console.log("Fetching data: ");
    const data = await results.json();
    CallBackData(data.items, query);
}
export default fetchData;