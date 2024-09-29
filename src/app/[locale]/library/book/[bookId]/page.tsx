import BookDetailsContent from "@/components/Pages/Library/BookDetails/BookDetailsContent";
import BookSummary from "@/components/Pages/Library/BookDetails/BookSummary";
import CoverImage from "@/components/Pages/Library/BookDetails/CoverImage";
import RelatedBooks from "@/components/Pages/Library/BookDetails/RelatedBooks";
import RootContainer from "@/components/Shared/RootContainer";
import bookData from "@/db/book.json";
import { IBook } from "@/types/book";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const getBook = async (bookId: string): Promise<IBook | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = bookData.find((book) => book.id === bookId) as
        | IBook
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

const BookDetails = async ({
  params: { bookId, locale },
}: {
  params: { bookId: string; locale: string };
}) => {
  // it is important to set the locale for the request
  // because i18n
  unstable_setRequestLocale(locale);

  // get the book details
  const book = await getBook(bookId);

  if (!book) {
    return notFound();
  }

  const { coverImageUrl, edition, pdfPreview } = book;

  return (
    <RootContainer className="my-6">
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="flex lg:flex-row flex-col gap-8 flex-1">
          <div>
            <CoverImage
              image={coverImageUrl}
              pdfUrl={pdfPreview?.url as string}
              edition={edition}
            />
          </div>
          <div className="flex-1">
            <BookDetailsContent book={book} />
          </div>
        </div>
        <RelatedBooks />
      </div>
      <Suspense fallback={<div>Book Summary is loading</div>}>
        <BookSummary book={book} />
      </Suspense>
    </RootContainer>
  );
};

export default BookDetails;
