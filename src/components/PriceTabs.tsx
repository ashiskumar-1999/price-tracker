import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
  Divider,
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CutsomButton from "./CutsomButton";
import useFetch from "@/utils/useFetch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const ButtonLabels = [
  { label: "1d", days: 1 },
  { label: "3d", days: 3 },
  { label: "1w", days: 7 },
  { label: "1m", days: 30 },
  { label: "1y", days: 365 },
];

const TabNames = ["Chart", " Summery", "Statistics", " Analysis", "Settings"];

const PriceTabs = () => {
  const [days, setDays] = useState(1);
  const url = `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${days}`;
  const { data } = useFetch(url);

  //Adding the price history data to the datasets
  const getLabels = (priceHistory: any) => {
    return priceHistory.map(([timestamp]: any) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    });
  };

  const getData = (priceHistory: any) => {
    return priceHistory.map((data: any) => data[1]);
  };

  // Chart configuration
  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <>
      <Tabs variant="unstyled">
        <TabList>
          {TabNames.map((tab) => (
            <Tab
              key={tab}
              fontSize="lg"
              color="gray.200"
              _selected={{ color: "black" }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabIndicator height="2px" bg="purple" borderRadius="1px" />
        <Divider borderColor="gray.100" />
        <TabPanels>
          <TabPanel>
            <Box>
              {ButtonLabels.map((data) => (
                <CutsomButton
                  key={data.label}
                  label={data.label}
                  onClick={() => setDays(data.days)}
                />
              ))}
              {data && (
                <Box
                  width="830px"
                  height="343px"
                  p={5}
                  border="1px solid"
                  borderColor="gray.100"
                  borderRadius={15}
                >
                  <Line
                    data={{
                      labels: getLabels(data.prices),
                      datasets: [
                        {
                          data: getData(data.prices),
                          borderColor: "#4B40EE",
                        },
                      ],
                    }}
                    options={chartOptions}
                    width="100%"
                    height="400px"
                  />
                </Box>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PriceTabs;
