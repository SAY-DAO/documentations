<template>
  <main class="content-status">
    <div>
      <h2>{{ title }}</h2>
      <div class="content-status-all">
        <div>
          <div v-if="issueUrl" class="content-status-status">
            <p>
              شما می‌توانید ما را در تکمیل این مستندات یاری کنید. 
              <a target="_blank" :href="issueUrl">همراهی در تکمیل این صفحه!</a>
            </p>
          </div>
        </div>
        <div class="illustration">
          <img src="/images/construction.png" />
        </div>
      </div>
    </div>

    <div class="content-status-info" style="clear: both">
      <div v-if="related" class="section content-other-resources">
        <h3>مطالعات آزاد مربوط به بلاک‌چین</h3>
        <ul>
          <li v-for="(item, title) in related">
            <a :href="item" :alt="title" target="_blank">{{ title }}</a>
          </li>
        </ul>
      </div>
    </div>



  </main>
</template>

<script>

export default {
  computed: {
    issueUrl: function () {
      return this.$frontmatter && this.$frontmatter.issueUrl
    },
    repo: function () {
      return (
        this.$site && this.$site.themeConfig && this.$site.themeConfig.docsRepo
      )
    },
    related: function () {
      return this.$frontmatter.related
    }
  },
  props: {
    title: {
      type: String,
      default: 'به زودی محتوای این صفحه اضافه می‌شود!'
    }
  },
}
</script>
<style lang="stylus" scoped>
.content-status-all {
  display: flex;
}

.content-status-status {
  padding-bottom: 2rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }
}

.illustration {
  display:block;
  margin: 40px;
  width: 80%;
}

.section {
  margin-bottom: 3rem;
}

@media (min-width: $MQMobile) {
  .illustration {
    display: block;
    width: 50%;
    min-width: 170px;
    margin-left: 2em;
  }
}
</style>
