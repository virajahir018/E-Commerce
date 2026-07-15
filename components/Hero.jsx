export default function Hero() {
  return (
    <section className="w-full h-[500px] bg-gradient-to-r from-pink-100 to-orange-100 flex items-center justify-between px-20">
      
      <div className="max-w-xl">
        <p className="text-pink-600 font-semibold uppercase">
          New Collection
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Fashion For Everyone
        </h1>

        <p className="text-gray-600 mt-5 text-lg">
          Discover trending styles from top brands with exciting offers.
        </p>

        <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition">
          Shop Now
        </button>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
          alt="Fashion"
          className="w-[500] rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
}