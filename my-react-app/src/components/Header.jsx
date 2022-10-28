import profile_img from "../assets/profile__img.png"
import share_mobile from "../assets/mobile_Avatar share button.png"
import share_large from "../assets/_Avatar share button.png"

export default function Header() {
    return (
        <div className="header">
            <img src={profile_img} alt="profile picture" id="profile__img" className="profile_img" />
            <h4 id="twitter">Abdulazeez Mahmud</h4>
            <h4 className="slack" id="slack">Enesi</h4>
            <img src={share_mobile} alt="Mobile share button" className="share_mobile" />
            <img src={share_large} alt="Medium and large screens share button" className="share_large" />
        </div>
    )
}