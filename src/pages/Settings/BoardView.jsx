// /src/pages/Settings/BoardView/BoardReview.jsx
// Wednesday, December 6th 2023, 11:25 pm

import React, {useState} from 'react';
import Header from '../../components/Header';
import FilterBtn from './FilterBtn';
import Links from './Links';
import InputField from '../../components/InputField/InputField';
import TaskContainer from './TaskContainer';
import {ReactComponent as Searchicon} from '../../assets/Searchicon.svg';
import {HeaderContainer, SvgIcon, TabPanel} from '../../theme/theme';

const tags = [
  {tag: 'Low', color: 'pink.main'},
  {tag: 'On Track', color: 'tertiary.main'},
  {tag: 'High', color: 'text.tag'},
  {tag: 'Medium', color: 'primary.main'},
  {tag: 'At Risk', color: 'danger.main'},
];

const BoardView = () => {
  const [query, setQuery] = useState('');
  const [filterValues, setfilterValues] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const tabLinks = [
    {id: 0, name: 'List', children: <>List</>},
    {
      id: 1,
      name: 'Board',
      children: <TaskContainer query={query} tags={tags} filterValues={filterValues} />,
    },
    {id: 2, name: 'Timeline', children: <>Timeline</>},
  ];

  return (
    <Header
      name='Task Preview'
      rightComponent={
        <FilterBtn tags={tags} filterValues={filterValues} setfilterValues={setfilterValues} />
      }
    >
      <HeaderContainer>
        <Links activeTab={activeTab} setActiveTab={setActiveTab} tabLinks={tabLinks} />
        <InputField
          value={query}
          onChange={e => setQuery(e.target.value)}
          width={{md: '280px'}}
          backgroundColor='neutral.main'
          placeholder='Search'
          endIcon={
            <SvgIcon>
              <Searchicon />
            </SvgIcon>
          }
        />
      </HeaderContainer>
      {tabLinks.map(tab => {
        return (
          <TabPanel key={tab.id} props={{activeTab, index: tab.id}}>
            {tab.children}
          </TabPanel>
        );
      })}
    </Header>
  );
};

export default BoardView;
