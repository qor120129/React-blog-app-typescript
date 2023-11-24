import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import PostListPage from '../pages/posts';
import PostDetailPage from '../pages/posts/detail';
import PostNewPage from '../pages/posts/new';
import PostEditPage from '../pages/posts/edit';
import ProfilePage from '../pages/profile';
import LogInPage from '../pages/login';
import SignUpPage from '../pages/signup';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<PostListPage/>} />
        <Route path='/posts/:id' element={<PostDetailPage/>} />
        <Route path='/posts/new' element={<PostNewPage/>} />
        <Route path='/posts/edit/:id' element={<PostEditPage/>} />
        <Route path='/Profile' element={<ProfilePage/>} />
        <Route path='/login' element={<LogInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

