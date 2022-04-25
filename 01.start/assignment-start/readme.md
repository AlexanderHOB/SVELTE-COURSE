# 2. Working With Conditionals & Loops

Blocks in Svelte start use the `{#block}...{/block}`syntax, so if blocks use the `{#if}...{/if}`
syntax. And, as you’ll see, we can also add an `else` block and/or `elseif` blocks as part of an `if`block.

```jsx
<script>
  export let pickedColor;
</script>

{#if pickedColor === 'green'}
  <p>I agree with you! 💚</p>
{:else if pickedColor === 'blue'}
  <p>Even better! 💙</p>
{:else if pickedColor === 'purple'}
  <p>Ok then! 💜</p>
{/if}
```