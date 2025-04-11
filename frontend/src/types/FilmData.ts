export type FilmData = {
  id: number;
  sku: string;
  name: string;
  price: string;
  type: "Book" | "DVD" | "Furniture";
  attributes: {
    weight?: string;
    size?: string;
    height?: string;
    width?: string;
    length?: string;
  };
};
