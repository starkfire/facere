<template>
    <div class="concepts">
        <div class="text">
            <p id="title" data-aos="fade-up" data-aos-duration="1500">
                Share your concepts to the world
            </p>
            <p id="description" data-aos="fade-up" data-aos-duration="1500">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Concepts'
}
</script>
<style lang="scss" scoped>

.concepts {
    min-height: 640px;

    background-image: url('../assets/img/pexels-luis-quintero-1713953.jpg');
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
}

.text {
    min-height: 640px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 18% 20% 15% 20%;
    font-family: 'Manrope', sans-serif;
    color: #fff;

    #title {
        font-size: 48px;
        font-weight: 700;
    }

    #description {
        font-size: 24px;
        font-weight: 300;
    }
}

</style>