import React from 'react';
import Task from './Task';
import styles from './css/tasks.module.css';

interface FieldListProps {
  tasks: Array<TaskInterface>;
  date_label?: string;
  direction: 'row' | 'column';
}

const FieldList = ({ tasks, date_label, direction }: FieldListProps) => {
  return (
    <div
      style={{ flexDirection: `${direction}` }}
      className={styles.fieldList}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          date_label={date_label}
          task={task}
        />
      ))}
    </div>
  );
};

export default FieldList;
