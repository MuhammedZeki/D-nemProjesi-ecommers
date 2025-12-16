import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  FiCreditCard,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiInfo,
} from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import AutoTranslate from "../../translate/AutoTranslate";
import {
  addCard,
  deleteCard,
  selectCard,
  updateCard,
} from "../../store/actions/cardActions";
import { toast } from "react-toastify";

const PaymentOptions = ({ totalAmount, onInstallmentChange }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.card.cards);
  const selectedCardId = useSelector((state) => state.card.selectedCardId);
  const [secure3D, setSecure3D] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  const {
    register: registerAdd,
    handleSubmit: handleSubmitAdd,
    formState: { errors: errorsAdd },
    reset: resetAdd,
  } = useForm();

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    formState: { errors: errorsEdit },
    reset: resetEdit,
    setValue: setValueEdit,
  } = useForm();

  const installments = useMemo(
    () => [
      {
        name: "Tek Çekim",
        months: 1,
        rate: 0,
        monthlyPayment: totalAmount * 1,
      },
      {
        name: "3 Taksit",
        months: 3,
        rate: 0.02,
        monthlyPayment: (totalAmount * 1.02) / 3,
      },
      {
        name: "6 Taksit",
        months: 6,
        rate: 0.05,
        monthlyPayment: (totalAmount * 1.05) / 6,
      },
      {
        name: "12 Taksit",
        months: 12,
        rate: 0.1,
        monthlyPayment: (totalAmount * 1.1) / 12,
      },
    ],
    [totalAmount]
  );

  const [selectedInstallment, setSelectedInstallment] = useState(
    installments[0]
  );

  const handleSelectInstallment = (item) => {
    setSelectedInstallment(item);
    const totalWithInstallment = item.months * item.monthlyPayment;
    onInstallmentChange(totalWithInstallment);
  };

  const totalPayable =
    selectedInstallment.months * selectedInstallment.monthlyPayment;

  const onAddCard = (data) => {
    dispatch(addCard(data));
    resetAdd();
    setShowAddCardModal(false);
  };

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
    toast.success("Kartınız başarıyla silindi!");
  };

  const handleSelectCard = (id) => {
    dispatch(selectCard(id));
  };

  const openEditModal = (card) => {
    setEditingCard(card);
    setValueEdit("type", card.type);
    setValueEdit("number", card.number);
    setValueEdit("expiry", card.expiry);
    setValueEdit("cvv", card.cvv || "");
    setShowEditCardModal(true);
  };

  const onUpdateCard = (data) => {
    dispatch(updateCard(editingCard.id, data));
    resetEdit();
    setShowEditCardModal(false);
    setEditingCard(null);
    toast.success("Kartınız başarıyla güncellendi!");
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  return (
    <div className="border border-[#e5e5e5] dark:border-[#737373] p-6 rounded-lg font-montserrat flex flex-col gap-6 bg-white dark:bg-[#2f354a]">
      <div className="flex items-center gap-8 pb-6 border-b border-[#e5e5e5] dark:border-[#737373]">
        <div className="flex items-center gap-4">
          <div className="md:w-8 md:h-8 w-4 h-4 rounded-full border-2 border-[#24a5f0] flex items-center justify-center">
            <div className="md:w-4 md:h-4 w-2 h-2 rounded-full bg-[#24a5f0]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-[#252b42] dark:text-[#fafafa]">
              <AutoTranslate>Kart ile Öde</AutoTranslate>
            </span>
            <span className="text-lg font-medium text-[#252b42] dark:text-[#fafafa]">
              <AutoTranslate>
                Kart ile Ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak
                ödemenizi güvenle yapabilirsiniz.
              </AutoTranslate>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className=" flex-col flex sm:flex sm:flex-row gap-6 sm:gap-8 items-center justify-between">
            <div className="flex items-center gap-3">
              <MdOutlinePayment className="text-3xl text-[#24a5f0]" />
              <div>
                <h2 className="font-bold text-xl text-[#252b42] dark:text-[#fafafa]">
                  <AutoTranslate>Kart Bilgileri</AutoTranslate>
                </h2>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowAddCardModal(true)}
                className="underline cursor-pointer text-[#737373] hover:text-[#4b4b4b] tracking-[0.1px] leading-6"
              >
                <AutoTranslate>Başka bir Kart ile Ödeme Yap</AutoTranslate>
              </button>
            </div>
          </div>
          {cards.length === 0 ? (
            <div className="border-2 w-full border-dashed border-[#e5e5e5] dark:border-[#737373] rounded-lg p-8 text-center">
              <FiCreditCard className="text-5xl text-[#737373] dark:text-[#bebebe] mx-auto mb-3" />
              <p className="text-[#737373] dark:text-[#bebebe] mb-4">
                <AutoTranslate>Henüz kayıtlı kartınız yok</AutoTranslate>
              </p>
              <button
                onClick={() => setShowAddCardModal(true)}
                className="text-[#24a5f0] cursor-pointer hover:underline font-medium"
              >
                <AutoTranslate>İlk kartını ekle</AutoTranslate>
              </button>
            </div>
          ) : (
            cards.map((card) => (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`md:w-6 md:h-6 w-4 h-4 rounded-full border-2  flex items-center justify-center ${
                        selectedCardId === card.id
                          ? "border-[#24a5f0]"
                          : "border-[#737373]"
                      }`}
                    >
                      {selectedCardId === card.id ? (
                        <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-[#24a5f0]"></div>
                      ) : (
                        ""
                      )}
                    </div>
                    <p
                      className={`${
                        selectedCardId === card.id
                          ? "text-[#24a5f0]"
                          : "text-[#252b42]"
                      }`}
                    >
                      {card.type} kartım
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(card);
                      }}
                      className="p-1.5 cursor-pointer rounded-full hover:bg-[#24a5f0]/10 text-[#24a5f0] transition-colors"
                    >
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCard(card.id);
                      }}
                      className="p-1.5  cursor-pointer rounded-full hover:bg-red-50 text-red-500 transition-colors"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div
                  key={card.id}
                  onClick={() => handleSelectCard(card.id)}
                  className={`border-2 rounded-lg w-full px-4 py-8 cursor-pointer transition-all relative ${
                    selectedCardId === card.id
                      ? "border-[#24a5f0] bg-[#24a5f0]/5"
                      : "border-[#e5e5e5] dark:border-[#737373] hover:border-[#24a5f0]/50"
                  }`}
                >
                  <div className="flex items-center  justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <FiCreditCard
                        className={`text-2xl  ${
                          selectedCardId === card.id
                            ? "text-[#24a5f0]"
                            : "text-[#737373]"
                        }`}
                      />
                      <span className="font-bold text-[#252b42] dark:text-[#fafafa]">
                        {card.type}
                      </span>
                    </div>
                    <img
                      src="/order/mastercard.svg"
                      className="h-15 w-15 object-cover"
                    />
                  </div>
                  <div className="text-sm text-[#737373]  flex flex-col items-end  dark:text-[#bebebe] gap-2">
                    <p className="font-mono">{card.number}</p>
                    <div className="flex items-center gap-0.5">
                      <p>{card.expiryMonth}</p>
                      <p>/</p>
                      <p>{card.expiryYear}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <label className="flex items-center gap-2 text-sm text-[#737373] dark:text-[#bebebe] cursor-pointer">
            <input
              type="checkbox"
              checked={secure3D}
              onChange={(e) => setSecure3D(e.target.checked)}
              className="w-4 h-4 accent-[#24a5f0]"
            />
            <AutoTranslate>3D Secure ile ödemek istiyorum</AutoTranslate>
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-xl text-[#252b42] dark:text-[#fafafa]">
            <AutoTranslate>Taksit Seçenekleri</AutoTranslate>
          </h2>
          <p className="text-sm text-[#737373] dark:text-[#bebebe]">
            <AutoTranslate>
              Kartınıza uygun taksit seçeneğini seçiniz.
            </AutoTranslate>
          </p>

          <div className="border border-[#e5e5e5] dark:border-[#737373] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#f5f5f5] dark:bg-[#2a2d3a]">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#252b42] dark:text-[#fafafa]">
                    <AutoTranslate>Taksit Sayısı</AutoTranslate>
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#252b42] dark:text-[#fafafa]">
                    <AutoTranslate>Aylık Ödeme</AutoTranslate>
                  </th>
                </tr>
              </thead>
              <tbody>
                {installments.map((item) => (
                  <tr
                    key={item.name}
                    className={`hover:bg-[#f0f8ff] dark:hover:bg-[#2a2d3a] cursor-pointer transition-colors ${
                      selectedInstallment.name === item.name
                        ? "bg-[#e0f2ff] dark:bg-[#2a2d3a]"
                        : ""
                    }`}
                    onClick={() => handleSelectInstallment(item)}
                  >
                    <td className="py-3 px-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="installment"
                          className="w-4 h-4 accent-[#24a5f0] cursor-pointer"
                          checked={selectedInstallment.name === item.name}
                          onChange={() => handleSelectInstallment(item)}
                        />
                        <span className="text-[#252b42] dark:text-[#fafafa] font-medium">
                          <AutoTranslate>{item.name}</AutoTranslate>
                        </span>
                      </label>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#24a5f0]">
                          ${item.monthlyPayment.toFixed(2)}
                        </span>
                        <span className="text-xs text-[#737373] dark:text-[#bebebe]">
                          {item.rate === 0 ? (
                            <AutoTranslate>Faizsiz</AutoTranslate>
                          ) : (
                            <span>
                              +%{(item.rate * 100).toFixed(0)}{" "}
                              <AutoTranslate>vade farkı</AutoTranslate>
                            </span>
                          )}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2 p-4 bg-[#f0f8ff] dark:bg-[#2a2d3a] rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#252b42] dark:text-[#fafafa] font-medium">
                <AutoTranslate>Toplam Ödenecek:</AutoTranslate>
              </span>
              <span className="text-2xl font-bold text-[#24a5f0]">
                ${totalPayable.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {showAddCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1a1d28] rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-[#e5e5e5] dark:border-[#737373]">
              <h3 className="text-xl font-bold text-[#252b42] dark:text-[#fafafa]">
                <AutoTranslate>Kart Bilgileri</AutoTranslate>
              </h3>
            </div>

            <form
              onSubmit={handleSubmitAdd(onAddCard)}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                  <AutoTranslate>Kart Numarası</AutoTranslate>
                </label>
                <input
                  type="text"
                  {...registerAdd("number", {
                    required: "Kart numarası zorunludur",
                    pattern: {
                      value: /^[\d\s]{19}$/,
                      message: "Geçerli bir kart numarası giriniz (16 haneli)",
                    },
                  })}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value);
                  }}
                  maxLength="19"
                  placeholder="1234 5678 9012 3456"
                  className={`w-full border rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] font-mono ${
                    errorsAdd.number
                      ? "border-red-500"
                      : "border-[#e5e5e5] dark:border-[#737373]"
                  }`}
                />
                {errorsAdd.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsAdd.number.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                    <AutoTranslate>Son Kullanma Tarihi</AutoTranslate>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      {...registerAdd("expiryMonth", {
                        required: "Ay seçiniz",
                      })}
                      className={`border rounded-lg px-3 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] ${
                        errorsAdd.expiryMonth
                          ? "border-red-500"
                          : "border-[#e5e5e5] dark:border-[#737373]"
                      }`}
                    >
                      <option value="">Ay</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      {...registerAdd("expiryYear", {
                        required: "Yıl seçiniz",
                      })}
                      className={`border rounded-lg px-3 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] ${
                        errorsAdd.expiryYear
                          ? "border-red-500"
                          : "border-[#e5e5e5] dark:border-[#737373]"
                      }`}
                    >
                      <option value="">Yıl</option>
                      {[...Array(10)].map((_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {(errorsAdd.expiryMonth || errorsAdd.expiryYear) && (
                    <p className="text-red-500 text-xs mt-1">
                      {errorsAdd.expiryMonth?.message ||
                        errorsAdd.expiryYear?.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                    CVV
                    <FiInfo className="text-[#737373]" />
                  </label>
                  <input
                    type="text"
                    {...registerAdd("cvv", {
                      required: "CVV zorunludur",
                      pattern: {
                        value: /^\d{3}$/,
                        message: "CVV 3 haneli olmalıdır",
                      },
                    })}
                    maxLength="3"
                    placeholder="123"
                    className={`w-full border rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] font-mono ${
                      errorsAdd.cvv
                        ? "border-red-500"
                        : "border-[#e5e5e5] dark:border-[#737373]"
                    }`}
                  />
                  {errorsAdd.cvv && (
                    <p className="text-red-500 text-xs mt-1">
                      {errorsAdd.cvv.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                  <AutoTranslate>Banka Adı</AutoTranslate>
                </label>
                <input
                  type="text"
                  {...registerAdd("type")}
                  placeholder="Halkbank, Ziraat, vb."
                  className="w-full border border-[#e5e5e5] dark:border-[#737373] rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa]"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 cursor-pointer bg-[#24a5f0] text-white py-3 rounded-lg font-medium hover:bg-[#1a8fd4] transition-colors"
                >
                  <AutoTranslate>Kartı Kaydet ve Devam Et</AutoTranslate>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCardModal(false);
                    resetAdd();
                  }}
                  className="px-6 cursor-pointer bg-[#f5f5f5] dark:bg-[#2a2d3a] text-[#252b42] dark:text-[#fafafa] py-3 rounded-lg font-medium hover:bg-[#e5e5e5] dark:hover:bg-[#3a3d4a] transition-colors"
                >
                  <AutoTranslate>İptal</AutoTranslate>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#1a1d28] rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-[#e5e5e5] dark:border-[#737373]">
              <h3 className="text-xl font-bold text-[#252b42] dark:text-[#fafafa]">
                <AutoTranslate>Kartı Düzenle</AutoTranslate>
              </h3>
            </div>
            <form
              onSubmit={handleSubmitEdit(onUpdateCard)}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                  <AutoTranslate>Kart Numarası</AutoTranslate>
                </label>
                <input
                  type="text"
                  {...registerEdit("number", {
                    required: "Kart numarası zorunludur",
                    pattern: {
                      value: /^[\d\s]{19}$/,
                      message: "Geçerli bir kart numarası giriniz (16 haneli)",
                    },
                  })}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value);
                  }}
                  maxLength="19"
                  placeholder="1234 5678 9012 3456"
                  className={`w-full border rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] font-mono ${
                    errorsEdit.number
                      ? "border-red-500"
                      : "border-[#e5e5e5] dark:border-[#737373]"
                  }`}
                />
                {errorsEdit.number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsEdit.number.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                  <AutoTranslate>Son Kullanma</AutoTranslate>
                </label>
                <input
                  type="text"
                  {...registerEdit("expiry", {
                    required: "Son kullanma tarihi zorunludur",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{4}$/,
                      message: "Format: AA/YYYY (örn: 08/2030)",
                    },
                  })}
                  placeholder="08/2030"
                  className={`w-full border rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa] ${
                    errorsEdit.expiry
                      ? "border-red-500"
                      : "border-[#e5e5e5] dark:border-[#737373]"
                  }`}
                />
                {errorsEdit.expiry && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorsEdit.expiry.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#252b42] dark:text-[#fafafa] mb-2">
                  <AutoTranslate>Banka Adı</AutoTranslate>
                </label>
                <input
                  type="text"
                  {...registerEdit("type")}
                  placeholder="Halkbank, Ziraat, vb."
                  className="w-full border border-[#e5e5e5] dark:border-[#737373] rounded-lg px-4 py-2.5 dark:bg-[#2a2d3a] dark:text-[#fafafa]"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 cursor-pointer bg-[#24a5f0] text-white py-3 rounded-lg font-medium hover:bg-[#1a8fd4] transition-colors"
                >
                  <AutoTranslate>Güncelle</AutoTranslate>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditCardModal(false);
                    setEditingCard(null);
                    resetEdit();
                  }}
                  className="px-6 cursor-pointer bg-[#f5f5f5] dark:bg-[#2a2d3a] text-[#252b42] dark:text-[#fafafa] py-3 rounded-lg font-medium hover:bg-[#e5e5e5] dark:hover:bg-[#3a3d4a] transition-colors"
                >
                  <AutoTranslate>İptal</AutoTranslate>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
