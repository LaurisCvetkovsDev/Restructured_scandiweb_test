import { useRef, useState } from "react";
import { submitFilm } from "../services/fimService";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const skuRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !skuRef.current?.value ||
      !nameRef.current?.value ||
      !priceRef.current?.value ||
      !type
    ) {
      toast.error("Please, submit required data", {
        style: {
          borderRadius: "0px",
          border: "4px solid black",
          background: "#fff",
          color: "#333",
          boxShadow: "0 20px 80px rgba(0, 0, 0, 0.1)",
        },
      });
      return;
    }

    await submitFilm({
      SKU: skuRef.current.value,
      name: nameRef.current.value,
      price: priceRef.current.value,
      category: type,
    });

    nameRef.current.value = "";
    priceRef.current.value = "";
    setType("");
    skuRef.current.value = "";
  };

  return (
    <section className="showcase padding">
      <Toaster position="bottom-center" reverseOrder={false} />
      <section className="nes-container with-title p-4">
        <h3 className="title">Form</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-3">
            <label className="form-label">SKU</label>
            <input ref={skuRef} type="text" className="nes-input" />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input ref={nameRef} type="text" className="nes-input" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input ref={priceRef} type="number" className="nes-input" />
          </div>
          <div>
            <label className="form-label">Category</label>
            <select
              className="nes-input"
              onChange={(e) => {
                setType(e.target.value);
                console.log(type);
              }}
            >
              <option value="">Select type </option>
              <option value="DVD">DVD </option>
              <option value="Book">Book </option>
              <option value="Furniture">Furniture </option>
            </select>
          </div>
          {type === "Book" && (
            <div className="mb-4 padding">
              <label className="form-label">Weight (KG)</label>
              <input type="number" className="nes-input" />
            </div>
          )}

          {type === "DVD" && (
            <div className="mb-4 padding">
              <label className="form-label">Size (MB)</label>{" "}
              <input type="number" className="nes-input" />
            </div>
          )}

          {type === "Furniture" && (
            <div className="mb-4 padding">
              <label className="form-label">Height (CM)</label>
              <input type="number" className="nes-input" />
              <label className="form-label">Width (CM)</label>
              <input type="number" className="nes-input" />
              <label className="form-label">Length (CM)</label>
              <input type="number" className="nes-input" />
            </div>
          )}
          <p></p>
        </form>
      </section>
    </section>
  );
};

export default Form;
