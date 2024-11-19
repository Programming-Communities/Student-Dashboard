"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AssignmentList() {
  const assignments = [
    {
      subject: "English",
      title: "Book Report",
      dueDate: "1 week",
      status: "upcoming"
    },
    {
      subject: "Social Studies",
      title: "Project Presentation",
      dueDate: "2 weeks",
      status: "upcoming"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{item.subject}</h4>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
              <span className={item.status === "upcoming" ? "text-blue-500" : "text-green-500"}>
                Due in {item.dueDate}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}