import RelatedBookCard from "../Card/RelatedBookCard";

const RelatedBooks = () => {
  return (
    <div className="bg-slate-100 p-2">
      <h2 className="text-xl font-semibold mb-4">Related Books</h2>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <RelatedBookCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;
