// src/components/CardsContainer.jsx
import useEntries from "../hooks/useEntries";
import Card from "./Card";

export default function CardsContainer({ programType }) {
  const { entries, loading } = useEntries(programType);

  console.log(entries);

  if (loading) return <p className="text-white">Cargando...</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6  px-[9%]">
      {entries.map((entry) => (
        <Card
          key={entry.title}
          title={entry.title}
          imageUrl={entry.images["Poster Art"].url}
          description={entry.description}
          releaseYear={entry.releaseYear}
        />
      ))}
    </div>
  );
}
