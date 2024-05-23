import { useLoaderData } from "react-router-dom";
import NormalInput from "../../components/inputs/NormalInput";
import useInput from "../../hooks/input/useInput";
import apiCaller from "../../api/apiCaller";
import { useState } from "react";
const MyPage = () => {
  const user = useLoaderData()
  const [userList, setUserList] = useState(user);

  const nameInput = useInput('')
  const ageInput = useInput('')
  const addressInput = useInput('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userName = e.target.name.value
    const userAge =  e.target.age.value
    const userAddress =  e.target.address.value
    const res = await apiCaller.setUserData({name:userName, age:userAge, address:userAddress})
    if(res === true) {
      setUserList([...userList, { name: userName, age: userAge, address: userAddress }])
    }
  }

  return (
    <div>
      <div>MyPage</div>
      <form onSubmit={handleSubmit}>
        <NormalInput title="이름" name="name" value={nameInput.value} onChange={nameInput.handleChange}/>
        <NormalInput title="나이" name="age" value={ageInput.value} onChange={ageInput.handleChange}/>
        <NormalInput title="주소" name="address" value={addressInput.value} onChange={addressInput.handleChange}/>
        <button>수정하기</button>
      </form>
      {userList.map(({name,age,address}) => {
        return (
          <div key={name}>
            <h1>사용자 이름 : {name}</h1>
            <h2>사용자 나이 : {age}</h2>
            <h3>사용자 주소 : {address}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default MyPage