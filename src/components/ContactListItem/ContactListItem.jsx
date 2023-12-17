import css from './cli.module.css'
export const ContactListItem = ({ name, id, number, deleteContact }) => {
  return (<li className={css.list}>
    <p>{name}: {number}</p>
    <button className={css.dltbtn} onClick={() => deleteContact(id)}>Delete Contact</button>
  </li>);

}