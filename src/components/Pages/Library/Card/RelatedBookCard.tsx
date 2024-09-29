import { Card, Rate } from "antd";

const RelatedBookCard = () => {
  return (
    <Card hoverable className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-16 bg-gray-200 rounded-md"></div>
          <div>
            <h2 className="text-sm font-semibold">
              {"Book Title asdffffffffffffffffffffffffffffff"
                .slice(0, 20)
                .concat("...")}
            </h2>
            <p className="text-sm text-gray-500">Author Name</p>
            <div>
              <Rate
                style={{
                  fontSize: "12px",
                }}
                disabled
                defaultValue={4}
              />
              <span>(22)</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RelatedBookCard;
