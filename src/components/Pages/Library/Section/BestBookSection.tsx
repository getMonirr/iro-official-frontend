import bookData from "@/db/book.json";
import { Link } from "@/i18n/routing";
import { Button } from "antd";
import BestBookCard from "../Card/BestBookCard";

const BestBookSection = () => {
  const books = bookData;

  return (
    <>
      <div className="grid grid-cols-6 gap-12">
        {books.map((book) => (
          <Link key={book.id} href={`/library/book/${book.id}`}>
            <BestBookCard book={book} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href={`/library`}>
          <Button type="primary" size="large">
            View All Best Books
          </Button>
        </Link>
      </div>
    </>
  );
};

export default BestBookSection;
