import { writable, type Writable } from "svelte/store";

export const state: Writable<['list'] | ['get', number]> = writable(['list'])