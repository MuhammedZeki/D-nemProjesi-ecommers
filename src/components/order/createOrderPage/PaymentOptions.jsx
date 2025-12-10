import { useState } from "react";
import { useSelector } from "react-redux";

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

const PaymentOptions = () => {
  const [selectedCard, setSelectedCard] = useState(cards[1].id); // default seçili
  const [selectedInstallment, setSelectedInstallment] = useState("Tek Çekim");
  const [secure3D, setSecure3D] = useState(false);
  const { total } = useSelector((state) => state.basket);
  return (
    <div className="border border-[#737373] p-4 rounded-md font-montserrat flex flex-col gap-4">
      <h2 className="font-bold text-lg text-[#252b42]">Kart ile Öde</h2>
      <p className="text-sm text-[#737373]">
        Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak ödemenizi
        güvenle yapabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold mb-2">Kart Bilgileri</h3>
          <div className="flex flex-col gap-2">
            {cards &&
              cards.map((card) => (
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
                    <span className="font-bold">{card.type} kartım</span>
                    <span className="text-sm text-[#737373]">
                      {card.number}
                    </span>
                    <span className="text-xs text-[#737373]">
                      {card.expiry}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={secure3D}
              onChange={(e) => setSecure3D(e.target.checked)}
            />
            3D Secure ile ödemek istiyorum
          </label>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Taksit Seçenekleri</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="installment"
                checked={selectedInstallment === "Tek Çekim"}
                onChange={() => setSelectedInstallment("Tek Çekim")}
              />
              Tek Çekim -{" "}
              <span className="font-bold text-[#24a5f0]">${total}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
