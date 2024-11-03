import { IEntityState, IListState } from "./Common";

export type IssType = {
    name: string;
    id: number;
    latitude: number;
    longitude: number;
    altitude: number;
    velocity: number;
    visibility: string;
    footprint: number;
    timestamp: number;
    daynum: number;
    solar_lat: number;
    solar_lon: number;
    units: string;
}

export type IssStateType={
    post: IEntityState<IssType>;
    list: IListState<IssType>;
}


export const ISS = 'iss';
export type ISS = typeof ISS;

export const GET_ISS = `${ISS}/getIssAction`;
export type GET_ISS = typeof GET_ISS;
export const GET_ISS_LIST = `${ISS}/getIssListAction`;
export type GET_ISS_LIST = typeof GET_ISS_LIST;
