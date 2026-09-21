import { Link } from "react-router-dom"

function GanpatiCard({ id, name, city, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">

      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {city}
        </p>

        <Link
          to={`/ganpati/${id}`}
          className="inline-block text-orange-500 font-medium mt-4 hover:text-orange-600"
        >
          View Details →
        </Link>

      </div>

    </div>
  )
}

export default GanpatiCard