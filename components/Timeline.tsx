import type React from "react"
interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  children: React.ReactNode
}

function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 h-full w-px bg-border group-last:bg-transparent">
        <div className="absolute top-[4px] -left-[4px] h-2 w-2 rounded-full border-2 border-primary bg-background" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <time className="shrink-0 text-sm text-muted-foreground">{period}</time>
        </div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

export { TimelineItem }

