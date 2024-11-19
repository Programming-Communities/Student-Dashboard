"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function AssignmentManager() {
  const [assignments, setAssignments] = useState([
    { id: 1, subject: "English", title: "Book Report", class: "10", dueDate: "2024-03-27" },
    { id: 2, subject: "Social Studies", title: "Project Presentation", class: "10", dueDate: "2024-04-03" },
  ])

  const [newAssignment, setNewAssignment] = useState({
    subject: "",
    title: "",
    class: "",
    dueDate: ""
  })

  const handleAddAssignment = () => {
    setAssignments([...assignments, { id: assignments.length + 1, ...newAssignment }])
    setNewAssignment({ subject: "", title: "", class: "", dueDate: "" })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Assignments</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Assignment</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Assignment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={newAssignment.subject}
                  onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="class">Class</Label>
                <Select
                  value={newAssignment.class}
                  onValueChange={(value) => setNewAssignment({ ...newAssignment, class: value })}
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
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                />
              </div>
              <Button onClick={handleAddAssignment}>Add Assignment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((item) => (
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