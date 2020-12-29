import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("value");
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <Exerc01 count={count} setCount={setCount} />
      </div>
      <SectionTitle title="Exercício #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
    </div>
  );
};

const Exerc01 = ({ count, setCount }) => (
  <div>
    <button className="btn" onClick={() => setCount(count + 1)}>
      +1
    </button>
    <button className="btn" onClick={() => setCount(count - 1)}>
      -1
    </button>
    <button
      className="btn"
      onClick={() => setCount((current) => current + 100)}
    >
      100
    </button>
    <button
      className="btn"
      onClick={() => setCount((current) => current - 100)}
    >
      -100
    </button>
  </div>
);

export default UseState;
