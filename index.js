require('dotenv').config();
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)


async function getImage(query){
    const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=tpcZT20FiNlXIQI00DxNBo1mCVGPob15&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

   try {
    const response = await fetch(endpoint)
    const data = await response.json()
    const imageUrl = data.data[0]
    return imageUrl
    }
    catch (error){
    console.error("Error fetching image")
    throw error;
    }

}
console.log(getImage())