import DetailSellerItem from "./DetailSellerItem";
import useProducts from "../../hooks/useProducts";

const DetailSellers = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" bg-[#FAFAFA] dark:bg-[#252b42]">
      <div className=" w-full px-10 lg:w-[75%] mx-auto mt-3 py-8 flex flex-col gap-12  font-montserrat">
        <div className="border-b border-b-[#ECECEC] py-4">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] dark:text-[#fafafa]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
          {data.slice(0, 10).map((item, i) => (
            <DetailSellerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSellers;
