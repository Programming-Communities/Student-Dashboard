"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function HomeworkManager() {
  const [homework, setHomework] = useState([
    { id: 1, subject: "Mathematics", title: "Chapter 5 Exercises", class: "10", dueDate: "2024-03-20" },
    { id: 2, subject: "Science", title: "Lab Report", class: "10", dueDate: "2024-03-23" },
  ])

  const [newHomework, setNewHomework] = useState({
    subject: "",
    title: "",
    class: "",
    dueDate: ""
  })

  const handleAddHomework = () => {
    setHomework([...homework, { id: homework.length + 1, ...newHomework }])
    setNewHomework({ subject: "", title: "", class: "", dueDate: "" })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Homework</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Homework</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Homework</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={newHomework.subject}
                  onChange={(e) => setNewHomework({ ...newHomework, subject: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newHomework.title}
                  onChange={(e) => setNewHomework({ ...newHomework, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="class">Class</Label>
                <Select
                  value={newHomework.class}
                  onValueChange={(value) => setNewHomework({ ...newHomework, class: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>
                        Class {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={newHomework.dueDate}
                  onChange={(e) => setNewHomework({ ...newHomework, dueDate: e.target.value })}
                />
              </div>
              <Button onClick={handleAddHomework}>Add Homework</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {homework.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{item.subject}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.title} | Class {item.class} | Due: {item.dueDate}
                </p>
              </div>
              <Button variant="outline">Edit</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}