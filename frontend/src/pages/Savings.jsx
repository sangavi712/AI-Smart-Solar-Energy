import Sidebar from "../components/Sidebar";
import "./Savings.css";

function Savings() {
    return (
        <div className="savings-layout">

            <Sidebar />

            <div className="savings-main">

                {/* Header */}
                <header className="savings-header">
                    <div>
                        <h1>Savings</h1>
                        <p>
                            Track your solar energy savings and financial benefits.
                        </p>
                    </div>

                    <div className="savings-period">
                        📅 This Month
                    </div>
                </header>

                <main className="savings-content">

                    {/* Summary Cards */}
                    <section className="savings-stats">

                        <div className="savings-stat-card">
                            <div className="savings-icon">💰</div>
                            <div>
                                <p>This Month</p>
                                <h2>₹4,860</h2>
                                <span>↑ 18.2% savings</span>
                            </div>
                        </div>

                        <div className="savings-stat-card">
                            <div className="savings-icon">📈</div>
                            <div>
                                <p>Total Savings</p>
                                <h2>₹48,640</h2>
                                <span>Since installation</span>
                            </div>
                        </div>

                        <div className="savings-stat-card">
                            <div className="savings-icon">☀️</div>
                            <div>
                                <p>Solar Energy Used</p>
                                <h2>486.4 kWh</h2>
                                <span>Clean energy generated</span>
                            </div>
                        </div>

                        <div className="savings-stat-card">
                            <div className="savings-icon">🎯</div>
                            <div>
                                <p>Monthly Target</p>
                                <h2>68%</h2>
                                <span>₹7,000 target</span>
                            </div>
                        </div>

                    </section>

                    {/* Main Grid */}
                    <section className="savings-grid">

                        {/* Savings Chart */}
                        <div className="savings-card savings-chart-card">

                            <div className="savings-card-header">
                                <div>
                                    <h2>Monthly Savings</h2>
                                    <p>
                                        Your estimated savings over the last 6 months.
                                    </p>
                                </div>

                                <select defaultValue="6 Months">
                                    <option>3 Months</option>
                                    <option>6 Months</option>
                                    <option>1 Year</option>
                                </select>
                            </div>

                            <div className="monthly-chart">

                                <div className="savings-y-axis">
                                    <span>₹6K</span>
                                    <span>₹5K</span>
                                    <span>₹4K</span>
                                    <span>₹3K</span>
                                    <span>₹2K</span>
                                    <span>₹1K</span>
                                    <span>₹0</span>
                                </div>

                                <div className="savings-chart-area">

                                    <div className="savings-grid-line"></div>
                                    <div className="savings-grid-line"></div>
                                    <div className="savings-grid-line"></div>
                                    <div className="savings-grid-line"></div>
                                    <div className="savings-grid-line"></div>
                                    <div className="savings-grid-line"></div>

                                    <div className="monthly-bars">

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar"
                                                style={{ height: "35%" }}
                                            ></div>
                                            <span>Apr</span>
                                            <strong>₹2.1K</strong>
                                        </div>

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar"
                                                style={{ height: "47%" }}
                                            ></div>
                                            <span>May</span>
                                            <strong>₹2.8K</strong>
                                        </div>

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar"
                                                style={{ height: "55%" }}
                                            ></div>
                                            <span>Jun</span>
                                            <strong>₹3.3K</strong>
                                        </div>

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar"
                                                style={{ height: "62%" }}
                                            ></div>
                                            <span>Jul</span>
                                            <strong>₹3.7K</strong>
                                        </div>

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar"
                                                style={{ height: "72%" }}
                                            ></div>
                                            <span>Aug</span>
                                            <strong>₹4.2K</strong>
                                        </div>

                                        <div className="monthly-column">
                                            <div
                                                className="monthly-bar current"
                                                style={{ height: "82%" }}
                                            ></div>
                                            <span>Sep</span>
                                            <strong>₹4.8K</strong>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Target */}
                        <div className="savings-card target-card">

                            <h2>Monthly Savings Target</h2>
                            <p>Track your progress towards your goal.</p>

                            <div className="target-circle">
                                <div>
                                    <strong>68%</strong>
                                    <span>Completed</span>
                                </div>
                            </div>

                            <div className="target-values">
                                <div>
                                    <span>Saved</span>
                                    <strong>₹4,860</strong>
                                </div>

                                <div>
                                    <span>Target</span>
                                    <strong>₹7,000</strong>
                                </div>
                            </div>

                            <div className="target-progress">
                                <div style={{ width: "68%" }}></div>
                            </div>

                            <p className="target-message">
                                ₹2,140 more to reach your monthly target.
                            </p>

                        </div>

                        {/* Cost Comparison */}
                        <div className="savings-card comparison-card">

                            <h2>Energy Cost Comparison</h2>
                            <p>
                                Compare estimated electricity costs.
                            </p>

                            <div className="comparison-list">

                                <div className="comparison-item">
                                    <div>
                                        <span className="comparison-icon">
                                            ⚡
                                        </span>

                                        <div>
                                            <strong>Without Solar</strong>
                                            <small>Grid electricity</small>
                                        </div>
                                    </div>

                                    <b>₹6,420</b>
                                </div>

                                <div className="comparison-item">
                                    <div>
                                        <span className="comparison-icon solar">
                                            ☀️
                                        </span>

                                        <div>
                                            <strong>With Solar</strong>
                                            <small>Solar + Grid</small>
                                        </div>
                                    </div>

                                    <b>₹1,560</b>
                                </div>

                            </div>

                            <div className="cost-saving">
                                <span>💰</span>
                                <div>
                                    <strong>₹4,860 saved</strong>
                                    <small>Compared to grid-only usage</small>
                                </div>
                            </div>

                        </div>

                        {/* Savings Breakdown */}
                        <div className="savings-card breakdown-card">

                            <h2>Savings Breakdown</h2>
                            <p>Where your savings come from.</p>

                            <div className="breakdown-row">
                                <div>
                                    <span>☀️</span>
                                    <strong>Solar Generation</strong>
                                </div>
                                <b>₹3,520</b>
                            </div>

                            <div className="breakdown-row">
                                <div>
                                    <span>🔋</span>
                                    <strong>Battery Usage</strong>
                                </div>
                                <b>₹840</b>
                            </div>

                            <div className="breakdown-row">
                                <div>
                                    <span>⚡</span>
                                    <strong>Peak Usage Reduction</strong>
                                </div>
                                <b>₹500</b>
                            </div>

                        </div>

                        {/* Tip */}
                        <div className="savings-card tip-card">

                            <div className="tip-icon">💡</div>

                            <div>
                                <h2>Smart Saving Tip</h2>
                                <p>
                                    Run high-energy appliances during peak
                                    solar production hours to maximize your
                                    savings.
                                </p>

                                <span>
                                    Best time: 10 AM – 3 PM
                                </span>
                            </div>

                        </div>

                    </section>

                </main>

                <footer className="savings-footer">
                    AI Smart Solar Energy Management System © 2026
                </footer>

            </div>
        </div>
    );
}

export default Savings;