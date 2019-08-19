import React from 'react';
import _store from '../store';

const InfoUser = () => {
    const {avatar_url} = (_store.datas.length !== 0) ? _store.datas[0].owner : '#';
    const amountRepo = _store.datas.length;
    const {userName, destroy} = _store;

    return (
        <table>
            <thead>
                <tr>
                    <td><i>Avatar</i></td>
                    <td><i>User Name</i></td>
                    <td><i>Repositories</i></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={avatar_url} alt='avatar'/></td>
                    <td><b>{userName}</b></td>
                    <td>{amountRepo}</td>
                    <td><button onClick={() => destroy()}>x</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default InfoUser;
