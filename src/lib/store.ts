import { writable, type Writable } from 'svelte/store';

export const contributions: Writable<HTMLDivElement> = writable();
export const background: Writable<HTMLDivElement> = writable();
export const contact: Writable<HTMLDivElement> = writable();
export const support: Writable<HTMLDivElement> = writable();
