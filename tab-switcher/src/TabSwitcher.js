import React, { useState } from "react";

// Sample tab data
const tabs = [
    { id: "home", label: "Home", content: "Welcome to the Home tab!" },
    { id: "profile", label: "Profile", content: "This is your Profile." },
    { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
    // TODO: Set up state to track the active tab
    const [content, setContent] = useState(tabs[0].content);

    const handleTabClick = (id) => {
        console.log("id", id);
        let content = tabs.filter(tab => tab.id === id)[0]?.content
        console.log("content:", content)
        setContent(content);
    }

    return (
        <div className="tab-switcher">
            <h1>Tab Switcher</h1>

            {/* Tab buttons */}
            <div className="tab-buttons">
                {tabs.map((tab, id) => (
                    <button key={id}
                       
                        onClick={() => handleTabClick(tab.id)}
                    >
                         {console.log(tab.id)}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="tab-content" data-testid="tab-content">
                {content}
            </div>
        </div>
    );
}
