<template>
  <div>
    <h1>ダッシュボード</h1>

    <div class="tabs">
      <ul>
        <li class="is-active"><a href="#">最新記事</a></li>
        <li v-for="category in categories" ><a href="#">{{ category }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data() {
    return {
      categories: ['Category1', 'Category2', 'Category3']
    }
  }
}
</script>

<style>

</style>