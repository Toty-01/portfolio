import WorkSlider from "../../components/WorkSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"

import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Projets = () => {
  return( 
  <div className="h-full bg-primary/30 flex ragout lolo">
    <Circles />
    <div className="container mx-auto lolo ">
      <div className="flex flex-col xl:flex-row gap-x-8  glouglou">
        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-12"
          >
            Mes Projets <span className="text-accent">.</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >
            Création de sites vitrines à des sites e-commerce jusqu&#39;au logiciel de géstion d&#39;entreprise, Mes projets ont été divers variés en terme de technologie et de demande client.
          </motion.p>
        </div>

        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%]"
        >
          {/* slider */}
          <WorkSlider className="" />
        </motion.div>

      </div>
    </div>
    <Bulb />
  </div>
)};

export default Projets;
