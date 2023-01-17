import { Control, FieldValues, useFieldArray, useForm, UseFormRegister } from "react-hook-form";
import { JSONSchema } from "../../interfaces/json-schema";
import { SimpleButton } from "../Buttons";
import JsonInteraction from "./JsonInteraction";

interface Props {
  properties: Record<string, JSONSchema>;
  name: string;
  register: UseFormRegister<FieldValues>;
  definitions: Record<string, JSONSchema>;
  details: JSONSchema;
  color?: string;
  isContract: boolean;
  buttonMessage: string;
  bgColor?: string;
  response?: Record<string, string>;
  index?: number;
  expandedAll: boolean;
  formControl: Control<FieldValues, any>;
}

const FieldArray: React.FC<Props> = ({  
    properties,
    details,
    name,
    register,
    definitions,
    color,
    isContract,
    buttonMessage,
    bgColor,
    response,
    index,
    expandedAll,
    formControl,
}) => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control:formControl, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  });

  return (
    <>
      {fields.map((field, index) => (
        <JsonInteraction
          key={name + field.id}
          buttonMessage={buttonMessage}
          name={name + '.' + index}
          register={register}
          properties={details.items.properties}
          definitions={definitions}
          isContract={isContract}
          color={color}
          bgColor={bgColor === "dark" ? "light" : "dark"}
          expandedAll={expandedAll}
          formControl={formControl}
        />
        // <input
        //   key={field.id} // important to include key with field's id
        //   {...register(`${prefix}.${index}.value`)}
        // />
      ))}
      <SimpleButton onClick={append}>Add element</SimpleButton>
    </>
  );
};

export default FieldArray;
