import { Link } from "react-router-dom";
import logo from '../logo.svg';

export default function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/" className="header__logo">
          <img src={logo} className="App-logo" alt="logo" />
          <div>React Blog</div>
        </Link>
        <div className="header__menu">
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </div>
    </header>
  )
}
