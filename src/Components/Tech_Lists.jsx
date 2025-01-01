import FramerIcon from '../assets/framer.svg'
import MongoIcon from '../assets/mongo.svg'
import ReactIcon from '../assets/react.svg'
import TailwindIcon from '../assets/tailwindcss.svg'
import TsIcon from '../assets/typescript.svg'

const TechLists = () => {
    return (
        <div className="mt-12">
            <span className="block">Current tech stack:</span>
            <div className="flex gap-x-4 mt-2">
                <img width={20} src={FramerIcon} alt="" />
                <img width={20} src={ReactIcon} alt="" />
                <img width={20} src={TailwindIcon} alt="" />
                <img width={20} src={TsIcon} alt="" />
                <img width={25} src={MongoIcon} alt="" />
            </div>
        </div>
    )
}

export default TechLists