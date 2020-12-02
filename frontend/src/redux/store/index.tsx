import {combineReducers, createStore} from "redux";
import changeTextReducer, {ChangeTextState} from "../reducers/search-text-reducer";


export type RootStateType = {
    search: ChangeTextState;
}

const RootState = combineReducers({
    search:changeTextReducer,
})
const store =
    createStore(
        RootState
    )


export default store;
