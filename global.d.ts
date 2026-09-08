// Provides full type-safety for useTranslations() and getTranslations() calls.
// next-intl uses the shape of id.json as the canonical type source.
type Messages = typeof import("./messages/id.json");
declare interface IntlMessages extends Messages {}
