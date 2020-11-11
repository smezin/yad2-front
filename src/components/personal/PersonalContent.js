import React, { useEffect, useState } from 'react';
import PublishNewItem from './PublishNewItem';
import PersonalMenu from './PersonalMenu';
import MyItems from './MyItems';
import MyFavorites from './MyFavorites';

const PersonalContent = (props) => {
	const [tab, setTab] = useState(props?.tab || 'publish');
	console.log(tab)
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
						<MyFavorites />
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
      <PersonalMenu tab={tab} setTab={setTab}/>
      {selectContent()}
    </div>
  );
};
export default PersonalContent;
