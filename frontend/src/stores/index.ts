import { create } from "zustand";
import { deleteFilm, fetchFilms } from "../services/fimService";
import { FilmData } from "../types/FilmData";

type FilmStore = {
  selectedItems: number[];
  toggleSelection: (FilmID: number) => void;
  toggleDelete: () => void;
  films: FilmData[];
  setFilms: () => void;
};

export const useFilmStore = create<FilmStore>((set, get) => ({
  films: [],

  setFilms: async () => {
    const data = await fetchFilms();
    set({ films: data });
  },

  selectedItems: [],

  toggleSelection: (FilmID: number) => {
    const { selectedItems } = get();

    const updatedSelectedItems = selectedItems.includes(FilmID)
      ? selectedItems.filter((id) => id !== FilmID)
      : [...selectedItems, FilmID];

    set({ selectedItems: updatedSelectedItems });

    console.log("Selected items:", updatedSelectedItems);
  },

  toggleDelete: async () => {
    const { selectedItems, setFilms } = get();
  
    if (selectedItems.length > 0) {
      console.log("Deleting items:", selectedItems);
  
      await deleteFilm(selectedItems); 
      set({ selectedItems: [] });
  
      await setFilms(); 
    } else {
      console.warn("No items selected for deletion.");
    }
  },




}));
