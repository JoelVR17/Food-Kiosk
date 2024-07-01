"use client";

import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";

const OrderSummary = () => {
  const order = useStore((state) => state.order);
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">My Order</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">The cart is empty</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <p className="text-2cl mt-20 text-center">
            Total to pay: {""}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
