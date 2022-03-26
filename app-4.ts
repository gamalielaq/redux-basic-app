import { incrementadorAction, multiplicarAction } from './contador/contador.actions';
import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';

const store: Store = createStore(contadorReducer);

store.subscribe( ()=> {
    console.log('Subs:', store.getState());
})

store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);