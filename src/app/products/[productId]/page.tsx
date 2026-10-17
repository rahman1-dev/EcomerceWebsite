import FrontentLayout from "@/app/components/layouts/FrontentLayout";
import ProductPageComponent from "@/app/components/Products/ProductPageComponent";

const ProductPage = () => {
  return (
    <div>
      <FrontentLayout>
        <ProductPageComponent />
      </FrontentLayout>
    </div>
  );
};

export default ProductPage;
