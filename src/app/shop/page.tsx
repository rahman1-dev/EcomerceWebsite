import { dummyShopProducts } from "@/constants/dummyProducts";
import FrontentLayout from "../components/layouts/FrontentLayout";
import FilterOptions from "../components/shop/FilterOptions";
import ProductCards from "../components/Products/ProductCards";

const ShopPage = () => {
  return (
    <FrontentLayout>
      <div className="flex flex-col sm:flex-row gap-5 my-10">
        <FilterOptions />
        <div className="flex-1">
          <div className="flex justify-between items-center text-base sm:text-2xl mb-4 ">
            <h2 className="text-primary font-semibold">Shop</h2>

            <select className="border border-border text-sm p-3 ">
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {dummyShopProducts.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </FrontentLayout>
  );
};

export default ShopPage;
