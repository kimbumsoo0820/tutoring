
const NormalInput = ({title ,name, value, onChange}) => {
  return (
    <label style={{marginRight:'10px'}}>
        {title}
        <input type="text" name={name} value={value} onChange={onChange}  />
    </label>
  )
}

export default NormalInput