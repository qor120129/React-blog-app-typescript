import './App.css';
import { useEffect, useState } from 'react';
import Router from 'components/Router'
import { app } from 'firebaseApp'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

function App() {
  const auth = getAuth(app)
// auth 체크전 initialize 전에 loader 보여주기
  const [init, setInit] = useState<boolean>(false)

  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth.currentUser)


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setInit(true);
    });
  })
  return (
    <div>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}></Router>: <Loader />}
    </div>
  )
}

export default App;

