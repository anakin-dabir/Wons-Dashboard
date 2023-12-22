// /src/pages/Settings/BoardView/TaskList.jsx
// Friday, December 8th 2023, 8:31 am

import React from 'react';
import {Stack, Typography, Checkbox, CardMedia} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MenuButton from '../../components/MenuButton/MenuButton';
import AddIcon from '@mui/icons-material/Add';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {
  DraggableContainer,
  TitleContainer,
  Title,
  TagContainer,
  Tag,
  Description,
  BottomIconsText,
  BottomIconsContainer,
  EmptyContainer,
  SvgIcon,
  BottomAvatarContainer,
  BottomAvatar,
} from '../../theme/theme';
import {HeartIcon, CommentIcon} from '../../assets/Icons';

const TaskList = ({tasks, type, index, selectTagColor}) => {
  return (
    <Droppable droppableId={type} key={index}>
      {provided => (
        <Stack gap={2} ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((item, i) => {
            return (
              <Draggable key={i} draggableId={`${type}-${i}`} index={i}>
                {_provided => (
                  <DraggableContainer
                    ref={_provided.innerRef}
                    {..._provided.draggableProps}
                    {..._provided.dragHandleProps}
                  >
                    <TitleContainer>
                      <Title>
                        <Checkbox
                          color='primary'
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon />}
                        />
                        <Typography>{item.name}</Typography>
                      </Title>
                      <MenuButton type='horizontal' />
                    </TitleContainer>

                    <TagContainer>
                      {item.tags.map((tag, tagIndex) => {
                        return (
                          <Tag key={tagIndex} color={selectTagColor(tag)}>
                            {tag}
                          </Tag>
                        );
                      })}
                    </TagContainer>

                    <Description variant='body2'>{item.description}</Description>

                    {item?.img && item.img.length === 1 && (
                      <CardMedia component='img' alt={item.name} src={item?.img[0]} />
                    )}
                    {item?.img && item.img.length > 1 && (
                      <Stack direction='row' gap={2}>
                        {item.img.map((image, _i, arr) => {
                          return (
                            <CardMedia
                              key={_i}
                              component='img'
                              alt={item.name}
                              src={image}
                              sx={{width: `calc((100% / ${arr.length}) - ${arr.length * 4}px);`}}
                            />
                          );
                        })}
                      </Stack>
                    )}

                    <TitleContainer>
                      <BottomAvatarContainer
                        max={4}
                        renderSurplus={surplus => '+'}
                        slotProps={{
                          additionalAvatar: {
                            sx: {
                              bgcolor: 'tertiary.main',
                              zIndex: item.users.length + 1,
                              marginLeft: '-18px !important',
                            },
                          },
                        }}
                      >
                        {item.users.map((user, __index) => {
                          return (
                            <BottomAvatar
                              key={__index}
                              alt={user.name}
                              src={user.img}
                              props={{index: __index}}
                            />
                          );
                        })}
                      </BottomAvatarContainer>

                      <BottomIconsContainer>
                        <BottomIconsText component='span' variant='body2'>
                          <SvgIcon color='text.dim'>
                            <CommentIcon />
                          </SvgIcon>
                          {item.comments}
                        </BottomIconsText>
                        <BottomIconsText component='span' variant='body2'>
                          <SvgIcon color='text.dim'>
                            <HeartIcon />
                          </SvgIcon>
                          {item.likes}
                        </BottomIconsText>
                      </BottomIconsContainer>
                    </TitleContainer>
                  </DraggableContainer>
                )}
              </Draggable>
            );
          })}
          {tasks.length === 0 && (
            <EmptyContainer>
              <AddIcon />
            </EmptyContainer>
          )}
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
  );
};

export default TaskList;
