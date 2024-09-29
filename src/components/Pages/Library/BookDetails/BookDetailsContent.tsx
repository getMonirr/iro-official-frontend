import { Link } from "@/i18n/routing";
import { IBook } from "@/types/book";
import { Button, Flex, Rate } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { BiBookBookmark } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { PiBook } from "react-icons/pi";

const BookDetailsContent = ({ book }: { book: IBook }) => {
  const {
    title,
    description,
    author,
    ratings,
    availability,
    edition,
    publisher,
    ISBN,
    pages,
  } = book;

  return (
    <div className="flex-1 text-center lg:text-left">
      <div className="space-y-4">
        <Title level={2}>{title}</Title>
        <Text>{description}</Text>
        <div>
          <Text>Author:</Text>
          <Link href={`/book/author/${author}`}>
            <Button className="p-0" size="large" type="link">
              {author}
            </Button>
          </Link>
        </div>
        <div>
          <Text>Category:</Text>
          <Link href={`/book/category/${book.category}`}>
            <Button size="large" type="link">
              {book.category}
            </Button>
          </Link>
        </div>
        <div className="py-">
          <Rate disabled defaultValue={ratings.averageRating} />
          <Text className="ml-4">{ratings.numberOfRatings} Ratings</Text>
        </div>
        {availability.isAvailable ? (
          <div className="flex items-center gap-4">
            <Button
              shape="circle"
              icon={<FaCircleCheck size={20} color="green" />}
            />
            <Text>
              In Stock {availability.availableCopies} Copies Available
            </Text>
          </div>
        ) : (
          <div>
            <Text type="danger">Out of Stock</Text>
          </div>
        )}
        <Flex gap="large" wrap>
          {pages && (
            <div className="flex flex-col items-center gap-2">
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                Book Length
              </Text>
              <PiBook size={20} />
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                {pages} Pages
              </Text>
            </div>
          )}
          {edition && (
            <div className="flex flex-col items-center gap-2">
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                Edition
              </Text>
              <FaRegEdit size={20} />
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                {edition}
              </Text>
            </div>
          )}
          {publisher && (
            <div className="flex flex-col items-center gap-2">
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                Publication
              </Text>
              <BiBookBookmark size={20} />
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                {publisher}
              </Text>
            </div>
          )}
          {ISBN && (
            <div className="flex flex-col items-center gap-2">
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                ISBN
              </Text>
              <BsQrCode size={20} />
              <Text
                style={{
                  fontSize: "12px",
                }}
              >
                {ISBN}
              </Text>
            </div>
          )}
        </Flex>
      </div>
    </div>
  );
};

export default BookDetailsContent;
