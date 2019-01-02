import axios from 'axios';
import * as types from './mutation-types';

export const API = axios.create({
    baseURL: `https://hn.algolia.com/api/v1/`,
});

export const updateStories = ({ commit }) => {
    API.get(`search_by_date?tags=story`).then((response) => {
        const hits = response.data.hits;
        let stories = [];
        for (let i = 0; i < hits.length; i += 1) {
            stories.push({
                id: i + 1,
                title: hits[i].title,
                author: hits[i].author,
                comments: hits[i].num_comments,
                timestamp: hits[i].created_at,
                url: hits[i].url ? hits[i].url : `https://news.ycombinator.com/item?id=${hits[i].objectID}`,
                host: hits[i].url ? hits[i].url.split('/')[2] : 'news.ycombinator.com',
                points: hits[i].points
            })
        }
        commit(types.UPDATE_STORIES, {
            stories,
        });
    });
};

export default {
    updateStories,
};
