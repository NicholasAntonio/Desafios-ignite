import { ChangeEvent, FormEvent, useState } from 'react';
import toDoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

interface Props{
    onAddTask: (taskTitle:string) => void
}

export function Header({onAddTask}: Props){
    const [title, setTitle] = useState("");


    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }


    return(
        <header className={styles.header}>
            <img src={toDoLogo} alt="toDoLogo" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input className={styles.newTaskFormInput}  placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title} />
                <button className={styles.newTaskFormButton}>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                    </button>
            </form>
        </header>
    )
}