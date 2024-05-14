export const getClassNames = (
  ...args: (string | boolean | number | undefined | null)[]
): string => args.filter(Boolean).join(' ');
