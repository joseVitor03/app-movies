import { SeriesType } from "@/types/CardsType";

const KEY = process.env.EXPO_PUBLIC_API_KEY;
const API = process.env.EXPO_PUBLIC_API_URL;

const topRatedSeries = async (countPage: number): Promise<SeriesType[]> => {
  try {
    const data = await fetch(
      `${API}tv/top_rated?language=pt-BR&page=${countPage}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${KEY}`,
        },
      },
    );
    const result = await data.json();
    return result.results;
  } catch (error) {
    console.error("Erro ao carregar filmes:", error);
    return [];
  }
};

export default topRatedSeries;
