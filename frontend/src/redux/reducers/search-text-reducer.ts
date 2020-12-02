import {ISLOADING, SearchTextActionTypes} from "../actions/search-text-actions";
import {SWAPIEndpoint} from "../../api/generic/generic-api";

export interface ChangeTextState {
    text: string;
    type: SWAPIEndpoint;
    isLoading: boolean;
}

export const initialTextState:ChangeTextState = {text: '',type: 'people',isLoading:false};
const changeTextReducer = (state: ChangeTextState = initialTextState, action: SearchTextActionTypes): ChangeTextState => {
    switch (action.type) {
        case "CHANGE_SEARCH_TEXT":
            return {...state,text:action.payload}
        case "CHANGE_SEARCH_TYPE":
            return {...state,text:'',type:state.type==='people'?'films':'people'}
        case ISLOADING:
            return {...state,isLoading:action.payload}
        default:
            return state;

    }
}
export default changeTextReducer;
