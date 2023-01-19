import { JSONSchema } from "../interfaces/json-schema";

export function recursivePopulateProps(properties: Record<string, JSONSchema>, definitions: Record<string, JSONSchema>) {
  const propertiesArray = (Object.entries(properties) as unknown) as [string, JSONSchema][];

  propertiesArray.forEach(([param_name, details]) => {
    const type = details.type;
    const ref = details.$ref;

    if (type === "array") {
      const items = details.items;
      if (items) {
        if ((items as JSONSchema).$ref) {
          const refName = (items as JSONSchema).$ref!.split("/").pop();
          properties[param_name].items = definitions[refName as string];
        }
      }
    } else if (ref) {
      const refName = ref.split("/").pop();
      properties[param_name] = definitions[refName as string];
    }
    if (properties[param_name]?.properties) recursivePopulateProps(properties[param_name]?.properties!, definitions);
    // @ts-ignore
    if (properties[param_name]?.items?.properties) recursivePopulateProps(properties[param_name]?.items?.properties!, definitions);
  });

  return properties;
}
