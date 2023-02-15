/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DimensionModel } from './DimensionModel';
import type { DocumentModel } from './DocumentModel';
import type { HandoverModel } from './HandoverModel';
import type { MapStringInt } from './MapStringInt';
import type { MapStringString } from './MapStringString';
import type { PersonModel } from './PersonModel';
import type { PlanningDataModel } from './PlanningDataModel';
import type { RawDate } from './RawDate';
import type { StatusRequirementModel } from './StatusRequirementModel';

export type ActivityModel = {
    action: ActivityModel.action;
    consignment?: (null | number);
    id: number;
    identifier?: (null | string);
    requirements: Array<StatusRequirementModel>;
    statusType: ActivityModel.statusType;
    statuses: Array<(null | {
        created: RawDate;
        deliveredEmballage?: (null | MapStringInt);
        dimensions: Array<DimensionModel>;
        documents?: (null | Array<DocumentModel>);
        handover: HandoverModel;
        id: number;
        identifier: string;
        location?: (null | string);
        message?: (null | string);
        mutations?: (null | MapStringString);
        person?: (null | PersonModel);
        pickedUpEmballage?: (null | MapStringInt);
        planningData?: (null | PlanningDataModel);
        state: 'ACCEPTED' | 'DECLINED' | 'DAMAGED' | 'MANCO' | 'NOT_READY';
        type: 'PICKUP' | 'DELIVERY' | 'CROSSDOCK_PICKUP' | 'CROSSDOCK_DELIVERY' | 'PICKUP_STARTED' | 'DELIVERY_STARTED' | 'CROSSDOCK_PICKUP_STARTED' | 'CROSSDOCK_DELIVERY_STARTED' | 'ON_ROUTE' | 'PICKUP_STARTED_CANCELED' | 'DELIVERY_STARTED_CANCELED' | 'CROSSDOCK_PICKUP_STARTED_CANCELED' | 'CROSSDOCK_DELIVERY_STARTED_CANCELED' | 'DOCK_ASSIGNED' | 'UPDATE_ACCEPTED' | 'PLANNING_PROCESSED';
    })>;
};

export namespace ActivityModel {

    export enum action {
        LOAD = 'LOAD',
        UNLOAD = 'UNLOAD',
        ATTACH = 'ATTACH',
        DETACH = 'DETACH',
    }

    export enum statusType {
        PICKUP = 'PICKUP',
        DELIVERY = 'DELIVERY',
        CROSSDOCK_PICKUP = 'CROSSDOCK_PICKUP',
        CROSSDOCK_DELIVERY = 'CROSSDOCK_DELIVERY',
        PICKUP_STARTED = 'PICKUP_STARTED',
        DELIVERY_STARTED = 'DELIVERY_STARTED',
        CROSSDOCK_PICKUP_STARTED = 'CROSSDOCK_PICKUP_STARTED',
        CROSSDOCK_DELIVERY_STARTED = 'CROSSDOCK_DELIVERY_STARTED',
        ON_ROUTE = 'ON_ROUTE',
        PICKUP_STARTED_CANCELED = 'PICKUP_STARTED_CANCELED',
        DELIVERY_STARTED_CANCELED = 'DELIVERY_STARTED_CANCELED',
        CROSSDOCK_PICKUP_STARTED_CANCELED = 'CROSSDOCK_PICKUP_STARTED_CANCELED',
        CROSSDOCK_DELIVERY_STARTED_CANCELED = 'CROSSDOCK_DELIVERY_STARTED_CANCELED',
        DOCK_ASSIGNED = 'DOCK_ASSIGNED',
        UPDATE_ACCEPTED = 'UPDATE_ACCEPTED',
        PLANNING_PROCESSED = 'PLANNING_PROCESSED',
    }


}

