import { notFound, permanentRedirect } from "next/navigation";
import { isBlogEnabled } from "@/lib/blog-visibility";

export default function BlogPage() {
    if (!isBlogEnabled) {
        notFound();
    }

    permanentRedirect("/blog/mame-shiba");
}
