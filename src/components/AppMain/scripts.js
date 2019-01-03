import NewsItem from "../NewsItem";
import { mapState } from 'vuex';

export default {
    name: 'AppMain',
    components: {
        NewsItem
    },
    computed: {
        ...mapState('main', ['stories']),
    },
    data () {
        return {
            page: 0,
            pages: undefined,
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
        page: function () {
            this.updateStories();
        },
        tab: function () {
            this.updateStories();
        },
        timeframe: function () {
            this.updateStories();
        }
    },
    methods: {
        updatePage(page) {
            this.page = page - 1;
        },
        updateStories() {
            this.$store.dispatch('main/updateStories', {
                page: this.page,
                tab: this.tab,
                timeframe: this.timeframe
            });
        }
    },
    mounted() {
        this.updateStories();
    }
}
