import { useEffect, useState } from "react"
import { useApp } from "../contexts/App_Provider"
import { variants } from "../utils/transitions"
import { motion } from "framer-motion"

const TextEffects = () => {
    const { state, dispatch } = useApp()
    const texts = ['Fullstack Developer', 'Tech Enthusiast', 'Javascript Lover']

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            dispatch({ type: 'TYPE_EFFECT', payload: texts[index] })
            index = (index + 1) % texts.length
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            key={state.textEffects}
            variants={variants.textEffect}
            initial='initial'
            animate='animate'   
            className="mt-8"     
        >
            <span className="text-lg font-bold">{state.textEffects}</span>
        </motion.div>
    )
}

export default TextEffects