import { useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../store/actions/basketActions";
const BasketItems = () => {
  const { setBasketModal } = useContext(ModelOpenContext);
  const { items, total } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  return (
    <div className="absolute top-16 right-10 w-80 bg-[#FAFAFA] shadow-xl rounded-xl px-6 py-2 flex flex-col gap-4 z-50">
      <div className="w-full flex justify-end cursor-pointer">
        <MdOutlineCancel
          onClick={() => setBasketModal((p) => !p)}
          className="text-[#252B42] w-6 h-6 hover:text-[#595c69] transition duration-300"
        />
      </div>
      {items.length === 0 && (
        <div className="text-center text-[#252B42] font-semibold py-6">
          Sepetiniz boş
        </div>
      )}
      {items.length > 0 &&
        items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div>
              <img
                src={item?.img}
                className="w-35 h-25 object-cover rounded-sm"
              />
            </div>

            <div className="flex flex-col justify-between w-full">
              <h2 className="font-semibold text-lg text-[#252B42]">
                {item?.name}
              </h2>

              <div className="text-sm text-gray-700">
                <span>
                  Adet: <b>{item?.count}</b>
                </span>
                <br />
                <span>
                  Fiyat: <b>${item?.newPrice}</b>
                </span>
              </div>

              <button
                onClick={() => dispatch(deleteBasket(item?.id))}
                className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded-md w-16"
              >
                Sil
              </button>
            </div>
          </div>
        ))}

      <div className="border-t pt-3 text-right font-semibold text-[#252B42]">
        Toplam: ${total && total}
      </div>
    </div>
  );
};

export default BasketItems;
