<template>
    <div class="gallery">
        <p id="title">Gallery</p>
        <a-row>
            <a-col :xs="1" :lg="4"></a-col>
            <a-col :xs="22" :lg="16">
                <p id="description">Showcase your artworks through an interactive canvas.</p>
            </a-col>
            <a-col :xs="1" :lg="4"></a-col>
        </a-row>

        <a-row class="sample-collection">
            <a-col :xs="24" :lg="8">
                <div class="artwork" id="abstract-one" data-aos="fade-right" data-aos-duration="2000">
                    <div class="overlay">
                        <div class="tooltip">
                            <p id="title">The Winds of Winter</p>
                            <p id="author">Ramin Djawadi</p>
                            <div class="stats">
                                6,985 <a-icon id="like" type="like" />
                            </div>
                            <div class="socials">
                                <a href="#"><a-icon id="behance" type="behance" /></a>
                                <a href="#"><a-icon id="dribbble" type="dribbble" /></a>
                                <a href="#"><a-icon id="instagram" type="instagram" /></a>
                                <a href="#"><a-icon id="twitter" type="twitter" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :lg="8">
                <div class="artwork" id="abstract-two" data-aos="fade-up" data-aos-duration="2000">
                    <div class="overlay">
                        <div class="tooltip">
                            <p id="title">Any Colour You Like</p>
                            <p id="author">Pink Floyd</p>
                            <div class="stats">
                                9,402 <a-icon id="like" type="like" />
                            </div>
                            <div class="socials">
                                <a href="#"><a-icon id="behance" type="behance" /></a>
                                <a href="#"><a-icon id="dribbble" type="dribbble" /></a>
                                <a href="#"><a-icon id="instagram" type="instagram" /></a>
                                <a href="#"><a-icon id="twitter" type="twitter" /></a>
                                <a href="#"><a-icon id="youtube" type="youtube" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :lg="8">
                <div class="artwork" id="abstract-three" data-aos="fade-left" data-aos-duration="2000">
                    <div class="overlay">
                        <div class="tooltip">
                            <p id="title">Strawberry Swing</p>
                            <p id="author">Coldplay</p>
                            <div class="stats">
                                8,325 <a-icon id="like" type="like" />
                            </div>
                            <div class="socials">
                                <a href="#"><a-icon id="behance" type="behance" /></a>
                                <a href="#"><a-icon id="instagram" type="instagram" /></a>
                                <a href="#"><a-icon id="twitter" type="twitter" /></a>
                                <a href="#"><a-icon id="youtube" type="youtube" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
		<div class="goto-gallery">
			<a href="#">GO TO GALLERY <a-icon id="arrow" type="arrow-right" /></a>
		</div>
    </div>
</template>
<script>
export default {
    name: 'SampleGallery'
}
</script>
<style lang="scss" scoped>
.gallery {
	$artwork-height: 540px;

	font-family: 'Manrope', sans-serif;
	text-align: center;
	background-color: #eee;
	padding-top: 36px;
	padding-bottom: 36px;
	
	color: #333;

	#title {
		font-weight: 700;
		font-size: 48px;
	}

	#description {
		font-weight: 300;
		font-size: 28px;
	}

	.sample-collection {
		margin: 0px 80px 0px 80px;
	}

	.artwork {
		cursor: pointer;
		position: relative;
		min-height: $artwork-height;
		margin: 35px;
		box-shadow: 4px 6px 12px #1d1d1f;

		&:hover > .overlay {
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: #000;
			opacity: 0.8;

			.tooltip {
				visibility: visible !important;
			}

			transition-duration: 0.75s;
		}
	}

	.tooltip {
		padding: 4px;
		visibility: hidden;
		padding-top: ($artwork-height/2)*0.75;
		color: white;

		#title {
			font-size: 32px;
			font-weight: 200;
		}

		#author {
			font-size: 18px;
			font-weight: 700;
		}

		.stats {
			font-size: 18px;

			#like {
				color: #3bdb8b;
			}
		}

		.socials {
			margin-top: 18px;

			a {
				font-size: 24px;
				padding: 0px 6px 0px 6px;
			}

			#behance {
				color: #1769ff;
			}

			#instagram {
				color: #e1306c;
			}

			#youtube {
				color: #ff0000;
			}

			#dribbble {
				color: #9ba5a8;
			}

			#twitter {
				color: #1da1f2;
			}
		}
	}
}
</style>