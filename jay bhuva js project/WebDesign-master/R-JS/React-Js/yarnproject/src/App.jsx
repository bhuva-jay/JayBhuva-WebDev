
import './App.css'
// import Com_1 from './componets/Com_1';
import Com_2 from './componets/Com_2';
import Com_3 from './componets/Com_3';

function App(props) {

  const image1 = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

  return (
    <div>
      <h1>hii fillip this from</h1>
      {/* <Com_1 />
      <Com_3 /> */}
      <Com_2 btnname={image1}/>
      <Com_2  btnname={<Com_3/>} />
    </div>
  )
}

export default App
