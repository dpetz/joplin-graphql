// https://github.com/JackGruber/joplin-plugin-note-overview/blob/master/src/noteoverview.ts


import joplin from "api";
import { launch } from "./launch";

joplin.plugins.register({
  onStart: async function () {
    await noteoverview.init();
  },
});
