import { ITask } from '../../App';
import { Task } from '../Task';
import taskIcon from '../../assets/taskIcon.svg';

import styles from './Tasks.module.css';

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (id: number) => void;
  onChangeTaskStatus: (id: number) => void;
}

export function Tasks({tasks, onDeleteTask, onChangeTaskStatus}: TasksProps) {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isCompleted === true).length;

  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <strong>
          Tarefas criadas
          <span>{tasksQuantity}</span>
        </strong>

        <strong>
          Tarefas concluídas
          <span>{`${tasksCompleted} de ${tasksQuantity}`}</span>
        </strong>

      </header>

      <div className={styles.tasksList}>

        {tasks.length === 0 && (
          <div className={styles.message}>
            <img src={taskIcon} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onChangeTaskStatus={onChangeTaskStatus}
            />
          )
        })}
      </div>
    </section>
  )
}
