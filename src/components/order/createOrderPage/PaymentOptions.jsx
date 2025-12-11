import { useState, useMemo } from "react";

const cards = [
  {
    id: 1,
    type: "Halkbank",
    number: "5556 60** **** 6885",
    expiry: "8/2030",
    img: "/order/bank/halkbank.png",
  },
  {
    id: 2,
    type: "Ziraat",
    number: "5421 19** **** 5420",
    expiry: "3/2025",
    img: "/order/bank/ziraat.png",
  },
  {
    id: 3,
    type: "VakıfBank",
    number: "5428 04** **** 2736",
    expiry: "6/2024",
    img: "/order/bank/vakıfbank.png",
  },
];

const PaymentOptions = ({ totalAmount, onInstallmentChange }) => {
  const [selectedCard, setSelectedCard] = useState(cards[0].id);

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
  const [secure3D, setSecure3D] = useState(false);

  const handleSelectInstallment = (item) => {
    setSelectedInstallment(item);
    const totalWithInstallment = item.months * item.monthlyPayment;

    onInstallmentChange(totalWithInstallment);
  };

  const totalPayable =
    selectedInstallment.months * selectedInstallment.monthlyPayment;

  return (
    <div className="border border-[#737373] p-4 rounded-md font-montserrat flex flex-col gap-4">
      <h2 className="font-bold text-lg text-[#252b42] dark:text-[#fafafa]">
        Kart ile Öde
      </h2>
      <p className="text-sm text-[#737373] dark:text-[#bebebe]">
        Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi
        güvenle yapabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold mb-2 text-2xl dark:text-[#fafafa]">
            Kart Bilgileri
          </h3>
          <div className="flex flex-col gap-2">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`border rounded-md py-5 px-8 flex flex-col gap-3 cursor-pointer ${
                  selectedCard === card.id
                    ? "border-[#24a5f0] bg-[#24a5f0]/10"
                    : "border-[#737373]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <img src={card.img} className="object-cover w-25" />
                  <img
                    src="/order/mastercard.svg"
                    className="object-cover w-15"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold dark:text-[#fafafa]">
                    {card.type} kartım
                  </span>
                  <span className="text-sm text-[#737373] dark:text-[#bebebe]">
                    {card.number}
                  </span>
                  <span className="text-xs text-[#737373] dark:text-[#bebebe]">
                    {card.expiry}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <label className="flex items-center gap-2 mt-2 dark:text-[#bebebe]">
            <input
              type="checkbox"
              checked={secure3D}
              onChange={(e) => setSecure3D(e.target.checked)}
            />
            3D Secure ile ödemek istiyorum
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl text-[#252b42] dark:text-[#fafafa]">
            Taksit Seçenekleri
          </h2>
          <h5 className="font-semibold text-sm text-[#737373] dark:text-[#bebebe]">
            Kartınıza uygun taksit seçeneğini seçiniz.
          </h5>

          <table className="w-full text-left border border-[#d1d5db] rounded-md dark:border-[#5a5f72]">
            <thead className="bg-[#f5f5f5] dark:bg-[#babdc7]">
              <tr>
                <th className="py-2 px-4 border-b border-[#d1d5db] dark:border-[#5a5f72] text-[#252b42]">
                  Taksit Sayısı
                </th>
                <th className="py-2 px-4 border-b border-[#d1d5db] dark:border-[#5a5f72] text-[#252b42]">
                  Aylık Ödeme
                </th>
              </tr>
            </thead>
            <tbody>
              {installments.map((item) => (
                <tr
                  key={item.name}
                  className={`hover:bg-[#f0f8ff] dark:hover:bg-[#727685] cursor-pointer ${
                    selectedInstallment.name === item.name
                      ? "bg-[#e0f2ff] dark:bg-[#5a5f72]"
                      : ""
                  }`}
                  onClick={() => handleSelectInstallment(item)}
                >
                  <td className="py-3 px-4  border-[#d1d5db] cursor-pointer ">
                    <label className="flex items-center gap-2 cursor-pointer dark:text-[#fafafa]">
                      <input
                        type="radio"
                        name="installment"
                        className="cursor-pointer"
                        checked={selectedInstallment.name === item.name}
                        onChange={() => handleSelectInstallment(item)}
                      />
                      {item.name}
                    </label>
                  </td>
                  <td className="py-3 px-4  border-[#d1d5db] flex gap-2 items-center  cursor-pointer">
                    <span className="font-bold text-[#24a5f0]">
                      ${item.monthlyPayment.toFixed(2)}
                    </span>

                    <span className="text-xs font-medium text-[#737373] dark:text-[#bababa]">
                      {item.rate === 0
                        ? "Faizsiz"
                        : `+%${(item.rate * 100).toFixed(0)} vade farkı`}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-2 text-right text-sm text-[#252b42] dark:text-[#fafafa]">
            Toplam Ödenecek:{" "}
            <span className="font-bold text-[#24a5f0]">
              ${totalPayable.toFixed(2)}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
