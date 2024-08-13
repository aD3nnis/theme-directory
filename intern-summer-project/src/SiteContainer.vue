<template>
    <div class="site-container">
        <div class="site-lock-width-container">
            <h1 class="container-web-title">Website Directory</h1>
            <div class="grid-parent-container">
                

            </div>
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