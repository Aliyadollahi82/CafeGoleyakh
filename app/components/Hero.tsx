export default function Hero() {
  return (
    <section
      id="home"
      className="py-[120px] bg-[linear-gradient(135deg,#dff6ff,#ffffff)] text-center max-[600px]:py-20"
    >
      <div className="text-center">
        <h1 className="text-[52px] font-bold mb-5 max-[900px]:text-[36px] max-[600px]:text-[30px]">
          به دنیای شیرین گل یخ خوش آمدید
        </h1>
        <p className="text-[20px] text-gray max-w-[700px] mx-auto">
          انواع بستنی، میلک شیک و دسرهای خوشمزه با بهترین مواد اولیه
        </p>
        <a
          href="#products"
          className="inline-block mt-[35px] px-9 py-[15px] bg-primary text-white rounded-[40px] transition-all duration-300 hover:-translate-y-[5px]"
        >
          مشاهده منو
        </a>
      </div>
    </section>
  );
}
