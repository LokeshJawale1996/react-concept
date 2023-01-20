import axios from 'axios'
const searchImages = async (term) => {
   const response= await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
         authorization:'Client-ID gQONRqaPVvlXnHEAGmKOYnjb8deSd8okf9uQdCdZ5LA'
        },
        params:{
         query: term
        }
    });
    console.log(response);
    return response.data.results;
};



export default searchImages;

// Secret key
//nVMQhBAoKAYmNDLWAG3H--rin0CY4zrsXgBWEaDQez4