import { useContext } from "react";
import { ModelOpenContext } from "../../context/ModelOpen";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../store/actions/basketActions";
import { useNavigate } from "react-router-dom";
const BasketItems = () => {
  const { setBasketModal } = useContext(ModelOpenContext);
  const { items } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <div
            onClick={() => navigate(`/productDetails/${item?.id}`)}
            key={i}
            className="flex gap-3 px-1 py-3 hover:bg-[#f1f1f1] transition duration-300 cursor-pointer font-montserrat"
          >
            <div>
              <img
                src={item?.img}
                className="w-40 h-25 object-cover rounded-sm"
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
                className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded-md w-16 cursor-pointer"
              >
                Sil
              </button>
            </div>
          </div>
        ))}

      <div className="border-t border-t-[#737373] pt-3 text-right font-semibold text-[#252B42] flex items-center font-montserrat justify-between">
        <button
          onClick={() => navigate("/order")}
          className="py-3 px-6 border rounded-md bg-[#c9c8c8] text-[#fafafa] cursor-pointer"
        >
          Sepete Git
        </button>
        <button
          onClick={() => navigate("/order")}
          className="py-3 px-1 border rounded-md bg-[#24a5f0] text-[#fafafa] cursor-pointer"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
};

export default BasketItems;
