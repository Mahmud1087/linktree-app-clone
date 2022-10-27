import profile_img from "../assets/profile__img.png"

export default function Header() {
    return (
        <div className="header">
            <img src={profile_img} alt="" id="profile_img" />
        </div>
    )
}