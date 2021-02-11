export default{
    components:{
        mainHeader : () => import('~/components/header/index.vue'),
        teams : () => import('~/components/teams/index.vue'),
        search : () => import('~/components/search/index.vue'),
        latestNews : () => import('~/components/latest-news/index.vue')
    }
}