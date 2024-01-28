let data= async ()=>{
    let fetchData=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let newData=await fetchData.json();
    console.log(newData)
}
data();