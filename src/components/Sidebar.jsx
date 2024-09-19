import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './icon'
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const icos = [
    { i: faHome, text: "Home" },
    { i: faHashtag, text: "Explore" },
    { i: faBell, text: "Notifications" },
    { i: faEnvelope, text: "Messages" },
    { i: faBookmark, text: "BookMarks" },
    { i: faUserFriends, text: "Communities" },
    { i: faTwitter, text: "Premium" },
    { i: faUser, text: "Profile" },
    { i: faEllipsisH, text: "More" },

]
export default function Sidebar () {
    return (
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen border-r border-gray-700">
            <FontAwesomeIcon icon={faTwitter} className='text-twitter-blue m-4 text-3xl' />
            <nav>

                {
                    icos.map((ico) => {
                        return (
                            <Icon
                                icon={ico.i}
                                text={ico.text} 
                            />
                        )
                    })
                }
            </nav>
            <button className='bg-blue-500 text-twitter-extra-ligh-gray rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer hover:bg-twitter-blue transition duration-200'>
                <FontAwesomeIcon icon={faFeatherAlt} className='text-twitter-extra-ligh-gray text-3xl inline xl:hidden'/>
                <p className='hidden xl:inline'>Tweet</p>
            </button>
        </div>
    )
}