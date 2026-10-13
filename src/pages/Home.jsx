import { useState } from "react";
import image_1 from "../assets/images/image1.jpg";
import image_2 from "../assets/images/image2.jpg";
import image_3 from "../assets/images/image3.jpg";
import image_4 from "../assets/images/image4.jpg";
import image_5 from "../assets/images/image5.jpg";
import "../App.css";

const dishes = {
  trending: [
    {
      name: "Ember Signature Steak",
      description: "Fire-grilled steak with smoky house sauce.",
      price: 1500,
      image: image_1,
    },
    {
      name: "Smoky BBQ Chicken",
      description: "Charcoal-grilled chicken with a rich BBQ glaze.",
      price: 950,
      image: image_2,
    },
    {
      name: "Loaded Ember Fries",
      description: "Crispy fries with cheese and house seasoning.",
      price: 450,
      image: image_3,
    },
    {
      name: "Flame-Grilled Burger",
      description: "Beef, fresh lettuce and signature burger sauce.",
      price: 850,
      image: image_4,
    },
    {
      name: "Charcoal-Grilled Chicken",
      description: "Tender chicken with herbs and smoky flavours.",
      price: 1100,
      image: image_5,
    },
    {
      name: "Ember BBQ Ribs",
      description: "Slow-cooked ribs finished with a sticky BBQ glaze.",
      price: 1350,
      image: image_2,
    },
  ],

  offers: [
    {
      name: "BBQ Chicken Combo",
      description: "Grilled chicken served with golden fries.",
      oldPrice: 1200,
      price: 950,
      image: image_2,
    },
    {
      name: "Double Beef Burger",
      description: "Double beef patties, cheese and house sauce.",
      oldPrice: 1400,
      price: 1100,
      image: image_4,
    },
    {
      name: "Loaded Fries",
      description: "Crispy fries topped with cheese and seasoning.",
      oldPrice: 600,
      price: 450,
      image: image_3,
    },
    {
      name: "Signature Steak",
      description: "Our signature steak at a special price.",
      oldPrice: 1800,
      price: 1500,
      image: image_1,
    },
    {
      name: "Grilled Chicken Feast",
      description: "Charcoal-grilled chicken packed with flavour.",
      oldPrice: 1400,
      price: 1150,
      image: image_5,
    },
    {
      name: "Ember Pork Ribs",
      description: "Slow-cooked ribs with a smoky BBQ glaze.",
      oldPrice: 1600,
      price: 1300,
      image: image_2,
    },
  ],

  recommended: [
    {
      name: "Ember Signature",
      description: "Discover the bold flavours of our kitchen.",
      image: image_1,
    },
    {
      name: "Fire-Grilled Favourite",
      description: "Enjoy the rich taste of open-fire cooking.",
      image: image_2,
    },
    {
      name: "Chef's Selection",
      description: "A special selection inspired by our kitchen.",
      image: image_3,
    },
  ],
};

const formatPrice = (price) => `KSh ${price.toLocaleString("en-KE")}`;

function DishCard({ dish }) {
  const savings = dish.oldPrice ? dish.oldPrice - dish.price : 0;

  return (
    <article className="food-card">
      <img src={dish.image} alt={dish.name} loading="lazy" />

      <div className="food-card-content">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>

        {dish.oldPrice && <del>{formatPrice(dish.oldPrice)}</del>}

        {dish.price && (
          <strong>
            {formatPrice(dish.price)}
            {savings > 0 && ` — Save ${formatPrice(savings)}`}
          </strong>
        )}
      </div>
    </article>
  );
}

function DishSection({ title, subtitle, items, className = "" }) {
  return (
    <section className={`recommended-section ${className}`}>
      <p className="section-eyebrow">{subtitle}</p>
      <h2>{title}</h2>

      <div className="recommended-dishes">
        {items.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: "trending", label: "Trending on Today's Menu" },
    { id: "offers", label: "Special Offers of the Day" },
    { id: "recommended", label: "Recommended for You" },
  ];

  const sectionContent = {
    trending: {
      title: "Popular Dishes Right Now",
      subtitle: "Fresh from the grill",
      items: dishes.trending,
    },
    offers: {
      title: "Todays Popular Dishes",
      subtitle: "More flavour, better value",
      items: dishes.offers,
      className: "offers-section",
    },
    recommended: {
      title: "Find Something New to Try",
      subtitle: "Handpicked for you",
      description: "Discover the signature flavours of Ember House.",
      items: dishes.recommended,
    },
  };

  return (
    <main className="home-page">
      <section className="hero-section">
        <p className="section-eyebrow">Fire. Flavour. Tradition.</p>
        <h1>Ember House</h1>
        <p>
          Cooked over real fire. No smoke, no shortcuts. Every dish passes
          through hardwood coals before it reaches your table.
        </p>
      </section>

      <section className="story-section">
        <p className="section-eyebrow">Our Story</p>
        <h2>Passion Meets the Flame</h2>
        <p>
          Our head chef, Maradori Ostuken, has spent over 15 years mastering
          wood-fire cooking across Kenya and Africa. At Ember House, we bring
          together carefully sourced ingredients, bold flavours and the art of
          cooking over real fire.
        </p>
        <h3>No shortcuts. Just fire.</h3>
      </section>

      <section className="features-section">
        <h2>What Makes Us Different?</h2>

        <div className="features-grid">
          <article className="feature-card">
            <span aria-hidden="true">🔥</span>
            <h3>12-Hour Smoke</h3>
            <p>
              Selected cuts are slowly smoked for deep flavour, patience and
              tenderness.
            </p>
          </article>

          <article className="feature-card">
            <span aria-hidden="true">🥩</span>
            <h3>Quality Ingredients</h3>
            <p>
              We work with trusted suppliers to bring fresh, carefully selected
              ingredients to your table.
            </p>
          </article>

          <article className="feature-card">
            <span aria-hidden="true">🍯</span>
            <h3>House-Made Flavours</h3>
            <p>
              Our sauces and sides bring a distinctive Ember House touch to
              every meal.
            </p>
          </article>
        </div>
      </section>

      <section className="menu-preview">
        <p className="section-eyebrow">Straight from the grill</p>
        <h2>Explore Our Flavours</h2>

        <div className="image-container">
          <div className="track">
            {[image_1, image_2, image_3, image_4, image_5].map(
              (image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Ember House dish ${index + 1}`}
                  loading="lazy"
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="daily-menu">
        <p className="section-eyebrow">Tonight's board specials</p>
        <h2>Find Your Next Favourite</h2>
        <p>Explore today's trending dishes, deals and chef picks.</p>

        <div className="tnn-container">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`tnn-button ${
                activeSection === section.id ? "active" : ""
              }`}
              aria-pressed={activeSection === section.id}
              onClick={() =>
                setActiveSection((current) =>
                  current === section.id ? null : section.id,
                )
              }
            >
              {section.label}
            </button>
          ))}
        </div>
      </section>

      {activeSection && (
        <>
          <DishSection {...sectionContent[activeSection]} />
        </>
      )}
    </main>
  );
}

export default Home;
