import NormalInput from "../../components/inputs/NormalInput";
import useInput from "../../hooks/input/useInput";
import apiCaller from "../../api/apiCaller";
import {  useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserData, addNewUserData, rollBackUserData} from "../../redux/actions/userAction"
import UserCardSkeleton from "./UserCardSkeleton";
import UserForm from "./UserForm";

const MyPage = () => {
  const[isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const userSelectorList = useSelector((state)=> state.user)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchUserData());
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [dispatch]);
  
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
      <div style={{marginTop:"15px"}}>
        {isLoading ? (
          <div>
            <UserCard >
              <UserCardSkeleton/>
            </UserCard>
            <UserCard >
              <UserCardSkeleton/>
            </UserCard>
          
          </div>
        ) : (
          userSelectorList.map(({name, age, address}) => (
            <UserCard key={name} style={{border:"1px solid"}}>
              <h1>사용자 이름 : {name}</h1>
              <h2>사용자 나이 : {age}</h2>
              <h3>사용자 주소 : {address}</h3>
            </UserCard>
          ))
        )}
      </div>
    </div>
  );
}

export default MyPage

const UserCard = ({ children }) => (
  <div style={{ border: "1px solid", padding: "10px", marginBottom: "10px", height:"170px" }}>
    {children}
  </div>
);
