import { motion } from "framer-motion"
import { useApp } from "../contexts/App_Provider"
import { variants } from "../utils/transitions"
import TextEffects from "../Components/Text_Effects"
import TechLists from "../Components/Tech_Lists"

export default function Home() {
    const { state, dispatch } = useApp()
    return (
        <> 
            <div className="w-36 h-32 top-0 right-0 rounded-[50%] blur-[35px] bg-300 absolute"></div>

            <motion.header
                variants={variants.headerEffect}
                initial='initial'
                animate='animate'
                className="mt-8 md:mt-20 flex flex-col md:flex-row"
            >
                <div className="flex-1">
                    <div className="text-2xl font-bold sm:text-3xl md:text-4xl">
                        <span className="mr-2">I'm</span>
                        <motion.span
                            style={{
                                backgroundSize: "0% 100%",
                            }}
                            variants={variants.textEffectBg}
                            initial="initial"
                            animate="animate"
                            className="bg-gradient-to-r from-100 to-200 py-1 px-2 rounded-sm bg-no-repeat"
                        >
                            Ridho Irvan
                        </motion.span>
                    </div>
                    <TextEffects/>
                    <span className="block text-secondary">Who loves modern and intuitive design</span>
                    <div className="flex gap-x-6 mt-12">
                        <button className="py-1 px-2 text-secondary bg-300 border-solid border-100 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 sm:py-2 sm:px-6">Github</button>
                        <button className="border-solid text-300 border-300 border-2 py-1 px-2 rounded-lg hover:bg-300 hover:shadow-md hover:scale-105 hover:text-secondary transition-all duration-300 sm:py-2 sm:px-6">Resume</button>
                    </div>
                    <TechLists />
                </div>
                <div className="hidden lg:flex justify-center items-center flex-1">
                    <img 
                        src="/ridho.png" 
                        alt="profile"
                        width={320}
                        className="aspect-square object-cover rounded-md shadow-md"
                    />
                </div>
            </motion.header>
            <main>
                
            </main>
        </>
    )
}