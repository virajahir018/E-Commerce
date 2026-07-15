export default function ProductDetails({ params }) {

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold">
        Product ID : {params.id}
      </h1>

    </div>
  );
}