"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function SubjectManager() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Mathematics", class: "10", teacher: "Mr. Johnson" },
    { id: 2, name: "Science", class: "10", teacher: "Mrs. Smith" },
  ])

  const [newSubject, setNewSubject] = useState({
    name: "",
    class: "",
    teacher: ""
  })

  const handleAddSubject = () => {
    setSubjects([...subjects, { id: subjects.length + 1, ...newSubject }])
    setNewSubject({ name: "", class: "", teacher: "" })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Subjects</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Subject</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Subject Name</Label>
                <Input
                  id="name"
                  value={newSubject.name}
                  onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="class">Class</Label>
                <Select
                  value={newSubject.class}
                  onValueChange={(value) => setNewSubject({ ...newSubject, class: value })}
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
                <Label htmlFor="teacher">Teacher</Label>
                <Input
                  id="teacher"
                  value={newSubject.teacher}
                  onChange={(e) => setNewSubject({ ...newSubject, teacher: e.target.value })}
                />
              </div>
              <Button onClick={handleAddSubject}>Add Subject</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{subject.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Class {subject.class} | Teacher: {subject.teacher}
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