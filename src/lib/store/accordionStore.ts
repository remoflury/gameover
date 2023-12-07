import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';


// for option accordions
const key = {}; // Object instances are unique, hence useful for keys

export const getAccordionContext = () => getContext(key);
export const createAccordionContext = () => {
  const current = writable(null);
  const context = { current };
  setContext(key, context);
  
  return context;
}
