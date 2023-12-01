import React from 'react';
import TaskTag from '../tasks/TaskTag';
import TagMenu from './TagMenu';
import assets from '../../../assets/components/dashtask';
import styles from './css/add.module.css';

interface TagListProps {
  task: NewTaskInterface;
  setTask: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}

const TagList = ({ setTask, task }: TagListProps) => {
  const [menu, setMenu] = React.useState(false);

  const handleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu(true);
  };

  const handleTag = (tag: TaskDefaultTags) => {
    setTask((task) => ({ ...task, tags: task.tags.filter((t) => t !== tag) }));
  };

  return (
    <div className={styles.tagsList}>
      {task.tags.map((tag) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleTag(tag);
          }}
          className={styles.tagItem}
          key={tag}>
          <TaskTag tag={assets.tags[tag]} />
        </button>
      ))}
      <button
        className={styles.tagMenuTrigger}
        onClick={handleMenu}>
        <img
          style={{ maxWidth: 16 }}
          src={assets.icons.add_circle}
          alt="add-tag-icon"
        />
      </button>
      {menu && (
        <TagMenu
          task={task}
          setTask={setTask}
          setMenu={setMenu}
        />
      )}
    </div>
  );
};

export default TagList;
