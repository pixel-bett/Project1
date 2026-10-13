function Footer() {
  return (
    <div
      className="footer"
      style={{
        color: "black",
        gap: "50px",
      }}
    >
      <i style={{ textAlign: "center" }}>
        Ember House Slow Smoke.
        <span style={{ color: "#fa0303" }}> Bold Fire.</span> Unforgettable
        Flavor.
      </i>
      <div
        className="main footer"
        style={{ display: "flex", flexDirection: "row" }}
      >
        Copyright © 2023 Ember House<br></br>
        All rights reserved<br></br>
        Ember House<br></br>
        123 Main Street, Kenya Tel: +254 123456789 Email: info@emberhouse.com
        <br></br>
        <p>Ember House Slow Smoke. Bold Fire. Unforgettable Flavor.</p>
        <p>Explore Home About Us Menu Services Reservations</p>
        <p>Contact [MOI AVENUE, KENYA] 📞 <a href="tel:+254123456789">+254 123456789</a> </p>
        <br></br>
        <p> ✉️hello@emberhouse.com 🕒 Mon–Sun: 11:00 AM – 10:00 PM</p>
      </div>

      <p>Stay Updated</p>
      <p>
        Sign up for smoke-fresh updates, new menu drops, and exclusive offers.
      </p>
      <p>©️ 2023 Ember House. All rights reserved.</p>
    </div>
  );
}

export default Footer;
