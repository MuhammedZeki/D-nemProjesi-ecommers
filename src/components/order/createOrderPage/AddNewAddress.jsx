import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialState = {
  name: "",
  surname: "",
  city: "",
  address: "",
};

const AddNewAddress = ({
  addAddress,
  updateAddress,
  editData,
  editIndex,
  setShowForm,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    values: initialState,
  });

  useEffect(() => {
    if (editData) {
      reset(editData);
    }
  }, [editData, reset]);

  const onSubmit = (data) => {
    if (editIndex !== null) {
      updateAddress(data);
    } else {
      addAddress(data);
    }
    reset();
  };

  return (
    <div className="border border-[#737373] p-6 rounded-md flex flex-col gap-4 bg-[#fafafa] dark:bg-[#252b42]">
      <h3 className="text-xl font-bold text-[#252b42] dark:text-[#e6e6e6]">
        {editIndex !== null ? "Adresi Güncelle" : "Yeni Adres Ekle"}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Ad"
              {...register("name", { required: "Ad zorunlu" })}
              className="w-full border border-[#737373] p-3 rounded-md dark:text-[#e6e6e6]"
            />
            {errors.name && (
              <p className="text-[#df2c2c] text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Soyad"
              {...register("surname", { required: "Soyad zorunlu" })}
              className="w-full border border-[#737373] p-3 rounded-md dark:text-[#e6e6e6]"
            />
            {errors.surname && (
              <p className="text-[#df2c2c] text-sm">{errors.surname.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Şehir"
            {...register("city", { required: "Şehir zorunlu" })}
            className="w-full border border-[#737373] p-3 rounded-md dark:text-[#e6e6e6]"
          />
          {errors.city && (
            <p className="text-[#df2c2c] text-sm">{errors.city.message}</p>
          )}
        </div>

        <div>
          <textarea
            rows="3"
            placeholder="Adres"
            {...register("address", { required: "Adres zorunlu" })}
            className="w-full border border-[#737373] p-3 rounded-md dark:text-[#e6e6e6]"
          />
          {errors.address && (
            <p className="text-[#df2c2c] text-sm">{errors.address.message}</p>
          )}
        </div>

        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-[#23a6f0] text-white px-6 py-2 rounded-md font-bold cursor-pointer"
          >
            {editIndex !== null ? "Güncelle" : "Kaydet"}
          </button>

          <button
            type="button"
            onClick={() => {
              reset();
              setShowForm(false);
            }}
            className="border border-[#737373] px-6 py-2 rounded-md font-bold text-[#252b42] cursor-pointer dark:text-[#e6e6e6]"
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAddress;
