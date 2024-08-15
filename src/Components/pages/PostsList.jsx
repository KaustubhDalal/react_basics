import { useSearchParams } from "react-router-dom";
const PostsList = () =>{
  const [searchParams,setSearchParams] = useSearchParams();

  const filterValue = searchParams.get("filter");

  console.log(filterValue)
  return (
    <div>
      <h2>{filterValue == "latest" ? "Latest Post List" : "All Posts List"}</h2>
      <p>Post 1</p>
      <p>Post 2</p>
      <p>Post 3</p>
      <button onClick={() => {setSearchParams({filter : "latest"})}}>Latest Posts</button>
      <button onClick={() => {setSearchParams({})}}>Reset Button</button>
    </div>
  )
}

export default PostsList;