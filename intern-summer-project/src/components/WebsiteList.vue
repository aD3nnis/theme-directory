
<template>
    <div class="container">
        <div class="website-site-container">
            <div>HELLOOOOO</div>
            <ul class="filtered-site-unordered">
                <li class="filtered-site-list" v-for="item in finalResultsForCurrentPage">
                    <a class="site-link-text" :href="item.fullSiteUrl" target="_blank">{{ item.url }}</a>
                    <span>{{ item.rating }}</span>
                </li>

            </ul>

        </div>

    </div>
</template>
<script setup>
import { finalResultsForCurrentPage } from '@/store/store';
</script>

<style>

.website-list-container{
    position: relative;
    z-index: 0;
}
.filtered-site-unordered{
    padding: 0;
}
.filtered-site-list{
    color: black;
    list-style: none;
    background-color: white;
    padding-block: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
    padding-left: 20px;
    padding-right: 20px;
    width: 70vw;
}
.filtered-site-list:nth-child(even){background: #f8f8f8;}

</style>