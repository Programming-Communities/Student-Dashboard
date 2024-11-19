"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SubjectGridProps {
  subjects: string[]
}

export function SubjectGrid({ subjects }: SubjectGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject) => (
        <Card key={subject}>
          <CardHeader>
            <CardTitle className="text-lg">{subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Test Score</span>
                <span className="font-medium">85/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Average Grade</span>
                <span className="font-medium">A</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}