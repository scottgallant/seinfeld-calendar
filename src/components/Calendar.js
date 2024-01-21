import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { MyDrawer } from "../components/drawer";
import { Drawer } from "vaul";
import MonthPicker from '../components/MonthPicker';

const Calendar = ({ specialDates }) => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = new Date().getMonth(); // Get the current month (0-11)
    const [selectedMonth, setSelectedMonth] = useState(currentMonth); // Initialize with the current month
    const currentYear = new Date().getFullYear(); // Get the current year
    const year = currentYear;
    const month = selectedMonth;

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 1);


    let dates = [];
    for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d));
    }

    const firstDayOfMonth = startDate.getDay()-1; // -1 makes Monday to be the first day of the week
    const totalCells = firstDayOfMonth + dates.length;

    const formatDate = (date) => {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${year}-${month}-${day}`;
    };

    const getDescriptionForDate = (date) => {
        const formattedDate = formatDate(date);
        const specialDate = specialDates.find(d => d.date === formattedDate);
        return specialDate ? specialDate.description : null;
    };


    const isSpecialDate = (date) => {
        const formattedDate = formatDate(date);
        return specialDates.some(d => d.date === formattedDate);
    };
    return (
        <div className="lg:w-10/12 mx-auto bg-transparent">
            <MonthPicker selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} monthNames={monthNames} month={month} />
            
            <div className="mb-16 mx-4">
                <div className="flex p-2 border-gray-200 border-b">
                    {daysOfWeek.map(day => (
                        <div className="w-1/7 text-center text-xs py-1" key={day}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap">
                    {Array.from({ length: totalCells }).map((_, i) => (
                        <Drawer.Root shouldScaleBackground key={i}>
                        <Drawer.Trigger asChild>
                        
                            <div 
                                className={`overflow-hidden border-gray-200 border-r border-b w-1/7 h-20 p-1 lg:p-2 ${i >= firstDayOfMonth && isSpecialDate(dates[i - firstDayOfMonth])? 'bg-amber-50' : 'bg-white'} ${i % 7 === 0 ? 'border-l' : ''} ${i >= firstDayOfMonth && dates[i - firstDayOfMonth].getDate() === new Date().getDate() && selectedMonth === currentMonth? 'bg-cyan-100' : ''}`}
                            >
                                {i >= firstDayOfMonth && (
                                    <>
                                        <div className=" text-gray-400 text-xs mb-2">{dates[i - firstDayOfMonth].getDate()}</div>
                                        <div className="text-xs text-gray-600 text-center text-ellipsis overflow-hidden">
                                            {getDescriptionForDate(dates[i - firstDayOfMonth])}
                                        </div>
                                        <MyDrawer description={getDescriptionForDate(dates[i-firstDayOfMonth])} />
                                </>
                                )}
                            </div>
                            </Drawer.Trigger>
                            </Drawer.Root>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
