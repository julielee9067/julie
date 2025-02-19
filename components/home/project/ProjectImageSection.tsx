"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ProjectImageSectionProps {
    images: string[]
    currentImageIndex: number
    onNext: () => void
    onPrevious: () => void
    title: string
}

export function ProjectImageSection({
                                        images,
                                        currentImageIndex,
                                        onNext,
                                        onPrevious,
                                        title,
                                    }: ProjectImageSectionProps) {
    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
            <Image
                src={images[currentImageIndex] || "/assets/placeholder.svg"}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
            />
            {images.length > 1 && (
                <>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                        onClick={onPrevious}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                        onClick={onNext}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                </>
            )}
        </div>
    )
}
