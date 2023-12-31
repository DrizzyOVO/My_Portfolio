import styles from "./style.module.scss";  
import {motion, useInView} from "framer-motion" 
import { slideUp, opacity } from './animation'; 
import { useRef } from "react";
import Button from "../common/Button"; 

export default function Index(){

    const container = useRef(null); 
    const isInView = useInView(container); 
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge." 

    return (
        <div ref={container} className={styles.description}>  
            <div className={styles.body}> 
                <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span custom={index} variants={slideUp} initial="initial" animate={isInView ? "open" : "closed"}>{word}</motion.span></span>  
                        })
                    }
                </p>
                <motion.p variants={opacity} initial="initial" animate={isInView ? "open" : "closed"}>
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world. 
                </motion.p> 
                <div data-scroll data-scroll-speed={0.1}>
                    <Button className={styles.button}> 
                        <p>About Me</p> 
                    </Button>
                </div>
            </div>
        </div>
    )

}
