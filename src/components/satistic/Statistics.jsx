import PropTypes from "prop-types"

import stat from './statistic.module.css'
import { getRandomHexColor } from './getRandomBgCol'

export const Statistics = ({ stats, title }) => {
    return (
    <section className={stat.statistics}>
            {title && (<h2 className="title">Upload stats</h2>)}
        <ul className={stat.statList}>
            {stats.map(({id, label, percentage}) => {
                return (
                    <li style={{ backgroundColor: getRandomHexColor()  }} className={stat.item} key={id}>
                        <span className={stat.label}>{ label }</span>
                        <span className={stat.percentage}>{ percentage }</span>
                    </li>)
                })}

        </ul>
</section>



    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({ id: PropTypes.string, label: PropTypes.string, percentage: PropTypes.number })).isRequired
}