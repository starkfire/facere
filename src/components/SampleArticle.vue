<template>
    <div class="article-container">
        <div class="article-pic"></div>
        <div class="article">
            <div class="heading">
                <p id="title">Crowdfunding 101: Monetizing your art and content</p>
                <p id="subtitle">A comprehensive guide on crowdfunding and how artists and creators can grow with it</p>
            </div>
            <div class="info">
                <img src="../assets/img/dev.jpg" />
                <div id="author">
                    <p id="name">Pocholo Pantoja</p>
                    <p>Sept 16, 2020 · 15 min read</p>
                </div>
                <div id="social">
                    <a-icon type="twitter" />
                    <a-icon type="linkedin" />
                    <a-icon type="facebook" />
                </div>
            </div>
            <div class="article-body">
                <p id="content">This is a sample article that replicates <u><a href="https://medium.com/">Medium's</a></u> article design using vanilla CSS. The next passage is just a long dummy text called <u><a href="https://loremipsum.io/generator/">Lorem Ipsum</a></u> for layout demonstration. If you are curious about the fonts I used, check out <a href="https://fonts.google.com/specimen/Source+Sans+Pro?query=Source"><u>Source Sans Pro</u></a> and <a href="https://fonts.google.com/specimen/Source+Serif+Pro?query=Source"><u>Source Serif Pro</u></a> 😊.</p>
                <p id="heading-h1">Lorem Ipsum</p>
                <p id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non arcu. Placerat duis ultricies lacus sed turpis tincidunt. Donec adipiscing tristique risus nec feugiat. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Mauris a diam maecenas sed enim ut sem. Nullam non nisi est sit amet facilisis magna etiam. Dictum non consectetur a erat nam at. At urna condimentum mattis pellentesque id nibh tortor id. Dictum non consectetur a erat nam at lectus urna. Viverra orci sagittis eu volutpat odio. In ante metus dictum at tempor. Porttitor massa id neque aliquam vestibulum morbi.</p>
                <p id="heading-h3">Sed Euismod</p>
                <p id="content">Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Interdum velit euismod in pellentesque. Habitant morbi tristique senectus et netus et malesuada. Morbi quis commodo odio aenean. Dictum fusce ut placerat orci nulla. Tellus rutrum tellus pellentesque eu tincidunt tortor. In ornare quam viverra orci sagittis. Senectus et netus et malesuada fames ac turpis egestas sed. Etiam erat velit scelerisque in dictum non consectetur a. Egestas pretium aenean pharetra magna ac placerat. Gravida dictum fusce ut placerat orci. Potenti nullam ac tortor vitae. Egestas integer eget aliquet nibh praesent. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Commodo quis imperdiet massa tincidunt.</p>
                <p id="content">Sed risus pretium quam vulputate dignissim suspendisse in est ante. Et malesuada fames ac turpis egestas integer. In cursus turpis massa tincidunt dui ut. Congue mauris rhoncus aenean vel. Varius vel pharetra vel turpis. Cursus eget nunc scelerisque viverra mauris. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Mi quis hendrerit dolor magna eget est. Vitae purus faucibus ornare suspendisse sed nisi lacus. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Ut placerat orci nulla pellentesque dignissim. Et malesuada fames ac turpis egestas. Massa tempor nec feugiat nisl pretium fusce. Varius duis at consectetur lorem donec. Leo vel orci porta non pulvinar neque laoreet suspendisse. Libero enim sed faucibus turpis in eu. Imperdiet proin fermentum leo vel orci porta. Non odio euismod lacinia at. Id eu nisl nunc mi ipsum faucibus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.</p>
                <p id="content">Semper feugiat nibh sed pulvinar. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Libero nunc consequat interdum varius sit amet mattis. Risus feugiat in ante metus. Enim neque volutpat ac tincidunt vitae. Urna cursus eget nunc scelerisque viverra mauris. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Vel risus commodo viverra maecenas accumsan lacus. Nunc non blandit massa enim nec dui nunc mattis. Ut sem viverra aliquet eget sit amet tellus cras adipiscing.</p>
                <p id="content">Ornare arcu dui vivamus arcu felis bibendum ut. Mi quis hendrerit dolor magna eget est lorem. Malesuada nunc vel risus commodo viverra. Quis blandit turpis cursus in hac. Egestas sed tempus urna et pharetra pharetra massa. Purus in mollis nunc sed id semper. Nulla facilisi cras fermentum odio. Sollicitudin nibh sit amet commodo nulla facilisi. Nibh ipsum consequat nisl vel pretium. Massa sapien faucibus et molestie ac feugiat. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus metus aliquam eleifend mi in nulla. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel risus commodo viverra maecenas. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Lobortis feugiat vivamus at augue eget arcu dictum. Diam in arcu cursus euismod.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Article'
}
</script>
<style lang="scss" scoped>

.article-pic {
    min-height: 450px;
    background-image: url('../assets/img/pexels-cottonbro-3778548.jpg');
    background-size: cover;
    background-position: 50% 50%;
}

.article {
    min-height: 768px;
    margin: 32px 25% 64px 25%;
}

.heading {
    color: #000;

    #title {
        font-family: 'Source Serif Pro', serif;
        font-size: 42px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    #subtitle {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 24px;
        font-weight: 400;
        color: #666;
    }
}

.info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 32px;

    img {
        height: 52px;
        border-radius: 50%;
        margin-right: 12px;
    }

    p {
        &#name {
            color: #000;
        }

        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #666;
        margin: 2px 2px;
    }

    #author {
        flex-grow: 6;
    }

    #social {
        justify-content: right;

        i {
            font-size: 24px;
            margin: 12px 4px;
        }
    }
}

.article-body {
    color: #000;

    a {
        color: #000;
    }

    #heading-h1 {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 36px;
        font-weight: 600;
    }

    #heading-h3 {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 24px;
        font-weight: 600;
    }

    #content {
        font-family: 'Source Serif Pro', serif;
        font-size: 21px;
        font-weight: 400;
    }
}

</style>