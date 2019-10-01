import { PAGE_CONTROL_TYPES } from "../../../../lib/enums/pagecontrols.enum";

const formBuilderActionTypes = {
  ADD_CONTROL: "ADD_CONTROL",
  REMOVE_CONTROL: "REMOVE_CONTROL",
  MODIFY_LAYOUTS: "MODIFY_LAYOUTS",
  TOGGLE_CONTROL_EDIT: "TOGGLE_CONTROL_EDIT"
};

const INITIAL_DATA = {};

const formBuilderReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case formBuilderActionTypes.ADD_CONTROL:
      return {
        ...state,
        controls: [...state.controls, action.payload],
        layout: [...state.layout, getFormLayout(state, action.payload)]
      };
    case formBuilderActionTypes.REMOVE_CONTROL:
      return {
        ...state,
        controls: state.controls.filter(
          c => c.controlid !== action.payload.controlid
        ),
        layout: state.layout.filter(c => c.i !== action.payload.controlid),
        editcontrolinfo: {
          ...state.editcontrolinfo,
          toggleeditview: false
        }
      };
    case formBuilderActionTypes.MODIFY_LAYOUTS:
      return {
        ...state,
        layout: action.payload
      };
    case formBuilderActionTypes.TOGGLE_CONTROL_EDIT:
      return {
        ...state,
        editcontrolinfo: action.payload
      };
    default:
      return state;
  }
};

const getFormLayout = (state, payload) => {
  const MAX_COLUMNS = 10;
  const FORM_CONROL_WIDTH = 5;
  const FORM_CONROL_HEIGHT = 1;
  const FORM_CONROL_HEIGHT_FORLIST = 5;

  let min_controlHeight = FORM_CONROL_HEIGHT;
  let max_controlHeight = FORM_CONROL_HEIGHT;
  if (
    payload.controltypeid === PAGE_CONTROL_TYPES.MULTISELECTLISTBOX ||
    payload.controltypeid === PAGE_CONTROL_TYPES.LISTBOX
  ) {
    min_controlHeight = FORM_CONROL_HEIGHT_FORLIST;
    max_controlHeight = Infinity;
  }

  return {
    x: (state.layout.length * FORM_CONROL_WIDTH) % MAX_COLUMNS,
    y: Math.floor(state.layout.length / (MAX_COLUMNS / FORM_CONROL_WIDTH)) * 1,
    w: FORM_CONROL_WIDTH,
    h: min_controlHeight,
    minH: min_controlHeight,
    maxH: max_controlHeight,
    i: payload.controlid
  };
};

export { formBuilderReducer, formBuilderActionTypes };
