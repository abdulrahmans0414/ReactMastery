import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Fetched data:", res[currency]); // Log data after it's fetched
            });
    }, [currency]);


    return data;
}

export default useCurrencyInfo;
