import { createComponent } from "../framework";
import { div } from "../framework/element";
import { onClick } from "../framework/event";

// state mutating actions
const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
};
// initial state of the User component
const initialState = { firstName: "Abdelrahman", lastName: "Bourka" };

// component template

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("ab20999")
  )} Hello ${firstName} ${lastName}`;

// create a real world component
export const User = createComponent({ template, methods, initialState });
