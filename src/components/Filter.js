import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";


const Filter = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

 const handleFifter =(e)=> {
   
    dispatch(filterContact(e.currentTarget.value))
 }
   
    return (
        
<input type="text" value={filter}  onChange={handleFifter} />

    )

}

export default Filter;