import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    description: "Pay by any UPI app",
    options: ["Google Pay", "PhonePe", "Paytm", "Amazon Pay"],
    images: ["/gpay.png", "/phonepe.png", "/paytm.png", "/amazonpay.png"],
  },
  {
    id: "wallets",
    name: "Wallets",
    description: "Select your wallet",
    options: ["Paytm Wallet", "Mobikwik", "FreeCharge", "Amazon Pay"],
    images: [
      "/paytmwallet.png",
      "/mobikwik.png",
      "/freecharge.png",
      "/amazonpay.png",
    ],
  },
  {
    id: "card",
    name: "Credit / Debit / ATM Card",
    description: "Add and secure cards as per RBI guidelines",
    options: [],
  },
  {
    id: "netbanking",
    name: "Net Banking",
    description:
      "This instrument has low success, use UPI or cards for better experience",
    options: [],
  },
  { id: "cod", name: "Cash on Delivery", description: "", options: [] },
  {
    id: "emi",
    name: "EMI (Easy Installments)",
    description: "Not applicable",
    options: [],
  },
];

export default function PaymentGetWay() {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 min-h-screen">
      <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <RadioGroup value={selectedMethod} onChange={setSelectedMethod}>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <RadioGroup.Option key={method.id} value={method}>
                {({ checked }) => (
                  <div
                    className={`p-4 border rounded-lg cursor-pointer ${
                      checked ? "border-blue-500" : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-medium">{method.name}</p>
                        {method.description && (
                          <p className="text-sm text-gray-600">
                            {method.description}
                          </p>
                        )}
                      </div>
                      {checked && (
                        <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                      )}
                    </div>
                    {checked && method.options.length > 0 && (
                      <div className="mt-2 pl-4 space-y-1">
                        {method.options.map((option) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="radio"
                              name={method.id}
                              className="w-4 h-4 text-blue-500"
                            />
                            <label className="text-gray-700">{option}</label>
                          </div>
                        ))}
                      </div>
                    )}
                    {checked && method.images && (
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        className="mt-2"
                      >
                        {method.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={image}
                              alt={method.name}
                              className="w-12 h-12"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Price Details</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Price (1 item)</span>
            <span>₹135</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹3</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Amount Payable</span>
            <span>₹138</span>
          </div>
        </div>
      </div>
    </div>
  );
}
