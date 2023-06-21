import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { ano: "2015", vitimas: 41 },
  { ano: "2016", vitimas: 63 },
  { ano: "2017", vitimas: 121 },
  { ano: "2018", vitimas: 136 },
  { ano: "2019", vitimas: 184 },
  { ano: "2020", vitimas: 180 },
  { ano: "2021", vitimas: 140 },
  { ano: "2022", vitimas: 195 },
];

function Table() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h3>Números de casos por ano</h3>
        <p>
          De 2015 a 2022, o feminicídio apresentou um crescimento preocupante em
          todo o mundo. O número de assassinatos de mulheres devido à sua
          condição de gênero aumentou significativamente nesse período. Conforme
          a análise do gráfico abaixo, torna-se evidente a necessidade de
          aumentar combate contra o feminicídio
        </p>

        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="vitimas" fill="#30506d" />
        </BarChart>
      </div>
    </>
  );
}

export default Table;
