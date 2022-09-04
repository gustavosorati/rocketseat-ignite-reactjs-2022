import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../App';
import styles from './Task.module.css';

interface TaskProps {
  task: ITask;
  onDeleteTask: (id: number) => void;
  onChangeTaskStatus: (id: number) => void;
}


export function Task({task, onDeleteTask, onChangeTaskStatus}: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  function handleIsChecked() {
    setIsChecked(!isChecked);
    onChangeTaskStatus(task.id);
  }


  function handleDeleteTask(){
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task} >
      <span
        onClick={handleIsChecked}
        className={`${styles.checkbox} ${isChecked ? styles.checkbox_checked : ''}`}
      >
        {isChecked && <Check size={10} weight={'bold'} />}
      </span>

      <label
        className={`${isChecked ? styles.isChecked : ''}`}
        onClick={handleIsChecked}
      >
        {task.content}
      </label>

      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={18}/>
      </button>
    </div>
  )
}
