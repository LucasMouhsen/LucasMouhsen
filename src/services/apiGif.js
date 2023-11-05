
import axios from "axios";
const api_key = '0MscRsk2QogUK8Dgq7mtSnGB0UFAmCgY';

async function giphyApi() {
    try {
        const urlRandom = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=monkey&rating=g`
        const response = await axios.get(urlRandom);
        const data = response.data.data.images.original; // Accede a la matriz de gifs en la respuesta
        const mp4Url = data.mp4.toString()
        return mp4Url 
    } catch (error) {
        console.error('Error:', error);
    }
}

export { giphyApi }