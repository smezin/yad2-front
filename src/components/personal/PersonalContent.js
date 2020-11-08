import React, { useState } from 'react';
import PublishNewItem from './PublishNewItem';
import PersonalMenu from './PersonalMenu';
import MyItems from './MyItems';

const PersonalContent = () => {
  const [tab, setTab] = useState('publish');
  const selectContent = () => {
    switch (tab) {
      case 'publish':
				return (
					<React.Fragment>
						<PublishNewItem />
					</React.Fragment>
				)
			case 'favorites':
				return (
					<React.Fragment>
						
					</React.Fragment>
				)
			case 'myItems':
				return (
					<React.Fragment>
						<MyItems />
					</React.Fragment>
				)
			default:

    }
  };
  return (
    <div className='personal-content'>
      <PersonalMenu setTab={setTab}/>
      {selectContent()}
    </div>
  );
};
export default PersonalContent;
