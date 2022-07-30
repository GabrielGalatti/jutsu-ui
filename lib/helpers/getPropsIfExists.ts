export const getPropIfExists = (prop: any, key: string) => {
    if (prop) return { [key]: prop };
    return {};
}