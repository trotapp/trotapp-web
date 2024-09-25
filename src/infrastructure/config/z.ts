import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';

z.setErrorMap(
  makeZodI18nMap({
    ns: ['zod'],
    handlePath: {
      keyPrefix: 'paths',
    },
  })
);

export function zodAlwaysRefine<T extends z.ZodTypeAny>(zodType: T) {
  return z.any().superRefine(async (value, ctx) => {
    const res = await zodType.safeParseAsync(value);

    if (res.success === false)
      for (const issue of res.error.issues) {
        ctx.addIssue(issue);
      }
  }) as unknown as T;
}
export default z;
