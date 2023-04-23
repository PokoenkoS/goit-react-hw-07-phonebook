import React from "react";

import { Button, FormDiv, FormLabel } from "./Main.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
// import { nanoid } from 'nanoid'
import { selectContacts } from "redux/selectors";
import { useState } from "react";


 const Form =()=>{
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
        case "name":
            setName(value);
            break;
        case "number":
            setNumber(value);
            break;
        default:
            return;
    };
};

   const handeleSubmite = (e) =>{
    e.preventDefault();
    
    if (contacts.find(item => item.name ===name
      || item.number === number )) {
      return alert (`${contacts.name}: ${contacts.number} already in contacts` )
    }
  dispatch(addContact({name, number}));
   resetForm();

   }
   const resetForm = () => {
    setName("");
    setNumber("");
};

    return(
        <FormDiv onSubmit={handeleSubmite}
        >
        <FormLabel>Name
       <input
       type="text"
       name="name"
       value = {name}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
       onChange={handleInputChange}
     /> 
     </FormLabel>
     <FormLabel> Number
         <input
       type="tel"
       name="number"
       value = {number}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       onChange={handleInputChange}
       /></FormLabel>
     <Button type="submit">Add contact</Button>  
      
       </FormDiv>
       
    
)
}


export default Form;