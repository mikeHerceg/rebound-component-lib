import { useCallback, useState } from 'react';
import { Field, FieldTypes } from '../form.types';
import { InputField, Fieldset, RadioField, CheckboxField, TextareaField, SelectField } from '..';



export const useFormWrapper = (fields: Field[]) => {

  const [fieldsState, setFieldsState] = useState<Field[]>(fields);

  const validate = (params:any) => {
    const { formValues } = params;
    return new Promise((resolve) => {

      // loop through each validation object

      fieldsState.forEach((field) => {
        // match object with current value
        const { name, required, rules } = field;
        const value = formValues[name];
        // reset field
        field.hasError = false;
        delete field.error;
        // if required check for value
        if (required && value === '') {
          field.hasError = true;
          field.error = `${field.label} is required`;
        }
        // if value check against rules
        if (rules?.matcher) {
          const regex = new RegExp(rules.matcher);
          if (!regex.test(value)) {
            field.hasError = true;
            field.error = `${field.label} does not meet the requirements`;
          }
        }
        if (rules?.maxLength) {
          const valueLength = value.split('');
          if (valueLength.length > rules.maxLength) {
            field.hasError = true;
            field.error = `${field.label} is to long`;
          }
        }
        /// add more Rule checks here
      });

      const someErrors = fieldsState.some(field => field.hasError === true);
      if (!someErrors) {
        resolve(formValues);
      } else {
        setFieldsState([...fieldsState]);
        const errors = fieldsState.map(field => field.error && field.error);
        throw new Error(errors.join(
          errors.length !== 1 ?
            ' | ' :
            ''));
      }
    });
  };


  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    validate({ formValues, fields })
      .then(value =>
        // do something with the Values
        alert(JSON.stringify(value)),
      ).catch(error =>
      // show validation messages
        console.error(error.message),
      );
  };


  const handleFields = useCallback(() =>
    // move somewhere else at some point
    fieldsState.map((field) => {
      switch (field.type) {
        case (FieldTypes.Text):
        case (FieldTypes.Email):
        case (FieldTypes.Number):
        case (FieldTypes.Password):
          return <InputField {...field}/>;
        case (FieldTypes.Textarea):
          return <TextareaField {...field}/>;
        case (FieldTypes.Select):
          return <SelectField {...field}/>;
        case (FieldTypes.Radio):
          if (field?.options) {
            return (
              <Fieldset variant={field?.variant} legendText={field.label}>
                {field.options.map(option => (
                  <RadioField
                    id={option.value}
                    label={option.label}
                    name={field.name}
                  />
                ))}
              </Fieldset>
            );
          }
          return null;
        case (FieldTypes.Checkbox):
          if (field?.options) {
            return (
              <Fieldset variant={field?.variant} legendText={field.label}>
                {field.options.map(option => (
                  <CheckboxField
                    id={option.value}
                    label={option.label}
                    name={field.name}
                  />
                ))}
              </Fieldset>
            );
          }
          return null;
        default:
          return null;
      }
    }),
  [fields, validate, fieldsState]);


  return { handleSubmit, handleFields };
};
