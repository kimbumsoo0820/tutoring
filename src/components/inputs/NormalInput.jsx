
const NormalInput = ({title ,name, value, onChange, type = "text"}) => {
  return (
    <label style={{marginRight:'10px'}}>
        {title}
        <input type={type} name={name} value={value} onChange={onChange}  />
    </label>
  )
}

export default NormalInput