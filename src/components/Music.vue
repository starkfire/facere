<template>
    <div class="music">
        <a-row>
            <a-col :xs="24" :lg="8" id="left" data-aos="fade-right" data-aos-duration="1500">
                <p id="title">Music</p>
                <p id="description">
                    Facere is also a music streaming platform. Browse our library and listen to songs you haven't heard before.
                </p>
            </a-col>
            <a-col :xs="24" :lg="16" id="right">
                <!-- Credits: https://codepen.io/rachelmcgrane/pen/VexWdX -->
                <div class="loader" data-aos="fade-up" data-aos-duration="1500">
                    <svg id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
                        <path id="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"/>
                        <path id="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"/>
                        <path id="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"/>
                        <path id="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"/>
                        <path id="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"/>
                        <path id="Line_6" data-name="Line 6" d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"/>
                        <path id="Line_7" data-name="Line 7" d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"/>
                        <path id="Line_8" data-name="Line 8" d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"/>
                        <path id="Line_9" data-name="Line 9" d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"/>
                    </svg>
                </div>
                <!-- Credits: https://codepen.io/rachelmcgrane/pen/VexWdX -->
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'Music'
}
</script>
<style lang="scss" scoped>

.music {
    min-height: 540px;
    background: url('../assets/img/ocean.jpg');
    background-size: 300px;

    #left {
        padding: 15% 0px 15% 40px;
        font-family: 'Manrope', sans-serif;
        color: #fff;

        #title {
            font-weight: 700;
            font-size: 48px;
        }

        #description {
            font-weight: 300;
            font-size: 21px;
        }
    }

    #right {
        padding: 17.5% 0px 17.5% 0px;

        /* Credits: https://codepen.io/rachelmcgrane/pen/VexWdX */
        .loader {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        #wave {
            height: 140px;
            width: 140px;
            fill: #fff;
        }

        @keyframes pulse {
            0% {
                transform: scaleY(1);
                transform-origin: 50% 50%;
            }

            50% {
                transform: scaleY(.7);
                transform-origin: 50% 50%;
            }

            100% {
                transform: scaleY(1);
                transform-origin: 50% 50%;
            }
        }

        @for $i from 1 through 9 {
            #Line_#{$i} {
                animation: pulse 1s infinite;
                animation-delay: $i * 0.15s;
            }
        }

        /* Credits: https://codepen.io/rachelmcgrane/pen/VexWdX */
    }
}

</style>