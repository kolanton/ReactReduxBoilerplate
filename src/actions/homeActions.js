import * as types from './actionTypes';

export function loadHomeSuccess() {
    let home = {title: "Home"};
    return { type: types.LOAD_HOME, home };
}
