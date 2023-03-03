---
layout: home

hero:
  name:  蟹蟹有你
  text: 运营有我，签单不愁。
  tagline: 
  image:
    src: ./
    alt: 
  actions:
    - theme: brand
      text: 点击了解
      link: ./demo1/a
    - theme: alt
      text: osChina
      link: https://my.oschina.net/520wsl
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: './images/img/haohaozhu.png',
    name: 'haohaozhu',
    title: '>>了解详情',
    sponsor: './brooke/hhz',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
    {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
    {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
    {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
    {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
    {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/sponsors/ArnaudBarre',
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <!-- <template #title>
      Our Team
    </template> -->
     <!--<template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>-->
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
