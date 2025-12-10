import { useEffect, useState } from "react";
import AddNewAddress from "./AddNewAddress";
import { FaEdit, FaTrash, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  updateAddress,
  deleteAddress,
  selectAddress,
  setDefaultAddress,
  loadAddresses,
} from "../../store/actions/addressActions";

const AddressInformation = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  const dispatch = useDispatch();

  const { addresses, selectedIndex, defaultIndex } = useSelector(
    (state) => state.address
  );

  const handleAddAddress = (newAddress) => {
    dispatch(addAddress(newAddress));
    setShowForm(false);
  };

  const handleUpdateAddress = (updatedData) => {
    dispatch(updateAddress(editIndex, updatedData));
    setEditIndex(null);
    setEditData(null);
    setShowForm(false);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData(addresses[index]);
    setShowForm(true);
  };

  useEffect(() => {
    dispatch(loadAddresses());
  }, [dispatch]);

  return (
    <div className="border border-[#737373] p-4 rounded-md flex flex-col gap-2 font-montserrat">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-[#252b42] leading-6 tracking-[0.1px]">
          Teslimat Adresi
        </h2>
        <div className="text-[#737373]">
          <label htmlFor="check1" className="flex gap-2 cursor-pointer">
            <input type="checkbox" name="check1" id="check1" />
            Faturama Aynı Adrese Gönder
          </label>
        </div>
      </div>

      {!showForm ? (
        <div
          onClick={() => {
            setEditIndex(null);
            setEditData(null);
            setShowForm(true);
          }}
          className="h-40 border-2 border-dashed border-[#23a6f0] flex flex-col items-center justify-center cursor-pointer rounded-md gap-2"
        >
          <span className="text-4xl text-[#23a6f0] font-bold">+</span>
          <span className="text-[#252b42] font-medium">Yeni Adres Ekle</span>
        </div>
      ) : (
        <AddNewAddress
          addAddress={handleAddAddress}
          updateAddress={handleUpdateAddress}
          editData={editData}
          editIndex={editIndex}
          setShowForm={setShowForm}
        />
      )}

      {addresses.map((item, index) => (
        <div
          key={index}
          onClick={() => dispatch(selectAddress(index))}
          className={`border-2 p-3 rounded-md flex justify-between items-start cursor-pointer ${
            selectedIndex === index
              ? "border-[#24a5f0] bg-[#24a5f0]/10"
              : "border-[#737373]"
          } `}
        >
          <div className="cursor-pointer">
            <h4 className="font-bold text-[#252b42]">
              {item.name} {item.surname}
            </h4>
            <p className="text-sm text-[#737373]">{item.city}</p>
            <p className="text-sm text-[#737373]">{item.address}</p>

            {defaultIndex === index && (
              <span className="text-xs my-2 text-[#f0b000] font-bold flex items-center gap-2">
                <FaStar className="w-4 h-4" /> Varsayılan Adres
              </span>
            )}
          </div>

          <div className="flex gap-2 text-[#23a6f0]">
            <FaStar
              title="Varsayılan Yap"
              className={`cursor-pointer hover:scale-110 ${
                defaultIndex === index ? "text-[#f0b000]" : ""
              }`}
              onClick={() => dispatch(setDefaultAddress(index))}
            />

            <FaEdit
              title="Güncelle"
              className="cursor-pointer hover:scale-110"
              onClick={() => startEdit(index)}
            />

            <FaTrash
              title="Sil"
              className="cursor-pointer hover:scale-110 text-red-500"
              onClick={() => dispatch(deleteAddress(index))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressInformation;
