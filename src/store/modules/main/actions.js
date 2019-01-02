import axios from 'axios';
import * as types from './mutation-types';

export const API = axios.create({
    baseURL: `https://hn.algolia.com/api/v1/`,
});

export const updateStories = ({ commit }, obj) => {
    const endpointLUT = {
        0: 'search',
        1: 'search_by_date'
    };
    const timeframeLUT = {
        0: Date.now() / 1000 - 24*60*60,
        1: Date.now() / 1000 - 7*24*60*60,
        2: Date.now() / 1000 - 30*24*60*60,
        3: Date.now() / 1000 - 365*24*60*60,
        4: 0
    };
    API.get(`${endpointLUT[obj.tab]}?tags=story&numericFilters=created_at_i>${timeframeLUT[obj.timeframe]}`).then((response) => {
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
