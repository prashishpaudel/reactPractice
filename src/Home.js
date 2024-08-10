// Before Fetch

// import { useState,useEffect } from "react"
// import BlogList from "./BlogList"
// const Home = () => {
//   const[blogs, setBlogs] = useState([
//     {title:'My new Website', body:'lorem ipsum', author : 'mario', id :1},
//     {title:'Welcome Party!', body:'lorem ipsum', author : 'anakin', id :2},
//     {title:'Web dev top tips', body:'lorem ipsum', author : 'mario', id :3}
//   ])

 
//   const handleDelete = (id) =>{
//     const newBlogs = blogs.filter(blog=>blog.id !==id)
//     setBlogs(newBlogs)

//   } 
//   const [address, setAddress] = useState('Nepal')
  
//   useEffect(()=>{
//     console.log('use effect ran')
//     console.log(blogs)
//     console.log(address)
//   },[address])



//   const[name, setName]=useState('mario')
//   const[age, setAge] = useState(25)
//   const handleClick =(e) =>{
//     console.log('Hello!, Prashish', e.eventPhase)
//   }
//   const handleClickAgain = (name,e) =>{
//     console.log('Hello!', name,e.eventPhase)
//   }
//   const changeName = ()=>{
//     setName('luigi')
//     setAge(60)
//   }
//   return (
//     <div className="home">
//       <BlogList blogs = {blogs} handleDelete = {handleDelete}title = "My Blogs"/>
//       <BlogList blogs = {blogs.filter((blog)=>blog.author == 'mario')} handleDelete = {handleDelete} title = "Mario's Blogs"/>

//       <h2>HomePage</h2>
//       <p>{name} is {age} years old</p>
//       <button onClick = {changeName}>Change Name</button>
//       <button onClick={handleClick}>CLick Me</button>
//       <button onClick = {(e)=>{
//         handleClickAgain('Mario!!!',e)
//       }}>Click Me Again</button>
//       <button onClick = {()=>setAddress('Toledo')}>Change Address</button>
//       <p>{address}</p>

//     </div>


//   );
// }

// export default Home

// After Fetch

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;