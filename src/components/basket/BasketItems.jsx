import { useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import { MdOutlineCancel } from "react-icons/md";
const BasketItems = () => {
  const { setBasketModal } = useContext(ModelOpenContext);

  return (
    <div className="absolute top-16 right-10 w-80 bg-[#FAFAFA] shadow-xl rounded-xl px-6 py-2 flex flex-col gap-4 z-50">
      <div className="w-full flex justify-end cursor-pointer">
        <MdOutlineCancel
          onClick={() => setBasketModal((p) => !p)}
          className="text-[#252B42] w-6 h-6 hover:text-[#595c69] transition duration-300"
        />
      </div>
      <div className="flex gap-3">
        <img
          src="/shop/item1.jpg"
          className="w-30 h-25 object-cover rounded-sm"
        />

        <div className="flex flex-col justify-between w-full">
          <h2 className="font-semibold text-lg text-[#252B42]">Cake</h2>

          <div className="text-sm text-gray-700">
            <span>
              Adet: <b>2</b>
            </span>
            <br />
            <span>
              Fiyat: <b>$14.99</b>
            </span>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded-md w-16">
            Sil
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <img
          src="/shop/item1.jpg"
          className="w-30 h-25 object-cover rounded-sm"
        />

        <div className="flex flex-col justify-between w-full">
          <h2 className="font-semibold text-lg text-[#252B42]">Cake</h2>

          <div className="text-sm text-gray-700">
            <span>
              Adet: <b>2</b>
            </span>
            <br />
            <span>
              Fiyat: <b>$14.99</b>
            </span>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded-md w-16">
            Sil
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <img
          src="/shop/item1.jpg"
          className="w-30 h-25 object-cover rounded-sm"
        />

        <div className="flex flex-col justify-between w-full">
          <h2 className="font-semibold text-lg text-[#252B42]">Cake</h2>

          <div className="text-sm text-gray-700">
            <span>
              Adet: <b>2</b>
            </span>
            <br />
            <span>
              Fiyat: <b>$14.99</b>
            </span>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded-md w-16">
            Sil
          </button>
        </div>
      </div>

      <div className="border-t pt-3 text-right font-semibold text-[#252B42]">
        Toplam: $29.98
      </div>
    </div>
  );
};

export default BasketItems;
