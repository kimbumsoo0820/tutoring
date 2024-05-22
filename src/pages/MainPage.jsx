import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to="/myPage">마이페이지로</Link><br/>
        <Link to="/about">about페이지</Link>
      </div>
    </>
  )
}

export default Home