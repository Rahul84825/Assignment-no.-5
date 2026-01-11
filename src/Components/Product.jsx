import useFetch from "../Hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    // yet have to add the url for api; 
  );

  const items = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 w-full bg-black z-50">
        <h1 className="text-white text-3xl font-semibold text-center py-4">
          Photos
        </h1>
      </div>

      <div className="px-10 pt-24 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-500 p-4 text-center"
            >
              <div className="w-full aspect-square mb-3 bg-gray-700"></div>

              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
