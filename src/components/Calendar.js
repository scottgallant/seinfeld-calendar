import React, { useState } from 'react';
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

  const firstDayOfMonth = startDate.getDay() - 1; // -1 makes Monday to be the first day of the week
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

      <div className="mb-10 md:mb-16 mx-4 text-white md:pt-4 md:px-6 md:pb-6 md:bg-gray-800 md:rounded-xl">
        <div className="flex p-2">
          {daysOfWeek.map(day => (
            <div className="w-1/7 text-center text-xs py-1" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap border-gray-800 border-t  md:border-black">
          {Array.from({ length: totalCells }).map((_, i) => (
            <Drawer.Root shouldScaleBackground key={i}>
              <Drawer.Trigger asChild>
                <div
                  className={`overflow-hidden border-gray-800 border-r border-b w-1/7 h-20 p-1 lg:p-2 md:border-black
                    ${i >= firstDayOfMonth && isSpecialDate(dates[i - firstDayOfMonth]) ? 'bg-amber-300 text-black' : 'bg-transparent'}
                    ${i % 7 === 0 ? 'border-l' : ''}
                    ${i >= firstDayOfMonth && dates[i - firstDayOfMonth].getDate() === new Date().getDate() && selectedMonth === currentMonth ? 'ring-2 ring-cyan-600 ring-inset bg-gray-800' : ''}`}
                >
                  {i >= firstDayOfMonth && (
                    <>
                      <div className=" text-gray-500 text-xs mb-2">{dates[i - firstDayOfMonth].getDate()}</div>
                      <div className="text-xs text-center text-ellipsis overflow-hidden">
                        {getDescriptionForDate(dates[i - firstDayOfMonth])}
                      </div>
                      <Drawer.Portal>
                        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 outline-none">
                          <div className="p-4 bg-white rounded-t-[10px] flex-1">
                            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                            <div className="max-w-md mx-auto">
                              <Drawer.Title className="font-medium mb-4">
                                {/* Title */}
                              </Drawer.Title>
                              <p className="text-xl text-center">
                                {getDescriptionForDate(dates[i - firstDayOfMonth]) ?
                                  <span>{getDescriptionForDate(dates[i - firstDayOfMonth])}</span>
                                  : <span>🤷 No activities</span>
                                }
                              </p>
                            </div>
                          </div>
                        </Drawer.Content>
                      </Drawer.Portal>
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
