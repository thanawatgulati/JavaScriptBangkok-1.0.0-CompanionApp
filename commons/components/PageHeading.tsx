import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteData } from '../../interfaces/interface.commons';
import Button from './component.button';
import { rootContext } from '../../pages/_app';

interface PropTypes {
  routeData: RouteData;
}

const PageHeading: React.FC<PropTypes> = observer(({ routeData }) => {
  const { userStore } = useContext(rootContext);
  return (
    <nav className='flex flex-row items-center text-h text-white'>
      <div className='text-4xl pt-5 px-4'>{routeData.title}</div>
      {userStore.isAuthenticated() && (
        <Button type='button' onClick={() => userStore.logout()}>
          Logout
        </Button>
      )}
    </nav>
  );
});

export default PageHeading;
