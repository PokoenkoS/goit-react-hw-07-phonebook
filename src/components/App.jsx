import { MainDiv } from "./Main.styled";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { useDispatch} from "react-redux";



export const App = () => {
const dispatch = useDispatch();


useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

  return (
   <MainDiv>
     <h1>Phonebook</h1>
     <Form />
     <h2>Contacts</h2>
     <Filter/>
     <ContactList/>
     </MainDiv>
  );
};
