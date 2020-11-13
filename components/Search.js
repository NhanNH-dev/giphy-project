import { useState } from "react";
import { useRouter } from "next/router";
const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState( "what?");
  const [limit, setLimit] = useState(8);
  const clickSubmit = (e) => {
    e.preventDefault();
    if (value != "") {
      router.push(
        {
          pathname: "/",
          query: { value , limit},
        },
        () => {
          setValue("");
        }
      );
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const formSearchGif = () => (
    <form onSubmit={clickSubmit}>
      <div style={{ display: "flex" }} className="form-group">
        <input
          type="text"
          placeholder="What image do you want to search?"
          className="form-control"
          onChange={handleChange}
          value={value}
          required
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button type="submit" className="btn btn-primary">
          Fetch More
        </button>
      </div>
    </form>
  );

  return <>{formSearchGif()}</>;
};

export default Search;
