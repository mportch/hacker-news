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
    API.get(
        `${endpointLUT[obj.tab]}?query=${obj.query}&tags=story&numericFilters=created_at_i>${timeframeLUT[obj.timeframe]}&page=${obj.page - 1}`)
    .then((response) => {
        const hits = response.data.hits;
        let stories = [];
        for (let i = 0; i < hits.length; i += 1) {
            stories.push({
                num: (obj.page - 1) * 20 + i + 1,
                id: hits[i].objectID,
                idURL: `https://news.ycombinator.com/item?id=${hits[i].objectID}`,
                title: hits[i].title,
                author: hits[i].author,
                authorURL: `https://news.ycombinator.com/user?id=${hits[i].author}`,
                comments: hits[i].num_comments,
                timestamp: hits[i].created_at_i,
                url: hits[i].url ? hits[i].url : `https://news.ycombinator.com/item?id=${hits[i].objectID}`,
                host: hits[i].url ? hits[i].url.split('/')[2] : 'news.ycombinator.com',
                points: hits[i].points
            })
        }
        commit(types.UPDATE_PAGES, {
            pages: response.data.nbPages,
        });
        commit(types.UPDATE_STORIES, {
            stories,
        });
    });
};

export default {
    updateStories,
};
