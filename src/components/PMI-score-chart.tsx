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

const data: DataPoint[] = [
    { month: "March 01, 2026", value: 40 },
    { month: "March 02, 2026", value: 42 },
    { month: "March 03, 2026", value: 38 },
    { month: "March 04, 2026", value: 43 },
    { month: "March 05, 2026", value: 45 },
    { month: "March 06, 2026", value: 44 },
    { month: "March 07, 2026", value: 47 },
    { month: "March 08, 2026", value: 49 },
    { month: "March 09, 2026", value: 48 },
    { month: "March 10, 2026", value: 52 },
    { month: "March 11, 2026", value: 54 },
    { month: "March 12, 2026", value: 56 },
    { month: "March 13, 2026", value: 58 },
    { month: "March 14, 2026", value: 60 },
    { month: "March 15, 2026", value: 62 },
    { month: "March 16, 2026", value: 61 },
    { month: "March 17, 2026", value: 64 },
    { month: "March 18, 2026", value: 66 },
    { month: "March 19, 2026", value: 68 },
    { month: "March 20, 2026", value: 70 },
    { month: "March 21, 2026", value: 72 },
    { month: "March 22, 2026", value: 71 },
    { month: "March 23, 2026", value: 74 },
    { month: "March 24, 2026", value: 76 },
    { month: "March 25, 2026", value: 78 },
    { month: "March 26, 2026", value: 80 },
    { month: "March 27, 2026", value: 82 },
    { month: "March 28, 2026", value: 84 },
    { month: "March 29, 2026", value: 95 },
    { month: "March 30, 2026", value: 100 },
];

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
export default function IndexGraph(): React.ReactElement {
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
                        ticks={["March 01, 2026", "March 07, 2026", "March 14, 2026"]}
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
