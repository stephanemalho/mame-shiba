export type Puppy = {
    name: string
    coat: string
    color: string
    sexe: string
    weight: string
    parents: string
    readyDate: string
    age: string
    size: string
    ruler: string
    description: string
    health?: string[]
    highlights: string[]
    images: string[]
    linkTo: string
    isAvailable?: boolean
}

// Ajouter ici les chiots à mettre en avant lorsqu'une portée est née
// et que des réservations / disponibilités doivent être affichées.
export const puppies: Puppy[] = []
