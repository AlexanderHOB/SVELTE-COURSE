<script>
	import ContactCard from './ContactCard.svelte';
	export let userName;
	let titleJob = 'System Engineer';
	let description='A like to develop applications with latest technologies';
	let userImageUrl = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
	let userSkills = 'Svelte, Javascript, Node, Ruby, Go, React, Express, Deno, Python';

</script>

<style>
	:global(body){
		background-color: #293241;
		color:#E0FBFC;
		transition: background-color 0.3s;
		display: flex;
		align-items: center;
	}
	.container {
		max-width: 90%;
		margin:0 auto;
		display:flex;
		justify-content: center;
	}
	.contact__section{
		width: 50%;
	}
	.contact__section .input-group{
		width: 100%;
	}
	.input-group input, .input-group textarea {
		border: none;
		border-bottom: 2px solid #E0FBFC;
		outline: none;
		width: 80%;
		background-color: transparent;
		color: #EE6C4D;
		font-weight: 700;
		padding: 50 10px;
	}
	.input-group textarea {
		resize: none;
	}
</style>
<div class="container">
	
	
	<section class="contact__section">
		<div class="title__container">
			<h1>Data Contact Card</h1>
		</div>
		<div class="input-group">
			<label for="username">Name: </label>
			<input type='text' class='form-control' bind:value={userName} autocomplete="off" id="username"/>
		</div>
		<div class="input-group">
			<label for="titleJob">Job: </label>
			<input type='text' class='form-control' bind:value={titleJob} id="titleJob" />
		</div>
		<div class="input-group">
			<label for="userImageUrl">Image Url: </label>
			<input type='text' class='form-control' bind:value={userImageUrl} id="userImageUrl"/>
		</div>
		<div class="input-group">
			<label for="userSkills">Skills: </label>
			<input type='text' class='form-control' bind:value={userSkills} id="userSkills"/>
		</div>
		<div class="input-group">
			<label for="description">Description: </label>
			<textarea name='text' class='form-control' bind:value={description} rows="3" id="description"></textarea>
		</div>
	</section>
	<ContactCard {userName} {userImageUrl} {description} {titleJob} {userSkills}/>
</div>
