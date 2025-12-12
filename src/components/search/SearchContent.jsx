import { useMemo, useState } from "react";
import useProducts from "../../hooks/useProducts";
import SearchItem from "./SearchItem";
import SearchSkeleton from "./SearchSkeleton";

const SearchContent = () => {
  const { data, isLoading } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return data;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return data.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, data]);

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#3c435e] min-h-screen">
      <div className="w-full px-10 lg:w-[75%] mx-auto py-8 flex flex-col gap-3 font-montserrat">
        <h1 className="text-3xl font-bold mb-6 text-[#333] dark:text-white">
          Ürün Arama
        </h1>

        <div className="mb-8 p-4 bg-white dark:bg-[#2f354a] rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Arama yapın (örn: Cake, Latte)"
            value={searchTerm}
            onChange={handleSearchChange}
            className="
              w-full p-3 rounded-lg 
              border border-[#e0e0e0]
              focus:ring-[#23a6f0] focus:border-[#23a6f0]
              transition duration-300 
              bg-[#fafafa] text-[#333]
              dark:bg-[#3c435e] 
              dark:border-[#525a78]
              dark:text-white
              dark:placeholder-[#333]
            "
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <SearchSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-[#333] dark:text-white">
              {filteredProducts?.length} Sonuç Bulundu:
            </h2>

            {filteredProducts?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts?.map((product, i) => (
                  <SearchItem
                    key={i}
                    product={product}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-white dark:bg-[#2f354a] rounded-lg shadow-sm flex flex-col items-center justify-center">
                <p className="text-xl text-[#fb2c36] font-semibold">
                  "{searchTerm}" için hiçbir sonuç bulunamadı.
                </p>
                <p className="text-[#949292] dark:text-gray-300 mt-2">
                  Lütfen arama teriminizi kontrol edip tekrar deneyin.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchContent;
