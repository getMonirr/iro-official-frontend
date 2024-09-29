import BookDetailsContent from "@/components/Pages/Library/BookDetails/BookDetailsContent";
import CoverImage from "@/components/Pages/Library/BookDetails/CoverImage";
import RelatedBooks from "@/components/Pages/Library/BookDetails/RelatedBooks";
import RootContainer from "@/components/Shared/RootContainer";
import bookData from "@/db/book.json";
import { IBook } from "@/types/book";
import LoadingImage from "antd/es/skeleton/Image";
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
            <Suspense
              fallback={
                <div className="border border-gray-400 py-4 px-8 cursor-pointer ">
                  <LoadingImage
                    active
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                  />
                </div>
              }
            >
              <CoverImage
                image={coverImageUrl}
                pdfUrl={pdfPreview?.url as string}
                edition={edition}
              />
            </Suspense>
          </div>
          <div className="flex-1">
            <BookDetailsContent book={book} />
          </div>
        </div>
        <RelatedBooks />
      </div>
    </RootContainer>
  );
};

export default BookDetails;
