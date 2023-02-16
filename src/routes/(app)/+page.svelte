<script lang="ts">
    import type {PageData} from './$types';
    import About from '$lib/components/About.svelte';
    import {
        Avatar,
        Button,
        Chevron, Radio,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from 'flowbite-svelte';
    import {Dropdown, DropdownItem, DropdownDivider, DropdownHeader} from 'flowbite-svelte'
    import {goto} from "$app/navigation";

    let group1 = 2;
    let group2 = 3;
    export let data: PageData;
</script>

<!--<About bind:about={data.system}/>-->

<Table hoverable={true}>
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Orders (4)
    </caption>
    <TableHead>
        <TableHeadCell class="font-bold text-lg">Identifier</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Dock</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Sender Ref</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Pickup Date</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Receiver Ref</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Delivery Date</TableHeadCell>
        <TableHeadCell class="font-bold text-lg">Upload/Notes</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        <TableBodyRow>
            <TableBodyCell>#4831</TableBodyCell>
            <TableBodyCell>
                <Button color="red" class="bg-red-500">
                    <Chevron>Assign Dock</Chevron>
                </Button>
                <Dropdown class="w-44 p-3 space-y-3 text-sm">
                    <li>
                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>
                    </li>
                </Dropdown>
            </TableBodyCell>
            <TableBodyCell>A1234</TableBodyCell>
            <TableBodyCell>7 February 2023 13:59</TableBodyCell>
            <TableBodyCell>B1234</TableBodyCell>
            <TableBodyCell>7 February 2023 14:00</TableBodyCell>
            <TableBodyCell>
                <Button>
                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">
                </Button>
                <Button>
                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <tr class=" text-gray-900 dark:text-white bg-white divide-y h-0">
            <th scope="row" class="py-3 px-6">Shipment Details: </th>
            <td class="py-3">Amount: 22 CC</td>
            <td class="py-3 px-6">Destination: Lidl Köln</td>
            <th scope="row" class="py-3 px-6 ">Notes: </th>
            <td class="py-3">Assign Dock 3</td>
            <th scope="row" class="py-3 px-6">Uploads: </th>
            <td class="py-3 px-6">None</td>
        </tr>
        <TableBodyRow class="bg-gray-300">
            <TableBodyCell class="bg-gray-300">#4832</TableBodyCell>
            <TableBodyCell class="bg-gray-300">
                <Button color="red" class="bg-red-500">
                    <Chevron>Assign Dock</Chevron>
                </Button>
                <Dropdown class="w-44 p-3 space-y-3 text-sm">
                    <li>
                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>
                    </li>
                </Dropdown>
            </TableBodyCell>

            <TableBodyCell  class="bg-gray-300">A1234</TableBodyCell>
            <TableBodyCell  class="bg-gray-300">7 February 2023 13:59</TableBodyCell>
            <TableBodyCell  class="bg-gray-300">B1234</TableBodyCell>
            <TableBodyCell  class="bg-gray-300">7 February 2023 14:00</TableBodyCell>
            <TableBodyCell  class="bg-gray-300">
                <Button>
                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">
                </Button>
                <Button>
                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <tr class=" text-gray-900 dark:text-white bg-gray-300 divide-y h-0">
            <th scope="row" class="py-3 px-6 ">Shipment Details: </th>
            <td class="py-3">Amount: 22 CC</td>
            <td class="py-3 px-6">Destination: Lidl Köln</td>
            <th scope="row" class="py-3 px-6 ">Notes: </th>
            <td class="py-3 px-6">None</td>
            <th scope="row" class="py-3 px-6 ">Uploads: </th>
            <td class="py-3 px-6">picture.png</td>
        </tr>
        <TableBodyRow>
            <TableBodyCell>#4833</TableBodyCell>
            <TableBodyCell>
                <Button color="green" class="bg-green-500">
                    <Chevron>Dock {group2}</Chevron>
                </Button>
                <Dropdown class="w-44 p-3 space-y-3 text-sm">
                    <li>
                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>
                    </li>
                </Dropdown>
            </TableBodyCell>
            <TableBodyCell>A1234</TableBodyCell>
            <TableBodyCell>7 February 2023 13:59</TableBodyCell>
            <TableBodyCell>B1234</TableBodyCell>
            <TableBodyCell>7 February 2023 14:00</TableBodyCell>
            <TableBodyCell>
                <Button>
                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">
                </Button>
                <Button>
                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <tr class=" text-gray-900 dark:text-white bg-white divide-y h-0">
            <th scope="row" class="py-3 px-6 ">Shipment Details: </th>
            <td class="py-3">Amount: 22 CC</td>
            <td class="py-3 px-6">Destination: Lidl Köln</td>
            <th scope="row" class="py-3 px-6 ">Notes: </th>
            <td class="py-3 px-6">None</td>
            <th scope="row" class="py-3 px-6 ">Uploads: </th>
            <td class="py-3 px-6">None</td>
        </tr>
        <TableBodyRow>
            <TableBodyCell  class="bg-gray-300">#4834</TableBodyCell>
            <TableBodyCell class="bg-gray-300" >
                <Button color="green" class="bg-green-500">
                    <Chevron>Dock {group2}</Chevron>
                </Button>
                <Dropdown class="w-44 p-3 space-y-3 text-sm">
                    <li>
                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>
                    </li>
                    <li>
                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>
                    </li>
                </Dropdown>
            </TableBodyCell>
            <TableBodyCell class="bg-gray-300">A1234</TableBodyCell>
            <TableBodyCell class="bg-gray-300">7 February 2023 13:59</TableBodyCell>
            <TableBodyCell class="bg-gray-300">B1234</TableBodyCell>
            <TableBodyCell class="bg-gray-300">7 February 2023 14:00</TableBodyCell>
            <TableBodyCell class="bg-gray-300">
                <Button>
                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">
                </Button>
                <Button>
                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <tr class=" text-gray-900 dark:text-white bg-gray-300 divide-y h-0">
            <th scope="row" class="py-3 px-6 ">Shipment Details: </th>
            <td class="py-3">Amount: 22 CC</td>
            <td class="py-3 px-6">Destination: Lidl Köln</td>
            <th scope="row" class="py-3 px-6 ">Notes: </th>
            <td class="">Pick up no earlier than 13:00</td>
            <th scope="row" class="py-3 px-6 ">Uploads: </th>
            <td class="py-3 px-6">video.mp3</td>
        </tr>
    </TableBody>
</Table>


<!--<Button on:click={() => goto('/truckerView/')} class="mt-10 w-24 bottom-0 right-0">Trucker View (TIJDELIJK)</Button>-->