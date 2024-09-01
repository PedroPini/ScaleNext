'use client'
import { Button } from '@/components/ui/button'
import { DeleteIcon } from 'lucide-react'
import React from 'react'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
import { deleteTask, setTaskState } from './actions'
import { useRouter } from 'next/navigation'

type Props = {
    id: number
    name: string
    is_done: boolean
}

function TaskRow({ id, name, is_done }: Props) {
    const router = useRouter()

    async function onCheckClicked(taskId: number, isDone: boolean) {
        // 👉 Update a task when its completed
        await setTaskState(taskId, isDone)
        router.refresh()
    }

    async function onDeleteClicked(taskId: number) {
        // 👉 Delete a task from the database
        await deleteTask(taskId)
        router.refresh()
    }
    return (
        <div className={`group flex items-center transition-all w-full${is_done ? 'text-slate-500' : ''}`}>
            <Button
                variant='link'
                className='text-lg text-inherit disabled:cursor-not-allowed'
                onClick={() => onCheckClicked(id, !is_done)}>
                {is_done ? <FiCheckCircle /> : <FiCircle />}
            </Button>
            {name}
            <Button
                variant='link'
                className='text-lg text-inherit hover:text-red-500'
                onClick={() => onDeleteClicked(id)}>
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default TaskRow