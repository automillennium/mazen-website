"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createCart, addToCart } from "@/lib/shopify";

export async function addToCartAction(variantId: string) {
  const cookieStore = await cookies();
  let cartId = cookieStore.get("shopify_cart_id")?.value;

  if (!cartId) {
    // No cart exists, create a new one with this item
    const cart = await createCart(variantId);
    if (cart?.id) {
      cartId = cart.id;
    }
  } else {
    // Cart exists, just add the new variant
    await addToCart(cartId, variantId);
  }

  if (cartId) {
    cookieStore.set("shopify_cart_id", cartId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  // Ensure the layout and pages are updated
  revalidatePath("/", "layout");
  
  // Send the user to the cart page you already built
  redirect("/cart");
}