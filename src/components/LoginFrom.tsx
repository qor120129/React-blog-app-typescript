import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginFrom() {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const auth = getAuth(app)
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('로그인에 성공했습니다.', {
        position: "top-center",
      });
    } catch (error: any) {
      toast.error(error?.message, {
        position: "top-center",
      });
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log(name, value)
    if (name === 'email') {
      setEmail(value)
      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      if (!value.match(emailRegex)) {
        setError('이메일 형식이 올바르지 않습니다.')
      } else {
        setError('')
      }
    }

    if (name === 'password') {
      setPassword(value)
      
      if (value.length < 8) {
        setError('비밀번호는 8자리 이상으로 입력해주세요')
      }else {
      setError('')
    }
    } 
  }

  return (
    <>
      <form onSubmit={onSubmit} method="POST" className="form login__form">
        <div className='login__title'>로그인</div>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" onChange={onChange} value={email} required />
        </div>
        {error && error.length > 0 && !!error.match('이메일') &&
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        }
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" id="password" onChange={onChange} value={password} required />
        </div>
        {error && error.length > 0 && !!error.match('비밀번호') &&
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        }
          <button type="submit"  className="btn__highlight" disabled={error.length > 0} >로그인</button>
          <div className="form__block">
            계정이 없으신가요?
            <Link to="/signup" className="form__link"> 회원가입하기</Link>
          </div>
        {/* <div className="form__btns">
        </div> */}
      </form>
    </>
  )
}