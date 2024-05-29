
import NormalInput from "../../components/inputs/NormalInput";

const userForm = ({handleSubmit, nameInput, ageInput, addressInput}) => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <NormalInput title="이름" name="name" value={nameInput.value} onChange={nameInput.handleChange} type="text"/>
        <NormalInput title="나이" name="age" value={ageInput.value} onChange={ageInput.handleChange} type="number"/>
        <NormalInput title="주소" name="address" value={addressInput.value} onChange={addressInput.handleChange} type="text"/>
            <button>추가</button>
        </form>
    </div>
  )
}

export default userForm