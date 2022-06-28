import { EventBus, createEventDefinition } from "ts-bus";

export const setClickerCount = createEventDefinition<{ count: number }>()("setClickerCount");
export const onClickerCountChanged = createEventDefinition<{ count: number }>()("onClickerCount");

export const bus = new EventBus();
