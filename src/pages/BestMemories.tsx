import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
// Public URLs for gallery images (hosted by the user)
const GALLERY_1_URL =
  "https://raw.githubusercontent.com/ninad5271/rivuu-s-romantic-reverie/main/src/assets/IMG_0571.jpg";
const GALLERY_2_URL =
  "https://raw.githubusercontent.com/ninad5271/rivuu-s-romantic-reverie/main/src/assets/IMG_1825.jpg";
// Public URLs for the remaining gallery images (hosted by the user)
const GALLERY_3_URL =
  "https://raw.githubusercontent.com/ninad5271/rivuu-s-romantic-reverie/main/src/assets/IMG_1511.jpg";
const GALLERY_4_URL =
  "https://raw.githubusercontent.com/ninad5271/rivuu-s-romantic-reverie/main/src/assets/IMG_0691.jpg";

// Public URL for the hero/background image used on this page (updated per request)
const HERO_BG_URL =
  "https://raw.githubusercontent.com/ninad5271/rivuu-s-romantic-reverie/main/src/assets/IMG_1492.jpg";

const memories = [
  {
    title: "Badminton – Ek Prem Katha 🏸",
    text: "From coordinating the Depstar CSE team… to finding the most beautiful person in the world at the sports complex — who knew badminton would turn into our love story? ✨💞",
    image: GALLERY_1_URL,
  },
  {
    title: "Swings & Garden Memories🌸",
    text: "I’ll always take you to Vadtal Garden, where we’ll play on the swings like kids and laugh like we own the whole world. 💕",
    image: GALLERY_2_URL,
  },
  {
    title: "Steam Momos😋❤️",
    text: "Steam momos will always taste better — especially when I’m stealing bites from your hands. 🥰✨",
    image: GALLERY_3_URL,
  },
  {
    title: "Photography Skills Upgrade 📷😉",
    text: "I may say I’m improving my photography skills… but honestly, it’s easy when my favorite model is you. 💕✨",
    image: GALLERY_4_URL,
  },
  {
    title: "Chatpati & Valetva Panipuri 🌮😋",
    text: "Panipuri only tastes perfect when I’m eating it with you — because the real spice is your company. 😉❤️",
    image: HERO_BG_URL,
  },
];

const BestMemories = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(340 50% 92%), hsl(280 30% 90%), hsl(340 40% 95%))",
      }}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <BackButton />

      {/* Blurred lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(340 80% 80% / 0.2), transparent)`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl sm:text-6xl font-romantic text-primary text-center glow-text mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Best Memories 💕
        </motion.h1>

        {/* Timeline with photos */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform sm:-translate-x-1/2" />

          {memories.map((memory, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className="relative mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary glow-box transform -translate-x-1/2 mt-8 z-10" />

                <div className={`ml-12 sm:ml-0 sm:flex items-center gap-6 ${isEven ? "" : "sm:flex-row-reverse"}`}>
                  {/* Photo */}
                  <motion.div
                    className={`sm:w-5/12 mb-4 sm:mb-0 ${isEven ? "sm:pr-8" : "sm:pl-8"}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="rounded-2xl overflow-hidden glass-card p-2"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    >
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-48 sm:h-56 object-cover rounded-xl"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Text */}
                  <div className={`sm:w-5/12 ${isEven ? "sm:pl-8" : "sm:pr-8"}`}>
                    <div className="glass-card p-6 rounded-2xl">
                      <h3 className="text-2xl font-romantic text-primary mb-3">{memory.title}</h3>
                      <p className="font-body text-foreground/80 leading-relaxed text-sm">
                        {memory.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="btn-romantic text-lg font-romantic"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/question")}
          >
            One More Question, Rivuu… 💍
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BestMemories;
