const PAGE_CONTROL_TYPES_IDS = {
  1: "TEXTBOX ",
  2: "MULTILINETEXTBOX ",
  3: "NUMBERBOX ",
  4: "DECIMALBOX ",
  5: "PASSWORDBOX ",
  6: "DATETIMEPICKER ",
  7: "DATEPICKER ",
  8: "TIMEPICKER ",
  9: "COMBOBOX ",
  10: "MULTISELECTCOMBOBOX ",
  11: "LISTBOX ",
  12: "MULTISELECTLISTBOX ",
  13: "CHECKBOX ",
  14: "RADIOBUTTON ",
  15: "BUTTON ",
  16: "FILEUPLOAD ",
  17: "GRID ",
  18: "FILEUPLOADWITHGRID"
};

const PAGE_CONTROL_TYPES = {
  TEXTBOX: 1,
  MULTILINETEXTBOX: 2,
  NUMBERBOX: 3,
  DECIMALBOX: 4,
  PASSWORDBOX: 5,
  DATETIMEPICKER: 6,
  DATEPICKER: 7,
  TIMEPICKER: 8,
  COMBOBOX: 9,
  MULTISELECTCOMBOBOX: 10,
  LISTBOX: 11,
  MULTISELECTLISTBOX: 12,
  CHECKBOX: 13,
  RADIOBUTTON: 14,
  BUTTON: 15,
  FILEUPLOAD: 16,
  GRID: 17,
  FILEUPLOADWITHGRID: 18
};

const PAGE_CONTROL_TYPES_INFO = [
  { id: 1, name: "TEXTBOX", title: "TextBox", iconclassname: "fa-text-width" },
  {
    id: 2,
    name: "MULTILINETEXTBOX",
    title: "Multiline TextBox",
    iconclassname: "fa-align-justify"
  },
  { id: 3, name: "NUMBERBOX", title: "NumberBox", iconclassname: "fa-css3" },
  {
    id: 4,
    name: "DECIMALBOX",
    title: "DecimalBox",
    iconclassname: "fa-html5"
  },
  {
    id: 5,
    name: "PASSWORDBOX",
    title: "PasswordBox",
    iconclassname: "fa-key"
  },
  {
    id: 6,
    name: "DATETIMEPICKER",
    title: "DateTime Picker",
    iconclassname: "fa-calendar"
  },
  {
    id: 7,
    name: "DATEPICKER",
    title: "Date Picker",
    iconclassname: "fa-calendar"
  },
  {
    id: 8,
    name: "TIMEPICKER",
    title: "Time Picker",
    iconclassname: "fa-clock-o"
  },
  {
    id: 9,
    name: "COMBOBOX",
    title: "ComboBox",
    iconclassname: "fa-caret-square-o-down"
  },
  {
    id: 10,
    name: "MULTISELECTCOMBOBOX",
    title: "Multi Select ComboBox",
    iconclassname: "fa-caret-square-o-down"
  },
  { id: 11, name: "LISTBOX", title: "ListBox", iconclassname: "fa-th-list" },
  {
    id: 12,
    name: "MULTISELECTLISTBOX",
    title: "Multi Select ListBox",
    iconclassname: "fa-list-ol"
  },
  {
    id: 13,
    name: "CHECKBOX",
    title: "CheckBox",
    iconclassname: "fa-check-square"
  },
  {
    id: 14,
    name: "RADIOBUTTON",
    title: "Radio Button",
    iconclassname: "fa-dot-circle-o"
  },
  { id: 15, name: "BUTTON", title: "Button", iconclassname: "fa-save" },
  {
    id: 16,
    name: "FILEUPLOAD",
    title: "File Upload",
    iconclassname: "fa-upload"
  },
  { id: 17, name: "GRID", title: "Grid", iconclassname: "fa-th" },
  {
    id: 18,
    name: "FILEUPLOADWITHGRID",
    title: "File Upload with Grid",
    iconclassname: "fa-th-large"
  }
];

export { PAGE_CONTROL_TYPES_IDS, PAGE_CONTROL_TYPES, PAGE_CONTROL_TYPES_INFO };
