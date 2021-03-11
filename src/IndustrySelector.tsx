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



export default function IndustrySelector(props: { onSelectChange: any}){
  const classes = useStyles();
  const { onSelectChange } = props;
  const defaultvalue = industries.find(i => i.name === "Banking");
  return (
    <Autocomplete
      id="industry-select"
      options={industries as IndustryType[]}
      classes={{
        option: classes.option,
      }}
      openOnFocus
      onChange= {onSelectChange}
      autoHighlight
      autoComplete
      autoSelect={true}
      filterSelectedOptions
      defaultValue={defaultvalue}
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

interface IndustryType {
  name: string;
}

const industries = [
  {
  "name": "Automotive"
},
{
"name": "Banking"
},
{
"name": "Consulting"
},
{
"name": "Finance"
},
{
"name": "Healthcare"
},
{
"name": "Media/PR"
},
{
"name": "Retail"
},
{
"name": "Technology"
},
{
"name": "Telecommunication"
},
];
