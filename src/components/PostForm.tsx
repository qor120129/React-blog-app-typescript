import { Link } from "react-router-dom";

export default function PostForm() {
  return (
    <>
      <form action="/post" method="POST" className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className="form__block">
          <label htmlFor="summary">요약</label>
          <input type="text" name="summary" id="summary" required />
        </div>
        <div className="form__block">
          <label htmlFor="content">내용</label>
          <textarea name="content" id="content" rows={25} required ></textarea>
        </div>
        <div className="form__btns">
          <Link to="/" ><button type="button">취소</button></Link>
          <button type="submit" className="btn__highlight">제출</button>
        </div>
      </form>
    </>
  )
}