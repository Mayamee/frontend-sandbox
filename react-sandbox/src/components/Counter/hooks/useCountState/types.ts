import { ActionCreators } from "./useCountState";

// type ExtractType<T extends { type: string }> = T extends {
// 	type: infer U;
// }
// ? U
// : never;

// export type CountTypes = ExtractType<ReturnType<ActionCreators>>;

// export type CountTypes = ReturnType<ActionCreators>["type"];
// не эффективно тк не используется ограничения дженерика
// для защиты от неправильного типа для поля type

// можно улучшить с помощью ограничительного дженерика
// проще читать и понимать ошибку
type isString <T extends string> = T;
export type CountTypes = isString<ReturnType<ActionCreators>["type"]>;
