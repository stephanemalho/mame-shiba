import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type InternalLinkItem = {
    href: string
    title: string
    description: string
}

type InternalLinksSectionProps = {
    title: string
    description?: string
    items: InternalLinkItem[]
    className?: string
}

export function InternalLinksSection({
    title,
    description,
    items,
    className,
}: InternalLinksSectionProps) {
    return (
        <section className={cn("space-y-8", className)}>
            <div className="text-center space-y-3">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                {description ? (
                    <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
                ) : null}
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <Card className="h-full border-muted bg-muted/35 transition-colors group-hover:border-primary/35 group-hover:bg-muted/55">
                            <CardHeader className="space-y-3">
                                <CardTitle className="text-lg leading-snug group-hover:text-primary">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}
