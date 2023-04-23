import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";


const ContactList =({id})=> {


  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = ()=>{
    dispatch(deleteContact(id))
  }
  

       return (
    <div>
    
    <ul>
    {contacts.map((contact) =>{
      return (
    <li key={contact.id}>
    {contact.name}:{contact.number}
    <button type="submit" onClick={()=>handleDeleteContact(id)}> Delete</button>
    </li>
    )
    })}
    </ul>
  </div> 
)
};


ContactList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactList;
  