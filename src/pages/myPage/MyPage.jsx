import { useLoaderData } from "react-router-dom";



const MyPage = () => {
const user = useLoaderData()[0]
  return (
    <div>
      <div>MyPage</div>
      <h1>사용자 이름 : {user.name}</h1>
      <h2>사용자 나이 : {user.age}</h2>
      <h3>사용자 주소 : {user.address}</h3>
    </div>
  )
}

export default MyPage