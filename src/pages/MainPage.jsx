import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [test,setTest] = useState([
    {
      name:'ㅎ',
      age:15,
    },
    {
      name:'z',
      age:15,
    },
    {
      name:'g',
      age:15,
    }
  ])

  const obj = {name:'kd',age:16}
  // useEffect(()=> {
  //   setTest([...test, obj])
  // },[])
  useEffect(()=> {
    console.log(test)
  },[test])
  const testFunc = () => {
    setTest([...test, obj])
  }
  return (
    <>
      <div>Home</div>
      <Link to="/myPage">마이페이지로</Link>
      <button onClick={()=> testFunc()}>추가</button>
    </>
  )
}

export default Home