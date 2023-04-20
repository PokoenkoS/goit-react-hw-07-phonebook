import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/phoneSlice";


const ContactList =()=> {
  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contacts);
 const filter = useSelector(state => state.filter);

 const filterContacts = contacts.filter(({name, number})=> 
  name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || 
  number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
 )

       return(
    <div>
    
    <ul>
    {filterContacts.map((contact) =>{return (
    <li key={contact.id}>
    {contact.name}:{contact.number}
    <button type="submit" onClick={()=>dispatch(deleteContact(contacts))}> Delete</button>
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
  