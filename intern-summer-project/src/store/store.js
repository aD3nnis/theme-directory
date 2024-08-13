
import {reactive, computed} from 'vue'
import axios from 'axios';
import { orderBy } from 'lodash/orderBy';

export const stripUrl = (url) => {
  return url.replace(/(http:\/\/|https:\/\/|www\.)/g,'').replace('/', '');
};

const perpareSiteData = (sites) =>{
  for(const site of sites){
    const imgEl = document.createElement('img');
    const favEl = document.createElement('img');
    const fullSiteUrl = document.createElement('a');
    site.fullSiteUrl = site.url;
    site.url = stripUrl(site.url);
    const srcImg = "/../../site-screenshots/" + site.url + ".png";
    site.imageSrc = srcImg;
    const srcFav = "/../../favicons/" + site.url + ".ico";
    site.faviconSrc = srcFav;
    imgEl.src = srcImg;

    imgEl.onerror = function () {
        site.imageSrc = null;
    };

    favEl.src = srcFav;

    favEl.onerror = function(){
        site.faviconSrc = null;
    };

  }
  return orderBy(sites, ['url'], ['asc']);
}

export const store = reactive ({
  state: {
    numItems: 10,
    searchBar: '',
    sites: [],
    filterSites: false,
    activeSites: [],
    inactiveSites: [],
    viewMode: 'List View',
    sorters: {
      url: null,
      rating: null,
    }, 
    filters: {
      status: {
        major: true, 
        minor: true,
      }
    }, 
    activeSorter: null,
    endPage: 0,
  }, 
  radioItems: [
    {label: 'List View', value: 'List View', name: 'listview'},
    {label: 'Card View', value: 'Card View', name: 'cardview'},

  ],
  mutations: {
    setNumItems(value){
      store.state.numItems = value
    },
  },

});

export const searchResultsSites = computed(() => {
    return sortedSites.value.filter(site => site.url.toLowerCase().includes(store.state.searchBar.toLowerCase()))
});

export const filteredSites = computed (()=>{
  
  if(!store.state.sites.length){
    return store.state.sites
  }

  return store.state.sites.filter(site =>{
    for(let filterType in store.state.filters){
      const attributes = store.state.filters[filterType];
      let currentFilterMatched = false;
      for (let attribute in attribute){
        const filterEnabledForAttibute = attributes[attribute];
        if (filterEnabledForAttibute && (site[filterType]=== attribute)){
          currentFilterMatched = true;
          break;
        }
      }
      if (!currentFilterMatched){
        return false;
      }
    }
    return true;
  });
});

export const sortedSites = computed (()=>{
  const sortProps = [];
  const sortOrders = [];
  const prop = store.state.activeSorter

  if(prop && store.state.sorters[prop] !== null){
    sortProps.push(prop);
    sortOrders.push(store.state.sorters[prop] ? 'desc' : 'asc');
  }
  return orderBy(filteredSites.value, sortProps, sortOrders);
});


export const finalResultsForCurrentPage = computed (() =>{
  if (sortedSites.value.length){
    if (store.state.endPage - store.state.numItems < 0){
      return searchResultsSites.value.slice(0, store.state.endPage + store.state.numItems);
    }else {
      return searchResultsSites.value.slice(store.state.endPage - store.state.numItems, store.state.endPage)
    }
  }
});



export const getSitesFromJson = () =>{
  axios.get('../../site-list.json')
    .then(response => {
      store.state.sites = perpareSiteData(response.data);
    })
    .catch(error =>{
        console.error(error);
    });
};