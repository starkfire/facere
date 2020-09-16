<template>
    <div class="support">
        <a-row>
            <a-col :xs="24" :lg="8" data-aos="fade-right" data-aos-duration="1000">
                <p id="title">Support</p>
                <p id="description">
                    Facere will help you grow your audience as an artist and 
                    fund your projects.
                </p>
                <router-link id="read-article" to="/article">
                    <a-icon id="read" type="read" /> Why be a backer? Read our article. <a-icon id="arrow" type="arrow-right" />
                </router-link>
            </a-col>
            <a-col :xs="24" :lg="15">
                <div class="feedback">
                    <a-row id="feedback-one" data-aos="fade-left" data-aos-duration="1000">
                        <a-col :xs="24" :lg="6" id="head">
                            <img src="../assets/img/sgan_5.jpg" />
                        </a-col>
                        <a-col :xs="24" :lg="18" id="content">
                            <p id="name">John Doe</p>
                            <p id="title">Painter</p>
                            <p id="comment">
                                "I already tried tons of platforms where I can showcase my artworks 
                                but none of these platforms really helped me other than Facere."
                            </p>
                        </a-col>
                    </a-row>
                    <a-row id="feedback-two" data-aos="fade-right" data-aos-duration="1200">
                        <a-col :xs="24" :lg="18" id="content">
                            <p id="name">Jane Doe</p>
                            <p id="title">Musician</p>
                            <p id="comment">
                                "It's actually astonishing that Facere is much more effective at
                                growing your audience than any other services."
                            </p>
                        </a-col>
                        <a-col :xs="24" :lg="6" id="head">
                            <img src="../assets/img/sgan_3.jpg" />
                        </a-col>
                    </a-row>
                    <a-row id="feedback-three" data-aos="fade-left" data-aos-duration="1400">
                        <a-col :xs="24" :lg="6" id="head">
                            <img src="../assets/img/sgan_4.jpg" />
                        </a-col>
                        <a-col :xs="24" :lg="18" id="content">
                            <p id="name">Dylan</p>
                            <p id="title">Script Kiddie</p>
                            <p id="comment">
                                *heavy breathing*
                            </p>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'Support'
}
</script>
<style lang="scss" scoped>

.support {
    background: #352d2a;
    color: #fff;
    font-family: 'Manrope', sans-serif;
    padding-left: 40px;

    #title {
        margin-top: 50%;
        font-size: 48px;
        font-weight: 700;
    }

    #description {
        font-size: 21px;
        font-weight: 400;
        margin-bottom: 2em;
    }
    
    #read-article {
        padding: 16px 32px;
        border-radius: 12px;
        font-weight: 700;
        color: #000;
        background-color: rgb(255, 165, 61);

        #read {
            margin-right: 5px;
        }

        @keyframes animateArrow {
            0% {
                transform: translateX(0px);
            }

            50% {
                transform: translateX(8px);
            }

            100% {
                transform: translateX(0px);
            }
        }

        #arrow {
            animation: animateArrow 1s ease-in-out infinite;
        }

        &:hover {
            background-color: rgb(255, 152, 35);
            color: #fff;
        }
    }
}

.feedback {
    margin: 64px 45px;
    font-family: 'Manrope', sans-serif;

    #content {
        #name {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }

        #title {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            color: #ddd;
        }

        #comment {
            margin-top: 15px;
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 18px;
        }
    }

    %feedback-template {
        margin: 36px 0px;

        img {
            border-radius: 50%;
            height: 150px;
        }
    }

    #feedback-one {
        @extend %feedback-template;
    }

    #feedback-two {
        @extend %feedback-template;
    }

    #feedback-three {
        @extend %feedback-template;
    }

    &:first-child {
        margin-top: 96px;
    }

    &:last-child {
        margin-bottom: 96px;
    }
}

</style>