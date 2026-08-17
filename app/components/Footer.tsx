export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-[60px] pb-[30px] mt-[80px] text-center">
      <div className="w-[min(1200px,92%)] mx-auto">
        <div>
          <div className="text-[28px] font-bold mb-5">
            <i className="fa-solid fa-ice-cream" />
            <span className="mr-2">کافه بستنی گل یخ</span>
          </div>
          <p>
            لذت طعمی متفاوت با بهترین بستنی‌ها، میلک‌شیک‌ها و دسرهای تازه
          </p>
          <div className="flex justify-center gap-[18px] my-[25px]">
            {["instagram", "telegram", "whatsapp"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-[45px] h-[45px] rounded-full bg-[rgba(255,255,255,0.1)] flex justify-center items-center transition-all duration-300 hover:bg-primary hover:-translate-y-1"
              >
                <i className={`fab fa-${social}`} />
              </a>
            ))}
          </div>
          <p className="mt-[25px] text-sm opacity-80">
            © 2026 تمامی حقوق برای کافه بستنی گل یخ محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
