export default function Categories() {
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Beauty",
    "Home",
    "Footwear",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-5">

      <h2 className="text-4xl font-bold text-center mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((category) => (
          <div
            key={category}
            className="bg-pink-100 h-40 rounded-xl flex items-center justify-center text-xl font-semibold cursor-pointer hover:bg-pink-500 hover:text-white transition duration-300"
          >
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}