import "../index.css";

const Aside = ({ setGenderFilter }) => {
  return (
    <aside>
      <div>
        <button onClick={() => setGenderFilter("male")}>Male</button>
        <button onClick={() => setGenderFilter("female")}>Female</button>
        <button onClick={() => setGenderFilter("")}>All</button>
      </div>
    </aside>
  );
};

export default Aside;
