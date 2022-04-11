export function validateIconItemList(tools) {
  const errors = [];
  if (!Array.isArray(tools))
    errors.push(
      `Tools should be an Array, but is type '${typeof tools}'. `
    );
  for (const tool of tools) {
    if (typeof tool !== "object")
      errors.push(
        `Tool should be type 'object', but is type '${typeof tool}'. `
      );
    const { iconId, label } = tool;
    if (!iconId) errors.push(`Tool does not have property 'iconId'. `);
    if (typeof iconId !== "string")
      errors.push(
        `'IconId should be type 'string', but is type '${typeof iconId}'. `
      );
    if (!label) errors.push(`Tool does not have property 'label'. `);
    if (typeof label !== "string")
      errors.push(
        `Label should be type 'string', but is type '${typeof label}'. `
      );
  }
  for (const error of errors) console.error("Project Tools: " + error);
  return errors.length === 0;
}
