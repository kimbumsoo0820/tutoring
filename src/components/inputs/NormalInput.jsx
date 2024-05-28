
const NormalInput = ({title ,name, value, onChange}) => {
  return (
    <label htmlFor={name} style={{marginRight:'10px'}}>
        {title}
        <input type="text" id={name} name={name} value={value} onChange={onChange}  />
    </label>
  )
}

export default NormalInput