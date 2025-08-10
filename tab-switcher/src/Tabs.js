import React, { useState } from "react";
import "./styles.css";

function Tabs({ tabs }) {
  const safeTabs = tabs.map((tab, index) => ({
    title: tab?.title || `Tab ${index + 1}`,
    content: tab?.content || "No Content available",
  }));

  const [activeTab, setActiveTab] = useState(safeTabs[0]?.title || "");

  const handleTabSwitch = (title) => {
    if (title) {
      setActiveTab(title);
    }
  };

  if (!safeTabs || safeTabs.length === 0) {
    return <div>No tabs available</div>;
  }

  const activeContent = safeTabs.find((tab) => tab.title === activeTab)?.content;

  return (
    <div>
      <div className="button-container">
        {safeTabs.map((tab, index) => (
          <button
            key={index}
            className="title-button"
            onClick={() => handleTabSwitch(tab.title)}
            style={{
              borderBottom:
                activeTab === tab.title ? "2px solid blue" : "none",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div>
        <h1>{activeContent}</h1>
      </div>
    </div>
  );
}

export default Tabs;
