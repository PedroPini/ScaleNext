'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { addTask } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function AddTaskForm() {
    const [taskName, setTaskName] = useState('')
    const router = useRouter()

    async function onSubmit() {
        await addTask(taskName)
        setTaskName('')
        router.refresh()
    }

    return (
        <form action={onSubmit} className='flex gap-2'>
            <Input
                autoFocus
                type='text'
                name='name'
                onChange={e => setTaskName(e.target.value)}
                value={taskName}
                placeholder='What do you need to do?' />
            <Button type='submit' className='disabled:cursor-not-allowed'>Add</Button>
        </form>
    )
}

export default AddTaskForm