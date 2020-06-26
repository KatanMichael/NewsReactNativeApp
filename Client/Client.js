
const API_KEY = "46ba9445151f45feb3cf21b3bae4a63e"
class Client
{
    getAllHeadlines(country= "us" ,category = "technology")
    {
        let reqBody = "https://newsapi.org/v2/top-headlines?country="+country+"&apiKey="+API_KEY+"&category=" + category
        console.log(reqBody)
        return fetch(reqBody)
    }
    
    getAllHeadlinesAbout(keyWord = "Sport")
    {
       if(typeof keyWord !== "undefined")
       {
        let reqBody = "https://newsapi.org/v2/top-headlines?apiKey="+API_KEY+"&q=" + keyWord
        console.log(reqBody)
        return fetch(reqBody)
       }
    }

}

export default Client