<template>
    <div class="site-container">
        <div class="site-lock-width-container">
            <h1 class="container-web-title">Website Directory</h1>
            <div class="grid-parent-container">
                <SearchBar class="search-bar"></SearchBar>
                <div class="display-container-buttons">
                    <DropDownButton title="Filter" class="drop-down-button">

                    </DropDownButton>
                    <DropDownButton title="Filter" class="drop-down-button">

                    </DropDownButton>
                </div>
            </div>
            <WebsiteList></WebsiteList>
        </div>
    </div>
</template>
<script setup>

import DropDownButton from '@/components/DropDownButton.vue'
import IconBulletMenu from '@/components/icons/IconBulletMenu.vue'
import IconDonerMenu from '@/components/icons/IconDonerMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
import WebsiteList from '@/components/WebsiteList.vue'
import Pagination from '@/components/Pagination.vue'
import WebsiteSortTitle from '@/components/WebsiteSortTitle.vue'
import WebsiteEntryCount from '@/components/WebsiteEntryCount.vue'
import DropDownFilter from '@/components/DropDownFilter.vue'
import DropDownView from '@/components/DropDownView.vue'
import WebsiteCardList from '@/components/WebsiteCardList.vue'
import {store, getSitesFromJson, searchResultsSites} from '@/store/store.js'
import { onMounted } from 'vue'

onMounted (()=>{
    getSitesFromJson();
});

</script>

<style>
.site-container{
    background-color: white;
    display: grid;
    position: relative;
    justify-content: center;
    z-index: 0;
    min-height: 100vh;
}
.zero-sites{
    color: #ddd;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    height: 50%;
    align-items: center;
    text-align: center;
}
.zero-sites div{
    max-width: 80%;
}
.site-lock-width-container{
    min-width: 75vw;
}
.site-container h1{
    color: #222;
    font-size: 20px;
}
.grid-parent-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-inline: 3rem;
    margin-bottom: 30px;
}
.display-container-buttons{
    display: flex;
    justify-content: end;
}

</style>