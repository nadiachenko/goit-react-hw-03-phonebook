import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({ contactsList, deleteContact }) => (
    <div> <h2>Contacts</h2>
        <ul >
            {contactsList.map(single => (
                <ContactListItem
                    key={single.id}
                    id={single.id}
                    name={single.name}
                    number={single.number}
                    deleteContact={deleteContact}
                />
            ))}
        </ul>
    </div>
) 
