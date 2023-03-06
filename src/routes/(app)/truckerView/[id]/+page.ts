import { DefaultService } from '$lib/generated';
import { authorize } from '$lib/utils/Api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, url }) => {
    authorize(url);
    return {
        shipment: DefaultService.postGetshipment({ a0: Number(params.id) })
    };
};
