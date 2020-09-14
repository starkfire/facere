<template>
	<div class="events">
		<a-row>
			<a-col :xs="24" :lg="8" data-aos="fade-right" data-aos-duration="1500">
				<p id="title">Events</p>
				<p id="description">
					Far away and too busy to attend an event? Featurist lets you buy tickets and
					attend live events and shows virtually on any device.
				</p>
			</a-col>
			<a-col :xs="24" :lg="16">
				<div class="events-list">
					<div class="event">
						<a-row class="event-one" data-aos="fade-up" data-aos-duration="1500">
							<a-col id="poster" :xs="24" :lg="12">
								<a id="sale">25% Sale</a>
							</a-col>
							<a-col id="details" :xs="24" :lg="12">
								<p id="event-name">Live: John Doe</p>
								<p id="event-date">Dec. 4, 2020 | 8:00PM PHT</p>
								<a id="reserve">Reserve (&#8369; 130.00)</a>
							</a-col>
						</a-row>
					</div>
					<div class="event">
						<a-row class="event-two" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
							<a-col id="poster" :xs="24" :lg="12">
								<div id="vr-ready">
									<img src="../assets/img/virtual-reality.svg" /> VR-READY
								</div>
							</a-col>
							<a-col id="details" :xs="24" :lg="12">
								<p id="event-name">P. Roxas Exhibit</p>
								<p id="event-date">Nov. 5 - 8, 2020 | 5:00 PM - 08:00PM PHT</p>
								<a id="reserve">Reserve (&#8369; 350.00)</a>
							</a-col>
						</a-row>
					</div>
				</div>
			</a-col>
		</a-row>
	</div>
</template>
<script>
export default {
	name: 'Events'
}
</script>
<style lang="scss" scoped>

.events {
	background: rgb(255, 168, 55);
	font-family: 'Manrope', sans-serif;
	color: #fff;
	padding-left: 40px;

	#title {
		margin-top: 50%;
		font-size: 48px;
		font-weight: 700;
	}

	#description {
		font-size: 21px;
		font-weight: 400;
	}
}

.event {
	margin: 64px;
	font-family: 'Manrope', sans-serif;

	#poster {
		min-height: 250px;
		border-radius: 15px 0px 0px 15px;

		%sale-tag {
			cursor: default;
			padding: 7px 14px;
			margin-top: 28px;
			position: relative;
			display: inline-block;
			color: #fff;
		}

		#sale {
			@extend %sale-tag;
			background-color: rgb(189, 52, 52);

			@keyframes rotateClock {
				0% {
					transform: rotate(0deg);
				}

				50% {
					transform: rotate(180deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}
		}

		#vr-ready {
			position: absolute;
			bottom: 28px;
			font-weight: 700;
			color: #000;
			border-radius: 0px 8px 8px 0px;
			background-color: #fff;
			padding: 7px 14px;

			img {
				height: 28px;
			}
		}
	}

	#details {
		padding-left: 25px;
		font-weight: 700;
		min-height: 250px;
		background-color: #fff;
		border-radius: 0px 15px 15px 0px;
		text-transform: uppercase;
		letter-spacing: 1.05px;
		color: #000;

		#price {
			padding: 7px 4px 7px 4px;
			background-color: rgb(175, 64, 64);
			color: white;
		}

		#event-name {
			font-size: 24px;
			padding-top: 48px;
		}

		#event-date {
			font-size: 14px;
			padding-bottom: 14px;
		}
	}

	#reserve {
		padding: 7px 14px;
		border: 2px solid rgb(7, 177, 199);

		&:hover {
			background-color: rgb(7, 177, 199);
			color: #fff;
		}
	}
}

</style>