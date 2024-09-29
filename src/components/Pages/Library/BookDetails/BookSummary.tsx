"use client";
import SectionTitle from "@/components/Shared/SectionTitle";
import { IBook } from "@/types/book";
import { Avatar, Button, Table, Tabs } from "antd";
import { ColumnsType } from "antd/es/table";

const BookSummary = ({ book }: { book: IBook }) => {
  const { description, author } = book;

  const onChange = (key: string) => {
    console.log(key);
  };

  const summary = (
    <div className="p-8">
      <h2 className="font-bold text-lg">Book Summary</h2>
      <p>{description}</p>
    </div>
  );

  const authorInfo = (
    <div className="p-8 flex flex-col lg:flex-row gap-8">
      <div>
        <Avatar
          className="border-2 border-gray-200"
          style={{
            border: "2px solid #f0f0f0",
            borderRadius: "50%",
          }}
          shape="circle"
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <p className="py-2">
          <span className="font-bold">12k </span>followers
        </p>
        <Button
          style={{
            backgroundColor: "#0397D3",
          }}
          type="primary"
        >
          Follow
        </Button>
      </div>
      <div>
        <h2 className="font-bold text-lg">Author</h2>
        <p>{author}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          recusandae maiores quas sint, voluptatum doloribus eveniet hic placeat
          et, cumque impedit temporibus, laborum architecto quia! Earum quasi
          laboriosam adipisci aspernatur officia reprehenderit dolorum
          veritatis, suscipit est hic esse doloremque nisi sed impedit in quas
          eligendi, aliquid distinctio eveniet. Sint sed, magni similique porro
          illum hic aut, natus, blanditiis error harum impedit nisi ipsa
          obcaecati soluta aliquam itaque quo repellendus dignissimos facilis
          cupiditate quis? Sit, corporis dolore reiciendis harum cum tenetur
          natus mollitia atque temporibus magnam, deleniti optio quis nemo aut
          neque aliquam inventore blanditiis. Cumque ut repellat voluptatum,
          aperiam facere officiis non vero, minima et, dicta doloremque nam illo
          ullam. Architecto eligendi esse modi perspiciatis reiciendis ipsam
          corrupti ad cupiditate rerum odio aut eum explicabo velit impedit
          labore illo voluptates quo necessitatibus dolore animi dolor, tempora
          aperiam voluptate? Ex blanditiis commodi mollitia quod debitis ipsam
          aut aliquid laboriosam quibusdam alias quas est deleniti consequatur
          reprehenderit eaque nisi aliquam facilis qui odio accusamus nemo,
          vitae quae? Perspiciatis consequuntur veritatis velit obcaecati.
          Recusandae cum beatae cumque illo veritatis praesentium ratione quidem
          saepe voluptatem exercitationem minus distinctio mollitia aperiam, ut
          in inventore doloribus nihil commodi consequatur. Vitae dolorem
          aspernatur dolor nihil tenetur consequatur.
        </p>
      </div>
    </div>
  );

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  // Transpose the table by mapping columns to rows
  const transposedData = [
    {
      key: "name",
      label: "Name",
      data: data.map((item) => item.name),
    },
    {
      key: "age",
      label: "Age",
      data: data.map((item) => item.age),
    },
    {
      key: "address",
      label: "Address",
      data: data.map((item) => item.address),
    },
    {
      key: "tags",
      label: "Tags",
      data: data.map((item) => item.tags.join(", ")), // Convert array to string for display
    },
  ];

  // Create columns to map rows as columns
  const columns: ColumnsType<any> = [
    {
      title: "",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "",
      dataIndex: "data",
      key: "data",
    },
  ];

  const specificatoin = <Table columns={columns} dataSource={transposedData} />;

  const tabItems = [
    {
      label: "Summary",
      key: "1",
      children: summary,
    },
    {
      label: "Specification",
      key: "2",
      children: specificatoin,
    },
    {
      label: "Author",
      key: "3",
      children: authorInfo,
    },
  ];

  return (
    <div>
      <SectionTitle className="mb-4 md:text-xl">
        Book Specification & Summary
      </SectionTitle>
      <Tabs
        className="bg-white rounded-lg shadow-md"
        onChange={onChange}
        type="card"
        items={tabItems}
      />
    </div>
  );
};

export default BookSummary;
