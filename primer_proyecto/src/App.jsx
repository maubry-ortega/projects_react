// const Message = ( p ) => {
//   return (
//     <div>
//       <p>Hello { p.name } { p.lastname }</p>
//     </div>
//   )
// }
import ListTask from "./components/ListTask";
import Message from "./components/message";

const App = () => {
  return (
    <>
      <Message name="maubry"  lastname="ortega"   />
      <Message name='maicol'  lastname="martines" />
      <Message name='alvares' lastname="oritiz"   />
      <ListTask />
    </>
  )
}

export default App;