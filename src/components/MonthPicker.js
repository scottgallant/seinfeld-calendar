import {
  ChevronDown,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MonthPicker = ({ selectedMonth, onMonthChange, monthNames, month }) => {

  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <h2 className="text-center text-xl my-10">{monthNames[month]} <ChevronDown className="inline" /></h2>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
      {months.map(month => (
        <DropdownMenuItem key={month} onClick={() => onMonthChange(month)} className={`text-lg p-2 ${month === selectedMonth ? 'bg-blue-50' : ''
      }`}> 
        <span>{new Date(2024, month).toLocaleString('default', { month: 'long' })}</span>
        </DropdownMenuItem>
      ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MonthPicker