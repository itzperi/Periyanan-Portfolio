import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <div className="text-[40px]">{icon}</div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;