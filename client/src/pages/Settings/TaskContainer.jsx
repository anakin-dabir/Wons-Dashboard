// /src/pages/Settings/BoardView/Tasks.jsx
// Friday, December 8th 2023, 3:34 am

import React, {useMemo, useState} from 'react';
import {Grid, Stack, Typography} from '@mui/material';
import {DragDropContext} from 'react-beautiful-dnd';
import TaskList from './TaskList';
import Image from '../../assets/task.png';
import User from '../../assets/user.png';

const taskItem = [
  {
    type: 'ToDo',
    tasks: [
      {
        name: 'Dashboard 1',
        type: 'todo',
        tags: ['Low', 'On Track', 'At Risk'],
        img: [Image, Image],
        comments: 28,
        likes: 50,
        description: 'Discussion for management dashboard ui design',
        users: [
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: null,
          },
        ],
      },
    ],
  },
  {
    type: 'In Progress',
    tasks: [
      {
        name: 'Dashboard 2',
        type: 'todo',
        tags: ['Low', 'On Track', 'High'],
        img: [Image],
        comments: 28,
        likes: 50,
        description: 'Discussion for management dashboard ui design',
        users: [
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
        ],
      },
    ],
  },
  {
    type: 'In Review',
    tasks: [
      {
        name: 'Dashboard 3',
        type: 'todo',
        tags: ['Low', 'On Track'],
        img: null,
        comments: 28,
        likes: 50,
        description: 'Discussion for management dashboard ui design',
        users: [
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
        ],
      },
    ],
  },
  {
    type: 'Done',
    tasks: [
      {
        name: 'Dashboard 4',
        type: 'todo',
        tags: ['Low', 'On Track'],
        img: null,
        comments: 28,
        likes: 50,
        description: 'Discussion for management dashboard ui design',
        users: [
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
          {
            name: 'Anakin',
            img: User,
          },
        ],
      },
    ],
  },
];

const TaskContainer = ({query, tags, filterValues}) => {
  const [taskItems, setTaskItems] = useState(
    JSON.parse(localStorage.getItem('_tasks')) || taskItem
  );
  const selectTagColor = tag => {
    const obtainedTag = tags.find(item => item.tag === tag);
    return obtainedTag ? obtainedTag.color : null;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const updatedTaskItems = [...taskItems];
    const sourceList = updatedTaskItems.find(list => list.type === result.source.droppableId);
    const destinationList = updatedTaskItems.find(
      list => list.type === result.destination.droppableId
    );
    const [movedTask] = sourceList.tasks.splice(result.source.index, 1);
    destinationList.tasks.splice(result.destination.index, 0, movedTask);
    localStorage.setItem('_tasks', JSON.stringify(updatedTaskItems));
    setTaskItems(updatedTaskItems);
  };

  const filteredTaskItems = useMemo(() => {
    const filteredTasks = taskItems.map(list => ({
      ...list,
      tasks: list.tasks.filter(task => {
        const matchesSearch =
          query.trim() === '' || task.name.toLowerCase().includes(query.toLowerCase());
        const matchesTags =
          filterValues.length === 0 ||
          task.tags.some(tag => filterValues.some(filterTag => filterTag.tag === tag));
        return matchesSearch && matchesTags;
      }),
    }));
    return filteredTasks;
  }, [taskItems, query, filterValues]);

  return (
    <Grid container rowSpacing={2} columnSpacing={2} marginTop={2}>
      <DragDropContext onDragEnd={onDragEnd}>
        {filteredTaskItems.map((list, index) => {
          return (
            <Grid key={index} item xs={12} md={6} xl={3}>
              <Stack gap={3}>
                <Typography variant='h6' fontWeight={600} sx={{opacity: 0.7}}>
                  {list.type}
                </Typography>
                <TaskList
                  tasks={list.tasks}
                  type={list.type}
                  index={index}
                  selectTagColor={selectTagColor}
                />
              </Stack>
            </Grid>
          );
        })}
      </DragDropContext>
    </Grid>
  );
};

export default TaskContainer;
