import React from "react";

import { Button, FormDiv, FormLabel } from "./Main.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/phoneSlice";
import { nanoid } from 'nanoid'


 const Form =()=>{

  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contacts);

   const handeleSubmite = (e) =>{
    e.preventDefault();

    const id = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    
    if (contacts.find(item => item.name ===name
      || item.number === number )) {
      return alert (`${contacts.name}: ${contacts.number} already in contacts` )
    }
  dispatch(addContact({name, number, id}));
   form.reset();

   }

    return(
        <FormDiv onSubmit={handeleSubmite}
        >
        <FormLabel>Name
       <input
       type="text"
       name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     /> 
     </FormLabel>
     <FormLabel> Number
         <input
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       /></FormLabel>
     <Button type="submit">Add contact</Button>  
      
       </FormDiv>
       
    
)
}


export default Form;