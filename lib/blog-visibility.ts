export const isBlogEnabled = process.env.NEXT_PUBLIC_ENABLE_BLOG !== "false";

export function filterBlogLinks<T extends { href: string }>(items: T[]): T[] {
    if (isBlogEnabled) {
        return items;
    }

    return items.filter((item) => !item.href.startsWith("/blog"));
}
