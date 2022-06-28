import { EventBus, createEventDefinition } from "ts-bus";

export const clickerEvent = createEventDefinition<{ count: number }>()("CLICKER_EVENT");

export const bus = new EventBus();
