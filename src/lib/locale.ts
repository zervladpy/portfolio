export type Locale = {
    code: string
    name: string
}

export type locale = "en" | "es" | "pt" | "it" | "ru";

export const locales: Locale[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" },
    { code: "it", name: "Italiano" },
    { code: "ru", name: "Русский" },
]
