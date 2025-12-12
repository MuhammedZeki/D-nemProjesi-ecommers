import { useNavigate } from "react-router-dom";

const SearchItem = ({ product, searchTerm }) => {
  const navigate = useNavigate();

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="text-[#23a6f0] dark:text-[#6ea8ff] font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      onClick={() => navigate(`/productDetails/${product?.id}`)}
      className="
        flex flex-col cursor-pointer rounded-md 
        shadow-sm hover:shadow-lg bg-white dark:bg-[#2f354a]
      "
    >
      <img
        src={product?.img}
        className="h-[220px] w-full object-cover rounded-t-md"
      />

      <div className="flex flex-col gap-5 px-6 py-8 bg-white dark:bg-[#2f354a] rounded-b-md">
        <h5 className="font-bold leading-6 tracking-[0.1px] text-[#252B42] dark:text-white">
          {highlightText(product?.name, searchTerm)}
        </h5>

        <p className="font-bold leading-6 text-sm tracking-[0.2px] text-[#737373] dark:text-gray-300">
          {product?.department}
        </p>

        <div className="flex gap-2 items-center">
          <span className="font-bold text-lg text-[#BDBDBD] dark:text-gray-400 line-through">
            ${product?.oldPrice}
          </span>
          <span className="font-bold text-lg text-[#23856D] dark:text-[#52d4ae]">
            ${product?.newPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
