import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "The Name is Required"),
  total: z.number().min(1, "There are errors in the order"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      subtotal: z.number(),
      quantity: z.number(),
    })
  ),
});
