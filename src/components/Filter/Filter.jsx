import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ findByFilter, value }) => {
  const onChange = event => {
    const filterValue = event.target.value;
    findByFilter(filterValue);
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  findByFilter: PropTypes.func.isRequired,
};
