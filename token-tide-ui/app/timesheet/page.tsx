"use client"
import * as React from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';
import CustomTheme from '../components/CustomTheme';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useEffect } from 'react';
dayjs.extend(relativeTime)

export default function Page() {
    const [iniTime, setIniTime] = React.useState<Dayjs | null>(dayjs().set('h', 8).set('m', 30));
    const [iniBreakTime, setIniBreakTime] = React.useState<Dayjs | null>(dayjs().set('h', 13).set('m', 0));
    const [endBreakTime, setEndBreakTime] = React.useState<Dayjs | null>(dayjs().set('h', 14).set('m', 0));
    const [endTime, setEndTime] = React.useState<Dayjs | null>(dayjs().set('h', 17).set('m', 30));

    const [tasksDone, setTaskDone] = React.useState(1);
    const [tasksEstimated, setTasksEstimated] = React.useState(1);
    const [tasksBar, setTasksBar] = React.useState<boolean[]>([]);
    const [timePerTask, setMinutesPerTask] = React.useState('...');

    const updateStatus = (tasks: number) => {
        const now = dayjs();

        const elapsedSecondsBeforeBreak = now.isBefore(iniBreakTime) || iniBreakTime == null
            ? now.diff(iniTime, 's') : iniBreakTime.diff(iniTime, 's');
        const elapsedSecondsAfterBreak = now.isBefore(endTime) || endTime == null
            ? now.diff(endBreakTime, 's') : endTime.diff(endBreakTime, 's');

        const elapsedSeconds = elapsedSecondsBeforeBreak + elapsedSecondsAfterBreak;
        const secondsPerTask = elapsedSeconds / tasks;
        setMinutesPerTask(dayjs().subtract(secondsPerTask, 's').toNow(true));

        const _8hoursSeconds = 60 * 60 * 8;
        const estimatedTasks = Math.round(_8hoursSeconds / secondsPerTask);
        setTasksEstimated(estimatedTasks);

        const bar: boolean[] = [];
        for (let index = 0; index < estimatedTasks; index++) {
            bar.push(index < tasks);
        }
        setTasksBar(bar);
        console.log(bar);
    }

    const setIniTimeHandler = (value: React.SetStateAction<dayjs.Dayjs | null>) => {
        setIniTime(value);
        updateStatus(tasksDone);
    };
    const setIniBreakTimeHandler = (value: React.SetStateAction<dayjs.Dayjs | null>) => {
        setIniBreakTime(value);
        updateStatus(tasksDone);
    };
    const setEndBreakTimeHandler = (value: React.SetStateAction<dayjs.Dayjs | null>) => {
        setEndBreakTime(value);
        updateStatus(tasksDone);
    };
    const setEndTimeHandler = (value: React.SetStateAction<dayjs.Dayjs | null>) => {
        setEndTime(value);
        updateStatus(tasksDone);
    };

    const changeCountTask = (value: number) => {
        setTaskDone(value);
        updateStatus(value);
    };
    /* useEffect(() => {
        "use client"
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); */

    return (
        <CustomTheme>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Paper variant="outlined" sx={{ p: 3 }}>
                        <br />
                        <TimeField sx={{ m: 1 }} ampm={false} value={iniTime} label="Entrada" onChange={setIniTimeHandler} />
                        <TimeField sx={{ m: 1 }} ampm={false} value={iniBreakTime} label="Inicio Intervalo" onChange={setIniBreakTimeHandler} />
                        <TimeField sx={{ m: 1 }} ampm={false} value={endBreakTime} label="Fim Intervalo" onChange={setEndBreakTimeHandler} />
                        <TimeField sx={{ m: 1 }} ampm={false} value={endTime} label="Saída" onChange={setEndTimeHandler} />
                        <br />
                        {tasksBar.filter(done => done).map((done, idx) => (
                            <ArticleIcon color="primary" key={idx}></ArticleIcon>
                        ))}
                        {tasksBar.filter(done => !done).map((done, idx) => (
                            <ArticleOutlinedIcon color="secondary" key={idx}></ArticleOutlinedIcon>
                        ))}
                        <br />
                        Total Tarefas: {tasksDone}<br />
                        Tarefas Estimadas: {tasksEstimated}<br />
                        {timePerTask} por tarefa<br />
                        <Button variant="contained" onClick={() => {
                            changeCountTask(tasksDone + 1);
                        }} sx={{ mt: 1, mr: 1 }} >
                            Tarefa Concluída
                        </Button>
                        <Button variant="outlined" onClick={() => {
                            changeCountTask(tasksDone - 1);
                        }} sx={{ mt: 1, mr: 1 }} >
                            Desfazer
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </CustomTheme>
    )
}