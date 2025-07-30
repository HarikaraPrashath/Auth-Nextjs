"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function   AppointmentCard() {
  const [currentDate, setCurrentDate] = useState(new Date()) 

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()))
  }

  const getNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()))
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const daysInPrevMonth = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))

    const days = []

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${daysInPrevMonth - i}`}
          className="w-6 h-6 flex items-center justify-center text-green-900 opacity-50 text-xs"
        >
          {daysInPrevMonth - i}
        </div>,
      )
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === currentDate.getDate()
      days.push(
        <div
          key={day}
          className={`w-6 h-6 flex items-center justify-center text-xs cursor-pointer rounded-sm ${
            isSelected ? "bg-green-600 text-black font-medium" : "text-green-900 hover:bg-gray-100"
          }`}
          onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          {day}
        </div>,
      )
    }

    // Next month's leading days
    const totalCells = 35 // 6 rows × 7 days
    const remainingCells = totalCells - days.length
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div key={`next-${day}`} className="w-6 h-6 flex items-center justify-center text-green-900 opacity-50 text-md">
          {day}
        </div>,
      )
    }

    return days
  }

  const getFormattedDate = () => {
    const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" })
    const day = currentDate.getDate().toString().padStart(2, "0")
    const month = currentDate.toLocaleDateString("en-US", { month: "long" })
    return `${dayName}, ${day} ${month}`
  }

  return (
    <div className="w-[330px] mx-auto bg-white rounded-xl border-1 border-green-100  p-2 ml-0.">
      {/* Header */}
      <h2 className="text-lg font-medium text-green-950 mb-4">Next Appointment</h2>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-3">
        <button type="button" onClick={getPreviousMonth} className="p-1 hover:bg-gray-100 rounded-full" aria-label="Previous month">
          <ChevronLeft className="w-4 h-4 text-green-900 border-1 border-green-900 rounded" />
        </button>

        <h3 className="text-sm font-medium text-green-900 ">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>

        <button type="button" onClick={getNextMonth} className="p-1 hover:bg-gray-100 rounded-full"  aria-label="Next month">
          <ChevronRight className="w-4 h-4 text-gray-600 border-1 border-green-900 rounded" />
        </button>
      </div>

      
     {/* Day Headers */}
<div className="grid grid-cols-7 gap-0.5 mb-2">
  {dayNames.map((day) => (
    <div key={day} className="text-[10px] font-semibold text-green-900 text-center">
      {day}
    </div>
  ))}
</div>


      {/* Calendar Grid */}
      <div className="flex justify-center mb-4">
  <div className="grid grid-cols-7 gap-x-5 ">{renderCalendarDays()}</div>
</div>

      {/* Selected Date */}
      <div className="mb-3">
        <p className="text-sm font-medium text-green-900">{getFormattedDate()}</p>
      </div>

      {/* Doctor Information */}
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <Image
            src="/Images/doc.jpg"
            width={72}
            height={72}
            alt="Dr. Damien Frank"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-800">Dr. Damien Frank</h4>
          <p className="text-xs text-gray-600">Cardiology Specialist</p>
        </div>
      </div>
    </div>
  )
}
