<script lang="ts">
	export let tech: string;
	export let icon: string;
</script>

<div title={tech} class="bg-shadow p-4 hover:shadow-lg">
	<img src={icon} alt={tech} loading="lazy" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
</div>
