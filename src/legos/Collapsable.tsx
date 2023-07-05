import React, {FC, useEffect} from 'react';
import {View, LayoutAnimation} from 'react-native';

interface Props {
  open?: boolean;
  children: React.ReactNode;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

export const Collapsible: FC<Props> = ({open, children}) => {
  useEffect(() => {
    const animationConfig = {
      duration: 300,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };

    LayoutAnimation.configureNext(animationConfig);
  }, [open]);

  return <>{open ? <View>{children}</View> : null}</>;
};
