"use client";

import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing widget to prevent multiple instances
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "exchanges": [
            "BSE"
          ],
      dataSource: "SENSEX", 
      
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "en",
      symbolUrl: "",
      colorTheme: "light",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: "500", // Adjust height dynamically
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <h2 className="text-xl font-semibold mb-4">Stock Market Overview</h2>
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
