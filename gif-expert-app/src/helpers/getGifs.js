export const getGifs = async (category) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=1Xw1VUo3MskKCS25kJCYWnZAwUvVrAbJ&q=${encodeURI(
      category
    )}&limit=10`
  );
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
