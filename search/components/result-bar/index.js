import { mapState } from "vuex";

export default{
    name:'resultBar',
    data () {
        return{
            searchValue:'',
            valid:false,
            Filters: {options:['All Types','Players','Teams','Captians'],selectedType:'All Types'},
            showDrop:false,
            dataset:[
                {
                    name:"Raina",
                    img:"https://images.news18.com/ibnlive/uploads/2020/08/1597400776_raina.jpg",
                    team:"Chennai Super Kings",
                },
                {
                    name:"Bhuvneshwar kumar and David Warner",
                    img:"https://images.news18.com/ibnlive/uploads/2020/09/1598948380_bhuvneshwar-kumar-and-david-warner-1.jpg",
                    team:"Sunrisers Hydrebad"
                },
                {
                    name:"Rohit Sharma",
                    img:"https://images.news18.com/ibnlive/uploads/2020/12/1608713363_mumbai-indians.jpg",
                    team:"Mumbai Indians"
                },
                {
                    name:"Mahendra Singh Dhoni",
                    img:"https://images.news18.com/ibnlive/uploads/2020/08/1597511202_dhoni.jpg",
                    team:"Chennai Super Kings"
                },
            ]
        }
    },
    computed:{
        ...mapState({
            search: state => state.home && state.home.searchValue,
        }),
    },
    mounted() {
        this.searchValue = this.search 
    },
    methods:{
        async searchPage() {
            this.searchValue = this.searchValue.trim()
            
			if (this.searchValue){
                await this.$store.dispatch('home/SEARCH',this.searchValue)
            }
        },
        clickOption(item){
            const selected = {...this.Filters}
            selected.selectedType = item
            this.Filters = selected
            this.showDrop = false
        }
    }
}