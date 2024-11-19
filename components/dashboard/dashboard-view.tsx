"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { GraduationCap, Settings } from 'lucide-react'
import { OverviewCards } from './overview-cards'
import { SubjectGrid } from './subject-grid'
import { HomeworkList } from './homework-list'
import { AssignmentList } from './assignment-list'

const classes = Array.from({ length: 10 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Class ${i + 1}`,
}))

const subjects = {
  "1": ["English", "Hindi", "Mathematics", "Environmental Studies"],
  "2": ["English", "Hindi", "Mathematics", "Environmental Studies"],
  "3": ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
  "4": ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
  "5": ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
  "6": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
  "7": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
  "8": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
  "9": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Information Technology"],
  "10": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Information Technology"]
}

export default function DashboardView() {
  const [selectedClass, setSelectedClass] = useState("1")
  const router = useRouter()
  const currentSubjects = subjects[selectedClass as keyof typeof subjects]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <GraduationCap className="h-6 w-6 mr-2" />
          <h2 className="text-lg font-semibold">Student Dashboard</h2>
          <div className="ml-auto flex items-center space-x-4">
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => router.push('/admin')}
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <OverviewCards 
          selectedClass={selectedClass} 
          subjectsCount={currentSubjects.length} 
        />

        <Tabs defaultValue="subjects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="subjects">Subjects & Grades</TabsTrigger>
            <TabsTrigger value="homework">Homework</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="subjects" className="space-y-4">
            <SubjectGrid subjects={currentSubjects} />
          </TabsContent>
          
          <TabsContent value="homework" className="space-y-4">
            <HomeworkList />
          </TabsContent>
          
          <TabsContent value="assignments" className="space-y-4">
            <AssignmentList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}