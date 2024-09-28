import { IBook } from "@/types/book";
import { Button, Card, Rate } from "antd";
import Image from "next/image";

const BestBookCard = ({ book }: { book: IBook }) => {
  const { title, coverImageUrl, ratings, availability } = book;

  return (
    <Card
      className="group relative"
      hoverable
      cover={<Image alt={title} src={coverImageUrl} width={300} height={300} />}
    >
      <div className="text-center space-y-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="">
          <Rate allowHalf defaultValue={ratings.averageRating} disabled />
          <span>{`(${ratings.numberOfRatings})`}</span>
        </div>
        <p>
          {availability.isAvailable ? (
            <span className="text-green-500">Available</span>
          ) : (
            <span className="text-red-500">Not Available</span>
          )}
        </p>
      </div>

      <div
        style={{
          boxShadow: "inset 0 0 7px 0 #cdcdcd",
        }}
        className="absolute top-0 left-0 h-full w-full backdrop-blur-sm hidden group-hover:block"
      >
        <div className="w-full h-full text-center">
          {/* <AddToCardBtn /> */}
        </div>
        <div className="bg-[#f5f5f5] absolute bottom-0 left-0 border w-full h-11 flex items-center justify-center">
          <Button type="link" href={`/library/book/${book.id}`}>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BestBookCard;
