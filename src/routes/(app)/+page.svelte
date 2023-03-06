<script lang="ts">
    import type {PageData} from './$types';
    import Table from '$lib/components/table/Table.svelte';
    import type {TableHeader} from '$lib/components/table/Table';
    import {Button, Chevron, Dropdown, Radio, TableBodyCell, TableBodyRow} from 'flowbite-svelte';
    import {dateOrNull} from '$lib/utils/Date';
    import {nonNullPaginationResult} from "../../lib/utils/Pagination";
    import {BundledStatusCreateModel} from "../../lib/generated";

    export let data: PageData;
    console.log(data);


    const title = 'Shipments';
    const headers: TableHeader[] = [
        {name: 'Identifier', sort: 'identifier'},
        {name: 'Sender Ref'},
        {name: 'Pickup Date', sort: 'createdAt'},
        {name: 'Receiver Ref'},
        {name: 'Delivery Date', sort: 'updatedAt'},
        {name: 'Status'},
        {name: 'Upload/Notes'}
    ];

    let state: BundledStatusCreateModel.state = BundledStatusCreateModel.state.ACCEPTED;

    //TODO Add Upload
    //TODO Add counter for shipments
    //TODO Add Notes
    // File moet nog gehashed worden naar Base 64
    // hoe fix ik de requestbody goed voor deze defaultservice call, zodat de vereiste informatie er in komt. filetype, base64, name etc.


    // let show = true;
    // let input: HTMLElement;
    //Assign the type using the getDocumentType function to then later pass along to the post
    // $: type = getDocumentType();

    function getDocumentType() {
        // if (File == file.IMAGE) {
        //     return DocumentCreateModel.type.IMAGE;
        // } else {
        //     return DocumentCreateModel.type.DOCUMENT;
        // }
    }

    async function clearFileUpload() {
        // show = false;
        // await tick();
        // show = true;
    }
    //
    // async function post(statuses: StatusIDCreateModel[], docs: DocumentCreateModel[]) {
        //Use the function from documentUtils to get the appropriate return type for DocumentCreateModel
        // const documents = documentFromFile(File, type);


        //Set the message from the textArea that pops up when clicking message
        // const message = "test";

        //Change the document to the input file, documents for the actual images/videos, statuses for the message
        //Documents is supposed to be documentFromFile so the document is compressed, there is a base 64 url and a filetype/filename
        // DefaultService.postCreateidstatuses({a0: {documents: docs, statusCreateModels: statuses}})

        //Clear the file from the input afterwards
        // clearFileUpload();
    // }

</script>

<Table {title} {headers} result={nonNullPaginationResult(data.shipments)}>
    <svelte:fragment let:items let:nth>
        {#each items as shipment, i}
            <TableBodyRow>
                <!--                <TableBodyCell>{nth + i}</TableBodyCell>-->
                <TableBodyCell>{shipment.identifier}</TableBodyCell>
                <TableBodyCell>{shipment.consignments[0].sender.name}</TableBodyCell>
                <TableBodyCell>{dateOrNull(shipment.created?.value)?.toLocaleString() ?? ''}</TableBodyCell>
                <TableBodyCell>{shipment.consignments[0].receiver.name}</TableBodyCell>
                <TableBodyCell>{dateOrNull(shipment.updated?.value)?.toLocaleString() ?? ''}</TableBodyCell>
                <TableBodyCell>
                    <Button><Chevron>{state}</Chevron></Button>
                    <Dropdown class="w-48 p-3 space-y-1">
                        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Radio bind:group={state} inline value={BundledStatusCreateModel.state.NOT_READY}><b class="text-primary-600">{BundledStatusCreateModel.state.NOT_READY}</b></Radio>
                        </li>
                        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Radio bind:group={state} inline value={BundledStatusCreateModel.state.ACCEPTED}><b class="text-primary-600">{BundledStatusCreateModel.state.ACCEPTED}</b></Radio>
                        </li>
                    </Dropdown>
                </TableBodyCell>
                <TableBodyCell>
                    <!--{#if show}-->
                    <!--    <input-->
                    <!--            class="hidden"-->
                    <!--            type="file"-->
                    <!--            on:change={post}-->
                    <!--            bind:this={input}-->
                    <!--    />-->
                    <!--{/if}-->
                    <!--<Button on:click={() => input.click()}>Upload</Button>-->

                    <!--                    <Button class="upload-btn" on:click={ () => fileInput.click() }>-->
                    <!--                        <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px"></Button>-->
                    <Button>
                        <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">
                    </Button>
                </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell><strong>Shipment Details:</strong></TableBodyCell>
                <TableBodyCell><strong>Amount: </strong>{shipment.consignments[0].containers[0].quantity}
                </TableBodyCell>
                <TableBodyCell><strong>Destination: </strong>{shipment.consignments[0].receiver.address.city}
                </TableBodyCell>
                <TableBodyCell><strong>Notes: </strong></TableBodyCell>
                <TableBodyCell><strong>Uploads: </strong></TableBodyCell>
            </TableBodyRow>
        {/each}
    </svelte:fragment>
</Table>

<!--<About bind:about={data.system}/>-->

<!--<Table hoverable={true} class="px-0">-->
<!--    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">-->
<!--        Orders (4)-->
<!--    </caption>-->
<!--    <TableHead>-->
<!--        <TableHeadCell class="font-bold text-lg">Identifier</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Dock</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Sender Ref</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Pickup Date</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Receiver Ref</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Delivery Date</TableHeadCell>-->
<!--        <TableHeadCell class="font-bold text-lg">Upload/Notes</TableHeadCell>-->
<!--    </TableHead>-->
<!--    <TableBody class="divide-y">-->
<!--        <TableBodyRow>-->
<!--            <TableBodyCell class="font-extrabold">#4831</TableBodyCell>-->
<!--            <TableBodyCell>-->
<!--                <Button color="red" class="bg-red-500">-->
<!--                    <Chevron>No Dock</Chevron>-->
<!--                </Button>-->
<!--                <Dropdown class="w-30 overflow-y-auto py-1 h-48">-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={1}>1</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={2}>2</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={3}>3</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={4}>4</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={5}>5</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={6}>6</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={7}>7</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={8}>8</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={9}>9</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={10}>10</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={11}>11</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={12}>12</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={13}>13</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={14}>14</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={15}>15</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={16}>16</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={17}>17</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={18}>18</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={19}>19</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group3} value={19}>20</Radio>-->
<!--                    </DropdownItem>-->
<!--                </Dropdown>-->
<!--            </TableBodyCell>-->
<!--            <TableBodyCell>A1234</TableBodyCell>-->
<!--            <TableBodyCell>7 February 2023</TableBodyCell>-->
<!--            <TableBodyCell>B1234</TableBodyCell>-->
<!--            <TableBodyCell>7 February 2023</TableBodyCell>-->
<!--            <TableBodyCell>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--            </TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <tr class=" text-gray-900 dark:text-white bg-white divide-y h-0">-->
<!--            <th scope="row" class="py-3 px-6">Shipment Details:</th>-->
<!--            <td class="py-3"><strong>Amount:</strong> 22 CC</td>-->
<!--            <td class="py-3 px-6"><strong>Destination:</strong> Lidl Köln</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Notes:</th>-->
<!--            <td class="py-3">Assign Dock 3</td>-->
<!--            <th scope="row" class="py-3 px-6">Uploads:</th>-->
<!--            <td class="py-3 px-6">None</td>-->
<!--        </tr>-->
<!--        <TableBodyRow class="bg-gray-300">-->
<!--            <TableBodyCell class="bg-gray-300">#4832</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">-->
<!--                <Button color="red" class="bg-red-500" id="test4">-->
<!--                    <Chevron>No Dock</Chevron>-->
<!--                </Button>-->
<!--                <Dropdown class="w-48 overflow-y-auto py-1 h-48">-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={1}>1</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={2}>2</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={3}>3</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={4}>4</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={5}>5</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={6}>6</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={7}>7</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={8}>8</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={9}>9</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={10}>10</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={11}>11</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={12}>12</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={13}>13</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={14}>14</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={15}>15</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={16}>16</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={17}>17</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={18}>18</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={19}>19</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group4} value={19}>20</Radio>-->
<!--                    </DropdownItem>-->
<!--                </Dropdown>-->
<!--            </TableBodyCell>-->

<!--            <TableBodyCell class="bg-gray-300">A1234</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">7 February 2023</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">B1234</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">8 February 2023</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--            </TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <tr class=" text-gray-900 dark:text-white bg-gray-300 divide-y h-0">-->
<!--            <th scope="row" class="py-3 px-6 ">Shipment Details:</th>-->
<!--            <td class="py-3"><strong>Amount:</strong> 22 CC</td>-->
<!--            <td class="py-3 px-6"><strong>Destination:</strong> Lidl Köln</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Notes:</th>-->
<!--            <td class="py-3 px-6">None</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Uploads:</th>-->
<!--            <td class="py-3 px-6">picture.png</td>-->
<!--        </tr>-->
<!--        <TableBodyRow>-->
<!--            <TableBodyCell>#4833</TableBodyCell>-->
<!--            <TableBodyCell>-->
<!--                <Button color="green">-->
<!--                    <Chevron>Dock #{group1}</Chevron>-->
<!--                </Button>-->
<!--                <Dropdown class="w-48 overflow-y-auto py-1 h-48">-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={1}>1</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={2}>2</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={3}>3</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={4}>4</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={5}>5</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={6}>6</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={7}>7</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={8}>8</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={9}>9</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={10}>10</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={11}>11</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={12}>12</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={13}>13</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={14}>14</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={15}>15</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={16}>16</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={17}>17</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={18}>18</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={19}>19</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group1} value={19}>20</Radio>-->
<!--                    </DropdownItem>-->
<!--                </Dropdown>-->
<!--            </TableBodyCell>-->
<!--            <TableBodyCell>A1234</TableBodyCell>-->
<!--            <TableBodyCell>7 February 2023</TableBodyCell>-->
<!--            <TableBodyCell>B1234</TableBodyCell>-->
<!--            <TableBodyCell>8 February 2023</TableBodyCell>-->
<!--            <TableBodyCell>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--            </TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <tr class=" text-gray-900 dark:text-white bg-white divide-y h-0">-->
<!--            <th scope="row" class="py-3 px-6 ">Shipment Details:</th>-->
<!--            <td class="py-3"><strong>Amount:</strong> 22 CC</td>-->
<!--            <td class="py-3 px-6"><strong>Destination:</strong> Lidl Köln</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Notes:</th>-->
<!--            <td class="py-3 px-6">None</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Uploads:</th>-->
<!--            <td class="py-3 px-6">None</td>-->
<!--        </tr>-->
<!--        <TableBodyRow>-->
<!--            <TableBodyCell class="bg-gray-300">#4834</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">-->
<!--                <Button color="green">-->
<!--                    <Chevron>Dock #{group2}</Chevron>-->
<!--                </Button>-->
<!--                <Dropdown class="w-48 overflow-y-auto py-1 h-48">-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={1}>1</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={2}>2</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={3}>3</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={4}>4</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={5}>5</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={6}>6</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={7}>7</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={8}>8</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={9}>9</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={10}>10</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={11}>11</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={12}>12</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={13}>13</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={14}>14</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class=" font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={15}>15</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={16}>16</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={17}>17</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={18}>18</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={19}>19</Radio>-->
<!--                    </DropdownItem>-->
<!--                    <DropdownItem class="font-semibold gap-2">-->
<!--                        <Radio name="group1" bind:group={group2} value={19}>20</Radio>-->
<!--                    </DropdownItem>-->
<!--                </Dropdown>-->
<!--            </TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">A1234</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">6 February 2023</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">B1234</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">9 February 2023</TableBodyCell>-->
<!--            <TableBodyCell class="bg-gray-300">-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/NjbjVZk.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--                <Button>-->
<!--                    <img src="https://i.imgur.com/6sNqYe6.png" height="16px" width="16px">-->
<!--                </Button>-->
<!--            </TableBodyCell>-->
<!--        </TableBodyRow>-->
<!--        <tr class=" text-gray-900 dark:text-white bg-gray-300 divide-y h-0">-->
<!--            <th scope="row" class="py-3 px-6 ">Shipment Details:</th>-->
<!--            <td class="py-3">Amount: 22 CC</td>-->
<!--            <td class="py-3 px-6">Destination: Lidl Köln</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Notes:</th>-->
<!--            <td class="">Pick up no earlier than 13:00</td>-->
<!--            <th scope="row" class="py-3 px-6 ">Uploads:</th>-->
<!--            <td class="py-3 px-6">video.mp3</td>-->
<!--        </tr>-->
<!--        &lt;!&ndash;        <TableBodyRow>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;        </TableBodyRow>&ndash;&gt;-->
<!--        &lt;!&ndash;        <TableBodyRow>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;        </TableBodyRow>&ndash;&gt;-->
<!--        &lt;!&ndash;        <TableBodyRow>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;            <TableBodyCell> <br></TableBodyCell>&ndash;&gt;-->
<!--        &lt;!&ndash;        </TableBodyRow>&ndash;&gt;-->

<!--    </TableBody>-->
<!--</Table>-->


<!--<Button on:click={() => goto('/truckerView/')} class="mt-10 w-24 bottom-0 right-0">Trucker View (TIJDELIJK)</Button>-->