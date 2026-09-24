// import { galleryItems } from "../data/gallery";

// function Gallery() {
//   return (
//     <section className="page-section">
//       <div className="container">
//         <div className="page-header">
//           <p className="section-label">OUR WORK</p>
//           <h1>Project Gallery</h1>
//         </div>

//         <div className="gallery-page-grid">
//           {galleryItems.map((item) => (
//             <div className="gallery-page-card" key={item.title}>
//               <img src={item.image} alt={item.title} />

//               <div className="gallery-page-label">
//                 {item.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Gallery;

import { useState } from "react";
import { galleryItems } from "../data/gallery";

const categories = [
  "All",
  "Aluminium Work",
  "Glass Work",
  "Furniture Work",
  "Ongoing Projects",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <p className="section-label">OUR WORK</p>
          <h1>Work in progress. Results that last.</h1>

          <p className="mt-5 max-w-2xl leading-7 text-[#66716b]">
            Rajsya Aluminium & Furniture Works ke ongoing aur completed projects
            dekhiye. Aluminium fabrication, glass work, furniture aur interior
            projects ki real photos yahan regularly update ki jaati hain.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#2d4037] bg-[#2d4037] text-white"
                    : "border-[#dfe3dc] bg-white text-[#2d4037] hover:border-[#bf754b] hover:text-[#bf754b]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-5 text-sm text-[#66716b]">
          Showing {filteredItems.length} project photos
        </div>

        <div className="gallery-page-grid">
          {filteredItems.map((item) => (
            <article className="gallery-page-card group" key={item.id}>
              <img
                src={item.image}
                alt={`${item.title} - Rajsya Aluminium and Furniture Works`}
                loading="lazy"
              />

              <div className="gallery-page-label">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <strong className="block text-sm">{item.title}</strong>
                    <small className="mt-1 block text-white/75">
                      {item.category}
                    </small>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      item.status === "Ongoing"
                        ? "bg-[#bf754b] text-white"
                        : "bg-white/90 text-[#2d4037]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="rounded-2xl border border-[#dfe3dc] bg-[#f6f2eb] p-8 text-center text-[#66716b]">
            Is category mein abhi koi photo available nahi hai.
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;