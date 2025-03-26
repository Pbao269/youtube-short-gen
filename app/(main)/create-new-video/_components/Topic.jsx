'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SparklesIcon } from 'lucide-react'

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
function Topic({onHandleInputChange}) {
    const [selectTopic, setSelectTopic] = useState();

    const GenerateScripts = () => {
        console.log('Generate Scripts')
    }
  return (
    <div>
        <h2 className='mb-2'>Video Title</h2>
        <Input placeholder='Enter Your Video Title' onChange={(e) => onHandleInputChange('title', e.target.value)}/>
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
                        <Button key={index} onClick={() => 
                            {setSelectTopic(topic) 
                            onHandleInputChange('topic', topic)}
                        } variant="outline" className={`m-1 ${selectTopic === topic ? 'bg-primary text-primary-foreground' : ''}`}>
                        {topic}
                        </Button>
                    ))}
                    </div>
                </TabsContent>

                <TabsContent value="customize">
                    <div>
                        <h2 className='mb-2'>Custom Topic</h2>
                        <Textarea placeholder='Enter Your Custom Topic' onChange={(e) => onHandleInputChange('topic', e.target.value)} />
                    </div>
                </TabsContent>
            </Tabs>


        </div>
        <Button className='mt-5' onClick={GenerateScripts}> <SparklesIcon/> Generate Scripts</Button>
    </div>
  )
}

export default Topic
