export const getGifts = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=GLJi92Gg4HJ7d9vEZxkcZYMWmfH44ALk`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    let gifs = data.map(({ id, title, images }) => {
      if (images?.downsized_medium.height < "300")
        return {
          id,
          title: title || "Not Title",
          url: images?.downsized_medium.url || 'espera',
        };
    });

    gifs = gifs.filter((g) => !!g);

    return gifs;
  } catch (error) {
    console.log(error);
  } 
};
