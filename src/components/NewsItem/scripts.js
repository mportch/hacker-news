
export default {
    name: 'NewsItem',
    props: [ 'data' ],
    components: {
    },
    computed: {
    },
    data () {
        return {
        }
    },
    methods: {
        timeElapsed(timestamp) {
            const diff = Date.now() / 1000 - timestamp;
            if (diff < 60) {
                const rounded = Math.round(diff);
                return `${rounded} ${rounded > 1 ? 'seconds' : 'second'} ago`;
            } else if (diff < 60*60) {
                const rounded = Math.round(diff / 60);
                return `${rounded} ${rounded > 1 ? 'minutes' : 'minute'} ago`;
            } else if (diff < 24*60*60) {
                const rounded = Math.round(diff / 3600);
                return `${rounded} ${rounded > 1 ? 'hours' : 'hour'} ago`;
            } else if (diff < 30*24*60*60) {
                const rounded = Math.round(diff / 86400);
                return `${rounded} ${rounded > 1 ? 'days' : 'day'} ago`;
            } else if (diff < 365*24*60*60) {
                const rounded = Math.round(diff / 2592000);
                return `${rounded} ${rounded > 1 ? 'months' : 'month'} ago`;
            } else {
                const rounded = Math.round(diff / 31536000);
                return `${rounded} ${rounded > 1 ? 'years' : 'year'} ago`;
            }
        }
    }
}
