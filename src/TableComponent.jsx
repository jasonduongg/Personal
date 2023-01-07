import React,  { useRef, useState } from 'react';

import { Canvas } from 'react-three-fiber';
import { motion } from "framer-motion-3d"

import './TableComponent.css';



class TableComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            Top: this.Top.bind(this)
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
              rotation={[-0.05, -0.15, 0]}
              >
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

    render() {
        var { Top } = this.state
        return (
            <Canvas orthographic camera={{ position: [5, 5, 5], zoom: 50, up: [0, 0 ,0]}}>
                <ambientLight intensity={0.7} />
                <spotLight position={[5, 50, -2.5]} angle={0.3} penumbra={0.9} />
                <Top position={[0, -0.5, -5]} />
            </Canvas>
        )
    }
}
export default TableComponent