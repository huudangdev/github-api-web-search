import React from 'react';
import {view} from 'react-easy-state';

import Form from './components/Form';
import ListRepo from './components/ListRepo';

const App = () => {
  return (
    <div className='apiapp'>
      <header className='header'>
        <h1>User Repo</h1>
        <div className='section'>
          <span className='app-section'>Sections:</span>
          <div className='filters'>
            <button className='selected'>
              Search User
            </button>
            <button className=''>
              Search Repo
            </button>
          </div>
        </div>
        <Form/>
      </header>      
      <ListRepo/>
    </div>
  );
}

export default view(App);
