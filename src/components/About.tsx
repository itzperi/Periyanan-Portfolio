import { motion } from "framer-motion";
import { styles } from "../styles";
import { ServiceCard } from "./cards";
import { textVariant, fadeIn } from "../utils/motion";

const services = [
  {
    title: "Web Developer",
    icon: "🌐",
  },
  {
    title: "React Developer",
    icon: "⚛️",
  },
  {
    title: "Backend Developer",
    icon: "🔧",
  },
  {
    title: "Content Creator",
    icon: "📱",
  },
];

const About = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a first-year BTech CSE student at Amrita Vishwa Vidyapeetham with a passion for software development. Currently working as an SDE Intern, I have experience in TypeScript, JavaScript, and modern frameworks like React and Next.js. I love creating efficient, user-friendly solutions and am always eager to learn new technologies. Let's collaborate and bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};