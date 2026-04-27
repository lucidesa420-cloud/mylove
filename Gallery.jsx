"import React from "react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const photos = [
  {
    url: "https://images.unsplash.com/photo-1749741993874-bc375dbcaa17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxyb21hbnRpYyUyMGNvdXBsZSUyMGhvbGRpbmclMjBoYW5kcyUyMHN1bnNldCUyMGJlYWNofGVufDB8fHx8MTc3NzI4MTczM3ww&ixlib=rb-4.1.0&q=85",
    rotate: "-3deg",
    caption: "us, walking",
  },
  {
    url: "https://images.pexels.com/photos/1439251/pexels-photo-1439251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rotate: "2deg",
    caption: "soft sky",
  },
  {
    url: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=900&q=80",
    rotate: "-2deg",
    caption: "you, laughing",
  },
  {
    url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=80",
    rotate: "3deg",
    caption: "a little forever",
  },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-6 md:px-12"
      data-testid="gallery-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center mb-12"
        >
          <span className="ornament-line font-serif italic text-xs text-ink-soft">
            our little gallery
          </span>
          <p className="font-serif italic text-ink-soft mt-4 max-w-md mx-auto text-sm">
            (placeholder polaroids — swap with our real ones whenever you want)
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease, delay: i * 0.08 }}
              whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
              className="bg-sky-ivory p-3 pb-10 shadow-[0_18px_40px_-18px_rgba(30,41,59,0.45)] grain relative"
              data-testid={`gallery-photo-${i}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.url}
                  alt={p.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-2xl text-sky-deep absolute bottom-1 left-0 right-0 text-center">
                {p.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};