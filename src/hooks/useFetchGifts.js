import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // getGifts(category).then(img => setImages(img));
    /* getGifts(category).then(setImages) */ //como estoy mandando un solo argumento, entonces ya esta implícito tanto el argumento con la funcion setImagenes que lo tomará.

    getGifts(category).then((img) =>
      setState({
        data: img,
        loading: false,
      })
    );

    // async/await
    // const getGiftsAll = async () => {
    //   const gift = await getGifts(category);

    //   setImages(gift);

    // }

    // getGiftsAll();
  }, [category]);

  return state;
};
