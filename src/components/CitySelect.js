import React, {useState, useEffect, useRef} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CitySelect = (props) => {
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" style={props.style}>
            <InputLabel ref={inputLabel}>
                City
            </InputLabel>
            <Select
                value={props.value}
                onChange={props.onChange}
                labelWidth={labelWidth}
            >
                {props.options.map((o) => <MenuItem value={o.value}>{o.value}</MenuItem>)}
            </Select>
        </FormControl>
    )
};

export default CitySelect;