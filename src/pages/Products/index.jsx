import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  //params
  const [searchParams] = useSearchParams();
  //state
  const [books, setBooks] = useState([]);
  //useEffect
  useEffect(() => {
    //url parametre
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchParams]);

  return (
    <div className="container my-5">
      {/* results */}
      {books.length === 0 ? (
        <h3>Kitap Bulunamdı!!</h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
      )}
      {/* filter */}
      <Filter />
      {/* cards */}

      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
