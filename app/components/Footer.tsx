export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0f172a] py-15 text-center text-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-5 text-2xl font-bold">
          <i className="fa-solid fa-ice-cream ml-2" />
          <span>کافه بستنی گل یخ</span>
        </div>
        <p className="text-gray-400">
          لذت طعمی متفاوت با بهترین بستنی‌ها، میلک‌شیک‌ها و دسرهای تازه
        </p>
        <div className="my-6 flex justify-center gap-4">
          {["instagram", "telegram", "whatsapp"].map((social) => (
            <a
              key={social}
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-[#4fc3f7]"
            >
              <i className={`fab fa-${social}`} />
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-400">
          © 2026 تمامی حقوق برای کافه بستنی گل یخ محفوظ است.
        </p>
      </div>
    </footer>
  );
}