import { Ref } from "./lib/inter.m.js";

const ref = Ref({
  in: "example",
  data: {
    counter: 0,
  },
});

setInterval(() => ref.counter++, 1000);
