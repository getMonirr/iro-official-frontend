import bookData from "@/db/book.json";
import { unstable_setRequestLocale } from "next-intl/server";

interface Book {
  id: string;
  title: string;
  // Add other properties as needed
}

const getBook = async (bookId: string): Promise<Book | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = bookData.find((book) => book.id === bookId) as
        | Book
        | undefined;
      resolve(book);
    }, 1000);
  });
};

// generate metadata
export async function generateMetadata({
  params,
}: {
  params: { bookId: string };
}) {
  const book = await getBook(params.bookId);

  return {
    title: book?.title,
    description: "Book Details Page",
  };
}

// generate static params
export async function generateStaticParams() {
  const books = bookData;

  return books.map((book) => ({
    bookId: book.id,
  }));
}

const BookDetails = ({
  params: { bookId, locale },
}: {
  params: { bookId: string; locale: string };
}) => {
  unstable_setRequestLocale(locale);

  return <div>single book details {bookId}</div>;
};

export default BookDetails;
