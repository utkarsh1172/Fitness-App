import {View, Text, Button} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';

const Dropdown = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Text>Hii</Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Dropdown;
