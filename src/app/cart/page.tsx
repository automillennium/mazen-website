// import { cookies } from "next/headers";
// import { getCart, removeFromCart } from "@/lib/shopify";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// export default async function CartPage() {
//   const cookieStore = await cookies();
//   const cartId = cookieStore.get("shopify_cart_id")?.value;
  
//   let cart;
//   if (cartId) {
//     cart = await getCart(cartId);
//   }

//   const items = cart?.lines?.edges || [];
//   const isEmpty = items.length === 0;

//   async function removeAction(formData: FormData) {
//     "use server";
//     const lineId = formData.get("lineId") as string;
//     if (cartId && lineId) {
//       await removeFromCart(cartId, lineId);
//     }
//     redirect("/cart");
//   }

//   return (
//     <div className="max-w-[1000px] mx-auto px-6 pt-40 pb-24 min-h-[70vh]">
//       <h1 className="text-3xl font-light tracking-[0.2em] uppercase mb-16 text-center border-b border-gray-200 pb-8">
//         Your Cart
//       </h1>

//       {isEmpty ? (
//         <div className="text-center py-20 flex flex-col items-center">
//           <p className="text-gray-500 mb-8 tracking-widest uppercase text-[11px]">Your cart is currently empty.</p>
//           <Link href="/shop" className="border border-black px-12 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black hover:text-white transition-colors">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-16">
//           {/* Cart Items */}
//           <div className="w-full lg:w-2/3 flex flex-col space-y-8">
//             {items.map((edge: any) => {
//               const item = edge.node;
//               const product = item.merchandise.product;
//               const image = item.merchandise.image;
//               const price = item.merchandise.price;

//               return (
//                 <div key={item.id} className="flex flex-col sm:flex-row gap-6 border border-gray-100 p-4 relative group">
//                   <div className="w-full sm:w-32 bg-gray-50 flex items-center justify-center p-2 Shrink-0">
//                     <img src={image?.url} alt={product.title} className="w-full h-auto mix-blend-multiply" />
//                   </div>
//                   <div className="flex flex-col justify-center flex-grow pt-4 sm:pt-0">
//                     <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2 pr-8">{product.title}</h3>
//                     <p className="text-[10px] text-gray-500 mb-4 tracking-widest uppercase">Qty: {item.quantity}</p>
//                     <p className="text-sm border-t border-gray-100 pt-4 w-max">{price.amount} {price.currencyCode}</p>
//                   </div>
//                   <form action={removeAction} className="absolute right-4 top-4">
//                     <input type="hidden" name="lineId" value={item.id} />
//                     <button type="submit" className="text-gray-300 hover:text-black transition-colors" title="Remove item">
//                       <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </form>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Cart Summary */}
//           <div className="w-full lg:w-1/3 bg-gray-50 p-8 h-max sticky top-32 border border-gray-100">
//             <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 border-b border-gray-200 pb-4">Order Summary</h2>
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-xs text-gray-500 tracking-widest uppercase">Subtotal</span>
//               <span className="text-lg">{cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</span>
//             </div>
//             <p className="text-[10px] text-gray-400 mb-8 leading-relaxed">
//               Shipping, taxes, and bespoke framing costs are calculated flawlessly at checkout.
//             </p>
//             <a 
//               href={cart.checkoutUrl}
//               className="block w-full text-center py-4 px-6 bg-[#111111] text-white text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-black/80 transition-colors"
//             >
//               Checkout Securely
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import { cookies } from "next/headers";
import { getCart, removeFromCart, updateCartQuantity } from "@/lib/shopify"; // Ensure updateCartQuantity is exported from your lib
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function CartPage() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("shopify_cart_id")?.value;
  
  let cart;
  if (cartId) {
    cart = await getCart(cartId);
  }

  const items = cart?.lines?.edges || [];
  const isEmpty = items.length === 0;

  async function updateAction(formData: FormData) {
    "use server";
    const lineId = formData.get("lineId") as string;
    const quantity = parseInt(formData.get("quantity") as string);
    
    if (cartId && lineId) {
        if (quantity < 1) {
            await removeFromCart(cartId, lineId);
        } else {
            await updateCartQuantity(cartId, { lineId, quantity });
        }
    }
    revalidatePath("/", "layout");
    redirect("/cart");
  }

  async function removeAction(formData: FormData) {
    "use server";
    const lineId = formData.get("lineId") as string;
    if (cartId && lineId) {
      await removeFromCart(cartId, lineId);
    }
    revalidatePath("/", "layout");
    redirect("/cart");
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-40 pb-24 min-h-[70vh]">
      <h1 className="text-3xl font-light tracking-[0.2em] uppercase mb-16 text-center border-b border-gray-200 pb-8">
        Your Cart
      </h1>

      {isEmpty ? (
        <div className="text-center py-20 flex flex-col items-center">
          <p className="text-gray-500 mb-8 tracking-widest uppercase text-[11px]">Your cart is currently empty.</p>
          <Link href="/shop" className="border border-black px-12 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black hover:text-white transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3 flex flex-col space-y-8">
            {items.map((edge: any) => {
              const item = edge.node;
              const product = item.merchandise.product;
              const image = item.merchandise.image;
              const price = item.merchandise.price;

              return (
                <div key={item.id} className="flex flex-col sm:flex-row gap-6 border border-gray-100 p-4 relative group">
                  <div className="w-full sm:w-32 bg-gray-50 flex items-center justify-center p-2 shrink-0">
                    <img src={image?.url} alt={product.title} className="w-full h-auto mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col justify-center flex-grow pt-4 sm:pt-0">
                    <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 pr-8">{product.title}</h3>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-4">
                      <form action={updateAction} className="flex items-center border border-gray-200">
                        <input type="hidden" name="lineId" value={item.id} />
                        <input type="hidden" name="quantity" value={item.quantity - 1} />
                        <button 
                          type="submit" 
                          className="px-3 py-1 hover:bg-gray-100 transition-colors disabled:opacity-30"
                          disabled={item.quantity <= 0}
                        >
                          -
                        </button>
                      </form>
                      
                      <span className="text-[10px] font-bold tracking-widest uppercase">{item.quantity}</span>
                      
                      <form action={updateAction} className="flex items-center border border-gray-200">
                        <input type="hidden" name="lineId" value={item.id} />
                        <input type="hidden" name="quantity" value={item.quantity + 1} />
                        <button type="submit" className="px-3 py-1 hover:bg-gray-100 transition-colors">
                          +
                        </button>
                      </form>
                    </div>

                    <p className="text-sm border-t border-gray-100 pt-4 w-max">{price.amount} {price.currencyCode}</p>
                  </div>

                  {/* Remove Button */}
                  <form action={removeAction} className="absolute right-4 top-4">
                    <input type="hidden" name="lineId" value={item.id} />
                    <button type="submit" className="text-gray-300 hover:text-black transition-colors" title="Remove item">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </form>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-50 p-8 h-max sticky top-32 border border-gray-100">
            <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 border-b border-gray-200 pb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs text-gray-500 tracking-widest uppercase">Subtotal</span>
              <span className="text-lg">{cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-8 leading-relaxed">
              Shipping, taxes, and bespoke framing costs are calculated flawlessly at checkout.
            </p>
            <a 
              href={cart.checkoutUrl}
              className="block w-full text-center py-4 px-6 bg-[#111111] text-white text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-black/80 transition-colors"
            >
              Checkout Securely
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
