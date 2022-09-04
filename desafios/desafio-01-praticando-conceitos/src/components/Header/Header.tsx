import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import todoLogo from '../../assets/rocket.svg'
import { Button } from '../Button/Button';
import styles from './Header.module.css';

interface IHeader {
  onAddTask: (task: string) => void;
}

export function Header({ onAddTask }: IHeader) {
  const [task, setTask] = useState('');

  function handleCreateTask(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setTask(event.target.value);
    event.target.setCustomValidity("");

  }

  function handleSubmitTask(event: FormEvent){
    event.preventDefault();

    if(!task.length){
      return
    }

    onAddTask(task);
    setTask('');
  }

  function handleInputIsValidy(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("É necessário informar uma tarefa!");
  }

  return (
    <header className={styles.header}>
      <div>
        <img src={todoLogo} alt="Logotipo do Site" />
        <strong>
          to<span>do</span>
        </strong>
      </div>

      <form onSubmit={handleSubmitTask} className={styles.form}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          onChange={handleCreateTask}
          value={task}
          required
          onInvalid={handleInputIsValidy}
        />
        <Button />
      </form>
    </header>
  )
}
