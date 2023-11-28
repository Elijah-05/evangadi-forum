import { atom, useAtom } from "jotai";

const userData = atom(null);
const questions = atom([]);
const logState = atom("log_in");
const logAnimation = atom(false);
const registered = atom(null);

export { userData, questions, logState, logAnimation, registered };
