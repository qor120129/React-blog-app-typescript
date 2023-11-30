
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";


export default function Profile() {

  const auth = getAuth(app);

  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className="profile__box">
      <div className="profile__user">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">{auth.currentUser?.email}</div>
          <div className="profile__name">{auth.currentUser?.displayName || '사용자'}</div>
        </div>
      </div>
      <button type="button" className="btn__sm btn__highlight" onClick={onSignOut} >
        로그아웃
      </button>
    </div>
  )
}
