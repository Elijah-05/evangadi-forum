import { atom, useAtom } from "jotai";

const userData = atom(null);
const questions = atom([]);

export { userData, questions };
