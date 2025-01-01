export const variants = {
    headerEffect: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: 0.8 }
        }
    },
    textEffect: {
        initial: { opacity: 0, y: -50 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
            }
        }
    },
    textEffectBg: {
        initial: { backgroundSize: "0% 100%" }, // Background dimulai dari sisi kiri
        animate: {
            backgroundSize: "100% 100%", // Meluas ke kanan
            transition: {
                duration: 1.5, // Durasi animasi
                ease: "easeIn",
            }        
        }
    },
}