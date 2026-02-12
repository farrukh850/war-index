import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
const data = [
    { month: "Jan 01, 2025", value: 25 },
    { month: "Feb 05, 2025", value: 30 },
    { month: "Mar 10, 2025", value: 45 },
    { month: "Apr 30, 2025", value: 40 },
    { month: "May 02, 2025", value: 55 },
    { month: "Jun 11, 2025", value: 65 },
    { month: "Jul 12, 2025", value: 70 },
    { month: "Aug 28, 2025", value: 80 },
    { month: "Sep 15, 2025", value: 85 },
    { month: "Oct 22, 2025", value: 90 },
    { month: "Nov 01, 2025", value: 95 },
    { month: "Dec 24, 2025", value: 100 },
];

const CustomDot = (props) => {
    const { cx, cy, index } = props;

    // Only highlight last point
    if (index === data.length - 1) {
        return <circle cx={cx} cy={cy} r={6} fill="#E04F16" />;
    }

    return null;
};
export default function DarkLineChart() {
    return (
        <div
            style={{
                width: "100%",
                height: 300,
            }}
        >
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 50 }}>
                    <CartesianGrid
                        stroke="#1e293b"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        stroke="#7D9EB0"
                        tick={{ fill: "#7D9EB0" }}
                        label={{
                            value: "Month",
                            position: "insideBottom",
                            offset: -15,
                            fill: "#7D9EB0"
                        }}
                        tickFormatter={(dateStr) => {
                            const date = new Date(dateStr);
                            return date.toLocaleString("default", { month: "short" }); // Jan, Feb, Mar
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <YAxis
                        stroke="#7D9EB0"
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                        tick={{ fill: "#7D9EB0" }}
                        label={{
                            value: "PMI Score",
                            angle: -90,
                            offset: -30,
                            dx: -20,
                            fill: "#7D9EB0"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#6594AB"
                        strokeWidth={2}
                        dot={<CustomDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const date = new Date(label);
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }); // e.g., 2 Sep, 2026
        return (
            <div className="font-semibold text-dark-primary p-2 text-lg rounded-lg bg-[#F9DBAF] flex flex-col items-center justify-center">
                {payload.map((entry) => (
                    <p key={entry.name}>
                        {entry.value}
                    </p>
                ))}
                <p className="text-dark-primary text-sm font-normal">{formattedDate}</p>
            </div>
        );
    }

    return null;
};
