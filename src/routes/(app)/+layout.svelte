<script lang="ts">
    import '../../app.postcss';
    import Sidebar from './Sidebar.svelte';
    import Topbar from './Topbar.svelte';
    import type { LayoutData } from './$types';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';


    export let data: LayoutData;

    onMount(() => {


    });

    $: expand = expandPages.some((path) => $page.url.pathname.startsWith(path));
    $: fullPage = fullPagePages.some((path) => $page.url.pathname.startsWith(path));

    const expandPages: string[] = ['/ecmrs/', '/loading'];

    const fullPagePages: string[] = ['/loading'];
</script>

<div class="flex flex-col h-screen">
    <Topbar bind:user={data.authenticated} />
    <div class=" bg-white">
<!--        <div class="hidden flex-col" class:lg:flex={!fullPage}>-->
<!--            <Sidebar system={data.system} />-->
<!--        </div>-->
        <main
                class=" overflow-auto "
                class:lg:flex-initial={!expand}
        >
            <slot />
        </main>
    </div>
</div>

<!--<JobModal />-->

<style>
    .content-height {
        height: calc(100vh - 3.75rem);
    }
</style>
