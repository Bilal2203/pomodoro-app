import { initialState } from "../state";

export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "MODAL_SETTING":
      return { ...state, modalStatus: actions.modalStatus };
    case "CHANGE_THEME":
      return { ...state, theme: actions.theme };
    case "CHANGE_BUTTON_COLOR":
      return { ...state, buttonColor: actions.buttonColor };
    case "CHANGE_SOME_SETTING":
      return { ...state, settingsModal: actions.settingsModal };
    case "CHANGE_TIMES":
      return { ...state, times: actions.times };
    case "NEXTMODAL_SETTING":
      return { ...state, nextModalStatus: actions.nextmodalStatus };

    default:
      return state;
  }
};
