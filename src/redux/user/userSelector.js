import {createSelector} from 'reselect';

const selectUser = state => state.user

export const selectCurrenttUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)