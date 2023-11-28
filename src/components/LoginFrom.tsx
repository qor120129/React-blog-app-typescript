import { Link } from "react-router-dom";


export default function LoginFrom() {
  return (
    <>
      <form action="/post" method="POST" className="form login__form">
        <div className='login__title'>로그인</div>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="text" name="password" id="password" required />
        </div>
        <div className="form__btns">
          <input type="submit" value="로그인" className="form__btn form__btn-submit"/>
          {/* <Link to="/signup"className="form__btn form__btn-border">회원가입</Link> */}
          <div className="form__block">
          계정이 없으신가요?
          <Link to="/signup" className="form__link"> 회원가입하기</Link>
        </div>
        </div>
      </form>
    </>
  )
}