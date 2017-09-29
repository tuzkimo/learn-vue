<template>
  <div>
    <HeaderSection></HeaderSection>
    <h2 v-text="topic.title"></h2>
    <p>Author: {{topic.author.loginname}} Posted: {{$utils.descTime(topic.created_at)}}</p>
    <hr>
    <article v-html="topic.content"></article>
    <h3>Comments</h3>
    <ul>
      <li v-for="(reply, index) in topic.replies" :key="`reply-${index}`">
        <p>{{reply.author.loginname}} Replied {{$utils.descTime(reply.created_at)}}</p>
        <article v-html="reply.content"></article>
      </li>
    </ul>
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
      id: this.$route.params.id,
      topic: {}
    }
  },
  methods: {
    getTopic () {
      this.$api.get(`topic/${this.id}`, null, res => {
        this.topic = res.data
      })
    }
  },
  created () {
    this.getTopic()
  }
}
</script>
