import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import PriceTabs from "@/components/PriceTabs";
import useFetch from "@/utils/useFetch";

export default function Home() {
  const url = "https://api.coingecko.com/api/v3/coins/ethereum/";
  const { data, loading, error } = useFetch(url);
  return (
    <Layout>
      {loading ? (
        <VStack justifySelf="center">
          <Text fontSize="lg" fontWeight="bold">
            Loading
          </Text>
          <Spinner
            thickness="4px"
            speed="0.80s"
            emptyColor="gray.200"
            color="#4B40EE"
            size="xl"
          />
        </VStack>
      ) : data ? (
        <>
          <Header
            image={data.image.small}
            price={data.market_data.current_price.usd}
            price_change={data.market_data.price_change_24h}
            price_change_percentage={
              data.market_data.price_change_percentage_24h_in_currency.usd
            }
          />
          <PriceTabs />
        </>
      ) : (
        <Text fontSize="2xl" fontWeight="bold" color="red">
          Something went wrong
        </Text>
      )}
    </Layout>
  );
}
