<template>
  <!-- eslint-disable -->
  <div id="articlePreview">
  <pre v-html="article">
    {{ article }}
  </pre>
  </div>
  <!-- eslint-enable -->
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    'article': {
      type: String,
      required: true
    }
  },
  data: () => ({
  })
}
</script>

<style>

</style>
