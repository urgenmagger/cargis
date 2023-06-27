import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

export const Collapsible: FC<Props> = ({children, buttonText}) => {
  const [open, setOpen] = useState(false);

  const toggleDetails = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <>
      {open ? <View>{children}</View> : null}
      <TouchableOpacity style={styles.container} onPress={toggleDetails}>
        <Text style={styles.buttonText}>
          {open ? 'View less ' + buttonText : 'View more ' + buttonText}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
