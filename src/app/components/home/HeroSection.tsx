import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="mx-auto flex flex-col-reverse mt-6 lg:mt-0 items-center gap-12 lg:grid lg:min-h-[calc(100vh-64px)] lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-flex rounded-full bg-surface px-4 py-2 text-sm font-medium text-muted-foreground">
            ✨ New collection 2026
          </span>
          <h2 className="text-4xl mt-6 font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Elevate Your Style With Premium Fashion
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Indulge in refined silhouettes and premium fabrics. Our latest
            collection brings effortless luxury and contemporary elegance
            straight to your doorstep.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/shop"
              className="rounded-lg bg-primary px-8 py-4 text-center font-semibold text-primary-foreground transition hover:bg-primary-hover"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="rounded-lg border-border px-8 py-4 text-center font-semibold text-forground transition hover:bg-surface"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-md lg:w-max-none">
          <div className="absoulte inset-0 rounded-3xl bg-surface"></div>
          <div className="relative overflow-hidden rounded-3xl ">
            <Image
              src="/Images/hero.png"
              alt="fashion hero image"
              width={700}
              height={800}
              priority
              className="h-auto w-full object-cover lg:h-130"
            />
          </div>
          {/* floating card */}
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-5">
            <p className="text-sm text-muted-foreground">Starting from</p>
            <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
              $9.99
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
