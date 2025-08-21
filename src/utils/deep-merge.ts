
function isObject(item: unknown): item is Record<string, unknown> {
  return Boolean(item && typeof item === "object" && !Array.isArray(item));
}

export function deepMerge<T>(
  target: T,
  ...sources: T[]
): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (source && isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}
