import { UPDATE_STORIES } from './mutation-types';

export default {
    [UPDATE_STORIES](state, obj) {
        state.stories = obj.stories;
    },
};
