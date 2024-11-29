import { appInnit } from "./framework";
import { div } from "./framework/element";
import { User } from "./src/user";

const firstName = "Abdelrahman";
const lastName = "Bourka";

appInnit("#app", User({ firstName, lastName }));
