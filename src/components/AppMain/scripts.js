import NewsItem from "../NewsItem";
import { mapState } from 'vuex';

export default {
    name: 'AppMain',
    components: {
        NewsItem
    },
    computed: {
        ...mapState('main', ['pages', 'stories']),
    },
    data () {
        return {
            page: 1,
            query: '',
            tab: 0,
            timeframe: 0,
            timeframes: [
                {
                    text: 'Day',
                    value: 0
                },
                {
                    text: 'Week',
                    value: 1
                },
                {
                    text: 'Month',
                    value: 2
                },
                {
                    text: 'Year',
                    value: 3
                },
                {
                    text: 'All',
                    value: 4
                },
            ]
        }
    },
    watch: {
        tab: function () {
            this.query = '';
            this.updateStories(1);
        },
        timeframe: function () {
            this.updateStories(1);
        }
    },
    methods: {
        submitQuery() {
            this.updateStories(1);
        },
        updateStories(page) {
            this.page = page;
            this.$store.dispatch('main/updateStories', {
                page: this.page,
                query: this.query,
                tab: this.tab,
                timeframe: this.tab === 0 ? this.timeframe : 4
            });
        }
    },
    mounted() {
        this.updateStories(1);
    }
}
