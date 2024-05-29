import NormalInput from "../../components/inputs/NormalInput";
import useInput from "../../hooks/input/useInput";
import apiCaller from "../../api/apiCaller";
import {  useLayoutEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserData, addNewUserData, rollBackUserData} from "../../redux/actions/userAction"


const MyPage = () => {
  const dispatch = useDispatch();
  const userSelectorList = useSelector((state)=> state.user)

  useLayoutEffect(()=> {
    dispatch(fetchUserData())
  },[])
  
  const nameInput = useInput('')
  const ageInput = useInput('')
  const addressInput = useInput('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    const userName = e.target.name.value
    const userAge =  e.target.age.value
    const userAddress =  e.target.address.value
    //낙관적 업데이트 구현
    dispatch(addNewUserData({name:userName, age:userAge, address:userAddress}))
    try{
      await apiCaller.setUserData({name:userName, age:userAge, address:userAddress})
    } catch (error) {
      window.alert('네트워크가 원활하지 않거나, DB설정을 확인하세요.')
      dispatch(rollBackUserData())
    }
  }

  return (
    <div>
      <div>MyPage</div>
      <form onSubmit={handleSubmit}>
        <NormalInput title="이름" name="name" value={nameInput.value} onChange={nameInput.handleChange} type="text"/>
        <NormalInput title="나이" name="age" value={ageInput.value} onChange={ageInput.handleChange} type="number"/>
        <NormalInput title="주소" name="address" value={addressInput.value} onChange={addressInput.handleChange} type="text"/>
        <button>추가</button>
      </form>
      <button onClick={() => dispatch(rollBackUserData())}>Rollback State Test</button>
      {userSelectorList.map(({name,age,address}) => {
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