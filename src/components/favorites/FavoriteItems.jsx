import React, { useContext } from "react";
import { deleteFav } from "../store/actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";
import { ModelOpenContext } from "../../context/ModelOpen";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FavoriteItems = () => {
  const { setFavModal } = useContext(ModelOpenContext);
  const { favorites } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="absolute top-16 right-10 w-80 bg-[#FAFAFA] shadow-xl rounded-xl px-6 py-2 flex flex-col gap-4 z-50">
      <div className="w-full flex justify-end cursor-pointer">
        <MdOutlineCancel
          onClick={() => setFavModal((p) => !p)}
          className="text-[#252B42] w-6 h-6 hover:text-[#595c69] transition duration-300"
        />
      </div>
      {favorites.length === 0 && (
        <div className="text-center text-[#252B42] font-semibold py-6">
          Sepetiniz boş
        </div>
      )}
      {favorites.length > 0 &&
        favorites.map((item, i) => (
          <div
            onClick={() => navigate(`/productDetails/${item?.id}`)}
            key={i}
            className="flex gap-3 cursor-pointer px-1 py-3 hover:bg-[#f1f1f1] transition duration-300"
          >
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
                  Fiyat: <b>${item?.newPrice}</b>
                </span>
              </div>

              <button
                onClick={() => dispatch(deleteFav(item?.id))}
                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white text-sm py-1 rounded-md w-16"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FavoriteItems;
