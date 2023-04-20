import { MainDiv } from "./Main.styled";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";

export const App = () => {



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
