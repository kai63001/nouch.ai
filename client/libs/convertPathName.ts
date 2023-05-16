export function renderPathName(text: string, defualt: '-' | '+' = '-') {
    const regex = /(-\s+|\s+-\s*|\s+)/g;
    const result = text.replace(regex, defualt).toLowerCase();
    return result;
}
