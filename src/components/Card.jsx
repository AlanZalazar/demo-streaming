import { useState, useRef, useEffect } from "react";

export default function Card({ title, imageUrl, description, releaseYear }) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Cerrar popup al presionar Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Bloquear scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Restaurar scroll
    };
  }, [showPopup]);

  // Cerrar al hacer clic fuera del popup
  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  return (
    <>
      {/* Tarjeta principal */}
      <div
        className="relative py-10 rounded-lg shadow-md hover:opacity-50 hover_border-2 hover:border-white hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
        onClick={() => setShowPopup(true)}
      >
        {/* Imagen con efecto hover */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white text-lg font-bold">{title}</h3>
          </div>
        </div>

        {/* Título debajo de la imagen */}
        <h3 className="mt-2 px-2 text-lg font-semibold line-clamp-1">
          {title}
        </h3>
      </div>

      {/* Popup modal */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000] p-4 animate-fadeIn"
          onClick={handleClickOutside}
        >
          <div
            ref={popupRef}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
          >
            {/* Imagen superior */}
            <div className="relative">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover"
              />
              {/* Botón de cerrar */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Contenido del popup */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {releaseYear}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{description}</p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
