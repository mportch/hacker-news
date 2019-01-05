import { UPDATE_PAGES, UPDATE_STORIES } from './mutation-types';

export default {
    [UPDATE_PAGES](state, obj) {
        state.pages = obj.pages;
    },
    [UPDATE_STORIES](state, obj) {
        state.stories = obj.stories;
    },
};
