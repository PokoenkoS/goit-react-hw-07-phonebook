import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "redux/filterSlice";


const Filter = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(state=>state.filter);

 const handleFifter =(e)=> {
    console.log(e.target.value);
    dispatch(filterContact(e.target.value))
 }
   
    return (
        
<input type="text" value={filter}  onChange={handleFifter} />

    )

}

export default Filter;