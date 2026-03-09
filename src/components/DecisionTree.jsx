import React from 'react';

const DecisionTree = () => {
    const scenarios = [
        { id: 1, scenario: 'Scenario 1: License Renewal Process (Step 1)' },
        { id: 2, scenario: 'Scenario 2: License Renewal Process (Step 2)' },
        { id: 3, scenario: 'Scenario 3: License Renewal Process (Step 3)' },
        { id: 4, scenario: 'Scenario 4: License Renewal Process (Step 4)' },
        { id: 5, scenario: 'Scenario 5: License Renewal Process (Step 5)' },
        { id: 6, scenario: 'Scenario 6: License Renewal Process (Step 6)' },
        { id: 7, scenario: 'Scenario 7: License Renewal Process (Step 7)' },
        { id: 8, scenario: 'Scenario 8: License Renewal Process (Step 8)' },
        { id: 9, scenario: 'Scenario 9: License Renewal Process (Step 9)' },
        { id: 10, scenario: 'Scenario 10: License Renewal Process (Step 10)' }
    ];

    const handleScenarioClick = (scenario) => {
        console.log(`Selected: ${scenario}`);
        // Implement further interaction logic here
    };

    return (
        <div>
            <h1>Interactive Decision Tree for License Renewal</h1>
            <ul>
                {scenarios.map((item) => (
                    <li key={item.id} onClick={() => handleScenarioClick(item.scenario)}>
                        {item.scenario}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecisionTree;