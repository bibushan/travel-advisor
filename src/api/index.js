import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: sw.lng,
        bl_longitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "d25f3a4675mshaeda70862449d0dp1dcf74jsnb30ef761cc92",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
