import Nav from "../Nav";
import { useState } from "react";

const Root = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Nav search={search} setSearch={setSearch} />
    </>
  );
};

export default Root;
