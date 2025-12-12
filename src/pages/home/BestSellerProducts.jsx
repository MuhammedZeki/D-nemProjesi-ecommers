import SellerItem from "../../components/bestSellers/SellerItem";
import useProducts from "../../hooks/useProducts";

const BestSellerProducts = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div className=" bg-[#FAFAFA] dark:bg-[#252B42]">
      <div className=" flex flex-col gap-4 lg:w-[75%] w-full mx-auto py-8 px-4  font-montserrat">
        <div className="py-3 border-b-2 border-[#ECECEC]">
          <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] text-center lg:text-start dark:text-[#fafafa]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.slice(12, 16).map((item, i) => (
            <SellerItem key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerProducts;
