<template>
  <div>
    <HeaderSection></HeaderSection>
    <div class="article-list">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <time v-text="`Posted ${$utils.descTime(topic.create_at)}`"></time>
          <router-link :to="`/content/${topic.id}`">
            {{ topic.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
  import HeaderSection from '@/components/header'
  import FooterSection from '@/components/footer'
  export default {
    components: {
      HeaderSection,
      FooterSection
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