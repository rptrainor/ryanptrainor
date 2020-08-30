import { Machine } from "xstate";
export const ScreenGrabMachine = Machine({
  id: "slide",
  initial: "view",
  states: {
    pause: {
      id: "pause",
      states: {
        0: {
          on: {
            PLAY: "#slide.view.1",
          },
        },
        1: {
          on: {
            PLAY: "#slide.view.2",
          },
        },
        2: {
          on: {
            PLAY: "#slide.view.3",
          },
        },
        3: {
          on: {
            PLAY: "#slide.view.4",
          },
        },
        4: {
          on: {
            PLAY: "#slide.view.0",
          },
        },
      },
    },
    view: {
      id: "view",
      initial: "0",
      states: {
        0: {
          on: {
            PAUSE: "#slide.pause.0",
          },
          after: {
            3000: "1",
          },
        },
        1: {
          on: {
            PAUSE: "#slide.pause.1",
          },
          after: {
            3000: "2",
          },
        },
        2: {
          on: {
            PAUSE: "#slide.pause.2",
          },
          after: {
            3000: "3",
          },
        },
        3: {
          on: {
            PAUSE: "#slide.pause.3",
          },
          after: {
            3000: "4",
          },
        },
        4: {
          on: {
            PAUSE: "#slide.pause.4",
          },
          after: {
            3000: "0",
          },
        },
      },
    },
  },
});
