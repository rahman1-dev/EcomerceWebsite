import { dummyLatestCollections } from "@/constants/dummyProducts";
import SectionHeader from "../ui/SectionHeader";
import ProductCards from "../Products/ProductCards";

const LatestCollection = () => {
  return (
    <section>
      <SectionHeader
        title="latest collections"
        subTitle="New Arrivals added weekly"
      />

      <div className="my-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {dummyLatestCollections.map((product) => (
            <ProductCards product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
