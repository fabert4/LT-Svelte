<script lang="ts">
    import type { PageData } from './$types';
    import Shipment from './Shipment.svelte';

    export let data: PageData;
    console.log(data)
</script>

<Shipment bind:shipment={data.shipment} />
