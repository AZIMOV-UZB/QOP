"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/uz";

dayjs.locale("uz");

const weekDays = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();
  const prevMonthDays = (startDay + 6) % 7;
  const today = dayjs().format("D");
  const isCurrentMonth = currentDate.isSame(dayjs(), "month");
  
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="o p-2 bg-white shadow-2xl rounded-2xl border border-gray-200 h-[660px]">
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-gray-200">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-700">
        {weekDays.map((day) => (
          <div key={day} className="font-semibold text-lg p-1 bg-gray-100 rounded-lg">
            {day}
          </div>
        ))}
        {[...Array(prevMonthDays)].map((_, index) => (
          <div key={`empty-${index}`} className="text-gray-300">-</div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const dateNumber = index + 1;
          const isToday = isCurrentMonth && dateNumber == today;
          const isSelected = selectedDate === dateNumber;
          const weekDay = weekDays[(prevMonthDays + index) % 7];
          return (
            <div
              key={index}
              onClick={() => handleSelectDate(dateNumber)}
              className={`p-4 border rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer ${
                isToday ? "bg-blue-500 text-white font-bold" :
                isSelected ? "bg-gray-800 text-white" : "bg-gray-50 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{dateNumber}</span>
              <span className="block text-xs mt-1">
                {weekDay}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
