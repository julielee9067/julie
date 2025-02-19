"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { useLanguage } from "@/components/LanguageProvider"
import { useState } from "react"
import { ProjectImageSection } from "@/components/home/project/ProjectImageSection"
import { ProjectDetailsSection } from "@/components/home/project/ProjectDetailsSection"
import { Project } from "@/lib/types"

interface ProjectImageModalProps {
    isOpen: boolean
    onClose: () => void
    project: Project
}

export function ProjectModal({ isOpen, onClose, project }: ProjectImageModalProps) {
    const { language } = useLanguage()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        if (!project.images || project.images.length === 0) return
        const images = project.images
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const previousImage = () => {
        if (!project.images || project.images.length === 0) return
        const images = project.images
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* Use max-h so modal size adjusts to content */}
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl ml-4">{project.title}</DialogTitle>
                    <DialogDescription className="text-base ml-4">
                        {project.description[language]}
                    </DialogDescription>
                </DialogHeader>
                <div className="p-4 space-y-4">
                    {project.images && project.images.length > 0 && (
                        <ProjectImageSection
                            images={project.images}
                            currentImageIndex={currentImageIndex}
                            onNext={nextImage}
                            onPrevious={previousImage}
                            title={project.title}
                        />
                    )}
                    <ProjectDetailsSection
                        details={{
                            timeline: project.timeline,
                            technologies: project.technologies,
                            details: project.details,
                        }}
                        language={language}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
