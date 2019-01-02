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
            items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            pages: undefined,
            slides: ['Top', 'New']
        }
    },
    methods: {
        getStories() {
            this.$store.dispatch('main/updateStories');
        }
    },
    mounted() {
        this.getStories();
    }
}
