import { Link } from "react-router-dom";
import { useState } from "react"

interface PostListProps {
  Navigation?: Boolean
}
type TabType = 'all' | 'my'

export default function PostList({ Navigation = true }: PostListProps) {
  const [activeTap, setActiveTap] = useState<TabType>('all')

  return (
    <>
      {Navigation &&
        <div className="post__navigations">
          <button type="button" onClick={() => setActiveTap('all')} className={activeTap === "all" ? " btn__highlight btn__sm" : 'btn__sm'} >전체</button>
          <button type="button" onClick={() => setActiveTap('my')} className={activeTap === "my" ? " btn__highlight btn__sm" : 'btn__sm'}>내가 쓴 글</button>
          {/* <div role="tab" onClick={() =>setActiveTap('all')} className={activeTap === "all" ? " post__navigation--active" : ''} >전체</div>
          <div role="tab" onClick={() =>setActiveTap('my')} className={activeTap === "my" ? " post__navigation--active" : ''}>내가 쓴 글</div> */}
        </div>
      }
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">이름{index}</div>
                <div className="post__date">날짜 2023.11.24</div>
              </div>
              <div className="post__title">타이틀{index}</div>
              <div className="post__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
              {/* <div className="post__utils-box">
                <button className="btn__sm">수정</button>
                <button className="btn__sm">삭제</button>
              </div> */}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}