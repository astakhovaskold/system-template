import {customAlphabet, nanoid} from 'nanoid';

export function randomId() {
    return nanoid();
}

export function randomInt(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min = 20, max = 1000) {
    return Math.random() * (max - min) + min;
}

export const randomLowercase = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);
export const randomUppercase = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);

export const randomBoolean = (): boolean => Math.random() >= 0.5;
