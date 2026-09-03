import Sidebar from "../components/Sidebar";
import "./Analytics.css";

function Analytics() {
    return (
        <div className="analytics-layout">

            <Sidebar />

            <div className="analytics-main">

                {/* Header */}
                <header className="analytics-header">
                    <div>
                        <h1>Analytics</h1>
                        <p>
                            Analyze your solar energy performance and trends.
                        </p>
                    </div>

                    <select defaultValue="This Month">
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>This Year</option>
                    </select>
                </header>

                <main className="analytics-content">

                    {/* KPI Cards */}
                    <section className="analytics-stats">

                        <div className="analytics-stat-card">
                            <div className="analytics-icon">☀️</div>
                            <div>
                                <p>Total Solar Generated</p>
                                <h2>486.4 kWh</h2>
                                <span>↑ 14.8% vs last month</span>
                            </div>
                        </div>

                        <div className="analytics-stat-card">
                            <div className="analytics-icon">⚡</div>
                            <div>
                                <p>Total Consumption</p>
                                <h2>372.8 kWh</h2>
                                <span>↓ 6.4% vs last month</span>
                            </div>
                        </div>

                        <div className="analytics-stat-card">
                            <div className="analytics-icon">💰</div>
                            <div>
                                <p>Total Savings</p>
                                <h2>₹4,860</h2>
                                <span>↑ 18.2% this month</span>
                            </div>
                        </div>

                        <div className="analytics-stat-card">
                            <div className="analytics-icon">🌱</div>
                            <div>
                                <p>CO₂ Reduction</p>
                                <h2>186.4 kg</h2>
                                <span>Equivalent to 23 trees</span>
                            </div>
                        </div>

                    </section>

                    {/* Main Charts */}
                    <section className="analytics-grid">

                        {/* Solar Performance */}
                        <div className="analytics-card performance-chart-card">

                            <div className="analytics-card-header">
                                <div>
                                    <h2>Solar Performance</h2>
                                    <p>
                                        Solar generation vs energy consumption
                                    </p>
                                </div>

                                <div className="chart-legend">
                                    <span>
                                        <i className="legend-solar"></i>
                                        Solar
                                    </span>

                                    <span>
                                        <i className="legend-consumption"></i>
                                        Consumption
                                    </span>
                                </div>
                            </div>

                            <div className="analytics-chart">

                                <div className="analytics-y-axis">
                                    <span>40</span>
                                    <span>30</span>
                                    <span>20</span>
                                    <span>10</span>
                                    <span>0</span>
                                </div>

                                <div className="analytics-chart-area">

                                    <div className="grid-line"></div>
                                    <div className="grid-line"></div>
                                    <div className="grid-line"></div>
                                    <div className="grid-line"></div>
                                    <div className="grid-line"></div>

                                    <div className="analytics-bars">

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "45%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "30%" }}
                                            ></div>

                                            <span>Mon</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "65%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "42%" }}
                                            ></div>

                                            <span>Tue</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "78%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "55%" }}
                                            ></div>

                                            <span>Wed</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "90%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "60%" }}
                                            ></div>

                                            <span>Thu</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "82%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "70%" }}
                                            ></div>

                                            <span>Fri</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "72%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "55%" }}
                                            ></div>

                                            <span>Sat</span>
                                        </div>

                                        <div className="analytics-column">
                                            <div
                                                className="solar-bar"
                                                style={{ height: "60%" }}
                                            ></div>

                                            <div
                                                className="consumption-bar"
                                                style={{ height: "48%" }}
                                            ></div>

                                            <span>Sun</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Efficiency Score */}
                        <div className="analytics-card efficiency-card">

                            <h2>Energy Efficiency</h2>
                            <p>Overall system efficiency</p>

                            <div className="efficiency-ring">
                                <div>
                                    <strong>91%</strong>
                                    <span>Excellent</span>
                                </div>
                            </div>

                            <div className="efficiency-details">

                                <div>
                                    <span>Solar Utilization</span>
                                    <strong>94%</strong>
                                </div>

                                <div>
                                    <span>Energy Independence</span>
                                    <strong>76%</strong>
                                </div>

                                <div>
                                    <span>Battery Efficiency</span>
                                    <strong>89%</strong>
                                </div>

                            </div>

                        </div>

                        {/* Monthly Savings */}
                        <div className="analytics-card savings-chart-card">

                            <div className="analytics-card-header">
                                <div>
                                    <h2>Monthly Savings</h2>
                                    <p>
                                        Estimated savings over the last 6 months
                                    </p>
                                </div>
                            </div>

                            <div className="savings-bars">

                                <div>
                                    <span style={{ height: "42%" }}></span>
                                    <small>Apr</small>
                                    <strong>₹2.1K</strong>
                                </div>

                                <div>
                                    <span style={{ height: "55%" }}></span>
                                    <small>May</small>
                                    <strong>₹2.8K</strong>
                                </div>

                                <div>
                                    <span style={{ height: "65%" }}></span>
                                    <small>Jun</small>
                                    <strong>₹3.3K</strong>
                                </div>

                                <div>
                                    <span style={{ height: "72%" }}></span>
                                    <small>Jul</small>
                                    <strong>₹3.7K</strong>
                                </div>

                                <div>
                                    <span style={{ height: "84%" }}></span>
                                    <small>Aug</small>
                                    <strong>₹4.2K</strong>
                                </div>

                                <div>
                                    <span style={{ height: "96%" }}></span>
                                    <small>Sep</small>
                                    <strong>₹4.8K</strong>
                                </div>

                            </div>

                        </div>

                        {/* Environmental Impact */}
                        <div className="analytics-card environmental-card">

                            <h2>Environmental Impact</h2>
                            <p>Your contribution to a cleaner environment</p>

                            <div className="environmental-list">

                                <div className="environmental-item">
                                    <div>
                                        <span>🌱</span>
                                        <strong>CO₂ Reduced</strong>
                                    </div>

                                    <b>186.4 kg</b>
                                </div>

                                <div className="environmental-item">
                                    <div>
                                        <span>🌳</span>
                                        <strong>Trees Equivalent</strong>
                                    </div>

                                    <b>23 trees</b>
                                </div>

                                <div className="environmental-item">
                                    <div>
                                        <span>💧</span>
                                        <strong>Water Saved</strong>
                                    </div>

                                    <b>1,240 L</b>
                                </div>

                                <div className="environmental-item">
                                    <div>
                                        <span>♻️</span>
                                        <strong>Clean Energy</strong>
                                    </div>

                                    <b>94%</b>
                                </div>

                            </div>

                        </div>

                    </section>

                </main>

                <footer className="analytics-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default Analytics;