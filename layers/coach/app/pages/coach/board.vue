<script setup lang="ts">
import { useBoardStore } from '~/stores/boardStore';

const boardStore = useBoardStore();
const board = boardStore.board;
const lanes = boardStore.lanes;
const new_task = ref({});

const initializeLanes = () => {
    boardStore.board.lanes.forEach(lane => {
        new_task.value[lane.id] = '';
    });
}

initializeLanes();

const addTask = (laneId: string, taskTitle: string) => {
    boardStore.addTask(laneId, taskTitle);
    new_task.value[laneId] = '';
};

const deleteTask = (laneId: string, taskId: string) => {
    boardStore.deleteTask(laneId, taskId);
};

const dragTaskStart = (event: DragEvent, taskId: string, task_index: number) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('taskId', taskId);
    event.dataTransfer.setData('task_index', task_index);
}

const dragTaskEnd = (event: DragEvent, laneId: string) => {
    boardStore.moveTask(event.dataTransfer.getData('taskId'), laneId);
}
</script>

<template>
    <h1 class="mb-8 text-center text-4xl font-bold mt-4">{{ board.name }} {{ boardStore.lanes.length }}</h1>
    <div class="mb-6 px-8 place-content-stretch gap-8 grid grid-cols-3">
        <div v-for="(lane, ndxLane) in lanes" :key="lane.name" style="min-height: 500px;"
            class="bg-primary p-4 bg-emerald-800" @dragenter.prevent @dragover.prevent
            @drop.stop="dragTaskEnd($event, lane.id)">

            <div class="flex justify-between text-white pb-4">
                <h2 class="text-3xl font-bold">{{ lane.name }}</h2>
                <UButton icon="i-heroicons-plus" v-if="ndxLane === 0">Add Item</UButton>
            </div>

            <UCard v-for="(task, task_index) in boardStore.getLaneTasks(lane.id)" :key="task.id" class="mb-4"
                draggable="true" @dragstart="dragTaskStart($event, task.id, lane.id, task_index)">
                <template #header class="flex justify-between">
                    <UButton class="btn btn-circle btn-sm float-right">
                        {{ task.moscow }}
                    </UButton>
                    {{ task.title }}
                </template>

                <p>
                    {{ task.description }}
                </p>

                <template #footer>
                    &nbsp;
                    <UButton class="btn btn-circle btn-sm ml-2 float-right">
                        <Icon name="hugeicons:pencil-edit-01" size="1.5em" />
                    </UButton>
                    <UButton class="btn btn-circle btn-sm ml-2 float-right" @click="deleteTask(lane.id, task.id)">
                        <Icon name="hugeicons:delete-04" xstyle="color: darkred" size="1.5em" />
                    </UButton>
                </template>
            </UCard>
        </div>
    </div>
</template>
