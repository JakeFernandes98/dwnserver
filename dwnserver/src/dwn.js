import { Dwn } from '@tbd54566975/dwn-sdk-js';
import { MessageStore } from './message/index.js';

export const messageStore = new MessageStore();
export const dwn = await Dwn.create({ messageStore });