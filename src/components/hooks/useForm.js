import { useState } from "react";

const useForm = ({
  onFormSubmit,
  initialState,
  onHandleChangeProps,
  onHandleBlurProps
}) => {
  const [values, setValues] = useState(initialState);

  const handleBlur = event => {
    let columnName;
    let columnValue;
    if (event.event.target.name) {
      columnName = event.event.target.name;
      columnValue = event.event.target.value;
    }

    if (
      onHandleBlurProps &&
      onHandleBlurProps.onBlurChange &&
      onHandleBlurProps.handleEventFor.find(v => v === columnName)
    ) {
      setValues(values => ({
        ...values,
        [columnName]: columnValue
      }));
      onHandleBlurProps.onBlurChange(event, {
        fieldName: columnName,
        fieldValue: columnValue
      });
    } else {
      setValues(values => ({
        ...values,
        [columnName]: columnValue
      }));
    }
  };
  const handleChange = event => {
    let columnName;
    let columnValue;
    if (event.target) {
      columnName = event.target.name;
      columnValue = event.target.value;
    } else if (event.element && event.element.id) {
      //datetime controls
      columnName = event.element.id;
      columnValue = event.value;
    } else if (event.event && event.event.target.name && event.value) {
      columnName = event.event.target.name;
      columnValue = event.value;
    } else if (
      //checkbox etc
      event.event &&
      event.event.target.name &&
      event.event.target.value
    ) {
      columnName = event.event.target.name;

      let oldValue = values.hasOwnProperty(columnName)
        ? values[columnName]
        : [];
      if (Array.isArray(oldValue)) {
        if (event.checked)
          columnValue = oldValue.concat(event.event.target.value);
        else columnValue = oldValue.filter(v => v !== event.event.target.value);
      } else {
        columnValue = event.event.target.checked; //event.event.target.value;
      }
    } else if (
      event.event &&
      event.event.srcElement &&
      event.event.srcElement.ej2_instances &&
      event.event.srcElement.ej2_instances.length > 0
    ) {
      // down level finding fir numeric controls...
      columnName = event.event.srcElement.ej2_instances[0].name;
      columnValue = event.event.srcElement.ej2_instances[0].value;
    }

    if (columnName === "" || columnValue === "") return;
    if (
      onHandleChangeProps &&
      onHandleChangeProps.onHandleChange &&
      onHandleChangeProps.handleEventFor.find(v => v === columnName)
    ) {
      setValues(values => ({
        ...values,
        [columnName]: columnValue
      }));
      onHandleChangeProps.onHandleChange(event, {
        fieldName: columnName,
        fieldValue: columnValue
      });
    } else {
      setValues(values => ({
        ...values,
        [columnName]: columnValue
      }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    //submitting/propagating event to child
    if (onFormSubmit) onFormSubmit();
  };

  

  return { values, handleBlur, handleChange, handleSubmit };
};

export default useForm;
