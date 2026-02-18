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

interface DataPoint {
    month: string;
    value: number;
}

interface IndexGraphProps {
    data?: DataPoint[];
}

export default function IndexGraph({ data = [] }: IndexGraphProps): React.ReactElement {
    interface CustomDotProps {
        cx?: number;
        cy?: number;
        index?: number;
    }

    const CustomDot = (props: CustomDotProps): React.ReactElement | null => {
        const { cx, cy, index } = props;

        // Only highlight last point
        if (index === data.length - 1) {
            return <circle cx={cx} cy={cy} r={6} fill="#F7B27A" />;
        }

        return null;
    };
    return (
        <div
            style={{
                width: "100%",
                height: 350,
            }}
        >
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 50 }}>
                    <CartesianGrid
                        stroke="#B9C0D4"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        stroke="#30374F"
                        tick={{ fill: "#30374F" }}
                        label={{
                            value: "Month",
                            position: "insideBottom",
                            offset: -15,
                            fill: "#30374F"
                        }}
                        tickFormatter={(dateStr) => {
                            const date = new Date(dateStr);
                            const day = date.getDate();
                            const month = date.toLocaleString("default", { month: "short" });
                            return `${month} ${day}`;
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <YAxis
                        stroke="#30374F"
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                        tick={{ fill: "#30374F" }}
                        label={{
                            value: "PMI Score",
                            angle: -90,
                            offset: -30,
                            dx: -20,
                            fill: "#30374F"
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


interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
    }>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps): React.ReactElement | null => {
    if (active && payload && payload.length) {
        const date = new Date(label as string);
        const formattedDate = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }); // e.g., 2 Sep, 2026
        return (
            <div className="font-semibold text-dark-primary p-2 text-lg rounded-lg bg-[#F7B27A] flex flex-col items-center justify-center">
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
