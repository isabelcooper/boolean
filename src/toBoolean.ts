const TRUE_VALUES = ["1", "true", "on"];
const FALSE_VALUES = ["0", "false", "off", ""];

export function valueToBool(input: string | number | null | undefined) {

  // assumes that null/undefined would both be considered null
  const cleanedInput = input?.toString().toLowerCase() || 'false'

  if (TRUE_VALUES.includes(cleanedInput)) return true;
  if (FALSE_VALUES.includes(cleanedInput)) return false;

  throw new Error(`Unable to convert ${input} to boolean`);
}

