import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Props {
  placeholder: string;
}

export const SimpleInput = (props: Props) => {
  const [value, setInputValue] = React.useState('');

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, width: '25ch', height: '30px' }}
      variant="outlined"
    >
      <OutlinedInput
        className="simple-input"
        id="simple-input"
        value={value}
        onChange={handleChange()}
        placeholder={props.placeholder}
        sx={{ py: 0 }}
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faSearch} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
