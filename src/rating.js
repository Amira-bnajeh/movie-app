import React from 'react'


const Rating = ({rating,changerate=()=>{}}) => {
let arr = []
for(let i =0;i<5;i++){
    if(i<rating){
        arr.push(<span onClick={()=> changerate(i+1)}><i className="fas fa-star"></i></span>)
    }
    else{
        arr.push(<span onClick={()=> changerate(i+1)}><i className="far fa-star"></i></span>)
    }
}
return (
    <div>{arr}</div>
)
}
export default Rating