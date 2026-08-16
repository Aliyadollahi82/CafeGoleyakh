export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#dff6ff] to-white py-20 text-center sm:py-30"
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <h1 className="mb-5 text-3xl font-extrabold sm:text-5xl">
          به دنیای شیرین گل یخ خوش آمدید
        </h1>
        <p className="mx-auto max-w-[700px] text-base text-gray-500 sm:text-xl">
          انواع بستنی، میلک شیک و دسرهای خوشمزه با بهترین مواد اولیه
        </p>
        <a
          href="#products"
          className="mt-8 inline-block rounded-full bg-[#4fc3f7] px-9 py-3.5 text-white transition-transform hover:-translate-y-1"
        >
          مشاهده منو
        </a>
      </div>
    </section>
  );
}