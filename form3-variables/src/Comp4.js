

export default function Comp4(props) {
    let {name,age,marks}=props.obj
  return (
    <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{marks}</h1>
    </div>
  )
}
