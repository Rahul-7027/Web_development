const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

data.map((innerArray,index)=>{
    innerArray.map((data,ind)=>{
        console.log(data)
    })
})