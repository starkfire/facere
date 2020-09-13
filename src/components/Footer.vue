<template>
    <div class="footer">
        <a-row>
            <a-col id="left" :xs="24" :lg="12">
                <p id="logo">Ft</p>
            </a-col>
            <a-col id="right" :xs="24" :lg="12">
                <ul>
                    <li><router-link to="/events">Events</router-link></li>
                    <li><router-link to="/events">Shows</router-link></li>
                    <li><router-link to="/about">Gallery</router-link></li>
                    <li><router-link to="/donate">Donate</router-link></li>
                </ul>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
	background-color: #ddd;
	min-height: 300px;
    margin-top: 64px;
	text-align: center;

	#left {
		padding-top: (300px/2)-64px;

		#logo {
			display: inline-block;
			text-align: center;
			font-family: 'Playfair Display', serif;
			font-size: 64px;
		}
	}

	#right {
		ul {
			display: table;
			list-style: none;
			text-align: center;
			position: absolute;
		}

		li {
			display: table-cell;
		}

		a {
			display: inline-block;
			position: relative;
			margin: (300px/2)-((64px/4)) 24px 0px 24px;
			text-transform: uppercase;
			font-family: 'Manrope', sans-serif;
			font-weight: 700;
			letter-spacing: 1.4px;
			color: #222;

			&:hover {
				color: #fac999;
				transition-duration: 0.2s;
			}
		}
	}
}
</style>