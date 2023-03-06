import {DefaultService} from '$lib/generated';
import {authorize} from '$lib/utils/Api';
import type {LayoutLoad} from '../$types';
import {paramsToPagination} from "../../../lib/utils/Pagination";

export const load: LayoutLoad = async ({url}) => {
    authorize(url);
    return {
        authenticated: await DefaultService.getAuthenticateduser(),
        shipments: await DefaultService.postListallshipments({
            a0: paramsToPagination(url.searchParams)
        }),
        jobs: await DefaultService.postListplannings({
            a0: paramsToPagination(url.searchParams),
            a1: false
        })
    }
};


