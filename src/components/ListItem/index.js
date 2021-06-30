import React from 'react';
import useStyles from '../../styles/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { defaultList, options } from '../../data';

const ListItem = (props) => {
    const { addIcons, defaultL, total } = props;
    const classes = useStyles();
    const num = 7;

    // const deleteItem = () => {
    //     const index = [...Array(listItem)].indexOf();
    //     if (index > -1) {
    //         [...Array(listItem)].splice(index, 1);
    //     }
    // }

    const getDefList = () => {
        return [...Array(num)].map((_, index) => {
            return <>
                <div className={classes.wrapper} key={index}>
                    <EventNoteRoundedIcon />
                    <div className={classes.textContainer}>
                        <div className={classes.text}>{defaultList.name}</div>
                        <div className={classes.text}>{defaultList.created}</div>
                        <div className={classes.text}>{defaultList.option}</div>
                        <div className={classes.text}>{defaultList.content}</div>
                        <div className={classes.text}></div>
                    </div>
                    {addIcons && <div className={classes.icons}>
                        <EditIcon />
                        <ArchiveIcon />
                        <DeleteIcon />
                    </div>}
                </div>
            </>
        })
    }

    return <>{defaultL && getDefList()}
        <>
            {total && <>{options.map((el, index) => {
                return <div className={classes.wrapper} key={index}>
                    <EventNoteRoundedIcon />
                    <div className={classes.text}>{options[index]}</div>
                    <div className={classes.text}>0</div>
                    <div className={classes.text}>0</div>
                    {addIcons && <div className={classes.icons}>
                        <EditIcon />
                        <ArchiveIcon />
                        <DeleteIcon />
                    </div>}
                </div>
            })}</>}
        </>
    </>
}

export default ListItem;