import React from 'react';
import className from 'classnames';
import {view} from 'react-easy-state';

import _store from '../store';
import InfoUser from './InfoUser';

const ListRepo = () => {
    const itemClass= className({view: true, complete: false});
    const amountData = _store.datas.length;
    const {success, fails, requests} = _store

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td style={{color:'green'}}>Success</td>
                        <td style={{color:'red'}}>Fails</td>
                        <td>Requests</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{success}</td>
                        <td>{fails}</td>
                        <td>{requests}</td>
                    </tr>
                </tbody>
            </table>

            {(amountData !== null && amountData !== undefined && amountData !== 0) ? (
                <InfoUser/>
            ) : (
                <p></p>
            )}

            <ul className='list'>
                {(amountData !== null && amountData !== undefined && amountData !== 0) ? (
                _store.datas.map(repo => 
                    <li className={itemClass} key={repo.id}>
                        <label>
                            <a href={repo.html_url}>{repo.name}</a>
                            <pre>{repo.description}</pre>
                            <pre>git clone {repo.clone_url}</pre>
                        </label>
                    </li>
                )) : (
                    <p></p>
                )}
            </ul>
        </>
    )
}

export default view(ListRepo);