import Image from "next/image";
import FrontentLayout from "../components/layouts/FrontentLayout";

const ContactPage = () => {
  return (
    <div>
      <FrontentLayout>
        <div className="min-w-full mt-10 flex flex-col justify-between items-center lg:grid lg:grid-cols-2 lg:3 md:flex-wrap md:gap-8">
          {/* Left content */}
          <div className="mt-10">
            <Image
              src="/Images/contact.png"
              alt="Contact Image"
              width={500}
              height={600}
              className="rounded-2xl w-full max-w-full h-full object-cover md:block"
            ></Image>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-2 mt-8 justify-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg">CONTACT US</h3>
              <h1 className="text-5xl font-bold">
                We&apos;d Love to Hear From You
              </h1>
              <p className="text-muted-foreground">
                Whether you have a question about an order, need help finding
                the perfect outfit, or simply want to say hello, our team is
                always ready to assist you.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <div className="flex flex-col">
                <h1 className="text-foreground text-xl font-semibold">
                  Our Store
                </h1>
                <span className="text-muted-foreground">
                  123 Fashion Avenue
                </span>
                <span className="text-muted-foreground">
                  New York, NY 10001
                </span>
              </div>

              <div className="flex flex-col">
                <h1 className="text-foreground text-xl font-semibold">Email</h1>
                <span className="text-muted-foreground">
                  support@fashion.com
                </span>
              </div>

              <div className="flex flex-col">
                <h1 className="text-foreground text-xl font-semibold">Phone</h1>
                <span className="text-muted-foreground">+0 (010) 100-001</span>
              </div>

              <div className="flex flex-col">
                <h1 className="text-foreground text-xl font-semibold">
                  Business Hours
                </h1>
                <span className="text-muted-foreground">Monday – Friday</span>
                <span className="text-muted-foreground">9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </FrontentLayout>
    </div>
  );
};

export default ContactPage;
