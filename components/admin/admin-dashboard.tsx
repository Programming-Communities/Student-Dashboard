"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft } from 'lucide-react'
import { StudentList } from './student-list'
import { SubjectManager } from './subject-manager'
import { HomeworkManager } from './homework-manager'
import { AssignmentManager } from './assignment-manager'

export default function AdminDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => router.push('/dashboard')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold ml-2">Admin Dashboard</h2>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <Tabs defaultValue="students" className="space-y-4">
          <TabsList>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="homework">Homework</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <StudentList />
          </TabsContent>

          <TabsContent value="subjects">
            <SubjectManager />
          </TabsContent>

          <TabsContent value="homework">
            <HomeworkManager />
          </TabsContent>

          <TabsContent value="assignments">
            <AssignmentManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}