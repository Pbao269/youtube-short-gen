'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

const suggestions = [
    'Kid Story',
    'Action Adventure',
    'Comedy Sketch',
    'Horror Short',
    'Science Fiction',
    'Fantasy World',
    'Drama',
    'Romantic Scene',
    'Animated Tale',
    'Mystery Puzzle',
    'Superhero Origin',
    'Historical Drama',
    'Musical Number',
    'Thriller Chase',
    'Documentary Style'
  ]
function Topic() {
    const [selectTopic, setSelectTopic] = useState();
  return (
    <div>
        <h2 className='mb-2'>Video Title</h2>
        <Input placeholder='Enter Your Video Title' />
        <div className='mt-5'>   
            <h2>Topic</h2>
            <p className='text-sm text-muted-foreground'>Choose a topic that best fits your video</p>
            <Tabs defaultValue="suggestion" className="w-full mt-2">
                <TabsList>
                    <TabsTrigger value="suggestion">Suggestion</TabsTrigger>
                    <TabsTrigger value="customize">Customize</TabsTrigger>
                </TabsList>

                <TabsContent value="suggestion">
                    <div className='flex flex-wrap'>
                    {suggestions.map((topic, index) => (
                        <Button key={index} onClick={() => setSelectTopic(topic)} variant="outline" className={`m-1 ${selectTopic === topic ? 'bg-primary text-primary-foreground' : ''}`}>
                        {topic}
                        </Button>
                    ))}
                    </div>
                </TabsContent>

                <TabsContent value="customize">
                    <Input placeholder='Enter Custom Topic' />
                </TabsContent>
            </Tabs>


        </div>
    </div>
  )
}

export default Topic
