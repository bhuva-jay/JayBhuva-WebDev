import Com_1 from "./Components/Com_1"

function App() {


  return (
    <>
      <div className="flex justify-center  mt-10 ">
        <div className="h-[550px] w-[1100px]">
          <div className="flex ms-4">

            <Com_1 heading='console' img='https://media.istockphoto.com/id/1352130137/photo/delivery-and-logistics-concept.jpg?s=1024x1024&w=is&k=20&c=oCHWzQ7Ad3Qx9yXxu7Crs1UUK2VVG1R4701dNvMfQ1Q='/>
            <Com_1 heading='play ground' img='https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
            <Com_1 heading='advanture' img='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'/>
          </div>

        </div>
      </div>
    </> 
  )
}

export default App
