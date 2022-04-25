<script>
	import BlockAnimation from './layouts/BlockAnimation.svelte';
	let userName="";
	let userPassword='';
	let userData = [];
	let valid = false;
	let messageError = '';

	$: if(userPassword.length < 5) {
		messageError = 'Too Short!'
		valid= false
	} else if (userPassword.length > 10){
		messageError = 'Too Large!'
		valid= false

	}else{
		messageError = ''
		valid = true;
	}

	const addUserHandler = (e)=>{
		e.preventDefault();
		userData = [...userData,{
			id: Math.random(),
			username:userName,
			password:userPassword
		}];
	}
	const deleteUserHandler = (id)=>{
		userData= userData.filter(user => user.id !== id)
	}
</script>
<style>
	:global(*){
		margin:9;
		padding:0;
		box-sizing: border-box;
		font-family: sans-serif;
	}
	ul{
		cursor: pointer;
	}
	section{
		display:flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: linear-gradient(to bottom,#f1f4f9, #dff1ff);
	}
	.box{
		position: relative;
	}
	.box .square{
		position: absolute;
		backdrop-filter: blur(5px);
		box-shadow: 0 25px 45px rgba(0,0,0,0.1);
		border:1px solid rgba(255,255,255,0.5);
		border-right: 1px solid rgba(255,255,255,.2);
		border-bottom: 1px solid rgba(255,255,255,.2);
		background:rgba(255,255,255,.1);
		border-radius: 10px;
		animation: animate 10s linear infinite;
		animation-delay: calc(1s * var(--i));
	}
	@keyframes animate {
		0%,100%{
			transform: translateY(-20px);
		}
		50%{
			transform: translateY(20px);
		}

	}
	.box .square:nth-child(1){
		top:-50px;
		right: -60px;
		width: 100px;
		height: 100px;
	}
	.box .square:nth-child(2){
		top:150px;
		left: -100px;
		width: 120px;
		height: 120px;
		z-index: 2;
	}
	.box .square:nth-child(3){
		bottom:50px;
		right: -60px;
		width: 80px;
		height: 80px;
		z-index: 2;
	}
	.box .square:nth-child(4){
		bottom:-80px;
		left: 100px;
		width: 50px;
		height: 50px;
	}
	.box .square:nth-child(5){
		top:-80px;
		left: 140px;
		width: 60px;
		height: 60px;
	}
	.container{
		position: relative;
		width: 400px;
		min-height: 400px;
		background: rgba(255,255,255,0.1);
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(5px);
		box-shadow: 0 25px 45px rgba(0,0,0,0.1);
		border: 1px solid rgba(255,255,255,.5);
		border-right: 1px solid rgba(255,255,255,.2);
		border-bottom: 1px solid rgba(255,255,255,.2);
	}
	.container.short{
		display: flex;
		flex-flow: wrap column;
	}
	.form{
		position:relative;
		width: 100%;
		height: 100%;
		padding: 40px;
	}
	.form h2{
		position:relative;
		color:#fff;
		font-size: 24px;
		font-weight: 700;
		letter-spacing: 1px;
		margin-bottom: 40px;
	}
	.form h2::before{
		content:'';
		position:absolute;
		left:0;
		bottom:-10px;
		width: 80px;
		height: 4px;
		background:#fff;
	}
	.form .inputBox{
		margin-bottom: 15px;
	}
	.form .inputBox input{
		width: 100%;
		background:rgba(255,255,255,.2);
		border:none;
		outline:none;
		padding: 10px 20px;
		border-radius: 35px;
		border: 1px solid rgba(255,255,255,.5);
		border-right: 1px solid rgba(255,255,255,.2);
		border-bottom: 1px solid rgba(255,255,255,.2);
		letter-spacing: 1px;
		color:#fff;
		box-shadow: 0 5px 15px rgba(0,0,0,0.05);
	}
	.form .inputBox input::placeholder{
		color:#fff;
	}
	.form .inputBox input[type="submit"]{
		background-color: #fff;
		color: #666;
		max-width: 100px;
		cursor: pointer;
		margin-bottom: 20px;
		font-weight: 600;
	}
	.message__error{
		color:rgb(164, 19, 19);
	}
</style>
<section>
	<BlockAnimation/>
	<div class="box">
		<div class="square" style="--i:0;"></div>
		<div class="square" style="--i:1;"></div>
		<div class="square" style="--i:2;"></div>
		<div class="square" style="--i:3;"></div>
		<div class="square" style="--i:4;"></div>
		<div class="container">
			<div class="form">
				<h2>Login Form</h2>
				<form action="" class="form">
					<div class="inputBox">
						<input type="text" placeholder="Username" bind:value={userName}>
					</div>
					<div class="inputBox">
						<input type="password" placeholder="Password" bind:value={userPassword}>
					</div>
					<div class="inputBox">
						<input type="submit" value="Login" on:click={addUserHandler} disabled={!valid}>
					</div>
					{#if messageError && !valid}
						<p class="message__error">{messageError}</p>
					{/if}
				</form>
			</div>
		</div>
		<br/>
		<ul class="container short">
			{#each userData as user,i (user.id)}
				<li on:click={ ()=>{ deleteUserHandler(user.id) }} > {user.username} - {user.password}</li>
			{:else}
				<li>No data</li>
			{/each}
		</ul>
	</div>
	<!-- <h1>Assignment</h1>

	<p>Solve these tasks.</p>
	
	<ol>
		<li>Add a password input field and save the user input in a variable.</li>
		<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
		<li>Output the password in a paragraph tag if it's between these boundaries.</li>
		<li>Add a button and let the user add the passwords to an array.</li>
		<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
		<li>Bonus: If a password is clicked, remove it from the list.</li>
	</ol> -->
</section>

