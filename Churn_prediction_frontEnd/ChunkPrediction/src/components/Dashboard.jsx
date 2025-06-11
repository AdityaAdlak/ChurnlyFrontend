import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueRisk = 200;
const currentCustomers = 120;
const mostValuedCustomer = "DRP019";

const spendData = [
  { range: "0-10k", revenue: 20, customers: 15 },
  { range: "10-50k", revenue: 30, customers: 20 },
  { range: "50-100k", revenue: 25, customers: 18 },
  { range: "100-250k", revenue: 22, customers: 25 },
  { range: "250k+", revenue: 35, customers: 10 },
];

const journeyData = [
  { stage: "Allocation", revenue: 10, customers: 15 },
  { stage: "Onboard", revenue: 15, customers: 15 },
  { stage: "Engage", revenue: 25, customers: 20 },
  { stage: "Enhance", revenue: 20, customers: 15 },
  { stage: "Renewal", revenue: 15, customers: 10 },
];

const acquireLostData = [
  { month: "JAN", acquired: 40, lost: 20 },
  { month: "FEB", acquired: 35, lost: 25 },
  { month: "MAR", acquired: 50, lost: 30 },
  { month: "APR", acquired: 45, lost: 35 },
  { month: "MAY", acquired: 60, lost: 40 },
  { month: "JUN", acquired: 55, lost: 38 },
];

function Card({ children, className = "" }) {
  return <div className={`rounded-lg shadow-md border p-4 ${className}`}>{children}</div>;
}

function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      <Card className="col-span-2 bg-red-600 text-white text-4xl font-bold">
        <CardContent>
          Current Revenue Risk:
          <div>{revenueRisk}K</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold">Churn Analytics By Spend</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={spendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#f87171" />
              <Line type="monotone" dataKey="customers" stroke="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold">Most Valued Customer</h3>
          <p className="text-2xl font-bold">{mostValuedCustomer}</p>
          <p className="text-lg mt-2">Current Customers: {currentCustomers}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold">Churn Analytics By Journey</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={journeyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#f87171" />
              <Line type="monotone" dataKey="customers" stroke="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold">Aquired & Lost Customers</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={acquireLostData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="acquired" fill="#22c55e" />
              <Bar dataKey="lost" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
