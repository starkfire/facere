<template>
	<div class="navbar">
		<a-row>
			<a-col :xs="24" :lg="6" :span="6" id="logo">
				<router-link to="/">Facere</router-link>
			</a-col>
			<a-col :xs="18" :lg="12" id="nav-buttons">
				<ul>
					<li><a href="#">Explore</a></li>
					<li><a href="#">Creators</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</a-col>
			<a-col :xs="6" :lg="6" id="highlight">
				<a href="#" id="auth">Signup</a>
				<a href="#" id="auth">Login</a>
			</a-col>
		</a-row>
	</div>
</template>
<script>
export default {
	name: 'Navbar'
}
</script>
<style lang="scss" scoped>

.navbar {
	width: 100%;
	min-height: 48px;

	a {
		display: inline-block;
	}

	#logo {
		display: inline-block;
		text-align: center;

		a {
			font-family: 'Playfair Display', serif;
			font-size: 36px;
			// color: white;
			color: #000;
		}
	}

	#nav-buttons {
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
			margin: 20px 24px 0px 24px;
			text-transform: uppercase;
			font-family: 'Manrope', sans-serif;
			font-weight: 700;
			letter-spacing: 1.4px;
			// color: #fff;
			color: #000;

			&:hover {
				color: #fcab5a;
				transition-duration: 0.2s;
			}
		}
	}

	#highlight {
		$x-pad: 16px;
		$y-pad: 4px;

		#auth {
			margin: (20px-$y-pad) (24px-$x-pad) (20px-$y-pad) (24px-$x-pad);
			font-family: 'Manrope', sans-serif;
			font-weight: 700;
			letter-spacing: 1.4px;
			text-transform: uppercase;
			font-size: 16px;
			background-color: #f7b879;
			padding: $y-pad $x-pad $y-pad $x-pad;
			color: white;

			&:hover {
				background-color: #fcab5a;
			}
		}
	}
}

</style>