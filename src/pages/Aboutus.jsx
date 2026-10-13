function Aboutus() {
  return (
    <>
      <div className="about-page">
        <h1 style={{ textAlign: "center" }}>A Little About Us</h1>
        <p>
          Ember House is a restaurant that specializes in wood-fire cooking. Our
          head chef, Maradori Ostuken, has trained in coal-fired kitchens across
          Kenya and the rest of Africa. With over 15 years of experience, he is
          a master of the art of wood-fire cooking. Ember House is the only
          kitchen in Kenya that has the skills and knowledge to cook the finest
          food on the planet.
        </p>
        <p>
          At Ember House, we believe in cooking over real fire. We don't use
          smoke or shortcuts - every dish passes through hardwood coals before
          it reaches your table. If you want to know the secret to our delicious
          food, just ask the chef!
        </p>
        <p>
          Our story is one of passion and dedication to the art of wood-fire
          cooking. We are committed to providing our customers with the best
          dining experience possible, and we look forward to welcoming you to
          Ember House.
        </p>
        <img
          src=""
          alt="Ember House"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=6INqbhpW8H6v6Cwr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
export default Aboutus;
