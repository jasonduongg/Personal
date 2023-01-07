import React from 'react';
import {motion} from "framer-motion"
class CardComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            cardTitle: "WHO I AM",
            cardTitleVariants: {
                hidden: {
                    opacity: 1 
                },
                visible: {
                    opacity: 1,
                    transition: {
                    delay: 0.5,
                    staggerChildren: 0.08
                    }
                }
            },
            cardTitle_CharVariants:{
                hidden: {
                    opacity: 0,
                    x: 0,
                },
                visible: {
                    opacity: 1,
                    x: 200,
                    transition: {
                        duration: 2,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    },
                }
            },
        }
    }
    render() {
        var {cardTitle, cardTitleVariants, cardTitle_CharVariants} = this.state
        return (
           <div>
            <motion.div  
                class = "box"
                animate={{ y:-40}}
                transition={{
                from: 0,
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 3
                }}
                whileHover="hover"
            >
                 <div class = "box_title_container">
               <motion.h3
                 class = "box_title"
                 variants={cardTitleVariants}
                 initial="hidden"
                 animate="visible"
               >
   
                 {cardTitle.split("").map((char, index) => {
                   return (
                     <motion.span
                     key=  {char + " - " + index}
                     variants = {cardTitle_CharVariants}
                     >
                       {char}
                     </motion.span>
                   )
                 })}
                 
               </motion.h3>
   
       
             </div>   
             <div class = "box_text_container">
               <p>
               I am a second year student at the University of California, Berkeley, studying Computer Science.
               </p>
               <p>
               I am passionate about frontend web development, but am open to considering all types of positions.
               </p>
             </div>
   
                

            </motion.div>
           </div>

        )
    }
}
export default CardComponent