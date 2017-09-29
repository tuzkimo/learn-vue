<template>
  <div>
    <Header></Header>
    <div class="article-list">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <time v-text="$utils.descTime(topic.create_at)"></time>
          <router-link :to="'/content/' + topic.id">
            {{ topic.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'
  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return {
        topics: []
      }
    },
    methods: {
      getTopics () {
        this.$api.get('topics', null, res => {
          this.topics = res.data
        })
      }
    },
    created () {
      this.getTopics()
    }
  }
</script>