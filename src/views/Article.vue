<template>
    <div class="article">
        <Navbar />
        <div class="article-container">
            <SampleArticle />
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import SampleArticle from '../components/SampleArticle.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Article',
    components: {
        Navbar,
        SampleArticle,
        Footer
    }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&family=Source+Serif+Pro:wght@300;400;600&display=swap');
</style>