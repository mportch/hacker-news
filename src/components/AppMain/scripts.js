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
            page: 1,
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
        tab: function () {
            this.updateStories();
        },
        timeframe: function () {
            this.updateStories();
        }
    },
    methods: {
        updateStories() {
            this.$store.dispatch('main/updateStories', {
                tab: this.tab,
                timeframe: this.timeframe
            });
        }
    },
    mounted() {
        this.updateStories();
    }
}
