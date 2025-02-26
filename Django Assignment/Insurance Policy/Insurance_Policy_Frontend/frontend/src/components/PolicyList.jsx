import React, { useState, useEffect } from "react";
import axios from "axios";

const PolicyList = () => {
    const [policies, setPolicies] = useState([]);
    const [search, setSearch] = useState("");
    const [policyType, setPolicyType] = useState("");
    const [minPremium, setMinPremium] = useState("");
    const [maxPremium, setMaxPremium] = useState("");
    const [minCoverage, setMinCoverage] = useState("");
    const [maxCoverage, setMaxCoverage] = useState("");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const fetchPolicies = async () => {
            const params = new URLSearchParams();
            if (search) params.append("search", search);
            if (policyType) params.append("policy_type", policyType);
            if (minPremium) params.append("premium__gte", minPremium);
            if (maxPremium) params.append("premium__lte", maxPremium);
            if (minCoverage) params.append("coverage_amount__gte", minCoverage);
            if (maxCoverage) params.append("coverage_amount__lte", maxCoverage);
            if (sortBy) params.append("ordering", sortBy);

            const response = await axios.get(`/api/policies/?${params.toString()}`);
            setPolicies(response.data);
        };

        fetchPolicies();
    }, [search, policyType, minPremium, maxPremium, minCoverage, maxCoverage, sortBy]);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Insurance Policies</h2>

            {/* Filter Controls */}
            <div style={styles.filterContainer}>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />

                <select value={policyType} onChange={(e) => setPolicyType(e.target.value)} style={styles.select}>
                    <option value="">All Types</option>
                    <option value="Health">Health</option>
                    <option value="Auto">Auto</option>
                    <option value="Life">Life</option>
                </select>

                <input
                    type="number"
                    placeholder="Min Premium"
                    value={minPremium}
                    onChange={(e) => setMinPremium(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Max Premium"
                    value={maxPremium}
                    onChange={(e) => setMaxPremium(e.target.value)}
                    style={styles.input}
                />

                <input
                    type="number"
                    placeholder="Min Coverage"
                    value={minCoverage}
                    onChange={(e) => setMinCoverage(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Max Coverage"
                    value={maxCoverage}
                    onChange={(e) => setMaxCoverage(e.target.value)}
                    style={styles.input}
                />

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={styles.select}>
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="premium">Premium</option>
                    <option value="-premium">Premium (Descending)</option>
                    <option value="coverage_amount">Coverage Amount</option>
                    <option value="-coverage_amount">Coverage Amount (Descending)</option>
                </select>
            </div>

            {/* Table */}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Premium</th>
                        <th>Coverage</th>
                    </tr>
                </thead>
                <tbody>
                    {policies.length > 0 ? (
                        policies.map((policy) => (
                            <tr key={policy.id}>
                                <td>{policy.name}</td>
                                <td>{policy.policy_type}</td>
                                <td>{policy.premium}</td>
                                <td>{policy.coverage_amount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No policies found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    },
    heading: {
        marginBottom: "20px",
    },
    filterContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "150px",
    },
    select: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "160px",
    },
    table: {
        width: "80%",
        margin: "0 auto",
        borderCollapse: "collapse",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    th: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px",
    },
    td: {
        border: "1px solid #ddd",
        padding: "10px",
    },
};

export default PolicyList;

