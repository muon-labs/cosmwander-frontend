import { Control, FieldValues, useFieldArray, useForm, UseFormRegister } from "react-hook-form";
import { JSONSchema } from "../../interfaces/json-schema";
import { SimpleButton } from "../Buttons";
import { MinusIcon, PlusIcon } from "../Icons";
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
  formControl?: Control<FieldValues, any>;
}

const FieldArray: React.FC<Props> = ({
  details,
  name,
  register,
  definitions,
  color,
  isContract,
  buttonMessage,
  bgColor,
  expandedAll,
  formControl,
}) => {
  const { fields, append, remove } = useFieldArray({
    control: formControl,
    name,
  });

  return (
    <>
      {fields.length === 0 && (
        <div className="justify-between flex">
          <p>{name} (array)</p>
          <p>no elements</p>
        </div>
      )}
      {fields.map((field, index) => (
        <JsonInteraction
          key={name + field.id}
          buttonMessage={buttonMessage}
          name={name + "." + index}
          register={register}
          properties={(details.items as JSONSchema).properties as Record<string, JSONSchema>}
          definitions={definitions}
          isContract={isContract}
          color={color}
          bgColor={bgColor === "dark" ? "light" : "dark"}
          expandedAll={expandedAll}
          formControl={formControl}
        />
      ))}
      <div className="flex gap-4 justify-end text-white">
        <SimpleButton onClick={() => append({})} className="py-1 px-2 flex items-center justify-center gap-2">
          <PlusIcon width={15} height={15} color="fill-white" /> <p>Add element</p>
        </SimpleButton>
        {fields.length > 0 && (
          <SimpleButton onClick={() => remove(fields.length - 1)} className="py-1 px-2 flex items-center justify-center gap-2">
            <MinusIcon width={12} height={12} color="fill-white" /> <p>Remove element</p>
          </SimpleButton>
        )}
      </div>
    </>
  );
};

export default FieldArray;
