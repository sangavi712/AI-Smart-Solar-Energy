import Sidebar from "../components/Sidebar";
import "./EnergyUsage.css";

function EnergyUsage() {
    return (
        <div className="energy-layout">

            <Sidebar />

            <div className="energy-main">

                {/* Header */}
                <header className="energy-header">
                    <div>
                        <h1>Energy Usage</h1>
                        <p>
                            Track and analyze your household energy consumption.
                        </p>
                    </div>

                    <div className="energy-date">
                        📅 Today
                    </div>
                </header>

                <main className="energy-content">

                    {/* Statistics */}
                    <section className="energy-stats">

                        <div className="energy-stat-card">
                            <div className="energy-icon">⚡</div>
                            <div>
                                <p>Total Consumption</p>
                                <h2>18.6 kWh</h2>
                                <span>↑ 5.2% today</span>
                            </div>
                        </div>

                        <div className="energy-stat-card">
                            <div className="energy-icon">☀️</div>
                            <div>
                                <p>Solar Contribution</p>
                                <h2>14.2 kWh</h2>
                                <span>76.3% of usage</span>
                            </div>
                        </div>

                        <div className="energy-stat-card">
                            <div className="energy-icon">🔋</div>
                            <div>
                                <p>Battery Usage</p>
                                <h2>4.4 kWh</h2>
                                <span>23.7% of usage</span>
                            </div>
                        </div>

                        <div className="energy-stat-card">
                            <div className="energy-icon">💰</div>
                            <div>
                                <p>Estimated Cost</p>
                                <h2>₹148</h2>
                                <span>Today's energy cost</span>
                            </div>
                        </div>

                    </section>

                    {/* Main Grid */}
                    <section className="energy-grid">

                        {/* Consumption Chart */}
                        <div className="energy-card consumption-card">

                            <div className="energy-card-header">
                                <div>
                                    <h2>Energy Consumption</h2>
                                    <p>
                                        Monitor your energy usage throughout the day.
                                    </p>
                                </div>

                                <select defaultValue="Today">
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>

                            <div className="usage-chart">

                                <div className="y-axis">
                                    <span>5 kWh</span>
                                    <span>4 kWh</span>
                                    <span>3 kWh</span>
                                    <span>2 kWh</span>
                                    <span>1 kWh</span>
                                    <span>0</span>
                                </div>

                                <div className="chart-area">

                                    <div className="chart-grid-line"></div>
                                    <div className="chart-grid-line"></div>
                                    <div className="chart-grid-line"></div>
                                    <div className="chart-grid-line"></div>
                                    <div className="chart-grid-line"></div>

                                    <div className="usage-bars">

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "28%" }}
                                            ></div>
                                            <span>6 AM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "42%" }}
                                            ></div>
                                            <span>8 AM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "62%" }}
                                            ></div>
                                            <span>10 AM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "78%" }}
                                            ></div>
                                            <span>12 PM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "90%" }}
                                            ></div>
                                            <span>2 PM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "68%" }}
                                            ></div>
                                            <span>4 PM</span>
                                        </div>

                                        <div className="usage-column">
                                            <div
                                                className="usage-bar"
                                                style={{ height: "45%" }}
                                            ></div>
                                            <span>6 PM</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Energy Breakdown */}
                        <div className="energy-card breakdown-card">

                            <h2>Energy Breakdown</h2>

                            <p>
                                Today's energy sources
                            </p>

                            <div className="breakdown-circle">
                                <div>
                                    <strong>18.6</strong>
                                    <span>kWh</span>
                                </div>
                            </div>

                            <div className="breakdown-item">
                                <span>
                                    <i className="solar-dot"></i>
                                    Solar Energy
                                </span>
                                <strong>76%</strong>
                            </div>

                            <div className="breakdown-item">
                                <span>
                                    <i className="battery-dot"></i>
                                    Battery
                                </span>
                                <strong>24%</strong>
                            </div>

                        </div>

                        {/* Appliance Usage */}
                        <div className="energy-card appliance-card">

                            <div className="energy-card-header">
                                <div>
                                    <h2>Appliance Usage</h2>
                                    <p>
                                        Energy consumption by appliance
                                    </p>
                                </div>
                            </div>

                            <div className="appliance-list">

                                <div className="appliance-item">
                                    <div className="appliance-name">
                                        <span>❄️</span>
                                        <div>
                                            <strong>Air Conditioner</strong>
                                            <small>High usage</small>
                                        </div>
                                    </div>

                                    <div className="appliance-value">
                                        <strong>5.2 kWh</strong>
                                        <div className="mini-progress">
                                            <div style={{ width: "82%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="appliance-item">
                                    <div className="appliance-name">
                                        <span>🧊</span>
                                        <div>
                                            <strong>Refrigerator</strong>
                                            <small>Normal usage</small>
                                        </div>
                                    </div>

                                    <div className="appliance-value">
                                        <strong>3.1 kWh</strong>
                                        <div className="mini-progress">
                                            <div style={{ width: "55%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="appliance-item">
                                    <div className="appliance-name">
                                        <span>📺</span>
                                        <div>
                                            <strong>Television</strong>
                                            <small>Low usage</small>
                                        </div>
                                    </div>

                                    <div className="appliance-value">
                                        <strong>1.8 kWh</strong>
                                        <div className="mini-progress">
                                            <div style={{ width: "32%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="appliance-item">
                                    <div className="appliance-name">
                                        <span>💡</span>
                                        <div>
                                            <strong>Lighting</strong>
                                            <small>Efficient</small>
                                        </div>
                                    </div>

                                    <div className="appliance-value">
                                        <strong>1.2 kWh</strong>
                                        <div className="mini-progress">
                                            <div style={{ width: "22%" }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Efficiency */}
                        <div className="energy-card efficiency-card">

                            <h2>Energy Efficiency</h2>

                            <p>
                                Your current energy performance
                            </p>

                            <div className="efficiency-score">
                                <div className="score-circle">
                                    <strong>87%</strong>
                                    <span>Excellent</span>
                                </div>
                            </div>

                            <div className="efficiency-message">
                                <span>✓</span>
                                Your household is using energy efficiently.
                            </div>

                        </div>

                    </section>

                </main>

                <footer className="energy-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default EnergyUsage;