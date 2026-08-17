export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fa-solid fa-ice-cream" />
            <span>کافه بستنی گل یخ</span>
          </div>
          <p>
            لذت طعمی متفاوت با بهترین بستنی‌ها، میلک‌شیک‌ها و دسرهای تازه
          </p>
          <div className="footer-social">
            {["instagram", "telegram", "whatsapp"].map((social) => (
              <a key={social} href="#">
                <i className={`fab fa-${social}`} />
              </a>
            ))}
          </div>
          <p className="copyright">
            © 2026 تمامی حقوق برای کافه بستنی گل یخ محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}