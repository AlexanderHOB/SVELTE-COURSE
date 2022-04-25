<script>
	import ContactCard from './ContactCard.svelte';
	export let userName;
	let titleJob = 'System Engineer';
	let description='A like to develop applications with latest technologies';
	let userImageUrl = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
	let userSkills = 'Svelte, Javascript, Node, Ruby, Go, React, Express, Deno, Python';
	let formState = '';
	let createContacts = [];
	const addContactHandler = () => {
		if (userName.trim().length == 0 || titleJob.trim().length == 0 || userImageUrl.trim().length == 0 || userSkills.trim().length == 0 || description.trim().length == 0){
			formState = 'invalid';
			return;
		}
		createContacts = [...createContacts,{
			id:Math.random(),
			userName,
			titleJob,
			userImageUrl,
			userSkills,
			description
		}]
		formState = 'done';
	}
	const deleteFirstHandler = () => {
		createContacts = createContacts.slice(1);
	}
	const deleteLastHandler = () => {	
		createContacts = createContacts.slice(0,-1);
	}

</script>

<style>
	:global(*){
        box-sizing: border-box;
	}
	:global(body){
		background-color: #293241;
		color:#E0FBFC;
		transition: background-color 0.3s;
		
	}
	.container {
		width: 90%;
		margin:0 auto;
		display:flex;
		flex-flow: wrap row;
		justify-content: center;
	}
	.contact__section{
		text-align: center;
		width: 100%;
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
	.contact-list__section{
		display: flex;
		flex-flow: wrap row;
		width: 100%;
		
		justify-content: flex-start;
		align-items: flex-start;
	}
	.btn{
		border-radius: 5px;
		padding:15px;
		outline: none;
		border:none;
		font-weight: 700;
	}
	.btn-primary{
		background-color: #EE6C4D;
		color:#E0FBFC;
		transition: all 0.5s ease;
		cursor: pointer;
	}
	.btn-primary:hover{
		background-color: #E0FBFC;
		color:#EE6C4D;
	}
	@media (min-width:720px){
        .contact__section{
			width: 50%;
		}
		.contact-list__section{
			width: 50%;
			height: 80vh;
			overflow-y:auto;
		}
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
		<button on:click={addContactHandler} class="btn btn-primary">Add Contact Card</button>
		<button on:click={deleteFirstHandler} class="btn btn-primary">Delete First</button>
		<button on:click={deleteLastHandler} class="btn btn-primary">Delete Last</button>

	</section>
	
	<section class="contact-list__section">
		{#if formState === 'invalid'}
		<p>Invalid Input</p>
		{/if}
		{#each createContacts as contact, i (contact.id)}
		<ContactCard
			userName={contact.userName} 
			userImageUrl={contact.userImageUrl} 
			description={contact.description} 
			titleJob={contact.titleJob} 
			userSkills={contact.userSkills}
			/>
		{:else}
			<p>Please start adding some contacts</p>
		{/each}
		
	</section>
	
</div>
