<template>
    <div class="audience">
        <a-row class="container">
            <a-col :xs="24" :lg="6">
                <div class="audience-type" id="artists">
                    <div id="overlay">
                        <div id="content">
                            <p id="title">Artists</p>
                            <p id="description">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :lg="6">
                <div class="audience-type" id="musicians">
                    <div id="overlay">
                        <div id="content">
                            <p id="title">Musicians</p>
                            <p id="description">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :lg="6">
                <div class="audience-type" id="content-creators">
                    <div id="overlay">
                        <div id="content">
                            <p id="title">Content Creators</p>
                            <p id="description">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :lg="6">
                <div class="audience-type" id="everyone">
                    <div id="overlay">
                        <div id="content">
                            <p id="title">Everyone</p>
                            <p id="description">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'Audience'
}
</script>
<style lang="scss" scoped>

.audience {
    min-height: 500px;

    .container {
        margin: 0px 32px;
    }
}

.audience-type {
    margin: 16px 4px;
    min-height: 450px;
    cursor: pointer;

    // fade animation for card
    @keyframes fluidFadeIn {
        0% { 
            min-height: 0px;
        }

        100% {
            min-height: 450px;
        }
    }

    // fade animation for text
    @keyframes fadeIn {
        from {
            visibility: hidden;
            opacity: 0;
        }

        to {
            visibility: visible;
            opacity: 1;
        }
    }

    #overlay {
        padding: 0px 8px;
        min-height: 450px;
    }

    &#artists, &#artists > #overlay {
        animation: fluidFadeIn 1.5s ease-in-out;
    }

    &#musicians, &#musicians > #overlay {
        animation: fluidFadeIn 1.75s ease-in-out;
    }

    &#content-creators, &#content-creators > #overlay {
        animation: fluidFadeIn 2s ease-in-out;
    }

    &#everyone, &#everyone > #overlay {
        animation: fluidFadeIn 2.25s ease-in-out;
    }

    #content {
        position: absolute;
        bottom: 16%;
        padding: 0px 12px;
        z-index: 1;
        animation: fadeIn 1.5s ease-in-out;

        #title {
            font-family: 'Manrope', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: #fff;
        }

        #description {
            font-family: 'Manrope', sans-serif;
            font-size: 16px;
            font-weight: 300;
            color: #fff;
        }
    }
}

#artists {
    background-image: url('../assets/img/pexels-valeriia-miller-3547625.jpg');
    background-size: cover;
    background-position: 50% 50%;

    #overlay {
        background-color: rgba(77, 233, 103, 0.45);

        &:hover {
            background-color: rgba(77, 233, 103, 0);
            transition-duration: 0.5s;
        }
    }
}

#musicians {
    background-image: url('../assets/img/pexels-markus-spiske-92080.jpg');
    background-size: cover;
    background-position: 50% 50%;

    #overlay {
        background-color: rgba(74, 201, 194, 0.45);

        &:hover {
            background-color: rgba(74, 201, 194, 0);
            transition-duration: 0.5s;
        }
    }
}

#content-creators {
    background-image: url('../assets/img/abstract-backlit-conceptual-1722072.jpg');
    background-size: cover;
    background-position: 50% 50%;

    #overlay {
        background-color: rgba(236, 74, 68, 0.45);

        &:hover {
            background-color: rgba(236, 74, 68, 0);
            transition-duration: 0.5s;
        }
    }
}

#everyone {
    background-image: url('../assets/img/adult-audience-black-and-white-1666816.jpg');
    background-size: cover;
    background-position: 50% 50%;

    #overlay {
        background-color: rgba(255, 168, 55, 0.45);

        &:hover {
            background-color: rgba(255, 168, 55, 0);
            transition-duration: 0.5s;
        }
    }
}

</style>