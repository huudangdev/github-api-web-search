import React, {useState} from 'react';
import {view} from 'react-easy-state';
import _store from '../store';

const Form = () => {
    const [searchTearmLocal, setSearchTermLocal] = useState('');
    const {setDataFromFetch, setRequests} = _store;
    
    const handleChange = (event) => {
        event.preventDefault();
        setSearchTermLocal(event.target.value);
        _store.searchTearm = searchTearmLocal;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        _store.SearchTerm = searchTearmLocal;
        _store.UserName = searchTearmLocal;
        setRequests();
        await setDataFromFetch();
        
        setSearchTermLocal('');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder='Search the user...' 
                value={searchTearmLocal} 
                onChange={handleChange}
                className='new'
                autoFocus
            />
        </form>
        </>
    );
}

export default view(Form);