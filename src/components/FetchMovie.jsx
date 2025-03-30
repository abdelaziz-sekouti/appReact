import React, { useState, useEffect } from "react";

const FetchMovie = () => {
  const [data1, setData1] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/";
  
  useEffect(() => {
    
    getData();
  }, [data1]);
  async function getData() {
    // document.querySelector('#content').innerHTML = `<h2 class="text-white text-center bg-danger text-uppercase p-3 m-2">Please Select A Post From The Above List</h2>`
    const response = await fetch(url);
    const data = await response.json();
    setData1(data);
  }
  
  function printData() {
    const selectedValue = document.querySelector("#sel").value;
    // console.log(selectedValue);
    // document.querySelector('#content').innerHTML = ''
    selectedValue == "Please Select"  ? document.querySelector("#content").innerHTML ='<h2 class="text-black bg-warning text-uppercase p-3 m-2">Please Select A Post From The Above List</h2>' :
    data1
      .filter((post) => post.title === selectedValue)
      .map(
        (post1) =>
          (document.querySelector("#content").innerHTML = `
              <h2 class="text-black bg-warning text-uppercase p-3 m-2">${post1.title}</h2>
              <p class="bg-secondary text-capitalize text-white h4 my-4 p-4 w-50 mx-auto rounded">${post1.body} <button class="my-2 rounded btn btn-info">Read More</button> </p>`
    
      ))
  }
  return (
    <>
      <select
        name="posts"
        id="sel"
        className="form-select"
        onChange={printData}
      >
        <option>Please Select</option>
        {data1.map((post, index) => (
          <option key={index}>
            {post.title}
          </option>
        ))}
      </select>
      <div
        className="bg-primary p-3  text-white  m-4 rounded"
        style={{ minHeight: "75vh" }}
        id="content"
      ></div>
    </>
  );

};

export default FetchMovie;
