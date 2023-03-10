import React,  { useRef, useState } from 'react';

import { Canvas } from 'react-three-fiber';
import { motion } from "framer-motion-3d"
import { Text } from '@react-three/drei'
import fonts from "./components/fonts.js"





class TableComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            Top: this.Top.bind(this),
            Book: this.Book.bind(this)
        }
    }

    Top = (props) =>
    {
        const mesh = useRef()

        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }

        return (
            <mesh
              {...props}
              ref={mesh}
              >
                <axesHelper args={[50]} />
                <boxBufferGeometry args={[12.5, 0.5, 5]} />
                <motion.meshStandardMaterial 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    color={'#ccccff'} 
                    transition={{
                        duration: 1
                    }}
                    />
            </mesh>
          )
    }

    Book = (props) =>
    {

        const mesh = useRef()
        const [isHovered, setHovered] = useState(false)

        const variants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        }

        return (
            <motion.mesh
                {...props}
                ref={mesh}
                
                onClick={e => {
                    e.stopPropagation()
                    console.log(props.message)
                }}
                // whileHover={{ 
                //     y: props.position[1] + 1,
                //     z: props.position[2] + 1
                // }}
                onPointerEnter={e => {
                    e.stopPropagation()
                    setHovered(true)
                    console.log(props.message + " true")
                }}
                onPointerLeave={e => {
                    e.stopPropagation()
                    setHovered(false)
                    console.log(props.message + " false")
                }}
                animate={{ y: isHovered ? props.position[1] + 1 : props.position[1]}}
                variants={variants}
                transition = {{
                    duration: 0.75
                }}
                >
                <boxBufferGeometry 
                     {...props}
                    args={[1.5, 5, 4]} />
                    <group 
                        {...props}
                        rotation={[0, 0, Math.PI * 0.5]} 
                        position = {[0.25, props.messageOffet, 2.5]} >
                            <Text 
                            color="black" 
                            anchorX="center" 
                            anchorY="middle"
                            rotateZ={0.5}
                            fontSize={props.size}
                            font={fonts.Trocchi}
                            >
                        {props.message}
                            </Text>
                    </group>
                <motion.meshStandardMaterial 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    color={'#ccccff'} 
                    transition={{
                        duration: 1
                    }}
                />
            </motion.mesh>
          )
    }

    render() {
        var { Top , Book } = this.state
        return (
            <Canvas orthographic camera={{ position: [5, 5, 5], zoom: 50, up: [0, 0 ,0]}} >
                <group rotation={[-0.05, -0.15, 0]}>
                <ambientLight intensity={0.7} />
                <spotLight position={[5, 50, -2.5]} angle={0.3} penumbra={0.9} />
                <Top position={[0, -0.5, -5]} />
                <Book position={[-5, 2.25, -5.5]} message={"PROJECTS"} messageOffet = {0.1} size = {0.75} />
                <Book position={[-3.25, 2.25, -5.5]} message={"CURRICULUM VITAE"} messageOffet = {0.1} size = {0.4} />
                <Book position={[-1.5, 2.25, -5.5]} message={"CLASSES"} messageOffet = {0.1} size = {0.8} />
                <axesHelper args={[50]} />
                </group>
            </Canvas>
        )
    }
}
export default TableComponent