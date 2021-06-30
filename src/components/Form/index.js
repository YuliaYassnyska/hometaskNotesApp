import React, { useState } from 'react';
import useStyles from '../../styles/Form';
import { options } from '../../data';
// import ListItem from '../ListItem';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';

const Form = () => {
    const classes = useStyles();
    const [option, setOption] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState({
        name: '',
        content: '',
        listOfNames: [],
        listOfContents: [],
        listOfOptions: [],
        date: '',
        listOfDates: [],
        noteDate: '',
        listOfNoteDate: []
    })
    const [listItem, setListItem] = useState(0);

    const numOfOptions = options.length;

    const getName = (event) => {
        let values = event.currentTarget.value;
        return (
            setValue({ ...value, name: values })
        )
    }

    const getContent = (e) => {
        let newValue = e.currentTarget.value;
        var valid = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        if (valid.test(newValue) === true) {
            setValue({ ...value, content: newValue, noteDate: newValue })
        } else {
            setValue({ ...value, content: newValue })
        }
    }

    const getOption = () => {
        return options.map((el, index) => {
            return <div
                active={index === numOfOptions}
                key={index}
                onClick={() => {
                    setOption(el);
                    setDropdown(false);
                }}>{el}</div>
        })
    }

    const sumbit = () => {
        var today = new Date();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = months[(today.getMonth() + 1)] + ', ' + today.getDate() + ', ' + today.getFullYear();

        setValue({ ...value, date: date });

        setListItem(listItem + 1);

        var listOfNames = value.listOfNames.push(value.name);
        var listOfContents = value.listOfContents.push(value.content);
        var listOfOptions = value.listOfOptions.push(option);
        var listOfDates = value.listOfDates.push(value.date);
        var listOfNoteDate = value.listOfNoteDate.push(value.noteDate);

        return {
            listOfNames,
            listOfContents,
            listOfOptions,
            listOfDates,
            listOfNoteDate,
            name: '',
            content: ''
        };
    }


    const getListItem = () => {
        const deleteItem = () => {
            const index = [...Array(listItem)].indexOf(item);
            if (index > -1) {
                [...Array(listItem)].splice(index, 1);
            }
        }

        var item = [...Array(listItem)].map((_, index) => {
            // return <ListItem key={index}
            //     name={value.listOfNames[index]}
            //     created={value.date}
            //     option={value.listOfOptions[index]}
            //     content={value.listOfContents[index]}
            //     date={value.noteDate}
            //     addIcons={true}
            //     deleteItem={deleteItem()}
            // />
            return <><div className={classes.wrappers}>
                <EventNoteRoundedIcon />
                <div className={classes.textContainer}>
                    <div className={classes.text}>{value.listOfNames[index]}</div>
                    <div className={classes.text}>{value.date}</div>
                    <div className={classes.text}>{value.listOfOptions[index]}</div>
                    <div className={classes.text}>{value.listOfContents[index]}</div>
                    <div className={classes.text}>{value.noteDate}</div>
                </div><div className={classes.icons}>
                    <EditIcon />
                    <ArchiveIcon />
                    <div onClick={() => {
                        if (index > -1) {
                            value.listOfNames.splice(index, 1) &&
                                value.listOfOptions.splice(index, 1) &&
                                value.listOfContents.splice(index, 1) &&
                                [...Array(listItem)].splice(index, 1)
                        }
                        setListItem(listItem - 1);
                    }}>
                        <DeleteIcon />
                    </div>
                </div>
            </div></>
        })

        return item
    }


    return <div className={classes.container}>
        {getListItem()}
        <div className={classes.wrapper}>
            <div className={classes.line}>
                <div className={classes.title}>Name:</div>
                <input onChange={(event) => getName(event)} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Category:</div>
                <input value={option} onClick={() => {
                    setDropdown(true);
                }} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Content:</div>
                <input onChange={(e) => getContent(e)} />
            </div>
            {dropdown && <div className={classes.dropdown}>{getOption()}</div>}
        </div>
        <button className={classes.button} onClick={() => sumbit()}>Add</button>
    </div>
}

export default Form;