import React from 'react';
import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  TonicProvider,
  colorStyle,
} from '@tonic-ui/react';
// import components
import AvatarMenuButton from '@components/AvatarMenuButton';
// import .css
import '@src/styles/global.css';

/**
 * App component - The entry component of this react project
 */
function App() {
  return (
    <TonicProvider
      colorMode={{ defaultValue: 'dark' }}
      colorStyle={{ defaultValue: colorStyle }}
      useCSSBaseline // apply` CSS reset and base styles
    >
      {/* 一個 Flexbox 把 Menu 元件包起來置中 */}
      <Flex height='inherit' alignItems='center' justifyContent='center'>
        <Menu>
          {/* MenuButton with Avatar */}
          <AvatarMenuButton />
          {/* MenuList - The layout of the menu is fixed. */}
          <MenuList width='max-content'>
            <MenuItem>
              <Icon icon='settings' mr='2x' />
              <Text>Settings</Text>
            </MenuItem>
            <MenuItem>
              <Icon icon='user-team' mr='2x' />
              <Text>Accounts</Text>
            </MenuItem>
            <MenuItem>
              <Icon icon='lock' mr='2x' />
              <Text>Privacy control</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </TonicProvider>
  );
}

export default App;
