import { FilmData } from "../types/FilmData";

const API_BASE = "http://localhost/app/Connection";


export const fetchFilms = async (): Promise<FilmData[]> => {
  const response = await fetch(`${API_BASE}/Recive.php`);
  return response.json();
};


export const submitFilm = async (formData: {SKU: string; name: string; price: string; category: string;}) => {
  await fetch(`${API_BASE}/Submit.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return fetchFilms(); 
};


export const deleteFilm = async (numbers: number[]) => {
  await fetch(`${API_BASE}/Delete.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(numbers),
  });
  return fetchFilms(); 
};