// /src/pages/Settings/Links.jsx
// Wednesday, December 13th 2023, 3:41 am

import React from 'react';
import {TabItem, TabsHeader} from '../../theme/theme';

const Links = ({activeTab, setActiveTab, tabLinks}) => {
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <TabsHeader
      value={activeTab}
      onChange={handleChange}
      TabIndicatorProps={{sx: {display: 'none'}}}
    >
      {tabLinks.map(tab => {
        return <TabItem key={tab.id} label={tab.name} props={{activeTab, index: tab.id}}></TabItem>;
      })}
      ;
    </TabsHeader>
  );
};

export default Links;
