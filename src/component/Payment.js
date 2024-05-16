import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPrice, eventId } = location.state;
  const [loading, setLoading] = useState(false);
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false); // Add a flag to track payment initiation

  useEffect(() => {
    console.log("useeffect");
    if (isPaymentInitiated) return; // Prevent re-initiating payment

    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        if (document.getElementById("razorpay-script")) {
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.id = "razorpay-script";
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    const displayRazorpay = async () => {
      setLoading(true);
      setIsPaymentInitiated(true); // Set flag to true

      const res = await loadRazorpayScript();

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("token");

      const result = await fetch("http://localhost:5000/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: selectedPrice * 100,
          currency: "INR",
          eventId,
        }),
      });

      if (!result.ok) {
        alert("Server error. Please try again.");
        setLoading(false);
        return;
      }

      const data = await result.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Event Booking",
        description: "Event Ticket Purchase",
        order_id: data.id,
        handler: async (response) => {
          const paymentData = {
            order_id: data.id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const result = await fetch("http://localhost:5000/razorpay/payment-success", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(paymentData),
          });

          if (result.ok) {
            alert("Payment successful!");
            navigate("/success");
          } else {
            alert("Payment verification failed. Please try again.");
            navigate("/failure");
          }
        },
        prefill: {
          name: "Your Name",
          email: "your-email@example.com",
          contact: "9999999999",
        },
        notes: {
          event_id: eventId,
        },
        theme: {
          color: "#F37254",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };

    displayRazorpay();
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-16 rounded-lg shadow-md w-full md:w-96">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Proceed to payment
          </h2>
          <p className="text-center">Amount: {selectedPrice} INR</p>
          <button
            onClick={() => navigate("/")}
            className="w-full mt-8 bg-red-600 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;