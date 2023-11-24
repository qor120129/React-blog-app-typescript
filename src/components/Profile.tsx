import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile__box">
      <div className="profile__user">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">qor120129@naver.com</div>
          <div className="profile__name">백승진</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  )
}