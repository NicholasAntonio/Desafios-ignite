import toDoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'


export function Header(){
    return(
        <header className={styles.header}>
            <img src={toDoLogo} alt="toDoLogo" />

            <form className={styles.newTaskForm}>
                <input className={styles.newTaskFormInput} type="text" placeholder='Adicione uma nova tarefa' />
                <button className={styles.newTaskFormButton}>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                    </button>
            </form>
        </header>
    )
}