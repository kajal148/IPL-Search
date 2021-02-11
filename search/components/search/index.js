import { mapState } from "vuex";

export default{
    name:'search',
    data () {
        return{
            searchValue:'',
            valid:false
        }
    },
    computed:{
        ...mapState({
            search: state => state.home && state.home.searchValue,
        }),
    },
    methods:{
        async searchPage() {
            this.searchValue = this.searchValue.trim()
            
			if (!this.searchValue){

				this.$nuxt.$emit('toast', {
					type: 'error',
					message: 'Invalid email address',
					show: true
                })
            }else{
                await this.$store.dispatch('home/SEARCH',this.searchValue)
                this.$router.push('/result')
            }
		}
    }
}