import {Action} from "redux";

export const CHANGE_SEARCH_TEXT = "CHANGE_SEARCH_TEXT";
export const CHANGE_SEARCH_TYPE = "CHANGE_SEARCH_TYPE";
export const ISLOADING = "ISLOADING";

interface ChangeSearchTextAction extends Action {
    type: typeof CHANGE_SEARCH_TEXT,
    payload: string
}

interface ChangeSearchTypeAction extends Action {
    type: typeof CHANGE_SEARCH_TYPE,
}

interface ToggleIsLoadingAction extends Action {
    type: typeof ISLOADING,
    payload:boolean
}

export type SearchTextActionTypes = ChangeSearchTextAction | ChangeSearchTypeAction | ToggleIsLoadingAction;

export const changeText = (msg: string): ChangeSearchTextAction => ({
    type: CHANGE_SEARCH_TEXT,
    payload: msg,
});

export const setLoading=(loading:boolean):ToggleIsLoadingAction=>({
    type: ISLOADING,
    payload: loading
})

export const changeSearchType = (): ChangeSearchTypeAction => ({
    type: CHANGE_SEARCH_TYPE,
});
