import { FiHeadphones, FiRefreshCw, FiRotateCcw } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import { IconBase } from "react-icons";

const features = [
  {
    icon: FiRefreshCw,
    title: "Easy Exchange",
    description: "Exchange your items quickly and hassle-free",
  },
  {
    icon: FiRotateCcw,
    title: "7 Days Return",
    description: "Not statisfied with your purchase? Return it within 7 days",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Our support team is available around the clock to assist you",
  },
];
const ShowWithUs = () => {
  return (
    <section className="py-12">
      <SectionHeader
        title="Why Shop With Us"
        subTitle="We're committed to providing a seamless shopping experience with premium products and exceptional customer service."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 py-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2x1 p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full Obg-primary/10">
                <Icon className="text-primary" size={30} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShowWithUs;
