<script lang="ts">
	export let url: string;
	export let image: string;
	export let alt: string;
</script>

<a
	title={alt}
	href={url}
	target="_blank"
	rel="noreferrer"
	class="block max-w-xs bg-shadow p-4 hover:shadow-lg 2xl:max-w-sm"
>
	<img src="/images/{image}" {alt} />
</a>
