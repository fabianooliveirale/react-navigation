import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [numberEvenOdd, setNumberEvenOdd] = useState(1);
  const [evenOrOdd, setEvenOrOdd] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(() => {
    fatorial > 1000000 && (document.title = "eitaa!!");
  }, [fatorial]);

  useEffect(() => {
    const result = isEvenNumber(numberEvenOdd);
    setEvenOrOdd(result);
  }, [numberEvenOdd]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div>
        <span className="text">Fatorial:</span>
        <span className="text red">{fatorial}</span>
      </div>
      <input
        type="number"
        className="input"
        value={number}
        onChange={({ target: { value } }) => setNumber(value)}
      />
      <SectionTitle title="Exercício #02" />
      <div>
        <span className="text">Par ou impar: </span>
        <span className="text red">{evenOrOdd}</span>
      </div>
      <input
        type="number"
        className="input"
        value={numberEvenOdd}
        onChange={({ target: { value } }) => setNumberEvenOdd(value)}
      />
    </div>
  );
};

const isEvenNumber = (number) => {
  return number % 2 === 0 ? "par" : "ímpar";
};

const calcFatorial = (number) => {
  if (number < 0) return -1;
  if (number === 0) return 1;
  console.log(number);
  return calcFatorial(number - 1) * number;
};

export default UseEffect;
