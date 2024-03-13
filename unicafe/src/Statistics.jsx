import StatisticLine from "./StatisticLine"

const Statistics = ({ good, bad, neutral, all, average, positive }) => {
    if (all === 0) {
        return <p>No feedback given</p>
    } else {
        return (
            <>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            </>
        )
    }
}

export default Statistics