import create, { UseBoundStore } from 'zustand'
//import { subscribeWithSelector } from 'zustand/middleware';

const BasicStore: UseBoundStore<any> = create(() => ({
    headerName: {},
}));

export {BasicStore}