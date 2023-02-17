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
    import {onMount} from "svelte";

    let group1 = 2;
    let group2 = 3;
    let group3 = 0;
    let group4 = 0;
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
            <TableBodyCell class="font-extrabold">#4831</TableBodyCell>
            <TableBodyCell>
                <Button color="red" class="bg-red-500">
                    <Chevron>No Dock </Chevron>
                </Button>
                <Dropdown class="w-48 overflow-y-auto py-1 h-48">
                    <DropdownItem class="font-semibold gap-2" >
                        <Radio name="group1"  bind:group={group3} value={1}>1</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={2}>2</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={3}>3</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={4}>4</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={5}>5</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={6}>6</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={7}>7</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={8}>8</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={9}>9</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={10}>10</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={11}>11</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={12}>12</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={13}>13</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={14}>14</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={15}>15</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={16}>16</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={17}>17</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={18}>18</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={19}>19</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group3} value={19}>20</Radio>
                    </DropdownItem>
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
                <Button color="red" class="bg-red-500" id="test4">
                    <Chevron >No Dock</Chevron>
                </Button>
                <Dropdown class="w-48 overflow-y-auto py-1 h-48">
                    <DropdownItem class="font-semibold gap-2" >
                        <Radio name="group1" bind:group={group4} value={1}>1</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={2}>2</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={3}>3</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={4}>4</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={5}>5</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={6}>6</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={7}>7</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={8}>8</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={9}>9</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={10}>10</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={11}>11</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={12}>12</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={13}>13</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={14}>14</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={15}>15</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={16}>16</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={17}>17</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={18}>18</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={19}>19</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group4} value={19}>20</Radio>
                    </DropdownItem>
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
                <Button color="green">
                    <Chevron>Dock #{group1}</Chevron>
                </Button>
                <Dropdown class="w-48 overflow-y-auto py-1 h-48">
                    <DropdownItem class="font-semibold gap-2" >
                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={4}>4</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={5}>5</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={6}>6</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={7}>7</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={8}>8</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={9}>9</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={10}>10</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={11}>11</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={12}>12</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={13}>13</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={14}>14</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={15}>15</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={16}>16</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={17}>17</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={18}>18</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={19}>19</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group1} value={19}>20</Radio>
                    </DropdownItem>
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
                <Button color="green" >
                    <Chevron>Dock #{group2}</Chevron>
                </Button>
                <Dropdown class="w-48 overflow-y-auto py-1 h-48">
                    <DropdownItem class="font-semibold gap-2" >
                        <Radio name="group1" bind:group={group2} value={1}>1</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={2}>2</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={3}>3</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={4}>4</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={5}>5</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={6}>6</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={7}>7</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={8}>8</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={9}>9</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={10}>10</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={11}>11</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={12}>12</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={13}>13</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={14}>14</Radio>
                    </DropdownItem>
                    <DropdownItem class=" font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={15}>15</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={16}>16</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={17}>17</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={18}>18</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={19}>19</Radio>
                    </DropdownItem>
                    <DropdownItem class="font-semibold gap-2">
                        <Radio name="group1" bind:group={group2} value={19}>20</Radio>
                    </DropdownItem>
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
<!--        <TableBodyRow>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <TableBodyRow>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <TableBodyRow>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--            <TableBodyCell> <br></TableBodyCell>-->
<!--        </TableBodyRow>-->

    </TableBody>
</Table>


<!--<Button on:click={() => goto('/truckerView/')} class="mt-10 w-24 bottom-0 right-0">Trucker View (TIJDELIJK)</Button>-->