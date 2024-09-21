import { defineStore } from 'pinia';
import boardData from '@/data/board.json';

export const useBoardStore = defineStore('boardStore', () => {
    const board = ref(boardData);

    const lanes = computed(() => {
        return board.value.lanes;
    });

    const addTask = (laneId: string, taskTitle: string, index: number) => {
        if (taskTitle.length) {
            board.value.tasks.push({
                id: crypto.randomUUID(),
                title: taskTitle,
                description: '',
                lane_id: laneId,
                moscow: '?'
            });
        }
    }

    const deleteTask = (laneId: string, taskId: string) => {
        board.value.tasks = board.value.tasks.filter(task => task.id !== taskId);
    }

    const getLaneTasks = (laneId: string) => {
        const myLane = board.value.lanes.find(lane => lane.id === laneId);
        const myTasks = board.value.tasks.filter(task => task.lane_id === laneId);
        return myTasks || [];
    }

    const moveTask = (taskId: string, laneId: string) => {
        const task = board.value.tasks.find(task => task.id === taskId);
        if (task) {
            task.lane_id = laneId;
        }
    }

    return {
        // state
        board,
        // getters
        lanes,
        // actions
        addTask,
        deleteTask,
        getLaneTasks,
        moveTask
    }
});
