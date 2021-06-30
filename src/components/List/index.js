import React from 'react';
import ListItem from '../ListItem';
import ListHeader from '../ListHeader';

const List = (props) => {
    return <div>
        <ListHeader head={props.head} icons={props.icons} />
        <ListItem addIcons={props.addIcons} defaultL={props.defaultL} total={props.total} />
    </div>
}

export default List;