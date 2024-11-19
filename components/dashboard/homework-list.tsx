"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomeworkList() {
  const homework = [
    {
      subject: "Mathematics",
      title: "Chapter 5 Exercises",
      dueDate: "Tomorrow",
      status: "pending"
    },
    {
      subject: "Science",
      title: "Lab Report",
      dueDate: "3 days",
      status: "pending"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Homework</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {homework.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{item.subject}</h4>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
              <span className={item.status === "pending" ? "text-red-500" : "text-green-500"}>
                Due in {item.dueDate}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}