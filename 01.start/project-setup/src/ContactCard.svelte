<script>
    export let userName;
    export let titleJob;
    export let userImageUrl;
    export let description;
    export let userSkills;
</script>

<style>
    .contact-card {
        box-shadow: -10px 10px 8px rgba(0, 0, 0, 0.26);
        width: 50%;
        border-radius: 15px;
        margin: 1rem auto;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8rem;
    }

    .thumb {
        width: 33%;
        height: 100%;
    }

    .thumb-placeholder {
        background-color:#ccc;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .user-data {
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 1.25rem;
        font-family: "Roboto Slab", sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1rem;
        font-weight: normal;
        color: #E0FBFC;
        margin: 0;
        margin-bottom: 0.5rem;
    }

    .description__section {
        max-height: 100%;
        display:flex;
        flex-flow: row wrap;
        align-items: space-around;
        border-top: 1px solid #EE6C4D;
        padding: 20px;
    }
    .description__section-skills{
        font-size: 12px;
        color:#98C1D9;
    }
    .description__section-summary{
        font-size: 1 rem;
    }
</style>

<div class="contact-card">
    <header>
        <div class="thumb" class:thumb-placeholder={!userImageUrl}>
            <img src="{userImageUrl}" alt="" />
        </div>
        <div class="user-data">
            <h1>{userName}</h1>
            <h2>{titleJob}</h2>
        </div>
    </header>
    <div class="description__section">
        <p class="description__section-summary">{description}</p>
        <p class="description__section-skills">{userSkills}</p>
    </div>
</div>
