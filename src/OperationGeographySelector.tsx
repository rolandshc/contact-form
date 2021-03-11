/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import './AutoComplete.css';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});



export default function OperationGeographySelector(props: { onSelectChange: any}) {
  const classes = useStyles();
  const { onSelectChange } = props;
  return (
    <Autocomplete
      id="operation-geography-select"
      options={geographies as GeographyType[]}
      classes={{
        option: classes.option,
      }}
      openOnFocus
      autoHighlight
      onChange= {onSelectChange}
      autoComplete
      autoSelect={true}
      filterSelectedOptions
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

interface GeographyType {
  name: string;
}

const geographies = [
  {
  "name": "National"
},
{
"name": "Regional"
},
{
"name": "Global"
}
];
