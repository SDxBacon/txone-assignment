import React from 'react';
import {
  Flex,
  FlexProps,
  Icon,
  MenuToggle,
  useColorMode,
  useColorStyle,
} from '@tonic-ui/react';

const Avatar = (props: FlexProps) => (
  <Flex
    p='1x'
    borderRadius='50%'
    alignItems='center'
    justifyContent='center'
    fontSize='xs'
    lineHeight='1'
    {...props}
  />
);

const AvatarMenuButton = () => {
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode }) as any;
  return (
    <MenuToggle data-testid='avatar-menu-button'>
      <Avatar
        backgroundColor={colorStyle.background.secondary}
        color={colorStyle.color.secondary}
        _hover={{
          color: colorStyle.color.primary,
        }}
      >
        <Icon icon='user-team' size='5x' />
      </Avatar>
    </MenuToggle>
  );
};

export default AvatarMenuButton;
