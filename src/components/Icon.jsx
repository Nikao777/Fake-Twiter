import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon({icon, text}) {
    return(
        <div className="flex items-center rounded-full cursor-pointer hover:bg-twitter-dark-gray transiion duration-200 mb-4 p-2">
            <FontAwesomeIcon icon={icon}className="text-2xl mr-4"/>

            <p className="text-xl hidden xl:inline">{text}</p>
        </div>
    )
}