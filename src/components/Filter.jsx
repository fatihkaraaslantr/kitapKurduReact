import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //Form gönderildiğinde...
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    searchParams.set("search", text);
    setSearchParams(searchParams);
  };

  //Select alanında seçim yapıldığında..
  const handleChange = (e) => {
    const value = e.target.value;
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="d-flex justify-content-between mt-4">
        {/* select */}
        <select
          onChange={handleChange}
          defaultValue="sırala"
          className="form-select w-25"
        >
          <option disabled>sırala</option>
          <option>a-z</option>
          <option>z-a</option>
        </select>
        {/* form */}
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="kitap ismi giriniz!"
            className="form-control"
          />
          <button className="btn btn-primary px-4 ">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
