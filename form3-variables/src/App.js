// import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"
import Comp4 from "./Comp4"

export default function App() {
  let data="ABC"
  let data2=[
    {"name":"Mayur","age":20,"marks":80},
    {"name":"xyz","age":20,"marks":80},
    {"name":"pqr","age":20,"marks":80},
]
  return (
    <div>
      {
        data2.map((item)=><Comp2 obj={item} />)
      }
      <h1>Second Method</h1>
      {
        data2.map((item)=><Comp3 obj={item} />)
      }
      <h1>Third method</h1>
      {
        data2.map((item)=><Comp4 obj={item} />)
      }

        {/* <Comp1 x={data}/> */}
    </div>
   
  )
}
