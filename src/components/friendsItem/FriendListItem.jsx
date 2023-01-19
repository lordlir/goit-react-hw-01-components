import PropTypes from "prop-types"
import clsx from 'clsx';
import s from './FriendListItem.module.css'
export const FriendListItem = ({ id, isOnline, avatar, name, }) => {
           return (<li className={s.item} key={id}>
               <span  className = { clsx(s.status ,{ [s.green]:isOnline === true, [s.red]:isOnline === false})}></span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{ name}</p>
            </li>)
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number,
    isOnline: PropTypes.bool.isRequired
}