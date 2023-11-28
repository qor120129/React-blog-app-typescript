import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <form action="/post" method="POST" className="form login__form">
        <div className='login__title'>회원가입</div>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="text" name="password" id="password" required />
        </div>
        <div className="form__block">
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <input type="text" name="password_confirm" id="password_confirm" required />
        </div>
        <div className="form__btns">
          <input type="submit" value="회원가입" className="form__btn form__btn-submit" />
        </div>
        <div className="form__block">
          계정이 있으신가요?
          <Link to="/login" className="form__link"> 로그인하기</Link>
        </div>
      </form>
    </>
  )
}