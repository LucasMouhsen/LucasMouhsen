const api_key = '';

export default async function apiGif() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=monkey`
    );

    if (!response.ok) {
      throw new Error('Request failed with status: ' + response.status);
    }

    const data = await response.json();
    const mp4Url = data.data.images.original.url;
    return mp4Url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
