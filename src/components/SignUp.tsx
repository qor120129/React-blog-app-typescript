import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "firebaseApp"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


export default function SignUp() {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     //React.FormEvent<HTMLFormElement>는 타입스크립트
    e.preventDefault()
    try {
      const auth = getAuth(app)
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success('회원가입에 성공했습니다.', {
        position: "top-center",
        });
    } catch (error: any) {
      toast.error(error?.message);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

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
      } else if (passwordConfirm.length > 0 && value !== passwordConfirm) {
        setError('비밀번호와 확인 값이 다릅니다. 다시 확인해주세요')
      } else {
        setError('')
      }
    }

    if (name === 'password_confirm') {
      setPasswordConfirm(value)
      if (value.length < 8) {
        setError('비밀번호는 8자리 이상으로 입력해주세요')
      } else if (value !== password) {
        setError('비밀번호와 값이 다릅니다. 다시 확인해주세요')
      } else {
        setError('')
      }
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} method="POST" className="form login__form">
        <div className='login__title'>회원가입</div>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" onChange={onChange} required />
        </div>
        {error && error.length > 0 && !!error.match('이메일') &&
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        }
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" id="password" onChange={onChange} required />
        </div>
        {error && error.length > 0 && !!error.match('비밀번호와 확인 값이') &&
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        }
        <div className="form__block">
          <label htmlFor="password_confirm">비밀번호 확인</label>
          <input type="password" name="password_confirm" id="password_confirm" onChange={onChange} required />
        </div>
        {error && error.length > 0 && !!error.match('비밀번호와 값이') &&
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        }
        <div className="form__btns">
          <input type="submit" value="회원가입" className="form__btn form__btn-submit" disabled={error.length > 0} />
        </div>
        <div className="form__block">
          계정이 있으신가요?
          <Link to="/login" className="form__link"> 로그인하기</Link>
        </div>
      </form>
    </>
  )
}