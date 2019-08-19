import {store} from 'react-easy-state';

// use 'todos' instead of 'this' in the store methods to make them passable as callbacks

const _store = store({
    searchTerm: '',
    userName: '',
    requests: 0,
    datas: [],
    success: 0,
    fails: 0,

    destroy() {
        _store.searchTerm = null;
        _store.userName = null;
        _store.datas = [];
    },

    set UserName (searchTerm) {
        _store.userName = searchTerm;
    },

    get getUserName () {
        return _store.userName;
    },

    get getRequests() {
        return _store.requests;
    },

    set SearchTerm (searchTerm) {
        _store.searchTerm = searchTerm;
    },

    isSuccess () {
        (_store.datas.message === 'Not Found') ?
            (
                _store.fails++
             ) :
            (
                _store.success++
            )
    },

    setRequests () {
        _store.requests++;
    },

    setDataFromFetch () {
        console.log(_store.searchTerm);
        fetch(`https://api.github.com/users/${_store.searchTerm}/repos`)
        .then(res => res.json())
        .then(data => {
            _store.datas = data;
            console.log(_store.datas);
            _store.isSuccess();
        })
        .catch(error => console.log(error));
    }
})

export default _store;