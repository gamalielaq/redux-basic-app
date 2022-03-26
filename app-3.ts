import { incrementadorAction, multiplicarAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Reducer, Action } from './ngrx-fake/ngrx';

class Store<T> { // el Store dispara las acciones
    private state: T;

    constructor(
        private reducer: Reducer<T>, state: T
    ) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    dispatch(action: Action) { //ejecuta la accion
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer,10); //Estado inicial
console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());

store.dispatch(multiplicarAction);
console.log(store.getState());

