import { Link } from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css'
const Home = () => {

  return (
    <>
      <div>Home</div>
      <Link to="/myPage">마이페이지로</Link>
    </>
  )
}

export default Home