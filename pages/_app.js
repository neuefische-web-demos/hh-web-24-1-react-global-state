import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  const countSum = animals.reduce((acc, animal) => acc + animal.count, 0);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout dragonCount={dragonCount} countSum={countSum}>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
