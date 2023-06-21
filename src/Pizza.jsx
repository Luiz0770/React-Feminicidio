import React from 'react';
import { PieChart, Pie} from 'recharts';
  
const Pizza = () => {
  
// Sample data
const data = [
  {cor: 'Branco', vitimas: 124},
  {cor: 'Negro', vitimas: 64},
  {cor: 'Pardo', vitimas: 180},
];
  
return (
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey="vitimas" outerRadius={250} fill="green" />
        </PieChart>
);
}
  
export default Pizza;