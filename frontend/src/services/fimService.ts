import { FilmData } from "../types/FilmData";

const API_BASE = "http://localhost/ScandiOriginal/backend/newBackend/productController.php";
export const fetchFilms = async (): Promise<FilmData[]> => {
  const response = await fetch(API_BASE);
  return response.json();
};

type SubmitFilmPayload = {
  sku: string;
  name: string;
  price: string;
  type: "Book" | "DVD" | "Furniture";
  // Вариативные атрибуты:
  weight?: string;     // Book
  size?: string;       // DVD
  height?: string;     // Furniture
  width?: string;
  length?: string;
};

export const submitFilm = async (formData: SubmitFilmPayload) => {
  await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return fetchFilms();
};

export const deleteFilm = async (ids: number[]) => {
  await fetch(API_BASE, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }), 
  });

  return fetchFilms();
};
