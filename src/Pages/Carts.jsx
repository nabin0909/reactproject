import React, { useEffect, useState } from "react";

const Carts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cartData")) || [];
    // Ensure that each item has a quantity field; default to 1 if not present
    const initializedCart = cartItem.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setProduct(initializedCart);
  }, []);

  const increaseQty = (id) => {
    const updateQty = product.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setProduct(updateQty);
    localStorage.setItem("cartData", JSON.stringify(updateQty));
  };

  const decreaseQty = (id) => {
    const updateQty = product.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setProduct(updateQty);
    localStorage.setItem("cartData", JSON.stringify(updateQty));
  };

  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>

          {product.length === 0 ? (
            <h1 className="text-center text-blue-500 text-3xl font-bold">
              Cart is Empty
            </h1>
          ) : (
            <div className="lg:grid lg:grid-cols-3 gap-10">
              <div className="col-span-2">
                {product.map((item, index) => (
                  <div key={index} className="border-t border-gray-200 py-6">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[140px] rounded-xl"
                      />
                      <div className="pro-data">
                        <h5 className="font-semibold text-xl text-black">
                          {item.title}
                        </h5>
                        <p className="font-normal text-lg text-gray-500">
                          {item.category}
                        </p>
                      </div>
                      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                        <h6 className="font-bold text-2xl text-black">
                          ${item.price}
                        </h6>
                        <div className="flex items-center gap-2">
                          <button
                            className="px-6 py-[18px] border border-gray-200 hover:bg-gray-50 rounded-l-full"
                            onClick={() => decreaseQty(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M16.5 11H5.5"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="border-y border-gray-200 text-lg text-center w-[60px] py-[15px]"
                            value={item.quantity} // Use value instead of placeholder
                            readOnly
                          />
                          <button
                            className="px-6 py-[18px] border border-gray-200 hover:bg-gray-50 rounded-r-full"
                            onClick={() => increaseQty(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <h6 className="font-bold text-2xl text-indigo-600">
                          ${item.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-300 rounded-xl p-6">
                <h3 className="font-bold text-2xl mb-6">Billing Summary</h3>

                <div className="flex justify-between mb-4">
                  <p className="text-black-400 text-xl">Total Quantity</p>
                  <h6 className="font-semibold text-xl text-gray-900">
                    {product.reduce(
                      (ac, item) => ac + Number(item.quantity || 1),
                      0
                    )}
                  </h6>
                </div>
                <div className="flex justify-between pb-6 border-b border-gray-200 mb-6">
                  <p className="font-bold text-2xl">Total</p>
                  <h6 className="font-bold text-2xl text-indigo-500">
                    Rs.{" "}
                    {product
                      .reduce(
                        (ac, item) =>
                          ac + Number(item.price * (item.quantity || 1)),
                        0
                      )
                      .toFixed(2)}
                  </h6>
                </div>
                <button className="bg-indigo-600 text-white rounded-full py-4 w-full text-center font-semibold hover:bg-indigo-700 my-10">
                  Continue to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Carts;
